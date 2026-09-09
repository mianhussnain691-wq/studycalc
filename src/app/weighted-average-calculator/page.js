"use client";

import { useRef, useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import WeightedAverageGuide from "@/components/calculator-guides/WeightedAverageGuide";

export default function WeightedAverageCalculator() {
  const [rows, setRows] = useState([
    { id: 1, label: "", score: "", weight: "" },
  ]);

  // Date.now() collides when two rows are added within the same millisecond.
  const nextId = useRef(2);

  function addRow() {
    setRows([...rows, { id: nextId.current++, label: "", score: "", weight: "" }]);
  }

  function removeRow(id) {
    if (rows.length === 1) return;
    setRows(rows.filter((row) => row.id !== id));
  }

  function updateRow(id, field, value) {
    setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));
  }

  // Only rows with both a valid score and a valid, positive weight count —
  // weights don't need to sum to 100, they're normalized automatically.
  function validRows() {
    return rows
      .map((row) => ({
        score: parseFloat(row.score),
        weight: parseFloat(row.weight),
      }))
      .filter(
        ({ score, weight }) =>
          !isNaN(score) && score >= 0 && !isNaN(weight) && weight > 0
      );
  }

  function calculateAverage() {
    const valid = validRows();
    if (valid.length === 0) return null;

    const totalWeight = valid.reduce((sum, r) => sum + r.weight, 0);
    const weightedSum = valid.reduce((sum, r) => sum + r.score * r.weight, 0);

    return weightedSum / totalWeight;
  }

  function getError() {
    for (const row of rows) {
      if (row.score !== "" && (isNaN(parseFloat(row.score)) || parseFloat(row.score) < 0)) {
        return "Scores cannot be negative.";
      }
      if (row.weight !== "" && (isNaN(parseFloat(row.weight)) || parseFloat(row.weight) <= 0)) {
        return "Weights must be greater than 0.";
      }
    }
    return "";
  }

  function resetCalculator() {
    setRows([{ id: 1, label: "", score: "", weight: "" }]);
    nextId.current = 2;
  }

  const average = calculateAverage();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Weighted Average Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate any weighted average from scores and weights — weights don&apos;t need to add up to 100.
        </p>

        <div className="mt-12 space-y-4">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_1fr_1fr_auto] sm:gap-4 sm:items-center"
            >
              <input
                type="text"
                aria-label={`Row ${index + 1} label`}
                placeholder={`Item ${index + 1} (optional)`}
                value={row.label}
                onChange={(e) => updateRow(row.id, "label", e.target.value)}
                className="col-span-2 sm:col-span-1 rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />
              <input
                type="number"
                inputMode="decimal"
                min="0"
                aria-label={`Row ${index + 1} score`}
                placeholder="Score"
                value={row.score}
                onChange={(e) => updateRow(row.id, "score", e.target.value)}
                className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />
              <input
                type="number"
                inputMode="decimal"
                min="0"
                aria-label={`Row ${index + 1} weight`}
                placeholder="Weight"
                value={row.weight}
                onChange={(e) => updateRow(row.id, "weight", e.target.value)}
                className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />
              <button
                onClick={() => removeRow(row.id)}
                disabled={rows.length === 1}
                aria-label={`Remove row ${index + 1}`}
                className="col-span-2 sm:col-span-1 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-4 font-bold transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500/20 disabled:hover:text-red-400 disabled:active:scale-100"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {error && (
          <p className="mt-6 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <button
          onClick={addRow}
          className="mt-6 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-[0.97]"
        >
          + Add Row
        </button>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Weighted Average</h2>

          {average !== null ? (
            <>
              <p
                key={average}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {average.toFixed(2)}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My weighted average: ${average.toFixed(2)} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter a score and weight for at least one row to see the weighted average.
            </p>
          )}
        </div>

        <WeightedAverageGuide />

      </div>
    </main>
  );
}
