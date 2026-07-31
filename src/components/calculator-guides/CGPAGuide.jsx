import Link from "next/link";

export const metadata = {
  title: "CGPA Calculator - Calculate Your Cumulative GPA Instantly (Free)",
  description:
    "Use our free CGPA calculator to find your cumulative GPA across all semesters. Learn the CGPA formula, see a worked example, and check the scale conversion chart.",
  alternates: {
    canonical: "/cgpa-calculator",
  },
  openGraph: {
    title: "CGPA Calculator - Calculate Your Cumulative GPA Instantly",
    description:
      "Free online CGPA calculator with step-by-step formula, scale conversion chart, and worked examples across multiple semesters.",
  },
};

export default function CGPACalculatorGuide() {
  const toc = [
    { href: "#what-is-cgpa-calculator", label: "What Is a CGPA Calculator?" },
    { href: "#why-use", label: "Why Use This Calculator" },
    { href: "#how-it-works", label: "How This Calculator Works" },
    { href: "#formula", label: "CGPA Formula" },
    { href: "#example", label: "Step-by-Step Example" },
    { href: "#scale", label: "CGPA Scale Chart" },
    { href: "#mistakes", label: "Common Mistakes" },
    { href: "#tips", label: "Tips for Accurate Results" },
    { href: "#faqs", label: "FAQs" },
    { href: "#related-tools", label: "Related Tools" },
  ];

  const scaleChart = [
    { scale4: "3.90 – 4.00", scale10: "9.5 – 10.0", percentage: "90% – 100%", standing: "First Class with Distinction" },
    { scale4: "3.70 – 3.89", scale10: "8.5 – 9.4", percentage: "80% – 89%", standing: "First Class / Excellent" },
    { scale4: "3.30 – 3.69", scale10: "7.5 – 8.4", percentage: "75% – 79%", standing: "Upper Second Class" },
    { scale4: "3.00 – 3.29", scale10: "6.5 – 7.4", percentage: "65% – 74%", standing: "Good Standing" },
    { scale4: "2.00 – 2.99", scale10: "5.0 – 6.4", percentage: "50% – 64%", standing: "Satisfactory / Pass" },
    { scale4: "Below 2.00", scale10: "Below 5.0", percentage: "Below 50%", standing: "Academic Probation" },
  ];

  const semesters = [
    { term: "Semester 1", gpa: 3.6, credits: 15 },
    { term: "Semester 2", gpa: 3.2, credits: 17 },
    { term: "Semester 3", gpa: 3.8, credits: 14 },
    { term: "Semester 4", gpa: 3.5, credits: 16 },
  ].map((s) => ({ ...s, points: +(s.gpa * s.credits).toFixed(2) }));

  const totalCredits = semesters.reduce((s, x) => s + x.credits, 0);
  const totalPoints = semesters.reduce((s, x) => s + x.points, 0);
  const cgpaResult = (totalPoints / totalCredits).toFixed(2);

  const mistakes = [
    {
      title: "Averaging semester GPAs directly",
      desc: "Adding your semester GPAs and dividing by the number of semesters ignores credit load. A 14-credit term and a 17-credit term don't carry equal weight in your CGPA.",
    },
    {
      title: "Skipping a semester's credit hours",
      desc: "If you leave out the credit hours for even one term, your total divisor is wrong, and every calculation after it shifts along with it.",
    },
    {
      title: "Using the wrong scale",
      desc: "Entering a percentage or a 10-point score directly into a 4.0-scale formula produces a meaningless result. Convert to the correct scale first.",
    },
    {
      title: "Forgetting repeated or withdrawn courses",
      desc: "Grade forgiveness and additive tracking policies affect your CGPA differently. Check your registrar's specific rule before assuming a retaken course fully replaces the old grade.",
    },
  ];

  const tips = [
    {
      title: "Pull data from your actual transcript",
      desc: "Round numbers or half-remembered GPAs introduce errors you won't notice until the final CGPA looks off.",
    },
    {
      title: "Recalculate every semester",
      desc: "A CGPA calculated after each term lets you catch a downward trend early, while you still have time to adjust.",
    },
    {
      title: "Know your school's rounding policy",
      desc: "Most schools round to two decimal places, but some competitive programs use three or four. This can matter if you're near a scholarship or admissions cutoff.",
    },
    {
      title: "Separate CGPA from GPA when applying",
      desc: "Some applications ask for your most recent semester GPA and your overall CGPA separately. Have both numbers ready.",
    },
  ];

  const faqs = [
    {
      q: "How do I calculate my CGPA?",
      a: "Multiply each semester's GPA by its credit hours to get that semester's quality points, add up the quality points across all semesters, then divide by your total credit hours. The result is your CGPA, usually rounded to two decimal places.",
    },
    {
      q: "What is the difference between GPA and CGPA?",
      a: "GPA measures your performance in a single semester or term. CGPA is the cumulative average across every semester you've completed, so it reflects your entire academic record rather than just one term.",
    },
    {
      q: "Is a 3.5 CGPA good?",
      a: "Yes, generally. A 3.5 CGPA sits between a B+ and A- average and meets the requirements for most scholarships and many graduate programs, though what counts as good varies by school and field.",
    },
    {
      q: "Can CGPA decrease after a good semester?",
      a: "Yes, if that semester's GPA is lower than your running CGPA. Whether it goes up or down depends entirely on how that term's GPA compares to your cumulative average so far, not on how it compares to your best semester.",
    },
    {
      q: "How much does one semester affect my CGPA?",
      a: "It depends on your total accumulated credit hours. Early in your degree, one semester can shift your CGPA noticeably. In your final year, when your total credits are much higher, a single term has a smaller effect on the overall number.",
    },
    {
      q: "How do I convert a 10-point CGPA to a 4.0 scale?",
      a: "There's no single universal formula, since conversion methods vary by country and evaluator. A common approximate method divides your 10-point CGPA by 2.5 to estimate a 4.0-scale equivalent, but always check your target institution's official conversion policy.",
    },
    {
      q: "Does a failed course affect my CGPA even after a retake?",
      a: "It depends on your school's policy. Under grade forgiveness, only the retake grade counts, though the credit hours are usually counted once. Under an additive policy, both attempts remain in your CGPA calculation, which lowers your average more.",
    },
    {
      q: "Do Pass/Fail courses count toward CGPA?",
      a: "No. Courses graded Pass/Fail or Satisfactory/Unsatisfactory don't carry grade points, so they're excluded from both the quality points total and the credit hours total used in the CGPA formula.",
    },
    {
      q: "What CGPA do I need for graduate school?",
      a: "Requirements vary by program, but many graduate schools look for a 3.0 or higher, with competitive programs often expecting 3.5 or above. Always confirm the specific minimum listed by the program you're applying to.",
    },
    {
      q: "Can I use this calculator for a single semester instead?",
      a: "This tool is built for combining multiple semesters into one cumulative number. If you only need one term's result, our GPA Calculator is the faster option.",
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
    headline: "CGPA Calculator - Calculate Your Cumulative GPA Instantly",
    description:
      "Free CGPA calculator with formula explanation, worked example across multiple semesters, scale conversion chart, and FAQs.",
    author: { "@type": "Organization", name: "StudyCalc" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Calculators", item: "https://studycalc.co/calculators" },
      { "@type": "ListItem", position: 3, name: "CGPA Calculator", item: "https://studycalc.co/cgpa-calculator" },
    ],
  };

  return (
    <section className="mx-auto mt-16 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          🎓 CGPA Calculator Guide
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          CGPA Calculator: Calculate Your Cumulative GPA Instantly
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Enter each semester's GPA and credit hours into the calculator above to get your CGPA in seconds. Below,
          you'll find the formula behind the number, a full multi-semester example, and answers to the questions
          students ask most about tracking their cumulative average.
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

      <div id="what-is-cgpa-calculator" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">What Is a CGPA Calculator?</h2>
        <p className="mt-4 leading-7 text-slate-300">
          A CGPA calculator combines every semester you've completed into one cumulative number. Rather than
          looking at how you did in a single term, it shows your overall academic standing across your entire
          degree so far.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          The key idea is that CGPA is a weighted average, not a simple one. A semester with more credit hours
          carries more influence over the final number than a lighter semester, even if both terms had the same
          GPA. That's the part a calculator handles far more reliably than doing it in your head.
        </p>
      </div>

      <div id="why-use" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Why Use This Calculator</h2>
        <ul className="mt-4 space-y-3 text-slate-300 leading-7">
          <li>
            <span className="font-semibold text-white">Before graduate school applications.</span> Confirm your
            exact CGPA before submitting to a program with a stated minimum cutoff.
          </li>
          <li>
            <span className="font-semibold text-white">Before renewing a scholarship.</span> Many scholarships
            recheck your cumulative average every year, not just your entry-year GPA.
          </li>
          <li>
            <span className="font-semibold text-white">When transferring universities.</span> Transfer admissions
            almost always look at your cumulative record rather than just your latest term.
          </li>
          <li>
            <span className="font-semibold text-white">To plan your final semesters.</span> See how many more
            strong terms it would take to reach a target CGPA before you graduate.
          </li>
        </ul>
      </div>

      <div id="how-it-works" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">How This Calculator Works</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Add each semester you've completed, along with its GPA and total credit hours. The calculator multiplies
          each semester's GPA by its credit hours to get that term's quality points, adds the quality points from
          every semester together, and divides that total by your combined credit hours.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          You can add semesters one at a time as you complete them, which makes this useful for tracking your CGPA
          continuously throughout your degree rather than recalculating from scratch each time.
        </p>
      </div>

      <div id="formula" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">CGPA Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            Quality Points (per semester) = Semester GPA × Semester Credit Hours
          </p>
          <p className="mt-3 text-lg sm:text-xl font-black text-cyan-400 tracking-wide">
            CGPA = Total Quality Points ÷ Total Credit Hours
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">
          Not sure how to find a single semester's GPA first? Read our{" "}
          <Link href="/how-to-calculate-gpa" className="text-cyan-400 hover:underline">
            How to Calculate GPA
          </Link>{" "}
          guide before combining terms into a CGPA.
        </p>
      </div>

      <div id="example" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">Step-by-Step Example</h2>
        <p className="mt-4 leading-7 text-slate-300">
          Say a student has completed four semesters with different credit loads and grades:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Semester</th>
                <th className="px-5 py-3.5 text-left">GPA</th>
                <th className="px-5 py-3.5 text-left">Credit Hours</th>
                <th className="px-5 py-3.5 text-left">Quality Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {semesters.map((s) => (
                <tr key={s.term}>
                  <td className="px-5 py-3.5">{s.term}</td>
                  <td className="px-5 py-3.5 font-mono">{s.gpa.toFixed(2)}</td>
                  <td className="px-5 py-3.5 font-mono">{s.credits}</td>
                  <td className="px-5 py-3.5 font-mono text-emerald-400">{s.points.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60 text-sm leading-6 text-slate-300">
          <p>Total credit hours: {totalCredits}</p>
          <p>Total quality points: {totalPoints.toFixed(2)}</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            CGPA = {totalPoints.toFixed(2)} ÷ {totalCredits} = {cgpaResult}
          </p>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          A simple average of the four GPAs — (3.60 + 3.20 + 3.80 + 3.50) ÷ 4 — gives 3.53, close to but not the
          same as the correct weighted result. The gap grows as credit hours vary more between semesters.
        </p>
      </div>

      <div id="scale" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white">CGPA Scale Chart</h2>
        <p className="mt-4 leading-7 text-slate-300">
          If your school reports CGPA on a 10-point scale or as a percentage, here's roughly how the scales
          compare:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">4.0 Scale</th>
                <th className="px-5 py-3.5 text-left">10.0 Scale</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
                <th className="px-5 py-3.5 text-left">Standing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {scaleChart.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.scale4}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-200">{row.scale10}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{row.percentage}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-200">{row.standing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          These conversions are approximate. Different institutions and credential evaluators use slightly
          different scaling methods, so always confirm against your school's official conversion table.
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
          The questions students ask most often about calculating and understanding CGPA.
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
            <p className="mt-1 text-sm text-slate-400">The full step-by-step guide for a single semester.</p>
          </Link>
          <Link href="/how-to-calculate-cgpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate CGPA</span>
            <p className="mt-1 text-sm text-slate-400">The full step-by-step guide behind this calculator.</p>
          </Link>
        </div>
      </div>

      <div className="mt-12 rounded-xl border border-slate-800 bg-slate-950/40 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li>CGPA is a weighted average of every semester you've completed.</li>
          <li>Higher-credit semesters affect your CGPA more than lighter ones.</li>
          <li>Never average semester GPAs directly — always weight by credit hours.</li>
          <li>Recalculate your CGPA after every semester to catch issues early.</li>
          <li>Use the CGPA Calculator to avoid manual errors across multiple terms.</li>
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Final Summary</h2>
        <p className="leading-7 text-slate-300">
          CGPA is just your semester GPAs and credit hours combined into one running number. The calculator above
          handles the arithmetic, but knowing the formula means you can double-check your transcript and plan
          ahead with confidence before your next set of results comes in.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Need a single term's GPA first? The{" "}
          <Link href="/gpa-calculator" className="text-cyan-400 hover:underline">
            GPA Calculator
          </Link>{" "}
          covers that before you roll everything into your CGPA.
        </p>
      </div>

      <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Check Your CGPA?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Scroll up, enter your semester GPAs and credit hours, and get your CGPA instantly — completely free.
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