import Link from "next/link";

export const metadata = {
  title: "How Grading Scales Work: Pass/Fail Thresholds & Grade Bands Explained",
  description:
    "How academic grading scales actually work — pass/fail thresholds, honor roll and probation cutoffs, curved vs absolute grading, and why different schools grade differently.",
  keywords: [
    "how grading scales work",
    "pass fail threshold",
    "grading scale explained",
    "curved grading vs absolute grading",
    "honor roll gpa requirement",
    "academic probation gpa threshold",
    "what does grading scale mean",
    "norm referenced vs criterion referenced grading",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/grade-scale-explained",
  },
  openGraph: {
    title: "How Grading Scales Work: Pass/Fail Thresholds & Grade Bands Explained",
    description:
      "The concepts behind grading scales — pass/fail thresholds, curved vs absolute grading, and honor roll/probation cutoffs.",
    url: "https://www.studycalc.co/grade-scale-explained",
    siteName: "StudyCalc",
    type: "article",
  },
};

const faqs = [
  {
    q: "What's the difference between a curved grading scale and an absolute one?",
    a: "An absolute scale sets fixed cutoffs in advance — say, 90% is always an A no matter what. A curved scale adjusts grades based on how the whole class performed, so the cutoff for an A might shift depending on the average score that term. Most standard courses use absolute scales; some notoriously hard courses (advanced STEM, law school) lean on curves.",
  },
  {
    q: "Why do different schools have different passing thresholds?",
    a: "There's no universal rule — passing is usually set locally by the institution or country's education board. Some set it at 60%, others at 50%, others at 40% under different scale conventions entirely. Always check your specific school's published threshold rather than assuming a number you saw elsewhere.",
  },
  {
    q: "What does 'norm-referenced' grading actually mean?",
    a: "Norm-referenced grading evaluates you relative to your classmates rather than against a fixed standard — it's the basis of curved grading. Criterion-referenced grading, the more common approach, evaluates you against a fixed, predetermined standard regardless of how anyone else performed.",
  },
  {
    q: "What GPA do you need for the Dean's List or Honor Roll?",
    a: "It varies by school, but a common range is 3.5-3.75+ for a single semester, sometimes with a minimum course load requirement (often at least 12 credit hours). Always check your specific institution's published policy rather than assuming a standard number.",
  },
  {
    q: "What GPA triggers academic probation?",
    a: "Most US universities set the line at a cumulative GPA below 2.00, though the exact threshold and how many probationary semesters you're given before suspension varies by school.",
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

export default function GradeScaleExplained() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            Academic Evaluation Systems
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How Grading Scales Actually Work
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
            Every school has "a grading scale," but what that actually means — where the passing line sits, whether your grade depends on a fixed standard or your classmates' performance, what triggers honors or probation — varies more than most students realize. This guide covers the concepts behind grading scales, not just one specific conversion table.
          </p>
        </header>

        <div className="space-y-10 text-base leading-relaxed">

          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. What a "Grading Scale" Actually Refers To</h2>
            <p>
              A grading scale is the set of rules a school uses to turn raw performance — a test score, an assignment, a semester of work — into a grade someone else can interpret. That sounds simple, but there are actually a few different design decisions bundled into "a grading scale" that most students never think about: where the passing line sits, whether the scale is fixed or shifts with the class, and how many tiers separate a bare pass from a top grade.
            </p>
            <p className="mt-4">
              If you're looking for the exact percentage-to-letter-grade lookup table, that lives on our{" "}
              <Link href="/letter-grade-to-percent-guide" className="text-cyan-400 hover:underline">
                letter grade to percentage guide
              </Link>
              . If you want the 4.0 / 5.0 / 10.0 point-scale breakdown specifically, see{" "}
              <Link href="/gpa-scale-explained" className="text-cyan-400 hover:underline">
                GPA scale explained
              </Link>
              . This page covers the concepts underneath both of those.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              2. Absolute Grading vs. Curved Grading
            </h2>
            <p>
              Most classes use <strong>absolute (criterion-referenced) grading</strong> — the cutoffs are set in advance and don't move. If the syllabus says 90% is an A, that's true whether the whole class scored above 90% or the whole class failed. You're being measured against a fixed standard, not against each other.
            </p>
            <p className="mt-3">
              Some courses, especially notoriously difficult ones in STEM fields or professional programs like law school, use <strong>curved (norm-referenced) grading</strong> instead. Here, your grade depends partly on how the class as a whole performed. If an exam is brutally hard and the class average is 45%, an instructor might set the A cutoff at 70% instead of 90%, because the raw difficulty of that specific test gets factored back out.
            </p>
            <p className="mt-3">
              Neither approach is inherently better — they solve different problems. Absolute grading is predictable and transparent. Curved grading protects students from a test that turned out to be unexpectedly hard or a professor with unusually strict standards, but it also means you genuinely can't know your grade until everyone else's scores are in.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              3. Where the Passing Line Actually Sits
            </h2>
            <p>
              There's no single universal passing threshold — it's genuinely different by country, and often by individual institution within the same country. Many US high schools and universities set the line around 60%. Several South Asian and Middle Eastern education systems set it lower, often around 33-40% for board exams specifically. The UK's degree classification system doesn't use a single "pass/fail" percentage at all in the same way — it uses classification bands (First, 2:1, 2:2, Third) with their own separate cutoffs.
            </p>
            <p className="mt-3">
              The practical takeaway: never assume a passing threshold you learned at one school applies at another. Check the specific institution's published policy, especially if you're transferring, studying abroad, or evaluating a transcript from a system you're not familiar with.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              4. What Sits Above and Below the Middle of the Scale
            </h2>
            <p>
              Grading scales aren't just about pass vs. fail — most schools define named thresholds above and below the average that trigger something real:
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6 text-sm">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
                <h3 className="font-bold text-emerald-400">Above average: recognition tiers</h3>
                <p className="text-slate-400">
                  Dean's List, Honor Roll, and Latin Honors (Cum Laude and above) are all threshold-based — cross a specific GPA line, usually in the 3.5+ range, and you qualify. These are almost always based on semester or cumulative GPA, not a raw percentage.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
                <h3 className="font-bold text-red-400">Below average: warning tiers</h3>
                <p className="text-slate-400">
                  Academic probation typically triggers below a 2.00 cumulative GPA at most US institutions, giving students a set number of semesters to recover before facing suspension. The exact cutoff and grace period vary by school.
                </p>
              </div>
            </div>
            <p>
              For the exact math behind how a semester's grades move your cumulative standing, see our{" "}
              <Link href="/semester-gpa-vs-cgpa" className="text-cyan-400 hover:underline">
                semester GPA vs CGPA guide
              </Link>
              .
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              5. Why Weighted Scales Exist at All
            </h2>
            <p>
              Some high schools add extra points for harder classes — Honors, AP, IB — so a demanding course load isn't penalized relative to an easier one. This is a design choice on top of the base grading scale, not a separate scale entirely, and it's genuinely worth understanding in detail if you're a high schooler weighing course selection or comparing GPAs. We cover the full mechanics, with worked examples, in our dedicated{" "}
              <Link href="/weighted-gpa-vs-unweighted-gpa" className="text-cyan-400 hover:underline">
                weighted vs. unweighted GPA guide
              </Link>
              .
            </p>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Looking for a Specific Conversion?</h3>
            <p className="text-slate-400 text-sm mb-4">
              This page covers concepts — for exact number lookups, use one of these instead:
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/letter-grade-to-percent-guide" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                Letter Grade to Percentage
              </Link>
              <Link href="/gpa-scale-explained" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                GPA Scale (4.0/5.0/10.0)
              </Link>
              <Link href="/gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                GPA Calculator
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <p className="text-sm text-slate-400 mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}