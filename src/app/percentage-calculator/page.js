"use client";

import { useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Guide Component
import PercentageGuide from "@/components/calculator-guides/PercentageGuide";

export default function PercentageCalculator() {
  const [obtainedMarks, setObtainedMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");

  function parseInputs() {
    const obtained = parseFloat(obtainedMarks);
    const total = parseFloat(totalMarks);

    const valid =
      !isNaN(obtained) &&
      !isNaN(total) &&
      total > 0 &&
      obtained >= 0 &&
      obtained <= total;

    return { obtained, total, valid };
  }

  function calculatePercentage() {
    const { obtained, total, valid } = parseInputs();

    if (!valid) {
      return "0.00";
    }

    return ((obtained / total) * 100).toFixed(2);
  }

  function getPercentageStatus() {
    if (!parseInputs().valid) return "";

    const percentage = parseFloat(calculatePercentage());

    if (percentage >= 90) return "Excellent 🟢";
    if (percentage >= 80) return "Very Good 🔵";
    if (percentage >= 70) return "Good 🟡";
    if (percentage >= 60) return "Average 🟠";

    return "Needs Improvement 🔴";
  }

  // Kept in lockstep with getPercentageStatus() — the bar used to have four
  // bands against the status text's five, so 60-69% read "Average" over red.
  function getBarColor() {
    const percentage = parseFloat(calculatePercentage());

    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 80) return "bg-cyan-400";
    if (percentage >= 70) return "bg-yellow-400";
    if (percentage >= 60) return "bg-orange-400";

    return "bg-red-500";
  }

  function getError() {
    const obtained = parseFloat(obtainedMarks);
    const total = parseFloat(totalMarks);

    if (totalMarks !== "" && (isNaN(total) || total <= 0)) {
      return "Total marks must be greater than 0.";
    }

    if (obtainedMarks !== "" && (isNaN(obtained) || obtained < 0)) {
      return "Obtained marks cannot be negative.";
    }

    if (!isNaN(obtained) && !isNaN(total) && obtained > total) {
      return "Obtained marks cannot be greater than total marks.";
    }

    return "";
  }

  function resetCalculator() {
    setObtainedMarks("");
    setTotalMarks("");
  }

  const percentage = calculatePercentage();
  const hasResult = parseInputs().valid;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Percentage Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate percentage instantly.
        </p>

        <div className="mt-12 space-y-6">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Marks obtained"
            placeholder="Obtained Marks"
            value={obtainedMarks}
            onChange={(e) => setObtainedMarks(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Total marks"
            placeholder="Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {getError() && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {getError()}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">
            Percentage
          </h2>

          <p
            key={percentage}
            className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
          >
            {percentage}%
          </p>

          {hasResult ? (
            <p className="mt-4 text-xl font-semibold text-slate-300">
              {getPercentageStatus()}
            </p>
          ) : (
            <p className="mt-4 text-slate-500">
              Enter your obtained and total marks to see your percentage.
            </p>
          )}

          <div className="mt-8">
            <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${getBarColor()}`}
                style={{
                  width: `${percentage}%`,
                }}
              ></div>
            </div>
          </div>

          <button
            onClick={resetCalculator}
            className="mt-8 inline-block rounded-xl border border-slate-700 px-6 py-3 text-base font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
          >
            Reset All
          </button>
        </div>

        {/* 🔥 INJECTED ZONE: Pure Authority SEO Manual loaded right beneath the layout */}
        <PercentageGuide />

      </div>
    </main>
  );
}