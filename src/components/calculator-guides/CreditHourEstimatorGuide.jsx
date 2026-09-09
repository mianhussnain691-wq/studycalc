import Link from "next/link";

const faqs = [
  {
    q: "Where does the 'Carnegie unit' convention come from?",
    a: "It dates back to a standard adopted in the early 1900s in the US to measure academic work consistently across institutions. One credit hour was originally defined as roughly one hour of classroom instruction plus about two hours of associated outside preparation per week, sustained across a full semester (typically 15 weeks). Most US colleges still use some version of this convention today.",
  },
  {
    q: "Does this apply to lab courses and studio courses too?",
    a: "Not directly — labs, studios, and some practicum courses often use a different ratio, commonly awarding one credit hour for two or three hours of contact time rather than one, since lab time is considered more self-contained and requires less additional outside preparation per hour. Check your specific course's syllabus or catalog listing for its actual credit-to-contact-hour ratio.",
  },
  {
    q: "Is 3 hours of total weekly work per credit hour realistic?",
    a: "It's a long-standing planning estimate, not a guarantee. Actual time varies enormously by student, course difficulty, and how efficiently someone studies. Treat the 3-hour figure as a general planning benchmark for how much total time a course is expected to require, not a precise prediction for any specific student.",
  },
  {
    q: "Why do some institutions use different ratios?",
    a: "Accreditation standards give institutions some flexibility in defining a credit hour, as long as it reflects a reasonable measure of student work. Online courses, accelerated terms, and non-traditional program formats in particular sometimes use adjusted definitions. Always check your specific institution's official credit hour policy for its exact definition.",
  },
  {
    q: "How does this relate to full-time student status?",
    a: "Once you know how many credit hours a course represents, you can add those up across all your courses to see your total credit load for the semester — see the Semester Credit Load Checker for how that total maps to part-time, full-time, and overload status.",
  },
  {
    q: "Can I use this to figure out how much time a semester will actually take?",
    a: "As a rough planning tool, yes — multiply your total credit hours by 3 to estimate total weekly academic time commitment (class plus expected outside work) across your whole course load, which can help with balancing work, activities, and coursework realistically.",
  },
  {
    q: "Does an online course follow the same credit hour convention?",
    a: "Often, but not always exactly. Accreditors generally require online courses to demonstrate an equivalent amount of student work to their in-person counterparts, but the format of that work (discussion posts, recorded lectures, asynchronous assignments) doesn't map onto \"contact hours\" as cleanly as a scheduled lecture does. Check your specific course's syllabus for its stated credit hour value rather than trying to estimate it from a weekly schedule.",
  },
  {
    q: "Why does this matter when planning a work or activity schedule alongside classes?",
    a: "Because the visible portion of a class — the hours it meets each week — is only part of the real time commitment. A 15-credit course load isn't just 15 hours of class time; under the common convention it implies roughly 45 hours of total academic work per week once outside study is included, which is worth factoring in honestly before committing to a part-time job or heavy extracurricular schedule on top of it.",
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

export default function CreditHourEstimatorGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Common US Convention</h2>
        <p className="mt-4 leading-7">
          In the US, a credit hour is traditionally defined around a rough rule of thumb: one hour of
          in-class instruction per week, paired with an expectation of roughly two hours of outside
          preparation for every hour spent in class, sustained over a full semester. This convention —
          sometimes called the Carnegie unit — is why a class that meets three hours a week is commonly a
          3-credit course, with an expected 6 additional hours of outside work bringing the total weekly
          time commitment to around 9 hours.
        </p>
        <p className="mt-4 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">This is the most common US convention, not universal.</strong>{" "}
          Lab and studio courses often use a different ratio, and institutions have some flexibility in
          how they define a credit hour. Check your school&apos;s official policy or a specific course&apos;s
          syllabus for the exact figure that applies.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Formula</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Credit Hours ≈ Weekly Class Hours
          </p>
          <p className="mt-3 text-lg font-bold text-cyan-400 font-mono">
            Expected Outside Study = Weekly Class Hours × 2
          </p>
        </div>
        <p className="mt-4 leading-7">
          Under this convention, the credit hour count matches the weekly class time directly — the
          two-hours-per-credit expectation shows up as additional outside study time, not as extra
          credit hours themselves.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Standard Lecture Course</h2>
        <p className="mt-4 leading-7">
          A course meets 3 hours per week in lecture.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          Credit hours ≈ 3{"\n"}
          Expected outside study: 3 × 2 = 6 hours/week{"\n"}
          Total weekly commitment: 3 + 6 = 9 hours/week
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Longer Seminar</h2>
        <p className="mt-4 leading-7">
          A course meets 5 hours per week (a common pattern for language courses or intensive seminars).
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          Credit hours ≈ 5{"\n"}
          Expected outside study: 5 × 2 = 10 hours/week{"\n"}
          Total weekly commitment: 5 + 10 = 15 hours/week
        </div>
        <p className="mt-4 leading-7">
          A heavier weekly class-time load scales up both the credit hour estimate and the expected
          outside study time proportionally.
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
          <Link href="/semester-credit-load-checker" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Semester Credit Load Checker</span>
            <p className="mt-1 text-sm text-slate-400">See your part-time, full-time, or overload status.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate your GPA once you know your credit hours.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
