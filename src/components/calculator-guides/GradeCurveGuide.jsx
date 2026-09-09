import Link from "next/link";

const faqs = [
  {
    q: "Is this the only way professors curve grades?",
    a: "No — this calculator covers the additive (linear) curve, which is the most common method: every student's score shifts by the same fixed amount. Some instructors use other methods instead, like a square-root curve (which helps lower scores more than high ones) or a full bell-curve redistribution (which reassigns letter grades based on class rank rather than adjusting raw scores). This tool doesn't cover those — check with your instructor which method they actually use before assuming this applies.",
  },
  {
    q: "Why is my curved score capped at 100?",
    a: "A curve is meant to adjust the class average upward, not to award more than a perfect score. If the raw math would push a score above 100, the calculator caps it there — some instructors do the same, while others allow \"extra credit\" scores above 100 on individual assignments. Check your syllabus or ask your instructor which convention they follow.",
  },
  {
    q: "Can a curve ever lower my score?",
    a: "Mathematically, yes — if the target average is lower than the actual class average, the \"curve amount\" is negative and every score shifts down. This is unusual and most instructors would never intentionally curve grades downward, but the calculator handles the math correctly either way if you enter numbers that describe that scenario.",
  },
  {
    q: "Does everyone in the class get the same number of points added?",
    a: "Yes, under the additive/linear curve method this calculator uses — the same flat amount is added to every student's score, regardless of what they originally scored. This is different from a square-root curve, where lower scores get boosted more than higher ones.",
  },
  {
    q: "What if my professor already curved the grades — can I check their math with this?",
    a: "Yes, if you know the class average before and after curving. Enter your original score, the pre-curve class average, and the post-curve class average as the \"target,\" and the calculator will show what your curved score should be under the additive method — useful for sanity-checking, though it will only match if your professor actually used this method.",
  },
  {
    q: "Why would a professor curve a test at all?",
    a: "Common reasons include an exam turning out harder than intended, a mistake or ambiguity in a question that affected many students, or wanting the class average to land closer to a target the instructor originally planned for.",
  },
  {
    q: "Does curving change the relative ranking of students in the class?",
    a: "No — under the additive method, every score shifts by the same amount, so the order of students from highest to lowest score stays exactly the same. This is a key difference from a bell-curve redistribution, which can change relative standing since it reassigns letter grades based on rank rather than shifting raw scores uniformly.",
  },
  {
    q: "Should I ask my professor which curve method they use before this matters?",
    a: "If a curve is a realistic possibility for a course (a notoriously hard exam, historically low averages), it's reasonable to ask your instructor directly during office hours or via email once grades are posted. Knowing in advance whether they typically use an additive curve, a square-root curve, or no curve at all saves you from guessing after the fact.",
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

export default function GradeCurveGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How Grade Curving Works (This Method)</h2>
        <p className="mt-4 leading-7">
          This calculator uses the additive (also called linear) curve — the most common curving method
          instructors use. It works by shifting every student&apos;s score by the same flat amount, calculated
          from the difference between the actual class average and a target average the instructor wants
          the class to land on. If the target is higher than the actual average, everyone&apos;s score goes up
          by the same number of points.
        </p>
        <p className="mt-4 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">Scope note:</strong> this is the most common curve type, but
          not the only one. Some instructors use a square-root curve (which raises low scores more than
          high ones) or a full bell-curve grade redistribution instead. This calculator only models the
          additive method — check with your instructor which one actually applies to your class before
          relying on this result.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Curved Score = Your Score + (Target Average − Class Average)
          </p>
        </div>
        <p className="mt-4 leading-7">
          The result is capped at 100 (a curve can&apos;t push you above a perfect score) and floored at 0.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Standard Curve</h2>
        <p className="mt-4 leading-7">
          You scored 68 on an exam. The class average was 70, and your professor wants to curve the
          average up to 80.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          68 + (80 − 70) = 68 + 10 = 78
        </div>
        <p className="mt-4 leading-7">
          Your curved score is 78 — everyone in the class gets the same +10 point boost.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Capped Curve</h2>
        <p className="mt-4 leading-7">
          You scored 95. The class average was 70, and the professor curves the average up to 85.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          95 + (85 − 70) = 95 + 15 = 110 → capped at 100
        </div>
        <p className="mt-4 leading-7">
          Since the raw calculation exceeds a perfect score, the curved score is capped at 100 rather than
          reported as 110.
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
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Turn your curved percentage into a letter grade.</p>
          </Link>
          <Link href="/grade-scale-explained" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Scale Explained</span>
            <p className="mt-1 text-sm text-slate-400">How percentages map to letter grades and GPA points.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
