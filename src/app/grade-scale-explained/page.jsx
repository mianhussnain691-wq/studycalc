import Link from "next/link";

export const metadata = {
  title: "Grading Scales Explained: 4.0 Scale, Letter Grades & Percentage Conversions",
  description:
    "Comprehensive guide explaining academic grading scales globally. Learn how to convert letter grades to GPA, calculate weighted scales, and convert percentages to a 4.0 scale.",
  keywords: [
    "grade scale explained",
    "4.0 gpa scale chart",
    "letter grade to gpa conversion",
    "percentage to gpa formula",
    "weighted vs unweighted grading scale",
    "high school grading system",
    "college GPA letter grade scale",
  ],
};

export default function GradeScaleExplained() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">
      
      {/* Header Section */}
      <header className="mb-10 text-center md:text-left">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
          Academic Evaluation Systems
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Grading Scales Explained: The Complete Conversion & Evaluation Framework
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          Unravel the mechanics of academic evaluation. Learn how letter grades, numerical percentages, 4.0 scales, 5.0 weighted systems, and international conversion standards function across educational systems.
        </p>
      </header>

      {/* Main Article Body */}
      <div className="space-y-10 text-base leading-relaxed">

        {/* Section 1: Introduction */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">Why Educational Systems Use Different Grading Scales</h2>
          <p>
            Around the world, academic performance is evaluated using various grading scales. High schools and universities use different methods to measure student achievement, ranging from numerical percentages (0–100%) and letter grades (A+ to F) to standardized Grade Point Average scales like the 4.0 scale or 5.0 weighted scale.
          </p>
          <p className="mt-4">
            Understanding how these grading scales translate into a standardized GPA is crucial when applying to colleges, submitting transcripts to graduate admissions, or seeking scholarships. A failure to accurately map letter grades or percentage ranges to the correct GPA scale can lead to inaccurate academic reporting.
          </p>
        </section>

        {/* Section 2: The Standard 4.0 Unweighted Scale Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            1. The Standard 4.0 Unweighted Grading Scale Chart
          </h2>
          <p>
            The <strong>4.0 Scale</strong> is the most widely recognized academic scale across North America and international higher education institutions. Under an unweighted system, every course carries a maximum value of 4.0 points regardless of whether it is a standard, honors, or advanced placement (AP) course.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Letter Grade</th>
                  <th className="p-3 border-r border-slate-800">Percentage Equivalent</th>
                  <th className="p-3 border-r border-slate-800">4.0 Unweighted GPA Value</th>
                  <th className="p-3">Academic Performance Level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                <tr>
                  <td className="p-3 font-semibold text-emerald-400 border-r border-slate-800">A+ / A</td>
                  <td className="p-3 border-r border-slate-800">93% – 100%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold">4.00</td>
                  <td className="p-3">Excellent / Exemplary Mastery</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-emerald-400 border-r border-slate-800">A-</td>
                  <td className="p-3 border-r border-slate-800">90% – 92%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold">3.70</td>
                  <td className="p-3">Superior Achievement</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">B+</td>
                  <td className="p-3 border-r border-slate-800">87% – 89%</td>
                  <td className="p-3 border-r border-slate-800 font-bold">3.30</td>
                  <td className="p-3">Above Average Mastery</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-cyan-400 border-r border-slate-800">B</td>
                  <td className="p-3 border-r border-slate-800">83% – 86%</td>
                  <td className="p-3 border-r border-slate-800 font-bold">3.00</td>
                  <td className="p-3">Solid Average Competency</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-yellow-400 border-r border-slate-800">B-</td>
                  <td className="p-3 border-r border-slate-800">80% – 82%</td>
                  <td className="p-3 border-r border-slate-800 font-bold">2.70</td>
                  <td className="p-3">Satisfactory Understanding</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-yellow-400 border-r border-slate-800">C+</td>
                  <td className="p-3 border-r border-slate-800">77% – 79%</td>
                  <td className="p-3 border-r border-slate-800 font-bold">2.30</td>
                  <td className="p-3">Fair / Moderate Mastery</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-yellow-500 border-r border-slate-800">C</td>
                  <td className="p-3 border-r border-slate-800">73% – 76%</td>
                  <td className="p-3 border-r border-slate-800 font-bold">2.00</td>
                  <td className="p-3">Minimum Core Passing Level</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-orange-400 border-r border-slate-800">D</td>
                  <td className="p-3 border-r border-slate-800">65% – 72%</td>
                  <td className="p-3 border-r border-slate-800 text-orange-400 font-bold">1.00</td>
                  <td className="p-3 border-r">Marginal / Below Standard</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-red-400 border-r border-slate-800">F</td>
                  <td className="p-3 border-r border-slate-800">Below 65%</td>
                  <td className="p-3 border-r border-slate-800 text-red-400 font-bold">0.00</td>
                  <td className="p-3">Failure / Zero Credit Earned</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Weighted 5.0 Scales (Honors, AP & IB) */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            2. The 5.0 Weighted Scale (AP, IB, & Honors Adjustments)
          </h2>
          <p>
            To reward students who take more difficult courses, many high schools use a <strong>5.0 Weighted Scale</strong>. Under this system, advanced coursework gets extra grade points added to reward course rigor.
          </p>

          <div className="grid md:grid-cols-3 gap-4 my-6 text-sm">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
              <h3 className="font-bold text-cyan-400">Standard Courses</h3>
              <p className="text-xs text-slate-400">Regular level difficulty.</p>
              <ul className="text-slate-300 space-y-1 font-mono pt-2">
                <li>Grade A = 4.0 Points</li>
                <li>Grade B = 3.0 Points</li>
                <li>Grade C = 2.0 Points</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
              <h3 className="font-bold text-violet-400">Honors Courses (+0.5)</h3>
              <p className="text-xs text-slate-400">Accelerated curriculum.</p>
              <ul className="text-slate-300 space-y-1 font-mono pt-2">
                <li>Grade A = 4.5 Points</li>
                <li>Grade B = 3.5 Points</li>
                <li>Grade C = 2.5 Points</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/80 space-y-2">
              <h3 className="font-bold text-emerald-400">AP / IB Courses (+1.0)</h3>
              <p className="text-xs text-slate-400">College-level rigor.</p>
              <ul className="text-slate-300 space-y-1 font-mono pt-2">
                <li>Grade A = 5.0 Points</li>
                <li>Grade B = 4.0 Points</li>
                <li>Grade C = 3.0 Points</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Converting Percentage to GPA Mathematical Formula */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            3. How to Convert Percentages Directly to a 4.0 GPA Scale
          </h2>
          <p>
            If your academic transcript reports final marks as numerical percentages (e.g., 88%), you can estimate your 4.0 GPA equivalent using the following standard conversion formula:
          </p>

          <div className="my-6 rounded-xl border border-cyan-500/20 bg-slate-950 p-6 text-center">
            <p className="text-lg md:text-xl font-bold text-cyan-400 font-mono">
              GPA Equivalent = (Percentage Score ÷ 20) - 1.0
            </p>
            <p className="text-xs text-slate-500 mt-2">
              *(Valid for percentage ranges between 60% and 100%)*
            </p>
          </div>

          <div className="bg-slate-900/80 p-5 rounded-xl border border-slate-800 space-y-2 text-sm">
            <h4 className="font-bold text-white">Mathematical Example:</h4>
            <p>• Suppose your overall course percentage score is <strong>85%</strong>.</p>
            <p>• Step 1: Divide 85 by 20 = <strong>4.25</strong></p>
            <p>• Step 2: Subtract 1.0 = <strong className="text-cyan-400">3.25 GPA Equivalent</strong></p>
          </div>
        </section>

        {/* Section 5: Internal Link Engine */}
        <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Convert & Calculate Your GPA Instantly</h3>
          <p className="text-slate-400 text-sm mb-4">
            Avoid manual math errors. Convert your letter grades, weighted course marks, or percentages into a clean GPA report using our calculators.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
              Launch GPA Calculator 🚀
            </Link>
            <Link href="/weighted-gpa-vs-unweighted-gpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Weighted vs Unweighted Guide ⚖️
            </Link>
            <Link href="/how-to-calculate-cgpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Calculate CGPA 📊
            </Link>
          </div>
        </section>

        {/* Section 6: Frequently Asked Questions (FAQs) */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Can a weighted GPA go higher than 4.0?</h3>
              <p className="text-sm text-slate-400 mt-1">
                Yes. Under a 5.0 weighted scale, taking multiple AP or IB classes where you score "A" grades can result in cumulative GPAs such as 4.3 or 4.6.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">Is an A- worth a 4.0 or a 3.7 GPA?</h3>
              <p className="text-sm text-slate-400 mt-1">
                In most colleges and universities, an "A-" is valued at 3.70 grade points, whereas a solid "A" or "A+" is given 4.00 grade points.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-semibold text-white">What is a passing grade on the 4.0 scale?</h3>
              <p className="text-sm text-slate-400 mt-1">
                A grade of "D" (1.00 GPA) is usually the minimum passing score to earn course credit, although many university degree majors require at least a "C" (2.00 GPA) for core courses.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}