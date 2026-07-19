"use client";
import PageHeader from "@/components/PageHeader";
import ResultCard from "@/components/ResultCard";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";
import { useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Grade Manual
import GradeGuide from "@/components/calculator-guides/GradeGuide";

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

        <PageHeader
          title="Grade Calculator"
          description="Calculate your grade instantly."
        />

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

        <ResultCard
          title="Your Result"
          value={`Grade: ${calculateGrade().grade}`}
          status={calculateGrade().status}
        >
          <p className="mt-4 text-3xl font-bold">
            Grade Point: {calculateGrade().point}
          </p>

          <Button
            onClick={resetCalculator}
            className="mt-6 border border-slate-700 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500"
          >
            Reset
          </Button>

          <div className="mt-8">
            <div className="h-4 w-full rounded-full bg-slate-700 overflow-hidden">
              <ProgressBar
                value={Math.min(Math.max(parseFloat(marks) || 0, 0), 100)}
              />
            </div>
          </div>
        </ResultCard>

        {/* 🔥 EXACT INJECTION ZONE: Authority manual loaded securely beneath your engine */}
        <GradeGuide />

      </div>
    </main>
  );
}