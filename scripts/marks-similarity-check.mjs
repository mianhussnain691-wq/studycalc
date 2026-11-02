// Pairwise text-similarity check across the four marks-out-of-N pages.
// Fetches the live production build, strips nav/footer/script/style, and
// compares visible body text with 5-word shingles. Reports both Jaccard
// similarity and overlap coefficient (shared / smaller page's shingle
// count) — overlap coefficient is the more direct answer to "what % of
// this page's text also appears on that one."
import fs from "fs";

const BASE = "http://localhost:3070";
const PAGES = [
  "/marks-out-of-400-percentage",
  "/marks-out-of-500-percentage",
  "/marks-out-of-600-percentage",
  "/marks-out-of-1100-percentage",
];

function stripTag(html, tag) {
  const re = new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi");
  return html.replace(re, "");
}

function getVisibleText(html) {
  let h = html;
  h = stripTag(h, "script");
  h = stripTag(h, "style");
  h = stripTag(h, "nav");
  h = stripTag(h, "footer");
  h = h.replace(/<!--[\s\S]*?-->/g, "");
  return h
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/gi, "'")
    .replace(/&#8217;|&rsquo;/gi, "'")
    .replace(/&#8216;|&lsquo;/gi, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
}

function shingles(text, n = 5) {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}

function overlap(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return {
    sharedCount: inter,
    jaccard: union === 0 ? 0 : inter / union,
    overlapCoefficient: Math.min(a.size, b.size) === 0 ? 0 : inter / Math.min(a.size, b.size),
  };
}

async function main() {
  const data = {};
  for (const path of PAGES) {
    const res = await fetch(`${BASE}${path}`);
    const html = await res.text();
    const text = getVisibleText(html);
    data[path] = { text, words: text.split(/\s+/).filter(Boolean).length, shingleSet: shingles(text) };
  }

  console.log("Page word counts:");
  for (const p of PAGES) console.log(`  ${p}: ${data[p].words} words, ${data[p].shingleSet.size} unique 5-word shingles`);
  console.log("");

  const results = [];
  for (let i = 0; i < PAGES.length; i++) {
    for (let j = i + 1; j < PAGES.length; j++) {
      const a = PAGES[i], b = PAGES[j];
      const { sharedCount, jaccard, overlapCoefficient } = overlap(data[a].shingleSet, data[b].shingleSet);
      results.push({ a, b, sharedCount, jaccard, overlapCoefficient });
    }
  }

  results.sort((x, y) => y.overlapCoefficient - x.overlapCoefficient);
  console.log("Pairwise shared-text (5-word shingle overlap):");
  for (const r of results) {
    const flag = r.overlapCoefficient > 0.6 ? " ⚠️ OVER 60%" : "";
    console.log(
      `  ${r.a}  <->  ${r.b}: overlap coefficient ${(r.overlapCoefficient * 100).toFixed(1)}%, jaccard ${(r.jaccard * 100).toFixed(1)}%, ${r.sharedCount} shared shingles${flag}`
    );
  }

  fs.writeFileSync("marks-similarity-output.json", JSON.stringify({ pages: Object.fromEntries(PAGES.map(p => [p, { words: data[p].words, shingles: data[p].shingleSet.size }])), results }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
