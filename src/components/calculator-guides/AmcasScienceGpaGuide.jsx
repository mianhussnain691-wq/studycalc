import Link from "next/link";

const faqs = [
  {
    q: "What does BCPM stand for?",
    a: "Biology, Chemistry, Physics, and Math. AMCAS classifies every undergraduate course you report into either the BCPM category or the AO (All Other) category, and your science GPA is calculated from BCPM courses only, separately from your overall GPA across all courses.",
  },
  {
    q: "Why do medical schools care about BCPM GPA separately from overall GPA?",
    a: "It's considered a more direct signal of readiness for the science-heavy medical school curriculum than overall GPA alone. A strong overall GPA propped up by non-science electives reads very differently to an admissions committee than the same overall GPA built on a demanding science course load — BCPM GPA isolates that specific signal.",
  },
  {
    q: "Is A+ really capped at 4.0 on AMCAS, even though some transcripts show A+ as higher?",
    a: "Yes — this is the single most common point of confusion. Many undergraduate transcripts award A+ a value above 4.0 (4.3 or 4.33 is common), but AMCAS recalculates every grade onto its own standardized scale, where A+ and A both equal exactly 4.0. This is different from LSAC's scale for law school applications, which does allow 4.33 for A+ — the two systems are genuinely different, not just labeled differently.",
  },
  {
    q: "Do AACOMAS and TMDSAS use the exact same rules as AMCAS?",
    a: "They're similar but not identical. AACOMAS (for osteopathic medical schools) and TMDSAS (Texas schools) each maintain their own course classification and recalculation rules, with some differences in how certain courses are categorized or how repeated courses are handled. This calculator follows the AMCAS standard specifically, since it's the most widely used system — always verify against your target application service's own guidelines.",
  },
  {
    q: "If I retake a course, does the old grade get replaced?",
    a: "No — this surprises many students. Unlike some undergraduate institutions' own GPA calculations, AMCAS includes every attempt at a course separately; the original grade is not dropped or averaged out when you retake it. Both the original D and the retaken A, for example, count fully and separately toward your AMCAS GPA.",
  },
  {
    q: "Is this calculator's result my official AMCAS GPA?",
    a: "No — treat it as a close, unofficial estimate. Your official AMCAS GPA is calculated only when AMCAS itself processes your actual transcripts, which involves verifying course classifications and applying rules more precisely than a self-service calculator can replicate. Use this tool to track your progress and plan your course load, not as a substitute for AMCAS's official calculation.",
  },
  {
    q: "Does a Pass/Fail course affect my AMCAS GPA?",
    a: "Generally, AMCAS excludes Pass/Fail courses from GPA calculations, since there's no letter grade to convert to a grade point. This calculator doesn't include a Pass/Fail option for that reason — leave ungraded courses out of your entries entirely.",
  },
  {
    q: "Should international coursework be included?",
    a: "AMCAS has specific rules for converting and including international coursework that go beyond a simple letter-grade lookup. This calculator is built around the standard US letter-grade scale — for international coursework, consult AMCAS's official guidelines directly rather than estimating here.",
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

export default function AmcasScienceGpaGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How AMCAS Calculates GPA</h2>
        <p className="mt-4 leading-7">
          AMCAS (the American Medical College Application Service) doesn&apos;t simply read the GPA off your
          transcript — it reclassifies every course you report and recalculates your GPA on its own
          standardized 4.0 scale. Two GPAs come out of this process: your <strong>overall GPA</strong>{" "}
          (every course you&apos;ve taken) and your <strong>BCPM GPA</strong>, covering only courses
          classified as Biology, Chemistry, Physics, or Math.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            GPA = Σ(Credit Hours × Grade Points) ÷ Σ(Credit Hours)
          </p>
        </div>
        <p className="mt-4 leading-7">
          Calculated twice — once across every course for Overall GPA, and again across BCPM-only courses
          for Science GPA.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The 4.0 Cap: AMCAS&apos;s Most Confused Rule</h2>
        <p className="mt-4 leading-7">
          On the AMCAS scale, <strong>A+ and A are both worth exactly 4.0</strong> — there is no bonus for
          a plus grade at the top of the scale. This trips up a lot of applicants, because many college
          transcripts award A+ a higher value (4.3 or 4.33 is common). AMCAS overrides whatever your
          transcript shows and recalculates using its own capped scale. This is a deliberate and important
          contrast with{" "}
          <Link href="/lsac-law-school-gpa-calculator" className="text-cyan-400 hover:underline">
            LSAC&apos;s scale for law school applications
          </Link>
          , which does allow A+ to count as 4.33 — the two systems are genuinely different standards, not
          just different labels for the same thing, so don&apos;t assume a number calculated for one
          application service transfers directly to the other.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Every Attempt Counts — No Grade Replacement</h2>
        <p className="mt-4 leading-7">
          If you retook a course after a weak grade, AMCAS does not drop the original attempt. Both grades
          are included in your GPA calculation, weighted by their own credit hours, exactly as if they
          were two separate courses. This is different from how many universities calculate a student&apos;s
          own institutional GPA (which often does apply grade replacement), so a retake that looks
          &quot;erased&quot; on your home transcript will still show both attempts on your AMCAS GPA.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: A Retaken Course</h2>
        <p className="mt-4 leading-7">
          A student&apos;s coursework: Gen Chem I (4 credits, A, BCPM), Gen Chem II (4 credits, B+, BCPM), Bio
          I (4 credits, A-, BCPM), English (3 credits, A, non-BCPM), and Organic Chemistry I — first
          attempt (4 credits, D, BCPM) and retake (4 credits, A, BCPM).
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          Overall: 23 total credits → 3.30 GPA{"\n"}
          BCPM: 20 credits (excludes English) → 3.20 GPA
        </div>
        <p className="mt-4 leading-7">
          Notice the BCPM GPA (3.20) sits below the overall GPA (3.30) here, and both the original D and
          the successful retake A pulled equal, separate weight in the science calculation — the retake
          helped, but it didn&apos;t erase the original attempt&apos;s impact.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: The 4.0 Cap in Practice</h2>
        <p className="mt-4 leading-7">
          A student with straight A+ grades across 30 credits might expect a GPA above 4.0 based on their
          home transcript. On AMCAS&apos;s scale, every A+ converts to exactly 4.0, so the result is a clean
          4.00 — not 4.3 or higher, regardless of how many A+ grades are entered.
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
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">General-purpose semester GPA calculator.</p>
          </Link>
          <Link href="/how-to-calculate-gpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">How to Calculate GPA</span>
            <p className="mt-1 text-sm text-slate-400">The fundamentals of credit-weighted GPA math.</p>
          </Link>
          <Link href="/gpa-requirements" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Requirements</span>
            <p className="mt-1 text-sm text-slate-400">Minimum GPA expectations for competitive programs.</p>
          </Link>
          <Link href="/lsac-law-school-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">LSAC Law School GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">The equivalent tool for law school applicants — note the different A+ scale.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
