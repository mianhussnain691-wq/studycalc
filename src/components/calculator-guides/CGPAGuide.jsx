import Link from "next/link";

export default function CGPAGuide() {
  const faqs = [
    {
      q: "What is the primary operational difference between GPA and CGPA?",
      a: "GPA (Grade Point Average) tracks academic achievement over a singular academic term or semester module. CGPA (Cumulative Grade Point Average) computes the collective performance metrics across all completed semesters throughout the degree duration."
    },
    {
      q: "Can my CGPA increase if I score well in fewer credit hour courses?",
      a: "Yes, but the impact will be marginal. Because CGPA calculations are strictly credit-weighted, high grades earned in 3 or 4-credit modules will elevate your cumulative baseline much faster than identical grades in 1-credit courses."
    },
    {
      q: "How do universities globally handle backlogs or retaken courses in CGPA?",
      a: "Institutional policies vary: many modern grading systems replace the original failed score with the newly acquired grade point. However, some traditional universities retain both attempts in the transcript registry, compounding both into the final dividend."
    },
    {
      q: "Is a 3.5 CGPA considered competitive for Ivy League or global master's programs?",
      a: "A 3.5 CGPA out of a standard 4.0 scale represents a solid 'Very Good' profile (roughly 87-89%). While highly competitive, top-tier global graduate schools often look for a 3.7+ baseline along with active research profiles."
    },
    {
      q: "Does an 'Incomplete' or 'Withdrawal' grade alter the CGPA index?",
      a: "Standard educational frameworks treat formal 'W' (Withdrawn) or 'I' (Incomplete) markers as neutral placeholders. They do not carry point allocations and are omitted from the total credit hour denominator until final resolution."
    },
    {
      q: "How can I convert my 4.0 scale CGPA into an approximate percentage format?",
      a: "While precise linear conversion depends on regional university mandates, a globally accepted baseline formula implies multiplying your current 4.0-scale CGPA by 25, or utilizing standard mapping distributions."
    },
    {
      q: "Why does my CGPA seem harder to change or move during senior year?",
      a: "This is due to the mathematical law of averages. By your senior year, you have accumulated a large volume of total credit hours. Adding a few new courses changes the massive historical denominator very slowly."
    },
    {
      q: "Can a high CGPA fully compensate for low attendance scores?",
      a: "No. While your CGPA reflects ultimate theoretical proficiency, failing to meet institutional baselines on our short-term tracking layout can lead to immediate debarment, wiping out evaluation opportunities."
    }
  ];

  const operationalTips = [
    { title: "Target the Credit Anchors First", desc: "Devote maximum preparation metrics to core foundational modules carrying 4 credits. Excelling here acts as a powerful buffer that protects your cumulative score against accidental minor slips in lighter elective classes." },
    { title: "Execute Early Semester Balancing", desc: "Never pair multiple high-intensity experimental or computational modules inside a single term sequence. Distribute heavy subjects evenly alongside conceptual electives to sustain a stable semester GPA profile." },
    { title: "Pre-emptively Map Out Repeat Modules", desc: "If your institution offers direct grade replacement, strategically retake a module where you scored a low grade early on. Removing a low grade point immediately shifts the overall CGPA metric upwards." }
  ];

  return (
    <section className="mx-auto mt-20 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* 1. Comprehensive SEO Header Hub */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          📈 Comprehensive CGPA Authority Content
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
          The Definitive Masterclass on Cumulative Grade Point Average (CGPA) Calculation
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Sustaining high academic velocity requires deep strategic foresight. Your final transcript value isn't built on a singular performance curve; it is shaped by an accumulated timeline of consistent metrics. This absolute guide outlines the mathematical logic, structural frameworks, and systemic rules behind global CGPA scales.
        </p>
      </div>

      {/* 2. Deep Dive: What is CGPA */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> Deconstructing Cumulative Grade Point Average
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          **CGPA**, or **Cumulative Grade Point Average**, functions as the primary quantitative index utilized by academic boards globally to grade a student's holistic performance journey. While a single semester grade point average isolates performance over a few months, the cumulative metric acts as a running average of your entire academic record.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Whenever corporate hiring teams, elite scholarship associations, or international postgraduate panels filter candidates, the CGPA serves as their initial assessment tool. Maintaining a balanced distribution requires matching standard metrics, making it essential to regularly evaluate individual performance intervals via our specialized <Link href="/" className="text-cyan-400 hover:underline">GPA Calculator</Link> interface.
        </p>
      </div>

      {/* 3. The CGPA Mathematical Blueprint */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> The Cumulative Core Formula
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          A common mistake is directly averaging separate semester GPAs (e.g., adding Semester 1 GPA to Semester 2 GPA and dividing by two). This method introduces major errors if the semesters have different total credit distributions. Instead, true multi-semester tracking requires calculating the total points across your entire academic history:
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-cyan-400 tracking-wide">
            CGPA = Total Quality Points Secured Across All Semesters ÷ Total Attempted Credits Across All Semesters
          </p>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">
          *Where: **Quality Points** for any given course are derived by multiplying the course's credit hour allocation by the exact numerical weight of the earned grade profile.*
        </p>
      </div>

      {/* 4. Complete Practical Multi-Semester Simulation */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> Step-by-Step Multi-Semester Calculation Example
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Let's trace out a clear structural sample across two distinct academic evaluation phases to demystify how the weighted credit distribution logic works in practice:
        </p>

        {/* Semester 1 Block */}
        <div className="mt-6 font-semibold text-sm text-cyan-400 mb-2">Phase 1: Semester One Performance Profile</div>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/50 text-slate-300">
              <tr>
                <th className="px-4 py-3 text-left">Course Name</th>
                <th className="px-4 py-3 text-left">Credits</th>
                <th className="px-4 py-3 text-left">Grade Secured</th>
                <th className="px-4 py-3 text-left">Quality Points Contribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Advanced Software Engineering</td>
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">4.0 (A)</td>
                <td className="px-4 py-3 text-cyan-400">16.0</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Discrete Structures</td>
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">3.0 (B)</td>
                <td className="px-4 py-3 text-cyan-400">9.0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-400 px-1">
          *Semester 1 Aggregates: 25.0 Quality Points ÷ 7 Total Credits = **3.57 Semester GPA***
        </p>

        {/* Semester 2 Block */}
        <div className="mt-6 font-semibold text-sm text-cyan-400 mb-2">Phase 2: Semester Two Performance Profile</div>
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/40">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/50 text-slate-300">
              <tr>
                <th className="px-4 py-3 text-left">Course Name</th>
                <th className="px-4 py-3 text-left">Credits</th>
                <th className="px-4 py-3 text-left">Grade Secured</th>
                <th className="px-4 py-3 text-left">Quality Points Contribution</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="px-4 py-3 font-medium text-white">Database Management Systems</td>
                <td className="px-4 py-3">3</td>
                <td className="px-4 py-3">3.7 (A-)</td>
                <td className="px-4 py-3 text-cyan-400">11.1</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Linear Algebra & Matrices</td>
                <td className="px-4 py-3">4</td>
                <td className="px-4 py-3">3.3 (B+)</td>
                <td className="px-4 py-3 text-cyan-400">13.2</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-white">Corporate Communication</td>
                <td className="px-4 py-3">2</td>
                <td className="px-4 py-3">4.0 (A)</td>
                <td className="px-4 py-3 text-cyan-400">8.0</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-400 px-1">
          *Semester 2 Aggregates: 32.3 Quality Points ÷ 9 Total Credits = **3.59 Semester GPA***
        </p>

        {/* Final Cumulative Step */}
        <div className="mt-6 rounded-xl bg-slate-950 p-5 border border-slate-800/80 text-sm">
          <span className="font-bold text-white block text-base mb-2">Final Cumulative Integration Step:</span>
          * Total Quality Points Accumulated = 25.0 (Sem 1) + 32.3 (Sem 2) = **57.3 Quality Points** <br />
          * Total Credit Hours Attempted = 7 (Sem 1) + 9 (Sem 2) = **16 Total Credits** <br />
          * Final True CGPA Index = 57.3 Quality Points ÷ 16 Total Credits = <strong className="text-cyan-400 text-lg">3.58 CGPA</strong>
        </div>
      </div>

      {/* 5. Holistic CGPA Honors Scale Matrix */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">04.</span> CGPA Standing and Honors Allocation Matrix
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          How do international screening boards evaluate your final cumulative index? This reference table classifies performance levels:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">CGPA Boundary Scale</th>
                <th className="px-5 py-3.5 text-left">Equivalent Academic Honors classification</th>
                <th className="px-5 py-3.5 text-left">Strategic Placement Prospects</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">3.80 – 4.00</td>
                <td className="px-5 py-3.5 text-emerald-400 font-semibold">🌟 Summa Cum Laude (Highest Honors)</td>
                <td className="px-5 py-3.5">Unlocks elite global research fellowships, direct PhD funding, and Wall Street profiling options.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">3.65 – 3.79</td>
                <td className="px-5 py-3.5 text-cyan-400 font-semibold">✨ Magna Cum Laude (High Honors)</td>
                <td className="px-5 py-3.5">Highly competitive standing for Fortune 500 recruiting tracks and elite master's programs.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">3.50 – 3.64</td>
                <td className="px-5 py-3.5 text-yellow-400 font-semibold">👍 Cum Laude (Honors Standing)</td>
                <td className="px-5 py-3.5">Strong, reliable academic baseline. Qualifies comfortably for most institutional corporate partnerships.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">2.00 – 3.49</td>
                <td className="px-5 py-3.5 text-slate-400">😐 Standard Passing Grade Profile</td>
                <td className="px-5 py-3.5">Satisfies graduation benchmarks. Recommended to optimize profile metrics via target projects.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Strategic Expert Tips to Protect Your CGPA */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">🚀 Actionable Methods to Maximize and Protect Long-Term CGPA</h3>
        <p className="text-slate-400 text-sm mb-6">Incorporate these advanced structural plans to build a highly stable and resilient academic profile throughout your academic years.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {operationalTips.map((tip, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-cyan-500/30 transition-colors duration-200">
              <h4 className="font-bold text-cyan-400 text-base">{tip.title}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-6">{tip.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Comprehensive FAQ Dashboard */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Cumulative Questions</h3>
        <p className="text-slate-400 text-sm mb-6">Clarifying complex algorithmic edge cases found across top-tier international university registrar models.</p>
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

      {/* 8. Related Articles Hub & Strategic CTA Section */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Tracking Individual Term Variances?</h4>
          <p className="text-sm text-slate-400 mt-1">Make sure you avoid structural calculations errors. Use our active framework to model specific setups instantly.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link 
            href="/attendance-calculator" 
            className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md"
          >
            Check Attendance Impact
          </Link>
          <Link 
            href="/blog/weighted-vs-unweighted-gpa" 
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Weighted Scale Guide 📑
          </Link>
        </div>
      </div>

    </section>
  );
}