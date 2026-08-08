import Link from "next/link";

export const metadata = {
  title: "Grade Calculator - Find Your Final Exam Score Needed (Free)",
  description:
    "Calculate what score you need on your final exam to reach your target course grade. Free grade calculator with formula and worked examples.",
  alternates: {
    canonical: "/grade-calculator",
  },
  openGraph: {
    title: "Grade Calculator - Find Your Final Exam Score Needed",
    description:
      "Free grade calculator with weighted grade formula, worked example, and a chart showing what you need on your final.",
  },
};

export default function GradeCalculatorGuide() {
  const toc = [
    { href: "#what-is-grade-calculator", label: "What Is a Grade Calculator?" },
    { href: "#why-use", label: "Why Use This Calculator" },
    { href: "#how-it-works", label: "How This Calculator Works" },
    { href: "#formula", label: "Grade Formula" },
    { href: "#example", label: "Step-by-Step Example" },
    { href: "#final-needed", label: "What Score Do You Need on Your Final?" },
    { href: "#mistakes", label: "Common Mistakes" },
    { href: "#tips", label: "Tips for Accurate Results" },
    { href: "#faqs", label: "FAQs" },
    { href: "#related-tools", label: "Related Tools" },
  ];

  const gradeComponents = [
    { component: "Homework", weight: 20, score: 92 },
    { component: "Midterm Exam", weight: 30, score: 78 },
    { component: "Class Participation", weight: 10, score: 88 },
  ];

  const weightedSoFar = gradeComponents.reduce((s, c) => s + (c.weight * c.score) / 100, 0);
  const weightSoFar = gradeComponents.reduce((s, c) => s + c.weight, 0);
  const finalWeight = 100 - weightSoFar; // 40%
  const targetGrade = 85;
  const neededFinalScore = ((targetGrade - weightedSoFar) / finalWeight) * 100;

  const targetScenarios = [
    { target: 90 },
    { target: 85 },
    { target: 80 },
    { target: 70 },
  ].map((row) => ({
    ...row,
    needed: (((row.target - weightedSoFar) / finalWeight) * 100).toFixed(1),
  }));

  const mistakes = [
    {
      title: "Forgetting to convert weights to decimals",
      desc: "A component worth 30% needs to be multiplied by 0.30, not 30, when calculating its contribution to your overall grade. Mixing this up throws off every number after it.",
    },
    {
      title: "Assuming all assignments are weighted equally",
      desc: "A homework worth 10% of your grade doesn't affect your final grade the same way a midterm worth 30% does. Always check your syllabus for the actual weight breakdown.",
    },
    {
      title: "Leaving out extra credit or dropped scores",
      desc: "If your syllabus allows you to drop your lowest quiz score, or offers extra credit, factor that in before calculating what you need on remaining assessments.",
    },
    {
      title: "Confusing a course grade with a semester GPA",
      desc: "A grade calculator solves for what you need in one course. If you want to see how that grade affects your overall semester performance, you'll need our GPA Calculator as well.",
    },
  ];

  const tips = [
    {
      title: "Get the exact weight breakdown from your syllabus",
      desc: "Don't estimate assignment weights. A syllabus usually states the exact percentage each component contributes to your final grade.",
    },
    {
      title: "Run the numbers before the exam, not after",
      desc: "Knowing what score you need in advance lets you adjust your study time accordingly, rather than finding out after it's too late to change anything.",
    },
    {
      title: "Check for grade caps or curves",
      desc: "Some courses cap the maximum grade or apply a curve to the final exam. Confirm whether either applies before treating a calculated number as guaranteed.",
    },
    {
      title: "Recalculate as new grades come in",
      desc: "Update your numbers every time a new assignment or exam grade is posted so your target for the final stays accurate.",
    },
  ];

  const faqs = [
    {
      q: "How do I calculate what I need on my final exam?",
      a: "Multiply each completed component's score by its weight and add them together to get your grade so far. Subtract that from your target grade, then divide by the final exam's weight to find the score you need on the final.",
    },
    {
      q: "How is a weighted grade calculated?",
      a: "Multiply each assignment or exam's score by its percentage weight in the course, then add all of those weighted values together. The result is your overall weighted grade for the course.",
    },
    {
      q: "What if I need more than 100% on my final?",
      a: "This means your target grade isn't mathematically possible given your current scores and the final's weight, unless your course offers extra credit or a curve. Check with your instructor about any available options.",
    },
    {
      q: "How do I convert a percentage grade to a letter grade?",
      a: "Most US schools use a scale similar to: 90% and above is an A, 80–89% is a B, 70–79% is a C, 60–69% is a D, and below 60% is an F, though exact cutoffs vary by school.",
    },
    {
      q: "Does the grade calculator account for extra credit?",
      a: "You can factor in extra credit manually by adding it to your current weighted total before calculating what you need on the final. The calculator itself works from the scores and weights you enter.",
    },
    {
      q: "What is a good grade to aim for on a final exam?",
      a: "This depends entirely on your current standing and the final's weight in the course. A student close to their target grade may only need a moderate final exam score, while someone further behind may need close to a perfect score.",
    },
    {
      q: "How much does a final exam typically weigh?",
      a: "It varies by course and institution, but final exams commonly count for 20% to 40% of the overall course grade. Always check your specific syllabus rather than assuming a standard weight.",
    },
    {
      q: "Can I use this calculator for a single test instead of a whole course?",
      a: "Yes. If you only have one remaining test and know its weight along with your current grade, the same formula applies regardless of how many components make up the rest of the course.",
    },
    {
      q: "How do I calculate my current grade before the final?",
      a: "Multiply each completed assignment or exam's score by its weight, then add those weighted values together. That total is your current grade, based only on the work you've completed so far.",
    },
    {
      q: "What happens if I get a lower score than needed on the final?",
      a: "Your final course grade will be lower than your target, calculated using the actual formula: your current weighted grade plus your actual final score multiplied by its weight. The exact drop depends on how far below your target the final score falls.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Grade Calculator - Find Your Final Exam Score Needed",
    description:
      "Free grade calculator with weighted grade formula, worked example, and a chart showing what you need on your final exam.",
    author: { "@type": "Organization", name: "StudyCalc" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://studycalc.co/calculators" },
      { "@type": "ListItem", position: 3, name: "Grade Calculator", item: "https://studycalc.co/grade-calculator" },
    ],
  };

  return (
    <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          📝 Grade Calculator Guide
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Grade Calculator: Find Your Final Exam Score Needed
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Enter your current assignment scores and their weights into the calculator above to find exactly what
          you need on your final exam. Below, you'll find the formula, a full worked example, and a chart showing
          what score is needed for a few common target grades.
        </p>
      </div>

      <nav className="mt-8 rounded-xl border border-slate-800 bg-slate-950/40 p-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-slate-400 mb-3">On This Page</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm">
          {toc.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-cyan-400 hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div id="what-is-grade-calculator" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">What Is a Grade Calculator?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          A grade calculator works backward from your target course grade to tell you what score you need on a
          remaining assignment or final exam. Instead of waiting to see your grade after the fact, you can plan
          exactly how much the final needs to count for.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Most courses don't weigh every assignment equally. Homework might count for 20% of your grade, a midterm
          for 30%, and a final exam for the remaining 50%. A grade calculator accounts for that weighting rather
          than treating every score the same.
        </p>
      </div>

      <div id="why-use" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Why Use This Calculator</h2>
        <ul className="mt-4 space-y-3 text-slate-300 leading-7">
          <li>
            <span className="font-semibold text-white">Before you study for a final.</span> Know exactly what
            score you need instead of studying for an unknown target.
          </li>
          <li>
            <span className="font-semibold text-white">To decide if a final matters much.</span> If your current
            grade is already strong, you might find you only need a moderate score to keep your target grade.
          </li>
          <li>
            <span className="font-semibold text-white">To spot an unreachable target early.</span> If the
            calculator shows you'd need over 100%, you'll know sooner rather than after a disappointing result.
          </li>
          <li>
            <span className="font-semibold text-white">To check your current standing.</span> Even without a
            final exam yet, you can confirm your current weighted grade based on completed work.
          </li>
        </ul>
      </div>

      <div id="how-it-works" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How This Calculator Works</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Enter each graded component of your course along with its weight and your score. The calculator
          multiplies each score by its weight to find your current weighted grade. Then, if you enter a target
          overall grade and the weight of your remaining final exam, it solves for the exact score you'd need on
          that final to hit your target.
        </p>
      </div>

      <div id="formula" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Grade Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Current Grade = Σ (Component Score × Component Weight)
          </p>
          <p className="mt-3 text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Score Needed on Final = (Target Grade − Current Grade) ÷ Final's Weight
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">
          Weights are expressed as decimals in the first formula (a 30% weight is 0.30) and as a percentage in the
          second, so it's worth being consistent as you work through the numbers by hand.
        </p>
      </div>

      <div id="example" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Example</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Say a course is broken down like this, with the final exam still remaining:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Component</th>
                <th className="px-5 py-3.5 text-left">Weight</th>
                <th className="px-5 py-3.5 text-left">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {gradeComponents.map((c, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5">{c.component}</td>
                  <td className="px-5 py-3.5 font-mono">{c.weight}%</td>
                  <td className="px-5 py-3.5 font-mono">{c.score}%</td>
                </tr>
              ))}
              <tr>
                <td className="px-5 py-3.5">Final Exam (remaining)</td>
                <td className="px-5 py-3.5 font-mono">{finalWeight}%</td>
                <td className="px-5 py-3.5 font-mono text-slate-500">?</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p>Current weighted grade so far: {weightedSoFar.toFixed(1)}%</p>
          <p>Weight remaining for final exam: {finalWeight}%</p>
          <p>Target overall grade: {targetGrade}%</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            Score needed on final = ({targetGrade} − {weightedSoFar.toFixed(1)}) ÷ {finalWeight} × 100 ={" "}
            {neededFinalScore.toFixed(1)}%
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          This student needs roughly {neededFinalScore.toFixed(0)}% on the final exam to reach an overall{" "}
          {targetGrade}% in the course, based on their current standing.
        </p>
      </div>

      <div id="final-needed" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">What Score Do You Need on Your Final?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Using the same current grade of {weightedSoFar.toFixed(1)}% and a final worth {finalWeight}%, here's what
          a few different target grades would require:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Target Overall Grade</th>
                <th className="px-5 py-3.5 text-left">Score Needed on Final</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {targetScenarios.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.target}%</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{row.needed}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          These numbers are based on the example above. Use the calculator with your own scores and weights for an
          accurate result.
        </p>
      </div>

      <div id="mistakes" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Common Mistakes</h2>
        <div className="mt-6 space-y-4">
          {mistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <h3 className="text-base font-bold text-white">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="tips" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Tips for Accurate Results</h2>
        <div className="mt-6 space-y-4">
          {tips.map((t, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <h3 className="text-base font-bold text-white">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-6">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="faqs" className="mt-16 border-t border-slate-800/60 pt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-sm mb-6">
          The questions students ask most often about calculating course grades and final exam requirements.
        </p>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
              <h3 className="text-base font-semibold text-white flex items-start gap-2">
                <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
              </h3>
              <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="related-tools" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-4">Related Tools & Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate a single semester's GPA in seconds.</p>
          </Link>
          <Link href="/cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Combine every semester into one cumulative score.</p>
          </Link>
          <Link href="/attendance-percentage-formula" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Attendance Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Check if you meet your exam eligibility requirements.</p>
          </Link>
          <Link href="/percentage-formula-explained" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Convert raw scores into final weighted grades.</p>
          </Link>
          <Link href="/how-to-calculate-gpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate GPA</span>
            <p className="mt-1 text-sm text-slate-400">The full step-by-step guide for a single semester.</p>
          </Link>
          <Link href="/how-to-calculate-cgpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate CGPA</span>
            <p className="mt-1 text-sm text-slate-400">Learn how semester GPAs combine into a cumulative score.</p>
          </Link>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-slate-800 bg-slate-950/40 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li>Course grades are weighted, not a simple average of assignment scores.</li>
          <li>Always confirm exact weights from your syllabus, not estimates.</li>
          <li>Solve backward from your target grade to find what you need on the final.</li>
          <li>Check for grade caps, curves, or extra credit before relying on a calculated number.</li>
          <li>Use the Grade Calculator to plan your study time around a real target.</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Final Summary</h2>
        <p className="leading-7 text-slate-300">
          A grade calculator turns a vague goal like "do well on the final" into a specific number you can actually
          study toward. The calculator above solves the weighted formula instantly, and understanding the math
          behind it means you'll know exactly where you stand before the exam, not after.
        </p>
      </div>

      <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Find Your Target Score?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Scroll up, enter your current scores and weights, and see exactly what you need on your final.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <a href="#top" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Use the Calculator
          </a>
          <Link href="/gpa-calculator" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
            Try GPA Calculator
          </Link>
        </div>
      </div>
    </section>
  );
}