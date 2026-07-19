import Link from "next/link";

export default function AttendancePercentage() {
  const faqs = [
    {
      q: "What is the standard global percentage threshold for university exam eligibility?",
      a: "Most global academic institutions enforce a strict 75% or 80% attendance baseline. Falling below this threshold typically results in being barred from final term examinations or receiving an automatic course failure status."
    },
    {
      q: "How does a single medical or institutional absence affect my overall presence ratio?",
      a: "An officially excused absence removes the negative weight from your attendance tracker by adjusting the 'Total Held Classes' parameter in your institutional ledger, keeping your baseline calculation stable."
    },
    {
      q: "Can high academic marks override a low attendance threshold restriction?",
      a: "Generally, no. Educational criteria separate conceptual evaluation from physical presence. Even with a perfect 100% on assignments, failing to meet the minimum class attendance requirement can lead to a strict procedural course failure."
    },
    {
      q: "What is the mathematical formula to find out how many classes I can safely miss?",
      a: "To keep a target percentage (like 75%), use this equation: Max Missed Classes = Total Held Classes − (Total Held Classes × 0.75). Any absence beyond this number drops your score into the warning zone."
    },
    {
      q: "Do asynchronous online lecture hours follow the same calculation logic?",
      a: "Online modules measure presence by tracking portal activity, video watch milestones, or weekly discussion forum contributions. This data is then compiled into a standard percentage out of total required units."
    },
    {
      q: "How do attendance factors impact final grade weights or credit metrics?",
      a: "Many syllabi dedicate 5% to 10% of the total course weight to active participation and attendance. Missing classes directly cuts into these easy points, lowering your final letter grade standings."
    },
    {
      q: "What should I do if my attendance record drops below the critical 75% mark?",
      a: "Immediately contact your academic advisor or professor to discuss makeup options, check the official appeals process, or arrange extra credit tasks before the semester eligibility window closes."
    },
    {
      q: "Can I use an interactive simulator to track my daily classroom attendance?",
      a: "Yes. Our dedicated attendance calculator layout allows you to input your current parameters instantly, showing you exactly how many upcoming lectures you must attend to stay safe."
    }
  ];

  const categories = [
    { range: "90% – 100%", status: "Excellent 🟢", impact: "Secures full participation grade weights; establishes an optimal academic routine." },
    { range: "80% – 89%", status: "Good Standing 🔵", impact: "Satisfies all standard global university guidelines with zero eligibility risk." },
    { range: "75% – 79%", status: "Critical Borderline 🟡", impact: "Meets minimum exam requirements, but leaves no room for unexpected absences." },
    { range: "Below 75%", status: "Debarred Risk 🔴", impact: "Triggers automatic alerts; leads to exam restrictions or course failure labels." }
  ];

  const frameworks = [
    { step: "1", title: "Count Total Conducted Sessions", desc: "Identify the total number of lectures, labs, or seminars held by the instructor from day one up to the current date." },
    { step: "2", title: "Track Your Attended Hours", desc: "Sum up every session where you were physically present or officially marked as active on the institutional roster." },
    { step: "3", title: "Apply the Percentage Formula", desc: "Divide your attended hours by the total conducted sessions, then multiply by 100 to extract your running attendance percentage." }
  ];

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* Article Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          📅 Institutional Analytics Manual
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          The Definitive Blueprint to Attendance Percentages: Rules, Calculation Models, and Academic Impact
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Classroom attendance is more than a simple metric—it is a critical requirement across global education systems. From exam eligibility thresholds to final grade weights, tracking your presence profile is key to academic success. This guide breaks down the core math, institutional guidelines, and practical strategies behind attendance tracking.
        </p>
      </div>

      {/* Section 1: The Core Math */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> The Core Logic of Attendance Percentages
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          An attendance percentage evaluates your institutional consistency by tracking the ratio of attended sessions relative to the total number of conducted classes. It provides an objective baseline for schools to measure student engagement and satisfy regulatory compliance guidelines.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          In high-performance programs, attendance values are directly tied to overall performance. Missing core instructions makes it difficult to follow subsequent modules, which can negatively affect your scores on specialized tools like our <Link href="/percentage-calculator" className="text-cyan-400 hover:underline">Percentage Calculator</Link>.
        </p>
      </div>

      {/* Section 2: Mathematical Formula */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> The Attendance Calculation Formula
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Computing your exact running presence ratio uses a straightforward mathematical equation:
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-cyan-400 tracking-wide">
            Attendance (%) = (Total Classes Attended ÷ Total Classes Conducted) × 100
          </p>
        </div>
      </div>

      {/* Section 3: Procedural Steps */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> Procedural Step-by-Step Breakdown
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Follow these clear, sequential steps to accurately calculate your academic presence metrics:
        </p>
        <div className="mt-6 space-y-4">
          {frameworks.map((f) => (
            <div key={f.step} className="flex gap-4 rounded-xl bg-slate-950/50 p-5 border border-slate-800/60">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 font-mono text-sm font-bold text-cyan-400 border border-cyan-500/20">
                {f.step}
              </span>
              <div>
                <h4 className="text-base font-bold text-white">{f.title}</h4>
                <p className="mt-1 text-sm text-slate-400 leading-6">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Eligibility Matrix Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">04.</span> Attendance Bracket Eligibility Matrix
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          This reference matrix highlights how different attendance ranges affect your standing and final evaluations under typical institutional guidelines:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Attendance Range</th>
                <th className="px-5 py-3.5 text-left">Standing Status</th>
                <th className="px-5 py-3.5 text-left">Academic Status Impact</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {categories.map((cat, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{cat.range}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-200">{cat.status}</td>
                  <td className="px-5 py-3.5 text-slate-400">{cat.impact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 5: FAQs */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Attendance Questions</h2>
        <p className="text-slate-400 text-sm mb-6">Quick reference answers addressing university rules, excused leaves, and eligibility calculations.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Call to Action Section */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Want to Run an Instant Live Attendance Analysis?</h3>
          <p className="text-sm text-slate-400 mt-1">Simulate exactly how many more classes you need to attend using our interactive web system.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link 
            href="/attendance-calculator" 
            className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md"
          >
            Open Attendance Calculator
          </Link>
          <Link 
            href="/grade-calculator" 
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Check Grade Conversions 📑
          </Link>
        </div>
      </div>

    </article>
  );
}