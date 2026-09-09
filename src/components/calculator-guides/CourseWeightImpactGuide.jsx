import Link from "next/link";

const faqs = [
  {
    q: "Isn't this the same as the Weighted Average Calculator?",
    a: "They solve different problems. The Weighted Average Calculator needs every component of your grade (all your scores and all their weights) to compute your current overall average. This tool needs none of that — just your current overall grade (however you got it) and the weight of one specific upcoming item — to answer a narrower, forward-looking question: \"how much could this one thing move my grade?\"",
  },
  {
    q: "Why does the calculator show a range instead of one number?",
    a: "Because you haven't taken the assessment yet — its actual score is unknown. The best case (a perfect 100%) and worst case (a zero) define the full range your final grade could land in, given everything else about your course stays the same.",
  },
  {
    q: "What if I have a good guess at my likely score, not just best/worst case?",
    a: "You can estimate: your projected final grade ≈ current grade × (1 − weight/100) + your predicted score × (weight/100). The best/worst case numbers this tool shows are just that same formula evaluated at the two extremes (100 and 0).",
  },
  {
    q: "Does a 20% weight always move my grade by up to 20 points?",
    a: "Only if your current grade is exactly at one extreme already. In general, the size of the swing depends on both the weight and how far your possible scores are from your current grade — the formula in this guide shows the exact math.",
  },
  {
    q: "Should I spend more study time on higher-weighted assessments?",
    a: "Generally yes, all else being equal — a 30%-weighted final can move your grade three times as much as a 10%-weighted quiz. But also factor in how confident you already are in the material and how much a given amount of study time is likely to improve your actual score, not just the raw weight.",
  },
  {
    q: "Where does my 'current course grade' come from?",
    a: "Whatever your gradebook or professor currently shows as your overall grade in the course so far, before this upcoming assessment. If you need to calculate that number first from individual component scores, use the Weighted Average Calculator, then bring that result here.",
  },
  {
    q: "Can I use this for a single quiz as easily as a final exam?",
    a: "Yes — just enter that specific item's weight. A 5%-weighted quiz will naturally show a much narrower best/worst range than a 40%-weighted final, which is exactly the point of comparing weights across different assessment types in your course.",
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

export default function CourseWeightImpactGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What This Tool Answers</h2>
        <p className="mt-4 leading-7">
          Not every grade question is about calculating an average — sometimes you already know your
          overall grade and just want a quick sense of how much one specific upcoming item can actually
          move it. That&apos;s a study-planning question: given a fixed weight, how much is this one exam or
          assignment really worth, and what&apos;s the realistic range my final grade could land in depending
          on how I do on it? This tool answers exactly that, with a single weight and your current grade
          as the only two inputs.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From the Weighted Average Calculator</h2>
        <p className="mt-4 leading-7">
          <Link href="/weighted-average-calculator" className="text-cyan-400 hover:underline">StudyCalc&apos;s Weighted Average Calculator</Link>{" "}
          is a retrospective, full-picture tool — you enter every component of your grade (every score and
          every weight) and it computes your current overall average from scratch. This tool is
          prospective and narrow by design: it assumes you already know your current overall grade
          (calculated however you like, including with that other tool) and asks a single forward-looking
          question about one upcoming item&apos;s impact. If you need to calculate your actual current average
          from a full list of scores, use the Weighted Average Calculator first, then bring the result
          here to see what one more assessment could do to it.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Best Case = Current Grade × (1 − Weight) + 100 × Weight
          </p>
          <p className="mt-3 text-lg font-bold text-cyan-400 font-mono">
            Worst Case = Current Grade × (1 − Weight)
          </p>
        </div>
        <p className="mt-4 leading-7">
          (Weight expressed as a decimal, e.g. 20% = 0.20.) The gap between best and worst case is
          exactly equal to the weight itself, expressed as percentage points — a 30% assessment always
          creates a 30-point spread between the best and worst outcome, regardless of your current grade.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Mid-Weight Exam</h2>
        <p className="mt-4 leading-7">
          Your current grade in the course is 85%, and an upcoming exam is worth 20% of your final grade.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          Best: 85 × 0.8 + 100 × 0.2 = 68 + 20 = 88{"\n"}
          Worst: 85 × 0.8 = 68
        </div>
        <p className="mt-4 leading-7">
          Depending on this one exam, your final grade could land anywhere from 68% to 88% — a 20-point
          range, matching the exam&apos;s 20% weight exactly.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Heavily-Weighted Final</h2>
        <p className="mt-4 leading-7">
          Your current grade is 78%, and the final exam counts for 40% of your total grade.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          Best: 78 × 0.6 + 100 × 0.4 = 46.8 + 40 = 86.8{"\n"}
          Worst: 78 × 0.6 = 46.8
        </div>
        <p className="mt-4 leading-7">
          At 40% weight, this single exam creates a much wider 40-point swing (46.8% to 86.8%) — a strong
          argument for prioritizing study time toward it over a lightly-weighted quiz.
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
          <Link href="/weighted-average-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Weighted Average Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate your actual current grade from all your scores.</p>
          </Link>
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Turn any resulting percentage into a letter grade.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
