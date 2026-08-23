# DESIGN — Posh Limousines of Atlanta

> Technical companion to [build.md](build.md). Where BUILD.md is "how to run/build this," DESIGN.md is "why it's shaped this way" — architecture, data flow, and the decisions behind the fare calculator, third-party integrations, and security posture.

---

## System overview

```mermaid
graph LR
    subgraph Build time
        SRC[src/*.html + partials] -->|EJS render| STAGE[.vite-staging/]
        DATA[page-data.js] -->|per-page metadata| STAGE
        STAGE -->|Vite bundle| DIST[dist/]
    end

    subgraph Runtime — browser
        DIST -->|served by| NETLIFY[Netlify CDN]
        RATES[rates.html] -->|Places Autocomplete| GMAPS_JS[Maps JS API]
        RATES -->|POST addresses| FN
    end

    subgraph Runtime — server
        FN[calculate-fare.mjs\nNetlify Function] -->|Routes API| ROUTES[routes.googleapis.com]
        FN -->|fallback| DIRECTIONS[Directions API legacy]
    end

    NETLIFY --> RATES
```

The site is a **static-first architecture with one dynamic edge**: every page is pre-rendered HTML served from Netlify's CDN, except the fare calculator on `rates.html`, which calls a single serverless function for real-time pricing. There is no database, no CMS, and no server-rendered request path for content — content changes require a rebuild.

---

## Why EJS + Vite instead of a framework

The site has 12 largely-static marketing pages sharing a common shell (nav/footer/head) plus per-page SEO metadata and JSON-LD. That's a templating problem, not an application-state problem — there's no client-side routing, no shared reactive state across pages, and no component tree deep enough to justify React/Vue/Svelte's overhead.

