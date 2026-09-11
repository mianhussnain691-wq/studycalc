"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import TimeValueOfMoneyGuide from "@/components/calculator-guides/TimeValueOfMoneyGuide";

// FV = PV(1+r)^n + PMT × [((1+r)^n - 1) / r], with the r = 0 edge case
// handled separately since the annuity factor divides by r.
function futureValue(pv, ratePct, periods, pmt) {
  const r = ratePct / 100;
  const growth = Math.pow(1 + r, periods);
  if (r === 0) {
    return pv + pmt * periods;
  }
  return pv * growth + pmt * ((growth - 1) / r);
}

// Solved algebraically from the same formula for PV.
function presentValue(fv, ratePct, periods, pmt) {
  const r = ratePct / 100;
  const growth = Math.pow(1 + r, periods);
  if (r === 0) {
    return fv - pmt * periods;
  }
  return (fv - pmt * ((growth - 1) / r)) / growth;
}

export default function TimeValueOfMoneyCalculator() {
  const [solveFor, setSolveFor] = useState("fv");
  const [knownValue, setKnownValue] = useState("");
  const [rate, setRate] = useState("");
  const [periods, setPeriods] = useState("");
  const [payment, setPayment] = useState("");

  function parseInputs() {
    const known = parseFloat(knownValue);
    const r = parseFloat(rate);
    const n = parseFloat(periods);
    const pmt = payment === "" ? 0 : parseFloat(payment);

    const valid =
      !isNaN(known) && known >= 0 &&
      !isNaN(r) && r >= 0 &&
      !isNaN(n) && n > 0 &&
      !isNaN(pmt) && pmt >= 0;

    return { known, r, n, pmt, valid };
  }

  function getError() {
    if (knownValue !== "") {
      const known = parseFloat(knownValue);
      if (isNaN(known) || known < 0) return "The known value cannot be negative.";
    }
    if (rate !== "") {
      const r = parseFloat(rate);
      if (isNaN(r) || r < 0) return "Interest rate cannot be negative.";
    }
    if (periods !== "") {
      const n = parseFloat(periods);
      if (isNaN(n) || n <= 0) return "Number of periods must be greater than 0.";
    }
    if (payment !== "") {
      const pmt = parseFloat(payment);
      if (isNaN(pmt) || pmt < 0) return "Payment cannot be negative.";
    }
    return "";
  }

  function getResult() {
    const { known, r, n, pmt, valid } = parseInputs();
    if (!valid) return null;

    if (solveFor === "fv") {
      return futureValue(known, r, n, pmt);
    }
    return presentValue(known, r, n, pmt);
  }

  function resetCalculator() {
    setKnownValue("");
    setRate("");
    setPeriods("");
    setPayment("");
  }

  const result = getResult();
  const error = getError();
  const knownLabel = solveFor === "fv" ? "Present Value (PV)" : "Future Value (FV)";
  const resultLabel = solveFor === "fv" ? "Future Value" : "Present Value";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Time Value of Money Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate present value, future value, and annuity growth.
        </p>

        <div className="mt-12">
          <label className="block text-sm font-medium text-slate-400 mb-2">Solve For</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setSolveFor("fv")}
              className={`rounded-xl py-3 font-bold transition-all duration-200 ${
                solveFor === "fv"
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Future Value
            </button>
            <button
              onClick={() => setSolveFor("pv")}
              className={`rounded-xl py-3 font-bold transition-all duration-200 ${
                solveFor === "pv"
                  ? "bg-cyan-500 text-slate-950"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Present Value
            </button>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label={knownLabel}
            placeholder={knownLabel}
            value={knownValue}
            onChange={(e) => setKnownValue(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step="0.01"
            aria-label="Interest rate per period, percent"
            placeholder="Interest Rate per Period (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Number of periods"
            placeholder="Number of Periods"
            value={periods}
            onChange={(e) => setPeriods(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <input
            type="number"
            inputMode="decimal"
            min="0"
            aria-label="Payment per period (optional, for annuities)"
            placeholder="Payment per Period (optional)"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">{resultLabel}</h2>

          {result !== null ? (
            <>
              <p
                key={result}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                ${result.toFixed(2)}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My ${resultLabel}: $${result.toFixed(2)} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Fill in the known value, rate, and periods to see the result.
            </p>
          )}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-white mb-3 text-center">More StudyCalc Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <Link href="/amcas-science-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-cyan-500/40 transition text-center text-slate-300">
              AMCAS Science GPA Calculator
            </Link>
            <Link href="/lsac-law-school-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-cyan-500/40 transition text-center text-slate-300">
              LSAC Law School GPA Calculator
            </Link>
            <Link href="/calculators" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 hover:border-cyan-500/40 transition text-center text-slate-300">
              All Calculators
            </Link>
          </div>
        </div>

        <TimeValueOfMoneyGuide />

      </div>
    </main>
  );
}
