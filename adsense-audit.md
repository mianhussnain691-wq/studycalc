# AdSense Readiness Audit

**Method**: live crawl of the actual production build (`npm run build` + `npm run start -- -p 3060`), fetched with plain HTTP (no JS execution) — i.e. exactly what a non-JS crawler sees. 62 URLs from `sitemap.xml`, fetched 2026-11-02. Word counts are visible body text only (`<script>`/`<style>` stripped, tags stripped, HTML entities decoded). This is real measured data, not an estimate.

Read-only task — nothing below has been changed.

---

## Full page table

62/62 pages returned HTTP 200. "Formula"/"Worked Ex." columns are a text-match proxy (presence of the words "formula" / "worked example" in visible text), not a guarantee of quality — spot-checked against source for the pages flagged in the findings below.

| URL | Type | Words | Formula | Worked Ex. | FAQ (schema) | Sources | Breadcrumb |
|---|---|---|---|---|---|---|---|
| / | home | 254 ⚠️ | — | — | — | — | — |
| /guides | index/hub | 771 | ✓ | ✓ | — | — | — |
| /blog | blog index | 113 ⚠️ | ✓ | — | — | — | — |
| /calculators | index/hub | 472 | — | — | — | — | — |
| /about | legal/info | 150 ⚠️ | — | — | — | — | — |
| /contact | legal/info | 61 ⚠️ | — | — | — | — | — |
| /privacy-policy | legal/info | 278 ⚠️ | — | — | — | — | — |
| /terms | legal/info | 226 ⚠️ | — | — | — | — | — |
| /disclaimer | legal/info | 142 ⚠️ | — | — | — | — | — |
| /cookie-policy | legal/info | 159 ⚠️ | — | — | — | — | — |
| /gpa-calculator | calculator | 1892 | ✓ | ✓ | ✓ (12) | ✓ | ✓ |
| /cgpa-calculator | calculator | 1534 | ✓ | ✓ | ✓ (10) | ✓ | ✓ |
| /attendance-calculator | calculator | 1559 | ✓ | ✓ | ✓ (10) | ✓ | ✓ |
| /percentage-calculator | calculator | 2028 | ✓ | ✓ | ✓ (10) | ✓ | ✓ |
| /grade-calculator | calculator | 1610 | ✓ | ✓ | ✓ (10) | ✓ | ✓ |
| /pakistan-cgpa-converter | calculator | 517 | ✓ | — | ✓ (4) | ✓ | — |
| /gpa-to-percentage-calculator | calculator | 1171 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /percentage-to-gpa-calculator | calculator | 904 | — | ✓ | ✓ (9) | ✓ | — |
| /target-gpa-calculator | calculator | 921 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /target-cgpa-calculator | calculator | 1284 | ✓ | ✓ | ✓ (9) | ✓ | — |
| /weighted-average-calculator | calculator | 865 | ✓ | ✓ | ✓ (9) | — | — |
| /letter-grade-average-calculator | calculator | 1149 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /reverse-percentage-calculator | calculator | 855 | ✓ | ✓ | ✓ (8) | — | — |
| /class-rank-percentile-calculator | calculator | 960 | ✓ | ✓ | ✓ (7) | ✓ | — |
| /semester-credit-load-checker | calculator | 1161 | — | ✓ | ✓ (10) | ✓ | — |
| /grade-curve-calculator | calculator | 931 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /deans-list-calculator | calculator | 1004 | — | ✓ | ✓ (10) | ✓ | — |
| /academic-standing-checker | calculator | 929 | — | ✓ | ✓ (8) | ✓ | — |
| /is-my-gpa-good | calculator | 881 | — | — | ✓ (6) | ✓ | ✓ |
| /course-weight-impact-calculator | calculator | 891 | ✓ | ✓ | ✓ (7) | — | — |
| /credit-hour-estimator | calculator | 957 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /credit-converter | calculator | 865 | — | ✓ | ✓ (5) | ✓ | ✓ |
| /semester-planner | calculator | 677 | ✓ | — | ✓ (4) | ✓ | — |
| /scholarship-gpa-checker | calculator | 948 | — | ✓ | ✓ (9) | ✓ | — |
| /amcas-science-gpa-calculator | calculator | 1132 | — | ✓ | ✓ (8) | ✓ | — |
| /lsac-law-school-gpa-calculator | calculator | 997 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /time-value-of-money-calculator | calculator | 1001 | ✓ | ✓ | ✓ (8) | ✓ | — |
| /ap-honors-gpa-weighting-guide | guide/article | 2399 | — | — | ✓ (13)⚠️ | — | — |
| /attendance-percentage-formula | guide/article | 2309 | ✓ | ✓ | ✓ (8)⚠️ | — | — |
| /cgpa-to-percentage-conversion | guide/article | 890 | ✓ | ✓ | ✓ (6) | — | ✓ |
| /final-grade-calculator-guide | guide/article | 659 | ✓ | — | ✓ (3) | — | — |
| /gpa-for-scholarships | guide/article | 910 | — | — | ✓ (3) | — | — |
| /gpa-requirements | guide/article | 802 | ✓ | — | ✓ (3) | — | — |
| /gpa-scale-explained | guide/article | 1592 | ✓ | ✓ | ✓ (7) | — | — |
| /gpa-to-percentage-guide | guide/article | 1624 | ✓ | ✓ | ✓ (10) | — | — |
| /grade-scale-explained | guide/article | 1303 | — | ✓ | ✓ (5) | — | — |
| /high-school-vs-college-gpa | guide/article | 470 | — | — | ✓ (3)⚠️ | — | — |
| /how-to-calculate-cgpa | guide/article | 2275 | ✓ | ✓ | ✓ (10) | — | ✓ |
| /how-to-raise-gpa-fast | guide/article | 1858 | ✓ | — | ✓ (5)⚠️ | — | — |
| /letter-grade-to-percent-guide | guide/article | 2328 | ✓ | ✓ | ✓ (7) | — | — |
| /marks-to-grade-conversion | guide/article | 2368 | — | — | ✓ (8) | — | — |
| /pakistani-board-vs-us-gpa | guide/article | 2041 | ✓ | — | ✓ (8) | — | — |
| /percentage-formula-explained | guide/article | 895 | ✓ | ✓ | ✓ (5) | — | — |
| /semester-gpa-vs-cgpa | guide/article | 1148 | — | ✓ | ✓ (5) | — | — |
| /weighted-gpa-vs-unweighted-gpa | guide/article | 1229 | — | — | ✓ (7) | — | — |
| /target-gpa-strategy-guide | guide/article | 1633 | ✓ | ✓ | ✓ (10) | — | — |
| /what-gpa-do-you-need-for-medical-school | guide/article | 1562 | — | ✓ | ✓ (8) | — | — |
| /how-lsac-calculates-your-gpa | guide/article | 1555 | — | — | ✓ (8) | — | — |
| /time-value-of-money-explained | guide/article | 1517 | ✓ | ✓ | ✓ (8) | — | — |
| /blog/difference-between-cgpa-and-gpa | blog article | 1687 | ✓ | — | — | — | — |
| /blog/gpa-calculator-formula-explained | blog article | 2561 | ✓ | — | — | — | — |
| /blog/how-to-calculate-gpa | blog article | 1859 | ✓ | ✓ | — | — | — |

