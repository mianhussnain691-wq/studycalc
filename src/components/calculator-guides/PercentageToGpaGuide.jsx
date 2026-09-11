import Link from "next/link";

const faqs = [
  {
    q: "What GPA scale does this calculator use?",
    a: "The common US 4.0 scale: 93-100% = 4.0 (A), 90-92% = 3.7 (A-), 87-89% = 3.3 (B+), down to below 60% = 0.0 (F). This is the same scale used across StudyCalc's GPA and Grade calculators.",
  },
  {
    q: "Is 80% a 3.0 GPA or a 2.7 GPA?",
    a: "On this scale, 80% falls in the 80-82% band, which is a B- (2.7 GPA). An 83% would be needed to reach a straight B (3.0).",
  },
  {
    q: "Does every university use this exact scale?",
    a: "No — grading scales vary by institution. This calculator uses a commonly used US 4.0 scale as a reference point. For anything that affects your official record, check your school's published grading policy.",
  },
  {
    q: "How is this different from the Grade Calculator?",
    a: "The Grade Calculator returns a letter grade and status for a percentage. This tool returns the numeric GPA value on the 4.0 scale, which is what most transcripts and GPA calculators actually need as input.",
  },
  {
    q: "Why is this conversion exact while the reverse direction isn't?",
    a: "Percentage to GPA is a many-to-one mapping — every percentage in a band (say, 87% through 89%) converts to exactly the same GPA value (3.3), with zero ambiguity. Going the other way, from a GPA value back to percentage, means picking one number out of a whole band, which is inherently a guess. This tool has the easier, unambiguous job.",
  },
  {
    q: "What happens right at a boundary, like exactly 90%?",
    a: "The bands are inclusive at their lower edge, so exactly 90% falls into the 90-92% band (A-, 3.7 GPA), not the band below it. A single point either way — 89% versus 90% — can be the difference between a 3.3 and a 3.7 GPA, which is why boundary scores are worth double-checking carefully.",
  },
  {
    q: "Can I use this to estimate my semester GPA from an average percentage?",
    a: "Only as a rough estimate — averaging your percentages across courses first and then converting to GPA is not the same as converting each course to GPA individually and then averaging (weighted by credit hours). For an accurate semester GPA, use the GPA Calculator with your actual course-by-course grades and credit hours.",
  },
  {
    q: "Does this calculator round my percentage before converting it?",
    a: "It uses your percentage exactly as entered to find the matching band — there's no separate rounding step. A 92.4% and a 92.9% both land in the same 90-92% band and return the same 3.7 GPA, since the band itself is what determines the result, not fine decimal differences within it.",
  },
  {
    q: "Why do the band widths get wider toward the bottom of the scale?",
    a: "On the common US 4.0 scale, the top bands (A, A-, B+...) are typically 2-3 percentage points wide, while the D band spans a full 10 points (60-69%). This reflects a grading philosophy where finer distinctions matter more among higher-performing scores, while the passing-but-weak range is treated as a single broad category.",
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

export default function PercentageToGpaGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How the Conversion Works</h2>
        <p className="mt-4 leading-7">
          Each percentage range on the 4.0 scale maps directly to one GPA value. The calculator finds
          the band your percentage falls into and returns that band&apos;s GPA and letter grade.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Percentage → matching band → GPA + letter grade
          </p>
        </div>
        <p className="mt-4 leading-7">
          Unlike the reverse direction, this lookup is unambiguous — a percentage always has one home
          band, so the resulting GPA is exact rather than an estimate, as long as the scale itself
          matches the one your institution actually uses.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From the GPA to Percentage Calculator</h2>
        <p className="mt-4 leading-7">
          <Link href="/gpa-to-percentage-calculator" className="text-cyan-400 hover:underline">
            GPA to Percentage
          </Link>{" "}
          runs this same table in reverse, and the two directions aren&apos;t symmetric in precision. Going
          percentage → GPA (this tool) is exact, since every percentage belongs to exactly one band. Going
          GPA → percentage means picking a single number out of a multi-point-wide band, which is
          necessarily an estimate. If you have a percentage already, this is the more reliable of the two
          tools to use; if you only have a GPA and need an estimated percentage, the reverse tool is
          designed for exactly that, with the caveat built in.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Strong Score</h2>
        <p className="mt-4 leading-7">
          A student scores 87% on a course.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          87% falls in the 87-89% band → B+ → 3.30 GPA
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Borderline Passing Score</h2>
        <p className="mt-4 leading-7">
          A student scores 65% on a course.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          65% falls in the 60-69% band → D → 1.00 GPA
        </div>
        <p className="mt-4 leading-7">
          Note the wide 10-point span of the D band compared to the narrower 2-3 point bands higher up the
          scale — a peculiarity of the common US 4.0 scale, where the passing range near the bottom is
          compressed into a single grade point value.
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
        <h2 className="text-2xl font-bold text-white">Related Calculators & Guides</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/gpa-to-percentage-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA to Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Go the other way — GPA to percentage.</p>
          </Link>
          <Link href="/gpa-to-percentage-guide" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA to Percentage: Complete Guide</span>
            <p className="mt-1 text-sm text-slate-400">The full explanation, common mistakes, and both directions.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate a full semester&apos;s GPA from your courses.</p>
          </Link>
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Get a letter grade and status for a percentage.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
