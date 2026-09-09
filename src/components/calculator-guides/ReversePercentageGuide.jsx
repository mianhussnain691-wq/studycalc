import Link from "next/link";

const faqs = [
  {
    q: "How is this different from a normal percentage calculator?",
    a: "A normal percentage calculator answers \"what percent is this part of that total?\" — you know the part and the total, and want the percentage. This tool works backwards: you know the part and the percentage, and want to find the total.",
  },
  {
    q: "What's a real-world example of when I'd need this?",
    a: "Say you scored 42 marks and know that's 70% of the paper — you want to know the paper was out of 60 marks total. Or you're told a discount price of $45 is 75% of the original price and want to find that original price. Both are reverse percentage problems.",
  },
  {
    q: "Can the percentage be over 100%?",
    a: "Yes. While the most common use case involves a part that's a fraction of a whole (0-100%), the same math works for growth scenarios — e.g. if you've already reached 120% of a target, the calculator can still find the original target value.",
  },
  {
    q: "What happens if I enter 0% for the percentage?",
    a: "The calculation is undefined — dividing by 0% would mean an infinitely large total. The calculator blocks this and asks for a percentage greater than 0.",
  },
  {
    q: "Is this the same as multiplying by 100 divided by the percentage?",
    a: "Yes — dividing by (percent/100) is mathematically the same as multiplying by (100/percent). Both give the identical result; the calculator just uses the division form directly.",
  },
  {
    q: "Can I use this for tax or discount calculations?",
    a: "Yes, as long as you frame it correctly. If a price already includes a tax and you know the tax rate, you can use this to work out the pre-tax price by treating the tax-inclusive price as the \"part\" as a percentage of the total accordingly, though tax-specific calculations sometimes need the percentage framed as 100% + tax rate rather than the tax rate alone — check your numbers make sense before relying on the result for anything official.",
  },
  {
    q: "Does rounding affect accuracy?",
    a: "The calculator shows results to two decimal places, which is precise for virtually all everyday and academic use cases. If you need more decimal precision for a financial calculation, treat the result as a close approximation and verify with exact figures where it matters.",
  },
  {
    q: "How does this relate to solving for 'x' in a percentage equation?",
    a: "It's the same underlying algebra, just framed practically. A statement like \"45 is 30% of x\" translates directly to the equation 45 = 0.30 × x, and solving for x by dividing both sides by 0.30 is exactly the calculation this tool performs — it just skips the algebra notation and gives you the answer directly.",
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

export default function ReversePercentageGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What Is a Reverse Percentage?</h2>
        <p className="mt-4 leading-7">
          Most percentage problems give you a part and a total, and ask for the percentage — &quot;42 out of
          60 is what percent?&quot; A reverse percentage problem flips that around: you already know the part
          and the percentage it represents, and you need to find the total it came from. It shows up
          constantly outside the classroom too — working out an original price from a discounted one,
          finding a full dataset size from a known sample percentage, or recovering a paper&apos;s total marks
          from a partial score and its stated percentage.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From the Percentage Calculator</h2>
        <p className="mt-4 leading-7">
          <Link href="/percentage-calculator" className="text-cyan-400 hover:underline">StudyCalc&apos;s Percentage Calculator</Link>{" "}
          goes in the forward direction only: you enter a part and a total, and it tells you the
          percentage. It has no reverse mode. This tool exists specifically to cover the opposite
          direction — you enter a part and a percentage, and it works out the total. If you find yourself
          with two numbers and unsure which calculator to use, ask which value is missing: if it&apos;s the
          percentage, use the Percentage Calculator; if it&apos;s the total, use this one.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Whole = Part ÷ (Percent ÷ 100)
          </p>
        </div>
        <p className="mt-4 leading-7">
          Dividing by the percentage expressed as a decimal (rather than multiplying by it, the way a
          forward percentage calculation would) is what &quot;undoes&quot; the percentage and recovers the original
          total.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Test Score</h2>
        <p className="mt-4 leading-7">
          You scored 45 marks on a test, and you&apos;re told that&apos;s 30% of the total marks available. What
          was the paper out of?
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          45 ÷ (30 ÷ 100) = 45 ÷ 0.3 = 150
        </div>
        <p className="mt-4 leading-7">
          The paper was out of 150 marks total.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Discounted Price</h2>
        <p className="mt-4 leading-7">
          After a discount, an item costs $18, and a sign says that&apos;s 40% of the original price. What was
          the original price?
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          18 ÷ (40 ÷ 100) = 18 ÷ 0.4 = 45
        </div>
        <p className="mt-4 leading-7">
          The original price was $45. (Note: this framing means the item now costs 40% of its original
          price — a 60% discount — not that 40% was taken off; word the percentage carefully depending on
          which framing your problem actually describes.)
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
          <Link href="/percentage-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Forward direction — find the percentage from a part and total.</p>
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
