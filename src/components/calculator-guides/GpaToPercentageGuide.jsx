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
  {
    q: "Why is the midpoint used instead of the top or bottom of the range?",
    a: "The midpoint is the least biased single-number guess when the true value could be anywhere in the band with roughly equal likelihood. Using the top of the range would systematically overstate your percentage, and using the bottom would systematically understate it — the midpoint splits the difference.",
  },
  {
    q: "Can two students with the same GPA have different actual percentages?",
    a: "Yes, and this is exactly why the conversion isn't exact. A 3.3 GPA could reflect an 87% or an 89% (or anything between) — both round to the same GPA under a banded scale, but they're different percentages. If you need your exact original percentage, you have to look at your actual transcript or gradebook rather than reverse-engineering it from GPA alone.",
  },
  {
    q: "What should I put on a form that asks for both GPA and percentage?",
    a: "Use your actual recorded values from your transcript wherever possible rather than a converted estimate — most institutions record both numbers directly, and using your real percentage (if listed) is more accurate than an estimate derived from your GPA.",
  },
  {
    q: "Does this work for GPA scales other than 4.0, like a 10-point scale?",
    a: "Not directly — this calculator and its underlying table are built specifically around the US 4.0 scale. A 10-point scale (common in parts of Asia) uses different conversion conventions; see the GPA Scale Explained guide for how other scales compare.",
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
        <p className="mt-4 leading-7">
          This asymmetry — many percentages, one GPA value — is the whole reason a reverse conversion is
          fuzzier than the forward one. Percentage to GPA is a clean many-to-one function; GPA to
          percentage necessarily has to guess within a range, since the original precision was lost the
          moment the percentage was rounded into a GPA band in the first place.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Differs From the Percentage to GPA Calculator</h2>
        <p className="mt-4 leading-7">
          It&apos;s easy to assume these two tools are mirror images that always agree perfectly, but the
          relationship between them is one-directional in terms of precision.{" "}
          <Link href="/percentage-to-gpa-calculator" className="text-cyan-400 hover:underline">
            Percentage to GPA
          </Link>{" "}
          is exact — every percentage maps to exactly one GPA value, with no ambiguity. This tool runs the
          lookup in reverse, and reverse lookups on a many-to-one function are inherently approximate. If
          you convert an exact percentage to GPA and then convert that GPA back to a percentage, you&apos;ll
          typically get the band&apos;s midpoint back, not your original number — that&apos;s expected behavior,
          not a bug in either tool.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 1: A Clean Band Match</h2>
        <p className="mt-4 leading-7">
          A student has a 3.3 GPA. Looking that up on the scale, 3.3 corresponds to a B+, which spans
          87%-89%.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          3.3 GPA → B+ band (87%-89%) → midpoint 88%
        </div>
        <p className="mt-4 leading-7">
          The calculator reports the full 87-89% range along with a midpoint estimate of 88% — useful if
          you need a single representative number, while the range itself is the more honest answer.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Worked Example 2: A Boundary GPA Value</h2>
        <p className="mt-4 leading-7">
          A student has a 2.0 GPA — a straight C.
        </p>
        <div className="mt-4 rounded-xl bg-slate-900 border border-slate-800 p-5 font-mono text-sm">
          2.0 GPA → C band (73%-76%) → midpoint 74.5%
        </div>
        <p className="mt-4 leading-7">
          Even a common, &quot;round&quot; GPA value like 2.0 still only narrows things down to a 4-point percentage
          range — a useful reminder that a GPA number, on its own, always represents a band rather than a
          single precise score.
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
          <Link href="/percentage-to-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Percentage to GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Go the other way — percentage to GPA.</p>
          </Link>
          <Link href="/gpa-to-percentage-guide" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">GPA to Percentage: Complete Guide</span>
            <p className="mt-1 text-sm text-slate-400">The full explanation, common mistakes, and both directions.</p>
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
