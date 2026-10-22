"use client";

import { useState } from "react";
import Link from "next/link";
import ShareResultButton from "@/components/ShareResultButton";
import SourcesBlock from "@/components/SourcesBlock";
import { lookupByPercent } from "@/data/gradeScale";
import { indiaCgpaToPercent } from "@/data/boardGrades";
import IsMyGpaGoodGuide from "@/components/calculator-guides/IsMyGpaGoodGuide";

const SCALES = [
  { value: "4.0", label: "4.0 Scale" },
  { value: "4.3", label: "4.3 Scale" },
  { value: "percentage", label: "Percentage" },
  { value: "cgpa10", label: "10-Point CGPA" },
];

const SCALE_MAX = { "4.0": 4, "4.3": 4.3, percentage: 100, cgpa10: 10 };

// Every threshold here is one already sourced elsewhere on the site, not a
// new invented number: 2.0 (academic-standing-checker), 3.0 (standard
// scholarship tier / typical renewal requirement), 3.5 (Dean's List /
// competitive scholarship tier). No percentiles, no "top X% of students"
// claims anywhere in this file.
function getVerdict(gpa4) {
  if (gpa4 < 2.0) {
    return {
      label: "Below the Common Academic-Standing Threshold",
      tone: "text-amber-400",
      message: "This is below the 2.0 (on a 4.0 scale) threshold most US institutions use for good academic standing. It's a routine administrative checkpoint, not a verdict — connecting with your advisor is a practical next step.",
    };
  }
  if (gpa4 < 3.0) {
    return {
      label: "Passing / Average",
      tone: "text-cyan-400",
      message: "This clears the common 2.0 academic-standing threshold. It's below the roughly 3.0 tier many standard scholarships and renewal requirements use, and below the 3.5 range common for Dean's List — raising it would open up more of those.",
    };
  }
  if (gpa4 < 3.5) {
    return {
      label: "Good",
      tone: "text-cyan-400",
      message: "This is in the range many standard institutional scholarships and renewal requirements use (commonly around 3.0+), and competitive for most undergraduate programs — though below the roughly 3.5 range common for Dean's List and the most competitive merit awards.",
    };
  }
  return {
    label: "Excellent",
    tone: "text-emerald-400",
    message: "This is in the range commonly used for Dean's List / honors recognition and the most competitive merit scholarships (often 3.5+), though exact cutoffs vary by school.",
  };
}

export default function IsMyGpaGood() {
  const [gpaValue, setGpaValue] = useState("");
  const [scale, setScale] = useState("4.0");

  function parseInputs() {
    const g = parseFloat(gpaValue);
    const max = SCALE_MAX[scale];
    const valid = !isNaN(g) && g >= 0 && g <= max;
    return { g, max, valid };
  }

  function getError() {
    if (gpaValue === "") return "";
    const { g, max, valid } = parseInputs();
    if (!valid) return `Enter a value between 0 and ${max} for the ${scale === "percentage" ? "percentage" : scale} scale.`;
    void g;
    return "";
  }

  // 4.0-scale equivalent, used to apply the standard verdict bands.
  // Not used for the 10-point path — see renderCgpa10Result below for why.
  function get4ScaleEquivalent() {
    const { g, valid } = parseInputs();
    if (!valid) return null;
    if (scale === "4.0") return g;
    if (scale === "4.3") return (g / 4.3) * 4.0;
    if (scale === "percentage") return lookupByPercent(g).gpa;
    return null;
  }

  function resetCalculator() {
    setGpaValue("");
  }

  const { valid } = parseInputs();
  const error = getError();
  const gpa4 = scale === "cgpa10" ? null : get4ScaleEquivalent();
  const verdict = gpa4 !== null ? getVerdict(gpa4) : null;

  let cgpa10Percent = null;
  if (scale === "cgpa10" && valid) {
    const { g } = parseInputs();
    cgpa10Percent = indiaCgpaToPercent(g);
  }

  const hasResult = valid && (verdict !== null || cgpa10Percent !== null);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          Is My GPA Good or Bad?
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Enter your GPA and scale to see where it sits against common academic-standing, scholarship, and honors thresholds.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="number"
            step="0.001"
            min="0"
            max={SCALE_MAX[scale]}
            inputMode="decimal"
            aria-label="Your GPA"
            placeholder={`Your GPA (0 - ${SCALE_MAX[scale]})`}
            value={gpaValue}
            onChange={(e) => setGpaValue(e.target.value)}
            className="rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
          <select
            aria-label="GPA scale"
            value={scale}
            onChange={(e) => {
              setScale(e.target.value);
              setGpaValue("");
            }}
            className="rounded-xl bg-slate-800 p-4 text-white outline-none border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          >
            {SCALES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>

        {error && (
          <p className="mt-4 text-center font-semibold text-red-400">{error}</p>
        )}

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">Where You Stand</h2>

          {!hasResult && (
            <p className="mt-6 text-slate-500">
              Enter your GPA to see where it sits against common thresholds.
            </p>
          )}

          {verdict && (
            <>
              <p key={verdict.label} className={`mt-6 text-2xl sm:text-3xl md:text-4xl font-black animate-fade-in-up ${verdict.tone}`}>
                {verdict.label}
              </p>
              <p className="mt-4 text-slate-300">{verdict.message}</p>
            </>
          )}

          {scale === "cgpa10" && cgpa10Percent !== null && (
            <>
              <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-black text-cyan-400 animate-fade-in-up">
                ≈ {cgpa10Percent.toFixed(1)}%
              </p>
              <p className="mt-4 text-slate-300">
                That&apos;s the common ×9.5 estimate for a 10-point CGPA — but 10-point scales aren&apos;t simply
                a rescaled version of the US 4.0 system. On most 10-point scales, a CGPA in the 7.0+ range is
                already widely considered good to very good at many universities (often corresponding to a
                First Class or equivalent distinction). There&apos;s no single standard &quot;good&quot; threshold for a
                10-point scale — your own university&apos;s specific grading policy and any honors/scholarship
                thresholds it publishes are the authoritative answer.
              </p>
            </>
          )}

          {hasResult && (
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={resetCalculator}
                className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
              >
                Reset
              </button>
              <ShareResultButton
                text={`Checking if my ${gpaValue} GPA (${scale} scale) is good — calculated at studycalc.co`}
              />
            </div>
          )}
        </div>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <Link href="/academic-standing-checker" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Academic Standing</span>
            <p className="mt-1 text-xs text-slate-400">Pass/fail threshold check</p>
          </Link>
          <Link href="/deans-list-calculator" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Dean&apos;s List</span>
            <p className="mt-1 text-xs text-slate-400">Honor roll eligibility</p>
          </Link>
          <Link href="/scholarship-gpa-checker" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Scholarship Tiers</span>
            <p className="mt-1 text-xs text-slate-400">What you may qualify for</p>
          </Link>
          <Link href="/target-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Target GPA</span>
            <p className="mt-1 text-xs text-slate-400">Plan a GPA you want</p>
          </Link>
        </div>

        <SourcesBlock
          note="Verdict bands use thresholds already published across StudyCalc: 2.0 for common academic-standing policies, ~3.0 for typical scholarship renewal/standard institutional grants, and ~3.5 for common Dean's List / competitive merit cutoffs. These are widely-used conventions, not a single universal rule — no percentiles or 'top X% of students' claims are made anywhere on this page."
          guideHref="/gpa-for-scholarships"
          guideLabel="Full scholarship GPA tier breakdown"
        />

        <IsMyGpaGoodGuide />

      </div>
    </main>
  );
}
