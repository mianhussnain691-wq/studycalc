import Link from "next/link";

export const metadata = {
  title: "Weighted vs Unweighted GPA: High School Scales, AP/IB Boosts & Recalculation",
  description: "Master the exact math behind Weighted (5.0) vs Unweighted (4.0) High School GPAs. Learn how AP, IB, and Honors classes impact class rank, scholarship cutoffs, and college admissions.",
  keywords: [
    "weighted vs unweighted gpa",
    "how to calculate weighted gpa high school",
    "ap classes gpa boost 5.0 scale",
    "honors classes weighted gpa scale",
    "difference between 4.0 and 5.0 gpa",
    "how college admissions recalculate high school gpa",
    "ib diploma gpa conversion",
    "is 4.2 weighted gpa good",
  ],
};

export default function WeightedVsUnweightedGPAGuide() {
  return (
    <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">
      
      {/* Header Section */}
      <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-8">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
          High School Grading & College Prep
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
          Weighted vs. Unweighted GPA: The Master Guide to Scales, AP Boosts, & College Admissions
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
          Demystifying the critical differences between 4.0 unweighted and 5.0 weighted GPA scales. Discover how Advanced Placement (AP), Honors, International Baccalaureate (IB), and Dual Enrollment courses impact your transcript and class rank.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-12 text-base leading-relaxed">

        {/* Section 1: Introduction & Fundamental Concepts */}
        <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 space-y-4">
          <h2 className="text-2xl font-bold text-white mb-2">1. Understanding High School Grading Architecture</h2>
          <p>
            When secondary school students receive their official academic transcripts, they are often confronted with two distinct numerical summaries: an <strong>Unweighted GPA</strong> and a <strong>Weighted GPA</strong>. 
          </p>
          <p>
            An <strong>Unweighted GPA</strong> treats every single academic course with equal mathematical weight regardless of its difficulty. Whether a student earns an 'A' in introductory Physical Education or an 'A' in Advanced Placement Physics C: Electricity and Magnetism, both achievements yield identical quality points on a standard 0.00 to 4.00 scale.
          </p>
          <p>
            Conversely, a <strong>Weighted GPA</strong> incorporates an academic course-rigor multiplier (usually expanding the scale from 0.00 to 5.00, or even up to 6.00 in custom school districts). This extra weight compensates students taking college-level or accelerated coursework by awarding point boosts—typically +0.50 quality points for Honors classes and +1.00 quality points for AP, IB, or Dual Enrollment college courses.
          </p>
          <p>
            Understanding these dual scales is essential for high school students navigating class rank competition, honors awards, scholarship applications, and university admissions strategies. This comprehensive guide details the mathematical formulas, multi-tier conversion matrices, side-by-side student case studies, and university recalculation protocols.
          </p>
        </section>

        {/* Section 2: Detailed Architectural Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            2. Structural Comparison: Unweighted vs. Weighted GPA
          </h2>
          <p>
            To understand how both systems evaluate academic performance on official high school transcripts, review the structural comparison outlined below:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Structural Dimension</th>
                  <th className="p-3 border-r border-slate-800">Unweighted GPA Scale</th>
                  <th className="p-3">Weighted GPA Scale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Maximum Possible Ceiling</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-semibold">4.00 Maximum</td>
                  <td className="p-3 text-emerald-400 font-semibold">5.00 (Standard) / Up to 6.00 (Custom)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Course Difficulty Multiplication</td>
                  <td className="p-3 border-r border-slate-800 text-red-400">None (Gym = AP Calculus)</td>
                  <td className="p-3 text-emerald-400 font-semibold">Active (+0.5 Honors, +1.0 AP/IB)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Grade 'A' Quality Point Yield</td>
                  <td className="p-3 border-r border-slate-800 font-mono">4.00 Points</td>
                  <td className="p-3 font-mono text-emerald-400 font-bold">4.50 (Honors) / 5.00 (AP/IB)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Grade 'B' Quality Point Yield</td>
                  <td className="p-3 border-r border-slate-800 font-mono">3.00 Points</td>
                  <td className="p-3 font-mono text-cyan-400 font-bold">3.50 (Honors) / 4.00 (AP/IB)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">Primary High School Application</td>
                  <td className="p-3 border-r border-slate-800">Standard graduation baseline</td>
                  <td className="p-3 text-emerald-400 font-semibold">Class Rank & Valedictorian Selection</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-white border-r border-slate-800">College Admissions Evaluation</td>
                  <td className="p-3 border-r border-slate-800">Evaluated alongside course rigor report</td>
                  <td className="p-3">Recalculated to university standards</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Comprehensive Multi-Tier Quality Point Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            3. Multi-Tier Letter Grade Quality Point Reference Matrix
          </h2>
          <p>
            The table below demonstrates how raw letter grades and percentages convert into numerical quality points across Standard, Honors, and Advanced Placement (AP) / International Baccalaureate (IB) tiers:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="p-3 border-r border-slate-800">Letter Grade</th>
                  <th className="p-3 border-r border-slate-800">Percentage Range</th>
                  <th className="p-3 border-r border-slate-800 text-cyan-400">Regular / Unweighted</th>
                  <th className="p-3 border-r border-slate-800 text-yellow-400">Honors Tier (+0.5 Weight)</th>
                  <th className="p-3 text-emerald-400">AP / IB / Dual Enrollment (+1.0 Weight)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-950/50 font-mono">
                <tr>
                  <td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A+ / A</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">93% - 100%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold">4.00</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400 font-bold">4.50</td>
                  <td className="p-3 text-emerald-400 font-bold">5.00</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A-</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">90% - 92%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">3.70</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">4.20</td>
                  <td className="p-3 text-emerald-400">4.70</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B+</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">87% - 89%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">3.30</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">3.80</td>
                  <td className="p-3 text-emerald-400">4.30</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">83% - 86%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold">3.00</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400 font-bold">3.50</td>
                  <td className="p-3 text-emerald-400 font-bold">4.00</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B-</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">80% - 82%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">2.70</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">3.20</td>
                  <td className="p-3 text-emerald-400">3.70</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C+</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">77% - 79%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">2.30</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">2.80</td>
                  <td className="p-3 text-emerald-400">3.30</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">73% - 76%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold">2.00</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400 font-bold">2.50</td>
                  <td className="p-3 text-emerald-400 font-bold">3.00</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-400 border-r border-slate-800">D</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">65% - 69%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">1.00</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">1.00 (Unweighted)</td>
                  <td className="p-3 text-emerald-400">1.00 (Unweighted)</td>
                </tr>
                <tr>
                  <td className="p-3 font-bold text-red-500 border-r border-slate-800">F</td>
                  <td className="p-3 border-r border-slate-800 text-slate-300">Below 65%</td>
                  <td className="p-3 border-r border-slate-800 text-cyan-400">0.00</td>
                  <td className="p-3 border-r border-slate-800 text-yellow-400">0.00</td>
                  <td className="p-3 text-emerald-400">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <blockquote className="border-l-4 border-yellow-500 pl-4 py-1 text-sm text-yellow-300/90 my-2">
            <strong>CRITICAL POLICY NOTE:</strong> Most high school grading policies explicitly revoke weighted point bonuses for 'D' or 'F' grades in advanced courses to prevent students from attempting honors/AP coursework without maintaining passing standards.
          </blockquote>
        </section>

        {/* Section 4: Step-by-Step Mathematical Calculation Case Study */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            4. Step-by-Step Calculation Case Study: Student Comparison
          </h2>
          <p>
            To illustrate how course selection dramatically impacts both GPA metrics, examine the performance of two high school juniors enrolled in 5 courses each:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-6">
            
            {/* Student A */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
              <h3 className="text-lg font-bold text-cyan-400">Student A (Regular Track)</h3>
              <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                <li>English 11 (Regular): Grade A (4.00)</li>
                <li>US History (Regular): Grade A (4.00)</li>
                <li>Algebra II (Regular): Grade A (4.00)</li>
                <li>Chemistry (Regular): Grade A (4.00)</li>
                <li>Spanish II (Regular): Grade A (4.00)</li>
              </ul>

              <div className="p-4 bg-slate-900 rounded-lg border border-cyan-900/40 text-sm font-mono space-y-1">
                <p>Total Quality Points = 20.0 Points</p>
                <p>Total Academic Classes = 5 Courses</p>
                <p className="text-cyan-400 font-bold font-sans text-base pt-2 border-t border-slate-800">
                  Unweighted GPA = 4.00 / 4.00
                </p>
                <p className="text-emerald-400 font-bold font-sans text-base">
                  Weighted GPA = 4.00 / 5.00
                </p>
              </div>
            </div>

            {/* Student B */}
            <div className="p-6 bg-slate-950 border border-slate-800 rounded-xl space-y-4">
              <h3 className="text-lg font-bold text-emerald-400">Student B (Advanced Track)</h3>
              <ul className="list-disc pl-5 text-sm space-y-2 text-slate-300">
                <li>AP Literature (AP): Grade B (4.00 Weighted pts)</li>
                <li>AP US History (AP): Grade A (5.00 Weighted pts)</li>
                <li>Honors Pre-Calc (Honors): Grade B+ (3.80 Weighted pts)</li>
                <li>AP Chemistry (AP): Grade B (4.00 Weighted pts)</li>
                <li>Honors Spanish III (Honors): Grade A (4.50 Weighted pts)</li>
              </ul>

              <div className="p-4 bg-slate-900 rounded-lg border border-emerald-900/40 text-sm font-mono space-y-1">
                <p>Unweighted Points = 3.0 + 4.0 + 3.3 + 3.0 + 4.0 = 17.3 Pts</p>
                <p>Weighted Points = 4.0 + 5.0 + 3.8 + 4.0 + 4.5 = 21.3 Pts</p>
                <p className="text-cyan-400 font-bold font-sans text-base pt-2 border-t border-slate-800">
                  Unweighted GPA = 17.3 ÷ 5 = 3.46 / 4.00
                </p>
                <p className="text-emerald-400 font-bold font-sans text-base">
                  Weighted GPA = 21.3 ÷ 5 = 4.26 / 5.00
                </p>
              </div>
            </div>

          </div>

          <p className="text-sm text-slate-300">
            <strong>Admissions Takeaway:</strong> Although Student A maintains a perfect 4.00 Unweighted GPA, Student B holds a significantly higher Weighted GPA (4.26) and demonstrates superior <em>Course Rigor</em>. Selective universities almost unanimously prefer Student B's academic transcript.
          </p>
        </section>

        {/* Section 5: How University Admissions Recalculate High School GPAs */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            5. How University Admissions Offices Recalculate GPAs
          </h2>
          <p>
            Because high school grading policies vary wildly across school districts—some capping weighted scales at 5.0, others using 6.0 scales, and some avoiding weighting altogether—top college admissions offices <strong>recalculate high school transcripts using standardized internal formulas</strong>.
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
              <h3 className="font-bold text-cyan-400 text-base mb-1">Phase 1: Stripping Non-Core Academic Electives</h3>
              <p className="text-sm text-slate-400">
                Admissions officers strip away non-academic classes like Physical Education, Health, Driver’s Ed, Orchestra, and Culinary Arts. Only core academic disciplines (English, Mathematics, Natural Sciences, Social Sciences, Foreign Language) remain in the recalculated index.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
              <h3 className="font-bold text-yellow-400 text-base mb-1">Phase 2: Standardization to Unweighted Baseline</h3>
              <p className="text-sm text-slate-400">
                All high school extra weight is stripped away to establish a standardized 4.0 unweighted GPA baseline. This enables fair cross-comparisons between applicants from different states and educational systems.
              </p>
            </div>

            <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
              <h3 className="font-bold text-emerald-400 text-base mb-1">Phase 3: Independent Evaluation of Course Rigor Index</h3>
              <p className="text-sm text-slate-400">
                Admissions teams analyze your official High School Profile report to determine how many total AP, IB, or Dual Enrollment courses were made available by your school versus how many you chose to take.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: The Strategic Dilemma: AP 'B' vs Regular 'A' */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            6. Strategic Dilemma: Is a 'B' in an AP Class Better Than an 'A' in Regular?
          </h2>
          <p>
            This question represents the most common debate in high school academic planning. The definitive answer from university admissions deans is: <strong>An 'A' in an AP class is best, but a 'B' in an AP class is overwhelmingly preferred over an 'A' in a regular class.</strong>
          </p>
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3 text-sm text-slate-300">
            <p className="font-bold text-cyan-400">Key reasons why admissions officers favor the AP 'B':</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Academic Courage:</strong> Choosing rigorous coursework demonstrates intellectual motivation and willingness to stretch beyond comfort zones.</li>
              <li><strong>Predictive Success Factor:</strong> Performance in AP/IB coursework serves as the strongest statistical predictor of freshman college retention and success.</li>
              <li><strong>Weighted GPA Protection:</strong> On a weighted scale, a 'B' in AP (4.0 pts) matches an 'A' in regular (4.0 pts), preventing damage to your class rank.</li>
            </ul>
          </div>
        </section>

        {/* Section 7: Internal Calculator Engine Links */}
        <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
          <h3 className="text-xl font-bold text-white mb-2">Calculate Your High School Weighted & Unweighted GPA</h3>
          <p className="text-slate-400 text-sm mb-4">
            Test different AP, IB, and Honors course combinations and instantly calculate both your 4.0 unweighted and 5.0 weighted GPAs!
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
              High School GPA Calculator 🎒
            </Link>
            <Link href="/gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Cumulative GPA Tool 🚀
            </Link>
            <Link href="/grade-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
              Weighted Grade Calculator 📊
            </Link>
          </div>
        </section>

        {/* Section 8: Extensive FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-3">
            8. Frequently Asked Questions (Weighted vs. Unweighted FAQ)
          </h2>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">What is considered a good Weighted GPA for top colleges?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                For highly selective institutions (Ivy League, Stanford, MIT, top public universities), competitive applicants typically present a <strong>Weighted GPA of 4.20 to 4.70+</strong>, reflecting consistent 'A' grades in a heavy load of AP, IB, or Dual Enrollment classes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">Can a High School Weighted GPA exceed 5.0?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Yes! In school districts that award extra weighting for Dual Enrollment college classes (+1.5 points) or utilize 6.0 scales, students taking exclusively college-level courses can achieve weighted GPAs well above 5.0.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">Do Dual Enrollment courses receive AP-level weight?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                In most public school systems, accredited Dual Enrollment college courses receive the full +1.0 weighting boost equivalent to AP and IB Higher Level (HL) courses because they grant actual transferable university credit.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">Is Class Rank determined by Weighted or Unweighted GPA?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                The vast majority of high schools publishing official class ranks (including Valedictorian and Salutatorian honors) base their standings on <strong>Weighted GPA</strong> to properly reward students taking rigorous academic schedules.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <h3 className="font-bold text-white text-base">How does IB Higher Level (HL) vs Standard Level (SL) weighting work?</h3>
              <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                Most high schools award full AP-equivalent weight (+1.0 point) to IB Higher Level (HL) courses, while IB Standard Level (SL) classes receive either Honors weight (+0.5 point) or full AP weight depending on local district rules.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}