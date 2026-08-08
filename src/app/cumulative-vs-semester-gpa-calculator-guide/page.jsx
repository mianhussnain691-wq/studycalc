import Link from "next/link";

export const metadata = {
  title: "Cumulative vs Semester GPA: Calculation Guide, Formulas & Differences",
  description: "Comprehensive guide on calculating Cumulative GPA vs Semester GPA. Learn credit-weighted formulas, step-by-step mathematical examples, impact of grade forgiveness, and college academic standing rules.",
  keywords: [
    "cumulative vs semester gpa",
    "how to calculate cumulative gpa",
    "semester gpa calculation formula",
    "credit weighted cumulative gpa example",
    "difference between term gpa and overall gpa",
    "how retaking classes affects cumulative gpa",
    "how to raise low cumulative gpa",
    "college academic standing probation gpa threshold",
  ],
};

export default function CumulativeVsSemesterGPAGuide() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">
      
      {/* Header Section */}
      <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-8">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
          Academic Standing & Credit Mechanics
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Cumulative vs. Semester GPA: Complete Mathematical Calculation & Strategic Recovery Guide
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          Confused by the difference between your single-term grades and your overall academic record? Master the exact credit-weighted formulas, mathematical proofs, academic probation safeguards, and long-term recovery strategies to protect your transcript.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-12 text-base leading-relaxed">

        {/* Section 1: Demystifying Academic Grade Point Averages */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">1. Demystifying Cumulative and Semester GPAs</h2>
          <p>
            In secondary and post-secondary academic institutions across North America and around the world, academic transcripts track student performance using two critical metrics: the <strong>Semester GPA</strong> (often referred to as Term GPA, Quarter GPA, or Trimester GPA) and the <strong>Cumulative GPA</strong> (frequently designated as Overall GPA or Total Transcript GPA). 
          </p>
          <p>
            While both metrics express academic achievement using a standard numerical index (typically on a 4.00, 4.33, or 5.00 scale), they serve radically different structural purposes. A Semester GPA provides an isolated, snapshot evaluation of your performance during a specific 15-to-18-week academic window. In contrast, your Cumulative GPA represents a running, credit-weighted average of every single quality point and credit hour completed across your entire academic career at an institution.
          </p>
          <p>
            Failing to understand how these two numbers interact can lead to severe academic consequences. A single bad semester can drag down a previously pristine Cumulative GPA, while a student with a low Cumulative GPA may need multiple semesters of near-perfect performance to pull their overall standing above graduation or financial aid thresholds. This comprehensive masterclass covers the precise credit-weighting formulas, step-by-step mathematical proofs, credit inertia dynamics, grade forgiveness policies, and transcript recovery strategies.
          </p>
          <p>
            Whether you are a university undergraduate trying to avoid academic probation, a pre-med applicant protecting medical school eligibility, or a high school student aiming for honors distinction, understanding this mathematical mechanics is essential for long-term academic planning.
          </p>
        </section>

        {/* Section 2: Core Structural & Architectural Differences */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            2. Structural Architecture: Comparing Semester and Cumulative GPAs
          </h2>
          <p>
            To understand how these two metrics function on official academic records, let us examine their foundational structural differences side by side:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Structural Dimension</th>
                  <th className="p-3 border-r border-slate-800">Semester (Term) GPA</th>
                  <th className="p-3">Cumulative (Overall) GPA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Evaluation Scope</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-semibold">Single academic term (15–18 weeks)</td>
                  <td className="p-3 text-emerald-400 font-semibold">Entire academic career at institution</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Sensitivity / Volatility</td>
                  <td className="p-3 border-r border-slate-800">Extremely High (Fewer credits mean high swings)</td>
                  <td className="p-3">Decreases over time (Credit inertia builds up)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Primary Academic Use</td>
                  <td className="p-3 border-r border-slate-800">Dean's List, Term Honors, Academic Probation</td>
                  <td className="p-3 font-semibold text-emerald-400">Graduation eligibility, Cum Laude, Grad School</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Reset Frequency</td>
                  <td className="p-3 border-r border-slate-800">Resets to zero at start of every new term</td>
                  <td className="p-3">Never resets (Carries forward continuously)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Impact of Late Course Drops</td>
                  <td className="p-3 border-r border-slate-800">Affects term standing if credit minimum drops</td>
                  <td className="p-3">W/F grades impact GPA; simple Ws usually excluded</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Financial Aid Relevance</td>
                  <td className="p-3 border-r border-slate-800">Term-by-term SAP (Satisfactory Progress)</td>
                  <td className="p-3">Minimum GPA requirement for FAFSA/Scholarships</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Standard Grade Point Value Chart */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            3. Standard Letter Grade Quality Point Value Reference Chart
          </h2>
          <p>
            Before calculating either GPA, individual letter grades earned in each course must be converted into numerical quality points using your institution's standard scale:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Letter Grade</th>
                  <th className="p-3 border-r border-slate-800">Percentage Standard</th>
                  <th className="p-3 border-r border-slate-800">4.0 Scale Points</th>
                  <th className="p-3 border-r border-slate-800">4.33 Scale Points (+/- System)</th>
                  <th className="p-3">Quality Point Yield (3 Credit Class)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50 font-mono">
                <tr>
                  <td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A+</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">97% - 100%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">4.00</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">4.33</td>
                  <td className="p-3 text-emerald-400 font-bold">12.00 or 12.99 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">93% - 96%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">4.00</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">4.00</td>
                  <td className="p-3 text-emerald-400 font-bold">12.00 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A-</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">90% - 92%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">3.70</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">3.70</td>
                  <td className="p-3 text-emerald-400 font-bold">11.10 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B+</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">87% - 89%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">3.30</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">3.30</td>
                  <td className="p-3 text-cyan-400 font-bold">9.90 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">83% - 86%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">3.00</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">3.00</td>
                  <td className="p-3 text-cyan-400 font-bold">9.00 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B-</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">80% - 82%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">2.70</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">2.70</td>
                  <td className="p-3 text-cyan-400 font-bold">8.10 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C+</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">77% - 79%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">2.30</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">2.30</td>
                  <td className="p-3 text-yellow-400 font-bold">6.90 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">73% - 76%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">2.00</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">2.00</td>
                  <td className="p-3 text-yellow-400 font-bold">6.00 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C-</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">70% - 72%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">1.70</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">1.70</td>
                  <td className="p-3 text-yellow-400 font-bold">5.10 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-400 border-r border-slate-800">D</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">65% - 69%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">1.00</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">1.00</td>
                  <td className="p-3 text-red-400 font-bold">3.00 Quality Points</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-500 border-r border-slate-800">F</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">Below 65%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">0.00</td>
                  <td className="p-3 border-r border-slate-800 text-emerald-400">0.00</td>
                  <td className="p-3 text-red-500 font-bold">0.00 Quality Points</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Fundamental Mathematical Formulas */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            4. Mathematical Formulas & Step-by-Step Calculation Mechanics
          </h2>
          <p>
            Calculating either GPA is not simply a matter of adding up letter grade numbers and dividing by the count of classes. Because classes carry different credit values (e.g., a 4-credit science lab versus a 1-credit seminar), GPAs must be calculated as <strong>credit-weighted averages</strong>.
          </p>

          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Master Formula 1: Single Semester GPA</h3>
            <p className="text-sm font-mono text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
              Semester GPA = Total Quality Points Earned in Term ÷ Total Credit Hours Attempted in Term
            </p>
            <p className="text-sm text-slate-400">
              Where Quality Points for each course = (Grade Point Value) × (Course Credit Hours).
            </p>

            <h3 className="text-lg font-bold text-emerald-400 pt-4">Master Formula 2: Multi-Semester Cumulative GPA</h3>
            <p className="text-sm font-mono text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
              Cumulative GPA = Total Cumulative Quality Points (All Terms) ÷ Total Cumulative Credit Hours (All Terms)
            </p>
            <blockquote className="border-l-4 border-yellow-500 pl-4 py-1 text-sm text-yellow-300/90 my-2">
              <strong>CRITICAL WARNING:</strong> Never average your individual semester GPAs together! Averaging a 3.80 GPA (12 credits) with a 2.00 GPA (18 credits) produces mathematically incorrect results because credit loads differ across terms.
            </blockquote>
          </div>
        </section>

        {/* Section 5: Real-World Multi-Semester Case Studies */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            5. Comprehensive Case Studies: Tracking Academic Progression Over 3 Semesters
          </h2>
          <p>
            To illustrate how semester GPAs accumulate and interact over time, let us follow a undergraduate student through three full academic terms:
          </p>

          {/* Term 1 */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-cyan-400">Semester 1: Freshmen Fall Term (15 Credits)</h3>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
              <li><strong>Calculus I (4 Credits):</strong> Grade B (3.0 pts) ➔ 12.0 Quality Points</li>
              <li><strong>General Chemistry w/ Lab (4 Credits):</strong> Grade A- (3.7 pts) ➔ 14.8 Quality Points</li>
              <li><strong>English Composition (3 Credits):</strong> Grade A (4.0 pts) ➔ 12.0 Quality Points</li>
              <li><strong>Psychology 101 (3 Credits):</strong> Grade B+ (3.3 pts) ➔ 9.9 Quality Points</li>
              <li><strong>Freshman Orientation (1 Credit):</strong> Grade A (4.0 pts) ➔ 4.0 Quality Points</li>
            </ul>

            <div className="p-4 bg-slate-900 rounded-lg border border-cyan-900/40 text-sm font-mono">
              <p>Term 1 Total Quality Points = 12.0 + 14.8 + 12.0 + 9.9 + 4.0 = 52.7 Quality Points</p>
              <p>Term 1 Attempted Credits = 15.0 Credits</p>
              <p className="mt-2 text-cyan-400 font-bold font-sans text-base border-t border-slate-800 pt-2">
                Semester 1 GPA = 52.7 ÷ 15.0 = 3.513 / 4.00 | Cumulative GPA = 3.513
              </p>
            </div>
          </div>

          {/* Term 2 */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-red-400">Semester 2: Freshmen Spring Term (Difficult Term - 16 Credits)</h3>
            <p className="text-sm text-slate-300">
              In spring semester, the student takes heavier coursework and encounters personal difficulties:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
              <li><strong>Calculus II (4 Credits):</strong> Grade C (2.0 pts) ➔ 8.0 Quality Points</li>
              <li><strong>Organic Chemistry I (4 Credits):</strong> Grade D (1.0 pt) ➔ 4.0 Quality Points</li>
              <li><strong>Physics I w/ Lab (4 Credits):</strong> Grade C+ (2.3 pts) ➔ 9.2 Quality Points</li>
              <li><strong>Microeconomics (3 Credits):</strong> Grade B (3.0 pts) ➔ 9.0 Quality Points</li>
              <li><strong>Physical Education (1 Credit):</strong> Grade A (4.0 pts) ➔ 4.0 Quality Points</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
              <div className="p-4 bg-slate-900 rounded-lg border border-red-900/40">
                <p className="text-red-400 font-bold text-base mb-1 font-sans">Semester 2 Isolated GPA:</p>
                <p>Term Points = 8.0 + 4.0 + 9.2 + 9.0 + 4.0 = 34.2 Pts</p>
                <p>Term Credits = 16.0 Credits</p>
                <p className="mt-2 text-red-400 font-bold font-sans text-base border-t border-slate-800 pt-2">
                  Semester 2 GPA = 34.2 ÷ 16.0 = 2.137 / 4.00
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-lg border border-yellow-900/40">
                <p className="text-yellow-400 font-bold text-base mb-1 font-sans">Updated Cumulative GPA:</p>
                <p>Total Points = 52.7 (Term 1) + 34.2 (Term 2) = 86.9 Pts</p>
                <p>Total Credits = 15.0 + 16.0 = 31.0 Credits</p>
                <p className="mt-2 text-yellow-400 font-bold font-sans text-base border-t border-slate-800 pt-2">
                  Cumulative GPA = 86.9 ÷ 31.0 = 2.803 / 4.00
                </p>
              </div>
            </div>
          </div>

          {/* Term 3 */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-emerald-400">Semester 3: Sophomore Fall Recovery Term (14 Credits)</h3>
            <p className="text-sm text-slate-300">
              Determined to recover, the student bounces back strongly during Sophomore year:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
              <li><strong>Retake Organic Chemistry I (4 Credits):</strong> Grade A (4.0 pts) ➔ 16.0 Quality Points</li>
              <li><strong>Statistics (3 Credits):</strong> Grade A (4.0 pts) ➔ 12.0 Quality Points</li>
              <li><strong>Macroeconomics (3 Credits):</strong> Grade A- (3.7 pts) ➔ 11.1 Quality Points</li>
              <li><strong>World History (4 Credits):</strong> Grade B+ (3.3 pts) ➔ 13.2 Quality Points</li>
            </ul>

            <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
              <div className="p-4 bg-slate-900 rounded-lg border border-emerald-900/40">
                <p className="text-emerald-400 font-bold text-base mb-1 font-sans">Semester 3 Isolated GPA:</p>
                <p>Term Points = 16.0 + 12.0 + 11.1 + 13.2 = 52.3 Pts</p>
                <p>Term Credits = 14.0 Credits</p>
                <p className="mt-2 text-emerald-400 font-bold font-sans text-base border-t border-slate-800 pt-2">
                  Semester 3 GPA = 52.3 ÷ 14.0 = 3.735 / 4.00
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-lg border border-emerald-900/40">
                <p className="text-emerald-400 font-bold text-base mb-1 font-sans">Updated Cumulative GPA (No Grade Replace):</p>
                <p>Total Points = 86.9 + 52.3 = 139.2 Quality Points</p>
                <p>Total Credits = 31.0 + 14.0 = 45.0 Credits</p>
                <p className="mt-2 text-emerald-400 font-bold font-sans text-base border-t border-slate-800 pt-2">
                  Cumulative GPA = 139.2 ÷ 45.0 = 3.093 / 4.00
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Credit Inertia & Grade Forgiveness Impact */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            6. Credit Inertia & Grade Forgiveness Policies Explained
          </h2>
          
          <h3 className="text-xl font-bold text-white mt-4">Understanding Academic "Credit Inertia"</h3>
          <p>
            <strong>Credit Inertia</strong> is a mathematical phenomenon where the impact of new semester grades on your overall Cumulative GPA diminishes as you accumulate more completed credit hours.
          </p>
          <div className="grid md:grid-cols-2 gap-4 my-4 text-sm">
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h4 className="font-bold text-cyan-400 mb-2">Freshman Year (Low Inertia)</h4>
              <p className="text-slate-400">
                With only 15 completed credits, earning a 4.0 semester GPA can instantly raise a 2.50 Cumulative GPA up to a 3.25 (+0.75 jump).
              </p>
            </div>
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
              <h4 className="font-bold text-yellow-400 mb-2">Senior Year (High Inertia)</h4>
              <p className="text-slate-400">
                With 105 completed credits, earning that same 4.0 semester GPA only moves a 2.50 Cumulative GPA up to a 2.68 (+0.18 jump).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mt-4">How Grade Forgiveness / Retakes Work</h3>
          <p>
            Many universities offer official <strong>Grade Replacement or Grade Forgiveness Policies</strong>. When you retake a course you previously failed or earned a low grade in:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-300">
            <li><strong>With Grade Replacement:</strong> The original grade remains visible on your official transcript, but its quality points are completely removed from Cumulative GPA calculations and replaced by the new grade.</li>
            <li><strong>Without Grade Replacement:</strong> Both the original grade and the new retake grade are factored into cumulative calculations, doubling the credit burden for that single subject area.</li>
          </ul>
        </section>

        {/* Section 7: Academic Probation & Standing Rules */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            7. College Academic Standing, Probation & Honors Thresholds
          </h2>
          <p>
            Universities track semester and cumulative GPAs to classify student standing according to strict administrative benchmarks:
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
              <h3 className="font-bold text-emerald-400 text-base mb-1">Dean's List & Term Honors</h3>
              <p className="text-sm text-slate-400">
                Evaluated purely on a single <strong>Semester GPA</strong> basis (usually requiring a minimum of 3.50 to 3.75 GPA while enrolled in at least 12 graded credit hours).
              </p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
              <h3 className="font-bold text-yellow-400 text-base mb-1">Academic Probation Safeguards</h3>
              <p className="text-sm text-slate-400">
                Triggered when a student's <strong>Cumulative GPA drops below 2.00</strong> (Good Standing threshold). Students are typically given 1–2 probationary semesters to raise their Cumulative GPA before facing academic suspension or dismissal.
              </p>
            </div>

            <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
              <h3 className="font-bold text-cyan-400 text-base mb-1">Graduation Latin Honors (Cum Laude)</h3>
              <p className="text-sm text-slate-400">
                Evaluated exclusively on final overall <strong>Cumulative GPA</strong> upon completing degree requirements:
              </p>
              <ul className="list-disc pl-6 mt-2 text-xs text-slate-400 space-y-1 font-mono">
                <li>Cum Laude: 3.50 – 3.69 Cumulative GPA</li>
                <li>Magna Cum Laude: 3.70 – 3.89 Cumulative GPA</li>
                <li>Summa Cum Laude: 3.90 – 4.00 Cumulative GPA</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Internal Link Engine */}
        <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Calculate Your Semester & Cumulative GPA</h3>
          <p className="text-slate-400 text-sm mb-4">
            Skip complex manual math! Use StudyCalc's dedicated calculators to compute your term GPA or forecast your required grades for academic recovery.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
              Cumulative GPA Tool 🚀
            </Link>
            <Link href="/gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              College Term GPA Engine 🎓
            </Link>
            <Link href="/final-grade-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Final Exam Grade Target 🎯
            </Link>
          </div>
        </section>

        {/* Section 9: Extensive FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            9. Frequently Asked Questions (Cumulative vs. Semester GPA FAQ)
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">Do graduate schools look at Cumulative GPA or Semester GPA trends?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Graduate and professional admissions (Medical, Law, MBA) evaluate both! While your overall Cumulative GPA serves as the initial screening threshold, admissions committees pay close attention to your <strong>Upward Grade Trend</strong> across your final 60 credit hours (Junior and Senior years).
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">Can transfer credits alter my university Cumulative GPA?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                At most universities, credits transferred from community colleges or other institutions transfer as earned credit hours towards degree completion, but letter grades earned elsewhere are <strong>not factored into your new institution's Cumulative GPA</strong>.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">How does a Withdrawal (W) impact Cumulative vs. Semester GPA?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                A standard grade of "W" (Withdrawn before deadline) carries zero quality point value and is excluded from both Semester and Cumulative GPA calculations. However, withdrawing late may result in a "WF" (Withdrawn Failing), which counts mathematically as an 'F' (0.0 pts) on both scales.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">How many credit hours does it take to fix a bad semester GPA?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                The exact recovery timeline depends on your accumulated credit inertia. If you experience a bad semester early (e.g., Freshman year), completing 30 credit hours of B+ / A grades can pull your overall GPA back above 3.20+. Later in college, recovery requires higher term GPAs across more credits.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">Does Pass/Fail grading affect Cumulative GPA?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                A passing grade under a Pass/Fail or Satisfactory/Unsatisfactory option awards credit hours toward graduation but is completely excluded from GPA calculations. However, earning a "Fail" under Pass/Fail options at some institutions counts as 0.0 quality points, lowering your GPA.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}