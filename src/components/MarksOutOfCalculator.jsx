"use client";

import { useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";

export default function MarksOutOfCalculator({ total }) {
  const [marks, setMarks] = useState("");

  function getError() {
    if (marks === "") return "";
    const m = parseFloat(marks);
    if (isNaN(m) || m < 0) return "Marks obtained cannot be negative.";
    if (m > total) return `Marks obtained cannot exceed ${total}.`;
    return "";
  }

  function getResult() {
    const m = parseFloat(marks);
    if (isNaN(m) || m < 0 || m > total) return null;
    return (m / total) * 100;
  }

  const error = getError();
  const result = getResult();

  return (
    <div className="mt-10">
      <div className="max-w-md mx-auto">
        <input
          type="number"
          inputMode="decimal"
          min="0"
          max={total}
          aria-label={`Marks obtained out of ${total}`}
          placeholder={`Marks Obtained (out of ${total})`}
          value={marks}
          onChange={(e) => setMarks(e.target.value)}
          className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 text-center text-lg"
        />
      </div>

      {error && (
        <p className="mt-4 text-center font-semibold text-red-400">{error}</p>
      )}

      <div className="mt-8 max-w-md mx-auto rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
        <h2 className="text-xl font-bold text-white">Your Percentage</h2>

        {result !== null ? (
          <>
            <p
              key={result}
              className="mt-4 text-5xl font-black text-cyan-400 animate-fade-in-up"
            >
              {result.toFixed(2)}%
            </p>
            <p className="mt-3 text-slate-300">
              {marks} out of {total}
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={() => setMarks("")}
                className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
              >
                Reset
              </button>
              <ShareResultButton
                text={`${marks} out of ${total} is ${result.toFixed(2)}% — calculated at studycalc.co`}
              />
            </div>
          </>
        ) : (
          <p className="mt-4 text-slate-500">
            Enter your marks to see the percentage.
          </p>
        )}
      </div>
    </div>
  );
}
