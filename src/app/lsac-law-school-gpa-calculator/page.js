"use client";

import { useRef, useState } from "react";
import ShareResultButton from "@/components/ShareResultButton";
import LsacLawSchoolGpaGuide from "@/components/calculator-guides/LsacLawSchoolGpaGuide";

// LSAC allows A+ = 4.33 — unlike AMCAS, which caps A+ at 4.0. This is the
// single most-confused point between the two calculators, so it's kept as
// its own dedicated table rather than sharing one with the AMCAS tool.
const LSAC_GRADE_OPTIONS = [
  { label: "A+ (4.33)", value: "4.33" },
  { label: "A (4.00)", value: "4.0" },
  { label: "A- (3.70)", value: "3.7" },
  { label: "B+ (3.30)", value: "3.3" },
  { label: "B (3.00)", value: "3.0" },
  { label: "B- (2.70)", value: "2.7" },
  { label: "C+ (2.30)", value: "2.3" },
  { label: "C (2.00)", value: "2.0" },
  { label: "C- (1.70)", value: "1.7" },
  { label: "D+ (1.30)", value: "1.3" },
  { label: "D (1.00)", value: "1.0" },
  { label: "D- (0.70)", value: "0.7" },
  { label: "F (0.00)", value: "0.0" },
];

export default function LsacLawSchoolGpaCalculator() {
  const [courses, setCourses] = useState([
    { id: 1, name: "", credits: "", grade: "4.0" },
  ]);
  const nextId = useRef(2);

  function addCourse() {
    setCourses([...courses, { id: nextId.current++, name: "", credits: "", grade: "4.0" }]);
  }

  function removeCourse(id) {
    if (courses.length === 1) return;
    setCourses(courses.filter((c) => c.id !== id));
  }

  function updateCourse(id, field, value) {
    setCourses(courses.map((c) => (c.id === id ? { ...c, [field]: value } : c)));
  }

  function validCourses() {
    return courses
      .map((c) => ({ credits: parseFloat(c.credits), grade: parseFloat(c.grade) }))
      .filter(({ credits, grade }) => !isNaN(credits) && credits > 0 && !isNaN(grade));
  }

  function calculateGpa() {
    const valid = validCourses();
    if (valid.length === 0) return null;
    const credits = valid.reduce((sum, c) => sum + c.credits, 0);
    if (credits === 0) return null;
    const points = valid.reduce((sum, c) => sum + c.credits * c.grade, 0);
    return points / credits;
  }

  function getError() {
    for (const course of courses) {
      if (course.credits !== "" && (isNaN(parseFloat(course.credits)) || parseFloat(course.credits) <= 0)) {
        return "Credit hours must be greater than 0.";
      }
    }
    return "";
  }

  function resetCalculator() {
    setCourses([{ id: 1, name: "", credits: "", grade: "4.0" }]);
    nextId.current = 2;
  }

  const gpa = calculateGpa();
  const error = getError();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-6 py-16">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          LSAC (CAS) GPA Calculator
        </h1>

        <p className="mt-4 text-center text-slate-400">
          Calculate your LSAC cumulative GPA the CAS way — A+ counts as 4.33.
        </p>

        <div className="mt-12 space-y-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="grid grid-cols-2 gap-3 sm:grid-cols-[1.5fr_1fr_1fr_auto] sm:gap-3 sm:items-center"
            >
              <input
                type="text"
                aria-label={`Course ${index + 1} name`}
                placeholder="Course Name (optional)"
                value={course.name}
                onChange={(e) => updateCourse(course.id, "name", e.target.value)}
                className="col-span-2 sm:col-span-1 rounded-xl bg-slate-800 p-3 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.5"
                aria-label={`Course ${index + 1} credit hours`}
                placeholder="Credits"
                value={course.credits}
                onChange={(e) => updateCourse(course.id, "credits", e.target.value)}
                className="rounded-xl bg-slate-800 p-3 outline-none text-white border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              />
              <select
                aria-label={`Course ${index + 1} grade`}
                value={course.grade}
                onChange={(e) => updateCourse(course.id, "grade", e.target.value)}
                className="rounded-xl bg-slate-800 p-3 text-white outline-none border border-slate-700 transition-all duration-200 focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
              >
                {LSAC_GRADE_OPTIONS.map((option, i) => (
                  <option key={i} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <button
                onClick={() => removeCourse(course.id)}
                disabled={courses.length === 1}
                aria-label={`Remove course ${index + 1}`}
                className="rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 px-4 py-3 font-bold transition-all duration-200 hover:bg-red-500 hover:text-white active:scale-[0.97] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-red-500/20 disabled:hover:text-red-400 disabled:active:scale-100"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {error && (
          <p className="mt-6 text-center font-semibold text-red-400">
            {error}
          </p>
        )}

        <button
          onClick={addCourse}
          className="mt-6 w-full rounded-xl bg-cyan-500 py-4 text-lg font-bold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-[0.97]"
        >
          + Add Course
        </button>

        <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center transition-all duration-300 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10">
          <h2 className="text-2xl font-bold">LSAC Cumulative GPA</h2>

          {gpa !== null ? (
            <>
              <p
                key={gpa}
                className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black text-cyan-400 animate-fade-in-up"
              >
                {gpa.toFixed(2)}
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  onClick={resetCalculator}
                  className="rounded-xl border border-slate-700 px-6 py-3 font-bold text-slate-200 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 hover:border-cyan-500 active:scale-[0.97]"
                >
                  Reset
                </button>
                <ShareResultButton
                  text={`My LSAC GPA: ${gpa.toFixed(2)} — calculated at studycalc.co`}
                />
              </div>
            </>
          ) : (
            <p className="mt-6 text-slate-500">
              Add your undergraduate courses to see your LSAC cumulative GPA.
            </p>
          )}
        </div>

        <LsacLawSchoolGpaGuide />

      </div>
    </main>
  );
}
