import Link from "next/link";

export default function AttendanceGuide() {
  const faqs = [
    {
      q: "What is a good attendance percentage for university students?",
      a: "Most global universities strictly mandate a minimum of 75% to 85% attendance to qualify for final examinations. However, maintaining a 90%+ attendance is highly recommended to secure internal performance points and stay on top of your academic curriculum."
    },
    {
      q: "How do excused absences affect my overall attendance calculation?",
      a: "This depends entirely on your institution's specific policy. In some universities, excused absences (medical or official duties) reduce the total number of conducted hours, while in others, they are simply marked as present manually by the administrator."
    },
    {
      q: "Can a low attendance percentage directly impact my GPA or grades?",
      a: "Yes, heavily. Many academic grading matrices allocate 5% to 10% of total course weightage purely to class participation and attendance. Falling short means losing these easy grade points immediately."
    },
    {
      q: "How does this attendance calculator handle bunked or skipped classes?",
      a: "The tool uses direct mathematical ratios. When you input future skipped classes, it adds them to the total conducted hours but leaves the attended hours unchanged, immediately projecting the future drop in percentage."
    },
    {
      q: "What should I do if my college attendance falls below 75%?",
      a: "Immediately calculate how many consecutive classes you need to attend using our tool to cross the threshold, and talk to your academic advisor or professor with formal medical/official documentation to request condonation."
    },
    {
      q: "Does missing practical labs affect attendance differently than lectures?",
      a: "In engineering, medical, and science courses, laboratory attendance is often tracked separately from theoretical lectures. Missing a single lab can sometimes count as missing multiple lecture hours."
    },
    {
      q: "Is academic attendance calculated per semester or annually?",
      a: "University frameworks calculate attendance per semester for individual courses. Schools and continuous programs usually track it on an aggregate annual base line."
    },
    {
      q: "Can I recover lost attendance through extra credit assignments?",
      a: "Generally, attendance is a physical metric and cannot be replaced by paperwork. However, some compassionate professors might offer alternative makeup assignments if your reasons for absence were genuine."
    }
  ];

  const mistakes = [
    { title: "Miscounting Canceled Classes", desc: "Students often forget to subtract classes that were officially canceled by the professor, which skew the total conducted hours." },
    { title: "Treating Labs and Lectures as Same", desc: "Assuming a missed 3-hour practical lab carries the same weight as a short 50-minute theoretical classroom lecture." },
    { title: "Delayed Tracking & Guesswork", desc: "Waiting until the final month of the semester to guess absences instead of updating metrics weekly." }
  ];

  const tips = [
    { title: "Set a 5% Buffer Margin", desc: "Never aim exactly for 75%. Always target an 80% buffer baseline so that unexpected emergencies or sickness don't lock you out of exams." },
    { title: "Prioritize High-Credit Weight Classes", desc: "Ensure you rarely miss classes with higher credit configurations, as they heavily influence both your attendance profile and ultimate GPA calculations." },
    { title: "Leverage the Attendance Notification System", desc: "Keep track of automated academic portals or check your dashboard every Friday afternoon to catch logging errors instantly." }
  ];

  return (
    <section className="mx-auto mt-20 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* 1. Header Section */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20 mb-4">
          ✨ Academic Tool Insights
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
          Comprehensive Guide to Attendance Percentage Calculation
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Tracking your academic standing is more than just maintaining a high grade point average. Class presence forms the core foundation of institutional eligibility. Our advanced Attendance Calculator gives you the power to proactively track, plan, and optimize your schedule so you never face exam debarment or penalty criteria.
        </p>
      </div>

      {/* 2. What is Attendance Percentage */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-emerald-400 font-mono">01.</span> Understanding Attendance Percentage
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Attendance percentage represents the exact mathematical ratio of physical sessions you attended relative to the absolute total volume of classroom sessions organized by an educational institute. Whether expressed on individual course syllabi or aggregated semester dashboards, this metric operates as a strict compliance gateway across schools and top-tier global universities.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Beyond administrative compliance, regular presence connects directly with deep knowledge acquisition. Academic data proves a linear relationship: students with structured attendance consistency consistently score better on multi-variable metrics, making it easier to leverage higher scales on our internal <Link href="/" className="text-cyan-400 hover:underline">GPA Calculator</Link>.
        </p>
      </div>

      {/* 3. The Attendance Formula */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-emerald-400 font-mono">02.</span> The Attendance Formula
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          The underlying arithmetic driving attendance logic is fundamentally straightforward but requires absolute data precision:
        </p>
        <div className="mt-6 rounded-xl border border-emerald-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-emerald-400 tracking-wide">
            Attendance Rate (%) = (Classes Attended ÷ Total Classes Conducted) × 100
          </p>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">
          *Note: **Total Classes Conducted** represents the sum of all classes attended plus all sessions missed (unexcused or structural absences). Cancelled academic slots must be deducted from the total sample pool.*
        </p>
      </div>

      {/* 4. Step-by-Step Calculation & Practical Example */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-emerald-400 font-mono">03.</span> Step-by-Step Practical Scenario
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Let us break down a real-world scenario. Suppose you are registered in a high-priority semester module. The university has conducted 45 lectures up to this point. Out of these, you actively sat through 36 lectures due to personal delays or health issues. Here is how your status is derived:
        </p>

        <div className="mt-6 space-y-4 rounded-xl bg-slate-950/60 p-6 border border-slate-800 text-sm leading-6 text-slate-300">
          <div>
            <span className="font-semibold text-white block">Step 1: Identify your metrics</span>
            Classes Attended = 36 | Total Conducted Slots = 45
          </div>
          <div className="border-t border-slate-800 pt-3">
            <span className="font-semibold text-white block">Step 2: Divide present slots by total conducted slots</span>
            36 ÷ 45 = 0.80
          </div>
          <div className="border-t border-slate-800 pt-3">
            <span className="font-semibold text-white block">Step 3: Multiply by 100 to extract percentage data</span>
            0.80 × 100 = <strong>80.00%</strong>
          </div>
        </div>
      </div>

      {/* 5. Attendance Percentage Threshold Matrix */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-emerald-400 font-mono">04.</span> Academic Eligibility Reference Matrix
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          How do institutions view your percentage standing? Use this reference table to evaluate your current standing:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-emerald-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Attendance Range</th>
                <th className="px-5 py-3.5 text-left">Institutional Status</th>
                <th className="px-5 py-3.5 text-left">Action Strategy Required</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">90% – 100%</td>
                <td className="px-5 py-3.5 text-emerald-400 font-semibold">💎 Premium Elite</td>
                <td className="px-5 py-3.5">Safe Zone. Maximum score allocations achieved for internal evaluations.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">75% – 89%</td>
                <td className="px-5 py-3.5 text-yellow-400 font-semibold">👍 Standard Passing</td>
                <td className="px-5 py-3.5">Eligible for examinations. Avoid unnecessary bunks to protect safety cushion.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">65% – 74%</td>
                <td className="px-5 py-3.5 text-orange-400 font-semibold">⚠️ Critical Risk</td>
                <td className="px-5 py-3.5">Requires formal medical or official condonation waivers to avoid exam lockout.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">Below 65%</td>
                <td className="px-5 py-3.5 text-red-400 font-semibold">🛑 Immediate Debarment</td>
                <td className="px-5 py-3.5">High probability of automatic semester repetition. Contact department head instantly.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Strategic Pro Tips to Optimize and Improve Attendance */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">🚀 Actionable Methods to Optimize Attendance Profiles</h3>
        <p className="text-slate-400 text-sm mb-6">Incorporate these simple structural adjustments into your academic lifestyle to maintain premium attendance statistics effortlessly.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {tips.map((tip, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-emerald-500/30 transition-colors duration-200">
              <h4 className="font-bold text-emerald-400 text-base">{tip.title}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-6">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Common Pitfalls / Mistakes */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-6">⚠️ Crucial Mistakes to Avoid When Tracking Absences</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {mistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl border border-red-950/30 bg-red-950/10 p-5">
              <h4 className="font-bold text-red-400 text-base">🛑 {m.title}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Comprehensive FAQ Portal */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions Portal</h3>
        <p className="text-slate-400 text-sm mb-6">Quick answers to complex rules implemented by academic councils globally.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-emerald-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 9 & 10. Related Resource Center & Strategic Call to Action */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Planning your Next Semester Strategies?</h4>
          <p className="text-sm text-slate-400 mt-1">Cross-check how your attendance levels correlate with performance metrics across modules instantly.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link 
            href="/" 
            className="rounded-lg bg-emerald-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-emerald-400 transition shadow-md"
          >
            Go to GPA Calculator
          </Link>
          <Link 
            href="/blog/grading-system-guide" 
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Explore Grading Manuals 📑
          </Link>
        </div>
      </div>

    </section>
  );
}