import Link from "next/link";
import {
  PAKISTAN_CGPA_TO_PERCENT_FACTOR,
  INDIA_CGPA_TO_PERCENT_FACTOR,
  pakistanCgpaToPercent,
  indiaCgpaToPercent,
} from "@/data/boardGrades";

export const metadata = {
  title: "CGPA to Percentage Calculator: Formula & Conversion Guide",
  description:
    "Convert CGPA to percentage for India (CGPA × 9.5) and Pakistan (CGPA × 25) — the two most common conventions, explained with worked examples and charts.",
  alternates: {
    canonical: "https://www.studycalc.co/cgpa-to-percentage-conversion",
  },
  openGraph: {
    title: "CGPA to Percentage Calculator: Formula & Conversion Guide",
    description: "Convert CGPA to percentage for India and Pakistan, with the exact conventions, worked examples, and lookup charts.",
    url: "https://www.studycalc.co/cgpa-to-percentage-conversion",
    siteName: "StudyCalc",
    type: "article",
  },
  keywords: [
    "cgpa to percentage",
    "cgpa to percentage calculator",
    "cgpa to percentage india",
    "cgpa to percentage pakistan",
    "9.5 cgpa to percentage",
    "cgpa x 25 pakistan",
    "convert cgpa to percentage formula",
    "10 point cgpa to percentage",
  ],
};

const PAKISTAN_ROWS = Array.from({ length: 21 }, (_, i) => {
  const cgpa = 2.0 + i * 0.1;
  return { cgpa: Math.round(cgpa * 10) / 10, percent: pakistanCgpaToPercent(cgpa) };
});

const INDIA_ROWS = Array.from({ length: 11 }, (_, i) => {
  const cgpa = 5.0 + i * 0.5;
  return { cgpa, percent: indiaCgpaToPercent(cgpa) };
});

