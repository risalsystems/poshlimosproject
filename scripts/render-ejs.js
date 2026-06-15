import ejs from "ejs";
import fs from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import pageData from "../page-data.js";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const PAGES = [
  "index",
  "airport-transfers",
  "casual-events",
  "corporate-events",
  "formal-celebrations",
  "safe-driver-pickup",
  "signature-accounts",
  "posh-preferred",
  "privacy-policy",
  "tos",
  "about",
  "rates",
];

export const SRC = resolve(__dirname, "../src");
export const STAGE = resolve(__dirname, "../.vite-staging");

export async function renderAll({ googleMapsKey = "" } = {}) {
  fs.cpSync(SRC, STAGE, { recursive: true, force: true });
  for (const page of PAGES) {
    const src = resolve(SRC, `${page}.html`);
    const out = resolve(STAGE, `${page}.html`);
    const data = { ...(pageData[page] ?? {}), googleMapsKey };
    const html = await ejs.renderFile(src, data, { filename: src });
    fs.writeFileSync(out, html, "utf-8");
  }
}

// Run directly: node scripts/render-ejs.js
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await renderAll({ googleMapsKey: process.env.GOOGLE_MAPS_API_KEY || "" });
  console.log(`Rendered ${PAGES.length} pages → .vite-staging/`);
}
