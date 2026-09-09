import Link from "next/link";

const faqs = [
  {
    q: "Is this the same as calculating my GPA?",
    a: "Not quite. A real GPA is credit-weighted — a 4-credit course counts more than a 1-credit lab. This tool treats every grade as equally important, which is only accurate if every course really does carry the same weight. If your courses have different credit hours, use the GPA Calculator instead for a number that will match your transcript.",
  },
  {
    q: "Why would I want an unweighted grade average instead of a real GPA?",
    a: "It's useful for quick, informal checks — averaging a handful of assignment grades in one class, sanity-checking a report card before your school posts an official GPA, or comparing a small set of grades where credit hours genuinely don't apply (like weekly quiz grades in a single course).",
  },
  {
    q: "Does the order I enter grades in matter?",
    a: "No. A plain average is commutative — A, B, A gives the same result as B, A, A. Only the grades themselves and how many you enter affect the outcome, not the order.",
  },
  {
    q: "What GPA scale do the letter grades use?",
    a: "The same standard US 4.0 scale used across StudyCalc: A = 4.0, A- = 3.7, B+ = 3.3, B = 3.0, B- = 2.7, C+ = 2.3, C = 2.0, C- = 1.7, D = 1.0, F = 0.0.",
  },
  {
    q: "Can I average more than a few grades?",
    a: "Yes — add as many rows as you need. There's no fixed limit, though for a full semester's worth of courses with real credit hours, the GPA Calculator will give you a more meaningful number.",
  },
  {
    q: "Why does averaging A and C give a B and not something else?",
    a: "A = 4.0 and C = 2.0. Averaged: (4.0 + 2.0) / 2 = 3.0, which lands exactly on B (3.0) in the standard scale. Averages don't always land on a clean letter boundary — when they fall between two letters, the calculator rounds down to the letter whose GPA threshold the average has reached or passed.",
  },
  {
    q: "Is a B+ worth more than a B in this calculator?",
    a: "Yes — B+ converts to 3.3 and B converts to 3.0 before averaging, so a B+ pulls your average slightly higher than a plain B would.",
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

export default function LetterGradeAverageGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What This Calculator Does</h2>
        <p className="mt-4 leading-7">
          This tool answers one specific question: if you have a handful of letter grades and want to
          know their plain average — no credit hours, no weighting, just the grades themselves — what
          letter and GPA value does that average land on? You pick each grade from a dropdown (A through
          F, including the standard +/- variants), and the calculator converts each one to its GPA point
          value, averages those numbers directly, and converts the result back into the nearest letter
          grade using the same US 4.0 scale used across StudyCalc.
        </p>
        <p className="mt-4 leading-7">
          It&apos;s deliberately the simplest calculator in this family. There&apos;s no assumption that any grade
          matters more than another, and no requirement to know or enter credit hours for anything.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From Other Calculators</h2>
        <p className="mt-4 leading-7">
          It&apos;s easy to confuse this tool with two others on StudyCalc that also produce an &quot;average&quot;
          grade, so it&apos;s worth being explicit about what makes each one different:
        </p>
        <ul className="mt-4 space-y-3 list-disc pl-6">
          <li>
            <Link href="/gpa-calculator" className="text-cyan-400 hover:underline">GPA Calculator</Link>{" "}
            requires credit hours for every course, because a real semester GPA is a credit-weighted
            average — a 4-credit class should count more than a 1-credit lab. This tool has no concept of
            credit hours at all; every grade you enter counts exactly the same.
          </li>
          <li>
            <Link href="/weighted-average-calculator" className="text-cyan-400 hover:underline">Weighted Average Calculator</Link>{" "}
            requires an explicit weight (any number, not just credit hours) for every item, and works
            with raw numeric scores rather than letter grades. This tool has no weights at all and works
            directly with the letters you already have.
          </li>
        </ul>
        <p className="mt-4 leading-7">
          In short: no weights and no credit hours here — just a plain average of the letters you enter.
          If either of those factors matters for what you&apos;re calculating, one of the other two tools will
          give you a more accurate answer.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Average = Σ(GPA value of each letter grade) ÷ number of grades
          </p>
        </div>
        <p className="mt-4 leading-7">
          Each letter is first converted to its standard GPA point value, then those numbers are added
          together and divided by how many grades you entered — an ordinary arithmetic mean, just on
          converted letter grades instead of raw numbers.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Simple Set</h2>
        <p className="mt-4 leading-7">
          Four grades: A, B+, A-, B. Converted to GPA points: 4.0, 3.3, 3.7, 3.0.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          (4.0 + 3.3 + 3.7 + 3.0) ÷ 4 = 14.0 ÷ 4 = 3.5
        </div>
        <p className="mt-4 leading-7">
          A 3.5 average GPA falls in the A- band (3.70) once rounded up, but since 3.5 sits between B+
          (3.3) and A- (3.7), the calculator reports the band whose threshold it has reached — here,
          that&apos;s B+ (3.3), since 3.5 hasn&apos;t reached the 3.7 needed for A-.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Wider Spread</h2>
        <p className="mt-4 leading-7">
          Five grades: A, A, C, D, B. Converted: 4.0, 4.0, 2.0, 1.0, 3.0.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          (4.0 + 4.0 + 2.0 + 1.0 + 3.0) ÷ 5 = 14.0 ÷ 5 = 2.8
        </div>
        <p className="mt-4 leading-7">
          A 2.8 average lands in the B- band (2.70), even though two of the five grades were a perfect A.
          This is exactly the effect an unweighted plain average produces — a single D or C can pull the
          average down more than a few strong grades can pull it back up, since every grade counts
          equally regardless of how many you have.
        </p>
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
        <h2 className="text-2xl font-bold text-white">Related Tools & Articles</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">The real, credit-weighted version of your GPA.</p>
          </Link>
          <Link href="/weighted-average-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Weighted Average Calculator</span>
            <p className="mt-1 text-sm text-slate-400">For scores and weights instead of plain letter grades.</p>
          </Link>
          <Link href="/letter-grade-to-percent-guide" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Letter Grade to Percent Guide</span>
            <p className="mt-1 text-sm text-slate-400">Understand how each letter maps to a percentage range.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
