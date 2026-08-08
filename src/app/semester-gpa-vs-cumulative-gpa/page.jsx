import Link from "next/link";

export const metadata = {
  title: "Semester GPA vs Cumulative GPA: Differences, Calculations & Impact",
  description: "Learn the core differences between Semester GPA and Cumulative GPA. Understand how term grades aggregate over time, credit weight formulas, and recovery strategies.",
  keywords: [
    "semester gpa vs cumulative gpa",
    "difference between term gpa and cumulative gpa",
    "how to calculate overall cumulative gpa",
    "does semester gpa affect cumulative gpa",
    "cumulative gpa formula with credit hours",
    "how to raise low cumulative gpa",
  ],
};

export default function SemesterVsCumulativeGPA() {
  return (
<article className="min-h-screen bg-[#070b19] text-slate-300 pt-32 px-6 max-w-5xl mx-auto pb-20">      
      {/* Header Section */}
      <header className="mb-10 text-center md:text-left">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
          Academic Progress Tracking
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Semester GPA vs. Cumulative GPA: Essential Differences & Formulas
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          Understanding the distinction between single-term evaluation and total academic trajectory is crucial for keeping scholarships, Dean's list status, and graduation eligibility.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-10 text-base leading-relaxed">

        {/* Section 1: Overview */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Understanding the Two Core Metrics</h2>
          <p>
            Your academic transcript displays two primary Grade Point Averages: <strong>Semester GPA</strong> (sometimes called Term GPA) and <strong>Cumulative GPA</strong> (CGPA).
          </p>
          <p className="mt-4">
            While Semester GPA measures your immediate performance over a single term (usually 15–16 weeks), Cumulative GPA represents the running average of all courses completed across your entire degree program.
          </p>
        </section>

        {/* Section 2: Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            1. Direct Comparison: Term vs Overall GPA
          </h2>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Feature</th>
                  <th className="p-3 border-r border-slate-800">Semester (Term) GPA</th>
                  <th className="p-3">Cumulative GPA (CGPA)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Timeframe</td>
                  <td className="p-3 border-r border-slate-800">Single semester or trimester</td>
                  <td className="p-3 text-emerald-400 font-bold">Entire degree history to date</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Volatilty</td>
                  <td className="p-3 border-r border-slate-800">High (Flctuates easily with few classes)</td>
                  <td className="p-3 border-r border-slate-800">Low (Harder to move as total credits grow)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Scholarship Impact</td>
                  <td className="p-3 border-r border-slate-800">Often used for term-by-term probation checks</td>
                  <td className="p-3">Primary metric for retaining financial aid</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Honors Eligibility</td>
                  <td className="p-3 border-r border-slate-800">Qualifies for Dean's List / Term Honors</td>
                  <td className="p-3">Qualifies for Cum Laude / Graduation Honors</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Cumulative Calculation Law */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            2. The Mathematical Law of Cumulative Inertia
          </h2>
          <p>
            The most common mistake students make is averaging their semester GPAs directly together. <strong>You cannot simply add Term 1 GPA and Term 2 GPA and divide by 2</strong> unless both terms contained the exact same number of credit hours.
          </p>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-3 font-mono text-sm border-l-4 border-l-cyan-500">
            <p className="text-cyan-400 font-bold text-base font-sans">Correct Cumulative GPA Formula:</p>
            <p className="text-slate-200">
              Cumulative GPA = Total Earned Quality Points ÷ Total Attempted Credit Hours
            </p>
          </div>
          <p className="text-slate-400 text-sm">
            As your total credit count grows (e.g., passing 60+ credits), each new semester grade carries proportionally less weight in changing your overall Cumulative GPA.
          </p>
        </section>

        {/* Section 4: Internal Link Engine */}
        <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Calculate Your Semester & Cumulative GPA</h3>
          <p className="text-slate-400 text-sm mb-4">
            Don't do manual quality point calculations! Use our instant multi-term calculators to project your overall degree progress.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
              Calculate Semester GPA 🚀
            </Link>
            <Link href="/gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Calculate Cumulative GPA 📊
            </Link>
            <Link href="/high-school-vs-college-gpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              High School vs College GPA ⚖️
            </Link>
          </div>
        </section>

        {/* Section 5: FAQs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Can a high semester GPA quickly fix a low cumulative GPA?</h3>
              <p className="text-sm text-slate-400 mt-1">
                It depends on how many total credit hours you have completed. Early in college (Freshman year), one high semester GPA dramatically shifts your cumulative score. In Senior year, the change is significantly smaller.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Which GPA do employers and graduate schools look at?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Graduate programs and employers look primarily at your overall **Cumulative GPA**, though many paid programs also review major-specific GPA or last 60-credit trends.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}