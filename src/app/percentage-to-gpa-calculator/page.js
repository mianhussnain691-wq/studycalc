"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import { lookupByPercent } from "@/data/gradeScale";
import PercentageToGpaGuide from "@/components/calculator-guides/PercentageToGpaGuide";

export default function PercentageToGpaCalculator() {
  const [percentage, setPercentage] = useState("");

  function parseInput() {
    const value = parseFloat(percentage);
    const valid = !isNaN(value) && value >= 0 && value <= 100;
    return { value, valid };
  }

  function getResult() {
    const { value, valid } = parseInput();
    if (!valid) return null;
    return lookupByPercent(value);
  }

  function getError() {
    if (percentage === "") return "";
    const value = parseFloat(percentage);
    if (isNaN(value) || value < 0 || value > 100) {
      return "Percentage must be between 0 and 100.";
    }
    return "";
  }

  function resetCalculator() {
    setPercentage("");
  }

  const result = getResult();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Percentage to GPA Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Convert your percentage marks into a 4.0 scale GPA.
        </p>

        <div className="mt-12">
          <input
            type="number"
            step="0.01"
            min="0"
            max="100"
            inputMode="decimal"
            aria-label="Your percentage"
            placeholder="Enter Percentage (0 - 100)"
            value={percentage}
            onChange={(e) => setPercentage(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {getError() && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {getError()}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Your GPA</h2>

          {result ? (
            <>
              <p
                key={result.gpa}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.gpa.toFixed(2)}
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-300">
                Letter Grade: {result.letter}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My ${percentage}% ≈ ${result.gpa.toFixed(2)} GPA (${result.letter}) — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter a percentage between 0 and 100 to see your GPA.
            </p>
          )}
        </div>

        <PercentageToGpaGuide />

      </div>
    </main>
  );
}
