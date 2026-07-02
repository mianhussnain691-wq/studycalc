"use client";

import { useState } from "react";

export default function AttendanceCalculator() {
  const [totalClasses, setTotalClasses] = useState("");
  const [attendedClasses, setAttendedClasses] = useState("");
function calculateAttendance() {
  const total = parseFloat(totalClasses);
  const attended = parseFloat(attendedClasses);

  if (
    isNaN(total) ||
    isNaN(attended) ||
    total <= 0 ||
    attended < 0 ||
    attended > total
  ) {
    return "0.00";
  }

  return ((attended / total) * 100).toFixed(2);
  
}
function getAttendanceStatus() {
  const attendance = parseFloat(calculateAttendance());

  if (attendance >= 90) return "Excellent 🟢";
  if (attendance >= 75) return "Safe 🟢";
  if (attendance >= 60) return "Warning 🟡";

  return "Low Attendance 🔴";
}
function classesNeeded() {
  const total = parseFloat(totalClasses);
  const attended = parseFloat(attendedClasses);

  if (
    isNaN(total) ||
    isNaN(attended) ||
    total <= 0 ||
    attended > total
  ) {
    return "";
  }

  const target = 75;

  if ((attended / total) * 100 >= target) {
    return "✅ You already have 75% or more attendance.";
  }

  let extra = 0;

  while (((attended + extra) / (total + extra)) * 100 < target) {
    extra++;
  }

  return `📚 Attend ${extra} more class(es) to reach 75%.`;
}

function getError() {
  const total = parseFloat(totalClasses);
  const attended = parseFloat(attendedClasses);

  if (attended > total) {
    return "Attended classes cannot be greater than total classes.";
  }

  return "";
}

function resetCalculator() {
  setTotalClasses("");
  setAttendedClasses("");
}

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          Attendance Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate your attendance percentage instantly.
        </p>

        <div className="mt-12 space-y-6">

          <input
            type="number"
            placeholder="Total Classes"
            value={totalClasses}
            onChange={(e) => setTotalClasses(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none"
          />

          <input
            type="number"
            placeholder="Classes Attended"
            value={attendedClasses}
            onChange={(e) => setAttendedClasses(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none"
          />
{getError() && (
  <p className="mt-3 text-center text-red-400 font-medium">
    {getError()}
  </p>
)}
          

        </div>
<div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

  <h2 className="text-2xl font-bold">
    Attendance Percentage
  </h2>

  <button
  onClick={resetCalculator}
  className="mt-6 w-full rounded-xl border border-slate-700 py-4 text-lg font-bold hover:bg-slate-800 transition"
>
  Reset
</button>

  <p className="mt-6 text-6xl font-black text-cyan-400">
    {calculateAttendance()}%
  </p>

  <p className="mt-4 text-xl font-semibold text-slate-300">
  {getAttendanceStatus()}
</p>
<p className="mt-6 text-lg text-slate-300">
  {classesNeeded()}
</p>

<div className="mt-8">

  <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">

    <div
      className={`h-full rounded-full transition-all duration-500 ${
        parseFloat(calculateAttendance()) >= 90
          ? "bg-green-500"
          : parseFloat(calculateAttendance()) >= 75
          ? "bg-cyan-400"
          : parseFloat(calculateAttendance()) >= 60
          ? "bg-yellow-400"
          : "bg-red-500"
      }`}
      style={{
        width: `${calculateAttendance()}%`,
      }}
    ></div>

  </div>

</div>

</div>
      </div>
    </main>
  );
}