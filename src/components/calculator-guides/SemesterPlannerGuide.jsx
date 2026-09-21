import Link from "next/link";

const faqs = [
  {
    q: "How is this different from using the individual calculators separately?",
    a: "This dashboard runs the same target-CGPA formula and the same credit-load classification as the Target CGPA Calculator and Semester Credit Load Checker, then combines both results — plus a plain-language summary — in one pass. You fill in your numbers once instead of twice, and don't have to connect the two answers yourself.",
  },
  {
    q: "Why is there an optional GPA goal field?",
    a: "It's for comparing your own personal ambition against the GPA that's actually required. If you're aiming for a 3.8 but only need a 3.4, you'll see you're ahead of pace. If your goal falls short of what's required, you'll see that too — before the semester starts, not after finals.",
  },
  {
    q: "Which formula does this use for the GPA I need?",
    a: "The exact same one as the Target CGPA Calculator: (target CGPA × (credits completed + this semester's credits) − current CGPA × credits completed) ÷ this semester's credits. Nothing new was invented for this dashboard — see the Target CGPA Calculator's guide for a full worked breakdown of the math.",
  },
  {
    q: "Does this save my numbers anywhere?",
    a: "No. Everything runs in your browser and resets the moment you leave the page or hit Reset — nothing is stored or sent anywhere. Use the Share Result button if you want to save or send the summary to yourself.",
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

export default function SemesterPlannerGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What This Dashboard Combines</h2>
        <p className="mt-4 leading-7">
          Planning a semester usually means checking two or three separate things: the GPA you need to
          stay on pace for your CGPA goal, and whether your credit load counts as full-time, part-time, or
          an overload that needs advisor approval — and, if you already have a personal GPA goal in mind,
          whether that goal is actually enough. This dashboard runs all of that from the same five numbers
          and puts the results side by side, along with one plain-language sentence that ties them
          together, so you get the full picture in a single pass instead of jumping between tools and
          doing the mental math yourself.
        </p>
        <p className="mt-4 leading-7">
          Nothing here is a new formula — it deliberately reuses the exact calculations already built and
          verified in the three tools it's based on, just presented together with the context each one is
          missing on its own.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How Each Piece Works</h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-bold text-cyan-400">GPA Needed This Semester</h3>
            <p className="mt-2 text-slate-400 leading-6">
              Uses your current CGPA, total credits completed, target CGPA, and this semester&apos;s credit
              hours to solve for the average GPA you need this term — the same formula as the{" "}
              <Link href="/target-cgpa-calculator" className="text-cyan-400 hover:underline">
                Target CGPA Calculator
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-bold text-cyan-400">Credit Load Status</h3>
            <p className="mt-2 text-slate-400 leading-6">
              Classifies this semester&apos;s credit hours as part-time, full-time, or overload using the
              same thresholds as the{" "}
              <Link href="/semester-credit-load-checker" className="text-cyan-400 hover:underline">
                Semester Credit Load Checker
              </Link>{" "}
              (below 12, 12-17, and 18+).
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-bold text-cyan-400">Your Own Goal, Compared</h3>
            <p className="mt-2 text-slate-400 leading-6">
              If you enter a personal GPA goal for the semester, the dashboard tells you whether it clears
              the bar you actually need — useful if you&apos;re aiming higher than required, or if your goal
              needs adjusting to stay on track for your CGPA target.
            </p>
          </div>
        </div>
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
        <h2 className="text-2xl font-bold text-white">Just Need One Piece?</h2>
        <p className="mt-4 leading-7">
          If you only need one of these calculations on its own, without filling in all five fields, use
          the individual tools directly:
        </p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/target-cgpa-calculator"
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition"
          >
            <span className="font-semibold text-white">Target CGPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Just the GPA-needed-going-forward calculation.</p>
          </Link>
          <Link
            href="/target-gpa-calculator"
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition"
          >
            <span className="font-semibold text-white">Target GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">The single-semester version of the same formula.</p>
          </Link>
          <Link
            href="/semester-credit-load-checker"
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition"
          >
            <span className="font-semibold text-white">Semester Credit Load Checker</span>
            <p className="mt-1 text-sm text-slate-400">Just the part-time / full-time / overload check.</p>
          </Link>
          <Link
            href="/semester-gpa-vs-cgpa"
            className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition"
          >
            <span className="font-semibold text-white">Semester GPA vs CGPA</span>
            <p className="mt-1 text-sm text-slate-400">The difference between the two, explained.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
