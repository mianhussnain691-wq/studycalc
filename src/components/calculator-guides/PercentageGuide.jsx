import Link from "next/link";

export default function PercentageGuide() {
  const faqs = [
    {
      q: "What is the simplest way to calculate percentage values manually?",
      a: "To find the percentage of a specific value, you divide the part score by the whole (total maximum value) and then multiply the resulting decimal by 100."
    },
    {
      q: "How does a percentage score differ from a standardized percentile?",
      a: "Percentage represents your individual raw score performance relative to total marks (e.g., scoring 80 out of 100 is 80%). Percentile indicates how well you performed compared to other candidates in the pool."
    },
    {
      q: "Can I convert an academic cumulative percentage directly into a 4.0 GPA scale?",
      a: "Direct conversions aren't perfectly linear across global universities. However, a general standard is to divide your percentage score by 25, though checking institutional conversion guidelines on our GPA Calculator page is recommended."
    },
    {
      q: "Why do some institutions use weighted percentages for final grades?",
      a: "Weighted percentages mean different tasks hold different levels of importance. For example, your final exam might be worth 50% of your grade, midterms 30%, and attendance 20%, making each component contribute proportionally to the final result."
    },
    {
      q: "How do I calculate a percentage increase between two separate semesters?",
      a: "Subtract the old score from the new score, divide that difference by the original old score, and multiply by 100. This tracks your absolute academic growth pattern over time."
    },
    {
      q: "What is the mathematical meaning of the word 'Percent'?",
      a: "The term originates from the Latin phrase 'per centum', which translates literally to 'by the hundred' or 'out of every 100 units'."
    },
    {
      q: "Does a 100% attendance rate automatically guarantee a passing grade?",
      a: "No. While checking your status via our attendance calculator layout ensures you satisfy exam eligibility criteria, your final grade depends directly on your performance across assignments and exams."
    },
    {
      q: "How do I calculate total marks if I only know my percentage and earned score?",
      a: "Divide the earned score by the percentage value (expressed as a decimal). For instance, if 60 marks equal 75%, dividing 60 by 0.75 reveals a total maximum value of 80 marks."
    }
  ];

  const mistakes = [
    { title: "Directly Averaging Unequal Percentages", desc: "A common mistake is averaging percentages from tests with different total points. Scoring 90% on a 100-point test and 50% on a 10-point test requires combining raw scores first rather than just adding the percentages together." },
    { title: "Confusing Decimal Shifts", desc: "Forgetting that moving a percentage value to a raw decimal multiplier requires shifting the decimal point exactly two spaces to the left (e.g., 7.5% becomes 0.075, not 0.75)." },
    { title: "Misidentifying the Base Denominator", desc: "Using an incorrect maximum point value when calculating across multiple assignments, which leads to inaccurate final calculations." }
  ];

  return (
    <section className="mx-auto mt-20 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* 1. Header Section */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400 border border-violet-500/20 mb-4">
          📊 Core Mathematical Metrics
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
          The Ultimate Authority Guide to Percentage Calculations and Marks Distributions
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Percentage logic forms the backbone of global tracking metrics. Whether you are analyzing exam scores, evaluating weight distributions, or assessing performance growth, tracking percentages offers clear insights. This comprehensive blueprint breaks down the core math, step-by-step strategies, and practical applications of percentage calculations.
        </p>
      </div>

      {/* 2. The Core Logic */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">01.</span> Understanding Percentage Fundamentals
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          A percentage is a practical way to express a fraction or ratio as a fraction of 100. It provides a standard baseline to compare performance across data sets with varying scales. For example, comparing a score of 17 out of 20 with 34 out of 40 becomes effortless once both are converted to their uniform baseline of 85%.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          In educational systems, percentages serve as the foundational data from which letter grades and grade point averages are derived. Understanding these values helps you easily track how individual performance relates to cumulative academic milestones like those on our <Link href="/cgpa-calculator" className="text-cyan-400 hover:underline">CGPA Calculator</Link>.
        </p>
      </div>

      {/* 3. The Percentage Formula */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">02.</span> The Essential Mathematical Formula
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Calculating a percentage score from raw performance metrics relies on a reliable and simple mathematical equation:
        </p>
        <div className="mt-6 rounded-xl border border-violet-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-violet-400 tracking-wide">
            Percentage (%) = (Obtained Value ÷ Total Maximum Value) × 100
          </p>
        </div>
      </div>

      {/* 4. Practical Example & Step-by-Step Marks Calculation */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">03.</span> Step-by-Step Marks Calculation Breakdown
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          Let us look at a realistic academic scenario. Suppose a student secures 342 total combined marks across 4 separate subject evaluations, where the maximum possible combined score is 450. Here is how the step-by-step conversion works:
        </p>

        <div className="mt-6 space-y-4 rounded-xl bg-slate-950/60 p-6 border border-slate-800 text-sm leading-6 text-slate-300">
          <div>
            <span className="font-semibold text-white block">Step 1: Gather your metrics</span>
            Obtained Score = 342 | Maximum Reference Baseline = 450
          </div>
          <div className="border-t border-slate-800 pt-3">
            <span className="font-semibold text-white block">Step 2: Divide the obtained points by maximum possible marks</span>
            342 ÷ 450 = 0.76
          </div>
          <div className="border-t border-slate-800 pt-3">
            <span className="font-semibold text-white block">Step 3: Multiply by 100 to extract final percentage form</span>
            0.76 × 100 = <strong>76.00%</strong>
          </div>
        </div>
      </div>

      {/* 5. Percentage-to-Grade Reference Matrix */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-violet-400 font-mono">04.</span> Percentage to Grade Mapping Matrix
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          This reference matrix outlines how standard raw percentage brackets typically map to standard academic classifications:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-violet-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Percentage Range</th>
                <th className="px-5 py-3.5 text-left">Standard Grade Scale</th>
                <th className="px-5 py-3.5 text-left">Performance Classification</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">90% – 100%</td>
                <td className="px-5 py-3.5 font-semibold text-violet-400">A / A+</td>
                <td className="px-5 py-3.5">Outstanding Elite. Demonstrates comprehensive mastery of course concepts.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">80% – 89%</td>
                <td className="px-5 py-3.5 font-semibold text-violet-400">A- / B+</td>
                <td className="px-5 py-3.5">Very Good standing. Strong conceptual execution across core criteria.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">70% – 79%</td>
                <td className="px-5 py-3.5 font-semibold text-violet-400">B / B-</td>
                <td className="px-5 py-3.5">Good Competent Standing. Proficient understanding with room for minor optimization.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">60% – 69%</td>
                <td className="px-5 py-3.5 font-semibold text-violet-400">C+ / C</td>
                <td className="px-5 py-3.5">Satisfactory. Meets baseline performance standards required for passing.</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5 font-bold text-white">Below 60%</td>
                <td className="px-5 py-3.5 font-semibold text-red-400">F (Fail)</td>
                <td className="px-5 py-3.5">Insufficient Score. Requires re-enrollment or makeup assignments.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 6. Crucial Mistakes to Avoid */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-6">⚠️ Common Mistakes in Percentage Tracking</h3>
        <div className="grid sm:grid-cols-3 gap-6">
          {mistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl border border-red-950/30 bg-red-950/10 p-5">
              <h4 className="font-bold text-red-400 text-base">🛑 {m.title}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. FAQ Section */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions Portal</h3>
        <p className="text-slate-400 text-sm mb-6">Quick answers to common questions about percentage math and academic scoring systems.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-violet-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Related Articles Hub & Strategic CTA */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Tracking Course Presence Guidelines?</h4>
          <p className="text-sm text-slate-400 mt-1">Ensure your percentage ratios are balanced by verifying exam eligibility rules using our live system.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link 
            href="/attendance-calculator" 
            className="rounded-lg bg-violet-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-violet-400 transition shadow-md"
          >
            Check Attendance Stats
          </Link>
          <Link 
            href="/blog/grading-system-guide" 
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Grading Systems Guide 📑
          </Link>
        </div>
      </div>

    </section>
  );
}