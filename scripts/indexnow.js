// Submits every URL currently in the live sitemap to IndexNow (Bing, and
// any other participating search engine) in one batch call.
//
// Run manually after deploying new or changed pages: `npm run indexnow`.
// Reads the sitemap straight from the live site rather than re-walking
// src/data/tools.js / articles.js here, so the submitted list always
// matches exactly what's actually deployed and indexable right now.
const SITE = "https://www.studycalc.co";
const KEY = "d5b3d9c375c4478f9af6d7222ee9d491";

async function main() {
  const sitemapRes = await fetch(`${SITE}/sitemap.xml`);
  if (!sitemapRes.ok) {
    throw new Error(`Could not fetch sitemap: ${sitemapRes.status} ${sitemapRes.statusText}`);
  }

  const xml = await sitemapRes.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    throw new Error("No URLs found in sitemap.xml — aborting, nothing submitted.");
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const body = {
    host: "www.studycalc.co",
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  };

  const submitRes = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow responded: ${submitRes.status} ${submitRes.statusText}`);

  if (!submitRes.ok) {
    const text = await submitRes.text().catch(() => "");
    if (text) console.error(text);
    process.exitCode = 1;
    return;
  }

  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
