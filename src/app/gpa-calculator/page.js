"use client";
import { useState } from "react";
export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
    {
      id: 1,
      name: "",
      credit: "",
      grade: "4",
    },
  ]);
  const [gpa, setGPA] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
const [gradePoints, setGradePoints] = useState(0);
  const [error, setError] = useState("");
  const [performance, setPerformance] = useState("");
  function addSubject() {
    setSubjects([
      ...subjects,
      {
        id: Date.now(),
        name: "",
        credit: "",
        grade: "4",
      },
    ]);
  }
  function removeSubject(id) {
  if (subjects.length === 1) {
    return;
  }

  setSubjects(subjects.filter((subject) => subject.id !== id));
}

  function updateSubject(id, field, value) {
    setSubjects(
      subjects.map((subject) =>
        subject.id === id
          ? { ...subject, [field]: value }
          : subject
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

if (finalGPA >= 3.7) {
  setPerformance("🎉 Excellent");
} else if (finalGPA >= 3.3) {
  setPerformance("🔥 Very Good");
} else if (finalGPA >= 3.0) {
  setPerformance("👍 Good");
} else if (finalGPA >= 2.0) {
  setPerformance("🙂 Average");
} else {
  setPerformance("⚠️ Needs Improvement");
}
}
function resetCalculator() {
  setSubjects([
    {
      id: 1,
      name: "",
      credit: "",
      grade: "4",
    },
  ]);

  setGPA(0);
  setTotalCredits(0);
  setGradePoints(0);
setPerformance("");
setError("");
}
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          GPA Calculator
        </h1>

        <p className="text-center text-slate-400 mt-4">
          Calculate your semester GPA accurately using credit hours and grades.
        </p>

        <div className="mt-12 space-y-4">

          {subjects.map((subject) => (
            <div
              key={subject.id}
              className="grid grid-cols-4 gap-4"
            >
              <input
                type="text"
                placeholder="Subject Name"
                value={subject.name}
                onChange={(e) =>
                  updateSubject(subject.id, "name", e.target.value)
                }
                className="rounded-lg bg-slate-800 p-3 outline-none"
              />

              <input
                type="number"
                placeholder="Credits"
                value={subject.credit}
                onChange={(e) =>
                  updateSubject(subject.id, "credit", e.target.value)
                }
                className="rounded-lg bg-slate-800 p-3 outline-none"
              />

              <select
                value={subject.grade}
                onChange={(e) =>
                  updateSubject(subject.id, "grade", e.target.value)
                }
                className="rounded-lg bg-slate-800 p-3"
              >
                <option value="4">A</option>
                <option value="3.7">A-</option>
                <option value="3.3">B+</option>
                <option value="3">B</option>
                <option value="2.7">B-</option>
                <option value="2">C</option>
                <option value="1">D</option>
                <option value="0">F</option>
              </select>
              <button
  onClick={() => removeSubject(subject.id)}
  className="rounded-lg bg-red-600 hover:bg-red-700 transition font-semibold"
>
  Remove

</button>

            </div>
          ))}

          <button
            onClick={addSubject}
            className="w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold hover:bg-cyan-600 transition"
          >
            + Add Subject

          </button>
{error && (
  <div className="mb-4 rounded-lg bg-red-600 p-3 text-center font-semibold">
    {error}
  </div>
)}
<button
  onClick={calculateGPA}
  className="w-full mt-4 rounded-xl bg-green-600 py-4 text-lg font-bold hover:bg-green-700 transition"
>
  Calculate GPA
</button>
<button
  onClick={resetCalculator}
  className="mt-3 w-full rounded-xl bg-red-600 py-4 text-lg font-bold hover:bg-red-700 transition"
>
  Reset Calculator
</button>
<div className="mt-8 rounded-xl bg-slate-800 p-6">

  <h2 className="text-center text-xl font-semibold">
    GPA Result
  </h2>

  <div className="mt-6 grid grid-cols-2 gap-6">

    <div className="rounded-xl bg-slate-900 p-5 text-center">
      <p className="text-slate-400">GPA</p>

      <h1 className="mt-2 text-4xl font-black text-cyan-400">
        {gpa}
      </h1>
    </div>

    <div className="rounded-xl bg-slate-900 p-5 text-center">
      <p className="text-slate-400">Credits</p>

      <h1 className="mt-2 text-4xl font-black text-green-400">
        {totalCredits}
      </h1>
    </div>

  </div>
<div className="mt-6 rounded-xl bg-slate-900 p-5">
  <div className="flex justify-between py-2 border-b border-slate-700">
    <span>Total Grade Points</span>
    <span className="font-bold text-cyan-400">{gradePoints}</span>
  </div>

  <div className="flex justify-between py-2">
    <span>Performance</span>
    <span className="font-bold">{performance}</span>
  </div>
</div>
</div>
        </div>

      </div>
    </main>
  );
}