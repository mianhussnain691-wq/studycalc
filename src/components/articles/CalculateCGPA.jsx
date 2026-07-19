import Link from "next/link";

export default function CalculateCGPA() {
  const cgpaSteps = [
    { step: "1", title: "Comprehensive Academic Records Consolidation", desc: "Extract the official validated statement of marks or structural transcripts for every individual academic session completed up to the current juncture. You must specifically isolate two foundational independent variables per session: the exact total Credit Hours Attempted (the quantitative volume of the coursework) and the final Grade Point Average or raw semantic score earned during that definitive term." },
    { step: "2", title: "Derivation of Credit Quality Points", desc: "For each semester isolated independently, multiply the term-specific GPA by the exact magnitude of credit hours allocated to that specific segment. This mathematical transformation yields the Cumulative Quality Points for that timeline, ensuring that a 12-credit session does not exert an identical mathematical influence as an intensive 21-credit university session." },
    { step: "3", title: "Mathematical Aggregation of Structural Totals", desc: "Summate the calculated Quality Points across every single targeted academic session to derive your global Total Quality Points. Simultaneously, apply standard arithmetic summation to all individual credit units attempted across your entire historical timeline to compute the definitive Total Cumulative Credit Hours." },
    { step: "4", title: "Execution of the Weighted Algorithmic Division", desc: "Divide the total computed Quality Points by the aggregated total of Cumulative Credit Hours. The resulting fractional value must be isolated and precise to a minimum of two decimal frameworks, establishing the absolute structural Cumulative Grade Point Average (CGPA) for the student's institutional record." }
  ];

  const cgpaScaleMatrix = [
    { scale4: "3.90 – 4.00", scale10: "9.5 – 10.0", percentage: "90% – 100%", standing: "First Class with Distinction 🟢", honors: "Summa Cum Laude" },
    { scale4: "3.70 – 3.89", scale10: "8.5 – 9.4", percentage: "80% – 89%", standing: "First Class / Excellent Standing 🔵", honors: "Magna Cum Laude" },
    { scale4: "3.30 – 3.69", scale10: "7.5 – 8.4", percentage: "75% – 79%", standing: "Upper Second Class / Very Good 🟡", honors: "Cum Laude" },
    { scale4: "3.00 – 3.29", scale10: "6.5 – 7.4", percentage: "65% – 74%", standing: "Good Standing / Average 🟠", honors: "None" },
    { scale4: "2.00 – 2.99", scale10: "5.0 – 6.4", percentage: "50% – 64%", standing: "Satisfactory / Pass Bracket 🟤", honors: "None" },
    { scale4: "Below 2.00", scale10: "Below 5.0", percentage: "Below 50%", standing: "Academic Probation / Unsatisfactory 🔴", honors: "Ineligible" }
  ];

  const faqs = [
    {
      q: "What is the exact mathematical distinction between term GPA and institutional CGPA?",
      a: "A term GPA is an isolated performance metric confined strictly to a single, structured academic term (such as a quarter or semester), calculating the weighted performance of only the courses taken in that brief window. Conversely, CGPA (Cumulative Grade Point Average) is an overarching longitudinal metric that dynamically aggregates every single credit hour attempted and every quality point earned across the entirety of a student's academic journey within an institution."
    },
    {
      q: "How do failed courses, academic non-punitive withdrawals, and repeated modules factor into calculations?",
      a: "The mathematical integration of repeated modules depends strictly on institutional registrar bylaws. Under a Grade Forgiveness policy, the lower point value is completely purged from the Quality Points summation, and only the latest score is calculated, though the course credit weight is counted once. Under an Additive tracking policy, both the initial zero-point failing grade and the subsequent passing grade remain active in the system, forcing both sets of credit hours into the divisor, which drastically pulls down the long-term running average."
    },
    {
      q: "Why does directly averaging the individual semester GPAs generate a systemic mathematical error?",
      a: "Directly averaging semester GPAs (e.g., adding 3.5 and 3.9 and dividing by 2) assumes that both terms contained the exact same instructional load and credit value. If Semester 1 comprised 12 credits and Semester 2 comprised 18 credits, they possess radically different mathematical weights. Calculating a simple arithmetic mean ignores these foundational weights, leading to an invalid and mathematically incorrect representation of the student's true academic standing."
    },
    {
      q: "How do non-credit courses, audited seminars, and pass/fail configurations impact long-term metrics?",
      a: "Courses configured under Pass/Fail or Satisfactory/Unsatisfactory rubrics do not possess assigned numerical grade points. While a passing mark can satisfy degree requirements and add to completed credit milestones, both configurations are completely excluded from both the Quality Points dividend and the Credit Hour divisor. They have absolutely zero structural impact on the final calculated CGPA index."
    },
    {
      q: "What is the global formula for converting a 10.0 scale structure into a standard North American 4.0 GPA system?",
      a: "There is no single universal equation due to varying institutional evaluation standards, but the standard linear conversion method utilized by international credential evaluation bodies reduces the index via a proportional scaling equation. This baseline approach subtracts the minimum passing baseline from both structures and sets up a direct ratio, or uses a standard conversion multiplier (such as multiplying the 4.0 scale score by 2.5 to approximate a 10.0 scale baseline) depending on the target country's specific transcript evaluation policies."
    },
    {
      q: "How do honors courses, advanced placement, and weighted institutional scales inflate the calculation model?",
      a: "Many advanced secondary and higher education institutions employ a weighted grading scale where advanced modules, honors seminars, or intensive labs are scaled on a 5.0 framework instead of the traditional 4.0 base. In these systems, an 'A' grade yields 5 quality points instead of 4, which allows a student's final calculated CGPA to rise above a standard perfect 4.0, directly reflecting the heightened academic rigor of their curriculum."
    },
    {
      q: "To how many decimal frameworks should an official registrar transcript round a calculated CGPA?",
      a: "Standard educational ledger systems globally calculate and round CGPA values to exactly two decimal places (e.g., 3.67). However, highly competitive engineering programs, medical school admission boards, and elite scholarship committees frequently compute this data layer out to three or four decimal parameters (e.g., 3.673) to establish razor-thin comparative distinctions between high-ranking student profiles."
    },
    {
      q: "Can extra-curricular performance or independent non-academic certifications modify an institutional CGPA?",
      a: "No. The institutional CGPA is a closed mathematical system governed strictly by credit-bearing courses approved by an academic senate or curriculum committee. External certificates, sports achievements, or non-credit volunteer hours cannot inject quality points or credit weights into this ledger, regardless of their real-world value."
    }
  ];

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* Header Block */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          🎓 Higher Education Registry Manual
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          How to Calculate CGPA: The Definitive Credit-Weighted Mathematical Guide for University Students
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Your Cumulative Grade Point Average (CGPA) is the primary academic metric used by universities, scholarship committees, and employers worldwide. Understanding how credit weights interact with your semester grades is crucial for tracking your academic standing. This guide breaks down the underlying math, step-by-step calculation models, and international scale conversions.
        </p>
      </div>

      {/* Section 1: Detailed Theoretical Core */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> Foundational Principles of Cumulative Evaluation
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          The structural design of modern higher education tracking necessitates an evaluative system that accounts for both the quality of understanding and the volume of academic workload. This is achieved via a credit-weighted system where every single course is assigned a specific credit value representing its relative instructional weight. A 4-credit advanced thermodynamics or data structures lecture demands a higher cognitive and temporal commitment than a 1-credit introductory seminar, and its impact on the permanent academic record must scale proportionally.
        </p>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          When an institution computes a student's long-term academic standing, a simple arithmetic average becomes completely invalid. If a student earns a perfect 4.0 in a 1-credit course but stumbles to a 2.0 in a 5-credit core lecture, their true operational mastery is not a clean 3.0 average. The credit hours act as statistical weight variables that anchor the final calculation toward the heavier, more critical components of the curriculum. For an understanding of how raw scores map into baseline percentages before scaling occurs, explore our deep-dive analysis on the <Link href="/percentage-formula-explained" className="text-cyan-400 hover:underline">Percentage Formula Explained</Link>.
        </p>
      </div>

      {/* Section 2: Mathematical Framework & Variable Isolation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> The Credit-Weighted CGPA Formula and Structural Variables
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          To safely map out your institutional path across multiple terms, the definitive mathematical algorithm used by university registrars must be thoroughly parsed. The core equation isolates Quality Points against Attempted Credits:
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-cyan-400 tracking-wide">
            CGPA = ∑ (Semester GPA × Semester Credit Hours) ÷ Total Cumulative Credit Hours
          </p>
          <p className="mt-2 text-xs text-slate-400 font-mono">Where '∑' denotes the discrete mathematical summation across all completed academic terms available in the transcript.</p>
        </div>
        <p className="mt-6 leading-7 text-slate-300 text-justify">
          To execute this formula flawlessly, you must conceptualize the underlying mechanics: the product of a single semester's GPA and its corresponding credit hours generates an absolute value known as "Semester Quality Points." By adding these products together across all semesters, you build the global dividend. Dividing this large value by the total accumulated credit units yields a mathematically perfect weighted average.
        </p>
      </div>

      {/* Section 3: Deep Case Study Worked Example */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> Comprehensive Step-by-Step Calculation Model and Multi-Term Case Study
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          Let us look at a detailed, realistic academic journey of a student over three separate, non-uniform university semesters. This specific scenario clearly demonstrates how differing term structures prevent a simple unweighted average from being accurate.
        </p>

        <div className="mt-6 space-y-4 rounded-xl bg-slate-950 p-6 border border-slate-800">
          <h3 className="text-base font-bold text-white border-b border-slate-800 pb-2">Multi-Term Case Study Parameters:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-2">
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/40">
              <span className="font-bold text-cyan-400 block mb-1">Semester 1 (Baseline Load)</span>
              <p className="text-slate-300">Term GPA: <span className="text-white font-mono font-semibold">3.80</span></p>
              <p className="text-slate-300">Attempted Credits: <span className="text-white font-mono font-semibold">12.0 Hours</span></p>
              <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800/60 font-mono">
                Points = 3.80 × 12.0 = <span className="text-emerald-400 font-semibold">45.60</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/40">
              <span className="font-bold text-cyan-400 block mb-1">Semester 2 (Intensive Load)</span>
              <p className="text-slate-300">Term GPA: <span className="text-white font-mono font-semibold">3.10</span></p>
              <p className="text-slate-300">Attempted Credits: <span className="text-white font-mono font-semibold">18.0 Hours</span></p>
              <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800/60 font-mono">
                Points = 3.10 × 18.0 = <span className="text-emerald-400 font-semibold">55.80</span>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-slate-900/60 border border-slate-800/40">
              <span className="font-bold text-cyan-400 block mb-1">Semester 3 (Advanced Research)</span>
              <p className="text-slate-300">Term GPA: <span className="text-white font-mono font-semibold">3.50</span></p>
              <p className="text-slate-300">Attempted Credits: <span className="text-white font-mono font-semibold">15.0 Hours</span></p>
              <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800/60 font-mono">
                Points = 3.50 × 15.0 = <span className="text-emerald-400 font-semibold">52.50</span>
              </div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-800 text-sm leading-6 space-y-2">
            <p className="text-slate-300">📊 **Step A: Total Quality Points Accumulation**</p>
            <p className="pl-4 font-mono text-slate-400">45.60 (S1 Points) + 55.80 (S2 Points) + 52.50 (S3 Points) = <span className="text-white font-bold">153.90 Total Quality Points</span></p>
            
            <p className="text-slate-300 mt-3">📈 **Step B: Total Attempted Credit Units Accumulation**</p>
            <p className="pl-4 font-mono text-slate-400">12.0 (S1 Credits) + 18.0 (S2 Credits) + 15.0 (S3 Credits) = <span className="text-white font-bold">45.0 Total Attempted Credits</span></p>
            
            <p className="text-slate-300 mt-3 font-semibold">⚖️ **Step C: Algorithmic Division and Rounding**</p>
            <p className="pl-4 text-slate-400">Divide global quality points by accumulated hours: 153.90 ÷ 45.0</p>
            <div className="mt-2 font-mono font-bold text-lg bg-slate-900 px-4 py-2 rounded-lg border border-slate-800 inline-block text-cyan-400">
              Official Calculated CGPA = 3.42
            </div>
            <p className="text-xs text-slate-500 italic mt-2">Note: If you had simply averaged the three GPAs directly ((3.80 + 3.10 + 3.50) ÷ 3), the result would be an incorrect 3.46. The true weighted logic safely adjusts for the intensive load in Semester 2, protecting the mathematical validity of your transcript record.</p>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {cgpaSteps.map((item) => (
            <div key={item.step} className="flex gap-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 font-mono text-sm font-bold text-cyan-400 border border-cyan-500/20">
                {item.step}
              </span>
              <div>
                <h4 className="text-base font-bold text-white">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400 leading-6 text-justify">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Scale Grid Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">04.</span> Global CGPA Scale Translation Matrix
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          This comprehensive conversion matrix aligns different grading architectures, allowing you to see how a specific score translates across 4.0 scales, 10.0 scales, percentages, and Latin honors standings:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">4.0 Scale Index</th>
                <th className="px-5 py-3.5 text-left">10.0 Scale Index</th>
                <th className="px-5 py-3.5 text-left">Percentage Match</th>
                <th className="px-5 py-3.5 text-left">Academic Standing</th>
                <th className="px-5 py-3.5 text-left">Latin Honors Rank</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {cgpaScaleMatrix.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.scale4}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-200">{row.scale10}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{row.percentage}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-200">{row.standing}</td>
                  <td className="px-5 py-3.5 text-slate-400 italic">{row.honors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: Strategic Structural Guidance for Students */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">05.</span> Strategic Blueprint for CGPA Preservation and Recovery
        </h2>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          Maintaining or lifting a credit-weighted CGPA requires a strategic approach to course load management. Because your total attempted credit hours accumulate over time, the mathematical weight of each new semester decreases as you progress through your degree. For example, a rocky semester during your first year can be balanced out relatively quickly in your second year, because the total divisor (accumulated credit hours) is still small. 
        </p>
        <p className="mt-4 leading-7 text-slate-300 text-justify">
          However, attempting a massive recovery during your senior year is mathematically more difficult. When your total completed credits span over 90 hours, introducing an additional 15-credit term changes the baseline divisor by only a small fraction. This reality means that early academic planning and using professional calculators are vital tools for staying on track for graduation requirements, competitive honors categories, or future graduate school admissions.
        </p>
      </div>

      {/* Section 6: Full Analytical FAQ Stack */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked CGPA Questions</h2>
        <p className="text-slate-400 text-sm mb-6">Expert explanations mapping standard academic policies, credit tracking mechanics, and transcript evaluations.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6 text-justify">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Bottom Call to Action */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Run a Live Dynamic CGPA Evaluation?</h3>
          <p className="text-sm text-slate-400 mt-1">Skip the manual arithmetic. Input your semester values into our production-grade calculations engine instantly.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link href="/grade-calculator" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Open Grade Engine 🚀
          </Link>
          <Link href="/attendance-percentage-formula" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
            Check Attendance Targets 📅
          </Link>
        </div>
      </div>

    </article>
  );
}