"use client";

import { useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Guide Component
import AttendanceGuide from "@/components/calculator-guides/AttendanceGuide";
import ShareResultButton from "@/components/ShareResultButton";

const TARGET = 75;

export default function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");

  // Single source of truth for "are these inputs usable?" — every other
  // function derives from this so they can never disagree with each other.
  function parseInputs() {
    const total = parseFloat(totalClasses);
    const attended = parseFloat(attendedClasses);

    const valid =
      !isNaN(total) &&
      !isNaN(attended) &&
      total > 0 &&
      attended >= 0 &&
      attended <= total;

    return { total, attended, valid };
  }

  function calculateAttendance() {
    const { total, attended, valid } = parseInputs();

    if (!valid) {
      return "0.00";
    }

    return ((attended / total) * 100).toFixed(2);
  }

  function getAttendanceStatus() {
    const { valid } = parseInputs();

    if (!valid) return "";

    const attendance = parseFloat(calculateAttendance());

    if (attendance >= 90) return "Excellent 🟢";
    if (attendance >= 75) return "Safe 🟢";
    if (attendance >= 60) return "Warning 🟡";

    return "Low Attendance 🔴";
  }

  function classesNeeded() {
    const { total, attended, valid } = parseInputs();

    if (!valid) {
      return "";
    }

    if ((attended / total) * 100 >= TARGET) {
      return `✅ You already have ${TARGET}% or more attendance.`;
    }

    // Solve (attended + x) / (total + x) >= t for x, instead of counting up
    // one class at a time — the old loop ran O(total) times per keystroke.
    const t = TARGET / 100;
    const extra = Math.max(
      0,
      Math.ceil((t * total - attended) / (1 - t))
    );

    return `📚 Attend ${extra} more class(es) to reach ${TARGET}%.`;
  }

  function getError() {
    const total = parseFloat(totalClasses);
    const attended = parseFloat(attendedClasses);

    if (totalClasses !== "" && (isNaN(total) || total <= 0)) {
      return "Total classes must be greater than 0.";
    }

    if (attendedClasses !== "" && (isNaN(attended) || attended < 0)) {
      return "Classes attended cannot be negative.";
    }

    if (!isNaN(total) && !isNaN(attended) && attended > total) {
      return "Attended classes cannot be greater than total classes.";
    }

    return "";
  }

  function resetCalculator() {
    setTotalClasses("");
    setAttendedClasses("");
  }

  const percentage = calculateAttendance();
  const hasResult = parseInputs().valid;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Attendance Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate your attendance percentage instantly.
        </p>

        <div className="mt-12 space-y-6">
          <input
            type="number"
            inputMode="numeric"
            min="0"
            aria-label="Total classes held"
            placeholder="Total Classes"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          <input
            type="number"
            inputMode="numeric"
            min="0"
            aria-label="Classes you attended"
            placeholder="Classes Attended"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {getError() && (
            <p className="mt-3 text-center text-red-400 font-medium">
              {getError()}
            </p>
          )}
        </div>

        {/* Calculator Display Result Board */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">
            Attendance Percentage
          </h2>

          <p
            key={percentage}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
          >
            {percentage}%
          </p>

          {hasResult ? (
            <>
              <p className="mt-4 text-xl font-semibold text-slate-300">
                {getAttendanceStatus()}
              </p>
              <p className="mt-6 text-lg text-slate-300">
                {classesNeeded()}
              </p>
            </>
          ) : (
            <p className="mt-4 text-slate-500">
              Enter your total and attended classes to see your attendance.
            </p>
          )}

          <div className="mt-8">
            <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  parseFloat(percentage) >= 90
                    ? "bg-green-500"
                    : parseFloat(percentage) >= 75
                    ? "bg-cyan-400"
                    : parseFloat(percentage) >= 60
                    ? "bg-yellow-400"
                    : "bg-red-500"
                }`}
                style={{
                  width: `${percentage}%`,
                }}
              ></div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={resetCalculator}
              className="flex-1 rounded-xl border border-slate-700 py-4 text-lg font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
            >
              Reset
            </button>
            {hasResult && (
              <ShareResultButton
                text={`My attendance: ${percentage}% — calculated at studycalc.co`}
                className="flex-1"
              />
            )}
          </div>
        </div>

        {/* 🔥 EXTRA ZONE: Production-ready 2000-word Authority SEO Structure renders beautifully below layout */}
        <AttendanceGuide />

      </div>
    </main>
  );
}