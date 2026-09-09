"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import ClassRankPercentileGuide from "@/components/calculator-guides/ClassRankPercentileGuide";

// Standard normal CDF via the Abramowitz & Stegun erf approximation —
// accurate to about 1.5e-7, more than sufficient for an estimate tool.
function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  x = Math.abs(x);
  const a1 = 0.254829592, a2 = -0.284496736, a3 = 1.421413741, a4 = -1.453152027, a5 = 1.061405429, p = 0.3275911;
  const t = 1 / (1 + p * x);
  const y = 1 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
  return sign * y;
}

function normalCDF(z) {
  return 0.5 * (1 + erf(z / Math.sqrt(2)));
}

export default function ClassRankPercentileCalculator() {
  const [score, setScore] = useState("");
  const [average, setAverage] = useState("");
  const [stddev, setStddev] = useState("");

  function parseInputs() {
    const s = parseFloat(score);
    const avg = parseFloat(average);
    const sd = parseFloat(stddev);
    const baseValid = !isNaN(s) && !isNaN(avg);
    const hasStddev = stddev !== "" && !isNaN(sd) && sd > 0;
    return { s, avg, sd, baseValid, hasStddev };
  }

  function getError() {
    if (stddev !== "") {
      const sd = parseFloat(stddev);
      if (isNaN(sd) || sd < 0) return "Standard deviation cannot be negative.";
      if (sd === 0) return "Standard deviation must be greater than 0 to compute a percentile (a class with zero spread means everyone scored the same).";
    }
    return "";
  }

  function getResult() {
    const { s, avg, sd, baseValid, hasStddev } = parseInputs();
    if (!baseValid) return null;

    const diff = s - avg;

    if (hasStddev) {
      const z = diff / sd;
      const percentile = normalCDF(z) * 100;
      return { mode: "percentile", z, percentile, diff };
    }

    return { mode: "relative", diff };
  }

  function resetCalculator() {
    setScore("");
    setAverage("");
    setStddev("");
  }

  const result = getResult();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Class Rank & Percentile Estimator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          See roughly where your score stands relative to your class — an estimate, not your official rank.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <input
            type="number"
            inputMode="decimal"
            aria-label="Your score"
            placeholder="Your Score"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            aria-label="Class average"
            placeholder="Class Average"
            value={average}
            onChange={(e) => setAverage(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Class standard deviation (optional)"
            placeholder="Std. Deviation (optional)"
            value={stddev}
            onChange={(e) => setStddev(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Your Estimated Standing</h2>

          {result ? (
            <>
              {result.mode === "percentile" ? (
                <>
                  <p
                    key={result.percentile}
                    className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
                  >
                    {result.percentile.toFixed(1)}th percentile
                  </p>
                  <p className="mt-4 text-slate-300">
                    z-score: {result.z.toFixed(2)} ({result.diff >= 0 ? "above" : "below"} average by {Math.abs(result.diff).toFixed(1)} points)
                  </p>
                </>
              ) : (
                <>
                  <p
                    key={result.diff}
                    className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 animate-fade-in-up"
                  >
                    {result.diff >= 0 ? "Above" : "Below"} average by {Math.abs(result.diff).toFixed(1)} points
                  </p>
                  <p className="mt-4 text-slate-400">
                    Add a standard deviation above for a percentile estimate instead of just a relative position.
                  </p>
                </>
              )}

              <p className="mt-4 text-sm text-slate-500">
                This is a statistical estimate, not your official class rank.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={
                    result.mode === "percentile"
                      ? `My estimated percentile: ${result.percentile.toFixed(1)}th — calculated at studycalc.co`
                      : `My score is ${Math.abs(result.diff).toFixed(1)} points ${result.diff >= 0 ? "above" : "below"} the class average — calculated at studycalc.co`
                  }
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your score and the class average to see your standing. Add the standard deviation for a percentile estimate.
            </p>
          )}
        </div>

        <ClassRankPercentileGuide />

      </div>
    </main>
  );
}
