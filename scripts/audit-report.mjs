// Builds the final adsense-audit.md table from audit-crawl-output.json plus
// tools.js/articles.js for page-type classification.
import fs from "fs";
import tools from "../src/data/tools.js";
import { articles } from "../src/data/articles.js";

const d = JSON.parse(fs.readFileSync("audit-crawl-output.json", "utf8"));

const toolSlugs = new Set(tools.map((t) => t.href));
const articleSlugs = new Set(articles.map((a) => `/${a.slug}`));

function classify(url) {
  const path = url.replace("https://www.studycalc.co", "") || "/";
  if (path === "/") return "home";
  if (path.startsWith("/blog")) return "blog article";
  if (toolSlugs.has(path)) return "calculator";
  if (articleSlugs.has(path)) return "guide/article";
  if (["/about", "/contact", "/privacy-policy", "/terms", "/disclaimer", "/cookie-policy"].includes(path)) return "legal/info";
  if (["/calculators", "/guides"].includes(path)) return "index/hub";
  return "other";
}

const rows = d.pages.map((p) => {
  const type = classify(p.url);
  const thin = p.words > 0 && p.words < 300;
  return {
    url: p.url.replace("https://www.studycalc.co", "") || "/",
    type,
    words: p.words,
    thin,
    hasFormula: p.hasFormula,
    hasWorkedExample: p.hasWorkedExample,
    hasFaq: p.hasFaqSchema,
    faqCount: p.faqQuestionCount,
    hasSources: p.hasSourcesBlock,
    hasBreadcrumb: p.hasBreadcrumb,
    status: p.status,
  };
});

let md = `# AdSense Readiness Audit\n\nGenerated from a live crawl of the production build (62 sitemap URLs, fetched 2026-11-02). Word counts are of visible body text only (scripts/styles/HTML stripped), fetched without JS execution — i.e. exactly what a non-JS crawler sees.\n\n`;

md += `## Full page table\n\n`;
md += `| URL | Type | Words | Formula | Worked Ex. | FAQ (schema) | Sources | Breadcrumb | Status |\n`;
md += `|---|---|---|---|---|---|---|---|---|\n`;
for (const r of rows) {
  md += `| ${r.url} | ${r.type} | ${r.words}${r.thin ? " ⚠️THIN" : ""} | ${r.hasFormula ? "✓" : "—"} | ${r.hasWorkedExample ? "✓" : "—"} | ${r.hasFaq ? `✓ (${r.faqCount})` : "—"} | ${r.hasSources ? "✓" : "—"} | ${r.hasBreadcrumb ? "✓" : "—"} | ${r.status} |\n`;
}

fs.writeFileSync("audit-table.md", md);
console.log("Wrote audit-table.md, " + rows.length + " rows.");
