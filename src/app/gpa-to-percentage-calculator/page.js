"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import { lookupByGpa } from "@/data/gradeScale";
import GpaToPercentageGuide from "@/components/calculator-guides/GpaToPercentageGuide";

export default function GpaToPercentageCalculator() {
  const [gpa, setGpa] = useState("");

  function parseInput() {
    const value = parseFloat(gpa);
    const valid = !isNaN(value) && value >= 0 && value <= 4;
    return { value, valid };
  }

  function getResult() {
    const { value, valid } = parseInput();
    if (!valid) return null;

    const row = lookupByGpa(value);
    // The F row has no real percentage floor, so a fabricated midpoint
    // ("Below 60%" midpoint would be nonsense) is replaced with plain text.
    const rangeLabel =
      row.gpa === 0 ? "Below 60%" : `${row.minPercent}–${row.maxPercent}%`;
    const midpoint =
      row.gpa === 0 ? null : Math.round((row.minPercent + row.maxPercent) / 2);

    return { row, rangeLabel, midpoint };
  }

  function getError() {
    if (gpa === "") return "";
    const value = parseFloat(gpa);
    if (isNaN(value) || value < 0 || value > 4) {
      return "GPA must be between 0.00 and 4.00.";
    }
    return "";
  }

  function resetCalculator() {
    setGpa("");
  }

  const result = getResult();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          GPA to Percentage Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Convert your GPA into an equivalent percentage range.
        </p>

        <div className="mt-12">
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Your GPA"
            placeholder="Enter GPA (0.00 - 4.00)"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {getError() && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {getError()}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Equivalent Percentage</h2>

          {result ? (
            <>
              <p
                key={result.rangeLabel}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.rangeLabel}
              </p>
              <p className="mt-4 text-xl font-semibold text-slate-300">
                Letter Grade: {result.row.letter}
              </p>
              {result.midpoint !== null && (
                <p className="mt-2 text-slate-400">
                  Typical midpoint: {result.midpoint}%
                </p>
              )}

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My GPA of ${gpa} ≈ ${result.rangeLabel} (${result.row.letter}) — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter a GPA between 0.00 and 4.00 to see the equivalent percentage.
            </p>
          )}
        </div>

        <GpaToPercentageGuide />

      </div>
    </main>
  );
}
