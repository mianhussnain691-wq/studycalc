"use client";

import { Suspense, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { weightedAverage } from "@/lib/calculators";

const DEFAULT_SUBJECTS = [{ id: 1, credit: "", grade: "4" }];

const GRADE_OPTIONS = [
  { label: "A (4.0)", value: "4" },
  { label: "A- (3.7)", value: "3.7" },
  { label: "B+ (3.3)", value: "3.3" },
  { label: "B (3.0)", value: "3" },
  { label: "B- (2.7)", value: "2.7" },
  { label: "C+ (2.3)", value: "2.3" },
  { label: "C (2.0)", value: "2" },
  { label: "C- (1.7)", value: "1.7" },
  { label: "D (1.0)", value: "1" },
  { label: "F (0.0)", value: "0" },
];

function EmbedGpaCalculator() {
  const searchParams = useSearchParams();
  const isLight = searchParams.get("theme") === "light";

  const [subjects, setSubjects] = useState(DEFAULT_SUBJECTS);
  const [gpa, setGpa] = useState(null);
  const [error, setError] = useState("");
  const nextId = useRef(2);

  function addSubject() {
    setSubjects([...subjects, { id: nextId.current++, credit: "", grade: "4" }]);
  }

  function removeSubject(id) {
    if (subjects.length === 1) return;
    setSubjects(subjects.filter((s) => s.id !== id));
  }

  function updateSubject(id, field, value) {
    setSubjects(subjects.map((s) => (s.id === id ? { ...s, [field]: value } : s)));
    setError("");
  }

  function calculate() {
    setError("");
    for (const s of subjects) {
      const credit = Number(s.credit);
      if (s.credit === "" || isNaN(credit) || credit <= 0) {
        setError("Enter valid credit hours for every course.");
        return;
      }
    }
    const result = weightedAverage(subjects.map((s) => ({ value: Number(s.grade), weight: Number(s.credit) })));
    if (!result) {
      setError("Total credit hours must be greater than 0.");
      return;
    }
    setGpa(result.average.toFixed(2));
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
      <h1 className="text-lg font-bold text-center">GPA Calculator</h1>

      <div className="mt-4 space-y-2 flex-1">
        {subjects.map((subject, i) => (
          <div key={subject.id} className="grid grid-cols-[1fr_1fr_auto] gap-2">
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.5"
              aria-label={`Course ${i + 1} credit hours`}
              placeholder="Credits"
              value={subject.credit}
              onChange={(e) => updateSubject(subject.id, "credit", e.target.value)}
              className={`rounded-lg p-2 text-sm outline-none ${input}`}
            />
            <select
              aria-label={`Course ${i + 1} grade`}
              value={subject.grade}
              onChange={(e) => updateSubject(subject.id, "grade", e.target.value)}
              className={`rounded-lg p-2 text-sm outline-none ${input}`}
            >
              {GRADE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <button
              onClick={() => removeSubject(subject.id)}
              disabled={subjects.length === 1}
              aria-label={`Remove course ${i + 1}`}
              className="rounded-lg bg-red-600 px-3 text-sm font-semibold text-white disabled:opacity-40"
            >
              ✕
            </button>
          </div>
        ))}

        <button onClick={addSubject} className={`w-full rounded-lg py-2 text-sm font-semibold ${addBtn}`}>
          + Add Course
        </button>

        {error && <p className="text-center text-xs font-semibold text-red-400">{error}</p>}

        <button
          onClick={calculate}
          className="w-full rounded-lg bg-cyan-500 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400"
        >
          Calculate GPA
        </button>

        <div className={`rounded-xl p-4 text-center ${resultBox}`}>
          <p className={`text-xs ${resultLabel}`}>Your GPA</p>
          <p className="mt-1 text-3xl font-black text-cyan-400">{gpa ?? "—"}</p>
        </div>
      </div>

      <a
        href="https://www.studycalc.co/gpa-calculator"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-4 block text-center text-xs ${poweredBy}`}
      >
        Powered by StudyCalc
      </a>
    </div>
  );
}

export default function EmbedGpaCalculatorPage() {
  return (
    <Suspense fallback={null}>
      <EmbedGpaCalculator />
    </Suspense>
  );
}
