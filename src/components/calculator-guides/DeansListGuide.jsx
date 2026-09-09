import Link from "next/link";

const faqs = [
  {
    q: "Is 3.5 GPA the universal Dean's List requirement?",
    a: "No — it's a common convention, but individual schools set their own exact threshold. Some require 3.5, others 3.6 or 3.7, and some use a different scale entirely. Community colleges and graduate programs in particular often set their own separate criteria. Check your school's registrar page or student handbook for the exact number that applies to you.",
  },
  {
    q: "Why does the credit hour minimum matter?",
    a: "Most schools want Dean's List recognition to reflect a genuinely strong full course load, not just a couple of easy courses aced part-time. The common 12-credit minimum lines up with the standard full-time enrollment threshold — see the Semester Credit Load Checker for how that threshold works.",
  },
  {
    q: "Does Dean's List use my semester GPA or my cumulative GPA?",
    a: "Almost always semester GPA — it's meant to recognize outstanding performance in that specific term, not your overall academic career. Your cumulative GPA doesn't typically factor into Dean's List eligibility at all, though it may matter for other honors like graduating with distinction.",
  },
  {
    q: "What's the difference between Dean's List and Honor Roll?",
    a: "The terms are often used interchangeably, but some institutions distinguish them — for example, using \"Honor Roll\" for a slightly lower threshold and reserving \"Dean's List\" for the highest tier. Check your specific institution's terminology, since it isn't standardized nationally.",
  },
  {
    q: "Do pass/fail or withdrawn courses affect Dean's List eligibility?",
    a: "This varies significantly by school. Some exclude pass/fail courses from the GPA calculation used for Dean's List, while others require a minimum number of graded (not pass/fail) credits to qualify at all. Check your registrar's specific policy if you have any pass/fail courses on your transcript.",
  },
  {
    q: "Does Dean's List appear on my official transcript?",
    a: "At many schools, yes — it's often noted on the semester's transcript record and can be a meaningful addition to resumes, scholarship applications, and graduate school applications.",
  },
  {
    q: "What if I'm close but don't quite qualify this semester?",
    a: "Being close is a good sign — it usually means a small, achievable improvement (raising one grade, or picking up one additional credit) would get you there next semester. Dean's List eligibility resets every term, so there's always another chance.",
  },
  {
    q: "Does making the Dean's List come with any tangible benefits beyond recognition?",
    a: "At some schools, yes — it can factor into scholarship renewal decisions, honors program eligibility, or letters of recommendation from faculty. Even where there's no direct material benefit, it's a credential worth listing on a resume or graduate school application as evidence of strong, sustained academic performance.",
  },
  {
    q: "Can I qualify for the Dean's List in my very first semester?",
    a: "Yes — the semester GPA and credit hour requirements apply the same way regardless of how many semesters you've completed. A strong first semester is just as eligible as a strong senior-year semester, since standing is evaluated term by term rather than based on seniority.",
  },
  {
    q: "Does the credit hour minimum only count courses I completed, or everything I registered for?",
    a: "This varies by school, but many count only successfully completed, graded credits toward the minimum — a course you withdrew from partway through the term may not count. Check your registrar's specific policy if you dropped or withdrew from anything during the semester in question.",
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

export default function DeansListGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">What the Dean&apos;s List Recognizes</h2>
        <p className="mt-4 leading-7">
          The Dean&apos;s List is an academic honor most colleges and universities award each semester to
          students who combine a strong GPA with a substantial course load. It&apos;s meant to recognize
          consistent, well-rounded academic performance across a full semester rather than a single
          standout grade. This checker compares your semester GPA and credit hours against the most
          commonly used convention so you get an instant read on where you stand.
        </p>
        <p className="mt-4 leading-7">
          Unlike a single-course award or a scholarship tied to your cumulative record, Dean&apos;s List
          recognition is granted term by term — so a difficult semester in the past doesn&apos;t disqualify
          you from qualifying now, and a strong semester doesn&apos;t carry forward automatically either. Each
          term is its own fresh evaluation against the threshold.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The Common Threshold</h2>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Semester GPA ≥ 3.50 AND Credit Hours ≥ 12
          </p>
        </div>
        <p className="mt-4 leading-7 rounded-xl border border-amber-500/20 bg-amber-500/5 p-4">
          <strong className="text-amber-400">This varies by school.</strong> Some institutions use 3.6,
          3.7, or a different combination of GPA and credit requirements entirely. Treat this as a
          reference point and confirm the exact figure with your registrar or student handbook.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: Qualifying</h2>
        <p className="mt-4 leading-7">
          A student has a 3.7 semester GPA across 15 credit hours.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          3.7 ≥ 3.5 ✓ and 15 ≥ 12 ✓ → Qualifies
        </div>
        <p className="mt-4 leading-7">
          Both conditions are met, so this student clears the common Dean&apos;s List threshold for the
          semester.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: Close, But Not Quite</h2>
        <p className="mt-4 leading-7">
          A student has a 3.3 semester GPA across 15 credit hours.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          3.3 &lt; 3.5 (0.2 points short) — credit hours already sufficient
        </div>
        <p className="mt-4 leading-7">
          This student&apos;s credit load already clears the bar; only 0.2 GPA points stand between them and
          the common threshold — a genuinely achievable gap for a strong next semester.
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
            <p className="mt-1 text-sm text-slate-400">Calculate your exact semester GPA from your courses.</p>
          </Link>
          <Link href="/gpa-for-scholarships" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA for Scholarships</span>
            <p className="mt-1 text-sm text-slate-400">See what GPA tiers unlock merit-based funding.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
