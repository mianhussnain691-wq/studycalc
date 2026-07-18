"use client";
import { useState } from "react";
import ToolGuide from "@/components/ToolGuide"; // <--- Import Global Component

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "", credit: "", grade: "4" },
  ]);
  const [gpa, setGPA] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const [gradePoints, setGradePoints] = useState(0);
  const [error, setError] = useState("");
  const [performance, setPerformance] = useState("");

  function addSubject() {
    setSubjects([
      ...subjects,
      { id: Date.now(), name: "", credit: "", grade: "4" },
    ]);
  }

  function removeSubject(id) {
    if (subjects.length === 1) return;
    setSubjects(subjects.filter((subject) => subject.id !== id));
  }

  function updateSubject(id, field, value) {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id ? { ...subject, [field]: value } : subject
      )
    );
  }

  function calculateGPA() {
    setError("");
    for (const subject of subjects) {
      if (
        subject.name.trim() === "" ||
        subject.credit === "" ||
        Number(subject.credit) <= 0
      ) {
        setError("Please complete all subjects and enter valid credit hours.");
        return;
      }
    }
    let totalCredits = 0;
    let totalPoints = 0;

    subjects.forEach((subject) => {
      const credit = Number(subject.credit);
      const grade = Number(subject.grade);
      if (credit > 0) {
        totalCredits += credit;
        totalPoints += credit * grade;
      }
    });

    if (totalCredits === 0) {
      setGPA(0);
      return;
    }

    setGPA((totalPoints / totalCredits).toFixed(2));
    setTotalCredits(totalCredits);
    setGradePoints(totalPoints.toFixed(2));
    const finalGPA = totalPoints / totalCredits;

    if (finalGPA >= 3.7) setPerformance("🎉 Excellent");
    else if (finalGPA >= 3.3) setPerformance("🔥 Very Good");
    else if (finalGPA >= 3.0) setPerformance("👍 Good");
    else if (finalGPA >= 2.0) setPerformance("🙂 Average");
    else setPerformance("⚠️ Needs Improvement");
  }

  function resetCalculator() {
    setSubjects([{ id: 1, name: "", credit: "", grade: "4" }]);
    setGPA(0);
    setTotalCredits(0);
    setGradePoints(0);
    setPerformance("");
    setError("");
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 text-center">
      {/* Heading Section */}
      <h1 className="text-5xl font-black tracking-tight text-white">
        GPA Calculator
      </h1>
      <p className="text-slate-400 mt-2 max-w-md mx-auto text-sm">
        Calculate your semester GPA accurately using credit hours and grades.
      </p>

      {/* Calculator Grid UI */}
      <div className="mt-12 space-y-4 max-w-3xl mx-auto text-left">
        {subjects.map((subject) => (
          <div key={subject.id} className="grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Subject Name"
              value={subject.name}
              onChange={(e) => updateSubject(subject.id, "name", e.target.value)}
              className="rounded-lg bg-slate-800 p-3 outline-none text-white focus:ring-1 focus:ring-cyan-500"
            />
            <input
              type="number"
              placeholder="Credits"
              value={subject.credit}
              onChange={(e) => updateSubject(subject.id, "credit", e.target.value)}
              className="rounded-lg bg-slate-800 p-3 outline-none text-white focus:ring-1 focus:ring-cyan-500"
            />
            <select
              value={subject.grade}
              onChange={(e) => updateSubject(subject.id, "grade", e.target.value)}
              className="rounded-lg bg-slate-800 p-3 text-white outline-none"
            >
              <option value="4">A (4.0)</option>
              <option value="3.7">A- (3.7)</option>
              <option value="3.3">B+ (3.3)</option>
              <option value="3">B (3.0)</option>
              <option value="2.7">B- (2.7)</option>
              <option value="2">C (2.0)</option>
              <option value="1">D (1.0)</option>
              <option value="0">F (0.0)</option>
            </select>
            <button
              onClick={() => removeSubject(subject.id)}
              className="rounded-lg bg-red-600 hover:bg-red-700 text-white transition font-semibold"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          onClick={addSubject}
          className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold hover:bg-cyan-600 text-slate-950 transition"
        >
          + Add Subject
        </button>

        {error && (
          <div className="mb-4 rounded-lg bg-red-600 p-3 text-center font-semibold text-white">
            {error}
          </div>
        )}

        <button
          onClick={calculateGPA}
          className="w-full mt-4 rounded-xl bg-green-600 py-4 text-lg font-bold hover:bg-green-700 text-white transition"
        >
          Calculate GPA
        </button>
        
        <button
          onClick={resetCalculator}
          className="mt-3 w-full rounded-xl bg-red-600 py-4 text-lg font-bold hover:bg-red-700 text-white transition"
        >
          Reset Calculator
        </button>

        {/* Result Board */}
        <div className="mt-8 rounded-xl bg-slate-800 p-6 text-white">
          <h2 className="text-center text-xl font-semibold">GPA Result</h2>
          <div className="mt-6 grid grid-cols-2 gap-6">
            <div className="rounded-xl bg-slate-900 p-5 text-center">
              <p className="text-slate-400 text-sm">GPA</p>
              <h1 className="mt-2 text-4xl font-black text-cyan-400">{gpa}</h1>
            </div>
            <div className="rounded-xl bg-slate-900 p-5 text-center">
              <p className="text-slate-400 text-sm">Total Credits</p>
              <h1 className="mt-2 text-4xl font-black text-green-400">{totalCredits}</h1>
            </div>
          </div>

          <div className="mt-6 rounded-xl bg-slate-900 p-5 space-y-3">
            <div className="flex justify-between py-2 border-b border-slate-700/50">
              <span className="text-slate-300">Total Grade Points</span>
              <span className="font-bold text-cyan-400">{gradePoints}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-300">Performance</span>
              <span className="font-bold text-white">{performance || "—"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}