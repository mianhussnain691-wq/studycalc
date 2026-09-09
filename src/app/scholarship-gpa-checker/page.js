"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import ScholarshipGpaGuide from "@/components/calculator-guides/ScholarshipGpaGuide";

// Tiers pulled directly from /gpa-for-scholarships so the two pages agree.
const TIERS = [
  { min: 3.8, label: "Full-Ride / Full-Tuition", detail: "Tuition, housing, stipend, books — extremely competitive." },
  { min: 3.5, label: "Competitive Merit Awards", detail: "50% to 75% tuition coverage — highly competitive." },
  { min: 3.0, label: "Standard Institutional Grants", detail: "Fixed annual grants ($2,000-$10,000) — moderate competition." },
  { min: 2.5, label: "Need-Based Assistance", detail: "Supplemental grants and work-study, often with an academic minimum." },
  { min: 2.0, label: "Community & Niche Foundation Grants", detail: "One-time book grants or micro-scholarships." },
];

function getTier(gpa) {
  return TIERS.find((tier) => gpa >= tier.min) ?? null;
}

export default function ScholarshipGpaChecker() {
  const [gpa, setGpa] = useState("");

  function parseInput() {
    const value = parseFloat(gpa);
    const valid = !isNaN(value) && value >= 0 && value <= 4;
    return { value, valid };
  }

  function getError() {
    if (gpa === "") return "";
    const value = parseFloat(gpa);
    if (isNaN(value) || value < 0 || value > 4) return "GPA must be between 0.00 and 4.00.";
    return "";
  }

  function resetCalculator() {
    setGpa("");
  }

  const { value, valid } = parseInput();
  const tier = valid ? getTier(value) : undefined;
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Scholarship GPA Eligibility Checker
        </h1>

        <p className="mt-4 text-center text-slate-400">
          See what scholarship tier your current GPA typically falls into.
        </p>

        <div className="mt-12">
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Your current GPA"
            placeholder="Your GPA (0.00 - 4.00)"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {error && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {error}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Your Likely Tier</h2>

          {valid ? (
            tier ? (
              <>
                <p
                  key={tier.label}
                  className="mt-6 text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 animate-fade-in-up"
                >
                  {tier.label}
                </p>
                <p className="mt-4 text-slate-300">{tier.detail}</p>
              </>
            ) : (
              <>
                <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-black text-amber-400 animate-fade-in-up">
                  Below Common Scholarship Tiers
                </p>
                <p className="mt-4 text-slate-300">
                  A 2.0+ GPA typically opens the widest range of scholarship options — raising your GPA is
                  the most direct way to unlock more opportunities.
                </p>
              </>
            )
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your GPA to see which scholarship tier you&apos;re likely to qualify for.
            </p>
          )}

          {valid && (
            <>
              <p className="mt-4 text-sm text-slate-500">
                These are common tiers, not guarantees — exact GPA requirements vary by scholarship provider.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My ${gpa} GPA typically qualifies for: ${tier ? tier.label : "checking scholarship tiers"} — calculated at studycalc.co`}
                />
              </div>
            </>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          For the full breakdown of tiers, renewal requirements, and strategy,{" "}
          <Link href="/gpa-for-scholarships" className="text-cyan-400 hover:underline">
            read the complete GPA for Scholarships guide
          </Link>.
        </p>

        <ScholarshipGpaGuide />

      </div>
    </main>
  );
}
