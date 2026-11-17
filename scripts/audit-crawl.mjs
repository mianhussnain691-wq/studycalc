// One-shot crawl script for the AdSense readiness audit (Sprint 3 Task A)
// and parts of the ranking-drop diagnosis (Task B). Fetches the live
// production build on localhost, not static analysis — so word counts,
// schema presence, and link health reflect what a crawler would actually
// see. Not committed as a permanent tool; scratch script for this audit.
import fs from "fs";

const BASE = "http://localhost:3060";

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
  // Our Navbar/Footer aren't always semantic <nav>/<footer> tags in every
  // layout; also strip by common wrapper if present (best-effort only).
  h = h.replace(/<!--[\s\S]*?-->/g, "");
  const text = h
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/gi, "'")
    .replace(/&#8217;|&rsquo;/gi, "’")
    .replace(/&#8216;|&lsquo;/gi, "‘")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim();
  return text;
}

function wordCount(text) {
  if (!text) return 0;
  return text.split(/\s+/).filter(Boolean).length;
}

function extractAll(html, re) {
  const out = [];
  let m;
  const r = new RegExp(re, "gi");
  while ((m = r.exec(html))) out.push(m[1]);
  return out;
}

function getTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? m[1].trim() : null;
}

function getMetaDescription(html) {
  const m = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)
    || html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  return m ? m[1] : null;
}

function getCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i);
  return m ? m[1] : null;
}

function getH1s(html) {
  return extractAll(html, '<h1[^>]*>([\\s\\S]*?)<\\/h1>').map((h) => getVisibleText(h));
}

function hasNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

