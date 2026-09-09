"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import DeansListGuide from "@/components/calculator-guides/DeansListGuide";

const GPA_THRESHOLD = 3.5;
const CREDIT_THRESHOLD = 12;

export default function DeansListCalculator() {
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

  function getResult() {
    const { g, c, valid } = parseInputs();
    if (!valid) return null;

    const gpaOk = g >= GPA_THRESHOLD;
    const creditsOk = c >= CREDIT_THRESHOLD;
    const qualifies = gpaOk && creditsOk;

    let message;
    if (qualifies) {
      message = "You meet the common Dean's List threshold — nice work!";
    } else if (!gpaOk && creditsOk) {
      const gap = (GPA_THRESHOLD - g).toFixed(2);
      message = `You're ${gap} GPA points away from the common 3.5 threshold — a strong next semester could close that gap.`;
    } else if (gpaOk && !creditsOk) {
      const gap = CREDIT_THRESHOLD - c;
      message = `Your GPA already clears the common threshold — you'd typically need ${gap} more credit${gap === 1 ? "" : "s"} this semester to qualify.`;
    } else {
      const gpaGap = (GPA_THRESHOLD - g).toFixed(2);
      const creditGap = CREDIT_THRESHOLD - c;
      message = `You're ${gpaGap} GPA points and ${creditGap} credit${creditGap === 1 ? "" : "s"} away from the common threshold — every semester is a fresh chance to get there.`;
    }

    return { qualifies, message };
  }

  function resetCalculator() {
    setGpa("");
    setCredits("");
  }

  const result = getResult();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Dean&apos;s List & Honor Roll Checker
        </h1>

        <p className="mt-4 text-center text-slate-400">
          See how your semester GPA compares to the common Dean&apos;s List threshold.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            step="0.01"
            min="0"
            max="4"
            inputMode="decimal"
            aria-label="Semester GPA"
            placeholder="Semester GPA (0.00 - 4.00)"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Credit hours this semester"
            placeholder="Credit Hours This Semester"
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
          <h2 className="text-2xl font-bold">Dean&apos;s List Status</h2>

          {result ? (
            <>
              <p
                key={result.qualifies}
                className="mt-6 text-3xl sm:text-4xl md:text-5xl font-black text-cyan-400 animate-fade-in-up"
              >
                {result.qualifies ? "🎉 You Qualify!" : "Keep Going"}
              </p>
              <p className="mt-4 text-slate-300">{result.message}</p>
              <p className="mt-4 text-sm text-slate-500">
                Based on the common 3.5 GPA / 12+ credit convention — check your school&apos;s exact policy, as it varies by institution.
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
                    result.qualifies
                      ? `I qualify for the Dean's List! — calculated at studycalc.co`
                      : `Checking my Dean's List status — calculated at studycalc.co`
                  }
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your semester GPA and credit hours to check your status.
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          Aiming for a scholarship instead?{" "}
          <Link href="/gpa-for-scholarships" className="text-cyan-400 hover:underline">
            See GPA requirements for scholarships
          </Link>.
        </p>

        <DeansListGuide />

      </div>
    </main>
  );
}
