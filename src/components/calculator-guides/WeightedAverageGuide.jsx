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
        <h2 className="text-2xl font-bold text-white">Worked Example</h2>
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
