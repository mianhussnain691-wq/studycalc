"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import { computeNeededGpa, getCreditLoadStatus } from "@/lib/semesterMath";
import SemesterPlannerGuide from "@/components/calculator-guides/SemesterPlannerGuide";

export default function SemesterPlanner() {
  const [currentCgpa, setCurrentCgpa] = useState("");
  const [totalCredits, setTotalCredits] = useState("");
  const [targetCgpa, setTargetCgpa] = useState("");
  const [semesterCredits, setSemesterCredits] = useState("");
  const [semesterGoal, setSemesterGoal] = useState("");

  function parseInputs() {
    const cCgpa = parseFloat(currentCgpa);
    const cCredits = parseFloat(totalCredits);
    const tCgpa = parseFloat(targetCgpa);
    const semCredits = parseFloat(semesterCredits);
    const goal = semesterGoal.trim() === "" ? null : parseFloat(semesterGoal);

    const valid =
      !isNaN(cCgpa) && cCgpa >= 0 && cCgpa <= 4 &&
      !isNaN(cCredits) && cCredits >= 0 &&
      !isNaN(tCgpa) && tCgpa >= 0 && tCgpa <= 4 &&
      !isNaN(semCredits) && semCredits > 0 &&
      (goal === null || (!isNaN(goal) && goal >= 0 && goal <= 4));

    return { cCgpa, cCredits, tCgpa, semCredits, goal, valid };
  }

  function getResult() {
    const { cCgpa, cCredits, tCgpa, semCredits, goal, valid } = parseInputs();
    if (!valid) return null;

    const neededGpa = computeNeededGpa({
      current: cCgpa,
      currentCredits: cCredits,
      target: tCgpa,
      remainingCredits: semCredits,
    });
    const loadStatus = getCreditLoadStatus(semCredits);

    return { neededGpa, semCredits, loadStatus, goal, tCgpa };
  }

  function getError() {
    const checks = [
      [currentCgpa, (v) => v >= 0 && v <= 4, "Current CGPA must be between 0.00 and 4.00."],
      [totalCredits, (v) => v >= 0, "Total credits completed cannot be negative."],
      [targetCgpa, (v) => v >= 0 && v <= 4, "Target CGPA must be between 0.00 and 4.00."],
      [semesterCredits, (v) => v > 0, "This semester's credit hours must be greater than 0."],
      [semesterGoal, (v) => v >= 0 && v <= 4, "Your GPA goal must be between 0.00 and 4.00."],
    ];

    for (const [raw, isOk, message] of checks) {
      if (raw === "") continue;
      const value = parseFloat(raw);
      if (isNaN(value) || !isOk(value)) return message;
    }

    return "";
  }

  function resetCalculator() {
    setCurrentCgpa("");
    setTotalCredits("");
    setTargetCgpa("");
    setSemesterCredits("");
    setSemesterGoal("");
  }

  const result = getResult();
  const error = getError();

  let gpaView = null;
  let summaryLine = "";
  let comparison = null;

  if (result) {
    const { neededGpa, semCredits, loadStatus, goal, tCgpa } = result;
    const loadWord = loadStatus.label.toLowerCase();

    if (neededGpa > 4) {
      gpaView = {
        headline: "Not possible",
        message: `Even a 4.00 this semester wouldn't be enough to reach your ${tCgpa.toFixed(2)} CGPA target this term — you'll need more semesters to get there.`,
      };
      summaryLine = `Even a 4.00 this semester (${semCredits} credits, ${loadWord}) wouldn't reach your ${tCgpa.toFixed(2)} CGPA target — you'll need more semesters.`;
    } else if (neededGpa < 0) {
      gpaView = {
        headline: "0.00",
        message: "You're already on track — even a 0.00 this term keeps you at or above your target CGPA.",
      };
      summaryLine = `You're already on track for your ${tCgpa.toFixed(2)} CGPA target — this semester's ${semCredits} credits (${loadWord}) won't pull you below it.`;
    } else {
      gpaView = {
        headline: neededGpa.toFixed(2),
        message: `Average GPA needed this semester across your ${semCredits} credits.`,
      };
      summaryLine = `You need a ${neededGpa.toFixed(2)} GPA this semester (${semCredits} credits, ${loadWord}) to reach your ${tCgpa.toFixed(2)} CGPA target.`;
    }

    if (goal !== null && neededGpa <= 4) {
      const requiredForCompare = Math.max(neededGpa, 0);
      comparison =
        goal >= requiredForCompare
          ? {
              tone: "good",
              message: `Your ${goal.toFixed(2)} goal for this semester meets or exceeds the ${requiredForCompare.toFixed(2)} you actually need — you're aiming high enough.`,
            }
          : {
              tone: "warn",
              message: `Your ${goal.toFixed(2)} goal for this semester falls short of the ${requiredForCompare.toFixed(2)} you need — consider raising it or planning for an extra semester.`,
            };
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Semester Planning Dashboard
        </h1>

        <p className="mt-4 text-center text-slate-400">
          See the GPA you need this semester and your credit load status together, in one place.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Current CGPA"
            placeholder="Current CGPA (0.00 - 4.00)"
            value={currentCgpa}
            onChange={(e) => setCurrentCgpa(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.5"
            min="0"
            inputMode="decimal"
            aria-label="Total credits completed"
            placeholder="Total Credits Completed"
            value={totalCredits}
            onChange={(e) => setTotalCredits(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Target CGPA"
            placeholder="Target CGPA (0.00 - 4.00)"
            value={targetCgpa}
            onChange={(e) => setTargetCgpa(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.5"
            min="0"
            inputMode="decimal"
            aria-label="This semester's planned credit hours"
            placeholder="This Semester's Credit Hours"
            value={semesterCredits}
            onChange={(e) => setSemesterCredits(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Your own GPA goal this semester (optional)"
            placeholder="Your GPA Goal This Semester (optional)"
            value={semesterGoal}
            onChange={(e) => setSemesterGoal(e.target.value)}
            className="sm:col-span-2 rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
            <h2 className="text-lg font-bold text-slate-300">GPA Needed This Semester</h2>
            {gpaView ? (
              <p
                key={gpaView.headline}
                className="mt-4 text-4xl sm:text-5xl font-black text-cyan-400 animate-fade-in-up"
              >
                {gpaView.headline}
              </p>
            ) : (
              <p className="mt-6 text-slate-500 text-sm">Fill in the fields above.</p>
            )}
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
            <h2 className="text-lg font-bold text-slate-300">Credit Load Status</h2>
            {result ? (
              <p
                key={result.loadStatus.label}
                className={`mt-4 text-4xl sm:text-5xl font-black animate-fade-in-up ${result.loadStatus.color}`}
              >
                {result.loadStatus.label}
              </p>
            ) : (
              <p className="mt-6 text-slate-500 text-sm">Fill in the fields above.</p>
            )}
          </div>
        </div>

        {result && gpaView && (
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
            <p className="text-slate-200 text-center leading-relaxed">
              {summaryLine}
            </p>
            <p className="mt-3 text-sm text-slate-400 text-center">{gpaView.message}</p>
            <p className="mt-1 text-sm text-slate-400 text-center">{result.loadStatus.message}</p>

            {comparison && (
              <p
                className={`mt-4 text-center font-semibold ${
                  comparison.tone === "good" ? "text-emerald-400" : "text-amber-400"
                }`}
              >
                {comparison.message}
              </p>
            )}

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={resetCalculator}
                className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
              >
                Reset
              </button>
              <ShareResultButton text={`${summaryLine} — calculated at studycalc.co`} />
            </div>
          </div>
        )}

        <p className="mt-6 text-center text-slate-400">
          Only need one piece of this?{" "}
          <Link href="/target-cgpa-calculator" className="text-cyan-400 hover:underline">
            Target CGPA Calculator
          </Link>
          ,{" "}
          <Link href="/target-gpa-calculator" className="text-cyan-400 hover:underline">
            Target GPA Calculator
          </Link>
          , or{" "}
          <Link href="/semester-credit-load-checker" className="text-cyan-400 hover:underline">
            Credit Load Checker
          </Link>
          .
        </p>

        <SemesterPlannerGuide />

      </div>
    </main>
  );
}
