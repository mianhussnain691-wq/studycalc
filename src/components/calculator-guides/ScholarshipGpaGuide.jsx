import Link from "next/link";

const faqs = [
  {
    q: "Is this checker as thorough as the full GPA for Scholarships guide?",
    a: "No, and it isn't meant to be. This tool is a quick check — enter your GPA, get a likely tier, done. The full guide covers renewal thresholds, what happens if your GPA drops after winning an award, weighted vs unweighted GPA considerations, and a full strategic action plan. Use this checker for a fast read, and the guide when you need the complete picture.",
  },
  {
    q: "Why do the tiers here match the article exactly?",
    a: "So the two pages never disagree. The tier boundaries and GPA ranges on this page are pulled directly from the GPA for Scholarships article rather than calculated independently, specifically to avoid the two resources contradicting each other.",
  },
  {
    q: "Does this checker guarantee I'll get a scholarship at my tier?",
    a: "No — these are common tiers describing typical GPA expectations, not a guarantee from any specific provider. GPA is usually a screening threshold, not the only factor; test scores, essays, extracurriculars, financial need, and the specific program's own criteria all matter too.",
  },
  {
    q: "What if my GPA is a weighted high school GPA?",
    a: "Many scholarship committees recalculate transcripts onto a standard unweighted 4.0 scale for consistency across applicants from different schools. If you're using a weighted GPA above 4.0, convert to an unweighted equivalent first for the most realistic tier estimate — the full guide's section on weighted vs unweighted GPA explains why this distinction matters.",
  },
  {
    q: "My GPA is below 2.0 — are there really no scholarships available?",
    a: "There may still be options, particularly need-based aid, workforce development grants, or program-specific funding that weighs factors other than GPA more heavily, but they fall outside the common academic-merit tiers this checker covers. Focus on raising your GPA as the most direct way to open up more scholarship options.",
  },
  {
    q: "How often should I re-check my tier?",
    a: "Any time your GPA changes meaningfully — after each semester is a natural checkpoint, since your cumulative GPA is what most scholarship committees and renewal policies evaluate.",
  },
  {
    q: "Should I apply to scholarships above my current tier anyway?",
    a: "It's often still worth it, especially for scholarships that weigh essays, leadership, or financial need alongside GPA. A slightly-below-threshold GPA doesn't automatically disqualify you from every program in a higher tier — some committees consider a strong application holistically. Treat the tier as a useful expectation-setter, not a hard wall.",
  },
  {
    q: "Does a higher GPA tier always mean a bigger award?",
    a: "Generally yes in terms of what's typically available at each tier, but not as a strict rule for any individual scholarship. A 3.2 GPA applicant to a specific program with modest GPA requirements but generous funding could still receive more than a 3.9 GPA applicant to a highly competitive but smaller award. Tiers describe general availability, not a guaranteed award size.",
  },
  {
    q: "Should I check my tier before or after applying to scholarships?",
    a: "Before is more useful — knowing your likely tier ahead of time helps you target scholarships realistically and avoid spending application effort on programs well outside your current range, while still leaving room to reach slightly above your tier for the right opportunity.",
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

export default function ScholarshipGpaGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">A Quick Check, Not the Full Picture</h2>
        <p className="mt-4 leading-7">
          This tool exists for one purpose: to give you an instant sense of which scholarship GPA tier
          your current GPA is likely to fall into, without reading through a full article first. It&apos;s
          deliberately the &quot;quick check&quot; companion to StudyCalc&apos;s{" "}
          <Link href="/gpa-for-scholarships" className="text-cyan-400 hover:underline">
            GPA for Scholarships
          </Link>{" "}
          guide, which remains the deep-dive — covering renewal thresholds, what happens if your GPA
          drops after you&apos;ve already won an award, how weighted and unweighted GPAs are treated
          differently by selection committees, and a full strategic plan for raising your eligibility. If
          this quick check raises a question the tier label alone doesn&apos;t answer, that guide is where to
          go next.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Tiers (Matching the Full Guide)</h2>
        <div className="mt-6 space-y-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex justify-between items-center">
            <span className="font-semibold text-white">3.80 - 4.00</span>
            <span className="text-cyan-400">Full-Ride / Full-Tuition</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex justify-between items-center">
            <span className="font-semibold text-white">3.50 - 3.79</span>
            <span className="text-cyan-400">Competitive Merit Awards</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex justify-between items-center">
            <span className="font-semibold text-white">3.00 - 3.49</span>
            <span className="text-emerald-400">Standard Institutional Grants</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex justify-between items-center">
            <span className="font-semibold text-white">2.50 - 2.99</span>
            <span className="text-emerald-400">Need-Based Assistance</span>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex justify-between items-center">
            <span className="font-semibold text-white">2.00 - 2.49</span>
            <span className="text-slate-300">Community & Niche Foundation Grants</span>
          </div>
        </div>
        <p className="mt-4 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">These are common tiers, not guarantees.</strong> Individual
          scholarships set their own exact requirements — GPA is usually a screening threshold alongside
          other factors, not the sole deciding one.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Competitive GPA</h2>
        <p className="mt-4 leading-7">
          A student has a 3.65 GPA.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          3.65 falls in the 3.50-3.79 range → Competitive Merit Awards
        </div>
        <p className="mt-4 leading-7">
          This GPA typically opens the door to merit awards covering 50-75% of tuition, though the actual
          competition level depends heavily on the specific program.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: Near a Tier Boundary</h2>
        <p className="mt-4 leading-7">
          A student has a 2.95 GPA.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          2.95 falls in the 2.50-2.99 range → Need-Based Assistance
        </div>
        <p className="mt-4 leading-7">
          Just 0.05 points below the 3.0 cutoff for Standard Institutional Grants — a small, realistic
          improvement could move this student into the next tier up.
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
          <Link href="/gpa-for-scholarships" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA for Scholarships (Full Guide)</span>
            <p className="mt-1 text-sm text-slate-400">Renewal rules, weighted vs unweighted GPA, and a full action plan.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate your exact current GPA from your courses.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
