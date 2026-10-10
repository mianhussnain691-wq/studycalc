// CGPA <-> percentage conventions for Pakistan and India.
//
// Neither country has a single government-published, universally-mandated
// conversion formula -- it varies by institution. These constants are the
// MOST COMMONLY USED convention (widely cited by students, universities,
// and conversion tools), not an "official" formula, and every page using
// them must say so. Verification trail (checked 2026-10):
//   - Pakistan (CGPA x 25, i.e. CGPA / 4.0 x 100): no single HEC-published
//     document found stating this as policy. It's the dominant convention
//     in practice since Pakistani university CGPA is itself out of 4.0, so
//     this is the direct linear read-out of that scale. A few universities
//     use other multipliers (e.g. x24) -- always confirm with the specific
//     institution or HEC equivalence office for anything official.
//   - India (CGPA x 9.5): commonly associated with CBSE's and some UGC
//     CBCS-era guidance for the 10-point scale, but no single UGC document
//     mandating it nationally was found. Many universities use their own
//     multiplier (some use x10). Always confirm with the specific
//     institution for anything official (admissions, scholarships, WES).
//
// Single source of truth so this convention is stated identically (and
// identically hedged) everywhere it's used on the site.

export const PAKISTAN_CGPA_SCALE_MAX = 4.0;
export const PAKISTAN_CGPA_TO_PERCENT_FACTOR = 25; // CGPA / 4.0 * 100

export const INDIA_CGPA_SCALE_MAX = 10.0;
export const INDIA_CGPA_TO_PERCENT_FACTOR = 9.5;

export function pakistanCgpaToPercent(cgpa) {
  return cgpa * PAKISTAN_CGPA_TO_PERCENT_FACTOR;
}

export function pakistanPercentToCgpa(percent) {
  return percent / PAKISTAN_CGPA_TO_PERCENT_FACTOR;
}

export function indiaCgpaToPercent(cgpa) {
  return cgpa * INDIA_CGPA_TO_PERCENT_FACTOR;
}
