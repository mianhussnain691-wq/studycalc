"use client";

import { useState } from "react";
import Link from "next/link";

const usScaleTable = [
  { min: 93, letter: "A+ / A", gpa: 4.0 },
  { min: 90, letter: "A-", gpa: 3.7 },
  { min: 87, letter: "B+", gpa: 3.3 },
  { min: 83, letter: "B", gpa: 3.0 },
  { min: 80, letter: "B-", gpa: 2.7 },
  { min: 77, letter: "C+", gpa: 2.3 },
  { min: 73, letter: "C", gpa: 2.0 },
  { min: 70, letter: "C-", gpa: 1.7 },
  { min: 60, letter: "D", gpa: 1.0 },
  { min: 0, letter: "F", gpa: 0.0 },
];

function lookupUsEquivalent(percentage) {
  const row = usScaleTable.find((r) => percentage >= r.min);
  return row || usScaleTable[usScaleTable.length - 1];
}

const faqs = [
  {
    q: "Do I need to convert my Pakistani CGPA before applying to a US university?",
    a: "Usually no, not yourself. Pakistani CGPA is already reported on a 4.0 scale under HEC's standard, so many US universities accept it directly. For formal admissions or visa purposes, schools typically require an official evaluation from a credential agency like WES rather than a self-calculated conversion.",
  },
  {
    q: "What is the official HEC formula for converting CGPA to percentage?",
    a: "Percentage = CGPA × 25. This is the standard formula used across HEC-recognized universities in Pakistan, equivalent to dividing your CGPA by 4.0 and multiplying by 100.",
  },
  {
    q: "Is a 3.5 CGPA in Pakistan considered good for study abroad?",
    a: "Yes. A 3.5 CGPA converts to 87.5% under the HEC formula, which is a strong result at most Pakistani universities and generally competitive for graduate program applications abroad, though specific program requirements vary.",
  },
  {
    q: "Why does this calculator give an approximate US letter grade too?",
    a: "Because some universities and scholarship forms ask for an equivalent letter grade or want to see how your percentage compares to a standard grading band, not just a raw GPA number. This is shown as a reference approximation, not an official conversion.",
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

export default function PakistanCGPAConverter() {
  const [mode, setMode] = useState("cgpa");
  const [value, setValue] = useState("");

  const numericValue = parseFloat(value);
  const isValid =
    value.trim() !== "" &&
    !isNaN(numericValue) &&
    (mode === "cgpa" ? numericValue >= 0 && numericValue <= 4 : numericValue >= 0 && numericValue <= 100);

  let cgpa = null;
  let percentage = null;
  let usEquivalent = null;

  if (isValid) {
    if (mode === "cgpa") {
      cgpa = numericValue;
      percentage = numericValue * 25;
    } else {
      percentage = numericValue;
      cgpa = numericValue / 25;
    }
    usEquivalent = lookupUsEquivalent(percentage);
  }

  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-4 sm:px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-8">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            Pakistan to US GPA Tool
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Pakistan CGPA to US GPA Calculator
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Enter your HEC CGPA or percentage and get an instant US 4.0 GPA reference, using the official HEC conversion formula.
          </p>
        </header>

        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => { setMode("cgpa"); setValue(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                mode === "cgpa" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              I have my CGPA
            </button>
            <button
              onClick={() => { setMode("percentage"); setValue(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                mode === "percentage" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              I have my percentage
            </button>
          </div>

          <label className="block text-sm font-medium text-slate-400 mb-2">
            {mode === "cgpa" ? "Your CGPA (0.00 – 4.00)" : "Your percentage (0 – 100%)"}
          </label>
          <input
            type="number"
            step="0.01"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={mode === "cgpa" ? "e.g. 3.50" : "e.g. 87.5"}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 px-4 outline-none text-white text-lg focus:border-cyan-500 transition"
          />
          {value.trim() !== "" && !isValid && (
            <p className="mt-2 text-sm text-red-400">
              Enter a value between {mode === "cgpa" ? "0.00 and 4.00" : "0 and 100"}.
            </p>
          )}

          {isValid && (
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-slate-950 border border-cyan-500/20 p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">CGPA (4.0 scale)</p>
                <p className="text-3xl font-black text-cyan-400">{cgpa.toFixed(2)}</p>
              </div>
              <div className="rounded-xl bg-slate-950 border border-emerald-500/20 p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">Percentage</p>
                <p className="text-3xl font-black text-emerald-400">{percentage.toFixed(1)}%</p>
              </div>
              <div className="rounded-xl bg-slate-950 border border-slate-700 p-5 text-center">
                <p className="text-xs uppercase tracking-wide text-slate-500 mb-1">US letter grade (approx.)</p>
                <p className="text-3xl font-black text-white">{usEquivalent.letter}</p>
                <p className="text-xs text-slate-500 mt-1">≈ {usEquivalent.gpa.toFixed(1)} US GPA</p>
              </div>
            </div>
          )}
        </section>

        <div className="space-y-10 text-base leading-relaxed mt-12">

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              The Formula Behind This
            </h2>
            <p>
              HEC-recognized Pakistani universities use a standard 4.0 CGPA scale. The official formula to convert that into a percentage is straightforward:
            </p>
            <div className="rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
              <p className="text-lg font-bold text-cyan-400 font-mono">Percentage = CGPA × 25</p>
            </div>
            <p className="text-sm text-slate-400">
              For example, a 3.5 CGPA gives 3.5 × 25 = 87.5%. The reverse works the same way: divide your percentage by 25 to get your CGPA. For the full breakdown of how Pakistani board marks and university CGPA map onto the US 4.0 scale, see our{" "}
              <Link href="/pakistani-board-vs-us-gpa" className="text-cyan-400 hover:underline">
                Pakistani board vs US GPA conversion guide
              </Link>.
            </p>
          </section>

          <section className="rounded-2xl border border-yellow-800/40 bg-slate-900/60 p-6">
            <h3 className="font-bold text-yellow-400 mb-2">Important: this is a reference, not an official conversion</h3>
            <p className="text-sm text-slate-400">
              Because Pakistani CGPA is already reported on the same 4.0 scale that US universities use, many institutions accept it directly without any conversion. For formal applications, scholarships, or visa purposes, use an official evaluation from a recognized credential agency such as WES rather than this calculator's number.
            </p>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Want the Full Context?</h3>
            <p className="text-slate-400 text-sm mb-4">
              Read our complete guide on how Pakistani grading compares to the US system, including division-by-division breakdowns.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/pakistani-board-vs-us-gpa" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                Pakistani Board vs US GPA Guide
              </Link>
              <Link href="/cgpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                CGPA Calculator
              </Link>
              <Link href="/how-to-calculate-cgpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                How to Calculate CGPA
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-semibold text-white">{faq.q}</h3>
                  <p className="text-sm text-slate-400 mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}