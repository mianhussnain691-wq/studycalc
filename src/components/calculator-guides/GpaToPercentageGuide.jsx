import Link from "next/link";

const faqs = [
  {
    q: "Is converting GPA to percentage exact?",
    a: "No — a GPA scale groups percentages into bands (e.g. 87-89% all map to a B+ / 3.30 GPA), so going from GPA back to percentage only gives you a range, not the original number. The calculator shows that range and its midpoint as a reasonable estimate.",
  },
  {
    q: "Why does a GPA of 3.3 show a percentage range instead of one number?",
    a: "Because the underlying grading scale itself is band-based: any percentage from 87% to 89% earns a 3.3 GPA. There's no way to recover which exact percentage within that band produced the GPA, so the calculator shows the full band.",
  },
  {
    q: "Does this match my university's exact scale?",
    a: "It uses the common US 4.0 scale (93-100% = 4.0 down to below 60% = F). Some schools use slightly different cutoffs, so treat the result as a close estimate and check your institution's official grading policy for anything that affects your transcript.",
  },
  {
    q: "What's the difference between this and the Percentage to GPA Calculator?",
    a: "This tool goes GPA → percentage. If you have a percentage and want the GPA instead, use the Percentage to GPA Calculator, which does the direct forward lookup.",
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

export default function GpaToPercentageGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How the Conversion Works</h2>
        <p className="mt-4 leading-7">
          US universities typically grade on a 4.0 scale where each GPA value corresponds to a range of
          percentages, not a single number. This calculator looks up which band your GPA falls into and
          reports that band&apos;s percentage range and midpoint.
        </p>
        <div className="mt-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
          <p className="text-lg font-bold text-cyan-400 font-mono">
            GPA → matching band → percentage range
          </p>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example</h2>
        <p className="mt-4 leading-7">
          A student has a 3.3 GPA. Looking that up on the scale, 3.3 corresponds to a B+, which spans
          87%-89%. The calculator reports that range with a midpoint estimate of 88%.
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
          <Link href="/percentage-to-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage to GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Go the other way — percentage to GPA.</p>
          </Link>
          <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Calculate a full semester&apos;s GPA from your courses.</p>
          </Link>
          <Link href="/grade-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Grade Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Turn a single percentage into a letter grade.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
