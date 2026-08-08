import Link from "next/link";

export const metadata = {
  title: "GPA Calculator - Calculate Your GPA Instantly (Free & Accurate)",
  description:
    "Use our free GPA calculator to find your grade point average in seconds. Learn the GPA formula, see a worked example, and check your grade scale.",
  alternates: {
    canonical: "/gpa-calculator",
  },
  openGraph: {
    title: "GPA Calculator - Calculate Your GPA Instantly",
    description:
      "Free online GPA calculator with step-by-step formula, grade scale chart, and worked examples. No sign-up needed.",
  },
};

export default function GPACalculatorGuide() {
  const toc = [
    { href: "#what-is-gpa-calculator", label: "What Is a GPA Calculator?" },
    { href: "#why-use", label: "Why Use This Calculator" },
    { href: "#how-it-works", label: "How This Calculator Works" },
    { href: "#formula", label: "GPA Formula" },
    { href: "#example", label: "Step-by-Step Example" },
    { href: "#weighted-vs-unweighted", label: "Weighted vs Unweighted GPA" },
    { href: "#mistakes", label: "Common Mistakes" },
    { href: "#tips", label: "Tips for Accurate Results" },
    { href: "#faqs", label: "FAQs" },
    { href: "#related-tools", label: "Related Tools" },
  ];

  const gradeScale = [
    { letter: "A+ / A", percent: "93–100%", points: "4.00" },
    { letter: "A-", percent: "90–92%", points: "3.70" },
    { letter: "B+", percent: "87–89%", points: "3.30" },
    { letter: "B", percent: "83–86%", points: "3.00" },
    { letter: "B-", percent: "80–82%", points: "2.70" },
    { letter: "C+", percent: "77–79%", points: "2.30" },
    { letter: "C", percent: "73–76%", points: "2.00" },
    { letter: "C-", percent: "70–72%", points: "1.70" },
    { letter: "D", percent: "65–69%", points: "1.00" },
    { letter: "F", percent: "Below 65%", points: "0.00" },
  ];

  const exampleCourses = [
    { course: "Calculus I", credits: 4, grade: "A", points: 4.0 },
    { course: "English Composition", credits: 3, grade: "B+", points: 3.3 },
    { course: "Introduction to Psychology", credits: 3, grade: "A-", points: 3.7 },
    { course: "General Chemistry Lab", credits: 1, grade: "B", points: 3.0 },
  ].map((c) => ({ ...c, quality: +(c.credits * c.points).toFixed(2) }));

  const totalCredits = exampleCourses.reduce((s, c) => s + c.credits, 0);
  const totalQuality = exampleCourses.reduce((s, c) => s + c.quality, 0);
  const exampleGPA = (totalQuality / totalCredits).toFixed(2);

  const mistakes = [
    {
      title: "Averaging grades instead of weighting them",
      desc: "Adding up your grade points and dividing by the number of courses ignores credit hours. A 1-credit elective and a 4-credit core class don't carry the same weight in your GPA.",
    },
    {
      title: "Entering percentages instead of grade points",
      desc: "Some students type in a raw score like 88 instead of converting it to a grade point value first. Always convert to the 4.0 scale before running the calculation.",
    },
    {
      title: "Leaving out a class you're currently taking",
      desc: "If you're calculating a projected GPA, don't forget to include in-progress courses using your expected grade — otherwise the number won't reflect your real standing.",
    },
    {
      title: "Mixing up GPA with CGPA",
      desc: "A single semester's GPA only covers that term. If you want your overall academic record across every semester, you need CGPA, not GPA.",
    },
  ];

  const tips = [
    {
      title: "Double-check your school's grading scale",
      desc: "Not every school uses the same cutoffs for A, B, and C. Confirm the exact percentage ranges your institution uses before entering grades.",
    },
    {
      title: "Use official transcripts, not memory",
      desc: "Pull your grades and credit hours from your actual transcript or grade portal. A rough guess can throw off the final number more than you'd expect.",
    },
    {
      title: "Run a projected GPA before finals",
      desc: "If you're deciding how much a final exam matters, calculate your GPA with a few different grade scenarios to see how much room you have.",
    },
    {
      title: "Recalculate every semester",
      desc: "Checking your GPA regularly, rather than waiting for your transcript to update, gives you time to fix a problem while it's still fixable.",
    },
  ];

  const faqs = [
    {
      q: "How do I calculate my GPA?",
      a: "Multiply each course's credit hours by its grade point value to get quality points, add up the quality points for all your courses, then divide by your total credit hours. That final number, usually shown to two decimal places, is your GPA.",
    },
    {
      q: "What is a good GPA?",
      a: "A GPA of 3.5 or higher is generally considered strong and meets the requirements for most scholarships and honors programs. A 3.0–3.5 is solid and competitive for most jobs and graduate programs, while anything below 3.0 may limit some options.",
    },
    {
      q: "What is the difference between GPA and CGPA?",
      a: "GPA measures your performance in one semester or term. CGPA (Cumulative GPA) combines every semester you've completed into one running average. Use our CGPA Calculator if you need your full academic record instead of a single term.",
    },
    {
      q: "Does this GPA calculator work for weighted GPA?",
      a: "Yes. If your school uses a weighted scale for AP, IB, or Honors courses, just enter the weighted grade point value for those classes (typically up to 5.0) instead of the standard 4.0 value.",
    },
    {
      q: "Can I use this calculator if my school uses a 10-point or percentage scale?",
      a: "Convert your grades to their nearest 4.0-scale equivalent first, using your school's official conversion chart, then enter those values. Scales vary enough between institutions that there's no single universal conversion.",
    },
    {
      q: "How is GPA calculated with different credit hours?",
      a: "Credit hours act as a weight. A 4-credit course affects your GPA more than a 1-credit course because you multiply each grade point value by its credit hours before adding everything together and dividing by total credits.",
    },
    {
      q: "Does a Pass/Fail class affect my GPA?",
      a: "Usually not. Pass/Fail or Satisfactory/Unsatisfactory courses typically don't carry a grade point value, so they're excluded from both your quality points total and your credit hours total in the GPA formula.",
    },
    {
      q: "How much does one bad grade affect my GPA?",
      a: "It depends on the course's credit hours and how many total credits you've completed. A low grade in a high-credit class, or during an early semester when you have fewer total credits, will move your GPA more than a low grade in a light course later on.",
    },
    {
      q: "Can I calculate a cumulative GPA with this tool?",
      a: "This calculator is built for a single semester. For your full academic history across multiple semesters, use our CGPA Calculator, which combines semester GPAs and credit hours into one cumulative number.",
    },
    {
      q: "Is GPA rounded up or down?",
      a: "Standard mathematical rounding applies — most schools round to two decimal places using normal rounding rules, not always rounding up. Check your registrar's specific policy if you're right on the edge of a cutoff.",
    },
    {
      q: "What GPA do I need for graduate school?",
      a: "Requirements vary widely by program, but many graduate programs look for a 3.0 or higher, with more competitive programs expecting 3.5 or above. Always check the specific program's admissions page for their stated minimum.",
    },
    {
      q: "Can my GPA be higher than 4.0?",
      a: "Not on a standard unweighted scale, where 4.0 is the maximum. On a weighted scale that gives extra credit for AP, IB, or Honors courses, GPAs can go above 4.0, sometimes up to 5.0.",
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
    headline: "GPA Calculator - Calculate Your GPA Instantly",
    description:
      "Free GPA calculator with formula explanation, worked example, grade scale chart, and FAQs.",
    author: { "@type": "Organization", name: "StudyCalc" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://studycalc.co/calculators" },
      { "@type": "ListItem", position: 3, name: "GPA Calculator", item: "https://studycalc.co/gpa-calculator" },
    ],
  };

  return (
    <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Heading */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          🎓 GPA Calculator Guide
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          GPA Calculator: Calculate Your GPA Instantly
        </h2>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Enter your courses, credit hours, and grades into the calculator above and get your GPA in seconds. Below,
          you'll find the exact formula behind the numbers, a full worked example, and answers to the questions
          students ask most about how GPA actually works.
        </p>
      </div>

      {/* TOC */}
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

      {/* What Is a GPA Calculator */}
      <div id="what-is-gpa-calculator" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">What Is a GPA Calculator?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          A GPA calculator is a tool that turns your letter grades and credit hours into a single number: your Grade
          Point Average. Instead of doing the multiplication and division by hand for every course, you enter your
          grades once and get an accurate result immediately.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          GPA itself is a weighted average, not a simple one. A course worth four credit hours affects your overall
          average more than a course worth one credit hour, because it represents a bigger share of your total
          workload. That's the part most students get wrong when they try to estimate their GPA in their head.
        </p>
      </div>

      {/* Why Use This Calculator */}
      <div id="why-use" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Why Use This Calculator</h2>
        <p className="mt-4 leading-7 text-slate-300">
          You could calculate GPA by hand, but a calculator removes the room for error and saves you time, especially
          if you're checking multiple scenarios. Here's when it's genuinely useful:
        </p>
        <ul className="mt-4 space-y-3 text-slate-300 leading-7">
          <li>
            <span className="font-semibold text-white">Before you register for classes.</span> Test how a heavier or
            lighter course load might shift your GPA before you commit to a schedule.
          </li>
          <li>
            <span className="font-semibold text-white">Before final exams.</span> Plug in a few possible final grades
            to see exactly how much your exam performance can move your semester GPA.
          </li>
          <li>
            <span className="font-semibold text-white">When applying for scholarships.</span> Many scholarships list
            a minimum GPA. Knowing your exact number tells you where you stand before you apply.
          </li>
          <li>
            <span className="font-semibold text-white">When your transcript looks off.</span> If a school's system
            shows a GPA that doesn't match your expectations, running the numbers yourself is the fastest way to
            check for an error.
          </li>
          <li>
            <span className="font-semibold text-white">Plan future semesters.</span> Test different grade
            combinations to see how much you need in your remaining courses to reach your target GPA.
          </li>
        </ul>
      </div>

      {/* How This Calculator Works */}
      <div id="how-it-works" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How This Calculator Works</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Add each course you're taking, along with its credit hours and the letter grade you earned or expect to
          earn. The calculator converts each letter grade to its grade point value, multiplies it by the credit
          hours, and adds those results together across all your courses. That total is then divided by your total
          credit hours to produce your GPA.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          You can add or remove courses freely, which makes it easy to test a "what-if" scenario, like seeing how
          your GPA would change if a specific grade came in higher or lower than expected.
        </p>
      </div>

      {/* Formula */}
      <div id="formula" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">GPA Formula</h2>
        <p className="mt-4 leading-7 text-slate-300">
          The formula behind every GPA calculation, including this one, comes down to two steps.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Quality Points = Credit Hours × Grade Point Value
          </p>
          <p className="mt-3 text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            GPA = Total Quality Points ÷ Total Credit Hours
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">Here's the standard 4.0-scale grade point chart used in the formula:</p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Letter Grade</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
                <th className="px-5 py-3.5 text-left">Grade Point Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {gradeScale.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.letter}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{row.percent}</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Grading scales vary by school. Confirm the exact ranges your institution uses if your calculated GPA
          doesn't match your transcript.
        </p>
      </div>

      {/* Step-by-Step Example */}
      <div id="example" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Example</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Say a student took four courses in one semester. Here's the full breakdown, exactly as the calculator
          above would compute it:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Course</th>
                <th className="px-5 py-3.5 text-left">Credit Hours</th>
                <th className="px-5 py-3.5 text-left">Grade</th>
                <th className="px-5 py-3.5 text-left">Grade Point Value</th>
                <th className="px-5 py-3.5 text-left">Quality Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {exampleCourses.map((c, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5">{c.course}</td>
                  <td className="px-5 py-3.5 font-mono">{c.credits}</td>
                  <td className="px-5 py-3.5 font-mono">{c.grade}</td>
                  <td className="px-5 py-3.5 font-mono">{c.points.toFixed(2)}</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{c.quality.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p>Total credit hours: {totalCredits}</p>
          <p>Total quality points: {totalQuality.toFixed(2)}</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            GPA = {totalQuality.toFixed(2)} ÷ {totalCredits} = {exampleGPA}
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Notice that a simple average of the four grade point values — (4.00 + 3.30 + 3.70 + 3.00) ÷ 4 — would give
          3.50, which is close but not identical to the correct weighted result. The gap gets bigger as your credit
          hours vary more from course to course.
        </p>
      </div>

      {/* Weighted vs Unweighted */}
      <div id="weighted-vs-unweighted" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Weighted vs Unweighted GPA</h2>
        <p className="mt-4 leading-7 text-slate-300">
          If you're in high school, you may see two different GPA numbers on your transcript. An unweighted GPA
          scores every class on the same 4.0 scale, regardless of difficulty. A weighted GPA gives extra credit for
          harder classes, extending the scale up to 5.0.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Course Type</th>
                <th className="px-5 py-3.5 text-left">"A" Grade Value</th>
                <th className="px-5 py-3.5 text-left">"B" Grade Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              <tr>
                <td className="px-5 py-3.5">Standard course</td>
                <td className="px-5 py-3.5 font-mono">4.00</td>
                <td className="px-5 py-3.5 font-mono">3.00</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5">Honors course</td>
                <td className="px-5 py-3.5 font-mono">4.50</td>
                <td className="px-5 py-3.5 font-mono">3.50</td>
              </tr>
              <tr>
                <td className="px-5 py-3.5">AP / IB course</td>
                <td className="px-5 py-3.5 font-mono">5.00</td>
                <td className="px-5 py-3.5 font-mono">4.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          If your school reports both, check which one a college or scholarship is asking for before you submit an
          application. They're not interchangeable, and using the wrong one can misrepresent your standing.
        </p>
      </div>

      {/* Common Mistakes */}
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

      {/* Tips */}
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

      {/* FAQs */}
      <div id="faqs" className="mt-16 border-t border-slate-800/60 pt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-sm mb-6">
          The questions students ask most often about calculating and understanding GPA.
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

      {/* Related Tools */}
      <div id="related-tools" className="mt-16 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white mb-4">Related Tools & Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Find out what score you need on your final exam.</p>
          </Link>
          <Link href="/how-to-calculate-gpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate GPA</span>
            <p className="mt-1 text-sm text-slate-400">The full step-by-step guide behind this calculator.</p>
          </Link>
          <Link href="/how-to-calculate-cgpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate CGPA</span>
            <p className="mt-1 text-sm text-slate-400">Learn how semester GPAs combine into a cumulative score.</p>
          </Link>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-12 rounded-xl border border-slate-800 bg-slate-950/40 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li>GPA is a weighted average based on credit hours.</li>
          <li>Higher-credit courses affect your GPA more.</li>
          <li>Always use your university's official grading scale.</li>
          <li>Calculate your GPA after every semester.</li>
          <li>Use the GPA Calculator to avoid manual errors.</li>
        </ul>
      </div>

      {/* Final Summary */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Final Summary</h2>
        <p className="leading-7 text-slate-300">
          GPA comes down to two numbers per course — credit hours and grade points — multiplied together, added up,
          and divided by your total credit hours. The calculator above does that math instantly, but understanding
          the formula behind it means you can catch an error on your transcript or plan ahead before your next
          semester starts.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          If you need your overall academic record across multiple semesters rather than just one term, the{" "}
          <Link href="/cgpa-calculator" className="text-cyan-400 hover:underline">
            CGPA Calculator
          </Link>{" "}
          picks up right where this one leaves off.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Check Your GPA?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Scroll up, enter your courses, and get your exact GPA in seconds — completely free.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <a href="#top" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Use the Calculator
          </a>
          <Link href="/cgpa-calculator" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
            Try CGPA Calculator
          </Link>
        </div>
      </div>
    </section>
  );
}