import Link from "next/link";

const faqs = [
  {
    q: "Is 2.0 CGPA really the standard cutoff everywhere?",
    a: "It's a common convention at many US undergraduate institutions, but not universal. Some schools set a higher minimum for certain majors (nursing and engineering programs sometimes require 2.5 or higher), and graduate programs typically use a higher threshold, often 3.0. Your official academic catalog is the authoritative source for the exact number that applies to your program.",
  },
  {
    q: "What actually happens if my CGPA falls below the threshold?",
    a: "Policies vary by school, but commonly involve a defined period (often one semester) to bring your CGPA back up, sometimes alongside academic advising requirements or a reduced course load. This is a standard, common process that many students go through and recover from — it's a checkpoint, not a permanent label.",
  },
  {
    q: "Does one bad semester automatically affect my standing?",
    a: "Not necessarily — academic standing is usually based on your cumulative GPA across your entire record, not a single semester. A difficult term can lower your cumulative average, but the size of the effect depends on how many total credits you've completed — see the Semester GPA vs CGPA guide for why more completed credits mean any one semester moves the average less.",
  },
  {
    q: "Where can I find my school's exact policy?",
    a: "Your official academic catalog or student handbook is the definitive source. Your academic advisor's office can also explain exactly what applies to your program and what support is available if you have questions.",
  },
  {
    q: "Does credit hours completed affect my standing directly?",
    a: "The standing threshold itself is usually based purely on GPA, but credit hours completed provide useful context — a low GPA over a small number of credits has more room to recover than the same GPA over a much larger completed credit total, simply because there's more remaining coursework ahead to average in.",
  },
  {
    q: "What support is typically available if my GPA is below the threshold?",
    a: "Most schools offer resources such as academic advising, tutoring centers, writing centers, study skills workshops, and sometimes structured academic recovery programs. These exist specifically to help students in this situation — reaching out to your advisor is usually the first and most useful step.",
  },
  {
    q: "Is academic standing the same thing as financial aid eligibility?",
    a: "They're related but distinct. Financial aid programs often set their own Satisfactory Academic Progress requirements, which can include GPA thresholds, completion rate requirements, and maximum timeframes — these sometimes differ from your school's general academic standing policy. Check with your financial aid office separately if aid eligibility is a concern.",
  },
  {
    q: "How is academic standing different from being placed on probation?",
    a: "Academic standing is the broader status category; probation is typically a specific stage within it, applied after a CGPA falls below the threshold, often with a defined timeframe and conditions to return to good standing. Not every school below-threshold outcome is automatically labeled probation — terminology and processes vary, so check your specific institution's academic catalog for the exact terms it uses.",
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

export default function AcademicStandingGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What Academic Standing Means</h2>
        <p className="mt-4 leading-7">
          Academic standing is simply a school&apos;s way of tracking whether a student&apos;s cumulative GPA meets
          the institution&apos;s minimum expectation for continued enrollment in good standing. It&apos;s a routine
          administrative checkpoint, not a judgment of ability or potential — many successful students
          have crossed below a threshold at some point and recovered with time, support, and a plan.
        </p>
        <p className="mt-4 leading-7">
          This checker exists to give you a clear, calm answer to a simple question — where does my
          current cumulative GPA sit relative to the common threshold — without dressing the answer up in
          alarming language. Whether the result is comfortably above or currently below that line, the
          information itself is the same either way: a starting point for a conversation with your
          advisor, not a verdict.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Common Threshold</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Cumulative GPA ≥ 2.00
          </p>
        </div>
        <p className="mt-4 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">This is a commonly used threshold, not a universal one.</strong>{" "}
          Your institution&apos;s official policy may differ — check your academic catalog for the exact
          figure and process that applies to your program.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: Comfortably in Good Standing</h2>
        <p className="mt-4 leading-7">
          A student has a cumulative GPA of 3.1 across 60 completed credits.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          3.1 ≥ 2.0 → Good Standing
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: Below the Common Threshold</h2>
        <p className="mt-4 leading-7">
          A student has a cumulative GPA of 1.8 across 30 completed credits.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          1.8 &lt; 2.0 → Below Typical Threshold
        </div>
        <p className="mt-4 leading-7">
          With only 30 credits completed, this student has a substantial amount of coursework still
          ahead — plenty of room for a strong stretch of semesters to bring the cumulative average back
          up. Connecting with an academic advisor early is a practical, common next step.
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

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <p className="leading-7 text-slate-300">
          Whatever your current standing, many schools offer academic support resources — tutoring,
          advising, and study skills workshops among them. Checking in with your academic advisor is
          often the most useful first step, regardless of where your GPA currently sits.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Related Tools & Articles</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/semester-gpa-vs-cgpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Semester GPA vs CGPA</span>
            <p className="mt-1 text-sm text-slate-400">Understand how one semester affects your overall average.</p>
          </Link>
          <Link href="/how-to-raise-gpa-fast" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Raise Your GPA Fast</span>
            <p className="mt-1 text-sm text-slate-400">Practical strategies for improving your GPA.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
