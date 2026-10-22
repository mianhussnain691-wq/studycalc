import Link from "next/link";

const faqs = [
  {
    q: "How long does 78 credit hours take?",
    a: "At the common US convention of about 15-16 credits per semester for a full-time student, 78 credit hours would take roughly 5 semesters (about 2.5 years) to complete, assuming no summer terms and no overloaded semesters. If those are ECTS credits instead of US credits, 78 ECTS is roughly 1.3 years at the standard 60-ECTS-per-year pace — check which credit system you're actually working in first.",
  },
  {
    q: "How do I convert a 75-hour course to credits?",
    a: "If 75 hours is the total workload (as in the ECTS system), that's about 2.5-3 ECTS credits at 25-30 hours per credit. If 75 hours means weekly contact hours across a semester instead, that's a different calculation — use the Credit Hour Estimator for the US weekly-hours-to-credit-hours convention specifically.",
  },
  {
    q: "What does \"one credit = 35 hours per year\" mean?",
    a: "This describes a specific institution's own credit-hour policy, not a universal standard — some schools and national credit frameworks define their own total annual workload per credit, which can differ from both the ECTS guide's 25-30 hours/credit and the US semester-based convention. Always use the specific number your own institution publishes rather than assuming one of the common conventions applies.",
  },
  {
    q: "What does \"current credit load\" mean?",
    a: "Your current credit load is simply the total number of credit hours you're registered for in the current term — see the Semester Credit Load Checker to find out whether that load counts as part-time, full-time, or an overload at the common US thresholds.",
  },
  {
    q: "Is 2 ECTS always equal to 1 US credit?",
    a: "No — there's no single official ratio. 2:1 is a widely-used rule of thumb, but some institutions use 1.5:1, and a workload-hours-based calculation (comparing the ECTS guide's 25-30 hours/credit to the US semester convention of about 45 hours/credit) lands closer to 1.5-1.8:1. The receiving institution's own published credit-transfer policy is the only figure that's actually binding for your transcript.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.studycalc.co" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://www.studycalc.co/calculators" },
    { "@type": "ListItem", position: 3, name: "Credit Converter", item: "https://www.studycalc.co/credit-converter" },
  ],
};

export default function CreditConverterGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why There's No Single ECTS↔US Conversion</h2>
        <p className="mt-4 leading-7">
          The two systems measure different things. The European Commission's ECTS Users&apos; Guide (2015)
          defines ECTS as a <strong>total workload</strong> measure — 1 credit represents 25-30 hours of all
          student work combined (lectures, labs, reading, assignments, exams), with 60 ECTS covering a full
          academic year. The US credit hour traces back to <strong>contact hours</strong> instead — the
          Carnegie-unit convention this site&apos;s{" "}
          <Link href="/credit-hour-estimator" className="text-cyan-400 hover:underline">
            Credit Hour Estimator
          </Link>{" "}
          uses: roughly 1 hour of class plus 2 hours of outside work, per week, per credit.
        </p>
        <p className="mt-4 leading-7">
          Because they're built on different foundations, there's no exact exchange rate — only estimates.
          A commonly-used rule of thumb treats 2 ECTS as roughly equal to 1 US credit, but it&apos;s just that: a
          rule of thumb, not an official mandate. This page shows that quick estimate alongside a
          workload-hours-based calculation so you can see both and why they don&apos;t match exactly.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example</h2>
        <p className="mt-4 leading-7">
          A student has 30 ECTS credits from one semester abroad and wants a rough US-credit equivalent:
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          Rule of thumb: 30 ÷ 2 = 15 US credits
          <br />
          Workload-based: 30 × 25-30 hrs = 750-900 total hours ÷ 45 hrs/US credit ≈ 16.7-20 US credits
        </div>
        <p className="mt-4 leading-7">
          Both are reasonable estimates — the gap between 15 and ~17-20 is exactly why the receiving
          institution&apos;s own transfer-credit policy, not a generic calculator, is the number that actually
          counts on a transcript.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Pakistan-Style Credit Notation, Explained</h2>
        <p className="mt-4 leading-7">
          Many Pakistani university course outlines use a <strong>Total(Theory+Lab)</strong> notation — for
          example, 3(3+0) or 3(2+1). The number outside the brackets is the total credit hours for the
          course; inside the brackets, the first digit is theory credit hours and the second is lab or
          practical credit hours. A course listed as 3(3+0) is three theory credits with no lab component,
          while 3(2+1) splits those same three credits into two theory and one lab. Exact course codes and
          values are set by each university&apos;s own scheme of studies — this is a widely-documented
          convention, not a single HEC-mandated table.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p className="mt-2 text-slate-400 leading-6">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Related Calculators &amp; Guides</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/credit-hour-estimator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Credit Hour Estimator</span>
            <p className="mt-1 text-sm text-slate-400">Weekly class hours to US credit hours.</p>
          </Link>
          <Link href="/semester-credit-load-checker" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Semester Credit Load Checker</span>
            <p className="mt-1 text-sm text-slate-400">Is your total credit load full-time, part-time, or overload?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
