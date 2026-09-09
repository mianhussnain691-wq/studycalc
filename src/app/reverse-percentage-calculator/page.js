"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import ReversePercentageGuide from "@/components/calculator-guides/ReversePercentageGuide";

export default function ReversePercentageCalculator() {
  const [part, setPart] = useState("");
  const [percent, setPercent] = useState("");

  function parseInputs() {
    const p = parseFloat(part);
    const pct = parseFloat(percent);
    const valid = !isNaN(p) && p >= 0 && !isNaN(pct) && pct > 0;
    return { p, pct, valid };
  }

  function getResult() {
    const { p, pct, valid } = parseInputs();
    if (!valid) return null;
    return p / (pct / 100);
  }

  function getError() {
    if (part !== "") {
      const p = parseFloat(part);
      if (isNaN(p) || p < 0) return "The known part cannot be negative.";
    }
    if (percent !== "") {
      const pct = parseFloat(percent);
      if (isNaN(pct) || pct <= 0) return "The percentage must be greater than 0.";
    }
    return "";
  }

  function resetCalculator() {
    setPart("");
    setPercent("");
  }

  const result = getResult();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Reverse Percentage Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Know a part and its percentage? Find the whole instantly.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Known part"
            placeholder="Known Part (e.g. 45)"
            value={part}
            onChange={(e) => setPart(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Percentage that part represents"
            placeholder="Is What % of the Total (e.g. 30)"
            value={percent}
            onChange={(e) => setPercent(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">The Whole / Total</h2>

          {result !== null ? (
            <>
              <p
                key={result}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.toFixed(2)}
              </p>
              <p className="mt-4 text-slate-300">
                {part} is {percent}% of {result.toFixed(2)}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`${part} is ${percent}% of ${result.toFixed(2)} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter the known part and its percentage to find the total.
            </p>
          )}
        </div>

        <ReversePercentageGuide />

      </div>
    </main>
  );
}
