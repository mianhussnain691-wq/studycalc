"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import CreditHourEstimatorGuide from "@/components/calculator-guides/CreditHourEstimatorGuide";

export default function CreditHourEstimator() {
  const [contactHours, setContactHours] = useState("");

  function parseInput() {
    const value = parseFloat(contactHours);
    const valid = !isNaN(value) && value > 0;
    return { value, valid };
  }

  function getError() {
    if (contactHours === "") return "";
    const value = parseFloat(contactHours);
    if (isNaN(value) || value <= 0) return "Weekly class hours must be greater than 0.";
    return "";
  }

  function getResult() {
    const { value, valid } = parseInput();
    if (!valid) return null;

    const creditHours = value;
    const outsideHours = value * 2;
    const totalHours = value * 3;

    return { creditHours, outsideHours, totalHours };
  }

  function resetCalculator() {
    setContactHours("");
  }

  const result = getResult();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Credit Hour Estimator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Convert weekly class hours to credit hours using the common US convention.
        </p>

        <div className="mt-12">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Weekly class or contact hours"
            placeholder="Weekly Class/Contact Hours"
            value={contactHours}
            onChange={(e) => setContactHours(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {error && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {error}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Estimated Credit Hours</h2>

          {result ? (
            <>
              <p
                key={result.creditHours}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.creditHours}
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400">Expected Outside Study</p>
                  <p className="mt-1 text-2xl font-bold text-emerald-400">{result.outsideHours} hrs/wk</p>
                </div>
                <div className="rounded-xl bg-slate-950 border border-slate-800 p-4">
                  <p className="text-sm text-slate-400">Total Weekly Commitment</p>
                  <p className="mt-1 text-2xl font-bold text-white">{result.totalHours} hrs/wk</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-500">
                Based on the common US convention (1 credit hour ≈ 1 class hour + 2 outside hours per week) — not universal, some institutions and lab/studio courses use different ratios.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`${contactHours} weekly class hours ≈ ${result.creditHours} credit hours — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your weekly class hours to estimate the credit hours.
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          Adding up credit hours across your whole semester?{" "}
          <Link href="/semester-credit-load-checker" className="text-cyan-400 hover:underline">
            Check your total credit load
          </Link>.
        </p>

        <CreditHourEstimatorGuide />

      </div>
    </main>
  );
}
