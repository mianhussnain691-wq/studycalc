import Link from "next/link";

export default function PercentageFormula() {
  const faqs = [
    {
      q: "What is the basic percentage formula?",
      a: "Percentage = (Part ÷ Whole) × 100. If you scored 45 out of 60 on a test, that's (45 ÷ 60) × 100 = 75%."
    },
    {
      q: "How do you calculate percentage increase?",
      a: "((New Value − Old Value) ÷ Old Value) × 100. If your marks went from 60 to 75, that's ((75 − 60) ÷ 60) × 100 = 25% increase."
    },
    {
      q: "How do you calculate percentage decrease?",
      a: "((Old Value − New Value) ÷ Old Value) × 100. Dropping from 80 to 60 is ((80 − 60) ÷ 80) × 100 = 25% decrease."
    },
    {
      q: "What's the difference between a percentage point and a percentage?",
      a: "A percentage point is the plain arithmetic gap between two percentages — going from 40% to 50% is a 10 percentage point jump. A percentage change describes that same move relative to the starting number, which here is actually a 25% increase (10 ÷ 40 × 100). News headlines mix these up constantly, and it changes the meaning a lot."
    },
    {
      q: "How do you find the whole number when you only know the percentage and the part?",
      a: "This is a reverse percentage: Whole = Part ÷ (Percentage ÷ 100). If 30 marks represent 60% of a test, the total is 30 ÷ 0.60 = 50 marks."
    },
    {
      q: "How do you find a percentage of a percentage?",
      a: "Convert both to decimals and multiply. 50% of 40% is 0.50 × 0.40 = 0.20, or 20%. This comes up in weighted grading — if a chapter is 40% of the final exam, and the final exam is 50% of your grade, that chapter alone is worth 20% of your final grade."
    },
    {
      q: "Why do schools use weighted percentages instead of a simple average?",
      a: "A weighted percentage assigns different importance to different categories — say 40% exams, 30% assignments, 20% quizzes, 10% participation — so a strong final exam counts for more than a single quiz, rather than every graded item being treated as equally important."
    }
  ];

  const formulas = [
    { type: "Basic Percentage", formula: "Percentage = (Part ÷ Whole) × 100", use: "Finding what a score, mark, or portion is out of 100." },
    { type: "Percentage Increase", formula: "((New − Old) ÷ Old) × 100", use: "Tracking growth — a rising score, salary, or measurement." },
    { type: "Percentage Decrease", formula: "((Old − New) ÷ Old) × 100", use: "Tracking a drop — a falling score, a discount, an error rate." },
    { type: "Reverse Percentage", formula: "Whole = Part ÷ (Percentage ÷ 100)", use: "Finding the total when you only know a part and its percentage." },
  ];

  const examples = [
    { label: "Basic", scenario: "You scored 68 out of 80 on an exam.", calc: "(68 ÷ 80) × 100", answer: "85%" },
    { label: "Increase", scenario: "Your GPA moved from 3.0 to 3.6.", calc: "((3.6 − 3.0) ÷ 3.0) × 100", answer: "20% increase" },
    { label: "Decrease", scenario: "Attendance fell from 90% to 72%.", calc: "((90 − 72) ÷ 90) × 100", answer: "20% decrease" },
    { label: "Reverse", scenario: "42 marks is 70% of the total paper.", calc: "42 ÷ (70 ÷ 100)", answer: "60 total marks" },
  ];

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">

      {/* Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          Percentage Formula Guide
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Percentage Formula Explained: Every Calculation You'll Actually Need
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          There's more than one "percentage formula" — depending on what you're actually trying to find, you need a slightly different version of the equation. This guide covers all of them: the basic formula, increase and decrease, reverse percentages, and percentage-of-a-percentage, each with a worked numeric example.
        </p>
      </div>

      {/* Section 1 */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> What a Percentage Actually Is
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The word "percent" comes from the Latin <em>per centum</em>, meaning "by the hundred." A percentage is just a way of expressing a part of something as if the whole were exactly 100 — which makes it easy to compare two things that started out on completely different scales. A score of 45 out of 60 and a score of 90 out of 120 look different at first glance, but they're both exactly 75%, which is the entire point of converting to a percentage in the first place.
        </p>
      </div>

      {/* Section 2: Core Equations */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> The Four Formulas You'll Actually Use
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Which formula you need depends on what you already know and what you're trying to find:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Type</th>
                <th className="px-5 py-3.5 text-left">Formula</th>
                <th className="px-5 py-3.5 text-left">When to Use It</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {formulas.map((f, idx) => (
                <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{f.type}</td>
                  <td className="px-5 py-3.5 font-mono text-cyan-400 font-semibold text-xs sm:text-sm">{f.formula}</td>
                  <td className="px-5 py-3.5 text-slate-400">{f.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Worked Examples */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> Worked Examples for Each One
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Formulas make more sense with real numbers plugged in. Here's each one in action:
        </p>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          {examples.map((ex, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-slate-800 bg-slate-950/50">
              <h3 className="text-sm font-bold text-cyan-400 mb-2">{ex.label}</h3>
              <p className="text-sm text-slate-300 mb-2">{ex.scenario}</p>
              <p className="text-xs font-mono text-slate-400 mb-2">{ex.calc}</p>
              <p className="text-base font-bold text-white">= {ex.answer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Percentage of a Percentage */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">04.</span> Percentage of a Percentage (Weighted Grading)
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          This one trips people up the most, and it's exactly the math behind weighted grading. To find a percentage of a percentage, convert both to decimals and multiply them together, then convert back if you want a percentage as the answer.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            50% of 40% = 0.50 × 0.40 = 0.20 = 20%
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300 text-sm">
          Practical example: if one chapter makes up 40% of your final exam, and the final exam is worth 50% of your overall course grade, that single chapter is actually worth 20% of your final grade — even though neither of the original numbers said "20%" anywhere.
        </p>
      </div>

      {/* Section 5: Academic Implementation */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">05.</span> Where This Shows Up in School and University
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Percentages are the bridge between raw marks and almost everything else on your transcript — letter grades, GPA, and class rank are all ultimately built on top of a percentage calculation somewhere. Attendance eligibility works the exact same way, as covered in our <Link href="/attendance-percentage-formula" className="text-cyan-400 hover:underline">attendance percentage guide</Link>. If you're converting a raw percentage into a letter grade or GPA point value, our <Link href="/letter-grade-to-percent-guide" className="text-cyan-400 hover:underline">letter grade conversion chart</Link> covers that directly.
        </p>
      </div>

      {/* Section 6: FAQs */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
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
          <h3 className="text-lg font-bold text-white">Skip the manual math</h3>
          <p className="text-sm text-slate-400 mt-1">Calculate any percentage, increase, decrease, or reverse percentage instantly.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex shrink-0 justify-center">
          <Link href="/percentage-calculator" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Open Percentage Calculator
          </Link>
        </div>
      </div>

    </article>
  );
}