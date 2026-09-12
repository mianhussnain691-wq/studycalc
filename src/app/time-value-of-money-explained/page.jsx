import Link from "next/link";

export const metadata = {
  title: "Time Value of Money Explained: PV, FV & Annuities for Finance Students",
  alternates: { canonical: "https://www.studycalc.co/time-value-of-money-explained" },
  openGraph: {
    title: "Time Value of Money Explained: PV, FV & Annuities for Finance Students",
    description: "Plain-language explanations of present value, future value, and annuities, with original worked examples and a financial calculator quick-reference.",
    url: "https://www.studycalc.co/time-value-of-money-explained",
    siteName: "StudyCalc",
    type: "article",
  },
  keywords: [
    "time value of money explained",
    "pv and fv formulas",
    "annuities for finance students",
    "ordinary annuity vs annuity due",
    "tvm practice problems",
  ],
};

const faqs = [
  {
    q: "What's the difference between present value and future value?",
    a: "Present value is what a future amount of money is worth today, discounted back by an interest rate. Future value is the reverse — what an amount available today will grow to by some point in the future, given a rate of return. They describe the same relationship from opposite ends.",
  },
  {
    q: "Why is a dollar today worth more than a dollar in the future?",
    a: "Because a dollar in hand today can be invested immediately and start earning a return, while a dollar promised for later can't do anything until it arrives. That earning potential is exactly what an interest rate measures, and it's the entire reason present and future amounts aren't directly comparable without adjusting for time first.",
  },
  {
    q: "What's the difference between an ordinary annuity and an annuity due?",
    a: "In an ordinary annuity, each payment lands at the end of its period. In an annuity due, each payment lands at the beginning. Because an annuity-due payment sits in the account for one extra period, it accumulates slightly more growth than the same payment schedule structured as an ordinary annuity.",
  },
  {
    q: "Does the time value of money account for inflation?",
    a: "Not directly — the standard PV/FV formulas use whatever interest rate you plug in, and that rate can represent an investment return, a discount rate, or something else entirely depending on the problem. If you want a result that reflects purchasing power rather than raw dollar growth, you'd use a rate adjusted for expected inflation, but that's a separate input choice, not something built into the formula itself.",
  },
  {
    q: "How do I calculate TVM on a financial calculator?",
    a: "Enter any four of the five standard TVM variables (N, I/Y, PV, PMT, FV) and solve for the fifth. Most calculators require you to enter cash outflows as negative numbers and inflows as positive — an easy step to forget, and usually the reason a calculated answer comes out with an unexpected sign.",
  },
  {
    q: "What's the Rule of 72 and how does it relate to TVM?",
    a: "The Rule of 72 is a quick mental shortcut for estimating how long it takes an amount to double at a given annual rate — divide 72 by the interest rate (as a whole number) to get the approximate number of years. It's a fast approximation built on the same compounding idea behind the full FV formula, useful for a ballpark answer when you don't need exact precision.",
  },
  {
    q: "Why do textbooks sometimes call the interest rate a 'discount rate' instead?",
    a: "Same number, different direction of use. When you're moving a value forward in time (PV to FV), it's usually called an interest or growth rate. When you're moving a value backward (FV to PV), the identical rate is often called a discount rate, since it's being used to discount a future amount down to its present worth.",
  },
  {
    q: "Can PV and FV formulas handle negative growth?",
    a: "Yes, mathematically — a negative rate simply shrinks a value over time instead of growing it, which can model a depreciating asset or a declining cash flow. The formula structure doesn't change; only the sign and size of the rate does.",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Time Value of Money Explained: PV, FV & Annuities for Finance Students",
  description: "Plain-language explanations of present value, future value, and annuities, with original worked examples and a financial calculator quick-reference.",
  author: { "@type": "Organization", name: "StudyCalc", url: "https://www.studycalc.co" },
  publisher: { "@type": "Organization", name: "StudyCalc", logo: { "@type": "ImageObject", url: "https://www.studycalc.co/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.studycalc.co/time-value-of-money-explained" },
};

export default function TimeValueOfMoneyExplainedPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            Finance Fundamentals
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Time Value of Money Explained: PV, FV & Annuities
          </h1>
        </header>

        <div className="space-y-10 text-base leading-relaxed">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              What Time Value of Money Means
            </h2>
            <p className="text-lg text-slate-200">
              Money available now is worth more than the same amount received later, because money in
              hand can be invested today and start earning a return immediately — money that hasn&apos;t
              arrived yet can&apos;t.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Present Value and Future Value, Plainly
            </h2>
            <p>
              <strong>Future value (FV)</strong> is what an amount grows into after earning a return over
              some period of time. If you know what you&apos;re starting with and how it will grow, FV tells
              you what you&apos;ll end up with.
            </p>
            <p>
              <strong>Present value (PV)</strong> runs the same idea backward. If you know what you want
              to end up with at some future date, PV tells you what that goal is worth right now — or, put
              differently, how much you&apos;d need today to reach it.
            </p>
            <p>
              Neither number is more &quot;correct&quot; than the other — they&apos;re two views of the same relationship,
              and which one you solve for just depends on which side of the timeline you already know.
            </p>
            <p>
              This shows up constantly outside a finance textbook, too. A loan payment schedule is a
              present-value problem in disguise (a lender wants to know what a stream of future payments
              is worth today). A retirement savings target is a future-value problem (what will a
              recurring contribution grow into by a future date). Once you can spot which direction a
              question is really asking, choosing the right formula becomes far less confusing than it
              first looks.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              The Core Formula
            </h2>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
              <p className="text-lg sm:text-xl font-bold text-cyan-400 font-mono">
                FV = PV × (1 + r)^n
              </p>
            </div>
            <p>
              PV is the amount you&apos;re starting with. r is the interest rate per period, written as a
              decimal (5% becomes 0.05). n is the number of periods the money grows for. Multiply those
              together in this shape, and you get what the starting amount becomes after all that growth
              compounds on top of itself.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Worked Example: Growing a Starting Amount
            </h2>
            <p>
              Suppose you set aside $600 today in an account earning 4% annually, and leave it untouched
              for 3 years. What does it grow to?
            </p>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
              FV = 600 × (1.04)^3 = $674.92
            </div>
            <p>
              Notice the growth isn&apos;t just $600 × 4% × 3 years — that would only be $672 under simple,
              non-compounding interest. The extra 92 cents comes from compounding: each year&apos;s interest
              earns its own interest the following year, not just the original $600.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Reversing It: Solving for Present Value
            </h2>
            <p>
              Now flip the question around. Say you want to have $2,400 saved in 3 years for a study-abroad
              trip, and you expect a 5% annual return. How much do you need to set aside today?
            </p>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
              PV = 2,400 ÷ (1.05)^3 = $2,073.21
            </div>
            <p>
              Depositing $2,073.21 today, at 5% for 3 years, grows to exactly $2,400 — the same
              relationship as the first example, just solved from the opposite direction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Why Compounding Frequency Matters
            </h2>
            <p>
              The formula above assumes interest compounds once per period. In practice, many accounts
              compound more often — monthly or daily rather than annually — and more frequent compounding
              produces a slightly higher future value for the same stated annual rate, since interest
              starts earning its own interest sooner.
            </p>
            <p>
              Take $800 at a 6% annual rate over 2 years. Compounded once a year, it grows to $898.88.
              Compounded monthly instead (splitting the 6% into a monthly rate and running 24 compounding
              periods), it grows to $901.73 — a modest but real difference from compounding frequency
              alone, with nothing else about the deal changed.
            </p>
            <p>
              The gap between the two grows larger as the rate rises, the timeline lengthens, or the
              compounding periods get more frequent still (daily rather than monthly, for instance). Over
              a short 2-year stretch at a moderate rate, the difference is small enough to round away in
              casual conversation. Over a multi-decade investment horizon, the same effect compounds into
              a genuinely material gap — which is exactly why loan and investment disclosures are
              required to state a compounding basis, not just a headline annual rate.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              What Is an Annuity? Ordinary vs. Due
            </h2>
            <p>
              An annuity is simply a series of equal payments made at regular intervals — a car payment, a
              recurring deposit, a subscription fee. The timing of each payment within its period matters
              for the math, and finance separates that timing into two types:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Type</th>
                    <th className="p-3 border-r border-slate-800">Payment Timing</th>
                    <th className="p-3">Typical Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Ordinary Annuity</td>
                    <td className="p-3 border-r border-slate-800">End of each period</td>
                    <td className="p-3">A monthly loan payment</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Annuity Due</td>
                    <td className="p-3 border-r border-slate-800">Beginning of each period</td>
                    <td className="p-3">Rent paid at the start of the month</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Because an annuity-due payment sits invested for one extra period compared to the same
              payment under an ordinary annuity, its future value comes out slightly higher for otherwise
              identical numbers.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Worked Example: A Simple Annuity
            </h2>
            <p>
              Say you save $75 at the end of each month in an account earning 4% annually (compounded
              monthly), for 24 months, starting from zero.
            </p>
            <div className="rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
              FV = 75 × [((1 + 0.04/12)^24 − 1) ÷ (0.04/12)] ≈ $1,870.72
            </div>
            <p>
              You contributed $1,800 total over the 24 months (75 × 24). The remaining $70.72 is
              compounding growth on the earlier deposits — proportionally small over just 2 years, but the
              same mechanism that becomes far more significant over longer horizons.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Financial Calculator Quick Reference
            </h2>
            <p>
              Most dedicated financial calculators (and TVM worksheets in spreadsheet software) organize
              every problem around the same five variables. Enter any four, solve for the fifth:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Key</th>
                    <th className="p-3">What It Represents</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800 font-mono">N</td>
                    <td className="p-3">Number of periods</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800 font-mono">I/Y</td>
                    <td className="p-3">Interest rate per period (as a percentage)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800 font-mono">PV</td>
                    <td className="p-3">Present value (starting or current amount)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800 font-mono">PMT</td>
                    <td className="p-3">Recurring payment per period (0 if none)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800 font-mono">FV</td>
                    <td className="p-3">Future value (ending amount)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              One habit worth building early: most calculators expect cash you pay out to be entered as a
              negative number and cash you receive as positive. Mixing up the signs is the single most
              common reason a TVM answer comes back looking wildly wrong.
            </p>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Run Your Own Numbers Instantly</h3>
            <p className="text-slate-400 text-sm mb-4">
              Skip the manual algebra and solve for PV, FV, or an annuity directly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/time-value-of-money-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                Time Value of Money Calculator
              </Link>
              <Link href="/calculators" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                All Calculators
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-semibold text-white">{f.q}</h3>
                  <p className="text-sm text-slate-400 mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
