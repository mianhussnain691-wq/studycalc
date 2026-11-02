import Link from "next/link";
import SourcesBlock from "@/components/SourcesBlock";

const faqs = [
  {
    q: "Why is 500 such a common exam total?",
    a: "500 usually comes from five subjects marked out of 100 each — a structure several Class 10-level board exams are built around, with each subject typically split between a written paper and an internal or practical component. Other institutions just use 500 as a round total for a cumulative assessment or semester. We can't point to one verified official source confirming which specific board uses exactly this structure in the current academic year, so treat this as a common pattern, not a named board's official policy — check your own marking scheme to confirm.",
  },
  {
    q: "I took an extra subject — is my percentage still calculated out of 500?",
    a: "Often yes, but not always. Some boards that allow a sixth or additional subject still calculate the official percentage from your best five scores out of 500, even though the extra subject's marks appear on the result card. Others fold the extra subject straight into the total, pushing it to 600. This detail genuinely varies by board and by year — check your own board's current rule, and if your total is actually 600, use our dedicated Marks Out of 600 page instead.",
  },
  {
    q: "What's the difference between this and the general Percentage Calculator?",
    a: "This page is fixed to a 500 total so you only need to enter one number — your marks obtained. The general Percentage Calculator asks for both the part and the total, so use that instead if your exam isn't out of 500.",
  },
  {
    q: "What if my exam's total is close to 500 but not exact — like 475 or 525?",
    a: "Use the general Percentage Calculator and enter your exact total. This page's fixed-500 calculator gives a correct answer only when your actual total really is 500.",
  },
  {
    q: "How do I know what grade or division my percentage corresponds to?",
    a: "Grade and division cutoffs (distinction, first division, pass marks, letter grades) are set by each board individually and change over time, so we don't state a single universal cutoff here. Check your own board's official grading notification, or see our Marks to Grade Conversion guide for how different systems typically label percentage bands.",
  },
  {
    q: "Does this work for a semester score or cumulative total out of 500, not just a board exam?",
    a: "Yes — the math is the same regardless of what the 500 represents. Enter whatever marks you scored out of a 500-point total and you'll get the correct percentage.",
  },
  {
    q: "Can this calculator handle decimal marks, like 437.5 out of 500?",
    a: "Yes, enter the decimal value directly and it will calculate the exact percentage.",
  },
];

const faqJsonLd = {
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
    { "@type": "ListItem", position: 3, name: "Marks Out of 500 to Percentage", item: "https://www.studycalc.co/marks-out-of-500-percentage" },
  ],
};

const rows = [25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300, 325, 350, 375, 400, 425, 450, 475, 500];

export default function MarksOutOf500Guide() {
  return (
    <div className="mt-16 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why 500 Specifically?</h2>
        <p className="mt-4 leading-7">
          500 is a common total because it usually represents five subjects marked out of 100 each — a
          structure several Class 10-level board exams are built around, where each subject typically splits
          into a written paper and an internal or practical component. It also shows up as a round total for
          semester scores, cumulative assessments, or standardized tests that aren&apos;t tied to any particular
          board at all. We&apos;re deliberately not naming a specific board here — we couldn&apos;t verify the exact
          current-year figure directly from an official source, so this page covers the generic 500-total
          math rather than claiming one board&apos;s policy.
        </p>
        <p className="mt-4 leading-7">
          One wrinkle worth knowing: some boards let students sit an additional, sixth subject. Depending on
          the board and the year, that extra subject either stays separate from the official percentage
          (still calculated from the best five scores out of 500) or gets folded into a 600 total. This
          detail genuinely varies — check your own board&apos;s current marking scheme, and if your result is
          actually out of 600, use our{" "}
          <Link href="/marks-out-of-600-percentage" className="text-cyan-400 hover:underline">
            Marks Out of 600 to Percentage
          </Link>{" "}
          page instead.
        </p>
        <SourcesBlock
          formula="Percentage = (Marks Obtained ÷ 500) × 100"
          note="The five-subjects-of-100 structure behind a 500 total is a common pattern, but we could not verify one specific board's current total from an official primary source, so no board name is cited here — always confirm against your own board's current scheme of studies before relying on a specific number."
          guideHref="/marks-to-grade-conversion"
          guideLabel="See how marks map to grades across different systems"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Marks Out of 500 to Percentage</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Marks (out of 500)</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {rows.map((m) => (
                <tr key={m} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{m}</td>
                  <td className="px-5 py-3.5 text-cyan-400 font-semibold">{((m / 500) * 100).toFixed(0)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Examples</h2>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-white">Example 1: A Strong Result</h3>
          <p className="mt-2 leading-7">A student scores 438 out of 500 across their five subjects.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            438 ÷ 500 × 100 = 87.6%
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 2: Checking a Sixth-Subject Result</h3>
          <p className="mt-2 leading-7">
            A student took six subjects. Their best five scores (excluding the lowest) add up to 412 out of
            500 — this is the figure their board uses for the official percentage, even though a sixth
            subject's marks appear separately on the result card.
          </p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            412 ÷ 500 × 100 = 82.4%
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 3: A Mid-Range Score</h3>
          <p className="mt-2 leading-7">A semester total of 500 points, with 316 earned.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            316 ÷ 500 × 100 = 63.2%
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p className="mt-2 text-slate-400 leading-6">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Related Tools &amp; Guides</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/percentage-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Any marks, any total — not fixed to 500.</p>
          </Link>
          <Link href="/marks-out-of-600-percentage" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Marks Out of 600 to Percentage</span>
            <p className="mt-1 text-sm text-slate-400">For results that include a sixth subject.</p>
          </Link>
          <Link href="/marks-to-grade-conversion" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Marks to Grade Conversion</span>
            <p className="mt-1 text-sm text-slate-400">How percentage bands map to letter grades.</p>
          </Link>
          <Link href="/percentage-formula-explained" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Formula Explained</span>
            <p className="mt-1 text-sm text-slate-400">The full breakdown of how percentage math works.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
