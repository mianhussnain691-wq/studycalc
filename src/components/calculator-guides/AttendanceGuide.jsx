import Link from "next/link";

export const metadata = {
  title: "Attendance Calculator - Check Your Attendance Percentage Instantly",
  description:
    "Calculate your attendance percentage and find out how many classes you can miss or need to attend to hit your required percentage. Free and instant.",
  alternates: {
    canonical: "/attendance-percentage-formula",
  },
  openGraph: {
    title: "Attendance Calculator - Check Your Attendance Percentage",
    description:
      "Free attendance calculator with formula, worked examples, and a chart showing how many classes you can safely miss.",
  },
};

export default function AttendanceCalculatorGuide() {
  const toc = [
    { href: "#what-is-attendance-calculator", label: "What Is an Attendance Calculator?" },
    { href: "#why-use", label: "Why Use This Calculator" },
    { href: "#how-it-works", label: "How This Calculator Works" },
    { href: "#formula", label: "Attendance Formula" },
    { href: "#example", label: "Step-by-Step Example" },
    { href: "#missed-classes", label: "How Many Classes Can You Miss?" },
    { href: "#mistakes", label: "Common Mistakes" },
    { href: "#tips", label: "Tips for Accurate Results" },
    { href: "#faqs", label: "FAQs" },
    { href: "#related-tools", label: "Related Tools" },
  ];

  const missChart = [
    { required: "75%", total: 100, canMiss: 25 },
    { required: "80%", total: 100, canMiss: 20 },
    { required: "85%", total: 100, canMiss: 15 },
    { required: "90%", total: 100, canMiss: 10 },
  ];

  const exampleData = { attended: 68, total: 80 };
  const examplePercent = ((exampleData.attended / exampleData.total) * 100).toFixed(1);

  const requiredPercent = 75;
  const totalClassesForYear = 120;
  const attendedSoFar = 78;
  const remainingClasses = 20;
  // classes needed such that (attended + x) / (totalSoFar + remaining) >= required%
  const totalSoFar = 98; // attended + missed so far
  const neededMinAttendance = Math.ceil(
    (requiredPercent / 100) * (totalSoFar + remainingClasses) - attendedSoFar
  );

  const mistakes = [
    {
      title: "Counting cancelled classes as absences",
      desc: "If a class was cancelled by the instructor, it usually shouldn't count against your total or your attended count. Check your institution's policy before including it.",
    },
    {
      title: "Mixing up 'classes attended' with 'classes held'",
      desc: "Your percentage is attended divided by held, not attended divided by the total classes scheduled for the entire term. A class that hasn't happened yet isn't part of either number.",
    },
    {
      title: "Ignoring separate attendance rules for labs and lectures",
      desc: "Some programs track lecture and lab attendance separately, each with its own minimum. Calculate them independently rather than combining the numbers.",
    },
    {
      title: "Forgetting medical or approved leave adjustments",
      desc: "Many institutions exclude certain approved absences from the calculation. If you have documented leave, confirm whether it's excluded before assuming your percentage is lower than it actually is.",
    },
  ];

  const tips = [
    {
      title: "Check your exact attendance policy first",
      desc: "Minimum requirements vary by school, and some programs round differently. Confirm the exact rule before treating a calculated number as final.",
    },
    {
      title: "Recalculate after each missed class",
      desc: "Checking your percentage right after an absence, rather than waiting until the end of term, gives you time to adjust before it becomes a problem.",
    },
    {
      title: "Track lectures and labs separately if required",
      desc: "If your school has separate cutoffs, keep two running totals instead of one combined number.",
    },
    {
      title: "Plan around exam eligibility deadlines",
      desc: "Many schools check attendance a few weeks before final exams, not on the last day of classes. Know that cutoff date so you're not caught off guard.",
    },
  ];

  const faqs = [
    {
      q: "How do I calculate my attendance percentage?",
      a: "Divide the number of classes you attended by the total number of classes held so far, then multiply by 100. For example, attending 68 out of 80 classes gives 68 ÷ 80 × 100 = 85%.",
    },
    {
      q: "How many classes can I miss and still meet 75% attendance?",
      a: "It depends on your total number of classes for the term. As a rough guide, if your course has 100 total classes, you can miss up to 25 and still meet a 75% requirement. Use the calculator above with your exact total for a precise number.",
    },
    {
      q: "What is the minimum attendance percentage required for exams?",
      a: "This varies by institution, but 75% is a common minimum in many university systems. Some programs require 80% or higher. Always check your specific school's academic policy.",
    },
    {
      q: "What happens if my attendance is below the required percentage?",
      a: "Depending on your institution's policy, you may be barred from sitting the final exam, required to submit a formal appeal, or asked to provide medical or approved documentation to cover the shortfall. Check with your academic office as soon as you notice a shortfall.",
    },
    {
      q: "Do cancelled classes count against my attendance?",
      a: "Usually not, since a cancelled class was never held. Most institutions exclude cancelled sessions from both your attended count and your total count, but confirm this with your specific school's policy.",
    },
    {
      q: "How many more classes do I need to attend to reach 75%?",
      a: "This depends on how many classes you've already attended, how many remain, and your current percentage. The calculator above can compute the exact number you need for your specific numbers.",
    },
    {
      q: "Does attendance affect my final grade?",
      a: "At many institutions, attendance itself isn't graded directly, but falling below the minimum percentage can make you ineligible to sit the final exam, which indirectly affects your grade. Some courses do include a small participation or attendance grade component.",
    },
    {
      q: "Is attendance calculated per subject or overall?",
      a: "Most schools calculate attendance separately for each subject or course, since each has its own class schedule. A high percentage in one class doesn't offset a low percentage in another.",
    },
    {
      q: "Can I appeal a low attendance percentage?",
      a: "Many institutions allow appeals if you have documented medical issues, family emergencies, or other approved reasons for your absences. Check with your academic office for the specific appeal process and required documentation.",
    },
    {
      q: "How is attendance percentage rounded?",
      a: "Most schools use standard rounding to one or two decimal places, but policies vary. If you're right at a cutoff like 74.6%, check whether your school rounds up to 75% or truncates the decimal.",
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
    headline: "Attendance Calculator - Check Your Attendance Percentage Instantly",
    description:
      "Free attendance calculator with formula, worked example, and a chart showing how many classes you can safely miss.",
    author: { "@type": "Organization", name: "StudyCalc" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://studycalc.co/calculators" },
      { "@type": "ListItem", position: 3, name: "Attendance Calculator", item: "https://studycalc.co/attendance-percentage-formula" },
    ],
  };

  return (
    <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          📋 Attendance Calculator Guide
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Attendance Calculator: Check Your Attendance Percentage Instantly
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Enter the classes you've attended and the total classes held into the calculator above to get your exact
          attendance percentage. Below, you'll find the formula, a worked example, and how many classes you can
          safely miss without falling below your required percentage.
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

      <div id="what-is-attendance-calculator" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">What Is an Attendance Calculator?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          An attendance calculator turns your raw class counts into a percentage, and tells you how many more
          classes you can miss, or need to attend, to stay above your school's required minimum.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Most universities and colleges set a minimum attendance percentage, commonly 75%, that you need to
          maintain in order to sit for final exams. Falling below it, even by a small margin, can mean being barred
          from an exam regardless of how well you know the material.
        </p>
      </div>

      <div id="why-use" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Why Use This Calculator</h2>
        <ul className="mt-4 space-y-3 text-slate-300 leading-7">
          <li>
            <span className="font-semibold text-white">Before you skip a class.</span> Check exactly how much one
            more absence would move your percentage before you decide to miss it.
          </li>
          <li>
            <span className="font-semibold text-white">To plan the rest of your term.</span> Find out how many of
            your remaining classes you need to attend to reach your required percentage.
          </li>
          <li>
            <span className="font-semibold text-white">Before an exam eligibility deadline.</span> Confirm you're
            above the cutoff in time to fix a shortfall rather than finding out too late.
          </li>
          <li>
            <span className="font-semibold text-white">When your school's portal seems wrong.</span> Recalculating
            independently is the fastest way to catch a data entry error.
          </li>
        </ul>
      </div>

      <div id="how-it-works" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How This Calculator Works</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Enter the number of classes you've attended and the total number of classes held so far. The calculator
          divides attended by total and multiplies by 100 to give your current percentage. If you enter your
          required percentage and the number of classes remaining in the term, it can also tell you exactly how
          many more classes you need to attend, or how many you can afford to miss.
        </p>
      </div>

      <div id="formula" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Attendance Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Attendance % = (Classes Attended ÷ Total Classes Held) × 100
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">
          To work out how many more classes you need, the calculator rearranges the same formula: it solves for
          the number of additional classes required so that your attended total, divided by your final total,
          meets your required percentage.
        </p>
      </div>

      <div id="example" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Example</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Say a student has attended {exampleData.attended} out of {exampleData.total} classes held so far this
          term:
        </p>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p>Classes attended: {exampleData.attended}</p>
          <p>Total classes held: {exampleData.total}</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            Attendance % = ({exampleData.attended} ÷ {exampleData.total}) × 100 = {examplePercent}%
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          At {examplePercent}%, this student is comfortably above a typical 75% requirement, with some room to
          miss a few more classes if needed.
        </p>

        <h3 className="mt-8 text-lg font-bold text-white">Example: How Many More Classes Are Needed?</h3>
        <p className="mt-3 leading-7 text-slate-300">
          Now say a different student has attended {attendedSoFar} out of {totalSoFar} classes, with{" "}
          {remainingClasses} classes remaining in the term, and needs to reach {requiredPercent}% by the end:
        </p>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p>Classes attended so far: {attendedSoFar}</p>
          <p>Total classes held so far: {totalSoFar}</p>
          <p>Classes remaining: {remainingClasses}</p>
          <p>Required attendance: {requiredPercent}%</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            Minimum additional classes needed: {Math.max(neededMinAttendance, 0)} out of {remainingClasses}
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          This tells the student exactly how many of the remaining classes they can afford to miss while still
          reaching their required percentage by the end of the term.
        </p>
      </div>

      <div id="missed-classes" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How Many Classes Can You Miss?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          For a rough reference, here's how many classes you could miss out of a 100-class term at a few common
          required percentages:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Required Attendance</th>
                <th className="px-5 py-3.5 text-left">Total Classes</th>
                <th className="px-5 py-3.5 text-left">Classes You Can Miss</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {missChart.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.required}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-200">{row.total}</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{row.canMiss}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          This table assumes a 100-class term for easy scaling. Use the calculator above with your school's actual
          total for an exact number.
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
          The questions students ask most often about tracking and calculating attendance.
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
          <Link href="/percentage-formula-explained" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Convert raw scores into final weighted grades.</p>
          </Link>
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Find out what score you need on your final exam.</p>
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
          <li>Attendance percentage is classes attended divided by classes held, times 100.</li>
          <li>Most schools require a minimum, commonly 75%, to sit for final exams.</li>
          <li>Cancelled classes usually don't count against your total.</li>
          <li>Check your percentage regularly, not just before the exam eligibility deadline.</li>
          <li>Use the Attendance Calculator to know exactly how many classes you can miss.</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Final Summary</h2>
        <p className="leading-7 text-slate-300">
          Attendance percentage is one of the simplest calculations in this guide, but it's also one of the easiest
          to get wrong when you're relying on memory. The calculator above gives you an exact number instantly, and
          knowing the formula means you can plan your remaining classes with real numbers instead of guesswork.
        </p>
      </div>

      <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Check Your Attendance?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Scroll up, enter your class counts, and see your exact attendance percentage instantly.
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