import Link from "next/link";

export const metadata = {
  title: "How LSAC Recalculates Your GPA for Law School (2026-2027 Rules)",
  alternates: { canonical: "https://www.studycalc.co/how-lsac-calculates-your-gpa" },
  openGraph: {
    title: "How LSAC Recalculates Your GPA for Law School (2026-2027 Rules)",
    description: "Why your CAS GPA can look different from your transcript GPA — the 4.33 scale, the repeated-course rule, and a free LSAC GPA calculator.",
    url: "https://www.studycalc.co/how-lsac-calculates-your-gpa",
    siteName: "StudyCalc",
    type: "article",
  },
  keywords: [
    "how lsac calculates gpa",
    "lsac gpa recalculation",
    "cas gpa vs transcript gpa",
    "lsac gpa scale 4.33",
    "lsac repeated course gpa",
    "law school gpa calculation",
  ],
};

const faqs = [
  {
    q: "Does LSAC forgive repeated classes the way my school does?",
    a: "No. Whatever grade forgiveness or replacement policy your school applies to your own transcript, LSAC's CAS process doesn't inherit it. Every graded attempt at a course counts separately in your CAS GPA, including ones your school has already \"replaced\" on its own records.",
  },
  {
    q: "Can my LSAC GPA be higher than 4.0?",
    a: "Yes — this is one of the more pleasant surprises in the process. Because CAS values A+ at 4.33 rather than capping it at 4.0, a transcript with several A+ grades can produce a CAS GPA above 4.0. It's not a bug or a rare edge case; it's just how the scale is built.",
  },
  {
    q: "Does a withdrawal (W) hurt my LSAC GPA?",
    a: "A plain, clean W is typically excluded from the GPA calculation entirely — it doesn't count as an attempt with a grade, so it neither helps nor hurts the number. A withdrawal that your school codes as a punitive or failing withdrawal (sometimes shown as WF) is a different story and is generally treated as a zero, just like an F. The distinction between the two matters a lot and is easy to miss.",
  },
  {
    q: "Do community college classes count?",
    a: "Yes. Any undergraduate coursework completed before you earned your first bachelor's degree counts toward your CAS GPA, regardless of which institution granted the credit — community college, a study-abroad program, or a transfer course from another four-year school all count the same way.",
  },
  {
    q: "Does graduate school GPA affect my LSAC GPA?",
    a: "No — coursework completed after you've earned your first bachelor's degree, including graduate coursework, is reported separately and does not factor into your primary cumulative CAS GPA the way your undergraduate record does.",
  },
  {
    q: "What GPA is competitive for law school?",
    a: "It depends heavily on which schools you're targeting and your LSAT score, which is weighed alongside GPA rather than in isolation. There's no single number that applies across all programs — a GPA that's solidly competitive at one school may be below another's typical range, so research your specific target schools' recent admitted-student profiles rather than relying on one universal benchmark.",
  },
  {
    q: "Will my LSAC GPA match the GPA my school reports on my diploma or transcript?",
    a: "Often not exactly. Between the standardized 4.33 scale, the inclusion of every repeated attempt, and the quarter-to-semester credit conversion, small (and sometimes not-so-small) differences between your official transcript GPA and your CAS GPA are common and expected, not a sign something went wrong.",
  },
  {
    q: "Does LSAC show just one GPA number on my report?",
    a: "No — your CAS report includes more than a single figure. Alongside your overall cumulative GPA, it typically breaks results down by year and by institution attended, giving law schools a more detailed picture of your academic record than one number alone would.",
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
  headline: "How LSAC Recalculates Your GPA for Law School (2026-2027 Rules)",
  description: "Why your CAS GPA can look different from your transcript GPA — the 4.33 scale, the repeated-course rule, and the W vs WF distinction.",
  author: { "@type": "Organization", name: "StudyCalc", url: "https://www.studycalc.co" },
  publisher: { "@type": "Organization", name: "StudyCalc", logo: { "@type": "ImageObject", url: "https://www.studycalc.co/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.studycalc.co/how-lsac-calculates-your-gpa" },
};

export default function HowLsacCalculatesGpaPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            Pre-Law & Law School Admissions
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            How LSAC Recalculates Your GPA for Law School
          </h1>
        </header>

        <div className="space-y-10 text-base leading-relaxed">

          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
            <p>
              Two things surprise almost every applicant the first time they look into this: LSAC doesn&apos;t
              use your school&apos;s GPA scale, and it doesn&apos;t forgive a repeated class the way your
              transcript might. Instead, LSAC&apos;s Credential Assembly Service (CAS) rebuilds your GPA from
              scratch on its own 4.33 scale, using every graded attempt on your record. Want the number
              itself rather than the explanation first? The{" "}
              <Link href="/lsac-law-school-gpa-calculator" className="text-cyan-400 hover:underline">
                LSAC Law School GPA Calculator
              </Link>{" "}
              runs this same math from your actual course list.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              CAS GPA vs. Your Transcript GPA
            </h2>
            <p>
              These are genuinely two different numbers, calculated two different ways, and it&apos;s worth
              seeing the contrast plainly before getting into why:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Factor</th>
                    <th className="p-3 border-r border-slate-800">Your Transcript GPA</th>
                    <th className="p-3">Your CAS (LSAC) GPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Top grade value</td>
                    <td className="p-3 border-r border-slate-800">Varies by school (often 4.0 or 4.3)</td>
                    <td className="p-3 text-cyan-400 font-bold font-mono">A+ = 4.33</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Repeated courses</td>
                    <td className="p-3 border-r border-slate-800">Often replaced or forgiven</td>
                    <td className="p-3 text-cyan-400 font-bold">Every attempt counts</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Quarter-hour credits</td>
                    <td className="p-3 border-r border-slate-800">Reported as-is</td>
                    <td className="p-3 text-cyan-400 font-bold">Converted × 0.67</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              The 4.33 Scale, in Full
            </h2>
            <p>
              CAS converts every letter grade onto a standardized scale before calculating anything. The
              full conversion: A+ = 4.33, A = 4.00, A- = 3.70, B+ = 3.30, B = 3.00, B- = 2.70, C+ = 2.30,
              C = 2.00, C- = 1.70, D+ = 1.30, D = 1.00, D- = 0.70, F = 0.00. Note the top of the scale — A+
              at 4.33, not a flat 4.0. This is exactly why a strong transcript full of A+ grades can
              produce a CAS GPA that reads above 4.0, which looks unusual the first time you see it but is
              simply the scale working as designed.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              The Repeated-Course Rule, With a Real Example
            </h2>
            <p>
              Here&apos;s where the CAS and transcript numbers can diverge the most. Say a student failed
              Torts (3 credits, F) in their second year, retook it the following semester, and earned an A.
              Their school&apos;s own transcript applies grade replacement, so the official record shows only
              the A — the F doesn&apos;t appear in the school&apos;s own GPA math at all. Across the rest of their
              60 total credits, this produces a clean 3.50 transcript GPA.
            </p>
            <p>
              LSAC doesn&apos;t apply that replacement. It adds the original F back in as its own separate
              3-credit attempt, worth zero quality points, alongside everything else:
            </p>
            <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
              Transcript: 60 credits × 3.50 GPA = 210 quality points{"\n"}
              LSAC adds the original F: 63 credits, still 210 quality points{"\n"}
              CAS GPA = 210 ÷ 63 = 3.33
            </div>
            <p>
              A 3.50 on the school&apos;s own transcript becomes a 3.33 CAS GPA — not because anything was
              miscalculated, but because LSAC is including an attempt the student&apos;s own school chose to
              drop.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              The W vs. WF Distinction (Easy to Miss)
            </h2>
            <p>
              This single detail trips up more applicants than almost anything else in the process. A
              plain <strong>W</strong> — a clean withdrawal, with no grade attached — is generally excluded
              from the GPA calculation entirely. It shows up on your CAS report, but it doesn&apos;t contribute
              any quality points or credits to the math, so it neither helps nor hurts your number.
            </p>
            <p>
              A <strong>WF</strong> (withdrew failing) or a similarly punitive withdrawal notation is a
              completely different case. Because it functions as a failing grade rather than a clean exit
              from the course, it&apos;s converted to zero — the same treatment an outright F receives. The
              same logic applies to other failure-style notations: Incomplete/Fail, Unsatisfactory, and
              No Credit/Fail all zero out, even if your own institution officially treats them as
              &quot;nonpunitive.&quot; If you have any withdrawal on your record, it&apos;s worth checking exactly how
              your school coded it, because a W and a WF can land very differently on your CAS GPA despite
              looking similar at a glance.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Quarter-Hour to Semester-Hour Conversion
            </h2>
            <p>
              If any of your coursework was taken under a quarter system rather than semesters, CAS
              converts those credits before including them, using a standard multiplier:
            </p>
            <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
              Semester Hours = Quarter Hours × 0.67
            </div>
            <p>
              A 5-quarter-hour course converts to 5 × 0.67 = 3.35 semester hours for GPA-weighting
              purposes. This keeps credit weight consistent across students who attended quarter-system
              and semester-system schools, rather than treating every course as if it carried equal weight
              regardless of the underlying academic calendar.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              What&apos;s Excluded From the Calculation
            </h2>
            <p>
              A few categories of coursework don&apos;t factor into your CAS GPA math at all, even though
              they may still appear on your report:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Post-bachelor&apos;s coursework.</strong> Anything completed after you earned your
                first bachelor&apos;s degree, including graduate school, is reported separately and doesn&apos;t
                feed into your primary undergraduate cumulative GPA.
              </li>
              <li>
                <strong>Pass/fail courses.</strong> A course graded only Pass or Fail (with no letter grade
                or Pass grades excluded) has no grade point to include and is left out of the calculation.
              </li>
              <li>
                <strong>Audits and clean withdrawals.</strong> An audited course carries no grade to
                convert, and a plain W is excluded as covered above — both remain visible on your report
                without affecting the number.
              </li>
            </ul>
          </section>

          <section className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
            <h2 className="text-xl font-bold text-amber-400 mb-2">
              2026-2027 Timely Update: Dual-Enrollment Credits
            </h2>
            <p>
              For the 2026-2027 application cycle, dual-enrollment coursework completed while still in high
              school is still included in your CAS GPA calculation the same way any other undergraduate
              credit would be. That is scheduled to change starting with the 2027-2028 cycle, when
              dual-enrollment credits will be excluded from the calculation going forward. If you&apos;re
              applying in the current cycle, this doesn&apos;t change anything for you yet — but it&apos;s worth
              knowing about if your timeline stretches into next year&apos;s cycle.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              If Your CAS GPA Comes Out Lower Than You Expected
            </h2>
            <p>
              A CAS GPA below what your own transcript shows is common, not a red flag — it&apos;s usually just
              the repeated-course rule or a credit conversion doing exactly what it&apos;s designed to do. A
              couple of realistic, well-established paths forward if your number is lower than you&apos;d like:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>The GPA addendum.</strong> Most law school applications include an optional
                addendum where you can briefly explain specific circumstances behind a lower grade or
                semester — an illness, a family situation, or a rough initial adjustment to college. This
                is a normal, expected part of the process for many applicants, not an admission of failure.
              </li>
              <li>
                <strong>Leaning on your LSAT score.</strong> Admissions committees weigh GPA and LSAT
                together, not GPA alone, and a strong LSAT score is a well-documented way to offset a
                softer GPA — often called being a &quot;splitter&quot; in admissions discussions. It&apos;s a genuinely
                viable strategy, not a consolation prize.
              </li>
            </ul>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Calculate Your Estimated CAS GPA Now</h3>
            <p className="text-slate-400 text-sm mb-4">
              See where your own coursework lands using the same 4.33-scale, every-attempt-counts method.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/lsac-law-school-gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                LSAC Law School GPA Calculator
              </Link>
              <Link href="/gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                GPA Calculator
              </Link>
              <Link href="/how-to-calculate-gpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                How to Calculate GPA
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
