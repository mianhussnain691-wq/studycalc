// src/app/guides/page.jsx
import Link from "next/link";

const availableGuides = [
  { title: "AP Honors GPA Weighting Guide", path: "/ap-honors-gpa-weighting-guide", category: "GPA Guides" },
  { title: "Attendance Percentage Formula", path: "/attendance-percentage-formula", category: "Calculators" },
  { title: "CGPA to Percentage Conversion", path: "/cgpa-to-percentage-conversion", category: "Calculators" },
  { title: "Cumulative vs Semester GPA Calculator", path: "/cumulative-vs-semester-gpa-calculator-guide", category: "GPA Guides" },
  { title: "Final Grade Calculator Guide", path: "/final-grade-calculator-guide", category: "Calculators" },
  { title: "GPA for Scholarships", path: "/gpa-for-scholarships", category: "Admissions" },
  { title: "GPA Requirements", path: "/gpa-requirements", category: "Admissions" },
  { title: "GPA Scale Explained", path: "/gpa-scale-explained", category: "GPA Guides" },
  { title: "Grade Scale Explained", path: "/grade-scale-explained", category: "Grading" },
  { title: "High School vs College GPA", path: "/high-school-vs-college-gpa", category: "Student Life" },
  { title: "How to Calculate CGPA", path: "/how-to-calculate-cgpa", category: "Calculators" },
  { title: "How to Raise GPA Fast", path: "/how-to-raise-gpa-fast", category: "Academic Tips" },
  { title: "Letter Grade to Percent Guide", path: "/letter-grade-to-percent-guide", category: "Grading" },
  { title: "Marks to Grade Conversion", path: "/marks-to-grade-conversion", category: "Grading" },
  { title: "Pakistani Board vs US GPA", path: "/pakistani-board-vs-us-gpa", category: "International" },
  { title: "Percentage Formula Explained", path: "/percentage-formula-explained", category: "Calculators" },
  { title: "Semester GPA vs CGPA", path: "/semester-gpa-vs-cgpa", category: "GPA Guides" },
  { title: "Semester GPA vs Cumulative GPA", path: "/semester-gpa-vs-cumulative-gpa", category: "GPA Guides" },
  { title: "Weighted GPA vs Unweighted GPA", path: "/weighted-gpa-vs-unweighted-gpa", category: "GPA Guides" },
  { title: "Weighted vs Unweighted GPA Calculator", path: "/weighted-vs-unweighted-gpa-calculator-guide", category: "Calculators" },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#070b19] text-slate-300 py-24 px-6 max-w-7xl mx-auto">
      
      {/* Stylish Header Section */}
      <div className="mb-14 border-b border-slate-800/80 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>📚 Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Explore Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Academic Guides</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Comprehensive articles, grading criteria, and step-by-step conversion manuals designed to help you excel in your academic journey.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {availableGuides.map((guide) => (
          <Link
            key={guide.path}
            href={guide.path}
            className="p-6 rounded-2xl bg-[#0b1329] border border-slate-800 hover:border-cyan-500 transition flex flex-col justify-between group shadow-xl"
          >
            <div>
              <span className="text-xs font-semibold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10">
                {guide.category}
              </span>
              <h2 className="text-lg font-bold text-white mt-4 group-hover:text-cyan-300 transition">
                {guide.title}
              </h2>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm text-cyan-400 font-medium">
              <span>Read Guide</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}