import Link from "next/link";
import SourcesBlock from "@/components/SourcesBlock";

const faqs = [
  {
    q: "Why is 1100 used as the total for Pakistani Matric and Intermediate results?",
    a: "1100 is the traditional aggregate Pakistani boards use for both Matriculation/SSC (grades 9-10) and Intermediate/HSSC — FSc, ICS, FA, ICom (grades 11-12). Each level is split into Part I and Part II, and the two parts' marks are added together into that single 1100 total.",
  },
  {
    q: "Is 1100 the same for every Pakistani board?",
    a: "It's the standard convention under what boards call the \"old course,\" and it's the denominator Pakistani universities' own admission formulas use when converting results onto one scale. Some boards have introduced a newer 1200-mark scheme for recently revised curricula — check your own result card, and if it shows 1200 instead of 1100, use our general Percentage Calculator and enter 1200 as the total.",
  },
  {
    q: "What do \"Part I\" and \"Part II\" mean in the 1100 total?",
    a: "Matric and Intermediate in Pakistan are each two-year programs (grades 9-10 or 11-12), examined separately as Part I (first year) and Part II (second year). Neither part is graded out of 1100 on its own — it's the sum of both parts' marks that's evaluated against 1100.",
  },
  {
    q: "How is this different from the Pakistan CGPA to percentage conversion?",
    a: "This page converts raw board-exam marks (out of 1100) into a percentage — no CGPA involved. Our Pakistan CGPA Converter is a separate tool for university-level CGPA (0-4.0 scale) that uses HEC's roughly ×25 convention instead. Use this page for Matric/Intermediate marks, and the CGPA converter for university results.",
  },
  {
    q: "What percentage counts as an A or A+ on the 1100 scale?",
    a: "Using the grade bands this site documents for Pakistani boards: A+ is 80% and above, A is 70-79%, B is 60-69%, C is 50-59%, and D is 40-49%, with 33% as the minimum passing percentage. See our Pakistani Board vs. US GPA guide for the full breakdown and how these bands translate to a US-style GPA.",
  },
  {
    q: "Do O-Level or A-Level results ever get converted onto the 1100 scale?",
    a: "Yes — Pakistani universities commonly convert O-Level and A-Level subject grades into equivalent marks and then scale the total against 1100 so it's comparable to a local Matric/Intermediate aggregate. The conversion table and scaling method are set by each university's admissions office (often following IBCC guidance), so the exact grade-to-marks mapping can vary — check your target university's own equivalence formula.",
  },
  {
    q: "Is 33% really the minimum passing percentage out of 1100?",
    a: "33% (363 out of 1100) is the commonly cited passing threshold for Pakistani board exams, consistent with the per-subject 33% pass mark most boards use. Exact passing rules can still vary slightly by board and by subject (practical components, for instance), so treat 33% as the standard baseline rather than a universal guarantee.",
  },
  {
    q: "Can I use this calculator for a single subject's marks instead of the full 1100 aggregate?",
    a: "This page is built around the 1100 total specifically. For any other total — a single subject, a different aggregate, or a non-Pakistani exam — use our general Percentage Calculator, where you can enter any marks and any total.",
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
    { "@type": "ListItem", position: 3, name: "Marks Out of 1100 to Percentage", item: "https://www.studycalc.co/marks-out-of-1100-percentage" },
  ],
};

const rows = [
  { marks: 363, pct: 33, grade: "Pass (minimum)" },
  { marks: 440, pct: 40, grade: "D" },
  { marks: 495, pct: 45, grade: "D" },
  { marks: 550, pct: 50, grade: "C" },
  { marks: 605, pct: 55, grade: "C" },
  { marks: 660, pct: 60, grade: "B" },
  { marks: 715, pct: 65, grade: "B" },
  { marks: 770, pct: 70, grade: "A" },
  { marks: 825, pct: 75, grade: "A" },
  { marks: 880, pct: 80, grade: "A+" },
  { marks: 935, pct: 85, grade: "A+" },
  { marks: 990, pct: 90, grade: "A+" },
  { marks: 1045, pct: 95, grade: "A+" },
  { marks: 1100, pct: 100, grade: "A+" },
];

