// Canonical US 4.0 grading scale used across the site — GPAGuide, the
// Grade Calculator, and the GPA/Percentage conversion tools all read from
// this single table so the numbers can't drift apart between pages again.
export const GRADE_SCALE = [
  { minPercent: 93, maxPercent: 100, gpa: 4.0, letter: "A" },
  { minPercent: 90, maxPercent: 92, gpa: 3.7, letter: "A-" },
  { minPercent: 87, maxPercent: 89, gpa: 3.3, letter: "B+" },
  { minPercent: 83, maxPercent: 86, gpa: 3.0, letter: "B" },
  { minPercent: 80, maxPercent: 82, gpa: 2.7, letter: "B-" },
  { minPercent: 77, maxPercent: 79, gpa: 2.3, letter: "C+" },
  { minPercent: 73, maxPercent: 76, gpa: 2.0, letter: "C" },
  { minPercent: 70, maxPercent: 72, gpa: 1.7, letter: "C-" },
  { minPercent: 60, maxPercent: 69, gpa: 1.0, letter: "D" },
  { minPercent: 0, maxPercent: 59, gpa: 0.0, letter: "F" },
];

// Forward lookup: percentage -> scale row (used by the Grade Calculator and
// the Percentage-to-GPA tool).
export function lookupByPercent(percent) {
  return GRADE_SCALE.find((row) => percent >= row.minPercent);
}

// Reverse lookup: GPA -> scale row, treating each row's gpa value as the
// threshold a real percentage in that band would clear. The bottom (F) row
// has no real percentage floor, so callers should show "Below 60%" for it
// instead of trusting minPercent/maxPercent literally.
export function lookupByGpa(gpa) {
  return GRADE_SCALE.find((row) => gpa >= row.gpa);
}
