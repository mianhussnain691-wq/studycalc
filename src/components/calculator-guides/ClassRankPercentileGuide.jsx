import Link from "next/link";

const faqs = [
  {
    q: "Is this my actual class rank?",
    a: "No. Your official class rank comes from your school and is based on the exact scores of every student in your class. This tool produces a statistical estimate based on just three numbers — your score, the class average, and (optionally) the spread of scores — assuming the class roughly follows a normal (bell-curve) distribution. Real score distributions are often skewed, so treat this as a rough estimate, not a substitute for your registrar's records.",
  },
  {
    q: "Why do I need the standard deviation to get a percentile?",
    a: "A percentile depends on how spread out the scores are, not just the average. Being 10 points above average means something very different in a tightly clustered class (small standard deviation) than in a widely spread one (large standard deviation). Without knowing the spread, there's no honest way to convert \"points above average\" into a percentile — which is why the calculator refuses to fabricate one and shows a simpler relative-position message instead.",
  },
  {
    q: "Where do I find the class standard deviation?",
    a: "Your instructor sometimes reports it alongside the average when returning grades. If it's not given, you can't compute a true standard deviation from your own score alone — you'd need the full list of class scores. If you don't have it, use the relative-position mode instead.",
  },
  {
    q: "What does a negative z-score mean?",
    a: "A negative z-score means your score is below the class average. A z-score of -1 means you're one standard deviation below average, corresponding to roughly the 16th percentile assuming a normal distribution.",
  },
  {
    q: "Why might the real distribution not be normal?",
    a: "Exam scores often cluster near the top (many students get a similar high score on an easy test) or bunch near a passing cutoff, rather than following a perfect bell curve. Small classes are also more likely to show random, lumpy distributions rather than a smooth curve. The percentile this tool reports assumes normality — in a genuinely skewed class, the real percentile could be noticeably different.",
  },
  {
    q: "What percentile is considered good?",
    a: "There's no universal cutoff — it depends entirely on context (a competitive class versus an easy one, a small sample versus a large one). Broadly, 90th percentile or above is typically considered excellent, 70th-89th is strong, and 50th is exactly average by definition.",
  },
  {
    q: "Can I use this for standardized test scores instead of a class?",
    a: "Yes, if you have the mean and standard deviation for that specific test administration (some standardized tests publish these). The same z-score math applies regardless of whether \"the group\" is your classmates or a national test-taking population.",
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

export default function ClassRankPercentileGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What This Estimator Does</h2>
        <p className="mt-4 leading-7">
          This tool gives you a rough sense of where your score sits relative to your class, using only
          your score and the class average — plus, optionally, the class&apos;s standard deviation for a more
          precise percentile estimate. It deliberately does not pretend to know your exact class rank,
          because that requires the full list of every student&apos;s score, which this tool never has access
          to.
        </p>
        <p className="mt-4 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">Important:</strong> this is a statistical estimate based on
          an assumed normal distribution, not your official class rank. Treat the result as a general
          sense of standing, not a precise figure to cite officially.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Two Modes, Depending on What You Know</h2>
        <p className="mt-4 leading-7">
          If you only know your score and the class average, the calculator shows a simple relative
          message — how many points above or below average you scored — without inventing a percentile
          it can&apos;t actually support. If you also know the class&apos;s standard deviation (how spread out the
          scores are), the calculator computes a z-score and converts it into an estimated percentile
          using the standard normal distribution. The two modes exist because a percentile without a
          measure of spread isn&apos;t a real percentile — it would just be a guess dressed up as a number.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            z = (Your Score − Class Average) ÷ Standard Deviation
          </p>
          <p className="mt-3 text-lg font-bold text-cyan-400 font-mono">
            Percentile ≈ Φ(z) × 100
          </p>
        </div>
        <p className="mt-4 leading-7">
          Φ (the standard normal cumulative distribution function) converts a z-score into the percentage
          of a normal distribution that falls below it. A z-score of 0 always converts to exactly the
          50th percentile.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: Above Average</h2>
        <p className="mt-4 leading-7">
          You scored 85. The class average was 75, with a standard deviation of 10.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          z = (85 − 75) ÷ 10 = 1.0 → Φ(1.0) × 100 ≈ 84.1st percentile
        </div>
        <p className="mt-4 leading-7">
          A z-score of exactly 1.0 (one standard deviation above average) corresponds to roughly the
          84th percentile under a normal distribution — meaning an estimated 84% of the class scored at
          or below your score.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: Below Average</h2>
        <p className="mt-4 leading-7">
          You scored 60. The class average was 70, with a standard deviation of 5.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          z = (60 − 70) ÷ 5 = −2.0 → Φ(−2.0) × 100 ≈ 2.3rd percentile
        </div>
        <p className="mt-4 leading-7">
          A z-score of -2.0 is two full standard deviations below average, which is fairly unusual under
          a normal distribution — only about 2.3% of the class would be estimated to have scored as low
          or lower.
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
            <p className="mt-1 text-sm text-slate-400">Calculate your actual semester GPA from your courses.</p>
          </Link>
          <Link href="/grade-scale-explained" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Scale Explained</span>
            <p className="mt-1 text-sm text-slate-400">Understand how letter grades map to percentages and GPA.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
