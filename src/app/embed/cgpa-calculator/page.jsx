"use client";

import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { weightedAverage } from "@/lib/calculators";

const DEFAULT_SEMESTERS = [{ id: 1, gpa: "", credits: "" }];

function EmbedCgpaCalculator() {
  const searchParams = useSearchParams();
  const isLight = searchParams.get("theme") === "light";

  const [semesters, setSemesters] = useState(DEFAULT_SEMESTERS);
  const [cgpa, setCgpa] = useState(null);
  const [error, setError] = useState("");
  const nextId = useRef(2);

  function addSemester() {
    setSemesters([...semesters, { id: nextId.current++, gpa: "", credits: "" }]);
  }

  function removeSemester(id) {
    if (semesters.length === 1) return;
    setSemesters(semesters.filter((s) => s.id !== id));
  }

  function updateSemester(id, field, value) {
    setSemesters(semesters.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
    setError("");
  }

  function validSemesters() {
    return semesters
      .map((s) => ({ gpa: parseFloat(s.gpa), credits: parseFloat(s.credits) }))
      .filter(({ gpa, credits }) => !isNaN(gpa) && gpa >= 0 && gpa <= 4 && !isNaN(credits) && credits > 0);
  }

  function calculate() {
    setError("");
    const valid = validSemesters();
    if (valid.length === 0) {
      setError("Enter a valid GPA (0-4) and credits for at least one semester.");
      return;
    }
    const result = weightedAverage(valid.map((s) => ({ value: s.gpa, weight: s.credits })));
    setCgpa(result.average.toFixed(2));
  }

  const page = isLight ? "bg-white text-slate-900" : "bg-slate-950 text-white";
  const input = isLight
    ? "bg-slate-100 text-slate-900 border border-slate-300 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
    : "bg-slate-800 text-white border border-slate-700 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500";
  const addBtn = isLight
    ? "bg-slate-100 border border-slate-300 text-cyan-600 hover:bg-slate-200"
    : "bg-slate-800 border border-slate-700 text-cyan-400 hover:bg-slate-700";
  const resultBox = isLight ? "border border-slate-300 bg-slate-50" : "border border-slate-800 bg-slate-900";
  const resultLabel = isLight ? "text-slate-500" : "text-slate-400";
  const poweredBy = isLight ? "text-slate-400 hover:text-cyan-600" : "text-slate-500 hover:text-cyan-400";

  return (
    <div className={`min-h-screen p-4 flex flex-col ${page}`}>
      <h1 className="text-lg font-bold text-center">CGPA Calculator</h1>

      <div className="mt-4 space-y-2 flex-1">
        {semesters.map((semester, i) => (
          <div key={semester.id} className="grid grid-cols-[1fr_1fr_auto] gap-2">
            <input
              type="number"
              inputMode="decimal"
              min="0"
              max="4"
              step="0.01"
              aria-label={`Semester ${i + 1} GPA`}
              placeholder="GPA (0-4)"
              value={semester.gpa}
              onChange={(e) => updateSemester(semester.id, "gpa", e.target.value)}
              className={`rounded-lg p-2 text-sm outline-none ${input}`}
            />
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.5"
              aria-label={`Semester ${i + 1} credits`}
              placeholder="Credits"
              value={semester.credits}
              onChange={(e) => updateSemester(semester.id, "credits", e.target.value)}
              className={`rounded-lg p-2 text-sm outline-none ${input}`}
            />
            <button
              onClick={() => removeSemester(semester.id)}
              disabled={semesters.length === 1}
              aria-label={`Remove semester ${i + 1}`}
              className="rounded-lg bg-red-600 px-3 text-sm font-semibold text-white disabled:opacity-40"
            >
              ✕
            </button>
          </div>
        ))}

        <button onClick={addSemester} className={`w-full rounded-lg py-2 text-sm font-semibold ${addBtn}`}>
          + Add Semester
        </button>

        {error && <p className="text-center text-xs font-semibold text-red-400">{error}</p>}

        <button
          onClick={calculate}
          className="w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400"
        >
          Calculate CGPA
        </button>

        <div className={`rounded-xl p-4 text-center ${resultBox}`}>
          <p className={`text-xs ${resultLabel}`}>Your CGPA</p>
          <p className="mt-1 text-3xl font-black text-cyan-400">{cgpa ?? "—"}</p>
        </div>
      </div>

      <a
        href="https://www.studycalc.co/cgpa-calculator"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 block text-center text-xs ${poweredBy}`}
      >
        Powered by StudyCalc
      </a>
    </div>
  );
}

export default function EmbedCgpaCalculatorPage() {
  return (
    <Suspense fallback={null}>
      <EmbedCgpaCalculator />
    </Suspense>
  );
}