function getJsonLdBlocks(html) {
  const blocks = extractAll(html, '<script type="application\\/ld\\+json"[^>]*>([\\s\\S]*?)<\\/script>');
  return blocks
    .map((b) => {
      try {
        return JSON.parse(b);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function getInternalLinks(html, pageUrl) {
  const hrefs = extractAll(html, 'href=["\']([^"\']+)["\']');
  const out = new Set();
  for (const href of hrefs) {
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
    if (href.startsWith("http") && !href.startsWith(BASE) && !href.includes("studycalc.co")) continue; // external
    let abs;
    try {
      abs = new URL(href, pageUrl).toString();
    } catch {
      continue;
    }
    if (!abs.startsWith(BASE) && !abs.includes("studycalc.co")) continue;
    // normalize to BASE origin
    const u = new URL(abs);
    u.protocol = "http:";
    u.host = "localhost:3060";
    u.hash = "";
    out.add(u.toString());
  }
  return [...out];
}

function shingles(text, n = 5) {
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + n <= words.length; i++) {
    set.add(words.slice(i, i + n).join(" "));
  }
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

async function main() {
  console.log("Fetching sitemap...");
  const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
  const sitemapXml = await sitemapRes.text();
  const urls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  console.log(`Sitemap has ${urls.length} URLs.`);

  const pages = [];
  for (const url of urls) {
    const localUrl = url.replace("https://www.studycalc.co", BASE);
    let res, html;
    try {
      res = await fetch(localUrl);
      html = await res.text();
    } catch (e) {
      pages.push({ url, status: "FETCH_ERROR", error: String(e) });
      continue;
    }

    const visibleText = getVisibleText(html);
    const words = wordCount(visibleText);
    const jsonLd = getJsonLdBlocks(html);
    const faqSchema = jsonLd.find((j) => j["@type"] === "FAQPage");
    const breadcrumbSchema = jsonLd.find((j) => j["@type"] === "BreadcrumbList");
    const title = getTitle(html);
    const description = getMetaDescription(html);
    const canonical = getCanonical(html);
    const h1s = getH1s(html);
    const noindex = hasNoindex(html);
    const internalLinks = getInternalLinks(html, localUrl);

    // FAQ schema vs visible FAQ match check
    let faqMismatch = null;
    if (faqSchema && Array.isArray(faqSchema.mainEntity)) {
      const schemaQuestions = faqSchema.mainEntity.map((q) => q.name);
      const missingFromVisible = schemaQuestions.filter(
        (q) => !visibleText.includes(getVisibleText(q).slice(0, 25))
      );
      if (missingFromVisible.length > 0) {
        faqMismatch = `${missingFromVisible.length}/${schemaQuestions.length} schema questions not found verbatim in visible text`;
      }
    }

    pages.push({
      url,
      localUrl,
      status: res.status,
      words,
      hasFormula: /\bformula\b/i.test(visibleText),
      hasWorkedExample: /worked example/i.test(visibleText),
      hasFaqSchema: Boolean(faqSchema),
      faqQuestionCount: faqSchema ? faqSchema.mainEntity?.length ?? 0 : 0,
      faqMismatch,
      hasBreadcrumb: Boolean(breadcrumbSchema),
      hasSourcesBlock: /how we calculate this/i.test(visibleText),
      title,
      titleLen: title ? title.length : 0,
      description,
      descLen: description ? description.length : 0,
      canonical,
      canonicalOk: canonical === url,
      h1Count: h1s.length,
      h1Text: h1s[0] || null,
      noindex,
      internalLinks,
      shingleSet: shingles(visibleText),
    });
    process.stdout.write(".");
  }
  console.log("\nDone fetching. Analyzing...\n");

  // --- THIN page detection ---
  const thin = pages.filter((p) => p.status === 200 && p.words > 0 && p.words < 300);

  // --- Near-duplicate detection (pairwise Jaccard on 5-word shingles) ---
  const dupPairs = [];
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const a = pages[i], b = pages[j];
      if (!a.shingleSet || !b.shingleSet || a.shingleSet.size === 0 || b.shingleSet.size === 0) continue;
      const sim = jaccard(a.shingleSet, b.shingleSet);
      if (sim > 0.35) {
        dupPairs.push({ a: a.url, b: b.url, similarity: Math.round(sim * 100) });
      }
    }
  }

  // --- Internal link 404 check ---
  const allInternalLinks = new Set();
  for (const p of pages) for (const l of p.internalLinks || []) allInternalLinks.add(l);
  console.log(`Checking ${allInternalLinks.size} unique internal links for broken links...`);
  const linkStatus = new Map();
  for (const link of allInternalLinks) {
    try {
      const r = await fetch(link, { method: "GET", redirect: "manual" });
      linkStatus.set(link, r.status);
    } catch (e) {
      linkStatus.set(link, "ERROR");
    }
  }
  const broken = [...linkStatus.entries()].filter(([, s]) => s === 404 || s === "ERROR");

  // --- Homepage reachability within 3 clicks (BFS) ---
  const byUrl = new Map(pages.map((p) => [p.localUrl, p]));
  const home = pages.find((p) => p.url === "https://www.studycalc.co/" || p.url === "https://www.studycalc.co");
  const reachable = new Map(); // localUrl -> depth
  if (home) {
    reachable.set(home.localUrl, 0);
    let frontier = [home.localUrl];
    for (let depth = 1; depth <= 3 && frontier.length; depth++) {
      const next = [];
      for (const cur of frontier) {
        const p = byUrl.get(cur);
        if (!p) continue;
        for (const l of p.internalLinks || []) {
          if (!reachable.has(l)) {
            reachable.set(l, depth);
            next.push(l);
          }
        }
      }
      frontier = next;
    }
  }
  const unreachableWithin3 = pages.filter((p) => !reachable.has(p.localUrl));

  // --- robots.txt / sitemap.xml check ---
  const robotsRes = await fetch(`${BASE}/robots.txt`);
  const robotsTxt = await robotsRes.text();

  const output = {
    totalPages: pages.length,
    pages: pages.map(({ shingleSet, internalLinks, ...rest }) => rest),
    thin: thin.map((p) => ({ url: p.url, words: p.words })),
    duplicatePairs: dupPairs,
    brokenInternalLinks: broken.map(([url, status]) => ({ url, status })),
    unreachableWithin3Clicks: unreachableWithin3.map((p) => p.url),
    robotsTxt,
    robotsStatus: robotsRes.status,
    noindexPages: pages.filter((p) => p.noindex).map((p) => p.url),
    duplicateTitles: (() => {
      const seen = new Map();
      for (const p of pages) {
        if (!p.title) continue;
        if (!seen.has(p.title)) seen.set(p.title, []);
        seen.get(p.title).push(p.url);
      }
      return [...seen.entries()].filter(([, urls]) => urls.length > 1);
    })(),
    duplicateDescriptions: (() => {
      const seen = new Map();
      for (const p of pages) {
        if (!p.description) continue;
        if (!seen.has(p.description)) seen.set(p.description, []);
        seen.get(p.description).push(p.url);
      }
      return [...seen.entries()].filter(([, urls]) => urls.length > 1);
    })(),
  };

  fs.writeFileSync("audit-crawl-output.json", JSON.stringify(output, null, 2));
  console.log("\nWrote audit-crawl-output.json");
  console.log(`Total pages: ${output.totalPages}`);
  console.log(`Thin pages (<300 words): ${output.thin.length}`);
  console.log(`Near-duplicate pairs (>35% shingle similarity): ${output.duplicatePairs.length}`);
  console.log(`Broken internal links: ${output.brokenInternalLinks.length}`);
  console.log(`Pages NOT reachable within 3 clicks of home: ${output.unreachableWithin3Clicks.length}`);
  console.log(`Noindex pages: ${output.noindexPages.length}`);
  console.log(`Duplicate titles: ${output.duplicateTitles.length}`);
  console.log(`Duplicate descriptions: ${output.duplicateDescriptions.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
