import { defineConfig } from "vite";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import ejs from "ejs";
import fs from "fs";
import pageData from "./page-data.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PAGES = [
  "index",
  "airport-pickups",
  "casual-events",
  "corporate-events",
  "formal-celebrations",
  "safe-driver-pickup",
  "privacy-policy",
  "tos",
];

const SRC   = resolve(__dirname, "src");
const STAGE = resolve(__dirname, ".vite-staging");

// ── Pre-render all EJS pages to clean HTML in .vite-staging/ ─────────────────
// Copies the entire src/ tree, then renders each page template with its data.
// Vite operates on the staged files — no EJS syntax ever reaches parse5.
async function renderAll() {
  fs.cpSync(SRC, STAGE, { recursive: true, force: true });
  for (const page of PAGES) {
    const src  = resolve(SRC, `${page}.html`);
    const out  = resolve(STAGE, `${page}.html`);
    const data = pageData[page] ?? {};
    const html = await ejs.renderFile(src, data, { filename: src });
    fs.writeFileSync(out, html, "utf-8");
  }
}

export default defineConfig({
  // Vite root points at the staged (pre-rendered) files, not src/
  root: STAGE,

  build: {
    outDir:    resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        PAGES.map((p) => [p, resolve(STAGE, `${p}.html`)])
      ),
    },
  },

  plugins: [
    {
      name: "ejs-pre-render",

      // Build mode: render before Vite reads any HTML
      async buildStart() {
        await renderAll();
      },

      // Dev mode: render on every incoming HTML page request
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          const urlPath = (req.url ?? "/").split("?")[0];
          const page = urlPath
            .replace(/^\//, "")
            .replace(/\/$/, "")
            .replace(/\.html$/, "") || "index";
          if (PAGES.includes(page)) {
            await renderAll();
          }
          next();
        });
      },
    },
  ],
});
