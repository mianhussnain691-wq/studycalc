// Grading scales for Pakistani universities, shown ONLY where the scale is
// published on the university's own official site and was fetched and read
// directly (not taken from a calculator/blog/forum that claims to quote it).
// Universities checked but not verifiable this way are listed in
// NEEDS_VERIFICATION.md instead of being guessed at here.
//
// Each entry's `scale` array is exactly what the source publishes — no
// invented percentage-to-GPA equivalents for universities that only publish
// one half of that mapping.
const universityGradingScales = [
  {
    name: "FAST-NUCES (National University of Computer and Emerging Sciences)",
    programScope: "BBA & BS programs",
    sourceUrl: "https://www.nu.edu.pk/Student/Grading",
    dateChecked: "2026-11-07",
    note: "FAST-NUCES publishes grade points only — no percentage/marks ranges are published alongside the letter grades.",
    scale: [
      { grade: "A+", points: "4.00", meaning: "Excellent" },
      { grade: "A", points: "4.00", meaning: "Excellent" },
      { grade: "A-", points: "3.67", meaning: "Very Good" },
      { grade: "B+", points: "3.33", meaning: "Very Good" },
      { grade: "B", points: "3.00", meaning: "Good" },
      { grade: "B-", points: "2.67", meaning: "Average" },
      { grade: "C+", points: "2.33", meaning: "Below Average" },
      { grade: "C", points: "2.00", meaning: "Adequate" },
      { grade: "C-", points: "1.67", meaning: "Pass" },
      { grade: "D+", points: "1.33", meaning: "Pass" },
      { grade: "D", points: "1.00", meaning: "Pass" },
      { grade: "F", points: "0.00", meaning: "Fail" },
      { grade: "FA", points: "0.00", meaning: "Fail (Attendance Shortage)" },
    ],
  },
  {
    name: "GIKI (Ghulam Ishaq Khan Institute of Engineering Sciences and Technology)",
    programScope: "Undergraduate programs",
    sourceUrl: "https://giki.edu.pk/academics/academic-setup/",
    dateChecked: "2026-11-07",
    note: "GIKI publishes grade points only — no percentage/marks ranges. I (Incomplete) and W (Withdrawn) grades are excluded from GPA calculation.",
    scale: [
      { grade: "A", points: "4.00" },
      { grade: "A-", points: "3.67" },
      { grade: "B+", points: "3.33" },
      { grade: "B", points: "3.00" },
      { grade: "B-", points: "2.67" },
      { grade: "C+", points: "2.33" },
      { grade: "C", points: "2.00" },
      { grade: "C-", points: "1.67" },
      { grade: "D+", points: "1.33" },
      { grade: "D", points: "1.00" },
      { grade: "F", points: "0.00" },
    ],
  },
  {
    name: "University of the Punjab",
    programScope: "Postgraduate research programs (MS/M.Phil and PhD), semester system — published by the Doctoral Programme Coordination Committee. Does not cover undergraduate study.",
    sourceUrl: "https://www.pu.edu.pk/dpcc/rule_grading.htm",
    dateChecked: "2026-11-07",
    note: "Minimum semester GPA to continue is 2.50 (at least 2.30 per subject); minimum CGPA for MS/M.Phil coursework is 2.50, for PhD coursework is 3.00. Fractional marks round up (e.g. 64.1 or 64.9 rounds to 65).",
    scale: [
      { grade: "A", points: "4.00", marks: "85 and above" },
      { grade: "A-", points: "3.70", marks: "80–84" },
      { grade: "B+", points: "3.30", marks: "75–79" },
      { grade: "B", points: "3.00", marks: "70–74" },
      { grade: "B-", points: "2.70", marks: "65–69" },
      { grade: "C+", points: "2.30", marks: "61–64" },
      { grade: "C", points: "2.00", marks: "58–60" },
      { grade: "C-", points: "1.70", marks: "55–57" },
      { grade: "D", points: "1.00", marks: "50–54" },
      { grade: "F", points: "0.00", marks: "Below 50" },
    ],
  },
];

export default universityGradingScales;