EJS handles the "one shell, many pages, different metadata" need directly via includes and `page-data.js`. Vite is used purely as the asset bundler/dev server (hashing, minification, HMR) — see [build.md § How the EJS + Vite SSG integration works](build.md#how-the-ejs--vite-ssg-integration-works) for the staging-directory mechanics that make EJS and Vite cooperate.

**Trade-off accepted:** no component reuse across pages beyond copy-paste + partials, and any interactive widget (like the fare calculator) has to be hand-written vanilla JS rather than a framework component. For this site's scope — mostly static content plus one interactive form — that trade-off favors simplicity and a near-zero JS payload over framework ergonomics.

---

## Data flow: a fare quote, end to end

This is the one genuinely dynamic path in the site, so it's worth tracing in full.

1. **User types an address** into one of the pickup/dropoff/stop fields on `rates.html`. Each field is backed by a `google.maps.places.PlaceAutocompleteElement` (the *New* Places library — chosen over the legacy `Autocomplete` widget because it's what Google now recommends and bills at the New Places API rate, not the deprecated one).
2. **On selection**, `rates.html`'s inline script resolves the chosen place's `formattedAddress` (preferring the free `placePrediction.text` over a billed `fetchFields()` call when possible — see `attachAC()` in `rates.html`), and stores it in local `addrState`.
3. **`autoCalculate()`** POSTs `{ pickup, dropoff, stops, time, useHotLane, useMeetGreet }` to `/.netlify/functions/calculate-fare`.
4. **`calculate-fare.mjs`** does two rounds of routing per request:
   - One **optimized** multi-stop route (pickup → stops → dropoff, waypoint-optimized) to get real total distance/duration.
   - One **direct** leg from pickup to *each* stop individually (unoptimized), run in parallel via `Promise.all`, purely to price each stop's distance independently of route order. This is why the function makes `1 + N` routing calls for a trip with N stops, not 1 — see [`calculate-fare.mjs`](netlify/functions/calculate-fare.mjs#L205-L222).
5. Each routing call tries **Routes API** first (`routes.googleapis.com/directions/v2:computeRoutes`), and falls back to the **legacy Directions API** only if that errors — not because Directions is preferred, but as resilience against outages/quota issues on the newer API. If neither works, the function surfaces a 502 with both error messages rather than silently guessing.
6. **Pricing** is applied entirely server-side (constants at the top of `calculate-fare.mjs`) so the client never computes or can tamper with fare math — the browser only renders whatever line items the function returns.
7. **Response** — line items array + low/high estimate range (subtotal ± 5%/10%, not a hard quote) — is rendered back into the page.

### Why server-side pricing at all, for a static site?

Two reasons drove pulling this out of client JS and into a function:
- **Integrity** — pricing constants and Google API keys shouldn't be inspectable/editable in browser dev tools.
- **Key protection** — `GOOGLE_MAPS_API_KEY` used for Routes/Directions calls never reaches the browser; only the separate, domain-restricted Maps JavaScript API key (injected via EJS into the `<script src="maps/api/js?key=...">` tag) is client-visible, and that one is meant to be public-but-restricted per Google's own guidance.

### Free-stop logic

The first stop at or under `FREE_STOP_MI` (2 miles) from its direct-leg measurement is comped; every stop after that (regardless of distance) is charged `STOP_FEE`. This is why the direct-leg-per-stop measurement in step 4 exists — free-stop eligibility is about distance-from-start, not position in the optimized route.

---

## Third-party integration boundaries

| Integration | Trust boundary | Failure mode |
|---|---|---|
| **Google Maps Platform** | Server calls use a private key (env var, never shipped to client); client Places widget uses a separate key restricted to this domain | Routes API failure → Directions API fallback → explicit 502 (no silent wrong-price fallback once a key exists) |
| **Calendly** | Fully client-side widget, no data flows through this site's infrastructure | Widget script load failure just means the popup button silently does nothing — no error surfaced to user today |
| **Web3Forms** | Contact form POSTs directly from browser to `api.web3forms.com`; no server-side proxy | Handled with explicit loading/success/error UI states in `script.js` |
| **Google Analytics** | Client-side tag only | N/A — non-critical path |

All of the above origins are enumerated in `netlify.toml`'s CSP (`script-src`/`connect-src`/`img-src`) — this is the enforcement point that keeps the integration surface auditable. Adding a new external service means adding it to that CSP, which acts as a natural checklist for "what does this site actually talk to."

---

## Security posture

- **CSP-first**: `netlify.toml` defines a restrictive `Content-Security-Policy` (`default-src 'self'`, explicit allow-list per directive) rather than relying on framework defaults. `'unsafe-inline'` is currently required for `script-src`/`style-src` because EJS templates and Calendly/GA snippets are inlined — the CSP comment itself flags this as a known trade-off to revisit (move to nonce-based CSP once inline scripts are extracted).
- **CORS allow-list**: `calculate-fare.mjs` only accepts requests with an `Origin` matching `ALLOWED_ORIGINS` (the two canonical site domains) — see `corsHeaders()` in the function.
- **No secrets in the client bundle**: verified by convention — `GOOGLE_MAPS_API_KEY` should only ever appear in `.env` and the one EJS-rendered `<script src>` tag on `rates.html`, never in a `.js` source file (this is explicitly checked by the `security-audit` command).
- **Input bounds on the legacy fare-calc path**: when the legacy `miles`/`tripDurationMins`/`paidStops`/`stopMiles` fields are used instead of addresses, each is clamped to a sane range (`Math.min(500, ...)`, etc.) before being priced, since that path accepts client-supplied numbers directly rather than deriving them from Google's routing response.

---

## Known trade-offs / things a future change should be aware of

- **`'unsafe-inline'` in CSP** — accepted for now because EJS partials and third-party widget snippets are inline by nature; tightening this requires externalizing those scripts first.
- **Legacy request shape in `calculate-fare.mjs`** — the function still accepts pre-computed `miles`/`stopMiles`/etc. instead of addresses, bypassing Google entirely. This exists for backward compatibility with an earlier calculator implementation; whether any live caller still uses it (versus always sending addresses now) hasn't been re-verified since `rates.html` was rebuilt around addresses.
- **No `.env.example`** — the only required variable (`GOOGLE_MAPS_API_KEY`) is documented in `build.md`, but a new developer has to create `.env` from scratch rather than copying a template.
- **Single global JS/CSS entry point** — `script.js`/`style.css` ship to every page even though most of their logic (dropdown, FAQ accordion, contact form) only applies to a subset of pages. Acceptable at this size; would need splitting if the site's interactive surface grows substantially.
