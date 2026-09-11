import Link from "next/link";

const faqs = [
  {
    q: "What does \"time value of money\" actually mean?",
    a: "A dollar available today is worth more than a dollar received at some point in the future, because today's dollar can be invested and earn a return in the meantime. This single idea underlies nearly all of corporate finance and investment analysis — comparing cash flows at different points in time requires converting them to a common point using an interest rate, which is exactly what present value and future value calculations do.",
  },
  {
    q: "What's the difference between present value and future value?",
    a: "Future value answers \"what will this amount grow to by a future date, given a rate of return?\" Present value answers the reverse: \"what is a future amount worth today, given the same rate?\" They're the same relationship solved for different variables.",
  },
  {
    q: "Why does the interest rate need to match the period length?",
    a: "The rate and the period count have to describe the same unit of time — if periods are months, the rate must be a monthly rate; if periods are years, the rate must be annual. Mixing a monthly period count with an annual rate (or vice versa) without converting produces a badly wrong answer, since the formula assumes one consistent compounding period throughout.",
  },
  {
    q: "What is the annuity formula for, specifically?",
    a: "It handles a series of equal, regularly-spaced payments — a recurring deposit, a loan payment, a subscription — rather than a single lump sum. The payment amount is added on top of ordinary lump-sum growth, so this calculator can handle a starting balance, a recurring payment, or both together.",
  },
  {
    q: "What if I don't have any recurring payments, just a single amount?",
    a: "Leave the payment field blank or at 0 — the calculator falls back to the simple lump-sum formula (FV = PV × (1+r)^n) automatically, since a zero payment contributes nothing to the annuity term.",
  },
  {
    q: "Does this calculator handle NPV directly?",
    a: "Not as a separate named output, but the underlying present value math is the same building block NPV is built from — NPV sums the present values of multiple future cash flows and subtracts an initial investment. For a single cash flow's present value, this calculator gives you exactly that piece of the NPV calculation.",
  },
  {
    q: "Why does a small change in the interest rate make such a big difference over many periods?",
    a: "Because growth compounds — each period's return applies not just to your original amount but to all previously accumulated growth too. Over a small number of periods the difference between, say, 5% and 6% is minor, but over 20-30 periods it compounds into a substantial gap, which is why interest rate assumptions matter so much in long-horizon finance problems.",
  },
  {
    q: "Is this the same math my financial calculator (like a BA II Plus) uses?",
    a: "Yes — the core TVM formulas here are the same standard equations built into financial calculators used in finance coursework. The main difference is presentation: a dedicated financial calculator lets you toggle any of the five TVM variables (N, I/Y, PV, PMT, FV) as the unknown, while this tool is organized around solving specifically for PV or FV.",
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

export default function TimeValueOfMoneyGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Core Concept</h2>
        <p className="mt-4 leading-7">
          Time value of money is the foundational idea behind almost every finance calculation: a dollar
          today is worth more than a dollar in the future, because a dollar today can be invested and
          start earning a return immediately. That gap between &quot;now&quot; and &quot;later&quot; is exactly what an
          interest rate quantifies, and present value / future value calculations are simply the tools for
          moving a cash flow forward or backward across that gap.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formulas</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center space-y-3">
          <p className="text-base sm:text-lg font-bold text-cyan-400 font-mono">
            FV = PV × (1 + r)^n
          </p>
          <p className="text-base sm:text-lg font-bold text-cyan-400 font-mono">
            PV = FV ÷ (1 + r)^n
          </p>
          <p className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
            With periodic payments: FV = PV(1+r)^n + PMT × [((1+r)^n − 1) ÷ r]
          </p>
        </div>
        <p className="mt-4 leading-7">
          r is the interest rate per period (as a decimal) and n is the number of periods. The annuity
          term — the part involving PMT — adds the future value of a series of equal, regularly-spaced
          payments on top of whatever a single starting lump sum would grow to on its own.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: PV → FV (Lump Sum)</h2>
        <p className="mt-4 leading-7">
          You invest $1,000 today at a 5% annual return for 10 years, with no additional contributions.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          FV = 1000 × (1.05)^10 = $1,628.89
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: FV → PV (Reverse)</h2>
        <p className="mt-4 leading-7">
          You want $10,000 in 5 years, and expect a 4% annual return. How much do you need to invest today?
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          PV = 10,000 ÷ (1.04)^5 = $8,219.27
        </div>
        <p className="mt-4 leading-7">
          Investing $8,219.27 today at 4% annually grows to exactly $10,000 in 5 years — the two
          calculations are mirror images of the same relationship.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: An Annuity (Recurring Savings)</h2>
        <p className="mt-4 leading-7">
          You save $200 per month at a 6% annual return (0.5% per month) for 5 years (60 months), starting
          from $0.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          FV = 0 × (1.005)^60 + 200 × [((1.005)^60 − 1) ÷ 0.005] = $13,954.01
        </div>
        <p className="mt-4 leading-7">
          Notice the total contributed over 5 years is only $12,000 (200 × 60) — the remaining $1,954.01
          is entirely from compounding growth on the earlier contributions, which is the core value
          proposition of investing consistently over time rather than saving the same total amount in cash.
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
        <h2 className="text-2xl font-bold text-white">More StudyCalc Tools</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/amcas-science-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">AMCAS Science GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">BCPM and overall GPA for medical school applicants.</p>
          </Link>
          <Link href="/lsac-law-school-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">LSAC Law School GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">CAS cumulative GPA for law school applicants.</p>
          </Link>
          <Link href="/calculators" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">All Calculators</span>
            <p className="mt-1 text-sm text-slate-400">Browse the full StudyCalc tool library.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
