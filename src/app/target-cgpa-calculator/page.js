"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import TargetCgpaGuide from "@/components/calculator-guides/TargetCgpaGuide";
import { computeNeededGpa } from "@/lib/semesterMath";

export default function TargetCgpaCalculator() {
  const [currentCgpa, setCurrentCgpa] = useState("");
  const [currentCredits, setCurrentCredits] = useState("");
  const [targetCgpa, setTargetCgpa] = useState("");
  const [remainingCredits, setRemainingCredits] = useState("");

  function parseInputs() {
    const cCgpa = parseFloat(currentCgpa);
    const cCredits = parseFloat(currentCredits);
    const tCgpa = parseFloat(targetCgpa);
    const rCredits = parseFloat(remainingCredits);

    const valid =
      !isNaN(cCgpa) && cCgpa >= 0 && cCgpa <= 4 &&
      !isNaN(cCredits) && cCredits >= 0 &&
      !isNaN(tCgpa) && tCgpa >= 0 && tCgpa <= 4 &&
      !isNaN(rCredits) && rCredits > 0;

    return { cCgpa, cCredits, tCgpa, rCredits, valid };
  }

  function getResult() {
    const { cCgpa, cCredits, tCgpa, rCredits, valid } = parseInputs();
    if (!valid) return null;

    const neededGpa = computeNeededGpa({
      current: cCgpa,
      currentCredits: cCredits,
      target: tCgpa,
      remainingCredits: rCredits,
    });

    return { neededGpa, rCredits };
  }

  function getError() {
    const checks = [
      [currentCgpa, (v) => v >= 0 && v <= 4, "Current CGPA must be between 0.00 and 4.00."],
      [currentCredits, (v) => v >= 0, "Current total credits cannot be negative."],
      [targetCgpa, (v) => v >= 0 && v <= 4, "Target CGPA must be between 0.00 and 4.00."],
      [remainingCredits, (v) => v > 0, "Remaining credits must be greater than 0."],
    ];

    for (const [raw, isOk, message] of checks) {
      if (raw === "") continue;
      const value = parseFloat(raw);
      if (isNaN(value) || !isOk(value)) return message;
    }

    return "";
  }

  function resetCalculator() {
    setCurrentCgpa("");
    setCurrentCredits("");
    setTargetCgpa("");
    setRemainingCredits("");
  }

  const result = getResult();
  const error = getError();

  let resultView = null;
  if (result) {
    if (result.neededGpa > 4) {
      resultView = {
        headline: "Not possible",
        message: `You'd need a ${result.neededGpa.toFixed(2)} GPA over your remaining ${result.rCredits} credits — above the 4.0 maximum. Spreading your remaining credits over more semesters won't help either, since it's the same total either way; you'd need to lower your target CGPA.`,
      };
    } else if (result.neededGpa < 0) {
      resultView = {
        headline: "0.00",
        message: "You're already on track — even a 0.00 across your remaining credits keeps your CGPA at or above your target.",
      };
    } else {
      resultView = {
        headline: result.neededGpa.toFixed(2),
        message: `Average GPA needed across your remaining ${result.rCredits} credits to reach your target CGPA.`,
      };
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Target CGPA Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Find the GPA you need in future semesters to reach your target CGPA.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Current CGPA"
            placeholder="Current CGPA (0.00 - 4.00)"
            value={currentCgpa}
            onChange={(e) => setCurrentCgpa(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.5"
            min="0"
            inputMode="decimal"
            aria-label="Current total credits"
            placeholder="Current Total Credits"
            value={currentCredits}
            onChange={(e) => setCurrentCredits(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Target CGPA"
            placeholder="Target CGPA (0.00 - 4.00)"
            value={targetCgpa}
            onChange={(e) => setTargetCgpa(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.5"
            min="0"
            inputMode="decimal"
            aria-label="Remaining credits across future semesters"
            placeholder="Remaining Credits (Future Semesters)"
            value={remainingCredits}
            onChange={(e) => setRemainingCredits(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">GPA Needed Going Forward</h2>

          {resultView ? (
            <>
              <p
                key={resultView.headline}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {resultView.headline}
              </p>
              <p className="mt-4 text-slate-300">
                {resultView.message}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`I need a ${resultView.headline} GPA going forward to hit my target CGPA — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Fill in all four fields to see the GPA you need going forward.
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          The more credits you&apos;ve already completed, the harder your CGPA is to move — see{" "}
          <Link href="/semester-gpa-vs-cgpa#credit-inertia" className="text-cyan-400 hover:underline">
            why credit inertia matters
          </Link>.
        </p>

        <TargetCgpaGuide />

      </div>
    </main>
  );
}
