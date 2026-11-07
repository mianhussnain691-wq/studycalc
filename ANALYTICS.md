# Reading StudyCalc's Analytics

What's already running on the site, and how to read it each week.

## What's already set up

- **Google Analytics (GA4)** — measurement ID `G-TJYSYBE39F`, loaded on every page except `/embed/*` (the embeddable widgets load no analytics at all, by design).
- **Microsoft Clarity** — project ID `xnb6cd7sa5`, same scope as GA4 above.
- **Google Search Console** and **Bing Webmaster Tools** — verified separately through each tool's own dashboard; not something this repo controls.
- **Sitemap** — `https://www.studycalc.co/sitemap.xml`, auto-generated from every calculator, guide, and blog post. Both GSC and Bing Webmaster should have this submitted.

There's currently no cookie-consent banner on the site (noted in the Sprint 3 AdSense audit). That doesn't affect how to *read* the tools below, but it's worth knowing if a future task adds one — GA4/Clarity behavior for EU/UK visitors may change at that point.

## Google Search Console (GSC)

**Where:** search.google.com/search-console, property for `studycalc.co`.

**Performance report** has two views that answer different questions:

- **Queries tab** — what people actually typed to find the site. Look for queries with real impressions but 0 clicks, or a bad average position (6+) — those are titles/descriptions worth rewriting, or a sign a page doesn't answer the query directly enough near the top.
- **Pages tab** — which URLs are getting traffic. Cross-reference with the Queries tab: click into a page, then check *its* Queries list to see what it's actually ranking for, which is often different from what it was built for.

**Comparing periods:** use the date picker's "Compare" option — last 28 days vs. the previous 28 days is the standard comparison. Watch for:
- A page whose impressions held steady but clicks dropped (title/description got worse, or a competitor overtook it).
- A page whose average position moved from single digits into the teens or worse (something changed — check if its title/canonical/content changed recently, or if it's a broader algorithmic shift).
- Brand-new queries appearing for a page (useful signal for what FAQ/H2 content to add next).

**Indexing:** the "Pages" report under Indexing shows anything Google *isn't* indexing and why (duplicate content, crawled but not indexed, etc.) — worth a glance monthly, not weekly.

## Bing Webmaster Tools

**Where:** bing.com/webmasters, property for `studycalc.co`.

Smaller volume than Google, but the same two questions apply: **Search Performance** → queries and pages, same logic as GSC above. Bing's data tends to be noisier with less traffic, so don't over-react to single-week swings.

**Sitemaps page** confirms Bing has the current sitemap and shows how many URLs were discovered vs. indexed — if that number stalls or drops, something's blocking a crawl (check `robots.txt` and any recent redirect changes first).

**URL Inspection / Submit URL** is the Bing equivalent of GSC's URL inspection tool — use it to manually push a newly published or recently changed page for faster re-crawling instead of waiting for the next scheduled crawl. `npm run indexnow` does this in bulk for every sitemap URL at once.

## Microsoft Clarity

**Where:** clarity.microsoft.com, project `xnb6cd7sa5`.

Clarity shows *behavior*, not just traffic counts — this is the tool for "why isn't this calculator converting" questions that GSC/Bing can't answer.

- **Heatmaps** (click + scroll) — filter to a specific calculator URL and check whether people are clicking the actual "Calculate" button or clicking somewhere that looks clickable but isn't, and how far down the page they scroll before leaving (if nobody scrolls past the calculator to the guide/FAQ content, that content isn't pulling its weight for engagement).
- **Recordings** — individual session replays. Most useful for spotting friction: someone typing into a field, getting an error, and leaving; someone resizing their browser oddly (a responsive-layout bug); repeated clicks on something non-interactive.
- **Rage clicks / Dead clicks / Excessive scrolling** — Clarity auto-flags these as "frustration signals" in its dashboard. A page with a spike in rage clicks almost always has a specific, fixable UI bug — check a few of its recordings directly rather than guessing.

## 10-line weekly checklist

1. Open GSC → Performance → Pages, sort by impressions, scan for anything with high impressions and low clicks.
2. Open GSC → Performance → Queries, check for new queries worth targeting with an FAQ addition.
3. Compare this week's average position against last week's for the 5-10 highest-impression pages.
4. Check GSC → Indexing → Pages for any new "not indexed" entries.
5. Open Bing Webmaster → Search Performance, repeat the same impressions/clicks scan.
6. Check Bing Webmaster → Sitemaps to confirm the indexed-URL count hasn't dropped.
7. Open Clarity → filter to the 2-3 calculators with the most traffic, skim the heatmap.
8. Check Clarity's rage-click / dead-click flags for any new spikes; watch one recording if there's a spike.
9. If a page's title/description looks weak based on the above, write down the URL and the specific issue (don't change it yet — gather a week or two of data first, per the Sprint 4 Task 4 rule against re-rewriting titles too soon after a change).
10. Note anything that looks like a technical regression (sudden ranking drop, broken link, 404 spike) separately from normal fluctuation — normal week-to-week movement is common and not itself a problem.