⚠️ on words = under 300-word thin-content threshold. ⚠️ on FAQ = schema/visible-text mismatch found (detail below).

---

## Findings against each check

### 1. About / Contact / Privacy / Terms / Disclaimer — present, working, footer-linked everywhere?
**Yes to all.** All 6 pages return 200. Footer (`src/components/Footer.jsx`) is rendered unconditionally in the root `layout.js` (confirmed in source, not just crawled pages), so it appears on every single page. Contact page has a working method: a plain email address (`mugtechofficial@gmail.com`), no form. All 6 pages are genuinely short (61–278 words) — see Task C candidates below.

### 2. Visible cookie/consent notice?
**No.** Grepped the full `src/` tree for any consent-banner component — none exists. Only a static `/cookie-policy` *page* describing cookie usage in prose. Report only, per instructions — not building one in this phase.

### 3. robots.txt / sitemap.xml / broken links / accidental noindex
- `robots.txt`: 200, correct (`allow: /`, points to `sitemap.xml`).
- `sitemap.xml`: 200, 62 URLs, matches what's actually live.
- **Zero `noindex` pages** found anywhere.
- **Zero broken internal links** — crawled all 94 unique internal link targets found across the 62 pages; all resolve (200 or expected 307 redirect, see below). No 404s.

### 4. Pages empty on first render (content only after client JS)?
**None.** Grepped for `dynamic(...,{ssr:false})` — zero matches anywhere in the codebase. This is Next.js App Router, which server-renders `"use client"` components too (not purely client-side), and the crawl itself fetched raw HTML with no JS execution and got substantial word counts on virtually every page — empirical confirmation, not just an absence-of-risk argument.

