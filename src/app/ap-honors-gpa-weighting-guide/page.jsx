import Link from "next/link";

export const metadata = {
  title: "Weighted vs. Unweighted GPA: Complete AP, IB & Honors Scale Guide (3500+ Words)",
  description: "Exhaustive breakdown on how high schools calculate weighted vs. unweighted GPA. Complete breakdown of AP (5.0), Honors (4.5), IB (5.0), Dual Enrollment, Texas 6.0 scales, UC Weighted Capped algorithms, and college admissions recalculation methods.",
  keywords: [
    "weighted vs unweighted gpa",
    "how to calculate weighted gpa",
    "ap class gpa boost 5.0 scale",
    "honors class weight 4.5 gpa",
    "ib diploma gpa conversion",
    "unweighted gpa max 4.0",
    "college admissions weighted gpa recalculation",
    "ap credit gpa weight formula",
    "cumulative high school gpa weighting",
    "texas 6.0 gpa scale conversion",
    "uc capped weighted gpa calculator",
  ],
};

export default function APHonorsGpaWeightingGuide() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Weighted vs. Unweighted GPA: The Ultimate AP, IB & Honors Scale Master Guide",
    "description": "Comprehensive high school guide on weighted vs. unweighted GPA, course quality point bonuses, AP/IB/Honors scale differences, regional scales (Texas 6.0, UC Capped), and college admission recalculations.",
    "author": {
      "@type": "Organization",
      "name": "StudyCalc",
      "url": "https://studycalc.co"
    },
    "publisher": {
      "@type": "Organization",
      "name": "StudyCalc",
      "logo": {
        "@type": "ImageObject",
        "url": "https://studycalc.co/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://studycalc.co/ap-honors-gpa-weighting-guide"
    }
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is a 4.0 weighted GPA good for top universities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 4.0 weighted GPA means a student is averaging mostly 'B' grades in advanced courses (AP/IB/Honors) or 'A' grades in unweighted standard courses. Top competitive universities usually look for an unweighted GPA near 3.8-4.0 combined with rigorous AP/IB course selection that pushes the weighted GPA above 4.3+."
        }
      },
      {
        "@type": "Question",
        "name": "How much does an AP class boost your GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On a standard 5.0 weighted scale, an AP (Advanced Placement) or IB (International Baccalaureate) Higher Level class adds a +1.0 grade point bonus. Earning an 'A' in an AP class gives 5.0 quality points instead of the standard 4.0 unweighted points."
        }
      },
      {
        "@type": "Question",
        "name": "Do colleges recalculate high school GPAs during admissions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, over 80% of major universities recalculate applicant GPAs onto a standardized unweighted 4.0 scale or an internal proprietary system. They evaluate course rigor separately using the official high school transcript profile."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Honors (4.5) and AP (5.0) weighting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Honors classes typically grant a +0.5 quality point bonus (an 'A' equals 4.5), reflecting accelerated high school curriculum. AP classes are college-level courses audited by the College Board, granting a full +1.0 bonus (an 'A' equals 5.0)."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Texas 6.0 GPA scale work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many Texas school districts use a 6.0 weighted scale where AP/IB classes yield up to 6.0 quality points for 100%, Advanced/Honors yield 5.5, and Regular courses yield 5.0. It allows fine-grained percentage-to-quality-point conversion for state class rank automatic admission requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What is the University of California (UC) Capped Weighted GPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The UC system calculates a Capped Weighted GPA by adding extra grade points only for honors-level/AP/IB courses taken in 10th and 11th grade, capping the maximum bonus points at 8 semester units (4 full-year courses)."
        }
      }
    ]
  };

  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 py-12 text-slate-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
      />

      {/* Header Section */}
      <header className="mb-12 text-center md:text-left border-b border-slate-800 pb-10">
        <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4 tracking-wide uppercase">
          High School Grading Mechanics & Admissions Strategy
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Weighted vs. Unweighted GPA: The Ultimate AP, IB & Honors Weighting Master Guide
        </h1>
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed max-w-3xl">
          Demystify how high schools calculate course weights, AP (5.0), IB (5.0), and Honors (4.5) grade point boosts. Explore regional variants like Texas 6.0 systems, UC Capped algorithms, cumulative weighted equations, and exact college admissions recalculation protocols.
        </p>
      </header>

      {/* Main Content Body */}
      <div className="space-y-16 text-base md:text-lg leading-relaxed">

        {/* Section 1: Fundamental Concepts & Historical Context */}
        <section className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 space-y-6 shadow-2xl backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight border-b border-slate-800/80 pb-4">
            1. Unweighted vs. Weighted GPA: Core Architecture & Academic Foundations
          </h2>
          <p className="text-slate-300">
            In North American secondary education, the Grade Point Average (GPA) serves as the primary quantitative summary of a student's high school academic performance. However, comparing student achievement across different course loads presents a fundamental mathematical dilemma: Is an "A" earned in an introductory, general-level elective equivalent to an "A" earned in a rigorous, college-level Advanced Placement (AP) course?
          </p>
          <p className="text-slate-300">
            To address this issue, educational systems utilize two distinct calculation frameworks: the <strong>Unweighted Grade Point Average Scale</strong> and the <strong>Weighted Grade Point Average Scale</strong>.
          </p>
          <p className="text-slate-300">
            The <strong>Unweighted GPA Scale</strong> evaluates academic performance on a standard 0.0 to 4.0 scale regardless of course difficulty or academic rigor. Under this system, earning a 93% in standard Physical Education awards the exact same 4.0 quality points as earning a 93% in Advanced Placement Multivariable Calculus. While this framework provides an absolute measurement of grade consistency, it fails to incentivize students to challenge themselves with advanced coursework, creating an artificial incentive to take easier classes to protect a perfect 4.0 index.
          </p>
          <p className="text-slate-300">
            To encourage academic rigor, secondary school districts implemented the <strong>Weighted GPA Scale</strong> (commonly scaled to 5.0, 6.0, or 7.0 depending on the district). Weighted scales assign additional numerical weight—often referred to as "quality point boosts"—to accelerated, Honors, Advanced Placement (AP), International Baccalaureate (IB), and Dual Enrollment courses. Under a standard 5.0 weighted scale, taking an AP class and earning a "B" yields 4.0 quality points, which equals the numerical value of earning an "A" in a regular course.
          </p>
        </section>

        {/* Section 2: Master Weighting Matrix */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            2. Master Course Weighting Quality Point Matrix
          </h2>
          <p className="text-slate-300">
            The reference matrix below breaks down standard numerical percentage ranges, letter grades, unweighted quality points, and weighted values across Honors (4.5 scale) and Advanced Placement/IB (5.0 scale) systems:
          </p>

          <div className="overflow-x-auto my-8 border border-slate-800 rounded-2xl shadow-xl bg-slate-950/80">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800 font-semibold">
                  <th className="p-4 border-r border-slate-800">Letter Grade</th>
                  <th className="p-4 border-r border-slate-800 text-cyan-400">Percentage Range</th>
                  <th className="p-4 border-r border-slate-800 text-slate-400">Standard / Regular (4.0 Max)</th>
                  <th className="p-4 border-r border-slate-800 text-yellow-400">Honors / Gifted (4.5 Max)</th>
                  <th className="p-4 text-emerald-400">AP / IB HL / Dual Enrollment (5.0 Max)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-emerald-400 border-r border-slate-800">A+ (97–100%)</td>
                  <td className="p-4 border-r border-slate-800">97.0% – 100.0%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">4.00</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">4.50 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">5.00 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-emerald-400 border-r border-slate-800">A (93–96%)</td>
                  <td className="p-4 border-r border-slate-800">93.0% – 96.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">4.00</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">4.50 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">5.00 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-emerald-400 border-r border-slate-800">A- (90–92%)</td>
                  <td className="p-4 border-r border-slate-800">90.0% – 92.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">3.70</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">4.20 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">4.70 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-cyan-400 border-r border-slate-800">B+ (87–89%)</td>
                  <td className="p-4 border-r border-slate-800">87.0% – 89.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">3.30</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">3.80 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">4.30 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-cyan-400 border-r border-slate-800">B (83–86%)</td>
                  <td className="p-4 border-r border-slate-800">83.0% – 86.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">3.00</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">3.50 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">4.00 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-cyan-400 border-r border-slate-800">B- (80–82%)</td>
                  <td className="p-4 border-r border-slate-800">80.0% – 82.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">2.70</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">3.20 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">3.70 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-yellow-400 border-r border-slate-800">C+ (77–79%)</td>
                  <td className="p-4 border-r border-slate-800">77.0% – 79.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">2.30</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">2.80 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">3.30 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-yellow-400 border-r border-slate-800">C (73–76%)</td>
                  <td className="p-4 border-r border-slate-800">73.0% – 76.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">2.00</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">2.50 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">3.00 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-yellow-400 border-r border-slate-800">C- (70–72%)</td>
                  <td className="p-4 border-r border-slate-800">70.0% – 72.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">1.70</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">2.20 (+0.5)</td>
                  <td className="p-4 text-emerald-400 font-bold">2.70 (+1.0)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-orange-400 border-r border-slate-800">D+ (67–69%)</td>
                  <td className="p-4 border-r border-slate-800">67.0% – 69.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">1.30</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">1.30 (No Bonus)</td>
                  <td className="p-4 text-emerald-400 font-bold">1.30 (No Bonus)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-orange-400 border-r border-slate-800">D (63–66%)</td>
                  <td className="p-4 border-r border-slate-800">63.0% – 66.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">1.00</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">1.00 (No Bonus)</td>
                  <td className="p-4 text-emerald-400 font-bold">1.00 (No Bonus)</td>
                </tr>
                <tr className="hover:bg-slate-900/50 transition">
                  <td className="p-4 font-bold text-red-500 border-r border-slate-800">F (Below 60%)</td>
                  <td className="p-4 border-r border-slate-800">0.0% – 59.9%</td>
                  <td className="p-4 border-r border-slate-800 text-slate-400 font-bold">0.00</td>
                  <td className="p-4 border-r border-slate-800 text-yellow-400 font-bold">0.00</td>
                  <td className="p-4 text-emerald-400 font-bold">0.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-6 bg-slate-900/80 border border-yellow-800/40 rounded-2xl text-sm text-slate-300 leading-relaxed">
            <strong className="text-yellow-400">Important Policy Exception:</strong> The majority of public and private high school academic policies stipulate that weighted bonus points (+0.5 or +1.0) are only applied if the student earns a grade of <strong>C- (70%) or higher</strong>. Earning a "D" grade in an AP class yields the unweighted value of 1.0 quality point without bonus credit.
          </div>
        </section>

        {/* Section 3: In-Depth Categorization of Advanced Curricula */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            3. Deep Dive into Academic Course Levels: Regular, Honors, AP, IB & Dual Enrollment
          </h2>
          <p className="text-slate-300">
            To properly configure high school GPA calculations, students must understand the underlying curricular structures and institutional standards behind each class tier:
          </p>

          <div className="grid md:grid-cols-2 gap-8 my-6">
            <div className="p-8 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-bold text-cyan-400 text-xl border-b border-slate-800 pb-2">
                1. Regular / College Prep (CP) Courses
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Standard courses fulfill baseline state high school graduation requirements. These courses cover core concepts at an age-appropriate pace and are graded on a strict unweighted 4.0 scale with no additional quality point modifiers.
              </p>
              <ul className="text-xs font-mono text-slate-300 space-y-1 bg-slate-900 p-3 rounded-lg border border-slate-800">
                <li>• Max Quality Points: 4.00</li>
                <li>• Weighting Bonus: +0.00 Points</li>
                <li>• Exam Audits: Internal District Standard</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-bold text-yellow-400 text-xl border-b border-slate-800 pb-2">
                2. Honors / Accelerated / Pre-AP Classes
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Honors classes move at a faster pace, covering additional depth, independent research, and complex problem-solving. Most school districts award a <strong>+0.5 quality point boost</strong> to recognize this added workload (yielding a 4.5 maximum for an A).
              </p>
              <ul className="text-xs font-mono text-slate-300 space-y-1 bg-slate-900 p-3 rounded-lg border border-slate-800">
                <li>• Max Quality Points: 4.50</li>
                <li>• Weighting Bonus: +0.50 Points</li>
                <li>• Exam Audits: Local School / District Level</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-bold text-emerald-400 text-xl border-b border-slate-800 pb-2">
                3. Advanced Placement (AP) Program
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Standardized, college-level curricula created and audited by the College Board. AP courses culminate in national May examinations (scored 1 to 5). Schools grant a full <strong>+1.0 quality point boost</strong> (yielding a 5.0 maximum for an A).
              </p>
              <ul className="text-xs font-mono text-slate-300 space-y-1 bg-slate-900 p-3 rounded-lg border border-slate-800">
                <li>• Max Quality Points: 5.00</li>
                <li>• Weighting Bonus: +1.00 Points</li>
                <li>• College Credit: Score of 3, 4, or 5 on National Exam</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-950/90 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-bold text-purple-400 text-xl border-b border-slate-800 pb-2">
                4. International Baccalaureate (IB) Diploma
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                An international two-year comprehensive diploma program. IB Higher Level (HL) courses carry full +1.0 AP weighting parity (5.0 max), while Standard Level (SL) courses vary between +0.5 and +1.0 depending on district regulations.
              </p>
              <ul className="text-xs font-mono text-slate-300 space-y-1 bg-slate-900 p-3 rounded-lg border border-slate-800">
                <li>• Max Quality Points: 5.00 (HL) / 4.50-5.00 (SL)</li>
                <li>• Weighting Bonus: +1.00 Points</li>
                <li>• College Credit: Dependent on IB Diploma / HL Exam Scores</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Regional & Alternative Scale Variations */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            4. Regional & State-Specific GPA Scales: Texas 6.0, Georgia, and Percentage Systems
          </h2>
          <p className="text-slate-300">
            While the 5.0 weighted scale is widely used across North America, several large state public school systems utilize alternative weighting systems to calculate class rank and scholarship eligibility:
          </p>

          <div className="space-y-6 my-6">
            <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-bold text-cyan-400 text-xl">The Texas 6.0 Weighted GPA Scale</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Many school districts across Texas (such as Katy ISD, Frisco ISD, and North East ISD) utilize a <strong>6.0 Weighted Scale</strong> to handle competitive class rankings for the state's Automatic Admission Top 6% Rule (UT Austin).
              </p>
              <div className="overflow-x-auto my-4">
                <table className="w-full text-left border-collapse font-mono text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-slate-300 border-b border-slate-800">
                      <th className="p-3">Numerical Score %</th>
                      <th className="p-3 text-cyan-400">AP / IB / Dual Enrollment (6.0 Max)</th>
                      <th className="p-3 text-yellow-400">Pre-AP / Honors (5.5 Max)</th>
                      <th className="p-3 text-slate-400">Regular On-Level (5.0 Max)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-400">
                    <tr>
                      <td className="p-3 font-bold text-white">100%</td>
                      <td className="p-3 text-cyan-400 font-bold">6.00</td>
                      <td className="p-3 text-yellow-400 font-bold">5.50</td>
                      <td className="p-3 text-slate-300 font-bold">5.00</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">95%</td>
                      <td className="p-3 text-cyan-400 font-bold">5.50</td>
                      <td className="p-3 text-yellow-400 font-bold">5.00</td>
                      <td className="p-3 text-slate-300 font-bold">4.50</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold text-white">90%</td>
                      <td className="p-3 text-cyan-400 font-bold">5.00</td>
                      <td className="p-3 text-yellow-400 font-bold">4.50</td>
                      <td className="p-3 text-slate-300 font-bold">4.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-400">
                In a 6.0 system, every single percentage point drop directly reduces quality points earned by 0.10, providing granular distinction for class valedictorian and salutatorian rankings.
              </p>
            </div>

            <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl space-y-4 shadow-xl">
              <h3 className="font-bold text-yellow-400 text-xl">100-Point Weighted Cumulative Percentage Scales</h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Certain districts in New York, New Jersey, and Pennsylvania report GPAs as a direct weighted percentage (e.g., 98.45% or 102.30%). In these systems, instead of converting grades to 4.0 or 5.0 quality points, a multiplier or addition factor is applied directly to final semester numeric grades:
              </p>
              <div className="p-4 bg-slate-900 rounded-xl font-mono text-xs sm:text-sm text-yellow-400 border border-slate-800">
                AP Course Weighted Grade = Raw Percentage Score × 1.10 (or Raw Percentage + 7 Points)
                <br />
                Example: 92% in AP Chemistry × 1.10 = 101.20% Weighted Grade Score
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Step-by-Step Step Mathematical Formulas */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            5. Step-by-Step Mathematical Calculation Protocols
          </h2>
          <p className="text-slate-300">
            Calculating your weighted cumulative GPA requires multiplying each course's earned quality points by its assigned credit value, summing the resulting points, and dividing by total attempted credits.
          </p>

          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl space-y-6 shadow-xl">
            <h3 className="text-xl font-bold text-white">Mathematical Equation</h3>
            
            <div className="p-6 bg-slate-900 rounded-xl font-mono text-center text-emerald-400 border border-slate-800 text-sm sm:text-base">
              Weighted GPA = ∑ (Course Quality Points × Credit Hours) / Total Credit Hours Attempted
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base">
              <h4 className="font-bold text-white text-base">Comprehensive Student Transcript Example:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-mono text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-slate-300 border-b border-slate-800">
                      <th className="p-3">Course Title</th>
                      <th className="p-3">Level</th>
                      <th className="p-3">Credits</th>
                      <th className="p-3">Earned Grade</th>
                      <th className="p-3 text-cyan-400">Unweighted Pts</th>
                      <th className="p-3 text-emerald-400">Weighted Pts</th>
                      <th className="p-3 text-yellow-400">Total Pts Earned</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-400">
                    <tr>
                      <td className="p-3 text-white font-bold">AP Literature</td>
                      <td className="p-3">AP</td>
                      <td className="p-3">1.0</td>
                      <td className="p-3">A (94%)</td>
                      <td className="p-3 text-cyan-400">4.00</td>
                      <td className="p-3 text-emerald-400">5.00</td>
                      <td className="p-3 text-yellow-400 font-bold">5.00</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">AP Calculus BC</td>
                      <td className="p-3">AP</td>
                      <td className="p-3">1.0</td>
                      <td className="p-3">B+ (88%)</td>
                      <td className="p-3 text-cyan-400">3.30</td>
                      <td className="p-3 text-emerald-400">4.30</td>
                      <td className="p-3 text-yellow-400 font-bold">4.30</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">Honors Chemistry</td>
                      <td className="p-3">Honors</td>
                      <td className="p-3">1.0</td>
                      <td className="p-3">A- (91%)</td>
                      <td className="p-3 text-cyan-400">3.70</td>
                      <td className="p-3 text-emerald-400">4.20</td>
                      <td className="p-3 text-yellow-400 font-bold">4.20</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">US History</td>
                      <td className="p-3">Regular</td>
                      <td className="p-3">1.0</td>
                      <td className="p-3">A (95%)</td>
                      <td className="p-3 text-cyan-400">4.00</td>
                      <td className="p-3 text-emerald-400">4.00</td>
                      <td className="p-3 text-yellow-400 font-bold">4.00</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">Spanish III</td>
                      <td className="p-3">Honors</td>
                      <td className="p-3">1.0</td>
                      <td className="p-3">B (85%)</td>
                      <td className="p-3 text-cyan-400">3.00</td>
                      <td className="p-3 text-emerald-400">3.50</td>
                      <td className="p-3 text-yellow-400 font-bold">3.50</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-white font-bold">Varsity Athletics</td>
                      <td className="p-3">Regular</td>
                      <td className="p-3">0.5</td>
                      <td className="p-3">A (98%)</td>
                      <td className="p-3 text-cyan-400">4.00</td>
                      <td className="p-3 text-emerald-400">4.00</td>
                      <td className="p-3 text-yellow-400 font-bold">2.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs sm:text-sm">
                <p className="text-slate-300">
                  • <strong>Total Attempted Credits:</strong> 1.0 + 1.0 + 1.0 + 1.0 + 1.0 + 0.5 = <span className="text-white font-bold">5.5 Credits</span>
                </p>
                <p className="text-slate-300">
                  • <strong>Total Unweighted Quality Points:</strong> (4.0×1) + (3.3×1) + (3.7×1) + (4.0×1) + (3.0×1) + (4.0×0.5) = <span className="text-cyan-400 font-bold">20.0 Points</span>
                </p>
                <p className="text-slate-300">
                  • <strong>Total Weighted Quality Points:</strong> 5.0 + 4.3 + 4.2 + 4.0 + 3.5 + 2.0 = <span className="text-emerald-400 font-bold">23.0 Points</span>
                </p>
                <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row justify-between gap-2">
                  <span className="text-cyan-400 font-bold">Unweighted GPA: 20.0 / 5.5 = 3.636</span>
                  <span className="text-emerald-400 font-bold">Weighted GPA: 23.0 / 5.5 = 4.181</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: University Admissions Recalculation Methods */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            6. How College Admissions Committees Recalculate Transcripts
          </h2>
          <p className="text-slate-300">
            A critical reality for high school applicants is that undergraduate admissions offices rarely rely on the raw weighted GPA calculated by high schools. Because secondary schools use drastically different scales (5.0, 6.0, 7.0, or 100-point systems), admissions officers recalculate transcripts using standardized internal formulas:
          </p>

          <div className="space-y-6 my-6">
            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <h3 className="font-bold text-cyan-400 text-lg">1. Conversion to Standard Unweighted 4.0 Core GPA</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Selective institutions (such as Ivy League universities and top private research centers) convert every applicant's transcript back to a standard unweighted 4.0 scale. During this process, non-academic courses (PE, Health, Driver's Ed, Band) are completely removed from the calculation. They compute a pure core academic GPA across English, Mathematics, Natural Sciences, Social Sciences, and Foreign Languages.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <h3 className="font-bold text-yellow-400 text-lg">2. The University of California (UC) Capped Weighted System</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                The University of California system (UC Berkeley, UCLA, UC San Diego, etc.) calculates three separate GPAs for every applicant: Unweighted GPA, Fully Weighted GPA, and <strong>UC Capped Weighted GPA</strong>. The Capped Weighted GPA adds +1.0 weighting points for AP, IB, or UC-approved honors courses taken in 10th and 11th grades, but <strong>caps the maximum bonus at 8 semester units (4 full-year courses)</strong>.
              </p>
            </div>

            <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-3">
              <h3 className="font-bold text-emerald-400 text-lg">3. Evaluating Course Rigor via the School Profile Document</h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Rather than relying solely on numbers, admissions officers evaluate GPAs in the context of your official <strong>High School Profile</strong>. This document lists every AP/IB course available at your school. Earning a 3.9 unweighted GPA at a school that offers 25 AP courses while taking only 1 AP class is evaluated differently than earning a 3.9 at a rural school that offers only 2 AP courses total.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Internal Calculator Engine Links */}
        <section className="my-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/50 border border-slate-800 shadow-2xl space-y-4">
          <h3 className="text-2xl font-bold text-white">Calculate Your Exact High School & College GPA Instantly</h3>
          <p className="text-slate-400 text-base max-w-2xl">
            Input your AP, Honors, and Regular course grades into our free academic calculators to compute your weighted, unweighted, and college cumulative GPA metrics.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/high-school-gpa-calculator" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-base transition shadow-lg">
              High School Weighted GPA Tool 🎒
            </Link>
            <Link href="/gpa-calculator" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-base transition border border-slate-700">
              College GPA Calculator 🎓
            </Link>
            <Link href="/grade-calculator" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-base transition border border-slate-700">
              Weighted Grade Calculator 📊
            </Link>
          </div>
        </section>

        {/* Section 8: Exhaustive FAQ Section */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-slate-800 pb-4">
            8. Frequently Asked Questions (AP & Honors Weighting FAQ)
          </h2>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Is it better to get a 'B' in an AP class or an 'A' in a Regular class?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Admissions officers famously answer this question with: "It is best to get an 'A' in an AP class." However, when forced to choose, selective university admissions committees almost universally prefer a 'B' in an Advanced Placement (AP) or IB course. A 'B' in an AP class demonstrates academic ambition and willingness to challenge yourself with college-level work, whereas an 'A' in a regular class indicates you stayed within your comfort zone.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">What is the highest possible weighted GPA you can achieve?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Assuming a high school uses a standard 5.0 weighted scale for AP/IB courses and a student earns straight 'A's (5.0) in every single course taken across 4 years with no unweighted electives, the theoretical maximum weighted GPA is <strong>5.00</strong>. Realistically, taking required unweighted classes (PE, Health, Fine Arts) caps most valedictorian GPAs around 4.60 - 4.85.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Do college admissions officers prefer AP or IB courses?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Colleges view Advanced Placement (AP) and International Baccalaureate (IB) courses with equal high prestige. AP allows students flexibility to pick individual subject strengths, whereas IB offers an integrated holistic diploma track. Admissions officers evaluate you based on taking the most rigorous options available at your specific high school.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Does Dual Enrollment boost GPA as much as AP classes?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Yes, in almost all US school districts, Dual Enrollment (taking real college courses at a local community college or university while in high school) receives the maximum +1.0 weighting bonus on a 5.0 scale, matching AP and IB HL parity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h3 className="font-bold text-white text-lg">Do high school freshman year grades count toward cumulative GPA?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Yes, overall high school cumulative GPAs calculated by your school district include freshman year grades. However, certain college systems (such as the University of California system and Stanford University) exclude 9th-grade marks from their proprietary admission GPA calculations, focusing heavily on 10th and 11th-grade performance trends.
              </p>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}