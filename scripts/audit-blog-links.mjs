import fs from "fs";

const files = fs.readdirSync("content").filter((f) => f.endsWith(".mdx"));
const validSlugs = new Set(files.map((f) => f.replace(/\.mdx$/, "")));

// All known site routes we can plausibly link to (tools + articles + static).
const toolsSrc = fs.readFileSync("src/data/tools.js", "utf8");
const toolHrefs = [...toolsSrc.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
const articlesSrc = fs.readFileSync("src/data/articles.js", "utf8");
const articleSlugs = [...articlesSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => "/" + m[1]);
const staticRoutes = ["/", "/guides", "/blog", "/calculators", "/about", "/contact", "/privacy-policy", "/terms", "/disclaimer", "/cookie-policy", "/embed-calculators"];
const knownRoutes = new Set([...toolHrefs, ...articleSlugs, ...staticRoutes]);

let issues = 0;
for (const f of files) {
  const slug = f.replace(/\.mdx$/, "");
  const src = fs.readFileSync("content/" + f, "utf8");

  // Check FAQ heading format
  const hasFaqHeading = /^##\s+.*(frequently asked questions|faqs?)\b/im.test(src);
  if (!hasFaqHeading) {
    console.log(slug, "-> MISSING FAQ HEADING");
    issues++;
  }

  // Extract all markdown links [text](url)
  const links = [...src.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((m) => ({ text: m[1], url: m[2] }));
  for (const { url } of links) {
    if (url.startsWith("http")) continue; // external, skip
    if (url.startsWith("/blog/")) {
      const targetSlug = url.replace("/blog/", "");
      if (!validSlugs.has(targetSlug)) {
        console.log(slug, `-> BROKEN RELATED-READ LINK: ${url}`);
        issues++;
      }
    } else if (url.startsWith("/")) {
      if (!knownRoutes.has(url)) {
        console.log(slug, `-> UNKNOWN ROUTE LINK: ${url}`);
        issues++;
      }
    }
  }
}
console.log("\nChecked", files.length, "files | Issues:", issues);
