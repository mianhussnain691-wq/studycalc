"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import GradeCurveGuide from "@/components/calculator-guides/GradeCurveGuide";

export default function GradeCurveCalculator() {
  const [score, setScore] = useState("");
  const [classAverage, setClassAverage] = useState("");
  const [targetAverage, setTargetAverage] = useState("");

  function parseInputs() {
    const s = parseFloat(score);
    const avg = parseFloat(classAverage);
    const target = parseFloat(targetAverage);
    const valid =
      !isNaN(s) && s >= 0 && s <= 100 &&
      !isNaN(avg) && avg >= 0 && avg <= 100 &&
      !isNaN(target) && target >= 0 && target <= 100;
    return { s, avg, target, valid };
  }

  function getError() {
    const checks = [
      [score, "Your score"],
      [classAverage, "Class average"],
      [targetAverage, "Target average"],
    ];
    for (const [raw, label] of checks) {
      if (raw === "") continue;
      const value = parseFloat(raw);
      if (isNaN(value) || value < 0 || value > 100) {
        return `${label} must be between 0 and 100.`;
      }
    }
    return "";
  }

  function getResult() {
    const { s, avg, target, valid } = parseInputs();
    if (!valid) return null;

    const curveAmount = target - avg;
    const rawCurved = s + curveAmount;
    const curvedScore = Math.min(100, Math.max(0, rawCurved));
    const capped = rawCurved !== curvedScore;

    return { curveAmount, curvedScore, capped };
  }

  function resetCalculator() {
    setScore("");
    setClassAverage("");
    setTargetAverage("");
  }

  const result = getResult();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Grade Curve Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          See your curved score instantly using the common linear curve method.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            aria-label="Your raw score"
            placeholder="Your Raw Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            aria-label="Class average"
            placeholder="Class Average"
            value={classAverage}
            onChange={(e) => setClassAverage(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            max="100"
            aria-label="Target average after curving"
            placeholder="Target Average"
            value={targetAverage}
            onChange={(e) => setTargetAverage(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Your Curved Score</h2>

          {result ? (
            <>
              <p
                key={result.curvedScore}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.curvedScore.toFixed(1)}
              </p>
              <p className="mt-4 text-slate-300">
                Curve applied: {result.curveAmount >= 0 ? "+" : ""}{result.curveAmount.toFixed(1)} points
              </p>
              {result.capped && (
                <p className="mt-2 text-sm text-amber-400">
                  Capped at the {result.curveAmount > 0 ? "100-point maximum" : "0-point minimum"} — the raw curve calculation would have gone {result.curveAmount > 0 ? "above 100" : "below 0"}.
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
                  text={`My curved score: ${result.curvedScore.toFixed(1)} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your score, the class average, and the target average to see your curved score.
            </p>
          )}
        </div>

        <GradeCurveGuide />

      </div>
    </main>
  );
}
