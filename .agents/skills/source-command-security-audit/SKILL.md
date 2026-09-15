---
name: "source-command-security-audit"
description: "Migrated source command `security-audit`"
---

# source-command-security-audit

Use this skill when the user asks to run the migrated source command `security-audit`.

## Command Template

You are performing a security audit of the Posh Limousines of Atlanta website — a Vite SSG project hosted on Netlify with serverless functions. Run all checks below, then produce a structured report.

---

## 1. XSS Sinks

Grep the `src/` directory for dangerous DOM write patterns:
- `innerHTML`, `outerHTML`, `document.write`, `insertAdjacentHTML`
- `eval(`, `new Function(`, `setTimeout("`, `setInterval("`

For each hit: note the file, line, and whether the value comes from user input, a third-party API response, or a hardcoded string. Flag user-controlled or third-party-controlled values as HIGH; hardcoded strings as LOW (style only).

---

## 2. Secrets & Credentials

Grep all `.html`, `.js`, `.mjs`, `.ts`, `.json`, `.toml`, `.css` files (excluding `node_modules`, `dist`, `.vite-staging`) for:
- Patterns matching API keys: `AIza`, `sk-`, `pk_live_`, `Bearer `, `api_key`, `apiKey`, `secret`, `password`, `token`
- Any 20+ character alphanumeric strings adjacent to those labels

Also run: `git log --all --oneline -- "*.env" "**/.env"` to check whether a `.env` file was ever committed to git history.

Flag any hits. The Google Maps key (`GOOGLE_MAPS_API_KEY`) should only appear in `.env` and in the EJS-rendered `<script src>` tag — not in `.js` source files.

---

## 3. Content Security Policy

Read `netlify.toml`. Extract the full `Content-Security-Policy` value and evaluate each directive:

- `default-src` — should be `'self'`
- `script-src` — list all allowed origins; flag `'unsafe-eval'`; note `'unsafe-inline'` as MEDIUM (improvement path: move inline scripts to external files)
- `style-src` — same review
- `frame-src` — should only allow `https://calendly.com` (no wildcards)
- `object-src` — should be `'none'`
- `base-uri` — should be `'self'`
- `connect-src` — verify all external fetch targets are listed
- Any missing directives (e.g. `form-action`, `upgrade-insecure-requests`)

---

## 4. Security Headers

Read `netlify.toml`. Verify these headers are present for `/*`:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Content-Security-Policy`

Flag any missing. Note that `Strict-Transport-Security` (HSTS) is handled by Netlify automatically for custom domains.

---

## 5. Netlify Functions (Server-Side)

Read every `.mjs` / `.js` file under `netlify/functions/`. For each function check:

- **Input validation** — are all user-supplied values parsed and clamped/validated before use?
- **Method guard** — does it reject non-POST/non-GET requests with 405?
- **CORS** — is `Access-Control-Allow-Origin` restricted to the production domain (not `*`)?
- **Error handling** — does a thrown error leak a stack trace in the response body?
- **Output** — does any response echo back raw user input into a string that could be interpreted as HTML?

---

## 6. Dependency Vulnerabilities

Run `npm audit --json` and summarize:
- Count of critical / high / moderate / low findings
- Package names and brief description for any critical or high findings
- Whether a fix is available (`npm audit fix`)

---

## 7. Form Inputs & Data Handling

Grep `src/` for `<form`, `<input`, `<textarea`, `<select` elements. For each form:
- Is there a `method` attribute? (GET forms expose data in URL)
- Is any value reflected back into the DOM after submission without sanitization?
- Does the contact form POST to a third-party service or a Netlify function? Identify the endpoint.

---

## 8. Open Redirects

Grep for `window.location`, `location.href`, `location.replace`, `document.location` in `src/`. Flag any case where the redirect target is built from URL parameters or user input.

---

## 9. Third-Party Scripts

List every external `<script src>` and `<link rel="stylesheet" href>` loaded in `src/partials/layout_start.html` and any individual page. For each:
- Domain
- Whether it is on the CSP allowlist
- Whether Subresource Integrity (`integrity` attribute) is present — flag absent SRI as LOW

---

## Report Format

Produce a structured report with these sections. Use severity labels:

- **CRITICAL** — exploitable now, no user interaction required
- **HIGH** — likely exploitable, requires some condition
- **MEDIUM** — defense-in-depth gap or unsafe pattern without current exploit path
- **LOW** — best-practice improvement, low real-world risk
- **PASS** — checked and clean

Each finding:
```
[SEVERITY] Category — File:line (if applicable)
Description: what the issue is
Recommendation: specific fix
```

End with a one-paragraph overall assessment and a prioritized fix list.
