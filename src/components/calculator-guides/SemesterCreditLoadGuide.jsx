import Link from "next/link";

const faqs = [
  {
    q: "Is 12 credits always the full-time cutoff?",
    a: "It's the most common threshold at US undergraduate institutions, but not universal. Some graduate programs set full-time status at 9 credits, and some community colleges or specific financial aid programs use different minimums. Always check your school's official catalog or your financial aid office for the number that applies to you.",
  },
  {
    q: "Why does full-time vs part-time status matter?",
    a: "It commonly affects financial aid eligibility, health insurance coverage under a parent's plan (in some cases), international student visa status, athletic eligibility, and housing eligibility at some schools. The stakes are often higher than just \"how busy is my semester,\" which is why it's worth confirming your exact status with your registrar rather than relying solely on a rough estimate.",
  },
  {
    q: "What counts as an overload, and do I need permission for it?",
    a: "Most schools consider 18 or more credits an overload. Many require a minimum GPA (often 3.0 or higher) and advisor or dean sign-off before you can register for an overloaded semester, partly to prevent students from overcommitting.",
  },
  {
    q: "Does a lighter courseload always mean a lighter workload?",
    a: "Not necessarily. A 12-credit semester with three demanding upper-level courses can be more time-consuming than a 15-credit semester with lighter electives. Credit hours measure a rough time-and-difficulty convention, not an exact workload guarantee — see the Credit Hour Estimator guide for how the underlying convention works.",
  },
  {
    q: "Can international students take fewer than 12 credits?",
    a: "Generally no, without special authorization — most F-1 visa holders in the US must maintain full-time enrollment each semester except under specific exceptions (final semester, documented medical reasons, or approved reduced course load). Check with your school's international student office before dropping below full-time.",
  },
  {
    q: "Do summer or winter sessions use the same thresholds?",
    a: "Often not — many schools use a different, usually lower, credit threshold for full-time status during shortened summer or winter terms, since the term itself is compressed. Check your institution's specific summer-term policy rather than assuming the standard semester thresholds apply.",
  },
  {
    q: "Does financial aid use the same 12-credit threshold as academic full-time status?",
    a: "Not always. Federal financial aid programs sometimes define full-time, three-quarter-time, and half-time enrollment using their own specific credit brackets, which can differ slightly from your school's academic full-time definition. Check with your financial aid office specifically if your aid package depends on your exact enrollment tier.",
  },
  {
    q: "Can my credit load status change mid-semester?",
    a: "Yes — dropping a course after the semester begins can shift you from full-time to part-time status if your remaining credits fall below the threshold, sometimes with financial aid or visa consequences. Most schools have an add/drop deadline after which dropping a course still counts toward your credit load for status purposes even if you receive a partial refund. Check with your registrar before dropping anything close to a threshold.",
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

export default function SemesterCreditLoadGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why Credit Load Status Matters</h2>
        <p className="mt-4 leading-7">
          The number of credit hours you&apos;re registered for each semester isn&apos;t just a measure of how busy
          you&apos;ll be — it determines your official enrollment status, which in turn affects financial aid
          eligibility, insurance coverage, visa compliance for international students, and whether you
          need special permission to register at all. This checker gives you an instant read against the
          common US convention, so you know roughly where you stand before checking the specifics with
          your registrar.
        </p>
        <p className="mt-4 leading-7">
          This matters most at the two edges of the range: students hovering just below 12 credits who
          might be able to add a small course to reach full-time status, and students considering pushing
          past 17 or 18 credits who should know in advance that they may need advisor sign-off before
          registration will even go through. Knowing which zone you&apos;re in before you finalize your
          schedule can save a trip back to the registrar&apos;s office later.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Common Thresholds</h2>
        <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="rounded-xl border border-sky-500/20 bg-slate-950 p-5">
            <h3 className="font-bold text-sky-400">Below 12 Credits</h3>
            <p className="mt-2 text-slate-400">Part-time status. May affect financial aid and visa compliance.</p>
          </div>
          <div className="rounded-xl border border-cyan-500/20 bg-slate-950 p-5">
            <h3 className="font-bold text-cyan-400">12-17 Credits</h3>
            <p className="mt-2 text-slate-400">Standard full-time status at most US institutions.</p>
          </div>
          <div className="rounded-xl border border-amber-500/20 bg-slate-950 p-5">
            <h3 className="font-bold text-amber-400">18+ Credits</h3>
            <p className="mt-2 text-slate-400">Overload — often requires advisor or dean approval.</p>
          </div>
        </div>
        <p className="mt-6 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">These are the common US convention, not a universal rule.</strong>{" "}
          Exact thresholds vary by institution, degree level, and program — always confirm with your own
          school&apos;s official policy before relying on a specific number for financial aid or visa purposes.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Typical Full-Time Semester</h2>
        <p className="mt-4 leading-7">
          A student registers for five 3-credit courses: 3 + 3 + 3 + 3 + 3 = 15 credits.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          15 credits → within the 12-17 range → Full-Time
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: An Overloaded Semester</h2>
        <p className="mt-4 leading-7">
          A student adds an extra course on top of a normal course load: 3 + 3 + 3 + 3 + 3 + 4 (a lab
          course) = 19 credits.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          19 credits → 18 or above → Overload
        </div>
        <p className="mt-4 leading-7">
          At most schools, this student would need advisor approval before this course load could be
          finalized on their registration. It&apos;s worth flagging this early in the registration process
          rather than discovering it at the last minute — some schools process overload approvals slowly,
          which can affect whether a student secures a seat in a popular course before it fills.
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
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate your GPA once you know your credit hours.</p>
          </Link>
          <Link href="/how-to-raise-gpa-fast" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Raise Your GPA Fast</span>
            <p className="mt-1 text-sm text-slate-400">Strategies for improving your GPA, including course load decisions.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