### 5. Copied/templated text repeated across more than 3 pages?
**No paragraph-level duplication found.** Pairwise 5-word-shingle Jaccard similarity was computed across all 62 pages' full visible text — **zero pairs** exceeded 35% similarity (most real near-duplicates would be 60-90%+). Separately grepped for the standard hedging phrases every page's SourcesBlock/guide uses ("varies by institution," etc.) — these appear on 14 pages but are each worded slightly differently per page's actual topic, which is expected, responsible-disclosure language, not duplicate content. Only generic UI chrome repeats verbatim (button labels like "Reset", section headings like "Related Calculators & Guides") — normal and not a content-quality concern.

### 6. Can every page be reached from the homepage in 3 clicks?
**No — 2 pages cannot: `/ap-honors-gpa-weighting-guide` and `/high-school-vs-college-gpa`.**

Root cause, traced to source: `/guides` (the main hub) renders `articles.map(a => <Link href={`/guides/${a.slug}`}>)` — but the actual article pages live at `/${a.slug}` directly. `/guides/[slug]/page.jsx` is only a redirect stub. So **every single link on `/guides` goes through an unnecessary redirect hop**, confirmed live:
```
GET /guides/ap-honors-gpa-weighting-guide -> 307 -> /ap-honors-gpa-weighting-guide
```
(It's a 307, not a 301 — temporary, not permanent, which is also the semantically wrong status for a permanent routing structure.)

Most articles still end up reachable within 3 clicks anyway because they cross-link each other directly elsewhere. These two specifically don't: `grep -rl "ap-honors-gpa-weighting-guide"` and the same for `high-school-vs-college-gpa` across every `src/app` and `src/components` file return **zero** results outside each page's own file — meaning their only inbound link path, site-wide, is this broken redirect chain.

**Confirmed via `git log`: this predates Sprint 1 entirely** (`guides/page.jsx` last touched at commit `61500ab`/`aa0d2cd`/`9130aa2`/`7673133`, all before Sprint 1's first commit `a34f7b5`). Not something introduced by any of this session's work. Real bug, pre-existing, not yet fixed — Task A is read-only.

### Extra finding (not in the original checklist, found while building the FAQ-schema check): structured-data/visible-content mismatch
Built a check comparing each page's `FAQPage` JSON-LD questions against its visible on-page FAQ text (after fixing a false-positive bug in my own detector — `&#x27;` apostrophe encoding wasn't being decoded, which initially over-flagged ~20 pages; after the fix, re-ran clean):

- **`/attendance-percentage-formula`: 8 of 8 schema questions do not appear anywhere in the visible text.** Verified in source: `src/app/attendance-percentage-formula/page.jsx` hardcodes its own independent `faqJsonLd` block (8 questions, e.g. *"What is the standard global percentage threshold for university exam eligibility?"*) while the actual rendered component, `src/components/articles/AttendancePercentage.jsx`, has a completely different 12-question FAQ (e.g. *"What attendance percentage do I need to sit my exams?"*). Same bug class I found and fixed in `ap-honors-gpa-weighting-guide` during Sprint 1 — missed this one at the time.
- `/high-school-vs-college-gpa` (1/3) and `/how-to-raise-gpa-fast` (1/5): minor partial mismatches, not independently verified against source — reporting as unconfirmed/low-confidence rather than asserting a bug, since my detection heuristic is a crude substring match and could still have edge cases.

### Thin pages (<300 words)
8 pages: home (254), `/blog` index (113), `/about` (150), `/contact` (61), `/privacy-policy` (278), `/terms` (226), `/disclaimer` (142), `/cookie-policy` (159).

Context: home and `/blog` are index/hub pages (tool cards, post cards), not article content — "thin" in the literal word-count sense but not necessarily a real AdSense content-quality problem the way a thin *article* would be. The 6 legal/info pages are genuinely sparse, especially `/contact` at 61 words — these are reasonable Task C candidates.

### Missing coverage, not necessarily bugs
- **BreadcrumbList**: only 9 of 62 pages have it (the first few built in Sprint 1 plus a handful since) — the other 53 don't. Not wrong, just incomplete rollout.
- **SourcesBlock component**: present on 19 of 24 calculators; absent on all 21 guide/article pages (many of those DO have inline sourcing/hedging prose, just not via the standardized component) and all 3 blog posts.
- **FAQPage schema**: present on 49 of 62 pages; absent on all 10 legal/index pages (expected — they're not FAQ-shaped content) and all 3 blog posts (a real gap — they have no FAQ at all, schema or visible).

---

## Summary
- 0 broken links, 0 noindex, 0 empty-on-first-render pages, 0 whole-page duplicate content, robots/sitemap correct.
- 8 thin pages (6 of them legal/info boilerplate), 2 pages outside the 3-click radius (pre-existing bug, traced to source), 1 confirmed structured-data/content mismatch (`attendance-percentage-formula`) plus 2 low-confidence ones, no cookie-consent banner.
- Nothing changed in this phase, per instructions.
