import Link from "next/link";

export default function CalculateCGPA() {
  const toc = [
    { href: "#what-is-cgpa", label: "What Is CGPA?" },
    { href: "#why-cgpa-matters", label: "Why CGPA Matters" },
    { href: "#gpa-vs-cgpa", label: "GPA vs CGPA" },
    { href: "#cgpa-formula", label: "CGPA Formula" },
    { href: "#how-to-calculate", label: "How to Calculate CGPA" },
    { href: "#common-mistakes", label: "Common Mistakes" },
    { href: "#improve-cgpa", label: "How to Improve Your CGPA" },
    { href: "#faqs", label: "FAQs" },
    { href: "#related-tools", label: "Related Tools" },
  ];

  const gpaVsCgpa = [
    { metric: "Time period covered", gpa: "One semester or term", cgpa: "Every semester completed so far" },
    { metric: "What it shows", gpa: "How you did in a single term", cgpa: "Your overall academic performance" },
    { metric: "Changes how often", gpa: "Every semester (a fresh number)", cgpa: "Every semester (a running average)" },
    { metric: "Used for", gpa: "Term-level scholarships, dean's list", cgpa: "Graduation, transfers, jobs, grad school" },
    { metric: "Formula basis", gpa: "That term's credits and grades only", cgpa: "All credits and grades to date" },
  ];

  const cgpaSteps = [
    {
      step: "1",
      title: "Gather Your Semester Records",
      desc: "Pull your transcript or grade report for every semester you've completed so far. For each one, you need two numbers: the credit hours attempted that term and the GPA you earned that term.",
    },
    {
      step: "2",
      title: "Turn Each Semester Into Quality Points",
      desc: "Multiply each semester's GPA by its credit hours. This gives you that semester's \"quality points.\" A heavier semester naturally produces more quality points, which is exactly why it should count for more.",
    },
    {
      step: "3",
      title: "Add Everything Up",
      desc: "Add the quality points from every semester together to get your total quality points. Separately, add up the credit hours from every semester to get your total credits attempted.",
    },
    {
      step: "4",
      title: "Divide to Get Your CGPA",
      desc: "Divide total quality points by total credit hours. Round to two decimal places, and that's your official CGPA.",
    },
  ];

  const cgpaScaleMatrix = [
    { scale4: "3.90 – 4.00", scale10: "9.5 – 10.0", percentage: "90% – 100%", standing: "First Class with Distinction", honors: "Summa Cum Laude" },
    { scale4: "3.70 – 3.89", scale10: "8.5 – 9.4", percentage: "80% – 89%", standing: "First Class / Excellent", honors: "Magna Cum Laude" },
    { scale4: "3.30 – 3.69", scale10: "7.5 – 8.4", percentage: "75% – 79%", standing: "Upper Second Class / Very Good", honors: "Cum Laude" },
    { scale4: "3.00 – 3.29", scale10: "6.5 – 7.4", percentage: "65% – 74%", standing: "Good Standing", honors: "None" },
    { scale4: "2.00 – 2.99", scale10: "5.0 – 6.4", percentage: "50% – 64%", standing: "Satisfactory / Pass", honors: "None" },
    { scale4: "Below 2.00", scale10: "Below 5.0", percentage: "Below 50%", standing: "Academic Probation", honors: "Ineligible" },
  ];

  // Example 1 — 4 semesters
  const fourSemesterExample = [
    { term: "Semester 1", gpa: 3.8, credits: 12 },
    { term: "Semester 2", gpa: 3.1, credits: 18 },
    { term: "Semester 3", gpa: 3.5, credits: 15 },
    { term: "Semester 4", gpa: 3.6, credits: 16 },
  ].map((s) => ({ ...s, points: +(s.gpa * s.credits).toFixed(2) }));

  const fourSemTotalPoints = fourSemesterExample.reduce((sum, s) => sum + s.points, 0);
  const fourSemTotalCredits = fourSemesterExample.reduce((sum, s) => sum + s.credits, 0);
  const fourSemCgpa = (fourSemTotalPoints / fourSemTotalCredits).toFixed(2);

  // Example 2 — 8 semesters
  const eightSemesterExample = [
    { term: "Semester 1", gpa: 3.5, credits: 15 },
    { term: "Semester 2", gpa: 3.2, credits: 16 },
    { term: "Semester 3", gpa: 3.8, credits: 14 },
    { term: "Semester 4", gpa: 3.6, credits: 15 },
    { term: "Semester 5", gpa: 3.4, credits: 17 },
    { term: "Semester 6", gpa: 3.9, credits: 15 },
    { term: "Semester 7", gpa: 3.7, credits: 16 },
    { term: "Semester 8", gpa: 3.5, credits: 14 },
  ].map((s) => ({ ...s, points: +(s.gpa * s.credits).toFixed(2) }));

  const eightSemTotalPoints = eightSemesterExample.reduce((sum, s) => sum + s.points, 0);
  const eightSemTotalCredits = eightSemesterExample.reduce((sum, s) => sum + s.credits, 0);
  const eightSemCgpa = (eightSemTotalPoints / eightSemTotalCredits).toFixed(2);

  const mistakes = [
    {
      title: "Averaging semester GPAs directly",
      desc: "Adding up your semester GPAs and dividing by the number of semesters ignores credit load. A 12-credit term and an 18-credit term don't carry the same weight, so a simple average gives you the wrong number.",
    },
    {
      title: "Forgetting a semester's credit hours",
      desc: "If you leave out the credit hours for even one semester, your total divisor is wrong and every calculation after it will be off.",
    },
    {
      title: "Mixing up GPA and CGPA",
      desc: "Some students plug their most recent semester GPA into a CGPA formula by mistake. CGPA needs data from every semester you've completed, not just the latest one.",
    },
    {
      title: "Not checking your school's rounding rules",
      desc: "Most schools round to two decimal places, but some competitive programs use three or four. Check your registrar's policy before comparing your CGPA to a cutoff.",
    },
  ];

  const improveTips = [
    {
      title: "Prioritize your heavier semesters",
      desc: "Since your CGPA is a running average, a strong performance in a high-credit semester moves the needle more than the same grades in a light semester.",
    },
    {
      title: "Use grade replacement if it's offered",
      desc: "If your school lets you retake a course and replace the old grade, this can meaningfully lift your CGPA — check your registrar's specific policy first.",
    },
    {
      title: "Know that early recovery is easier",
      desc: "Your total credit hours only grow over time, so the same GPA boost matters more in your second year than in your final year, when the denominator is much larger.",
    },
    {
      title: "Track your CGPA every semester",
      desc: "Recalculating after each term means you'll spot a dip early enough to adjust your course load or study plan before it snowballs.",
    },
  ];

  const faqs = [
    {
      q: "Is CGPA the same as GPA?",
      a: "No. GPA measures your performance in a single semester or term. CGPA is the running average of every semester you've completed, so it reflects your overall academic record rather than just one term.",
    },
    {
      q: "How do you convert GPA to CGPA?",
      a: "You don't convert one into the other directly — CGPA is calculated from all your semester GPAs and credit hours combined, using the formula: total quality points ÷ total credit hours. A single GPA on its own isn't enough to produce a CGPA.",
    },
    {
      q: "Does every semester count equally toward CGPA?",
      a: "No. Semesters are weighted by credit hours, not by the number of semesters. A semester with more credit hours has more influence on your final CGPA than a lighter semester, even if both were graded on the same 4.0 scale.",
    },
    {
      q: "Is a 3.5 CGPA good?",
      a: "Generally, yes. A 3.5 CGPA sits between a B+ and A- average and meets the requirements for most scholarships and many graduate programs. What counts as \"good\" can still vary by school, country, and field of study.",
    },
    {
      q: "Can CGPA decrease?",
      a: "Yes. If a new semester's GPA is lower than your current CGPA, your CGPA will drop. The size of the drop depends on how many credit hours that semester carried relative to your total credits so far.",
    },
    {
      q: "Can CGPA increase after one semester?",
      a: "Yes, but the effect gets smaller the further along you are in your degree. Early on, one strong semester can raise your CGPA noticeably. In your final year, your total credit hours are much larger, so the same GPA has less impact.",
    },
    {
      q: "What is a good CGPA?",
      a: "A CGPA above 3.5 is usually considered strong, 3.0–3.5 is solid and competitive for most programs, and anything below 3.0 may limit some scholarship or graduate school options. Standards vary by institution and country, so check specific program requirements.",
    },
    {
      q: "Which is more important, GPA or CGPA?",
      a: "It depends on what you're applying for. A single semester's GPA might matter for a term-specific scholarship or dean's list. CGPA matters more for graduation requirements, transfers, job applications, and graduate school, since it reflects your entire academic history.",
    },
    {
      q: "How do repeated or failed courses affect CGPA?",
      a: "It depends on your school's policy. Under grade replacement, only your latest grade counts toward quality points, though the credit hours are usually counted once. Under an additive policy, both the failing and passing attempts stay in your record, which pulls your CGPA down more.",
    },
    {
      q: "Do Pass/Fail courses count toward CGPA?",
      a: "No. Courses graded Pass/Fail or Satisfactory/Unsatisfactory don't carry grade points, so they're left out of both the quality points total and the credit hours total. They can still count toward your degree requirements, just not toward your CGPA.",
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
    headline: "How to Calculate CGPA: Step-by-Step Guide, Formula & Free CGPA Calculator",
    description:
      "Learn how to calculate CGPA with the correct formula, two worked examples, a GPA vs CGPA comparison table, and 10 FAQs.",
    author: { "@type": "Organization", name: "StudyCalc" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://studycalc.co/guides" },
      { "@type": "ListItem", position: 3, name: "How to Calculate CGPA", item: "https://studycalc.co/how-to-calculate-cgpa" },
    ],
  };

  return (
    <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Header */}
      <div className="border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
          🎓 CGPA Guide
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          How to Calculate CGPA: Step-by-Step Guide, Formula & Free CGPA Calculator
        </h1>
        <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
          Your CGPA is the number universities, scholarship committees, and employers look at first. It's not the
          same as your GPA, and it's not calculated the way most students assume. This guide walks through the
          formula, two full worked examples, and the mistakes that quietly throw the number off.
        </p>
      </div>

      {/* Quick Answer */}
      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-slate-950 p-5">
        <h2 className="text-sm font-bold uppercase tracking-wide text-cyan-400 mb-2">Quick Answer</h2>
        <p className="text-slate-300 leading-7">
          To calculate CGPA, multiply each semester's GPA by its credit hours to get that semester's quality
          points, add up quality points across all semesters, then divide by your total credit hours. Example:
          if you've earned 211.50 total quality points across 61 total credits, your CGPA is 211.50 ÷ 61 = 3.47.
        </p>
      </div>

      {/* Table of Contents */}
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

      {/* What Is CGPA */}
      <div id="what-is-cgpa" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">01.</span> What Is CGPA?
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          CGPA stands for Cumulative Grade Point Average. It's a running average of your academic performance
          across every semester you've completed, usually on a 4.0 or 10.0 scale depending on your country.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          It's easy to mix up three related terms, so here's the quick version:
        </p>
        <ul className="mt-3 space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li><span className="font-semibold text-white">SGPA</span> — Semester Grade Point Average. Your result for one specific semester.</li>
          <li><span className="font-semibold text-white">GPA</span> — Often used interchangeably with SGPA in the US, though some schools use "GPA" to mean a running average too. Check your school's specific usage.</li>
          <li><span className="font-semibold text-white">CGPA</span> — Cumulative GPA. The weighted average of all your SGPAs/GPAs across every semester so far.</li>
        </ul>
        <p className="mt-4 leading-7 text-slate-300">
          A core lecture worth 4 credit hours carries more weight in this calculation than a 1-credit seminar,
          because credit hours represent how much of your total workload that course made up. That's what makes
          CGPA a weighted average rather than a simple one. For more on how raw scores map to percentages before
          any scaling happens, see our{" "}
          <Link href="/percentage-formula-explained" className="text-cyan-400 hover:underline">
            Percentage Formula guide
          </Link>
          .
        </p>
      </div>

      {/* Why CGPA Matters */}
      <div id="why-cgpa-matters" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">02.</span> Why CGPA Matters
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Your CGPA follows you well past a single semester. Here's where it actually gets used:
        </p>
        <ul className="mt-4 space-y-4 text-slate-300 leading-7">
          <li>
            <span className="font-semibold text-white">Graduation requirements.</span> Most degree programs set a
            minimum CGPA you must maintain to stay enrolled and to graduate. Falling below it can trigger academic
            probation even if you're passing every individual course.
          </li>
          <li>
            <span className="font-semibold text-white">Scholarships.</span> Many renewable scholarships check your
            CGPA every year, not just your entry-year GPA. A single weak semester can put ongoing funding at risk.
          </li>
          <li>
            <span className="font-semibold text-white">Master's and PhD applications.</span> Graduate admissions
            committees often use CGPA cutoffs to manage large applicant pools before anyone reads a personal
            statement. A cumulative average just under the cutoff can mean an automatic rejection.
          </li>
          <li>
            <span className="font-semibold text-white">Job applications.</span> Some employers, especially in
            competitive fields like consulting and finance, screen resumes by CGPA before a human recruiter ever
            sees them. Knowing your exact number helps you decide where it's worth applying.
          </li>
          <li>
            <span className="font-semibold text-white">Visa and immigration processes.</span> Some study or work
            visa categories, and certain immigration point systems, ask for a minimum academic standing based on
            your CGPA or its equivalent on a local scale.
          </li>
          <li>
            <span className="font-semibold text-white">University transfers.</span> Transfer admissions almost
            always evaluate your cumulative record rather than just your most recent term, since it's the best
            available signal of consistent performance.
          </li>
        </ul>
      </div>

      {/* GPA vs CGPA */}
      <div id="gpa-vs-cgpa" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">03.</span> GPA vs CGPA: What's the Difference?
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          Side by side, the difference is easier to see:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left"> </th>
                <th className="px-5 py-3.5 text-left">GPA</th>
                <th className="px-5 py-3.5 text-left">CGPA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {gpaVsCgpa.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-semibold text-white">{row.metric}</td>
                  <td className="px-5 py-3.5">{row.gpa}</td>
                  <td className="px-5 py-3.5">{row.cgpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 leading-7 text-slate-300">
          Not sure how to calculate your semester GPA first? Read our complete{" "}
          <Link href="/gpa-calculator" className="text-cyan-400 hover:underline">
            How to Calculate GPA
          </Link>{" "}
          guide before calculating your CGPA.
        </p>
      </div>

      {/* CGPA Formula */}
      <div id="cgpa-formula" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">04.</span> CGPA Formula
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The formula only has two moving parts: how much each semester counts (credit hours), and how well you
          did (GPA).
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center shadow-inner">
          <p className="text-xl sm:text-2xl font-black text-cyan-400 tracking-wide">
            CGPA = Total Quality Points ÷ Total Credit Hours
          </p>
          <p className="mt-2 text-xs text-slate-400 font-mono">
            Where Quality Points (per semester) = Semester GPA × Semester Credit Hours
          </p>
        </div>
        <p className="mt-6 leading-7 text-slate-300">
          If you don't want to run this by hand every semester, our free{" "}
          <Link href="/cgpa-calculator" className="text-cyan-400 hover:underline">
            CGPA Calculator
          </Link>{" "}
          does it for you instantly.
        </p>
        <p className="mt-3 leading-7 text-slate-300">
          If you already have your semester GPAs, our{" "}
          <Link href="/cgpa-calculator" className="text-cyan-400 hover:underline">
            CGPA Calculator
          </Link>{" "}
          can calculate your cumulative GPA instantly.
        </p>
      </div>

      {/* How to Calculate CGPA */}
      <div id="how-to-calculate" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">05.</span> How to Calculate CGPA: Step-by-Step
        </h2>

        <div className="mt-8 space-y-4">
          {cgpaSteps.map((item) => (
            <div key={item.step} className="flex gap-4 rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 font-mono text-sm font-bold text-cyan-400 border border-cyan-500/20">
                {item.step}
              </span>
              <div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400 leading-6">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Example 1: 4 semesters */}
        <h3 className="mt-10 text-lg font-bold text-white">Example 1: A Student With 4 Semesters</h3>
        <p className="mt-3 leading-7 text-slate-300">
          Say a student has completed four semesters with different course loads and grades:
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
              {fourSemesterExample.map((s) => (
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
          <p>Total quality points: {fourSemTotalPoints.toFixed(2)}</p>
          <p>Total credit hours: {fourSemTotalCredits}</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            CGPA = {fourSemTotalPoints.toFixed(2)} ÷ {fourSemTotalCredits} = {fourSemCgpa}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            A simple average of the four GPAs would give (3.80 + 3.10 + 3.50 + 3.60) ÷ 4 = 3.50 — noticeably
            different from the correct weighted CGPA of {fourSemCgpa}. The heavier second semester pulls the
            real number down.
          </p>
        </div>

        {/* Example 2: 8 semesters */}
        <h3 className="mt-10 text-lg font-bold text-white">Example 2: A Full 8-Semester Degree</h3>
        <p className="mt-3 leading-7 text-slate-300">
          The same formula works no matter how many semesters you're tracking. Here's a full four-year, 8-semester
          record:
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
              {eightSemesterExample.map((s) => (
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
          <p>Total quality points: {eightSemTotalPoints.toFixed(2)}</p>
          <p>Total credit hours: {eightSemTotalCredits}</p>
          <p className="mt-2 font-mono font-bold text-cyan-400">
            CGPA = {eightSemTotalPoints.toFixed(2)} ÷ {eightSemTotalCredits} = {eightSemCgpa}
          </p>
          <p className="mt-2 text-xs text-slate-500">
            Notice that no single semester swings the final number much — with eight semesters of credits in the
            denominator, the total is far more stable than it was after just one or two terms.
          </p>
        </div>
      </div>

      {/* Scale Table */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">06.</span> CGPA Scale Comparison Chart
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          If your school reports CGPA on a 10.0 scale or as a percentage, here's roughly how the scales line up:
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">4.0 Scale</th>
                <th className="px-5 py-3.5 text-left">10.0 Scale</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
                <th className="px-5 py-3.5 text-left">Standing</th>
                <th className="px-5 py-3.5 text-left">Latin Honors</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {cgpaScaleMatrix.map((row, idx) => (
                <tr key={idx}>
                  <td className="px-5 py-3.5 font-mono font-bold text-white">{row.scale4}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-200">{row.scale10}</td>
                  <td className="px-5 py-3.5 font-mono text-slate-400">{row.percentage}</td>
                  <td className="px-5 py-3.5 font-semibold text-slate-200">{row.standing}</td>
                  <td className="px-5 py-3.5 text-slate-400 italic">{row.honors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          These conversions are approximate. Different institutions and credential evaluators use slightly
          different scaling methods, so always confirm against your school's official conversion table.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          Need to convert marks before calculating your CGPA? Check our{" "}
          <Link href="/percentage-formula-explained" className="text-cyan-400 hover:underline">
            Percentage Calculator
          </Link>
          .
        </p>
      </div>

      {/* International Variations */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">07.</span> How CGPA Calculation Varies by Country
        </h2>
        <p className="mt-4 leading-7 text-slate-300">
          The core formula — quality points divided by credit hours — stays the same everywhere. What changes
          from country to country is the scale itself.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          US and Canadian universities typically use a 4.0 scale, with some high schools extending to 5.0 for
          weighted honors and AP courses. Many universities in India, and several across South Asia, use a 10.0
          scale instead, where a CGPA of 8.5 might be roughly equivalent to a 3.7 on the 4.0 scale. The UK doesn't
          use CGPA at all — degree classifications like "First Class" or "Upper Second" are based on a percentage
          system instead.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          If you're applying abroad, check whether the receiving institution wants your raw CGPA, a converted
          4.0-scale equivalent, or an official evaluation from a credential assessment service. Don't assume your
          number translates automatically — always confirm the expected format before you submit an application.
        </p>
      </div>

      {/* Common Mistakes */}
      <div id="common-mistakes" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">08.</span> Common Mistakes
        </h2>
        <div className="mt-6 space-y-4">
          {mistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/60">
              <h3 className="text-base font-bold text-white">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-400 leading-6">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Improve */}
      <div id="improve-cgpa" className="mt-12 scroll-mt-20">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span className="text-cyan-400 font-mono">09.</span> How to Improve Your CGPA
        </h2>
        <div className="mt-6 space-y-4">
          {improveTips.map((t, idx) => (
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
          Straight answers to the questions students search for most.
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
        <h2 className="text-2xl font-bold text-white mb-4">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate one semester's GPA in seconds.</p>
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
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="mt-12 rounded-xl border border-slate-800 bg-slate-950/40 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Key Takeaways</h2>
        <ul className="space-y-2 text-slate-300 leading-7 list-disc list-inside">
          <li>CGPA measures your overall academic performance.</li>
          <li>CGPA is a weighted average based on credit hours.</li>
          <li>Never average semester GPAs directly.</li>
          <li>Calculate your CGPA after every semester.</li>
          <li>Use a CGPA Calculator to avoid manual errors.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white mb-3">Final Thoughts</h2>
        <p className="leading-7 text-slate-300">
          CGPA looks intimidating until you break it down: multiply, add, divide. Once you understand that credit
          hours are what make it a weighted average rather than a simple one, checking your own transcript for
          errors — or running a "what-if" before your next semester — becomes a five-minute task instead of a
          guessing game.
        </p>
        <p className="mt-4 leading-7 text-slate-300">
          The most useful habit is recalculating after every semester, not just once a year. It takes a few
          minutes, catches errors early, and gives you a realistic picture of where you stand before scholarship
          deadlines, transfer applications, or job screenings come around.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Ready to Calculate Your CGPA?</h3>
          <p className="text-sm text-slate-400 mt-1">
            Skip the manual math — enter your semester GPAs and credit hours and get your result instantly.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
          <Link href="/cgpa-calculator" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
            Open CGPA Calculator
          </Link>
          <Link href="/attendance-percentage-formula" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
            Check Attendance Targets
          </Link>
        </div>
      </div>
    </article>
  );
}