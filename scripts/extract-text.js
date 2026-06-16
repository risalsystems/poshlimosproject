/**
 * extract-text.js
 *
 * Renders all EJS pages and extracts clean plain text from each one.
 *
 * Usage:
 *   node scripts/extract-text.js              → prints to console
 *   node scripts/extract-text.js --json       → JSON output
 *   node scripts/extract-text.js --out out.txt → writes to file
 */

import { renderAll, PAGES, STAGE } from './render-ejs.js';
import fs from 'fs';
import { resolve } from 'path';

// Named HTML entities that appear in the site content
const ENTITIES = {
  '&amp;': '&',  '&lt;': '<',   '&gt;': '>',   '&quot;': '"',
  '&apos;': "'", '&nbsp;': ' ', '&mdash;': '—', '&ndash;': '–',
  '&hellip;': '…', '&copy;': '©', '&reg;': '®',  '&trade;': '™',
  '&laquo;': '«', '&raquo;': '»',
};

function htmlToText(html) {
  return html
    // Drop entire blocks that contribute no readable content
    .replace(/<(script|style|noscript|head)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    // Block-level tags → newline so paragraphs don't run together
    .replace(/<\/?(p|div|section|article|header|footer|nav|h[1-6]|li|tr|br|hr)[^>]*>/gi, '\n')
    // Strip all remaining tags
    .replace(/<[^>]+>/g, '')
    // Decode named entities
    .replace(/&[a-z]+;/gi, (m) => ENTITIES[m] ?? m)
    // Decode numeric entities  &#160; etc.
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    // Normalise whitespace
    .replace(/[ \t]+/g, ' ')
    .replace(/ \n/g, '\n')
    .replace(/\n /g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Render EJS → .vite-staging/ then read each page
await renderAll({ googleMapsKey: process.env.GOOGLE_MAPS_API_KEY || '' });

const results = {};
for (const page of PAGES) {
  const html = fs.readFileSync(resolve(STAGE, `${page}.html`), 'utf-8');
  results[page] = htmlToText(html);
}

// ── Output ──────────────────────────────────────────────────────────────────
const asJson  = process.argv.includes('--json');
const outFlag = process.argv.indexOf('--out');
const outFile = outFlag !== -1 ? process.argv[outFlag + 1] : null;

let output;

if (asJson) {
  output = JSON.stringify(results, null, 2);
} else {
  const divider = '='.repeat(60);
  output = Object.entries(results)
    .map(([page, text]) => `${divider}\n${page.toUpperCase()}\n${divider}\n\n${text}`)
    .join('\n\n');
}

if (outFile) {
  fs.writeFileSync(outFile, output, 'utf-8');
  console.log(`Wrote ${Object.keys(results).length} pages → ${outFile}`);
} else {
  console.log(output);
}
