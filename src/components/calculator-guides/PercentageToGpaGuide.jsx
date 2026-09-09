import Link from "next/link";

const faqs = [
  {
    q: "What GPA scale does this calculator use?",
    a: "The common US 4.0 scale: 93-100% = 4.0 (A), 90-92% = 3.7 (A-), 87-89% = 3.3 (B+), down to below 60% = 0.0 (F). This is the same scale used across StudyCalc's GPA and Grade calculators.",
  },
  {
    q: "Is 80% a 3.0 GPA or a 2.7 GPA?",
    a: "On this scale, 80% falls in the 80-82% band, which is a B- (2.7 GPA). An 83% would be needed to reach a straight B (3.0).",
  },
  {
    q: "Does every university use this exact scale?",
    a: "No — grading scales vary by institution. This calculator uses a commonly used US 4.0 scale as a reference point. For anything that affects your official record, check your school's published grading policy.",
  },
  {
    q: "How is this different from the Grade Calculator?",
    a: "The Grade Calculator returns a letter grade and status for a percentage. This tool returns the numeric GPA value on the 4.0 scale, which is what most transcripts and GPA calculators actually need as input.",
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

export default function PercentageToGpaGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How the Conversion Works</h2>
        <p className="mt-4 leading-7">
          Each percentage range on the 4.0 scale maps directly to one GPA value. The calculator finds
          the band your percentage falls into and returns that band&apos;s GPA and letter grade.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            Percentage → matching band → GPA + letter grade
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example</h2>
        <p className="mt-4 leading-7">
          A student scores 87% on a course. 87% falls in the 87-89% band, which is a B+ — a 3.3 GPA.
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
        <h2 className="text-2xl font-bold text-white">Related Calculators</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/gpa-to-percentage-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA to Percentage Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Go the other way — GPA to percentage.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate a full semester&apos;s GPA from your courses.</p>
          </Link>
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Get a letter grade and status for a percentage.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
