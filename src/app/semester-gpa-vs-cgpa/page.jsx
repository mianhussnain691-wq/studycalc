import Link from "next/link";

export const metadata = {
  title: "Semester GPA vs CGPA: Complete Calculation & Recovery Guide",
  description:
    "Understand the difference between Semester GPA and Cumulative GPA (CGPA), the exact credit-weighted formulas, a full 3-semester worked example, credit inertia, grade forgiveness, and academic probation thresholds.",
  keywords: [
    "semester gpa vs cgpa",
    "sgpa vs cgpa difference",
    "how to convert sgpa to cgpa",
    "cumulative gpa formula",
    "does semester gpa affect cumulative gpa",
    "how to raise low cumulative gpa",
    "credit weighted cumulative gpa example",
    "college academic probation gpa threshold",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/semester-gpa-vs-cgpa",
  },
  openGraph: {
    title: "Semester GPA vs CGPA: Complete Calculation & Recovery Guide",
    description:
      "The exact formulas, a full 3-semester worked example, and recovery strategies for semester GPA vs cumulative GPA.",
    url: "https://www.studycalc.co/semester-gpa-vs-cgpa",
    siteName: "StudyCalc",
    type: "article",
  },
};

const faqs = [
  {
    q: "Do graduate schools look at Cumulative GPA or Semester GPA trends?",
    a: "Both. Your overall Cumulative GPA is usually the initial screening threshold, but admissions committees, especially for medical, law, and MBA programs, also pay close attention to your upward grade trend across your final 60 credit hours.",
  },
  {
    q: "Can transfer credits alter my university's Cumulative GPA?",
    a: "At most universities, transfer credits count toward degree completion, but the letter grades you earned elsewhere are not folded into your new institution's Cumulative GPA calculation.",
  },
  {
    q: "How does a Withdrawal (W) affect Semester vs Cumulative GPA?",
    a: "A standard 'W' (withdrawn before the deadline) carries zero quality points and is excluded from both. A late withdrawal can become a 'WF' (Withdrawn Failing), which counts as an F (0.0) on both your semester and cumulative GPA.",
  },
  {
    q: "How many credit hours does it take to recover from a bad semester?",
    a: "It depends on your accumulated credit inertia. A rough semester early on, say freshman year, can often be offset by around 30 credit hours of strong grades. The same recovery later in your degree takes more credits, since each new term carries proportionally less weight.",
  },
  {
    q: "Does Pass/Fail grading affect Cumulative GPA?",
    a: "A passing grade under Pass/Fail earns credit toward graduation but is excluded from GPA calculations entirely. At some schools, a Fail under a Pass/Fail option still counts as 0.0 quality points, which would lower your GPA.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function SemesterVsCGPAGuide() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-8">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            Academic Standing & Credit Mechanics
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Semester GPA vs. CGPA: Complete Calculation & Recovery Guide
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
            Confused by the difference between your single-term grades and your overall academic record? This guide covers the exact credit-weighted formulas, a full multi-semester worked example, academic probation thresholds, and realistic recovery strategies.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">

          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-2">1. Semester GPA and CGPA, in Plain Terms</h2>
            <p>
              Your transcript tracks two numbers: your <strong>Semester GPA</strong> (sometimes called Term GPA), and your <strong>Cumulative GPA</strong> (CGPA, also called Overall GPA). Both are expressed on the same scale, usually 4.0, but they measure fundamentally different things.
            </p>
            <p>
              Semester GPA is an isolated snapshot of a single term, typically 15-18 weeks. It resets to zero at the start of every new semester. CGPA, on the other hand, never resets — it's a running, credit-weighted average of every quality point and credit hour you've completed since your first semester.
            </p>
            <p>
              A single bad semester can drag down a previously strong CGPA, and a student with a low CGPA may need several near-perfect semesters to pull their overall standing back above a graduation or scholarship threshold. This guide walks through the exact math behind both, plus what actually happens to your CGPA when you retake a course or withdraw from one.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              2. Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Feature</th>
                    <th className="p-3 border-r border-slate-800">Semester (Term) GPA</th>
                    <th className="p-3">Cumulative GPA (CGPA)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Time scope</td>
                    <td className="p-3 border-r border-slate-800">Single semester (15-18 weeks)</td>
                    <td className="p-3 text-emerald-400 font-semibold">Entire academic career to date</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Resets each term?</td>
                    <td className="p-3 border-r border-slate-800">Yes</td>
                    <td className="p-3">No — accumulates continuously</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Volatility</td>
                    <td className="p-3 border-r border-slate-800 text-yellow-400">High — few credits, big swings</td>
                    <td className="p-3 text-cyan-400">Low, and decreases further over time</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Primary use</td>
                    <td className="p-3 border-r border-slate-800">Dean's List, term probation checks</td>
                    <td className="p-3 text-emerald-400 font-semibold">Graduation, Cum Laude, grad school, financial aid</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              3. Letter Grade to Quality Point Reference
            </h2>
            <p>Every GPA calculation starts by converting a letter grade into a numeric quality point value:</p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Letter Grade</th>
                    <th className="p-3 border-r border-slate-800">Percentage</th>
                    <th className="p-3">4.0 Scale Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50 font-mono">
                  <tr><td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A+ / A</td><td className="p-3 border-r border-slate-800">93% – 100%</td><td className="p-3 text-cyan-400">4.00</td></tr>
                  <tr><td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A-</td><td className="p-3 border-r border-slate-800">90% – 92%</td><td className="p-3 text-cyan-400">3.70</td></tr>
                  <tr><td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B+</td><td className="p-3 border-r border-slate-800">87% – 89%</td><td className="p-3 text-cyan-400">3.30</td></tr>
                  <tr><td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B</td><td className="p-3 border-r border-slate-800">83% – 86%</td><td className="p-3 text-cyan-400">3.00</td></tr>
                  <tr><td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B-</td><td className="p-3 border-r border-slate-800">80% – 82%</td><td className="p-3 text-cyan-400">2.70</td></tr>
                  <tr><td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C+</td><td className="p-3 border-r border-slate-800">77% – 79%</td><td className="p-3 text-cyan-400">2.30</td></tr>
                  <tr><td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C</td><td className="p-3 border-r border-slate-800">73% – 76%</td><td className="p-3 text-cyan-400">2.00</td></tr>
                  <tr><td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C-</td><td className="p-3 border-r border-slate-800">70% – 72%</td><td className="p-3 text-cyan-400">1.70</td></tr>
                  <tr><td className="p-3 font-bold text-orange-400 border-r border-slate-800">D</td><td className="p-3 border-r border-slate-800">60% – 69%</td><td className="p-3 text-cyan-400">1.00</td></tr>
                  <tr><td className="p-3 font-bold text-red-500 border-r border-slate-800">F</td><td className="p-3 border-r border-slate-800">Below 60%</td><td className="p-3 text-cyan-400">0.00</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              4. The Formulas
            </h2>
            <p>
              Neither GPA is a simple average of letter grades — both are <strong>credit-weighted</strong>, since a 4-credit course should count more than a 1-credit one.
            </p>
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-cyan-400">Semester GPA</h3>
              <p className="text-sm font-mono text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
                Semester GPA = Total Quality Points This Term ÷ Total Credit Hours This Term
              </p>
              <h3 className="text-lg font-bold text-emerald-400 pt-2">Cumulative GPA</h3>
              <p className="text-sm font-mono text-slate-300 bg-slate-900 p-3 rounded-lg border border-slate-800">
                CGPA = Total Quality Points, All Terms ÷ Total Credit Hours, All Terms
              </p>
              <blockquote className="border-l-4 border-yellow-500 pl-4 py-1 text-sm text-yellow-300/90 my-2">
                <strong>Common mistake:</strong> never average your semester GPAs directly. Averaging a 3.80 (12 credits) with a 2.00 (18 credits) as (3.80 + 2.00) ÷ 2 gives the wrong answer — the credit loads differ, so each term needs to be weighted properly.
              </blockquote>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              5. A Full 3-Semester Worked Example
            </h2>
            <p>Here's how these numbers actually move over time for a real student:</p>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-cyan-400">Semester 1 (15 credits)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
                <li>Calculus I (4 cr): B (3.0) → 12.0 pts</li>
                <li>General Chemistry (4 cr): A- (3.7) → 14.8 pts</li>
                <li>English Composition (3 cr): A (4.0) → 12.0 pts</li>
                <li>Psychology 101 (3 cr): B+ (3.3) → 9.9 pts</li>
                <li>Orientation (1 cr): A (4.0) → 4.0 pts</li>
              </ul>
              <div className="p-4 bg-slate-900 rounded-lg border border-cyan-900/40 text-sm font-mono">
                <p>Total: 52.7 points ÷ 15 credits</p>
                <p className="mt-2 text-cyan-400 font-bold font-sans text-base border-t border-slate-800 pt-2">
                  Semester 1 GPA = 3.51 | CGPA = 3.51
                </p>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-red-400">Semester 2 (16 credits, a rough term)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
                <li>Calculus II (4 cr): C (2.0) → 8.0 pts</li>
                <li>Organic Chemistry I (4 cr): D (1.0) → 4.0 pts</li>
                <li>Physics I (4 cr): C+ (2.3) → 9.2 pts</li>
                <li>Microeconomics (3 cr): B (3.0) → 9.0 pts</li>
                <li>PE (1 cr): A (4.0) → 4.0 pts</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
                <div className="p-4 bg-slate-900 rounded-lg border border-red-900/40">
                  <p className="text-red-400 font-bold text-base mb-1 font-sans">Semester 2 GPA</p>
                  <p>34.2 pts ÷ 16 credits</p>
                  <p className="mt-2 text-red-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 2.14</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border border-yellow-900/40">
                  <p className="text-yellow-400 font-bold text-base mb-1 font-sans">Updated CGPA</p>
                  <p>86.9 pts ÷ 31 credits</p>
                  <p className="mt-2 text-yellow-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 2.80</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-emerald-400">Semester 3 (14 credits, recovery term)</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
                <li>Retake Organic Chemistry I (4 cr): A (4.0) → 16.0 pts</li>
                <li>Statistics (3 cr): A (4.0) → 12.0 pts</li>
                <li>Macroeconomics (3 cr): A- (3.7) → 11.1 pts</li>
                <li>World History (4 cr): B+ (3.3) → 13.2 pts</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
                <div className="p-4 bg-slate-900 rounded-lg border border-emerald-900/40">
                  <p className="text-emerald-400 font-bold text-base mb-1 font-sans">Semester 3 GPA</p>
                  <p>52.3 pts ÷ 14 credits</p>
                  <p className="mt-2 text-emerald-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 3.74</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border border-emerald-900/40">
                  <p className="text-emerald-400 font-bold text-base mb-1 font-sans">Updated CGPA</p>
                  <p>139.2 pts ÷ 45 credits</p>
                  <p className="mt-2 text-emerald-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 3.09</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Notice that a 3.74 recovery semester only pulled the CGPA from 2.80 to 3.09 — not back to 3.51. This is exactly the "credit inertia" effect covered next.
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              6. Credit Inertia and Grade Forgiveness
            </h2>
            <p>
              <strong>Credit inertia</strong> is the reason a strong semester matters more early in your degree than late in it — the more total credits you've completed, the smaller a fraction any single new semester represents.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-4 text-sm">
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <h4 className="font-bold text-cyan-400 mb-2">Freshman year (low inertia)</h4>
                <p className="text-slate-400">With only 15 completed credits, a 4.0 semester can pull a 2.50 CGPA up to roughly 3.25.</p>
              </div>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                <h4 className="font-bold text-yellow-400 mb-2">Senior year (high inertia)</h4>
                <p className="text-slate-400">With 105 completed credits, that same 4.0 semester only pulls a 2.50 CGPA up to roughly 2.68.</p>
              </div>
            </div>
            <p>
              Many schools also offer <strong>grade forgiveness</strong> for retaken courses. With grade replacement, the old grade stays visible on your transcript but its quality points are removed from your CGPA calculation entirely. Without it, both attempts count, meaning a retake can still help your GPA but won't fully erase the original hit.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              7. Probation, Dean's List, and Honors Thresholds
            </h2>
            <div className="space-y-4">
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-emerald-400 text-base mb-1">Dean's List</h3>
                <p className="text-sm text-slate-400">Based on Semester GPA alone — typically 3.50-3.75+ while enrolled in at least 12 graded credit hours.</p>
              </div>
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-yellow-400 text-base mb-1">Academic Probation</h3>
                <p className="text-sm text-slate-400">Usually triggered when CGPA drops below 2.00. Most schools give 1-2 probationary semesters to recover before suspension.</p>
              </div>
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-cyan-400 text-base mb-1">Latin Honors (Cum Laude)</h3>
                <p className="text-sm text-slate-400">Based on final CGPA: Cum Laude (3.50-3.69), Magna Cum Laude (3.70-3.89), Summa Cum Laude (3.90-4.00).</p>
              </div>
            </div>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Calculate Your Own Semester & Cumulative GPA</h3>
            <p className="text-slate-400 text-sm mb-4">
              Skip the manual credit-weighting math — enter your grades and credits and get both numbers instantly.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                Semester GPA Calculator
              </Link>
              <Link href="/cgpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                CGPA Calculator
              </Link>
              <Link href="/weighted-gpa-vs-unweighted-gpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                Weighted vs Unweighted GPA
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              8. Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-bold text-white text-base">{faq.q}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}