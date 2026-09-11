import Link from "next/link";

const faqs = [
  {
    q: "What if the GPA I need is above 4.0?",
    a: "That means your target isn't reachable through this semester's credits alone, since 4.0 is the maximum GPA. You'd need either a higher grade than a perfect 4.0 (not possible) or to spread the recovery over more semesters — see the Target CGPA Calculator.",
  },
  {
    q: "What if the calculator says I need a negative GPA?",
    a: "It means your target is already secured — even a 0.00 this semester would still leave your overall GPA at or above your target, given how much weight your existing credits carry.",
  },
  {
    q: "Why does my current GPA matter if I already know my target?",
    a: "Your target GPA is a cumulative figure across all your credits, current and new. The calculator has to know your current GPA and how many credits it's based on to work out how much a new semester can move that average.",
  },
  {
    q: "Is this the same as CGPA?",
    a: "This calculator is scoped to a single semester's remaining credits. If you're tracking a multi-semester recovery plan, use the Target CGPA Calculator instead, which is framed cumulatively.",
  },
  {
    q: "Why does adding more remaining credits change the needed GPA?",
    a: "More remaining credits give the new semester proportionally more weight in your final average, so each one has to work slightly less hard to reach the same target — the needed GPA generally drops as remaining credits increase, all else equal. Fewer remaining credits means each one carries more weight, pushing the needed GPA higher.",
  },
  {
    q: "Can I use this to set a target for just one course instead of a whole semester?",
    a: "Not directly — this formula is built around aggregate GPA and total credit hours, not individual course grades. For a single upcoming assessment's impact on one course's grade, use the Course Weight Impact Calculator instead.",
  },
  {
    q: "Does this account for pass/fail courses?",
    a: "No — the formula assumes every credit hour you enter carries a standard letter grade that contributes to GPA. Pass/fail courses typically don't factor into GPA calculations at all, so exclude their credit hours from both your current credits and remaining credits when using this tool.",
  },
  {
    q: "How often should I recalculate my target?",
    a: "Any time your actual GPA or completed credits change — after each graded assignment cycle or at minimum once per semester, since both numbers feed directly into the formula and a stale input will give you a stale, potentially misleading target.",
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

export default function TargetGpaGuide() {
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
            Needed GPA = [Target × (Current Credits + Remaining Credits) − Current GPA × Current Credits] ÷ Remaining Credits
          </p>
        </div>
        <p className="mt-4 leading-7">
          This works out what your remaining credits need to average, given the weight your existing
          credits already carry. It&apos;s the same algebra as solving a weighted average backwards: you know
          the target overall average and one of the two components, and you&apos;re solving for the other.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From the Target CGPA Calculator</h2>
        <p className="mt-4 leading-7">
          The two tools share the exact same formula shape, so it&apos;s worth being clear about what actually
          separates them.{" "}
          <Link href="/target-cgpa-calculator" className="text-cyan-400 hover:underline">
            Target CGPA
          </Link>{" "}
          is meant for planning across multiple future semesters — your &quot;remaining credits&quot; input there
          might represent your entire rest of a degree. This tool is scoped narrowly to a single semester:
          the &quot;remaining credits&quot; here are just the credits you&apos;re currently registered for right now.
          Use this one when you&apos;re asking &quot;what do I need to average this term,&quot; and switch to the
          cumulative version when the question spans more than one semester. Our{" "}
          <Link href="/target-gpa-strategy-guide" className="text-cyan-400 hover:underline">
            complete target-setting strategy guide
          </Link>{" "}
          covers both scenarios side by side with realistic goal-setting advice.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: An Unreachable Target</h2>
        <p className="mt-4 leading-7">
          A student has a 3.0 GPA across 60 completed credits and wants to reach a 3.3 GPA by the end of
          a semester with 15 remaining credits:
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          [3.3 × (60 + 15) − 3.0 × 60] ÷ 15 = [247.5 − 180] ÷ 15 = 4.5
        </div>
        <p className="mt-4 leading-7">
          A needed GPA of 4.5 is above the 4.0 maximum — this target isn&apos;t reachable in one semester.
          Spreading the recovery over more semesters (Target CGPA Calculator) would lower the number needed.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Demanding But Reachable Target</h2>
        <p className="mt-4 leading-7">
          A student has a 3.5 GPA across 40 completed credits and wants to reach 3.6 by the end of a
          semester with 12 remaining credits:
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          [3.6 × (40 + 12) − 3.5 × 40] ÷ 12 = [187.2 − 140] ÷ 12 ≈ 3.93
        </div>
        <p className="mt-4 leading-7">
          A 3.93 average this semester would hit the target — demanding (essentially straight A&apos;s and
          A-&apos;s), but mathematically possible, unlike the first example.
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
          <Link href="/target-cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Target CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Plan a recovery across multiple future semesters.</p>
          </Link>
          <Link href="/target-gpa-strategy-guide" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Target GPA Strategy Guide</span>
            <p className="mt-1 text-sm text-slate-400">Realistic goal-setting and what to do if your target is out of reach.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate this semester&apos;s actual GPA from your courses.</p>
          </Link>
          <Link href="/cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate your cumulative GPA across all semesters.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
