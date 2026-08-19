import Link from "next/link";

export const metadata = {
  title: "Percentage Calculator - Calculate Marks Percentage Instantly (Free)",
  description:
    "Calculate your marks percentage, convert percentage to GPA or CGPA, and find your aggregate percentage across subjects. Free and instant.",
  alternates: {
    canonical: "/percentage-formula-explained",
  },
  openGraph: {
    title: "Percentage Calculator - Calculate Marks Percentage Instantly",
    description:
      "Free percentage calculator with formula, worked examples, and conversion charts for GPA and CGPA.",
  },
};

export default function PercentageCalculatorGuide() {
  const toc = [
    { href: "#what-is-percentage-calculator", label: "What Is a Percentage Calculator?" },
    { href: "#how-to-calculate-percentage-from-marks", label: "How to Calculate Percentage From Marks" },
    { href: "#global-queries-breakdown", label: "Global Search Queries (Top 30)" },
    { href: "#why-use", label: "Why Use This Calculator" },
    { href: "#how-it-works", label: "How This Calculator Works" },
    { href: "#formula", label: "Percentage Formula" },
    { href: "#example", label: "Step-by-Step Example" },
    { href: "#conversion", label: "Percentage to GPA Conversion" },
    { href: "#mistakes", label: "Common Mistakes" },
    { href: "#tips", label: "Tips for Accurate Results" },
    { href: "#faqs", label: "FAQs" },
    { href: "#related-tools", label: "Related Tools" },
  ];

  const conversionChart = [
    { percentage: "90% – 100%", gpa: "4.00", letter: "A" },
    { percentage: "80% – 89%", gpa: "3.30 – 3.70", letter: "B+ / A-" },
    { percentage: "70% – 79%", gpa: "2.30 – 3.00", letter: "C+ / B" },
    { percentage: "60% – 69%", gpa: "1.00 – 2.00", letter: "D / C-" },
    { percentage: "Below 60%", gpa: "0.00 – 1.00", letter: "F / D" },
  ];

  const subjects = [
    { subject: "Mathematics", obtained: 87, total: 100 },
    { subject: "Physics", obtained: 78, total: 100 },
    { subject: "Chemistry", obtained: 82, total: 100 },
    { subject: "English", obtained: 91, total: 100 },
  ];

  const totalObtained = subjects.reduce((s, x) => s + x.obtained, 0);
  const totalMarks = subjects.reduce((s, x) => s + x.total, 0);
  const aggregatePercent = ((totalObtained / totalMarks) * 100).toFixed(2);

  const singleExample = { obtained: 338, total: 500 };
  const singlePercent = ((singleExample.obtained / singleExample.total) * 100).toFixed(1);

  // 30 Global Search Queries & Solutions Array
  const globalQueries = [
    { q: "338 out of 500 in percentage", ans: "67.6%" },
    { q: "338 percentage out of 500", ans: "67.6%" },
    { q: "Aggregate percentage calculator", ans: "Combines multi-subject scores accurately." },
    { q: "How to calculate percentage from marks", ans: "(Obtained ÷ Total) × 100" },
    { q: "338 out of 400 percentage", ans: "84.5%" },
    { q: "400 out of 500 percentage", ans: "80.0%" },
    { q: "450 out of 500 percentage", ans: "90.0%" },
    { q: "250 out of 300 percentage", ans: "83.3%" },
    { q: "75 out of 100 percentage", ans: "75.0%" },
    { q: "600 out of 600 percentage", ans: "100.0%" },
    { q: "45 out of 50 percentage", ans: "90.0%" },
    { q: "18 out of 20 percentage", ans: "90.0%" },
    { q: "Calculate percentage for 4 subjects", ans: "Sum all obtained and totals, then apply formula." },
    { q: "Calculate percentage for 5 subjects", ans: "Sum all obtained and totals, then apply formula." },
    { q: "Calculate percentage for 6 subjects", ans: "Sum all obtained and totals, then apply formula." },
    { q: "Convert percentage to 4.0 GPA scale", ans: "Divide percentage by 25 or use standard institutional charts." },
    { q: "Convert CGPA to percentage formula", ans: "Multiply CGPA by 9.5 (commonly used in India)." },
    { q: "What is 70 percent of 500 marks", ans: "350 marks" },
    { q: "What is 80 percent of 600 marks", ans: "480 marks" },
    { q: "What is 60 percent of 400 marks", ans: "240 marks" },
    { q: "Percentage increase calculator formula", ans: "((New - Old) ÷ Old) × 100" },
    { q: "Percentage decrease calculator formula", ans: "((Old - New) ÷ Old) × 100" },
    { q: "Difference between percentage and percentile", ans: "Percentage is score ratio; percentile is relative rank." },
    { q: "How to find total marks from percentage", ans: "Obtained Marks ÷ (Percentage ÷ 100)" },
    { q: "How to find obtained marks from percentage", ans: "Total Marks × (Percentage ÷ 100)" },
    { q: "University aggregate marks calculator", ans: "Weighted sum of entry tests and board exams." },
    { q: "Semester percentage calculator online", ans: "Free automated tool for term-wise results." },
    { q: "High school marks percentage converter", ans: "Instant conversion for report cards." },
    { q: "Passing percentage calculator", ans: "Check if marks meet the minimum criteria (e.g., 33% or 40%)." },
    { q: "Online total percentage checker", ans: "Fast and accurate tool for overall academic standing." },
  ];

  const mistakes = [
    {
      title: "Dividing by the wrong total",
      desc: "Using the total marks for one subject when calculating your aggregate across several subjects gives a meaningless number. Add up every subject's total first.",
    },
    {
      title: "Forgetting to include all subjects",
      desc: "Leaving out a subject, especially one you did poorly in, will inflate your calculated percentage above your real result.",
    },
    {
      title: "Confusing percentage with percentile",
      desc: "Percentage is your score out of the total possible marks. Percentile compares your rank against other students. They answer different questions and aren't interchangeable.",
    },
    {
      title: "Rounding too early",
      desc: "Rounding each subject's percentage before combining them into an aggregate can shift your final number slightly. Keep full decimal precision until the last step.",
    },
  ];

  const tips = [
    {
      title: "Use your official mark sheet",
      desc: "Pull obtained and total marks directly from your report card rather than estimating from memory.",
    },
    {
      title: "Separate internal and external marks if required",
      desc: "Some grading systems weight internal assessments and final exams differently. Check whether your school combines them before you calculate a single percentage.",
    },
    {
      title: "Know which conversion chart your target school uses",
      desc: "Percentage-to-GPA conversion isn't standardized. If you're applying abroad, check the receiving institution's specific chart rather than assuming a general one applies.",
    },
    {
      title: "Recalculate after every exam",
      desc: "Checking your aggregate after each result comes in helps you see clearly which subjects need more attention before the next one.",
    },
  ];

  const faqs = [
    {
      q: "How do I calculate percentage from marks (e.g. 338 out of 500)?",
      a: "Divide the marks obtained by total marks and multiply by 100. For instance, 338 out of 500 in percentage is (338 ÷ 500) × 100 = 67.6%.",
    },
    {
      q: "How do I calculate aggregate percentage across multiple subjects?",
      a: "An aggregate percentage calculator sums all obtained marks across your subjects and divides them by the sum of all total marks, multiplying the final result by 100. This ensures accurate weighting compared to averaging percentages directly.",
    },
    {
      q: "How do I convert percentage to GPA?",
      a: "There's no single universal formula, since conversion scales vary by institution. A common approximate method divides your percentage by 100 and multiplies by 4, or uses a conversion chart matching percentage ranges to specific GPA values. Check your school's official chart for precision.",
    },
    {
      q: "How do I convert CGPA to percentage?",
      a: "Many Indian universities use the approximate formula: Percentage = CGPA × 9.5. This is a widely used estimate, not a universal standard, so check whether your specific institution has its own official conversion formula.",
    },
    {
      q: "What is the difference between percentage and percentile?",
      a: "Percentage measures your score against the total possible marks on a test. Percentile measures how your score compares to other test-takers, showing what portion of students scored at or below your level. They measure different things and aren't interchangeable.",
    },
    {
      q: "How do I calculate percentage increase or decrease?",
      a: "Subtract the original value from the new value, divide that difference by the original value, then multiply by 100. A positive result is a percentage increase, and a negative result is a percentage decrease.",
    },
    {
      q: "What percentage is required for a first-class degree?",
      a: "This varies by country and institution, but many systems set a first-class threshold around 60% or higher, with distinction sometimes starting at 75% or above. Check your specific university's grading policy.",
    },
    {
      q: "How do I calculate the percentage of marks needed to pass?",
      a: "Check your institution's stated passing percentage, commonly 33% to 40% depending on the country and level of study, then compare it to your calculated percentage using the same obtained-over-total formula.",
    },
    {
      q: "Can percentage be higher than 100%?",
      a: "Not under a standard marking scheme, where 100% represents the maximum possible score. Some grading systems do allow bonus marks that push a raw score above the standard total, which can technically show as slightly over 100%.",
    },
    {
      q: "How do I calculate my overall percentage across multiple years?",
      a: "Add up your total obtained marks across every subject in every year, and separately add up the total possible marks across the same period, then divide and multiply by 100 — the same aggregate method used for combining multiple subjects in one term.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Percentage Calculator - Calculate Marks Percentage Instantly",
    description:
      "Free percentage calculator with formula, worked examples, and a percentage-to-GPA conversion chart.",
    author: { "@type": "Organization", name: "StudyCalc" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://studycalc.co/calculators" },
      { "@type": "ListItem", position: 3, name: "Percentage Calculator", item: "https://studycalc.co/percentage-formula-explained" },
    ],
  };

  return (
    <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          📊 Percentage Calculator Guide
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Percentage Calculator: Calculate Marks Percentage Instantly
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Enter your obtained marks and total marks into the calculator above to get your exact percentage. Below,
          you'll find the formula, a full worked example across multiple subjects, and how percentage compares to
          GPA and CGPA.
        </p>
      </div>

      <nav className="mt-8 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-3">On This Page</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-cyan-400 hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="what-is-percentage-calculator" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">What Is a Percentage Calculator?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          A percentage calculator converts raw marks into a percentage out of 100, making it easy to compare
          results across subjects, exams, or grading systems that don't use the same total marks.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Percentage is one of the most common ways schools report academic performance, alongside GPA and CGPA.
          Unlike GPA, which needs a conversion scale, percentage is a direct, unscaled representation of how many
          marks you earned out of the total available.
        </p>
      </div>

      <div id="how-to-calculate-percentage-from-marks" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How to Calculate Percentage From Marks</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Students frequently look up specific conversion scores like <strong>338 percentage out of 500</strong> or want to know how marks translate into percentages across different totals (such as 338 out of 400, 400 out of 500, or 450 out of 500). Calculating your score manually is straightforward once you apply the correct mathematical proportion.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Percentage = (Marks Obtained ÷ Total Marks) × 100
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">
          <strong>Detailed Worked Example (338 out of 500):</strong><br />
          If you scored 338 marks out of a total 500, divide 338 by 500 to get 0.676, then multiply by 100 to get <span className="text-cyan-400 font-bold">67.6%</span>.
        </p>
        
        <h3 className="mt-6 text-xl font-bold text-white">Common Student Exam Examples</h3>
        <ul className="mt-3 space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li><strong>338 out of 500:</strong> (338 ÷ 500) × 100 = 67.6%</li>
          <li><strong>338 out of 400:</strong> (338 ÷ 400) × 100 = 84.5%</li>
          <li><strong>400 out of 500:</strong> (400 ÷ 500) × 100 = 80.0%</li>
          <li><strong>450 out of 500:</strong> (450 ÷ 500) × 100 = 90.0%</li>
        </ul>

        <h3 className="mt-6 text-xl font-bold text-white">Marks Percentage vs. Aggregate Percentage</h3>
        <p className="mt-3 leading-7 text-slate-300">
          A single-subject percentage evaluates one exam or course, whereas an <strong>aggregate percentage</strong> computes your overall academic standing across multiple subjects with potentially varying total marks. Using an aggregate percentage calculator prevents weighting errors that happen when individual percentages are incorrectly averaged together.
        </p>
      </div>

      {/* New Top 30 Global Search Queries Section */}
      <div id="global-queries-breakdown" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Global Student Search Queries & Scenarios (Top 30)</h2>
        <p className="mt-4 leading-7 text-slate-300">
          To help cover popular study queries searched worldwide by students, here is a quick-reference guide addressing the top 30 common variations related to marks, percentages, and conversions:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Search Query / Scenario</th>
                <th className="px-4 py-3 text-left">Standard Output / Formula</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {globalQueries.map((item, index) => (
                <tr key={index} className="hover:bg-slate-900/50">
                  <td className="px-4 py-3 font-mono text-slate-500">{index + 1}</td>
                  <td className="px-4 py-3 font-medium text-white">{item.q}</td>
                  <td className="px-4 py-3 font-mono text-cyan-400">{item.ans}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div id="why-use" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Why Use This Calculator</h2>
        <ul className="mt-4 space-y-3 text-slate-300 leading-7">
          <li>
            <span className="font-semibold text-white">To find your aggregate across subjects.</span> Combine
            marks from several subjects with different total marks into one accurate overall percentage.
          </li>
          <li>
            <span className="font-semibold text-white">Before applying somewhere that asks for a percentage.</span>{" "}
            Some applications and scholarships ask specifically for percentage rather than GPA.
          </li>
          <li>
            <span className="font-semibold text-white">To convert between grading systems.</span> If you need to
            translate a percentage into an approximate GPA or CGPA for a foreign application, this calculator gives
            you a starting point.
          </li>
          <li>
            <span className="font-semibold text-white">To double-check a report card.</span> Recalculating from raw
            marks is the fastest way to confirm a printed percentage is correct.
          </li>
        </ul>
      </div>

      <div id="how-it-works" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How This Calculator Works</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Enter the marks you obtained and the total marks available, either for a single subject or across
          several. The calculator divides your total obtained marks by your total possible marks and multiplies by
          100 to give a single percentage figure.
        </p>
      </div>

      <div id="formula" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Percentage Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Percentage = (Marks Obtained ÷ Total Marks) × 100
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">
          For an aggregate across multiple subjects, the same formula applies, but you sum the obtained marks and
          total marks across every subject first, before dividing.
        </p>
      </div>

      <div id="example" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Example</h2>
        <p className="mt-4 leading-7 text-slate-300">
          A single-subject example first: a student scores {singleExample.obtained} out of{" "}
          {singleExample.total} on an exam.
        </p>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p className="font-mono font-bold text-cyan-400">
            Percentage = ({singleExample.obtained} ÷ {singleExample.total}) × 100 = {singlePercent}%
          </p>
        </div>

        <h3 className="mt-8 text-lg font-bold text-white">Aggregate Example: Four Subjects</h3>
        <p className="mt-3 leading-7 text-slate-300">
          Now say a student took four subjects in one term:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Subject</th>
                <th className="px-5 py-3.5 text-left">Marks Obtained</th>
                <th className="px-5 py-3.5 text-left">Total Marks</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {subjects.map((s, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5">{s.subject}</td>
                  <td className="px-5 py-3.5 font-mono">{s.obtained}</td>
                  <td className="px-5 py-3.5 font-mono">{s.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p>Total marks obtained: {totalObtained}</p>
          <p>Total marks possible: {totalMarks}</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            Aggregate Percentage = {totalObtained} ÷ {totalMarks} × 100 = {aggregatePercent}%
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Notice that averaging the four individual percentages directly would give the same result here only
          because every subject shares the same total marks. If the subjects had different totals, averaging the
          percentages directly would produce the wrong aggregate.
        </p>
      </div>

      <div id="conversion" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Percentage to GPA Conversion</h2>
        <p className="mt-4 leading-7 text-slate-300">
          If you need to estimate a GPA or letter grade equivalent for your percentage, here's a common reference
          chart. Always confirm against your specific school's official conversion policy before using this for an
          application.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Percentage</th>
                <th className="px-5 py-3.5 text-left">Approximate GPA</th>
                <th className="px-5 py-3.5 text-left">Letter Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {conversionChart.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.percentage}</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{row.gpa}</td>
                  <td className="px-5 py-3.5 text-slate-300">{row.letter}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Once you have a GPA estimate, you can combine multiple terms using our{" "}
          <Link href="/cgpa-calculator" className="text-cyan-400 hover:underline">
            CGPA Calculator
          </Link>
          .
        </p>
      </div>

      <div id="mistakes" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Common Mistakes</h2>
        <div className="mt-6 space-y-4">
          {mistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <h3 className="text-base font-bold text-white">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="tips" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Tips for Accurate Results</h2>
        <div className="mt-6 space-y-4">
          {tips.map((t, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <h3 className="text-base font-bold text-white">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-6">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="faqs" className="mt-16 border-t border-slate-800/60 pt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-sm mb-6">
          The questions students ask most often about calculating percentage and converting it to other scales.
        </p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h3 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h3>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="related-tools" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-4">Related Tools & Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate a single semester's GPA in seconds.</p>
          </Link>
          <Link href="/cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Combine every semester into one cumulative score.</p>
          </Link>
          <Link href="/attendance-percentage-formula" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Attendance Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Check if you meet your exam eligibility requirements.</p>
          </Link>
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Find out what score you need on your final exam.</p>
          </Link>
          <Link href="/how-to-calculate-gpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate GPA</span>
            <p className="mt-1 text-sm text-slate-400">The full step-by-step guide for a single semester.</p>
          </Link>
          <Link href="/how-to-calculate-cgpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate CGPA</span>
            <p className="mt-1 text-sm text-slate-400">Learn how semester GPAs combine into a cumulative score.</p>
          </Link>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-slate-800 bg-slate-950/40 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li>Percentage is marks obtained divided by total marks, times 100.</li>
          <li>Aggregate percentage sums obtained and total marks first, then divides.</li>
          <li>Percentage and percentile measure different things — don't confuse them.</li>
          <li>Percentage-to-GPA conversion varies by institution — always confirm the official chart.</li>
          <li>Use the Percentage Calculator to avoid manual errors across multiple subjects.</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Final Summary</h2>
        <p className="leading-7 text-slate-300">
          Percentage is the most direct way to see how you performed against the total marks available, and the
          calculator above does the division for you instantly. Knowing the formula behind it means you can check
          an aggregate across subjects, or convert to GPA, with confidence rather than guesswork.
        </p>
      </div>

      <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Calculate Your Percentage?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Scroll up, enter your marks, and get your exact percentage instantly — completely free.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <a href="#top" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Use the Calculator
          </a>
          <Link href="/gpa-calculator" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
            Try GPA Calculator
          </Link>
        </div>
      </div>
    </section>
  );
}