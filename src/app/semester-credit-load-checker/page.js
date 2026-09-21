"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import SemesterCreditLoadGuide from "@/components/calculator-guides/SemesterCreditLoadGuide";
import { getCreditLoadStatus } from "@/lib/semesterMath";

export default function SemesterCreditLoadChecker() {
  const [credits, setCredits] = useState("");

  function parseInput() {
    const value = parseFloat(credits);
    const valid = !isNaN(value) && value >= 0;
    return { value, valid };
  }

  function getError() {
    if (credits === "") return "";
    const value = parseFloat(credits);
    if (isNaN(value) || value < 0) return "Credit hours cannot be negative.";
    return "";
  }

  function resetCalculator() {
    setCredits("");
  }

  const { value, valid } = parseInput();
  const status = valid ? getCreditLoadStatus(value) : null;
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Semester Credit Load Checker
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Check whether your semester credit load is part-time, full-time, or overload.
        </p>

        <div className="mt-12">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Total credit hours this semester"
            placeholder="Total Credit Hours This Semester"
            value={credits}
            onChange={(e) => setCredits(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {error && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {error}
            </p>
          )}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Your Credit Load Status</h2>

          {status ? (
            <>
              <p
                key={status.label}
                className={`mt-6 text-4xl sm:text-5xl md:text-6xl font-black animate-fade-in-up ${status.color}`}
              >
                {status.label}
              </p>
              <p className="mt-4 text-slate-300">{status.message}</p>
              <p className="mt-4 text-sm text-slate-500">
                Based on the common US convention (below 12 = part-time, 12-17 = full-time, 18+ = overload) — check your own institution&apos;s catalog for its exact policy.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My ${credits}-credit semester is classified as ${status.label} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Enter your total credit hours to check your status.
            </p>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          Wondering how contact hours convert to credit hours?{" "}
          <Link href="/credit-hour-estimator" className="text-cyan-400 hover:underline">
            Use the Credit Hour Estimator
          </Link>.
        </p>

        <SemesterCreditLoadGuide />

      </div>
    </main>
  );
}
