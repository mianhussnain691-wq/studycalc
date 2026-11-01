import Link from "next/link";
import SourcesBlock from "@/components/SourcesBlock";

const faqs = [
  {
    q: "Where does a 400-mark total usually come from?",
    a: "Most often, four subjects or papers marked out of 100 each. It's a common structure for university semester exams, some school-level assessments, and professional certification tests with four sections. Unlike 500 or 600, there isn't one dominant national board convention behind 400 specifically — it's more of a generic, round total that shows up across many different kinds of assessments.",
  },
  {
    q: "Is there a specific board that officially uses 400 as its total?",
    a: "Not one we can point to as a single, verified convention the way 1100 ties to Pakistani Matric/Intermediate results. If your exam is out of 400, that total is set by your specific institution, course, or exam body — check your own syllabus or result documentation for confirmation, since we don't want to state a board-specific claim we can't verify.",
  },
  {
    q: "What's the difference between this and the general Percentage Calculator?",
    a: "This page is fixed to a 400 total, so you only enter your marks obtained. The general Percentage Calculator asks for both the part and the total — use that one if your exam isn't out of 400.",
  },
  {
    q: "How do I know what grade or division my percentage corresponds to?",
    a: "Grade cutoffs are set independently by each institution and vary widely, so we don't state a single universal cutoff on this page. Check your own institution's grading policy, or see our Marks to Grade Conversion guide for how different systems typically label percentage bands.",
  },
  {
    q: "Can I use this for a university semester total that happens to be 400 points?",
    a: "Yes — the calculation (marks obtained divided by 400, times 100) works the same whether the 400 is a school exam, a university semester total, or a certification exam.",
  },
  {
    q: "What if my actual total is 350 or 450, not exactly 400?",
    a: "Use the general Percentage Calculator and enter your exact total instead. This page's fixed-400 calculator only gives a correct answer when your real total is 400.",
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
    { "@type": "ListItem", position: 3, name: "Marks Out of 400 to Percentage", item: "https://www.studycalc.co/marks-out-of-400-percentage" },
  ],
};

const rows = [20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300, 320, 340, 360, 380, 400];

export default function MarksOutOf400Guide() {
  return (
    <div className="mt-16 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why 400 Specifically?</h2>
        <p className="mt-4 leading-7">
          400 most commonly comes from four subjects or papers marked out of 100 each — a structure that
          shows up in university semester exams, some school-level assessments, and certification tests with
          four sections. Unlike 500, 600, or 1100, there isn&apos;t a single dominant board or national
          convention we can point to behind 400 specifically — it&apos;s a generic, round total that different
          institutions arrive at independently.
        </p>
        <p className="mt-4 leading-7">
          Because of that, we&apos;re not asserting a specific board policy on this page. If you want to confirm
          where your own exam&apos;s 400-mark total comes from, check your institution&apos;s syllabus or
          examination documentation directly.
        </p>
        <SourcesBlock
          formula="Percentage = (Marks Obtained ÷ 400) × 100"
          note="400 is a generic exam total used by many different institutions independently, not a single verified board standard — this page provides the conversion math only; check your own institution's documentation for grading policy."
          guideHref="/marks-to-grade-conversion"
          guideLabel="See how marks map to grades across different systems"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Marks Out of 400 to Percentage</h2>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Marks (out of 400)</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {rows.map((m) => (
                <tr key={m} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{m}</td>
                  <td className="px-5 py-3.5 text-cyan-400 font-semibold">{((m / 400) * 100).toFixed(0)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Examples</h2>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-white">Example 1: Four-Subject Exam</h3>
          <p className="mt-2 leading-7">A student's four subjects, each out of 100, add up to 334 out of 400.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            334 ÷ 400 × 100 = 83.5%
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 2: A University Semester Total</h3>
          <p className="mt-2 leading-7">A semester's combined coursework and exams total 400 points; a student earns 286.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            286 ÷ 400 × 100 = 71.5%
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 3: A Lower Score</h3>
          <p className="mt-2 leading-7">A student scores 158 out of 400 and wants to see the exact percentage.</p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            158 ÷ 400 × 100 = 39.5%
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
            <p className="mt-1 text-sm text-slate-400">Any marks, any total — not fixed to 400.</p>
          </Link>
          <Link href="/marks-out-of-500-percentage" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Marks Out of 500 to Percentage</span>
            <p className="mt-1 text-sm text-slate-400">The five-subject equivalent of this page.</p>
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
