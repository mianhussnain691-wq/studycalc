import Link from "next/link";

const faqs = [
  {
    q: "Why does LSAC recalculate my GPA instead of just using my transcript GPA?",
    a: "Because undergraduate institutions calculate GPA differently from each other — different scales, different rounding, different treatment of retakes. LSAC standardizes every applicant's record onto one consistent scale (through its Credential Assembly Service, or CAS) so law schools can compare applicants from different colleges on equal footing.",
  },
  {
    q: "Is A+ really worth 4.33 on the LSAC scale?",
    a: "Yes — this is the single most common point of confusion for pre-law students, especially those who've also looked at medical school GPA rules. LSAC's CAS scale allows A+ to exceed a standard 4.0, typically valued at 4.33. This is a direct contrast with AMCAS (for medical school), which caps A+ at exactly 4.0. The two application services use genuinely different scales — a GPA calculated for one doesn't transfer directly to the other.",
  },
  {
    q: "Does community college coursework count toward my LSAC GPA?",
    a: "Yes. All undergraduate coursework completed before earning your first bachelor's degree is included in the LSAC GPA calculation, regardless of which institution it was taken at — including community college credits, transfer credits, and summer coursework elsewhere.",
  },
  {
    q: "What happens to coursework after I've already earned my bachelor's degree?",
    a: "Graduate coursework and post-bachelor's undergraduate coursework are typically reported separately and don't factor into your primary LSAC cumulative GPA the same way — check LSAC's current CAS guidelines for exactly how post-degree coursework is handled for your specific situation.",
  },
  {
    q: "If I retook a course, does only the better grade count?",
    a: "No — LSAC does not apply grade replacement. Every attempt at a course counts separately in the cumulative GPA calculation, weighted by its own credit hours, even if your home institution's own GPA calculation replaces the old grade with the new one.",
  },
  {
    q: "Is this calculator's result my official LSAC GPA?",
    a: "No — treat it as a close, unofficial estimate. Your official LSAC GPA is only established once CAS processes your actual transcripts, verifying every course and grade according to its full official methodology. Use this tool to track your progress, not as a substitute for CAS's official report.",
  },
  {
    q: "Do all law schools weigh LSAC GPA the same way?",
    a: "No — while nearly all ABA-accredited law schools use the LSAC-calculated GPA as a standardized starting point, individual admissions committees weigh it differently alongside LSAT score, personal statements, and other factors. The standardized number is a common input, not a single formula for admission.",
  },
  {
    q: "Does a Pass/Fail course affect my LSAC GPA?",
    a: "Generally not — Pass/Fail courses without a letter grade are typically excluded from the GPA calculation since there's no grade point to assign. This calculator doesn't include a Pass/Fail option for that reason; leave ungraded courses out of your entries.",
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

export default function LsacLawSchoolGpaGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How LSAC (CAS) Calculates GPA</h2>
        <p className="mt-4 leading-7">
          LSAC&apos;s Credential Assembly Service (CAS) recalculates your GPA independently of whatever
          appears on your undergraduate transcript. It gathers every undergraduate course you completed
          before your first bachelor&apos;s degree — regardless of institution — converts each grade onto its
          own standardized scale, and produces a single credit-weighted cumulative GPA.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            LSAC GPA = Σ(Credit Hours × Grade Points) ÷ Σ(Credit Hours)
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">The 4.33 Scale: LSAC&apos;s Most Confused Rule</h2>
        <p className="mt-4 leading-7">
          On the LSAC scale, <strong>A+ is worth 4.33</strong>, not a flat 4.0. This is the single biggest
          point of confusion for pre-law students, and it becomes especially important for anyone also
          exploring{" "}
          <Link href="/amcas-science-gpa-calculator" className="text-cyan-400 hover:underline">
            AMCAS&apos;s GPA rules for medical school applications
          </Link>
          , which cap A+ at exactly 4.0. These are two genuinely different scales serving two different
          application systems — a GPA calculated under one doesn&apos;t transfer directly to the other, even
          though both start from the same underlying letter grades. Always double-check which scale a
          number was calculated under before comparing it across application types.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">All Undergraduate Coursework Counts</h2>
        <p className="mt-4 leading-7">
          LSAC&apos;s CAS pulls in every undergraduate course completed before your first bachelor&apos;s degree —
          community college credits, transfer coursework, summer classes at another institution, all of
          it. And just like AMCAS, there&apos;s no grade replacement: if you retook a course after a weak
          grade, both attempts count separately, weighted by their own credit hours, even if your home
          school&apos;s own GPA calculation drops the original.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: A Mixed Transcript</h2>
        <p className="mt-4 leading-7">
          A student&apos;s coursework: English 101 (3 credits, A+), Calculus (4 credits, B+), a community
          college Chemistry course (3 credits, A), and Political Science — first attempt (3 credits, C)
          and a retake (3 credits, A+).
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          16 total credits → LSAC GPA: 3.57
        </div>
        <p className="mt-4 leading-7">
          Both Political Science attempts count (the original C and the retaken A+), and the community
          college Chemistry credits count exactly as if taken at a four-year institution — both defining
          features of the LSAC method.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example: The 4.33 Scale in Contrast</h2>
        <p className="mt-4 leading-7">
          Running that exact same transcript through an AMCAS-style 4.0 cap instead (A+ valued at 4.0
          rather than 4.33) produces a GPA of 3.45 — noticeably lower than the 3.57 LSAC result, purely
          from how the two systems treat A+ grades. Neither number is &quot;wrong&quot;; they&apos;re answers to two
          different questions, calculated under two different official standards.
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
          <Link href="/amcas-science-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">AMCAS Science GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">The equivalent tool for pre-med applicants — note the different A+ scale.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
