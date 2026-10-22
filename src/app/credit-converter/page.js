"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import SourcesBlock from "@/components/SourcesBlock";
import CreditConverterGuide from "@/components/calculator-guides/CreditConverterGuide";

// Rule-of-thumb ratio some institutions use for a quick estimate. No single
// official body mandates this — see the guide's hedging and the
// workload-based derivation below for why it's a range, not one number.
const RULE_OF_THUMB_ECTS_PER_US_CREDIT = 2;

// Workload-based derivation, from two already-sourced conventions instead of
// an invented number:
//   US: 1 credit = 1 contact hour + 2 outside hours/week (credit-hour-estimator's
//       existing convention) x a 15-week semester = 45 hours/credit.
//   ECTS: 25-30 hours/credit (European Commission ECTS Users' Guide, 2015).
const US_HOURS_PER_CREDIT_SEMESTER = 45;
const ECTS_HOURS_LOW = 25;
const ECTS_HOURS_HIGH = 30;

const PAKISTAN_PRESETS = [
  { label: "Theory only: 3(3+0)", theory: 3, lab: 0 },
  { label: "Lab only: 1(0+1)", theory: 0, lab: 1 },
  { label: "Theory + Lab: 3(2+1)", theory: 2, lab: 1 },
];

export default function CreditConverter() {
  const [direction, setDirection] = useState("ectsToUs");
  const [value, setValue] = useState("");

  const [theoryCredits, setTheoryCredits] = useState("");
  const [labCredits, setLabCredits] = useState("");

  function parseInput() {
    const v = parseFloat(value);
    const valid = !isNaN(v) && v > 0;
    return { v, valid };
  }

  function getError() {
    if (value === "") return "";
    const { valid } = parseInput();
    if (!valid) return "Enter a credit value greater than 0.";
    return "";
  }

  function getResult() {
    const { v, valid } = parseInput();
    if (!valid) return null;

    if (direction === "ectsToUs") {
      const ruleOfThumb = v / RULE_OF_THUMB_ECTS_PER_US_CREDIT;
      const workloadHours = { low: v * ECTS_HOURS_LOW, high: v * ECTS_HOURS_HIGH };
      const workloadUsCreditsLow = workloadHours.low / US_HOURS_PER_CREDIT_SEMESTER;
      const workloadUsCreditsHigh = workloadHours.high / US_HOURS_PER_CREDIT_SEMESTER;
      return {
        ruleOfThumbLabel: `${ruleOfThumb.toFixed(1)} US credits`,
        workloadLabel: `${workloadUsCreditsLow.toFixed(1)}–${workloadUsCreditsHigh.toFixed(1)} US credits`,
        workloadHoursLabel: `${workloadHours.low.toFixed(0)}–${workloadHours.high.toFixed(0)} hours total`,
      };
    }

    const ruleOfThumb = v * RULE_OF_THUMB_ECTS_PER_US_CREDIT;
    const totalHours = v * US_HOURS_PER_CREDIT_SEMESTER;
    const workloadEctsLow = totalHours / ECTS_HOURS_HIGH;
    const workloadEctsHigh = totalHours / ECTS_HOURS_LOW;
    return {
      ruleOfThumbLabel: `${ruleOfThumb.toFixed(1)} ECTS`,
      workloadLabel: `${workloadEctsLow.toFixed(1)}–${workloadEctsHigh.toFixed(1)} ECTS`,
      workloadHoursLabel: `${totalHours.toFixed(0)} hours total (${(totalHours / 15).toFixed(1)} hrs/week over 15 weeks)`,
    };
  }

  function resetCalculator() {
    setValue("");
  }

  function applyPreset(preset) {
    setTheoryCredits(String(preset.theory));
    setLabCredits(String(preset.lab));
  }

  const result = getResult();
  const error = getError();

  const theoryNum = parseFloat(theoryCredits);
  const labNum = parseFloat(labCredits);
  const notationValid = !isNaN(theoryNum) && !isNaN(labNum) && theoryNum >= 0 && labNum >= 0 && theoryNum + labNum > 0;
  const totalNotationCredits = notationValid ? theoryNum + labNum : null;

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Credit Converter
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Convert between ECTS and US semester credits, with an estimated workload-hours range.
        </p>

        <div className="mt-12 flex justify-center gap-2">
          <button
            onClick={() => { setDirection("ectsToUs"); setValue(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              direction === "ectsToUs" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            ECTS → US Credits
          </button>
          <button
            onClick={() => { setDirection("usToEcts"); setValue(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              direction === "usToEcts" ? "bg-cyan-500 text-slate-950" : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            US Credits → ECTS
          </button>
        </div>

        <div className="mt-6">
          <input
            type="number"
            step="0.5"
            min="0"
            inputMode="decimal"
            aria-label={direction === "ectsToUs" ? "ECTS credits" : "US credits"}
            placeholder={direction === "ectsToUs" ? "ECTS Credits (e.g. 30)" : "US Credits (e.g. 15)"}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          {error && <p className="mt-4 text-center font-semibold text-red-400">{error}</p>}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Converted Credits</h2>

          {result ? (
            <>
              <p className="mt-6 text-xs uppercase tracking-wide text-slate-500">Quick rule of thumb (2:1)</p>
              <p key={result.ruleOfThumbLabel} className="mt-1 text-3xl sm:text-4xl font-black text-cyan-400 animate-fade-in-up">
                {result.ruleOfThumbLabel}
              </p>

              <p className="mt-6 text-xs uppercase tracking-wide text-slate-500">Workload-hours estimate</p>
              <p className="mt-1 text-xl font-bold text-emerald-400">{result.workloadLabel}</p>
              <p className="mt-1 text-sm text-slate-500">{result.workloadHoursLabel}</p>

              <p className="mt-6 text-sm text-slate-400">
                These two estimates differ because there&apos;s no single official ECTS↔US ratio — see the guide
                below for why, and always confirm the exact figure with the receiving institution.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`${value} ${direction === "ectsToUs" ? "ECTS" : "US credits"} ≈ ${result.ruleOfThumbLabel} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">Enter a credit value to convert.</p>
          )}
        </div>

        <p className="mt-6 text-center text-slate-400">
          Just need weekly study hours from US credits?{" "}
          <Link href="/credit-hour-estimator" className="text-cyan-400 hover:underline">
            Use the Credit Hour Estimator
          </Link>
          , or check your{" "}
          <Link href="/semester-credit-load-checker" className="text-cyan-400 hover:underline">
            full-time/part-time credit load status
          </Link>.
        </p>

        {/* Pakistan-style notation */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-center">Pakistan-Style Credit Notation</h2>
          <p className="mt-2 text-center text-slate-400 text-sm">
            Build the Total(Theory+Lab) notation used in many Pakistani university course outlines.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {PAKISTAN_PRESETS.map((preset) => (
              <button
                key={preset.label}
                onClick={() => applyPreset(preset)}
                className="px-3 py-2 rounded-lg text-xs font-semibold bg-slate-800 text-slate-300 hover:bg-slate-700 transition"
              >
                {preset.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4 max-w-sm mx-auto">
            <input
              type="number"
              step="1"
              min="0"
              inputMode="numeric"
              aria-label="Theory credit hours"
              placeholder="Theory Credits"
              value={theoryCredits}
              onChange={(e) => setTheoryCredits(e.target.value)}
              className="rounded-xl bg-slate-800 p-3 outline-none text-white border border-slate-700 text-center focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
            />
            <input
              type="number"
              step="1"
              min="0"
              inputMode="numeric"
              aria-label="Lab/practical credit hours"
              placeholder="Lab Credits"
              value={labCredits}
              onChange={(e) => setLabCredits(e.target.value)}
              className="rounded-xl bg-slate-800 p-3 outline-none text-white border border-slate-700 text-center focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
            />
          </div>

          {notationValid && (
            <div className="mt-6 text-center">
              <p className="text-3xl font-black text-cyan-400 font-mono">
                {totalNotationCredits}({theoryNum}+{labNum})
              </p>
              <p className="mt-2 text-sm text-slate-400">
                {totalNotationCredits} total credit hours — {theoryNum} theory, {labNum} lab/practical. The
                first number in the notation is total credits; inside the brackets, the first digit is
                theory and the second is lab/practical.
              </p>
            </div>
          )}
        </div>

        <SourcesBlock
          note="ECTS workload figures (25-30 hours/credit, 60 ECTS/year) are from the European Commission's ECTS Users' Guide (2015), the reference document used across EU higher education. The ECTS↔US credit ratio itself has no single official mandate — the 2:1 figure is a widely-used rule of thumb; the workload-hours range is derived from that ECTS guide plus the same US contact-hour convention used by the Credit Hour Estimator. The Pakistan-style notation (Total(Theory+Lab)) is documented by university sources such as KIU's academic policy pages — exact course codes and credit values are set by each institution."
          guideHref="/credit-hour-estimator"
          guideLabel="How the US credit-hour convention itself works"
        />

        <CreditConverterGuide />

      </div>
    </main>
  );
}
