"use client";

import { useRef, useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import { GRADE_SCALE, lookupByGpa } from "@/data/gradeScale";
import LetterGradeAverageGuide from "@/components/calculator-guides/LetterGradeAverageGuide";

// Excludes the F row's separate display quirks — F is still selectable, its
// gpa of 0 works fine in a plain arithmetic mean.
const LETTER_OPTIONS = GRADE_SCALE.map((row) => ({ letter: row.letter, gpa: row.gpa }));

export default function LetterGradeAverageCalculator() {
  const [rows, setRows] = useState([{ id: 1, letter: "A" }]);
  const nextId = useRef(2);

  function addRow() {
    setRows([...rows, { id: nextId.current++, letter: "A" }]);
  }

  function removeRow(id) {
    if (rows.length === 1) return;
    setRows(rows.filter((row) => row.id !== id));
  }

  function updateRow(id, letter) {
    setRows(rows.map((row) => (row.id === id ? { ...row, letter } : row)));
  }

  function calculateAverage() {
    const total = rows.reduce((sum, row) => {
      const option = LETTER_OPTIONS.find((o) => o.letter === row.letter);
      return sum + option.gpa;
    }, 0);
    return total / rows.length;
  }

  function resetCalculator() {
    setRows([{ id: 1, letter: "A" }]);
    nextId.current = 2;
  }

  const average = calculateAverage();
  const nearest = lookupByGpa(average);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Letter Grade Average Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Average your letter grades directly — no credit hours needed.
        </p>

        <div className="mt-12 space-y-4">
          {rows.map((row, index) => (
            <div
              key={row.id}
              className="grid grid-cols-2 gap-3 sm:grid-cols-[1fr_auto] sm:gap-4 sm:items-center"
            >
              <select
                aria-label={`Grade ${index + 1}`}
                value={row.letter}
                onChange={(e) => updateRow(row.id, e.target.value)}
                className="col-span-2 sm:col-span-1 rounded-xl bg-slate-800 p-4 text-white outline-none border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              >
                {LETTER_OPTIONS.map((option) => (
                  <option key={option.letter} value={option.letter}>
                    {option.letter} ({option.gpa.toFixed(2)})
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeRow(row.id)}
                disabled={rows.length === 1}
                aria-label={`Remove grade ${index + 1}`}
                className="col-span-2 sm:col-span-1 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-4 font-bold transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500/20 disabled:hover:text-red-400 disabled:active:scale-100"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={addRow}
          className="mt-6 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-[0.97]"
        >
          + Add Grade
        </button>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Average Grade</h2>

          <p
            key={nearest.letter}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
          >
            {nearest.letter}
          </p>
          <p className="mt-4 text-xl font-semibold text-slate-300">
            Average GPA: {average.toFixed(2)}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={resetCalculator}
              className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
            >
              Reset
            </button>
            <ShareResultButton
              text={`My letter grade average: ${nearest.letter} (${average.toFixed(2)} GPA) — calculated at studycalc.co`}
            />
          </div>
        </div>

        <LetterGradeAverageGuide />

      </div>
    </main>
  );
}
