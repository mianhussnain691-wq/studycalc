import Link from "next/link";

const faqs = [
  {
    q: "Do my weights need to add up to 100?",
    a: "No. The calculator normalizes automatically by dividing the weighted sum by the total weight, so weights of 2, 3, and 5 work exactly the same as 20%, 30%, and 50%.",
  },
  {
    q: "What can I use this for?",
    a: "Anything with scores that don't carry equal importance — course grades weighted by credit hours, portfolio returns weighted by allocation, survey responses weighted by sample size, and similar cases.",
  },
  {
    q: "Can I find out what score I need on a remaining item to hit a target average?",
    a: "Not with this tool — it only calculates the average forward from scores you already have. For \"what do I need on my final exam\" style questions, use the Grade Calculator's guide, which covers that calculation.",
  },
  {
    q: "What happens if I leave a row's score or weight blank?",
    a: "Incomplete rows are skipped automatically and don't affect the result — only rows with both a score and a weight filled in are counted.",
  },
  {
    q: "Why does a higher weight pull the average toward that item's score?",
    a: "Because the formula multiplies each score by its own weight before summing — an item with a large weight contributes a proportionally larger chunk of the total, so its score has more influence on where the final average lands than a low-weight item's score does.",
  },
  {
    q: "Is this the same math as a stock portfolio's weighted return?",
    a: "Yes — a portfolio's overall return is the weighted average of each holding's return, weighted by how much of the portfolio it makes up. The exact same Σ(value × weight) ÷ Σ(weight) formula applies whether the \"values\" are course scores, investment returns, or survey responses.",
  },
  {
    q: "Can weights be negative?",
    a: "No — a weight represents how much something counts, and a negative weight doesn't have a sensible real-world meaning in this context. The calculator only accepts weights greater than 0.",
  },
  {
    q: "How is this different from just averaging all the scores normally?",
    a: "A normal (unweighted) average treats every score as equally important, dividing the sum by the count of items. A weighted average lets some items count more than others — the two only give the same result when every item happens to carry an identical weight. Use the Letter Grade Average Calculator specifically if you want a simple, unweighted average of letter grades instead.",
  },
  {
    q: "What's a sensible way to choose weights if none are given to me?",
    a: "If you're building your own weighting scheme rather than following an instructor's stated one, base weights on genuine relative importance — time invested, difficulty, or how much a component should count toward the final outcome. There's no single correct system; consistency in how you apply it matters more than the specific numbers chosen.",
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

export default function WeightedAverageGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Weighted Average = Σ(Score × Weight) ÷ Σ(Weight)
          </p>
        </div>
        <p className="mt-4 leading-7">
          Each score is multiplied by its own weight before being added together, then the total is
          divided by the sum of all the weights — so items with a bigger weight pull the average
          further toward their own score.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From Related Tools</h2>
        <p className="mt-4 leading-7">
          This is the general-purpose version of a weighted average, and it&apos;s worth knowing when the more
          specialized tools on StudyCalc are a better fit.{" "}
          <Link href="/gpa-calculator" className="text-cyan-400 hover:underline">
            GPA Calculator
          </Link>{" "}
          is this exact same math, purpose-built for course grades and credit hours specifically. The{" "}
          <Link href="/course-weight-impact-calculator" className="text-cyan-400 hover:underline">
            Course Weight Impact Calculator
          </Link>{" "}
          answers a different, narrower question — not &quot;what&apos;s my current average,&quot; but &quot;how much could
          one specific upcoming item move my grade.&quot; And{" "}
          <Link href="/grade-calculator" className="text-cyan-400 hover:underline">
            Grade Calculator
          </Link>
          &apos;s guide covers the reverse-solve case — &quot;what score do I need on my final&quot; — which this tool
          deliberately doesn&apos;t attempt, since it&apos;s a forward-calculation-only tool by design.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: Two Items</h2>
        <p className="mt-4 leading-7">
          Two items: a score of 80 with weight 30, and a score of 90 with weight 70.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          (80 × 30 + 90 × 70) ÷ (30 + 70) = (2400 + 6300) ÷ 100 = 87.0
        </div>
        <p className="mt-4 leading-7">
          Note this isn&apos;t the same as the plain average of 80 and 90 (85.0) — the higher-weighted 90
          pulls the result closer to itself.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: Three Items With Uneven Weights</h2>
        <p className="mt-4 leading-7">
          Three items: 70 with weight 20, 85 with weight 50, and 95 with weight 30.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          (70 × 20 + 85 × 50 + 95 × 30) ÷ (20 + 50 + 30) = (1400 + 4250 + 2850) ÷ 100 = 85.0
        </div>
        <p className="mt-4 leading-7">
          Here the weights happen to sum to exactly 100, so the calculation reads directly as a
          percentage-weighted blend — the middle score (85, at the largest 50% weight) anchors the result
          almost exactly at its own value, with the other two pulling only slightly in each direction.
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
        <h2 className="text-2xl font-bold text-white">Related Calculators</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Looking for &quot;what score do I need on my final&quot;? Start here.</p>
          </Link>
          <Link href="/course-weight-impact-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Course Weight Impact Calculator</span>
            <p className="mt-1 text-sm text-slate-400">See what one upcoming assessment is worth to your grade.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">A weighted average specifically for course grades and credit hours.</p>
          </Link>
          <Link href="/cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">A weighted average across semesters instead of items.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
