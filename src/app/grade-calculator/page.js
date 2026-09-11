"use client";
import PageHeader from "@/components/PageHeader";
import ResultCard from "@/components/ResultCard";
import ProgressBar from "@/components/ProgressBar";
import Button from "@/components/Button";
import { useState } from "react";
// 1. 🔥 Perfectly Imported the Reusable SEO Grade Manual
import GradeGuide from "@/components/calculator-guides/GradeGuide";
import { lookupByPercent } from "@/data/gradeScale";
import ShareResultButton from "@/components/ShareResultButton";

// Status/emoji flavor text is presentation-specific to this calculator, so
// it stays local rather than living in the shared scale table — everything
// numeric (grade, GPA point) comes from gradeScale.js.
function getStatus(gpa) {
  if (gpa >= 3.7) return "Excellent 🟢";
  if (gpa >= 3.0) return "Very Good 🔵";
  if (gpa >= 2.3) return "Good 🟡";
  if (gpa >= 1.7) return "Average 🟠";
  if (gpa >= 1.0) return "Pass 🟠";
  return "Fail 🔴";
}

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

    const row = lookupByPercent(percentage);

    return {
      grade: row.letter,
      point: row.gpa.toFixed(2),
      status: getStatus(row.gpa),
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

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={resetCalculator}
              variant="secondary"
            >
              Reset
            </Button>
            {hasResult && (
              <ShareResultButton
                text={`My grade: ${result.grade} (${result.point} GPA) — calculated at studycalc.co`}
              />
            )}
          </div>

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