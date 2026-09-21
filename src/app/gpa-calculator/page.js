"use client";
import { useRef, useState } from "react";
import GPAGuide from "@/components/calculator-guides/GPAGuide"; // <--- Perfect Import Path
import ShareResultButton from "@/components/ShareResultButton";
import DownloadResultCard from "@/components/DownloadResultCard";

// Matches the scale published in GPAGuide.jsx, which renders on this same page.
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

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "", credit: "", grade: "4" },
  ]);
  const [gpa, setGPA] = useState("0.00");
  const [totalCredits, setTotalCredits] = useState(0);
  const [gradePoints, setGradePoints] = useState("0.00");
  const [error, setError] = useState("");
  const [performance, setPerformance] = useState("");
  const [hasCalculated, setHasCalculated] = useState(false);

  // Date.now() collides when two rows are added within the same millisecond.
  const nextId = useRef(2);

  function addSubject() {
    setSubjects([
      ...subjects,
      { id: nextId.current++, name: "", credit: "", grade: "4" },
    ]);
    setError("");
  }

  function removeSubject(id) {
    if (subjects.length === 1) return;
    setSubjects(subjects.filter((subject) => subject.id !== id));
    setError("");
  }

  function updateSubject(id, field, value) {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
    // Clear the banner as soon as the user starts fixing the input, rather
    // than leaving it up until the next Calculate press.
    setError("");
  }

  function calculateGPA() {
    setError("");
    for (const subject of subjects) {
      const credit = Number(subject.credit);
      // Number("abc") is NaN, and NaN <= 0 is false — so a bare `<= 0` check
      // lets non-numeric input through. isNaN has to be explicit.
      if (subject.credit === "" || isNaN(credit) || credit <= 0) {
        setError("Please enter valid credit hours for every subject.");
        return;
      }
    }

    let credits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credit = Number(subject.credit);
      const grade = Number(subject.grade);
      credits += credit;
      totalPoints += credit * grade;
    });

    if (credits === 0) {
      setError("Total credit hours must be greater than 0.");
      return;
    }

    const finalGPA = totalPoints / credits;

    setGPA(finalGPA.toFixed(2));
    setTotalCredits(credits);
    setGradePoints(totalPoints.toFixed(2));
    setHasCalculated(true);

    if (finalGPA >= 3.7) setPerformance("🎉 Excellent");
    else if (finalGPA >= 3.3) setPerformance("🔥 Very Good");
    else if (finalGPA >= 3.0) setPerformance("👍 Good");
    else if (finalGPA >= 2.0) setPerformance("🙂 Average");
    else setPerformance("⚠️ Needs Improvement");
  }

  function resetCalculator() {
    setSubjects([{ id: 1, name: "", credit: "", grade: "4" }]);
    nextId.current = 2;
    setGPA("0.00");
    setTotalCredits(0);
    setGradePoints("0.00");
    setPerformance("");
    setError("");
    setHasCalculated(false);
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-center">
      {/* Heading Section */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
        GPA Calculator
      </h1>
      <p className="text-slate-400 mt-2 max-w-md mx-auto text-sm">
        Calculate your semester GPA accurately using credit hours and grades.
      </p>

      {/* Calculator Grid UI */}
      <div className="mt-12 space-y-4 max-w-3xl mx-auto text-left">
        {subjects.map((subject, index) => (
          <div
            key={subject.id}
            className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
          >
            <input
              type="text"
              aria-label={`Subject ${index + 1} name`}
              placeholder="Subject Name"
              value={subject.name}
              onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
              className="col-span-2 md:col-span-1 rounded-xl bg-slate-800 p-3 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
            />
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.5"
              aria-label={`Subject ${index + 1} credit hours`}
              placeholder="Credits"
              value={subject.credit}
              onChange={(e) => updateSubject(subject.id, "credit", e.target.value)}
              className="rounded-xl bg-slate-800 p-3 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
            />
            <select
              aria-label={`Subject ${index + 1} grade`}
              value={subject.grade}
              onChange={(e) => updateSubject(subject.id, "grade", e.target.value)}
              className="rounded-xl bg-slate-800 p-3 text-white outline-none border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
            >
              {GRADE_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              onClick={() => removeSubject(subject.id)}
              disabled={subjects.length === 1}
              aria-label={`Remove subject ${index + 1}`}
              className="col-span-2 md:col-span-1 rounded-xl bg-red-600 px-4 py-3 text-white font-semibold transition-all duration-200 hover:bg-red-700 active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-600 disabled:active:scale-100"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addSubject}
          className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-[0.97]"
        >
          + Add Subject
        </button>

        {error && (
          <div className="rounded-xl bg-red-600 p-3 text-center font-semibold text-white">
            {error}
          </div>
        )}

        <button
          onClick={calculateGPA}
          className="w-full mt-4 rounded-xl bg-green-600 py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-green-700 active:scale-[0.97]"
        >
          Calculate GPA
        </button>

        <button
          onClick={resetCalculator}
          className="mt-3 w-full rounded-xl bg-red-600 py-4 text-lg font-bold text-white transition-all duration-200 hover:bg-red-700 active:scale-[0.97]"
        >
          Reset Calculator
        </button>

        {hasCalculated && (
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <ShareResultButton
              text={`My GPA: ${gpa} — calculated at studycalc.co`}
              className="flex-1"
            />
            <DownloadResultCard
              toolName="GPA Calculator"
              label="Your GPA"
              value={gpa}
              caption="On a 4.0 scale"
              fileName="studycalc-gpa"
              className="flex-1"
            />
          </div>
        )}

        {/* Result Board */}
        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-center text-xl font-semibold">GPA Result</h2>

          {/* Two-Column Grid for main metrics */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="rounded-xl bg-slate-950 p-5 text-center">
              <p className="text-slate-400 text-sm">GPA</p>
              <div
                key={gpa}
                className="mt-2 text-3xl sm:text-4xl font-black text-cyan-400 animate-fade-in-up"
              >
                {gpa}
              </div>
            </div>
            <div className="rounded-xl bg-slate-950 p-5 text-center">
              <p className="text-slate-400 text-sm">Total Credits</p>
              <div
                key={totalCredits}
                className="mt-2 text-3xl sm:text-4xl font-black text-green-400 animate-fade-in-up"
              >
                {totalCredits}
              </div>
            </div>
          </div>

          {/* Detailed breakdowns */}
          <div className="mt-6 rounded-xl bg-slate-950 p-5 space-y-3">
            <div className="flex justify-between py-2 border-b border-slate-700/50">
              <span className="text-slate-300">Total Grade Points</span>
              <span className="font-bold text-cyan-400">{gradePoints}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-300">Performance</span>
              <span className="font-bold text-white">{performance || "—"}</span>
            </div>
          </div>

          {!hasCalculated && (
            <p className="mt-6 text-center text-slate-500">
              Add your subjects, then press Calculate GPA to see your result.
            </p>
          )}
        </div>
      </div>

      {/* Authority guide renders below the calculator, not inside the result card. */}
      <div className="text-left">
        <GPAGuide />
      </div>
    </div>
  );
}