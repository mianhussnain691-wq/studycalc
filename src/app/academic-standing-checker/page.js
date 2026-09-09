"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import AcademicStandingGuide from "@/components/calculator-guides/AcademicStandingGuide";

// Deliberately no red/alarm colors and no "danger"/"failing"/"at risk"
// language anywhere in this file — this tool touches on student stress and
// wellbeing, so the tone stays calm and informative throughout.
function getStanding(gpa) {
  if (gpa < 2.0) {
    return {
      label: "Below Typical Threshold",
      color: "text-amber-400",
      message: "This is below the common 2.0 CGPA threshold many US institutions use for good academic standing.",
    };
  }
  if (gpa < 2.5) {
    return {
      label: "Good Standing (Close to Threshold)",
      color: "text-cyan-400",
      message: "This clears the common 2.0 threshold, though it's on the closer side — a bit more room helps guard against a difficult semester.",
    };
  }
  return {
    label: "Good Standing",
    color: "text-cyan-400",
    message: "This is comfortably above the common 2.0 threshold many US institutions use.",
  };
}

export default function AcademicStandingChecker() {
  const [gpa, setGpa] = useState("");
  const [credits, setCredits] = useState("");

  function parseInputs() {
    const g = parseFloat(gpa);
    const c = parseFloat(credits);
    const valid = !isNaN(g) && g >= 0 && g <= 4 && !isNaN(c) && c >= 0;
    return { g, c, valid };
  }

  function getError() {
    if (gpa !== "") {
      const g = parseFloat(gpa);
      if (isNaN(g) || g < 0 || g > 4) return "GPA must be between 0.00 and 4.00.";
    }
    if (credits !== "") {
      const c = parseFloat(credits);
      if (isNaN(c) || c < 0) return "Credit hours cannot be negative.";
    }
    return "";
  }

  function resetCalculator() {
    setGpa("");
    setCredits("");
  }

  const { g, c, valid } = parseInputs();
  const standing = valid ? getStanding(g) : null;
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Academic Standing Checker
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Understand your GPA status against the common academic standing threshold.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Cumulative GPA"
            placeholder="Cumulative GPA (0.00 - 4.00)"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Total credit hours completed"
            placeholder="Total Credit Hours Completed"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Your Academic Standing</h2>

          {standing ? (
            <>
              <p
                key={standing.label}
                className={`mt-6 text-3xl sm:text-4xl md:text-5xl font-black animate-fade-in-up ${standing.color}`}
              >
                {standing.label}
              </p>
              <p className="mt-4 text-slate-300">{standing.message}</p>
              <p className="mt-4 text-sm text-slate-500">
                {c} credit{c === 1 ? "" : "s"} completed. Based on the commonly used 2.0 CGPA threshold — your institution&apos;s official policy may differ, so check your academic catalog.
              </p>
              {g < 2.5 && (
                <p className="mt-4 text-sm text-slate-400">
                  Many schools offer academic support resources — tutoring, advising, and study skills
                  workshops — worth checking with your advisor about, whatever your current standing.
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
                  text={`Checking my academic standing — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your cumulative GPA and credit hours to see your standing.
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          Looking to improve your GPA?{" "}
          <Link href="/how-to-raise-gpa-fast" className="text-cyan-400 hover:underline">
            See strategies here
          </Link>.
        </p>

        <AcademicStandingGuide />

      </div>
    </main>
  );
}
