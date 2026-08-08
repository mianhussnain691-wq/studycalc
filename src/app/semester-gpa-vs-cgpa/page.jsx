import Link from "next/link";

export const metadata = {
title: "Semester GPA vs CGPA: Differences & Calculation",
  description:
    "Understand the core differences between Semester GPA (SGPA) and Cumulative GPA (CGPA). Learn how SGPA affects CGPA, conversion formulas, and mathematical examples.",
  keywords: [
    "Semester GPA vs CGPA",
    "SGPA vs CGPA difference",
    "how to convert SGPA to CGPA",
    "calculate cumulative grade point average",
    "semester grade point average formula",
    "university GPA tracking",
  ],
};

export default function SemesterGPAvsCGPA() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">
      
      {/* Header Section */}
      <header className="mb-10 text-center md:text-left">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
          Academic Evaluation Frameworks
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Semester GPA vs CGPA: Understanding the Mathematical & Academic Differences
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          A comprehensive guide explaining Semester Grade Point Average (SGPA), Cumulative Grade Point Average (CGPA), how one impacts the other, and accurate calculation models.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-8 text-base leading-relaxed">

        {/* Introduction */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Introduction to Institutional Performance Metrics</h2>
          <p>
            In higher education, academic performance is quantified using standardized numerical averages. The two most prominent metrics found on university transcripts are <strong>Semester Grade Point Average (SGPA)</strong> and <strong>Cumulative Grade Point Average (CGPA)</strong>.
          </p>
          <p className="mt-3">
            While both metrics evaluate a student's academic standing, they operate over completely different time horizons. Confusing these two numbers can lead to miscalculations when applying for scholarships, post-graduate programs, or academic honors.
          </p>
        </section>

        {/* Section 1: What is SGPA? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            1. What is Semester GPA (SGPA)?
          </h2>
          <p>
            <strong>Semester GPA (SGPA)</strong> measures a student's performance over a single term or semester. It is a isolated metric that resets at the beginning of every new academic term. 
          </p>
          <p>
            SGPA is calculated by taking the weighted total of grade points earned in courses taken during that specific term, divided by the total credit hours attempted in that same term.
          </p>

          <div className="my-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
            <p className="text-lg md:text-xl font-bold text-cyan-400 font-mono">
              SGPA = ∑ (Course Grade Points × Course Credit Hours) ÷ Total Semester Credit Hours
            </p>
          </div>
        </section>

        {/* Section 2: What is CGPA? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            2. What is Cumulative GPA (CGPA)?
          </h2>
          <p>
            <strong>Cumulative Grade Point Average (CGPA)</strong> represents the overall academic standing of a student across their entire degree program. It incorporates all credit hours attempted and all grade points accumulated from the first semester up to the current term.
          </p>
          <p>
            Unlike SGPA, CGPA does not reset. It moves dynamically with each passing term, serving as the definitive snapshot of a student's long-term academic health.
          </p>

          <div className="my-6 rounded-xl border border-violet-500/20 bg-slate-950 p-6 text-center">
            <p className="text-lg md:text-xl font-bold text-violet-400 font-mono">
              CGPA = ∑ Total Grade Points Across All Semesters ÷ Total Credit Hours Attempted
            </p>
          </div>
        </section>

        {/* Section 3: Core Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            Direct Structural Comparison
          </h2>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Feature</th>
                  <th className="p-3 border-r border-slate-800">Semester GPA (SGPA)</th>
                  <th className="p-3">Cumulative GPA (CGPA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Time Scope</td>
                  <td className="p-3 border-r border-slate-800">Single Semester / Term</td>
                  <td className="p-3">Entire Degree Duration</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Reset Frequency</td>
                  <td className="p-3 border-r border-slate-800">Resets every semester</td>
                  <td className="p-3">Accumulates continuously</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Volatility</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">High (Fluctuates easily)</td>
                  <td className="p-3 text-cyan-400">Low (Harder to shift over time)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Impact of One Bad Grade</td>
                  <td className="p-3 border-r border-slate-800">Significant drop in term score</td>
                  <td className="p-3">Diluted over total credit volume</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Primary Purpose</td>
                  <td className="p-3 border-r border-slate-800">Term evaluation & Dean's List</td>
                  <td className="p-3">Graduation, Placement & Degree Class</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Mathematical Example */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            Mathematical Example: How SGPA Builds CGPA
          </h2>
          <p>
            Common misconception: <em>"Can I just add my SGPAs together and divide by the number of semesters?"</em>
          </p>
          <p className="text-red-400 font-semibold">
            Answer: NO! That simple average is mathematically incorrect unless every semester has the exact same credit hours.
          </p>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-4 my-4">
            <h3 className="font-bold text-white text-lg">Real World Scenario:</h3>
            <div className="space-y-2 text-sm">
              <p>• <strong>Semester 1:</strong> SGPA = 3.8 (attempted 15 credit hours) → Total Points = 57.0</p>
              <p>• <strong>Semester 2:</strong> SGPA = 3.2 (attempted 20 credit hours) → Total Points = 64.0</p>
            </div>
            <div className="pt-3 border-t border-slate-800">
              <p className="text-sm">Total Grade Points = 57.0 + 64.0 = <strong className="text-white">121.0</strong></p>
              <p className="text-sm">Total Credit Hours = 15 + 20 = <strong className="text-white">35</strong></p>
              <p className="text-base font-bold text-cyan-400 mt-2">
                Correct CGPA = 121.0 ÷ 35 = 3.45
              </p>
              <p className="text-xs text-slate-500 mt-1">
                (Note: A simple average of (3.8 + 3.2) ÷ 2 = 3.50, which gives an inaccurate result).
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Internal Links CTA */}
        <section className="my-8 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Calculate Your SGPA & CGPA Right Now</h3>
          <p className="text-slate-400 text-sm mb-4">
            Avoid manual mathematical errors. Use our production calculation engines to evaluate your semester or degree cumulative standing instantly.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
              Calculate SGPA 🚀
            </Link>
            <Link href="/how-to-calculate-cgpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              CGPA Calculation Engine 📊
            </Link>
            <Link href="/weighted-gpa-vs-unweighted-gpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Weighted vs Unweighted GPA ⚖️
            </Link>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Why does CGPA become harder to change in later semesters?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Because as you complete more credit hours, your total denominator increases. A single semester's grades represent a smaller fraction of your total academic history in senior year compared to freshman year.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Is SGPA or CGPA requested during job interviews?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Employers and graduate admissions boards almost exclusively request your CGPA, as it represents your overall consistency throughout your degree.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}