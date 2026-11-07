#!/usr/bin/env node
// Automated SEO health check (Sprint 4 Task 1). Crawls the running site
// (default: a local production server), checks every sitemap page against
// a fixed set of rules, and exits non-zero if any rule fails. No
// dependencies beyond Node's built-in fetch.
//
// Usage: npm run seo-check              (checks http://localhost:3070)
//        SEO_CHECK_BASE=https://www.studycalc.co npm run seo-check
//
// Start a production server first: npm run build && npm run start -- -p 3070

const BASE = process.env.SEO_CHECK_BASE || "http://localhost:3070";

// Pages that are deliberately noindex. Nothing should be in this list yet;
// Sprint 4 Task 2 adds the /embed/* routes here once they exist.
const INTENDED_NOINDEX = [];

function stripTag(html, tag) {
  return html.replace(new RegExp(`<${tag}[^>]*>[\\s\\S]*?<\\/${tag}>`, "gi"), "");
}

function decodeEntities(s) {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/gi, "'")
    .replace(/&#8217;|&rsquo;/gi, "’")
    .replace(/&#8216;|&lsquo;/gi, "‘")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function getVisibleText(html) {
  let h = stripTag(html, "script");
  h = stripTag(h, "style");
  h = h.replace(/<!--[\s\S]*?-->/g, "");
  return decodeEntities(h.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

function extractAll(html, re) {
  const out = [];
  let m;
  const r = new RegExp(re, "gi");
  while ((m = r.exec(html))) out.push(m);
  return out;
}

function getTitle(html) {
  const m = html.match(/<title>([\s\S]*?)<\/title>/i);
  return m ? decodeEntities(m[1]).trim() : null;
}

function getMetaDescription(html) {
  const m =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i) ||
    html.match(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i);
  return m ? decodeEntities(m[1]) : null;
}

function getCanonical(html) {
  const m = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i);
  return m ? m[1] : null;
}

function getH1s(html) {
  return extractAll(html, "<h1[^>]*>([\\s\\S]*?)<\\/h1>").map((m) => getVisibleText(m[1]));
}

function hasNoindex(html) {
  return /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html);
}

