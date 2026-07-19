import Link from "next/link";

export default function GradeGuide() {
  const faqs = [
    {
      q: "What is the core difference between a letter grade and a grade point scale?",
      a: "A letter grade (such as A, B, or C) represents a qualitative assessment of performance. A grade point scale converts these letters into a quantitative decimal metric (e.g., A = 4.0, B = 3.0), which makes it mathematically possible to calculate your running term averages."
    },
    {
      q: "How does a weighted grading system calculate final course outcomes?",
      a: "In a weighted framework, separate components hold different percentages of the final grade. For example, if assignments are worth 40% and final exams are worth 60%, your final score is computed by multiplying the average of each category by its respective percentage."
    },
    {
      q: "Can failing a non-credit elective course impact my official GPA scale?",
      a: "Generally, formal non-credit modules or pass/fail audits do not contribute point weights to your core GPA calculations. However, a failing mark may still be recorded on your permanent academic registry or transcript."
    },
    {
      q: "What is a standardized curve system in university grading?",
      a: "Grading on a curve adjusts student scores relative to the top-performing peer in the class. The instructor scales scores based on the overall distribution curve, meaning your final letter grade depends partly on the relative classroom average performance."
    },
    {
      q: "Does a higher raw percentage always convert to a better letter grade?",
      a: "Not necessarily. Letter grade mappings depend heavily on individual course syllabus thresholds or institutional guidelines. A 78% could be a 'B' in a standard humanities course, but might map to an 'A' in a highly rigorous advanced engineering seminar."
    },
    {
      q: "How does an Incomplete (I) marker affect seasonal academic evaluations?",
      a: "An 'I' placeholder carries no numerical point weight and remains neutral, meaning it doesn't affect your GPA. However, if the missing coursework isn't completed within the university's specified timeline, the marker typically converts to a standard failing grade."
    },
    {
      q: "What is the minimum passing letter grade across global graduate schools?",
      a: "While undergraduate frameworks allow 'D' marks as minimal passes, most global master's or PhD programs enforce a strict 'B' or '3.0' threshold as the baseline passing grade for individual core modules."
    },
    {
      q: "How can I check if my raw percentage grades line up with attendance metrics?",
      a: "Classroom participation points are often bundled directly into final grade weights. Tracking your active presence via our dedicated attendance calculator ensures you protect these foundational points before finals approach."
    }
  ];

  const gradingScales = [
    { letter: "A+ / A", point: "4.00", percent: "93% – 100%", description: "Excellent Outstanding. Demonstrates deep conceptual mastery." },
    { letter: "A-", point: "3.70", percent: "90% – 92%", description: "Excellent standing. High-level execution across complex criteria." },
    { letter: "B+", point: "3.30", percent: "87% – 89%", description: "Very Good. Solid performance with minor structural errors." },
    { letter: "B", point: "3.00", percent: "83% – 86%", description: "Good Competent Profile. Sound understanding of foundational topics." },
    { letter: "B-", point: "2.70", percent: "80% – 82%", description: "Fairly Good. Satisfies standard curriculum metrics." },
    { letter: "C+", point: "2.30", percent: "77% – 79%", description: "Satisfactory. Meets baseline institutional milestones." },
    { letter: "C", point: "2.00", percent: "73% – 76%", description: "Acceptable Passing. Average comprehension of materials." },
    { letter: "F", point: "0.00", percent: "Below 60%", description: "Failing Standing. Full module repeat or makeup required." }
  ];

  const expertStrategies = [
    { title: "Deconstruct the Syllabus Matrix", desc: "Review your course guidelines during the first week to identify exactly how weights are distributed. Focus your preparation metrics on heavily weighted components to optimize your final letter grade efficiently." },
    { title: "Protect Easy Participation Points", desc: "Never lose baseline points due to poor attendance. Keep your class tracking parameters stable so you secure the full portion of any class participation weights." },
    { title: "Target Strategic Grade Adjustments", desc: "If a specific class uses a curved system, prioritize consistent weekly growth. Small improvements in your raw performance score can significantly elevate your placement on the adjusted final scale." }
  ];

  return (
    <section className="mx-auto mt-20 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      
      {/* 1. Authority SEO Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400 border border-amber-500/20 mb-4">
          🎓 Educational Assessment Systems
        </div>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight">
          The Comprehensive Manual to Grading Scales, Conversion Systems, and Academic GPA Formulas
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Academic evaluation frameworks translate your coursework scores into standardized markers. Understanding how individual assignment scores convert to final letter grades is key to managing your transcript. This expert guide outlines institutional grading metrics, step-by-step conversion processes, and strategies to maximize your standing.
        </p>
      </div>

      {/* 2. Deconstructing Grade Scales */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400 font-mono">01.</span> Deconstructing Global Grading Scales
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          A grading scale converts raw percentage distributions or accumulated marks into clear qualitative indicators. While localized models vary by region, most global institutions utilize standardized letter tiers or numerical scales to measure student performance across semesters.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          These assessment frameworks clarify overall academic standing for graduate schools and hiring committees. Regularly evaluating your continuous point metrics via our specialized <Link href="/cgpa-calculator" className="text-cyan-400 hover:underline">CGPA Calculator</Link> lets you see exactly how separate module grades combine to shape your long-term cumulative milestones.
        </p>
      </div>

      {/* 3. The Grading Calculation Logic */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400 font-mono">02.</span> Weighted Final Grade Formula
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          To track multi-component course evaluations accurately, institutions look beyond basic score averages and apply a weighted calculation model instead:
        </p>
        <div className="mt-6 rounded-xl border border-amber-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-amber-400 tracking-wide">
            Final Course Score = ∑ (Component Average Score × Category Weight Percentage)
          </p>
        </div>
        <p className="mt-4 text-sm text-slate-400 leading-6">
          *Example: If your homework assignments are weighted at 30% of your total grade and the final exam is weighted at 70%, your absolute course index equals: `(Homework Average × 0.30) + (Final Exam × 0.70)`.*
        </p>
      </div>

      {/* 4. Complete Conversion Framework Table */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-amber-400 font-mono">03.</span> Official Grade Conversion Matrix
        </h3>
        <p className="mt-4 leading-7 text-slate-300">
          This reference matrix outlines how standard raw percentage ranges, letter designations, and grade point indices map together across standard university systems:
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-amber-400 font-semibold">
              <tr>
                <th className="px-4 py-3.5 text-left">Letter Grade</th>
                <th className="px-4 py-3.5 text-left">Grade Point (4.0 Scale)</th>
                <th className="px-4 py-3.5 text-left">Percentage Range</th>
                <th className="px-4 py-3.5 text-left">Performance Profile Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {gradingScales.map((scale, idx) => (
                <tr key={idx} className="hover:bg-slate-900/30 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-white">{scale.letter}</td>
                  <td className="px-4 py-3.5 font-semibold text-amber-400 font-mono">{scale.point}</td>
                  <td className="px-4 py-3.5 text-slate-200 font-medium">{scale.percent}</td>
                  <td className="px-4 py-3.5 text-slate-400">{scale.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Expert Strategies */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">🚀 Actionable Methods to Maximize Your Final Letter Grades</h3>
        <p className="text-slate-400 text-sm mb-6">Use these practical strategies to systematically optimize your final course evaluations.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {expertStrategies.map((strategy, idx) => (
            <div key={idx} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 hover:border-amber-500/30 transition-colors duration-200">
              <h4 className="font-bold text-amber-400 text-base">{strategy.title}</h4>
              <p className="mt-2 text-sm text-slate-300 leading-6">{strategy.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Comprehensive FAQ Portal */}
      <div className="mt-16 border-t border-slate-800/60 pt-12">
        <h3 className="text-2xl font-bold text-white mb-2">Frequently Asked Grading Questions</h3>
        <p className="text-slate-400 text-sm mb-6">Answering complex questions about institutional conversions, curved assessments, and transcript designations.</p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h4 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-amber-400 font-mono">Q:</span> {faq.q}
              </h4>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Strategic CTA Block */}
      <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h4 className="text-lg font-bold text-white">Need to Compute Exact Percentage Ratios?</h4>
          <p className="text-sm text-slate-400 mt-1">Convert your raw marks distributions into clear data instantly using our interactive system.</p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link 
            href="/percentage-calculator" 
            className="rounded-lg bg-amber-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition shadow-md"
          >
            Go to Percentage Calculator
          </Link>
          <Link 
            href="/attendance-calculator" 
            className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700"
          >
            Review Attendance Ratios 📑
          </Link>
        </div>
      </div>

    </section>
  );
}