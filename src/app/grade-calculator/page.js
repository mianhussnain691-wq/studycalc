"use client";

import { useState } from "react";

export default function GradeCalculator() {

  const [marks, setMarks] = useState("");

  function calculateGrade() {
  const percentage = parseFloat(marks);

  if (
    isNaN(percentage) ||
    percentage < 0 ||
    percentage > 100
  ) {
    return {
      grade: "-",
      point: "0.00",
      status: "Invalid 🔴",
    };
  }

  if (percentage >= 90)
    return {
      grade: "A+",
      point: "4.00",
      status: "Excellent 🟢",
    };

  if (percentage >= 80)
    return {
      grade: "A",
      point: "3.70",
      status: "Very Good 🔵",
    };

  if (percentage >= 70)
    return {
      grade: "B",
      point: "3.00",
      status: "Good 🟡",
    };

  if (percentage >= 60)
    return {
      grade: "C",
      point: "2.00",
      status: "Average 🟠",
    };

  if (percentage >= 50)
    return {
      grade: "D",
      point: "1.00",
      status: "Pass 🟠",
    };

  return {
    grade: "F",
    point: "0.00",
    status: "Fail 🔴",
  };
}

function getError() {
  const percentage = parseFloat(marks);

  if (!isNaN(percentage) && (percentage < 0 || percentage > 100)) {
    return "Percentage must be between 0 and 100.";
  }

  return "";
}

function resetCalculator() {
  setMarks("");
}

  return (

    <main className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-black text-center">
          Grade Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate your grade instantly.
        </p>

        <div className="mt-12">

          <input
            type="number"
            placeholder="Enter Percentage"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
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
  Reset
</button>


  <h2 className="text-2xl font-bold">
    Your Result
  </h2>

  <p className="mt-6 text-5xl font-black text-cyan-400">
    Grade: {calculateGrade().grade}
  </p>

  <p className="mt-4 text-3xl font-bold">
    Grade Point: {calculateGrade().point}
  </p>

  <p className="mt-4 text-xl text-slate-300 font-semibold">
    {calculateGrade().status}
  </p>

<div className="mt-8">

  <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">

    <div
      className={`h-full rounded-full transition-all duration-500 ${
        parseFloat(marks) >= 90
          ? "bg-green-500"
          : parseFloat(marks) >= 80
          ? "bg-cyan-400"
          : parseFloat(marks) >= 70
          ? "bg-yellow-400"
          : parseFloat(marks) >= 50
          ? "bg-orange-400"
          : "bg-red-500"
      }`}
      style={{
        width: `${Math.min(Math.max(parseFloat(marks) || 0, 0), 100)}%`,
      }}
    ></div>

  </div>

</div>

</div>

      </div>

    </main>

  );

}