import Link from "next/link";

const faqs = [
  {
    q: "Why is it harder to raise CGPA in later semesters?",
    a: "Because CGPA is a credit-weighted average across your entire academic record. The more credits you've already completed, the smaller a fraction any new semester represents — this effect is called credit inertia. See the linked guide below for a worked comparison.",
  },
  {
    q: "What if the GPA I need is above 4.0?",
    a: "It means your target CGPA isn't reachable with the remaining credits you entered, since 4.0 is the maximum possible GPA. Spreading the same total remaining credits over more semesters doesn't change the total — you'd need either more remaining credits or a lower target.",
  },
  {
    q: "Does it matter if my remaining credits span one semester or several?",
    a: "Not for this calculation — the formula only cares about the total remaining credits and the average GPA across them, regardless of how many semesters that total is split into.",
  },
  {
    q: "How is this different from the Target GPA Calculator?",
    a: "The Target GPA Calculator is scoped to a single semester's remaining credits. This one is framed cumulatively for planning a CGPA recovery across multiple future semesters.",
  },
  {
    q: "What if raising my CGPA the amount I want just isn't realistic in the time I have left?",
    a: "This is common, especially late in a degree with few remaining credits. Realistic options include extending your timeline (an extra semester adds more remaining credits to average into), retaking specific low grades if your school offers grade replacement, or adjusting your target to something achievable — our full strategy guide walks through each of these paths in detail.",
  },
  {
    q: "Does this formula account for retaken courses or grade replacement?",
    a: "Not directly — it treats your current CGPA and current credits as a single fixed starting point. If your school replaces old grades with new ones on retake (removing the original quality points from your CGPA), recalculate your actual current CGPA and credits after the replacement takes effect, then re-run this calculator with the updated numbers.",
  },
  {
    q: "Should I use my major GPA or my overall CGPA here?",
    a: "Use whichever one the target actually applies to. If a scholarship or program requirement specifies your major GPA, use that GPA and major-specific credit count instead of your overall CGPA — mixing the two will give you a number that doesn't correspond to any real requirement.",
  },
  {
    q: "Can this calculator tell me exactly which grades I need in which courses?",
    a: "No — it only tells you the average GPA needed across your remaining credits as a whole, not how that should be distributed across individual courses. In practice, some courses are easier to score high in than others, so you have flexibility in how you actually hit the average, as long as the credit-weighted result comes out at or above the needed figure.",
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

export default function TargetCgpaGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-base sm:text-lg font-bold text-cyan-400 font-mono">
            Needed GPA = [Target CGPA × (Current Credits + Remaining Credits) − Current CGPA × Current Credits] ÷ Remaining Credits
          </p>
        </div>
        <p className="mt-4 leading-7">
          Same shape as the semester-level version, but framed cumulatively — this treats your entire
          remaining academic career as one block of credits that needs to average a certain GPA.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From the Target GPA Calculator</h2>
        <p className="mt-4 leading-7">
          Both tools run the identical formula, just scoped differently.{" "}
          <Link href="/target-gpa-calculator" className="text-cyan-400 hover:underline">
            Target GPA
          </Link>{" "}
          is meant for a single upcoming semester — its &quot;remaining credits&quot; input is whatever you&apos;re
          currently registered for this term. This tool is meant for longer-range planning, where
          &quot;remaining credits&quot; might represent everything left in your degree, spread across several
          future semesters. Because CGPA suffers from credit inertia (explained below), the number this
          tool returns is usually gentler per-semester than trying to fix everything in a single term —
          which is exactly the tradeoff our{" "}
          <Link href="/target-gpa-strategy-guide" className="text-cyan-400 hover:underline">
            target-setting strategy guide
          </Link>{" "}
          walks through with realistic examples.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Significant Recovery</h2>
        <p className="mt-4 leading-7">
          A student has a 2.8 CGPA across 90 completed credits, wants to reach a 3.0 CGPA, and has 30
          credits remaining before graduation:
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          [3.0 × (90 + 30) − 2.8 × 90] ÷ 30 = [360 − 252] ÷ 30 = 3.6
        </div>
        <p className="mt-4 leading-7">
          A 3.6 GPA across the remaining 30 credits would bring the overall CGPA up to 3.0 — a solid B+/A-
          average, demanding but realistic for a focused final stretch.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Small Late-Degree Push</h2>
        <p className="mt-4 leading-7">
          A student has a 3.6 CGPA across 100 completed credits, wants to reach 3.65, with 20 credits
          remaining:
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          [3.65 × (100 + 20) − 3.6 × 100] ÷ 20 = [438 − 360] ÷ 20 = 3.9
        </div>
        <p className="mt-4 leading-7">
          Even a modest 0.05 increase in overall CGPA requires a 3.9 average across the remaining credits
          — a direct illustration of credit inertia: with 100 credits already locked in, even a small
          target movement demands a disproportionately strong finish.
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
          <Link href="/target-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Target GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Plan a single semester instead of a multi-semester recovery.</p>
          </Link>
          <Link href="/target-gpa-strategy-guide" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Target GPA Strategy Guide</span>
            <p className="mt-1 text-sm text-slate-400">What to do if the required GPA is out of reach.</p>
          </Link>
          <Link href="/cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate your actual cumulative GPA across semesters.</p>
          </Link>
          <Link href="/semester-gpa-vs-cgpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Semester GPA vs CGPA</span>
            <p className="mt-1 text-sm text-slate-400">Understand credit inertia and how recovery semesters actually move your CGPA.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
