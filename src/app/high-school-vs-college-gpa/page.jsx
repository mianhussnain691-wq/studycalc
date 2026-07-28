import Link from "next/link";

export const metadata = {
  title: "High School vs College GPA: Differences, Weighting & Conversion Rules",
  description: "Learn how High School GPA differs from College GPA. Discover unweighted vs weighted 5.0 systems, credit hour impacts, and transcript evaluation rules.",
  keywords: [
    "high school vs college gpa",
    "difference between high school and college gpa",
    "does high school gpa transfer to college",
    "how credit hours affect college gpa",
    "5.0 weighted high school gpa to 4.0 college gpa",
    "college academic standing gpa requirements",
  ],
};

export default function HighSchoolVsCollegeGPA() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">
      
      {/* Header Section */}
      <header className="mb-10 text-center md:text-left">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
          Academic Transition & Standards
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          High School GPA vs. College GPA: Key Differences & Calculation Shift
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          Transitioning from high school to university introduces major changes in how grade point averages are computed. Understand weighting adjustments, credit hour impact, and academic standing rules.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-10 text-base leading-relaxed">

        {/* Section 1: Introduction */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">The fundamental Shift in Academic Evaluation</h2>
          <p>
            Many incoming freshman college students assume that maintaining a high GPA in university follows the same math as high school. However, <strong>college grading systems operate under fundamentally different rules</strong>.
          </p>
          <p className="mt-4">
            While high schools frequently use 5.0 weighted scales for Honors or AP courses and treat every class period with equal daily weight, universities strictly evaluate academic performance using credit-hour weighting on an unweighted 4.0 scale.
          </p>
        </section>

        {/* Section 2: Comparison Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            1. Core Comparison: High School GPA vs College GPA
          </h2>
          <p>
            The table below outlines the primary structural differences between high school and undergraduate grading frameworks:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Feature</th>
                  <th className="p-3 border-r border-slate-800">High School GPA</th>
                  <th className="p-3">College GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Standard Scale</td>
                  <td className="p-3 border-r border-slate-800">4.0 Unweighted / 5.0 Weighted</td>
                  <td className="p-3 text-emerald-400 font-bold">Strict 4.0 Unweighted Scale</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Class Weighting</td>
                  <td className="p-3 border-r border-slate-800">Extra points (+0.5/+1.0) for AP/IB/Honors</td>
                  <td className="p-3">No extra points for difficulty levels</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Course Value</td>
                  <td className="p-3 border-r border-slate-800">Usually 1.0 unit per class per year</td>
                  <td className="p-3 text-cyan-300 font-bold">Weighted by Credit Hours (1 to 5 credits)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Academic Standing Impact</td>
                  <td className="p-3 border-r border-slate-800">Class rank & admissions eligibility</td>
                  <td className="p-3">Academic Probation, Dean's List, Graduation</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">Transferability</td>
                  <td className="p-3 border-r border-slate-800">Used for college entry application</td>
                  <td className="p-3">Does not reset if transferring between colleges</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Credit Hour Weighting Explanation */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            2. How Credit Hours Multiply Impact in College
          </h2>
          <p>
            In high school, getting a "B" in Physical Education drops your GPA just as much as a "B" in AP Chemistry. In college, <strong>credit hours act as multipliers</strong>.
          </p>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-3 text-sm">
            <h4 className="font-bold text-white text-base">Example Breakdown:</h4>
            <p>• <strong>Calculus (4 Credit Hours):</strong> Earning an "A" (4.0) generates <strong>16 Quality Points</strong> (4 × 4.0).</p>
            <p>• <strong>Seminars (1 Credit Hour):</strong> Earning a "C" (2.0) generates <strong>2 Quality Points</strong> (1 × 2.0).</p>
            <p className="pt-2 border-t border-slate-800 text-cyan-300 font-mono">
              Total GPA = 18 Total Quality Points ÷ 5 Total Credit Hours = <strong>3.60 GPA</strong>
            </p>
          </div>
        </section>

        {/* Section 4: Does High School GPA Carry Over? */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            3. Does Your High School GPA Transfer to University?
          </h2>
          <p>
            The simple answer is <strong>no</strong>. Once you enroll in college, your high school cumulative GPA is permanently locked on your secondary school transcript. Your university transcript starts at a blank 0.00 cumulative GPA on Day 1.
          </p>
          <p>
            However, dual-enrollment college credits taken during high school may transfer earned quality points depending on university credit transfer evaluation policies.
          </p>
        </section>

        {/* Section 5: Internal Link Engine */}
        <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Calculate Your High School or College GPA</h3>
          <p className="text-slate-400 text-sm mb-4">
            Whether you are calculating weighted high school marks or credit-weighted college grades, our specialized algorithms give instant accuracy.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
              High School GPA Calculator 🚀
            </Link>
            <Link href="/college-gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              College GPA Calculator 📊
            </Link>
            <Link href="/grade-scale-explained" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Grading Scales Chart ⚖️
            </Link>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions (FAQs) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Why don't colleges use 5.0 weighted GPAs?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Colleges use an unweighted 4.0 scale to standardize academic evaluations across diverse applicants, regardless of high school course weighting policies.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">What is a good GPA in college compared to high school?</h3>
              <p className="text-sm text-slate-400 mt-1">
                In high school, competitive students aim for 3.8–4.2+ GPAs. In college, maintaining a 3.5+ GPA is widely considered honor-level (Dean's List) performance.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}