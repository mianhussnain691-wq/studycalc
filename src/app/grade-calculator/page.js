"use client";
import PageHeader from "@/components/PageHeader";
import ResultCard from "@/components/ResultCard";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";
import { useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Grade Manual
import GradeGuide from "@/components/calculator-guides/GradeGuide";

// Mirrors the published scale in GPAGuide.jsx so the tool and the article
// beneath it never disagree. Ordered high to low; first match wins.
const GRADE_SCALE = [
  { min: 93, grade: "A", point: "4.00", status: "Excellent 🟢" },
  { min: 90, grade: "A-", point: "3.70", status: "Excellent 🟢" },
  { min: 87, grade: "B+", point: "3.30", status: "Very Good 🔵" },
  { min: 83, grade: "B", point: "3.00", status: "Very Good 🔵" },
  { min: 80, grade: "B-", point: "2.70", status: "Good 🟡" },
  { min: 77, grade: "C+", point: "2.30", status: "Good 🟡" },
  { min: 73, grade: "C", point: "2.00", status: "Average 🟠" },
  { min: 70, grade: "C-", point: "1.70", status: "Average 🟠" },
  { min: 60, grade: "D", point: "1.00", status: "Pass 🟠" },
  { min: 0, grade: "F", point: "0.00", status: "Fail 🔴" },
];

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
        grade: "—",
        point: "—",
        status: "",
      };
    }

    return GRADE_SCALE.find((band) => percentage >= band.min);
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

  const result = calculateGrade();
  const hasResult = result.status !== "";

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
            inputMode="decimal"
            aria-label="Percentage score"
            placeholder="Enter Percentage"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="w-full rounded-xl bg-slate-800 p-4 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />

          {getError() && (
            <p className="mt-4 text-center font-semibold text-red-400">
              {getError()}
            </p>
          )}
        </div>

        <ResultCard
          title="Your Grade"
          value={result.grade}
          status={result.status}
        >
          <p className="mt-4 text-2xl sm:text-3xl font-bold">
            Grade Point: {result.point}
          </p>

          <Button
            onClick={resetCalculator}
            variant="secondary"
            className="mt-6"
          >
            Reset
          </Button>

          {hasResult ? (
            <ProgressBar
              value={Math.min(Math.max(parseFloat(marks) || 0, 0), 100)}
            />
          ) : (
            <p className="mt-8 text-slate-500">
              Enter a percentage between 0 and 100 to see your grade.
            </p>
          )}
        </ResultCard>

        {/* 🔥 EXACT INJECTION ZONE: Authority manual loaded securely beneath your engine */}
        <GradeGuide />

      </div>
    </main>
  );
}