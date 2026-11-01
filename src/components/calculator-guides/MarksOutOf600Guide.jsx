import Link from "next/link";
import SourcesBlock from "@/components/SourcesBlock";

const faqs = [
  {
    q: "Why would an exam be out of 600 instead of 500?",
    a: "600 usually shows up when a sixth subject is added to a five-subject, 100-marks-each structure — a common pattern is an additional or skill-based subject that some boards let students sit alongside their five core subjects. Whether that sixth subject actually counts toward your official percentage, or just appears on the result card separately, depends on the board and the year — this page assumes your total genuinely is 600.",
  },
  {
    q: "My result card shows 600, but I've heard the percentage is based on 500 — which is right?",
    a: "Both can be true depending on the board. Some calculate the headline percentage from your best five subjects out of 500 even when a sixth subject's marks are listed and the total on paper reads 600. Others add all six into one 600 total and calculate the percentage directly from that. Check your own board's current rule — if your actual percentage is based on 500, use our Marks Out of 500 page instead.",
  },
  {
    q: "Is 600 ever used for something other than a sixth subject?",
    a: "Yes — 600 is also just a common round total for a cumulative assessment, a set of three 200-mark papers, or a semester aggregate unrelated to any specific board's subject count. The calculator works the same regardless of what the 600 represents.",
  },
  {
    q: "What's the difference between this and the general Percentage Calculator?",
    a: "This page is fixed to a 600 total, so you only enter your marks obtained. The general Percentage Calculator asks for both the part and the total — use that one if your exam isn't out of 600.",
  },
  {
    q: "How do I know what grade or division my percentage corresponds to?",
    a: "Grade and division cutoffs are set independently by each board and change over time, so we don't state a single universal cutoff on this page. Check your board's official grading notification, or see our Marks to Grade Conversion guide for how different systems typically label percentage bands.",
  },
  {
    q: "Can I use this for a score out of 600 that isn't a six-subject board total?",
    a: "Yes. The math — marks obtained divided by 600, times 100 — is identical no matter what the 600 represents.",
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
    { "@type": "ListItem", position: 3, name: "Marks Out of 600 to Percentage", item: "https://www.studycalc.co/marks-out-of-600-percentage" },
  ],
};

const rows = [30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600];

export default function MarksOutOf600Guide() {
  return (
    <div className="mt-16 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why 600 Specifically?</h2>
        <p className="mt-4 leading-7">
          600 most often shows up as a five-subject, 100-marks-each exam plus one additional subject — a
          pattern some boards use when students sit a sixth or skill-based subject alongside their core five.
          It also appears as a plain round total unrelated to any particular board: three 200-mark papers, a
          cumulative assessment, or a semester aggregate.
        </p>
        <p className="mt-4 leading-7">
          One thing worth checking before you rely on this page: not every board that lists 600 on the result
          card actually calculates the official percentage from all 600. Some still use the best five
          subjects out of 500 for the headline percentage, with the sixth subject&apos;s marks shown separately.
          If that&apos;s your situation, use our{" "}
          <Link href="/marks-out-of-500-percentage" className="text-cyan-400 hover:underline">
            Marks Out of 500 to Percentage
          </Link>{" "}
          page instead.
        </p>
        <SourcesBlock
          formula="Percentage = (Marks Obtained ÷ 600) × 100"
          note="Whether a sixth subject is folded into the official percentage or kept separate is set independently by each board and can change year to year — this page assumes your total genuinely is 600; confirm against your own board's current marking scheme if you're unsure."
          guideHref="/marks-to-grade-conversion"
          guideLabel="See how marks map to grades across different systems"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Marks Out of 600 to Percentage</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Marks (out of 600)</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {rows.map((m) => (
                <tr key={m} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{m}</td>
                  <td className="px-5 py-3.5 text-cyan-400 font-semibold">{((m / 600) * 100).toFixed(0)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Examples</h2>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-white">Example 1: A Six-Subject Total</h3>
          <p className="mt-2 leading-7">A student's six subjects, all counted, add up to 522 out of 600.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            522 ÷ 600 × 100 = 87%
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 2: Three 200-Mark Papers</h3>
          <p className="mt-2 leading-7">A different exam structure: three papers worth 200 marks each, totaling 600. A student scores 378.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            378 ÷ 600 × 100 = 63%
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 3: A Lower Score</h3>
          <p className="mt-2 leading-7">A student scores 246 out of 600 and wants to know exactly where that lands.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            246 ÷ 600 × 100 = 41%
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
          <Link href="/marks-out-of-500-percentage" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Marks Out of 500 to Percentage</span>
            <p className="mt-1 text-sm text-slate-400">For results based on five subjects, not six.</p>
          </Link>
          <Link href="/percentage-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Any marks, any total — not fixed to 600.</p>
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