const faqs = [
  {
    q: "Is CGPA × 9.5 the official UGC formula for India?",
    a: "No single UGC document mandating this nationally could be verified. CGPA × 9.5 is a widely used convention — commonly associated with CBSE and many UGC-CBCS-era universities — but it is not universally official. Some universities use a different multiplier (occasionally ×10). Always confirm the exact formula with your own university's examination office, especially for anything official like admissions, scholarships, or a WES evaluation.",
  },
  {
    q: "Is CGPA × 25 the official HEC formula for Pakistan?",
    a: "No single HEC-published document stating this as official policy could be verified either. CGPA × 25 is simply the direct linear read-out of Pakistan's 4.0-scale CGPA (CGPA ÷ 4.0 × 100), and it's the convention most Pakistani universities and students use in practice. A few institutions use a different multiplier. Confirm with your own registrar or the HEC equivalence office before relying on a specific converted number for an official purpose.",
  },
  {
    q: "Why isn't there one official formula for either country?",
    a: "CGPA grading in both India and Pakistan is set at the institution level, not by a single national regulator that publishes one binding conversion table. The UGC (India) and HEC (Pakistan) set broad frameworks, but individual universities retain their own grading and equivalence policies — which is exactly why university-to-university variation exists.",
  },
  {
    q: "Does WES (or another credential evaluator) use these multipliers?",
    a: "Credential evaluators like WES generally evaluate transcripts by mapping individual course or year-level results against the issuing institution's own documented grading scale, not by applying a flat multiplier to a final CGPA. Don't assume a WES-reported percentage will exactly match the CGPA × 9.5 or CGPA × 25 estimate from this page.",
  },
  {
    q: "My university's CGPA is out of a different scale — what do I do?",
    a: "These conventions assume the standard scales each country's CGPA is normally reported on — 4.0 in Pakistan, 10.0 in India. If your institution uses a different maximum (for example a 4.3 scale), first check your transcript or academic handbook for the scale, then convert proportionally against that actual maximum rather than applying the India or Pakistan multiplier directly.",
  },
  {
    q: "How do I go the other way — percentage to CGPA?",
    a: "For Pakistan's 4.0 scale, divide your percentage by 25 (Percentage ÷ 25 = CGPA). For India's 10.0 scale, divide by 9.5 (Percentage ÷ 9.5 = CGPA). Both carry the same institution-varies caveat as the forward conversion.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.studycalc.co" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.studycalc.co/guides" },
    { "@type": "ListItem", position: 3, name: "CGPA to Percentage", item: "https://www.studycalc.co/cgpa-to-percentage-conversion" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CGPA to Percentage: India & Pakistan Conversion Guide",
  description: "Convert CGPA to percentage for India and Pakistan, with the exact conventions, worked examples, and lookup charts.",
  author: { "@type": "Organization", name: "StudyCalc", url: "https://www.studycalc.co" },
  publisher: { "@type": "Organization", name: "StudyCalc" },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.studycalc.co/cgpa-to-percentage-conversion" },
};

export default function CgpaToPercentagePage() {
  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 py-12 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header className="mb-12 text-center md:text-left border-b border-slate-800 pb-10">
        <div className="inline-block rounded-full bg-emerald-950/80 border border-emerald-800/50 px-4 py-1.5 text-xs font-semibold text-emerald-400 mb-4 tracking-wide uppercase">
          CGPA to Percentage
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
          CGPA to Percentage: India &amp; Pakistan Conversion Guide
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
          There is no single official, government-mandated CGPA-to-percentage formula in either country — it varies
          by institution. This guide covers the two conventions students actually use in practice, with the exact
          math, worked examples, and full lookup charts for both.
        </p>
      </header>

      <div className="mb-12 rounded-2xl border border-amber-800/60 bg-amber-950/20 p-6 sm:p-8 space-y-3">
        <h3 className="text-lg font-bold text-amber-400 flex items-center gap-2">
          <span>⚠️</span> Before you rely on a number
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Neither the convention below for Pakistan nor the one for India is a single nationally-mandated formula —
          both are the most common conventions in practice, confirmed against what&apos;s widely documented, not
          against one official government table. For anything that matters officially — admissions, scholarships,
          a WES or similar credential evaluation, a visa application — confirm the exact figure with your own
          institution&apos;s examination office or registrar.
        </p>
      </div>

      <div className="space-y-16 text-base md:text-lg leading-relaxed">
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            Pakistan: CGPA × 25
          </h2>
          <p className="text-slate-300">
            Pakistani universities report CGPA on a 4.0 scale. The percentage figure most commonly quoted is simply
            the direct linear read-out of that scale:
          </p>
          <p className="text-slate-300 font-mono text-sm sm:text-base p-4 bg-slate-950 border border-slate-800 rounded-xl text-center text-emerald-400">
            Percentage ≈ CGPA ÷ 4.0 × 100 = CGPA × {PAKISTAN_CGPA_TO_PERCENT_FACTOR}
          </p>
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
            <h3 className="font-bold text-emerald-400 text-lg mb-2">Worked example</h3>
            <p className="text-slate-400 text-sm sm:text-base font-mono">
              CGPA 3.50 × 25 = <span className="text-white font-bold">87.5%</span>
            </p>
          </div>

          <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl shadow-xl bg-slate-950/80">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                  <th className="p-3 border-r border-slate-800">CGPA (out of 4.0)</th>
                  <th className="p-3 text-emerald-400">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                {PAKISTAN_ROWS.map((row) => (
                  <tr key={row.cgpa} className="hover:bg-slate-900/50 transition">
                    <td className="p-3 border-r border-slate-800 font-bold text-white">{row.cgpa.toFixed(1)}</td>
                    <td className="p-3 text-emerald-400 font-bold">{row.percent.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm">
            Want a two-way toggle instead of a table? Use the{" "}
            <Link href="/pakistan-cgpa-converter" className="text-emerald-400 hover:underline">
              Pakistan CGPA Converter
            </Link>{" "}
            for a live calculation. For Matric/Intermediate marks instead of university CGPA, see{" "}
            <Link href="/pakistani-board-vs-us-gpa" className="text-emerald-400 hover:underline">
              Pakistani Board vs US GPA
            </Link>
            .
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            India: CGPA × 9.5
          </h2>
          <p className="text-slate-300">
            Most Indian universities following the UGC&apos;s Choice Based Credit System (CBCS) report CGPA on a
            10-point scale. The convention most commonly used — including by CBSE for school-level results — is:
          </p>
          <p className="text-slate-300 font-mono text-sm sm:text-base p-4 bg-slate-950 border border-slate-800 rounded-xl text-center text-cyan-400">
            Percentage ≈ CGPA × {INDIA_CGPA_TO_PERCENT_FACTOR}
          </p>
          <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl">
            <h3 className="font-bold text-cyan-400 text-lg mb-2">Worked example</h3>
            <p className="text-slate-400 text-sm sm:text-base font-mono">
              CGPA 8.20 × 9.5 = <span className="text-white font-bold">77.9%</span>
            </p>
          </div>

          <div className="overflow-x-auto my-6 border border-slate-800 rounded-2xl shadow-xl bg-slate-950/80">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                  <th className="p-3 border-r border-slate-800">CGPA (out of 10.0)</th>
                  <th className="p-3 text-cyan-400">Percentage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                {INDIA_ROWS.map((row) => (
                  <tr key={row.cgpa} className="hover:bg-slate-900/50 transition">
                    <td className="p-3 border-r border-slate-800 font-bold text-white">{row.cgpa.toFixed(1)}</td>
                    <td className="p-3 text-cyan-400 font-bold">{row.percent.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-400 text-sm">
            Some universities use a different multiplier for their own CGPA — always check your institution&apos;s
            official conversion note, usually printed on the back of your transcript or in your academic handbook.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            Converting a US-style GPA instead?
          </h2>
          <p className="text-slate-300">
            This page covers CGPA (10-point India, 4.0-scale Pakistan) specifically. If you're working with a US
            4.0/4.3-scale GPA and need a percentage equivalent — or the reverse — those use a different,
            letter-grade-banded method, covered in full with worked examples here:{" "}
            <Link href="/gpa-to-percentage-guide" className="text-cyan-400 hover:underline">
              GPA to Percentage Conversion Guide
            </Link>{" "}
            and{" "}
            <Link href="/percentage-to-gpa-calculator" className="text-cyan-400 hover:underline">
              Percentage to GPA Calculator
            </Link>
            . For a side-by-side comparison across the US, UK, Pakistan, and India grading systems, see{" "}
            <Link href="/marks-to-grade-conversion" className="text-cyan-400 hover:underline">
              Marks to Grade Conversion
            </Link>
            .
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q} className="p-6 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
                <h3 className="text-lg font-bold text-emerald-400">{f.q}</h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="p-8 rounded-3xl border border-slate-800 bg-slate-950 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">Related Calculators &amp; Guides</h2>
          <div className="grid sm:grid-cols-2 gap-4 font-medium text-sm">
            <Link href="/pakistan-cgpa-converter" className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 hover:bg-slate-900 text-emerald-400 transition block">
              ➔ Pakistan CGPA Converter
            </Link>
            <Link href="/cgpa-calculator" className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900 text-cyan-400 transition block">
              ➔ CGPA Calculator
            </Link>
            <Link href="/gpa-to-percentage-guide" className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-emerald-500/50 hover:bg-slate-900 text-emerald-400 transition block">
              ➔ GPA to Percentage Conversion Guide
            </Link>
            <Link href="/marks-to-grade-conversion" className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-cyan-500/50 hover:bg-slate-900 text-cyan-400 transition block">
              ➔ Marks to Grade Conversion (US, UK, Pakistan, India)
            </Link>
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-800/40 bg-gradient-to-b from-slate-900 via-slate-900/90 to-emerald-950/20 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Calculate Your Own CGPA First
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Haven&apos;t worked out your CGPA yet? Use our free calculator, then come back and apply the conversion
            above.
          </p>
          <div className="pt-4">
            <Link
              href="/cgpa-calculator"
              className="inline-block rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base px-8 py-4 shadow-lg shadow-emerald-500/20 transition-all hover:scale-105"
            >
              Launch CGPA Calculator ➔
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
