"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import CourseWeightImpactGuide from "@/components/calculator-guides/CourseWeightImpactGuide";

export default function CourseWeightImpactCalculator() {
  const [weight, setWeight] = useState("");
  const [currentGrade, setCurrentGrade] = useState("");

  function parseInputs() {
    const w = parseFloat(weight);
    const g = parseFloat(currentGrade);
    const valid = !isNaN(w) && w > 0 && w <= 100 && !isNaN(g) && g >= 0 && g <= 100;
    return { w, g, valid };
  }

  function getError() {
    if (weight !== "") {
      const w = parseFloat(weight);
      if (isNaN(w) || w <= 0 || w > 100) return "Assessment weight must be greater than 0 and at most 100.";
    }
    if (currentGrade !== "") {
      const g = parseFloat(currentGrade);
      if (isNaN(g) || g < 0 || g > 100) return "Current grade must be between 0 and 100.";
    }
    return "";
  }

  function getResult() {
    const { w, g, valid } = parseInputs();
    if (!valid) return null;

    const remaining = 1 - w / 100;
    const bestCase = g * remaining + 100 * (w / 100);
    const worstCase = g * remaining;

    return { weight: w, bestCase, worstCase };
  }

  function resetCalculator() {
    setWeight("");
    setCurrentGrade("");
  }

  const result = getResult();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Course Weight Impact Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          See what an upcoming assessment is really worth to your final grade.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            aria-label="Assessment weight as a percentage"
            placeholder="Assessment Weight (%)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            aria-label="Your current course grade"
            placeholder="Current Course Grade (%)"
            value={currentGrade}
            onChange={(e) => setCurrentGrade(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">What&apos;s at Stake</h2>

          {result ? (
            <>
              <p
                key={result.weight}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.weight}%
              </p>
              <p className="mt-2 text-slate-400">of your final grade</p>

              <div className="mt-6 h-4 w-full rounded-full bg-slate-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-500"
                  style={{ width: `${result.weight}%` }}
                ></div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400">Best Case (100% on this)</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-400">{result.bestCase.toFixed(1)}%</p>
                </div>
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400">Worst Case (0% on this)</p>
                  <p className="mt-1 text-2xl font-bold text-amber-400">{result.worstCase.toFixed(1)}%</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Your final grade could land anywhere in this range depending on your score on this one assessment.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`This assessment is worth ${result.weight}% of my final grade — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter the assessment weight and your current grade to see what&apos;s at stake.
            </p>
          )}
        </div>

        <CourseWeightImpactGuide />

      </div>
    </main>
  );
}