export default function MarksOutOf1100Guide() {
  return (
    <div className="mt-16 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why 1100 Specifically?</h2>
        <p className="mt-4 leading-7">
          1100 is the traditional total marks Pakistani education boards use for both Matriculation/SSC
          (grades 9-10) and Intermediate/HSSC — FSc, ICS, FA, ICom (grades 11-12). Each level runs across two
          years, examined as Part I and Part II, and it&apos;s the sum of both parts that&apos;s measured against
          1100. Pakistani universities also use 1100 as the scale they convert O-Level, A-Level, and other
          foreign-board results onto, so they&apos;re comparable to a local aggregate — official university
          admission formulas confirm this convention directly (see Sources below).
        </p>
        <p className="mt-4 leading-7">
          Some boards have introduced a newer 1200-mark scheme for recently revised curricula. If your own
          result card shows 1200 as the total instead of 1100, this page&apos;s fixed-total calculator won&apos;t
          apply — use our general{" "}
          <Link href="/percentage-calculator" className="text-cyan-400 hover:underline">
            Percentage Calculator
          </Link>{" "}
          and enter 1200 as the total there.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Percentage = (Marks Obtained ÷ 1100) × 100
          </p>
        </div>
        <SourcesBlock
          formula="Percentage = (Marks Obtained ÷ 1100) × 100"
          note="1100 as the Matric/Intermediate total, and as the scale used to convert foreign qualifications, is confirmed in official Pakistani university admission-merit formulas (e.g. University of Health Sciences' aggregate-percentage calculation, which expresses SSC, HSSC, and entrance-test scores each against a 1100 denominator)."
          guideHref="/pakistani-board-vs-us-gpa"
          guideLabel="See the full Pakistani board grading breakdown and US GPA equivalence"
        />
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Marks Out of 1100 to Percentage &amp; Grade</h2>
        <p className="mt-4 leading-7">
          Grade bands follow the convention this site documents for Pakistani boards: A+ for 80% and above,
          A for 70-79%, B for 60-69%, C for 50-59%, D for 40-49%, and 33% as the minimum passing percentage.
        </p>
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
              <tr>
                <th className="px-5 py-3.5 text-left">Marks (out of 1100)</th>
                <th className="px-5 py-3.5 text-left">Percentage</th>
                <th className="px-5 py-3.5 text-left">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800 text-slate-300">
              {rows.map((r) => (
                <tr key={r.marks} className="hover:bg-slate-900/20 transition-colors">
                  <td className="px-5 py-3.5 font-bold text-white">{r.marks}</td>
                  <td className="px-5 py-3.5 text-cyan-400 font-semibold">{r.pct}%</td>
                  <td className="px-5 py-3.5 text-slate-400">{r.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Examples</h2>

        <div className="mt-6">
          <h3 className="text-lg font-bold text-white">Example 1: Matric (SSC) Result</h3>
          <p className="mt-2 leading-7">
            A student scores 869 marks out of 1100 across Part I and Part II combined.
          </p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            869 ÷ 1100 × 100 = 79%
          </div>
          <p className="mt-2 leading-7 text-sm text-slate-400">79% falls in the A band (70-79%).</p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 2: A Borderline Intermediate Result</h3>
          <p className="mt-2 leading-7">
            A different student&apos;s combined Part I and Part II score is 594 out of 1100.
          </p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            594 ÷ 1100 × 100 = 54%
          </div>
          <p className="mt-2 leading-7 text-sm text-slate-400">
            54% is a clear pass, sitting in the C band (50-59%) — comfortably above the 33% minimum but below
            the 60%+ needed for a B.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold text-white">Example 3: Checking a Near-Fail Result</h3>
          <p className="mt-2 leading-7">
            A student is worried their result is close to failing, with 352 marks out of 1100.
          </p>
          <div className="mt-3 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
            352 ÷ 1100 × 100 = 32%
          </div>
          <p className="mt-2 leading-7 text-sm text-slate-400">
            32% falls just under the commonly cited 33% passing threshold (363 marks) — a reminder that the
            overall percentage can still hide a fail if a specific subject&apos;s own minimum wasn&apos;t met, so
            always check the subject-wise breakdown on the actual result card, not just the aggregate.
          </p>
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
          <Link href="/pakistani-board-vs-us-gpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Pakistani Board vs. US GPA</span>
            <p className="mt-1 text-sm text-slate-400">The full grading-band breakdown and US GPA equivalence.</p>
          </Link>
          <Link href="/pakistan-cgpa-converter" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Pakistan CGPA Converter</span>
            <p className="mt-1 text-sm text-slate-400">For university CGPA (0-4.0), not board exam marks.</p>
          </Link>
          <Link href="/marks-to-grade-conversion" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Marks to Grade Conversion</span>
            <p className="mt-1 text-sm text-slate-400">How marks map to letter grades across different systems.</p>
          </Link>
          <Link href="/percentage-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Any marks, any total — not fixed to 1100.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
