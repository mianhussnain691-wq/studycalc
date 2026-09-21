"use client";

import { useRef, useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Guide Component
import CGPAGuide from "@/components/calculator-guides/CGPAGuide";
import ShareResultButton from "@/components/ShareResultButton";
import DownloadResultCard from "@/components/DownloadResultCard";

export default function CGPACalculator() {
  const [semesters, setSemesters] = useState([
    {
      id: 1,
      gpa: "",
      credits: "",
    },
  ]);

  // Date.now() collides when two rows are added within the same millisecond.
  const nextId = useRef(2);

  function addSemester() {
    setSemesters([
      ...semesters,
      {
        id: nextId.current++,
        gpa: "",
        credits: "",
      },
    ]);
  }

  function updateSemester(id, field, value) {
    setSemesters(
      semesters.map((semester) =>
        semester.id === id
          ? { ...semester, [field]: value }
          : semester
      )
    );
  }

  function removeSemester(id) {
    if (semesters.length === 1) return;

    setSemesters(semesters.filter((semester) => semester.id !== id));
  }

  // A semester only counts once BOTH its GPA and its credit hours are usable —
  // CGPA is credit-weighted, so a GPA without credits has no weight to apply.
  function validSemesters() {
    return semesters
      .map((semester) => ({
        gpa: parseFloat(semester.gpa),
        credits: parseFloat(semester.credits),
      }))
      .filter(
        ({ gpa, credits }) =>
          !isNaN(gpa) &&
          gpa >= 0 &&
          gpa <= 4 &&
          !isNaN(credits) &&
          credits > 0
      );
  }

  function totalCredits() {
    return validSemesters().reduce((sum, s) => sum + s.credits, 0);
  }

  // CGPA = Σ(GPA × credit hours) ÷ Σ(credit hours)
  function calculateCGPA() {
    const valid = validSemesters();

    if (valid.length === 0) {
      return "0.00";
    }

    const qualityPoints = valid.reduce(
      (sum, s) => sum + s.gpa * s.credits,
      0
    );
    const credits = valid.reduce((sum, s) => sum + s.credits, 0);

    if (credits === 0) {
      return "0.00";
    }

    return (qualityPoints / credits).toFixed(2);
  }

  function getStanding() {
    if (validSemesters().length === 0) return "";

    const cgpa = parseFloat(calculateCGPA());

    if (cgpa >= 3.7) return "Excellent 🟢";
    if (cgpa >= 3.3) return "Very Good 🔵";
    if (cgpa >= 3.0) return "Good 🟡";
    if (cgpa >= 2.0) return "Satisfactory 🟠";

    return "Needs Improvement 🔴";
  }

  function getError() {
    for (const semester of semesters) {
      const gpa = parseFloat(semester.gpa);
      const credits = parseFloat(semester.credits);

      if (semester.gpa !== "" && (isNaN(gpa) || gpa < 0 || gpa > 4)) {
        return "GPA must be between 0.00 and 4.00.";
      }

      if (semester.credits !== "" && (isNaN(credits) || credits <= 0)) {
        return "Credit hours must be greater than 0.";
      }

      if (semester.gpa !== "" && semester.credits === "") {
        return "Enter credit hours for each semester — CGPA is weighted by credits.";
      }
    }

    return "";
  }

  function resetCalculator() {
    setSemesters([
      {
        id: 1,
        gpa: "",
        credits: "",
      },
    ]);
    nextId.current = 2;
  }

  const hasResult = validSemesters().length > 0;
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          CGPA Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate your cumulative GPA semester by semester, weighted by credit hours.
        </p>

        <div className="mt-12 space-y-4">
          {semesters.map((semester, index) => (
            <div
              key={semester.id}
              className="grid grid-cols-2 gap-3 sm:grid-cols-[7rem_1fr_1fr_auto] sm:gap-4 sm:items-center"
            >
              <span className="col-span-2 sm:col-span-1 rounded-xl bg-slate-800/60 px-4 py-4 text-slate-300 font-semibold select-none border border-slate-800">
                Semester {index + 1}
              </span>

              <input
                type="number"
                step="0.01"
                min="0"
                max="4"
                inputMode="decimal"
                aria-label={`Semester ${index + 1} GPA`}
                placeholder="GPA (0.00 - 4.00)"
                value={semester.gpa}
                onChange={(e) =>
                  updateSemester(semester.id, "gpa", e.target.value)
                }
                className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />

              <input
                type="number"
                step="0.5"
                min="0"
                inputMode="decimal"
                aria-label={`Semester ${index + 1} credit hours`}
                placeholder="Credit Hours"
                value={semester.credits}
                onChange={(e) =>
                  updateSemester(semester.id, "credits", e.target.value)
                }
                className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />

              <button
                onClick={() => removeSemester(semester.id)}
                disabled={semesters.length === 1}
                aria-label={`Remove semester ${index + 1}`}
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

        <div className="mt-8">
          <button
            onClick={addSemester}
            className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-[0.97]"
          >
            + Add Semester
          </button>

          <button
            onClick={resetCalculator}
            className="mt-4 w-full rounded-xl border border-slate-700 py-4 font-bold text-slate-300 transition-all duration-200 hover:bg-slate-800 active:scale-[0.97]"
          >
            Reset
          </button>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
            <h2 className="text-2xl font-bold">
              Your CGPA
            </h2>

            <p
              key={calculateCGPA()}
              className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
            >
              {calculateCGPA()}
            </p>

            {hasResult ? (
              <>
                <p className="mt-4 text-xl font-semibold text-slate-300">
                  {getStanding()}
                </p>
                <p className="mt-4 text-slate-400">
                  Total Credit Hours:{" "}
                  <span className="font-bold text-white">{totalCredits()}</span>
                </p>
              </>
            ) : (
              <p className="mt-4 text-slate-500">
                Enter a GPA and credit hours for each semester to see your CGPA.
              </p>
            )}

            {hasResult && (
              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <ShareResultButton
                  text={`My CGPA: ${calculateCGPA()} — calculated at studycalc.co`}
                />
                <DownloadResultCard
                  toolName="CGPA Calculator"
                  label="Your CGPA"
                  value={calculateCGPA()}
                  caption="Cumulative GPA"
                  fileName="studycalc-cgpa"
                />
              </div>
            )}
          </div>
        </div>

        {/* 🔥 EXACTLY INJECTED BELOW THE INTERACTIVE ENGINE */}
        <CGPAGuide />

      </div>
    </main>
  );
}