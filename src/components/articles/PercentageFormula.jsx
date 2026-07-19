import Link from "next/link";

export default function PercentageFormula() {
  const faqs = [
    {
      q: "What is the core mathematical definition of a percentage?",
      a: "A percentage is a dimensionless ratio expressed as a fraction of 100. It allows for the direct comparison of non-uniform datasets by converting them into a standardized base-100 system."
    },
    {
      q: "How do you calculate percentage change when values decrease?",
      a: "For reductions, subtract the final value from the initial value, divide by the initial value, and multiply by 100. This indicates a negative percentage shift or rate of decline."
    },
    {
      q: "What is the difference between a percentage point and a percentage?",
      a: "A percentage point represents the simple arithmetic difference between two percentage values, whereas a percentage represents the rate of change or relative proportion between values."
    },
    {
      q: "Why do some academic modules use weighted percentages instead of raw ones?",
      a: "Weighted structures assign specific priority values to different academic categories (like 40% exams, 20% homework). This ensures that critical evaluations impact your final standing more than minor tasks."
    }
  ];

  const formulas = [
    { type: "Basic Proportion", formula: "Percentage = (Part ÷ Whole) × 100", use: "Finding score ratios, marks distribution, or fractional values." },
    { type: "Percentage Increase", formula: "Increase (%) = ((New Value − Old Value) ÷ Old Value) × 100", use: "Tracking growth metrics, dynamic score shifts, or performance scaling." },
    { type: "Percentage Decrease", formula: "Decrease (%) = ((Old Value − New Value) ÷ Old Value) × 100", use: "Evaluating score drops, error rates, or data reductions." }
  ];

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          📊 Mathematical Foundations
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Percentage Formula Explained: Comprehensive Mathematical Principles and Real-World Analytics
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Percentages are essential tools used to evaluate performance, normalize raw scores, and compute statistical models across both academic and professional fields. This technical manual breaks down the core equations, operational steps, and practical applications of percentage metrics.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> Understanding the Base-100 Framework
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The term "percent" originates from the Latin phrase *per centum*, which translates directly to "by the hundred." Mathematically, it serves as a method to express any fractional value as a component of a standardized whole. This consistency allows educators and data analysts to compare completely different tracking metrics instantly.
        </p>
      </div>

      {/* Section 2: Core Equations */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> Core Percentage Equations
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Depending on your analytical goals, percentages can be calculated using a few variations of the foundational formula:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Analysis Model</th>
                <th className="px-5 py-3.5 text-left">Mathematical Formula</th>
                <th className="px-5 py-3.5 text-left">Primary Use Case</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {formulas.map((f, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{f.type}</td>
                  <td className="px-5 py-3.5 font-mono text-cyan-400 font-semibold">{f.formula}</td>
                  <td className="px-5 py-3.5 text-slate-400">{f.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Academic Implementation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> Applications in Grading and Institutional Tracking
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          In educational systems, percentages act as the primary bridge between raw points earned on assignments and permanent ledger records like GPA scales. For instance, computing your presence over a semester relies on these identical principles, as detailed in our comprehensive guide on the <Link href="/attendance-percentage-formula" className="text-cyan-400 hover:underline">Attendance Percentage Formula</Link>.
        </p>
      </div>

      {/* Section 4: FAQs */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Mathematical Questions</h2>
        <div className="mt-6 space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Need to Run a Direct Live Evaluation?</h3>
          <p className="text-sm text-slate-400 mt-1">Convert raw metrics, find fractional balances, or track performance shifts instantly using our tools.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex shrink-0 justify-center">
          <Link href="/grade-calculator" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Launch Live Calculator 🚀
          </Link>
        </div>
      </div>

    </article>
  );
}