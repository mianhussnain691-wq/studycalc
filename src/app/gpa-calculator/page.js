"use client";

import { useState } from "react";

import GPATable from "@/components/GPA/GPATable";

export default function GPACalculator() {
  const [subjects, setSubjects] = useState([
  {
    id: 1,
    name: "",
    credit: "",
    grade: "4",
  },
]);
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
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          GPA Calculator
        </h1>

        <p className="text-center text-slate-400 mt-4">
          Calculate your semester GPA accurately using credit hours and grades.
        </p>

        <div className="mt-12">
          <>
  {subjects.map((subject) => (
    <div
      key={subject.id}
      className="grid grid-cols-3 gap-4 mb-4"
    >
      <input
        placeholder="Subject"
        className="rounded-lg bg-slate-800 p-3"
      />

      <input
        type="number"
        placeholder="Credits"
        className="rounded-lg bg-slate-800 p-3"
      />

      <select className="rounded-lg bg-slate-800 p-3">
        <option value="4">A</option>
        <option value="3.7">A-</option>
        <option value="3.3">B+</option>
        <option value="3">B</option>
        <option value="2.7">B-</option>
        <option value="2">C</option>
        <option value="1">D</option>
        <option value="0">F</option>
      </select>
    </div>
  ))}

  <button
    onClick={addSubject}
    className="mt-4 w-full rounded-xl bg-cyan-500 py-3 font-bold hover:bg-cyan-600"
  >
    + Add Subject
  </button>
</>
        </div>

      </div>
    </main>
  );
}