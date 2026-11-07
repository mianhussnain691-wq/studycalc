# Grading scales we could not verify

For `/pakistan-university-grading-scales`, a university's grading scale is
only published on the site if it was fetched and read directly from that
university's own official domain (registrar/academics page, an official
regulations document, or an official student handbook/prospectus). A
third-party calculator, blog, or aggregator site — even one that claims to
quote a university's exact numbers — does not count, because we can't
confirm it's accurate or current.

The universities below were checked (2026-11-07) and could not be verified
to that standard. They are deliberately **not** shown on the page. If an
official source turns up later, move the entry into
`src/data/universityGradingScales.js` instead of guessing at the numbers.

| University | What we found | Why it doesn't count |
|---|---|---|
| LUMS | No official grading/regulations page found on lums.edu.pk; only third-party calculator sites give specific numbers, and they disagree with each other on at least one band. | Not a primary source. |
| NUST | nust.edu.pk's academics section returned HTTP 403 (forbidden) when fetched directly. Third-party sources also disagree on whether NUST uses a fixed percentage scale or relative (curve-based) grading. | Official page unreachable; no verified alternative. |
| Quaid-i-Azam University | qau.edu.pk returned HTTP 403 (forbidden) when fetched directly. | Official page unreachable. |
| COMSATS University Islamabad | No grading table found on the Undergraduate Matters page. The full prospectus PDF exceeded what could be fetched in this environment. A PDF that did load (hosted on a different university's domain, cust.edu.pk) is not a COMSATS source. | No reachable official table; third-party sources disagree on exact A-/A cutoffs. |
| University of Karachi | Examination/policy pages were found but did not contain an actual grade table within what could be opened. | Page located but table not found. |
| UET Lahore | Found the exact source — "UG Semester Regulations 2016" PDF, linked from the official site — but the PDF has no extractable text layer (appears to be a scanned document) and this environment has no PDF-to-image/OCR tooling to read it. | Source identified but unreadable here. |
| Riphah International University | No regulations/grading/registrar page found via available navigation. Explicitly required by the task to be included only if verifiable — it is not, so it's excluded. | Not found. |
| Bahria University | No regulations/grading/registrar page found via available navigation; a "Downloads" section exists but wasn't fully explored. | Not found. |
| Allama Iqbal Open University (AIOU) | Strong examinations-department presence (date sheets, results portal) but no page specifically publishing a letter-grade/GPA scale. AIOU is largely a distance-learning, assignment-based system rather than a conventional GPA system, so a letter-grade table may not even be the right format for it. | No grading table found; may not apply the same way as other universities. |

**Note on tooling:** this research was done with web search and direct page
fetches. Several "not found" results above (especially LUMS, NUST, Punjab,
Karachi, and COMSATS) are large universities that do publish detailed
academic regulations somewhere on their sites — a more thorough manual dig
through each registrar's office site, or PDF OCR tooling for the UET Lahore
case, would likely turn up a verifiable source for at least a few of these.
This file should be revisited rather than treated as a final "these don't
exist" conclusion.
