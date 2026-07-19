"use client";

import { useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Guide Component
import CGPAGuide from "@/components/calculator-guides/CGPAGuide";

export default function CGPACalculator() {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      gpa: "",
    },
  ]);

  function addSemester() {
    setSemesters([
      ...semesters,
      {
        id: Date.now(),
        gpa: "",
      },
    ]);
  }

  function updateSemester(id, value) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === id
          ? { ...semester, gpa: value }
          : semester
      )
    );
  }

  function removeSemester(id) {
    if (semesters.length === 1) return;

    setSemesters(
      setSemesters(semesters.filter((semester) => semester.id !== id))
    );
  }

  function calculateCGPA() {
    const validSemesters = semesters.filter(
      (semester) =>
        semester.gpa !== "" &&
        !isNaN(parseFloat(semester.gpa))
    );

    if (validSemesters.length === 0) {
      return "0.00";
    }

    const total = validSemesters.reduce(
      (sum, semester) => sum + parseFloat(semester.gpa),
      0
    );

    return (total / validSemesters.length).toFixed(2);
  }

  function resetCalculator() {
    setSemesters([
      {
        id: 1,
        gpa: "",
      },
    ]);
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          CGPA Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate your cumulative GPA semester by semester.
        </p>

        <div className="mt-12 space-y-4">
          {semesters.map((semester, index) => (
            <div
              key={semester.id}
              className="grid grid-cols-[1fr_1fr_auto] gap-4 items-center"
            >
              <input
                type="text"
                value={`Semester ${index + 1}`}
                readOnly
                className="rounded-xl bg-slate-800 p-4 outline-none select-none text-slate-300 border border-slate-800"
              />

              <input
                type="number"
                step="0.01"
                min="0"
                max="4"
                placeholder="0.00 - 4.00"
                value={semester.gpa}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || (value >= 0 && value <= 4)) {
                    updateSemester(semester.id, value);
                  }
                }}
                className="rounded-xl bg-slate-800 p-4 outline-none text-white focus:ring-1 focus:ring-cyan-500"
              />

              <button
                onClick={() => removeSemester(semester.id)}
                className="rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 px-5 py-4 font-bold hover:bg-red-500 hover:text-white transition-all duration-200"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={addSemester}
            className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-950 hover:bg-cyan-400 transition"
          >
            + Add Semester
          </button>
          
          <button
            onClick={resetCalculator}
            className="mt-4 w-full rounded-xl border border-slate-700 py-4 font-bold hover:bg-slate-800 transition text-slate-300"
          >
            Reset
          </button>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">
            <h2 className="text-2xl font-bold">
              Your CGPA
            </h2>

            <p className="mt-6 text-6xl font-black text-cyan-400">
              {calculateCGPA() || "0.00"}
            </p>
          </div>
        </div>

        {/* 🔥 EXACTLY INJECTED BELOW THE INTERACTIVE ENGINE */}
        <CGPAGuide />

      </div>
    </main>
  );
}