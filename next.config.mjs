/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // ==========================================
      // 1. GPA Calculator Typos & Short URLs
      // ==========================================
      { source: '/gpa', destination: '/gpa-calculator', permanent: true },
      { source: '/gpacalculator', destination: '/gpa-calculator', permanent: true },
      { source: '/gpacalc', destination: '/gpa-calculator', permanent: true },
      { source: '/gpa-calc', destination: '/gpa-calculator', permanent: true },
      { source: '/gpacal', destination: '/gpa-calculator', permanent: true },
      { source: '/gpa-cal', destination: '/gpa-calculator', permanent: true },
      { source: '/gp', destination: '/gpa-calculator', permanent: true },
      { source: '/gapcalculator', destination: '/gpa-calculator', permanent: true }, // Common typo
      { source: '/gap-calculator', destination: '/gpa-calculator', permanent: true },

      // ==========================================
      // 2. CGPA Calculator Typos & Short URLs
      // ==========================================
      { source: '/cgpa', destination: '/cgpa-calculator', permanent: true },
      { source: '/cgpacalculator', destination: '/cgpa-calculator', permanent: true },
      { source: '/cgpacalc', destination: '/cgpa-calculator', permanent: true },
      { source: '/cgpa-calc', destination: '/cgpa-calculator', permanent: true },
      { source: '/cgpacal', destination: '/cgpa-calculator', permanent: true },
      { source: '/cgpa-cal', destination: '/cgpa-calculator', permanent: true },
      { source: '/cpa', destination: '/cgpa-calculator', permanent: true }, // Common typo
      { source: '/cpga', destination: '/cgpa-calculator', permanent: true }, // Common typo
      { source: '/cpgacalculator', destination: '/cgpa-calculator', permanent: true },

      // ==========================================
      // 3. Attendance Calculator Typos & Short URLs
      // ==========================================
      { source: '/attendance', destination: '/attendance-calculator', permanent: true },
      { source: '/attendancecalculator', destination: '/attendance-calculator', permanent: true },
      { source: '/attendcalc', destination: '/attendance-calculator', permanent: true },
      { source: '/attendance-calc', destination: '/attendance-calculator', permanent: true },
      { source: '/attend', destination: '/attendance-calculator', permanent: true },
      { source: '/atend', destination: '/attendance-calculator', permanent: true }, // Spelling mistake
      { source: '/atendcalc', destination: '/attendance-calculator', permanent: true },
      { source: '/atend-calculator', destination: '/attendance-calculator', permanent: true },
      { source: '/att', destination: '/attendance-calculator', permanent: true },
      { source: '/attcalc', destination: '/attendance-calculator', permanent: true },

      // ==========================================
      // 4. Percentage Calculator Typos & Short URLs
      // ==========================================
      { source: '/percentage', destination: '/percentage-calculator', permanent: true },
      { source: '/percentagecalculator', destination: '/percentage-calculator', permanent: true },
      { source: '/percent', destination: '/percentage-calculator', permanent: true },
      { source: '/percentcalc', destination: '/percentage-calculator', permanent: true },
      { source: '/percent-calc', destination: '/percentage-calculator', permanent: true },
      { source: '/per', destination: '/percentage-calculator', permanent: true },
      { source: '/percentge', destination: '/percentage-calculator', permanent: true }, // Spelling mistake
      { source: '/percentge-calculator', destination: '/percentage-calculator', permanent: true },
      { source: '/prcnt', destination: '/percentage-calculator', permanent: true },

      // ==========================================
      // 5. Grade Calculator Typos & Short URLs
      // ==========================================
      { source: '/grade', destination: '/grade-calculator', permanent: true },
      { source: '/gradecalculator', destination: '/grade-calculator', permanent: true },
      { source: '/gradecalc', destination: '/grade-calculator', permanent: true },
      { source: '/grade-calc', destination: '/grade-calculator', permanent: true },
      { source: '/marks', destination: '/grade-calculator', permanent: true }, // Intent matching
      { source: '/markscalculator', destination: '/grade-calculator', permanent: true },
      { source: '/marks-calculator', destination: '/grade-calculator', permanent: true },
      { source: '/grad', destination: '/grade-calculator', permanent: true },
      { source: '/gardcalculator', destination: '/grade-calculator', permanent: true }, // Typo
    ];
  },
};

export default nextConfig;