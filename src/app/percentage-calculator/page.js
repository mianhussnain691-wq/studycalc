"use client";

import { useState } from "react";

export default function PercentageCalculator() {

  const [obtainedMarks, setObtainedMarks] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
function calculatePercentage() {
  const obtained = parseFloat(obtainedMarks);
  const total = parseFloat(totalMarks);

  if (
    isNaN(obtained) ||
    isNaN(total) ||
    total <= 0 ||
    obtained < 0 ||
    obtained > total
  ) {
    return "0.00";
  }

  return ((obtained / total) * 100).toFixed(2);
}
function getPercentageStatus() {
  const percentage = parseFloat(calculatePercentage());

  if (percentage >= 90) return "Excellent 🟢";
  if (percentage >= 80) return "Very Good 🔵";
  if (percentage >= 70) return "Good 🟡";
  if (percentage >= 60) return "Average 🟠";

  return "Needs Improvement 🔴";
}

function getError() {
  const obtained = parseFloat(obtainedMarks);
  const total = parseFloat(totalMarks);

  if (
    !isNaN(obtained) &&
    !isNaN(total) &&
    obtained > total
  ) {
    return "Obtained marks cannot be greater than total marks.";
  }

  return "";
}

function resetCalculator() {
  setObtainedMarks("");
  setTotalMarks("");
}

  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          Percentage Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate percentage instantly.
        </p>

        <div className="mt-12 space-y-6">

          <input
            type="number"
            placeholder="Obtained Marks"
            value={obtainedMarks}
            onChange={(e) => setObtainedMarks(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none"
          />

          <input
            type="number"
            placeholder="Total Marks"
            value={totalMarks}
            onChange={(e) => setTotalMarks(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none"
          />

{getError() && (
  <p className="mt-4 text-center font-semibold text-red-400">
    {getError()}
  </p>
)}

        </div>
<div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center">

<button
  onClick={resetCalculator}
  className="mt-6 inline-block rounded-xl border border-slate-700 px-6 py-3 text-base font-bold hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 focus:outline-none focus:ring-0 transition duration-300"
>
  Reset All 
</button>


  <h2 className="text-2xl font-bold">
    Percentage
  </h2>


  <p className="mt-6 text-6xl font-black text-cyan-400">
    {calculatePercentage()}%
  </p>

<p className="mt-4 text-xl font-semibold text-slate-300">
  {getPercentageStatus()}
</p>

<div className="mt-8">

  <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">

    <div
      className={`h-full rounded-full transition-all duration-500 ${
        parseFloat(calculatePercentage()) >= 90
          ? "bg-green-500"
          : parseFloat(calculatePercentage()) >= 80
          ? "bg-cyan-400"
          : parseFloat(calculatePercentage()) >= 70
          ? "bg-yellow-400"
          : "bg-red-500"
      }`}
      style={{
        width: `${calculatePercentage()}%`,
      }}
    ></div>

  </div>

</div>

</div>
      </div>

    </main>

  );

}