function getJsonLdBlocks(html) {
  return extractAll(html, '<script type="application\\/ld\\+json"[^>]*>([\\s\\S]*?)<\\/script>')
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function getImages(html) {
  return extractAll(html, "<img\\b([^>]*)>").map((m) => m[1]);
}

function getInternalLinks(html, pageUrl) {
  const hrefs = extractAll(html, 'href=["\']([^"\']+)["\']').map((m) => m[1]);
  const out = new Set();
  for (const href of hrefs) {
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;
    if (href.startsWith("http") && !href.startsWith(BASE) && !href.includes("studycalc.co")) continue;
    let abs;
    try {
      abs = new URL(href, pageUrl).toString();
    } catch {
      continue;
    }
    const u = new URL(abs);
    u.hash = "";
    // Normalize to BASE origin so production-vs-local links compare equal.
    const baseUrl = new URL(BASE);
    u.protocol = baseUrl.protocol;
    u.host = baseUrl.host;
    out.add(u.toString());
  }
  return [...out];
}

function hasHeadingMatching(text, re) {
  return re.test(text);
}

async function main() {
  console.log(`seo-check: crawling ${BASE}\n`);

  const sitemapRes = await fetch(`${BASE}/sitemap.xml`);
  if (!sitemapRes.ok) {
    console.error(`FATAL: could not fetch sitemap.xml (${sitemapRes.status})`);
    process.exit(1);
  }
  const sitemapXml = await sitemapRes.text();
  const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  const pages = [];
  for (const url of sitemapUrls) {
    const localUrl = url.replace(/^https:\/\/www\.studycalc\.co/, BASE);
    let html, status;
    try {
      const res = await fetch(localUrl);
      status = res.status;
      html = await res.text();
    } catch (e) {
      pages.push({ url, localUrl, status: "FETCH_ERROR", failures: [`fetch error: ${e.message}`] });
      continue;
    }

    const failures = [];
    const visibleText = getVisibleText(html);
    const title = getTitle(html);
    const description = getMetaDescription(html);
    const canonical = getCanonical(html);
    const h1s = getH1s(html);
    const noindex = hasNoindex(html);
    const jsonLd = getJsonLdBlocks(html);
    const images = getImages(html);
    const internalLinks = getInternalLinks(html, localUrl);
    const isHome = url === "https://www.studycalc.co" || url === "https://www.studycalc.co/";

    if (status !== 200) failures.push(`HTTP status ${status}`);

    if (!title) failures.push("missing <title>");
    else {
      const coreTitle = title.replace(/\s*\|\s*StudyCalc\s*$/, "");
      if (coreTitle.length > 60) failures.push(`title too long (${coreTitle.length} chars): "${coreTitle}"`);
    }

    if (!description) failures.push("missing meta description");
    else if (description.length < 140 || description.length > 160)
      failures.push(`description length ${description.length} (want 140-160)`);

    if (h1s.length !== 1) failures.push(`found ${h1s.length} H1 elements (want exactly 1)`);

    if (!canonical) failures.push("missing canonical link");
    else if (!canonical.startsWith("https://www.studycalc.co")) failures.push(`canonical not www: ${canonical}`);
    else if (canonical.replace(/\/$/, "") !== url.replace(/\/$/, ""))
      failures.push(`canonical "${canonical}" does not match sitemap URL "${url}"`);

    const intended = INTENDED_NOINDEX.includes(url.replace("https://www.studycalc.co", "") || "/");
    if (noindex && !intended) failures.push("unexpected noindex (not in INTENDED_NOINDEX)");
    if (!noindex && intended) failures.push("expected noindex but page is indexable");

    const breadcrumb = jsonLd.find((j) => j["@type"] === "BreadcrumbList");
    if (!isHome && !breadcrumb) failures.push("missing BreadcrumbList JSON-LD");

    const faqSchema = jsonLd.find((j) => j["@type"] === "FAQPage");
    const looksLikeItHasFaq = hasHeadingMatching(visibleText, /frequently asked questions/i);
    if (looksLikeItHasFaq && !faqSchema) {
      failures.push('visible "Frequently Asked Questions" section but no FAQPage JSON-LD');
    }
    if (faqSchema && Array.isArray(faqSchema.mainEntity)) {
      const missing = faqSchema.mainEntity
        .map((q) => q.name)
        .filter((q) => !visibleText.includes(getVisibleText(q).slice(0, 25)));
      if (missing.length > 0) failures.push(`${missing.length}/${faqSchema.mainEntity.length} FAQ schema questions not found verbatim in visible text`);
    }

    const missingAlt = images.filter((attrs) => !/\balt\s*=/.test(attrs));
    if (missingAlt.length > 0) failures.push(`${missingAlt.length} <img> tag(s) missing alt attribute`);

    pages.push({ url, localUrl, status, title, description, canonical, h1Count: h1s.length, noindex, failures, internalLinks });
  }

  // --- Site-wide: title/description uniqueness ---
  const titleMap = new Map();
  const descMap = new Map();
  for (const p of pages) {
    if (p.title) {
      if (!titleMap.has(p.title)) titleMap.set(p.title, []);
      titleMap.get(p.title).push(p.url);
    }
    if (p.description) {
      if (!descMap.has(p.description)) descMap.set(p.description, []);
      descMap.get(p.description).push(p.url);
    }
  }
  const dupTitles = [...titleMap.entries()].filter(([, urls]) => urls.length > 1);
  const dupDescs = [...descMap.entries()].filter(([, urls]) => urls.length > 1);
  for (const [title, urls] of dupTitles) for (const u of urls) pages.find((p) => p.url === u).failures.push(`duplicate title shared with ${urls.length - 1} other page(s): "${title}"`);
  for (const [desc, urls] of dupDescs) for (const u of urls) pages.find((p) => p.url === u).failures.push(`duplicate description shared with ${urls.length - 1} other page(s)`);

  // --- Site-wide: broken internal links ---
  const allLinks = new Set();
  for (const p of pages) for (const l of p.internalLinks || []) allLinks.add(l);
  console.log(`Checking ${allLinks.size} unique internal links for broken links...`);
  const linkStatus = new Map();
  for (const link of allLinks) {
    try {
      const r = await fetch(link, { redirect: "manual" });
      linkStatus.set(link, r.status);
    } catch (e) {
      linkStatus.set(link, "ERROR");
    }
  }
  const broken = [...linkStatus.entries()].filter(([, s]) => s === 404 || s === "ERROR");

  // --- Site-wide: orphan pages (in sitemap, zero inbound internal links) ---
  const inbound = new Set();
  for (const p of pages) for (const l of p.internalLinks || []) inbound.add(l.replace(/\/$/, ""));
  const orphans = pages.filter((p) => {
    if (p.localUrl.replace(/\/$/, "") === `${BASE}`.replace(/\/$/, "")) return false; // home is the root, never orphaned
    return !inbound.has(p.localUrl.replace(/\/$/, ""));
  });

  // --- Report ---
  let failCount = 0;
  console.log("\n=== Per-page results ===");
  for (const p of pages) {
    if (p.failures.length === 0) {
      console.log(`PASS  ${p.url}`);
    } else {
      console.log(`FAIL  ${p.url}`);
      for (const f of p.failures) console.log(`        - ${f}`);
      failCount += p.failures.length;
    }
  }

  console.log("\n=== Site-wide checks ===");
  console.log(`Broken internal links: ${broken.length}`);
  for (const [link, status] of broken) console.log(`  - ${link} (${status})`);
  console.log(`Orphan pages (in sitemap, no inbound internal link found): ${orphans.length}`);
  for (const p of orphans) console.log(`  - ${p.url}`);

  const passPages = pages.filter((p) => p.failures.length === 0).length;
  console.log("\n=== Summary ===");
  console.log(`${pages.length} pages checked, ${passPages} fully PASS, ${pages.length - passPages} with at least one FAIL`);
  console.log(`Total individual check failures: ${failCount}`);
  console.log(`Broken links: ${broken.length}, orphan pages: ${orphans.length}`);

  if (failCount > 0 || broken.length > 0 || orphans.length > 0) {
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
