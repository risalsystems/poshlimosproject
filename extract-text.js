import { readFileSync, writeFileSync } from "fs";
import { globSync } from "glob";
import { JSDOM } from "jsdom";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Requires JSDOM and glob packages: npm install jsdom glob
// This script extracts visible text from HTML files in the dist directory and writes it to a text file.
// Run from the project root after building: node tools.js

function extractVisibleText(html) {
  const dom = new JSDOM(html);
  const doc = dom.window.document;

  // Scope to <main> if available, otherwise body
  const root = doc.querySelector("main") ?? doc.body;
  if (!root) return "";

  const walker = doc.createTreeWalker(root, dom.window.NodeFilter.SHOW_TEXT);
  let text = "";
  let node;

  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent) continue;

    const tag = parent.tagName?.toLowerCase();
    if (tag === "script" || tag === "style") continue;

    // Only check inline styles — JSDOM computed styles aren't reliable for external CSS
    const inlineDisplay = parent.style.display;
    const inlineVisibility = parent.style.visibility;
    if (inlineDisplay === "none" || inlineVisibility === "hidden") continue;

    const t = node.textContent.trim();
    if (t) text += t + "\n";
  }

  return text.trim();
}

const files = globSync("dist/**/*.html");
const lines = [];

for (const file of files) {
  const pageName = path.relative("dist", file).replace(/index\.html$/, "") || "/";
  const html = readFileSync(file, "utf8");
  const text = extractVisibleText(html);
  if (text) {
    lines.push(`\n# ${pageName}\n`);
    lines.push(text);
  }
}

const projectName = path.basename(process.cwd());
const outputFileName = `${projectName}-content.txt`;
writeFileSync(path.join(__dirname, outputFileName), lines.join("\n"), "utf8");
console.log(`Done — ${files.length} pages written to ${outputFileName}`);