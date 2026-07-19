import Link from "next/link";

export default function GPAScaleExplained() {
  const scaleComparison = [
    { letter: "A+ / A", point4: "4.00", point5: "5.00", point10: "10.00", percentage: "93% – 100%", descriptor: "Outstanding / Exceptional Mastery" },
    { letter: "A-", point4: "3.70", point5: "4.70", point10: "9.00", percentage: "90% – 92%", descriptor: "Excellent Academic Standing" },
    { letter: "B+", point4: "3.30", point5: "4.30", point10: "8.00", percentage: "87% – 89%", descriptor: "Very Good / High Competency" },
    { letter: "B", point4: "3.00", point5: "4.00", point10: "7.00", percentage: "83% – 86%", descriptor: "Good / Standard Mastery" },
    { letter: "B-", point4: "2.70", point5: "3.70", point10: "6.50", percentage: "80% – 82%", descriptor: "Above Average Tracking" },
    { letter: "C+", point4: "2.30", point5: "3.30", point10: "6.00", percentage: "77% – 79%", descriptor: "Satisfactory Performance" },
    { letter: "C", point4: "2.00", point5: "3.00", point10: "5.00", percentage: "73% – 76%", descriptor: "Average / Core Baseline" },
    { letter: "D", point4: "1.00", point5: "2.00", point10: "4.00", percentage: "60% – 72%", descriptor: "Minimal Pass Parameter" },
    { letter: "F", point4: "0.00", point5: "0.00", point10: "0.00", percentage: "Below 60%", descriptor: "Failure / No Credit Earned" }
  ];

  const faqStack = [
    {
      q: "What is the structural difference between a Weighted and an Unweighted GPA scale?",
      a: "An unweighted GPA scale measures academic performance on a rigid framework ranging from 0.0 to 4.0, treating every single course identically regardless of difficulty. A weighted GPA scale adjusts for academic rigor by factorizing course difficulty: Standard courses max out at 4.0, while Honors, Advanced Placement (AP), or International Baccalaureate (IB) courses scale up to 5.0, reflecting the heightened quantitative workload."
    },
    {
      q: "How do global admissions councils convert a 10-point Indian or European CGPA to a standard US 4.0 scale?",
      a: "Credential evaluation networks like WES evaluate transcripts course-by-course rather than executing a simple mathematical division. They map institutional credit hours and individual letter grades to the target country's distribution matrix, ensuring that top tier percentages are accurately translated to high tier US grade markers."
    },
    {
      q: "Why do some medical and law school admissions boards recalculate a transcript scale independently?",
      a: "Different universities apply varying internal tracking methods, such as offering non-punitive grade forgiveness or utilizing an 'A+' framework worth 4.33 points. To establish a standardized baseline across all incoming global applicants, centralized boards recalculate every transcript using a uniform, strict matrix that removes regional grade inflation variables."
    },
    {
      q: "Does a high unweighted GPA carry more weight than a slightly lower weighted GPA score?",
      a: "Elite institutional frameworks generally prefer a slightly lower GPA (e.g., 3.85) on a highly rigorous weighted track filled with advanced modules over a perfect 4.00 on an unweighted, basic curriculum. Admissions systems prioritize evidence of a student pushing their academic limits over safe, inflated metrics."
    }
  ];

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* Top Meta Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 border border-violet-500/20 mb-4">
          📊 Transcript Architecture & Registry Ledger
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Understanding the GPA Scale: The Ultimate Global Grading Framework and Conversion Blueprint
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300 text-justify">
          The Grade Point Average (GPA) system serves as the universal language of academic evaluation. However, because institutions globally alternate between 4.0 frameworks, 5.0 systems, 10.0 scale matrices, and percentage metrics, deciphering your true standing can be complex. This analytical guide provides a comprehensive breakdown of weighted versus unweighted structures, international conversion principles, and strategic tracking standards.
        </p>
      </div>

      {/* Section 1: Core Definitions */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">01.</span> Deconstructing the Modern GPA Scale Framework
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          At its foundational level, a GPA scale converts qualitative evaluation markers—such as letter grades or percentage thresholds—into quantitative digits that can be mathematically analyzed. This numerical representation allows admissions councils, registrar tracking modules, and scholarship boards to quickly evaluate a student's performance over several years of study.
        </p>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          While the traditional 4.0 unweighted scale remains the baseline standard for many North American institutions, global higher education utilizes alternative matrices. Understanding how these variations function is essential for anyone dealing with multi-term academic planning or international transcript evaluations. To see how these scales connect with the absolute mathematical calculations of cumulative scores, check out our detailed guide on <Link href="/how-to-calculate-cgpa" className="text-violet-400 hover:underline">How to Calculate CGPA</Link>.
        </p>
      </div>

      {/* Section 2: Weighted vs Unweighted Deep Dive */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">02.</span> Weighted vs. Unweighted Scales: The Structural Differences
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          The distinction between a weighted and an unweighted grading model represents one of the most critical structural variances in educational analytics:
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-400"></span> Unweighted GPA Scales (0.0 – 4.0 Base)
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-6 text-justify">
              In an unweighted matrix, the difficulty level of a class is completely isolated from its final numerical conversion point. An 'A' in an advanced, intensive engineering lecture yields exactly 4.0 quality points, matching the weight of an introductory elective. While straightforward, this system does not capture the added effort required for advanced coursework.
            </p>
          </div>
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span> Weighted GPA Scales (0.0 – 5.0 Base)
            </h3>
            <p className="mt-2 text-sm text-slate-400 leading-6 text-justify">
              A weighted framework factorizes course difficulty. Standard courses cap at a 4.0 baseline, but advanced modules, honors seminars, or AP/IB tracks receive an extra point bump, topping out at 5.0. This scaling ensures that students who tackle a more demanding curriculum are rewarded mathematically on their transcripts.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Global Scale Matrix */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">03.</span> The Definitive Multi-Scale Translation Matrix
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          This comprehensive data matrix bridges the gap between different grading architectures, mapping letters, percentages, and global scales into a single unified reference model:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-violet-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Letter Mark</th>
                <th className="px-5 py-3.5 text-left">4.0 Scale</th>
                <th className="px-5 py-3.5 text-left">5.0 Scale</th>
                <th className="px-5 py-3.5 text-left">10.0 Scale</th>
                <th className="px-5 py-3.5 text-left">Raw Percentage</th>
                <th className="px-5 py-3.5 text-left">Institutional Standing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {scaleComparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white font-mono">{row.letter}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-200">{row.point4}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{row.point5}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{row.point10}</td>
                  <td className="px-5 py-3.5 font-mono text-violet-300 font-medium">{row.percentage}</td>
                  <td className="px-5 py-3.5 text-slate-300 text-xs font-medium">{row.descriptor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 4: Academic Strategy & Impact */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">04.</span> Strategic Implications for International Academic Transitions
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          For students planning an international academic transition, understanding these scale variations is essential. Global admissions committees do not look at a raw number in isolation; they analyze it within the context of the originating institution's grading distribution. For example, a 7.5 CGPA out of 10.0 from a highly rigorous engineering program often represents a stronger academic ranking than a 9.0 from a school with significant grade inflation.
        </p>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          To manage your academic targets accurately, you should use standardized calculation tools that properly factor in your course credit units. To see how these conversions work from a baseline percentage score, explore our thorough guide on the <Link href="/percentage-formula-explained" className="text-violet-400 hover:underline">Percentage Formula Explained</Link>.
        </p>
      </div>

      {/* Section 5: Analytical FAQs */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions: GPA Scale Dynamics</h2>
        <p className="text-slate-400 text-sm mb-6">Expert analysis breakdown regarding global grading rubrics, weighted parameter tracking, and evaluation guidelines.</p>
        <div className="space-y-6">
          {faqStack.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-violet-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6 text-justify">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Bottom CTA */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Need to Process Your Multi-Scale Grade Calculations?</h3>
          <p className="text-sm text-slate-400 mt-1">Easily map your raw marks and scale values with our production-grade calculations engine instantly.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link href="/grade-calculator" className="rounded-lg bg-violet-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-violet-500 transition shadow-md">
            Launch Grade Engine 🚀
          </Link>
          <Link href="/attendance-percentage-formula" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
            Check Attendance Benchmarks 📅
          </Link>
        </div>
      </div>

    </article>
  );
}