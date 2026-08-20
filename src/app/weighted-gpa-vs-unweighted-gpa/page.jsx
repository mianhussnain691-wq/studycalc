import Link from "next/link";

export const metadata = {
  title: "Weighted vs Unweighted GPA: AP, IB & Honors Calculation Guide",
  description:
    "The complete breakdown of weighted (5.0) vs unweighted (4.0) high school GPA. How AP, IB, Honors, and Dual Enrollment classes affect your transcript, class rank, and college admissions.",
  keywords: [
    "weighted vs unweighted gpa",
    "how to calculate weighted gpa",
    "difference between 4.0 and 5.0 gpa scale",
    "do colleges look at weighted or unweighted gpa",
    "ap ib honors gpa calculation formula",
    "convert 5.0 weighted gpa to 4.0 unweighted",
    "is 4.2 weighted gpa good",
    "class rank weighted gpa impact",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/weighted-gpa-vs-unweighted-gpa",
  },
  openGraph: {
    title: "Weighted vs Unweighted GPA: AP, IB & Honors Calculation Guide",
    description:
      "How AP, IB, Honors, and Dual Enrollment classes affect your weighted vs unweighted GPA, with full worked examples.",
    url: "https://www.studycalc.co/weighted-gpa-vs-unweighted-gpa",
    siteName: "StudyCalc",
    type: "article",
  },
};

const faqs = [
  {
    q: "Is a 3.8 unweighted GPA better than a 4.2 weighted GPA?",
    a: "Both indicate strong performance and aren't directly comparable as a single ranking. Admissions officers look at the unweighted number to confirm subject mastery, and the weighted number to confirm you sought out challenging AP, IB, or Honors coursework.",
  },
  {
    q: "Is it better to get a B in an AP class or an A in a regular class?",
    a: "The best outcome is an A in the AP class. But if forced to choose, most selective admissions offices lean toward the B in AP — it demonstrates willingness to engage with college-level rigor, which is a stronger predictor of college success than a perfect grade in an easier course.",
  },
  {
    q: "Can an unweighted GPA ever exceed 4.00?",
    a: "No, not on a standard 4.0 scale — an A or A+ caps at 4.0 quality points there. If a transcript shows something above 4.00, that number is coming from a weighted or otherwise non-standard scale.",
  },
  {
    q: "Do Dual Enrollment college courses get the same weight boost as AP?",
    a: "At most high schools, yes. Dual Enrollment courses typically receive the full +1.0 weighted point bump, the same as AP and IB, since they represent actual college-level coursework completed through an accredited institution.",
  },
  {
    q: "What happens if my high school doesn't offer AP or Honors classes?",
    a: "You won't be penalized for it. Admissions committees evaluate your transcript in the context of your specific school's course offerings, not against a national average — they're looking for whether you maximized what was actually available to you.",
  },
  {
    q: "How does class rank work when two students have the same unweighted GPA?",
    a: "At schools that rank by weighted GPA, a tie in unweighted GPA is broken by weighted score — the student who took more AP, IB, or Honors courses ends up with the higher weighted number and the higher class rank.",
  },
  {
    q: "What's considered a strong weighted GPA for competitive colleges?",
    a: "For highly selective schools, competitive applicants typically present a weighted GPA in the 4.20-4.70+ range, reflecting mostly A grades across a genuinely demanding AP/IB/Dual Enrollment course load.",
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

export default function WeightedVsUnweightedGPAGuide() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto max-w-5xl px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left border-b border-slate-800 pb-8">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            High School Grading & College Prep
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Weighted vs. Unweighted GPA: AP, IB & Honors Calculation Guide
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed">
            How AP, IB, Dual Enrollment, and Honors classes actually change your high school transcript — the exact math behind unweighted 4.0 and weighted 5.0 scales, how colleges recalculate your GPA, and real worked case studies.
          </p>
        </header>

        <div className="space-y-12 text-base leading-relaxed">

          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-2">1. Two Numbers, One Transcript</h2>
            <p>
              Most high school transcripts show two different GPAs side by side: an <strong>Unweighted GPA</strong> and a <strong>Weighted GPA</strong>. An unweighted GPA treats every class identically regardless of difficulty — an A in gym and an A in AP Physics C are both worth exactly 4.0. A weighted GPA adds an academic-rigor bonus, usually pushing the scale up to 5.0, so that harder classes like Honors, AP, IB, or Dual Enrollment are rewarded with extra quality points, typically +0.5 for Honors and +1.0 for AP/IB/Dual Enrollment.
            </p>
            <p>
              This distinction matters for course selection, class rank, scholarship applications, and how colleges actually read your transcript. This guide covers the exact conversion math, walks through three full worked case studies, and explains how selective universities recalculate your GPA behind the scenes.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              2. Side-by-Side Comparison
            </h2>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Feature</th>
                    <th className="p-3 border-r border-slate-800">Unweighted GPA</th>
                    <th className="p-3">Weighted GPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Maximum ceiling</td>
                    <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold">4.00</td>
                    <td className="p-3 text-emerald-400 font-bold">5.00 typically (varies by school)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Course difficulty factored in?</td>
                    <td className="p-3 border-r border-slate-800 text-red-400">No — every class is equal</td>
                    <td className="p-3 text-emerald-400 font-semibold">Yes — +0.5 Honors, +1.0 AP/IB/Dual</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">'A' grade value</td>
                    <td className="p-3 border-r border-slate-800 font-mono">4.00</td>
                    <td className="p-3 font-mono text-emerald-400 font-bold">4.50 (Honors) / 5.00 (AP/IB)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Used for</td>
                    <td className="p-3 border-r border-slate-800">Baseline recalculation by colleges</td>
                    <td className="p-3 text-emerald-400 font-semibold">Class rank, Valedictorian selection</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              3. Grade Conversion Across Tiers
            </h2>
            <p>
              How a letter grade converts to quality points depends on whether the course was Regular, Honors, or AP/IB/Dual Enrollment:
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Letter</th>
                    <th className="p-3 border-r border-slate-800">Percentage</th>
                    <th className="p-3 border-r border-slate-800">Regular</th>
                    <th className="p-3 border-r border-slate-800 text-yellow-400">Honors (+0.5)</th>
                    <th className="p-3 text-emerald-400">AP/IB/Dual (+1.0)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50 font-mono">
                  <tr><td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A+ / A</td><td className="p-3 border-r border-slate-800">93% – 100%</td><td className="p-3 border-r border-slate-800 text-cyan-400">4.00</td><td className="p-3 border-r border-slate-800 text-yellow-400">4.50</td><td className="p-3 text-emerald-400 font-bold">5.00</td></tr>
                  <tr><td className="p-3 font-bold text-emerald-400 border-r border-slate-800">A-</td><td className="p-3 border-r border-slate-800">90% – 92%</td><td className="p-3 border-r border-slate-800 text-cyan-400">3.70</td><td className="p-3 border-r border-slate-800 text-yellow-400">4.20</td><td className="p-3 text-emerald-400 font-bold">4.70</td></tr>
                  <tr><td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B+</td><td className="p-3 border-r border-slate-800">87% – 89%</td><td className="p-3 border-r border-slate-800 text-cyan-400">3.30</td><td className="p-3 border-r border-slate-800 text-yellow-400">3.80</td><td className="p-3 text-emerald-400 font-bold">4.30</td></tr>
                  <tr><td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B</td><td className="p-3 border-r border-slate-800">83% – 86%</td><td className="p-3 border-r border-slate-800 text-cyan-400">3.00</td><td className="p-3 border-r border-slate-800 text-yellow-400">3.50</td><td className="p-3 text-emerald-400 font-bold">4.00</td></tr>
                  <tr><td className="p-3 font-bold text-cyan-400 border-r border-slate-800">B-</td><td className="p-3 border-r border-slate-800">80% – 82%</td><td className="p-3 border-r border-slate-800 text-cyan-400">2.70</td><td className="p-3 border-r border-slate-800 text-yellow-400">3.20</td><td className="p-3 text-emerald-400 font-bold">3.70</td></tr>
                  <tr><td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C+</td><td className="p-3 border-r border-slate-800">77% – 79%</td><td className="p-3 border-r border-slate-800 text-cyan-400">2.30</td><td className="p-3 border-r border-slate-800 text-yellow-400">2.80</td><td className="p-3 text-emerald-400 font-bold">3.30</td></tr>
                  <tr><td className="p-3 font-bold text-yellow-400 border-r border-slate-800">C</td><td className="p-3 border-r border-slate-800">73% – 76%</td><td className="p-3 border-r border-slate-800 text-cyan-400">2.00</td><td className="p-3 border-r border-slate-800 text-yellow-400">2.50</td><td className="p-3 text-emerald-400 font-bold">3.00</td></tr>
                  <tr><td className="p-3 font-bold text-orange-400 border-r border-slate-800">D</td><td className="p-3 border-r border-slate-800">60% – 69%</td><td className="p-3 border-r border-slate-800 text-cyan-400">1.00</td><td className="p-3 border-r border-slate-800 text-yellow-400">1.00 (no boost)</td><td className="p-3 text-emerald-400 font-bold">1.00 (no boost)</td></tr>
                  <tr><td className="p-3 font-bold text-red-500 border-r border-slate-800">F</td><td className="p-3 border-r border-slate-800">Below 60%</td><td className="p-3 border-r border-slate-800 text-cyan-400">0.00</td><td className="p-3 border-r border-slate-800 text-yellow-400">0.00</td><td className="p-3 text-emerald-400 font-bold">0.00</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 italic">
              Most districts don't award weighted bonus points for D or F grades, even in AP/Honors classes — the boost is meant to reward mastery of harder material, not just enrollment in it.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              4. Three Worked Case Studies
            </h2>
            <p>These three students took the same 5-6 course load but at different rigor levels — here's exactly how that changes both GPAs.</p>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-cyan-400">Case Study A: High-Rigor Schedule</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
                <li>AP Calculus BC: A (4.0 / 5.0)</li>
                <li>AP Physics C: B+ (3.3 / 4.3)</li>
                <li>Honors English Lit: A- (3.7 / 4.2)</li>
                <li>AP US History: A (4.0 / 5.0)</li>
                <li>Honors Spanish IV: B (3.0 / 3.5)</li>
                <li>Regular PE (0.5 credit): A (4.0 / 4.0)</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
                <div className="p-4 bg-slate-900 rounded-lg border border-cyan-900/40">
                  <p className="text-cyan-400 font-bold text-base mb-1 font-sans">Unweighted</p>
                  <p>20.0 pts ÷ 5.5 credits</p>
                  <p className="mt-2 text-white font-bold font-sans text-base border-t border-slate-800 pt-2">= 3.64</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border border-emerald-900/40">
                  <p className="text-emerald-400 font-bold text-base mb-1 font-sans">Weighted</p>
                  <p>24.0 pts ÷ 5.5 credits</p>
                  <p className="mt-2 text-emerald-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 4.36</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-yellow-400">Case Study B: Standard Schedule, All A's</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
                <li>5 regular classes + PE, all grade A</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
                <div className="p-4 bg-slate-900 rounded-lg border border-cyan-900/40">
                  <p className="text-cyan-400 font-bold text-base mb-1 font-sans">Unweighted</p>
                  <p>22.0 pts ÷ 5.5 credits</p>
                  <p className="mt-2 text-white font-bold font-sans text-base border-t border-slate-800 pt-2">= 4.00</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border border-yellow-900/40">
                  <p className="text-yellow-400 font-bold text-base mb-1 font-sans">Weighted</p>
                  <p>22.0 pts ÷ 5.5 credits (no boost)</p>
                  <p className="mt-2 text-yellow-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 4.00</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold text-purple-400">Case Study C: Mixed Dual Enrollment</h3>
              <ul className="list-disc pl-6 space-y-1 text-sm text-slate-300">
                <li>Dual Enrollment Composition: A (4.0 / 5.0)</li>
                <li>Dual Enrollment Calculus I: B (3.0 / 4.0)</li>
                <li>Honors Chemistry: A- (3.7 / 4.2)</li>
                <li>Regular Government: A (4.0 / 4.0)</li>
                <li>Regular Art: A (4.0 / 4.0)</li>
              </ul>
              <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm font-mono">
                <div className="p-4 bg-slate-900 rounded-lg border border-cyan-900/40">
                  <p className="text-cyan-400 font-bold text-base mb-1 font-sans">Unweighted</p>
                  <p>18.7 pts ÷ 5 credits</p>
                  <p className="mt-2 text-white font-bold font-sans text-base border-t border-slate-800 pt-2">= 3.74</p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border border-purple-900/40">
                  <p className="text-purple-400 font-bold text-base mb-1 font-sans">Weighted</p>
                  <p>21.2 pts ÷ 5 credits</p>
                  <p className="mt-2 text-purple-400 font-bold font-sans text-base border-t border-slate-800 pt-2">= 4.24</p>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-300">
              Notice the paradox: Student B has the highest <em>unweighted</em> GPA (4.00), but Student A has the highest <em>weighted</em> GPA (4.36) because of course rigor. Student C lands in between by mixing Dual Enrollment with a strong baseline.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              5. How Colleges Actually Recalculate Your GPA
            </h2>
            <p>
              Because weighting policies vary wildly by district — some cap at 5.0, some at 6.0, some don't weight at all — selective universities don't trust the raw weighted number on your transcript. Instead, they run their own recalculation:
            </p>
            <div className="space-y-4">
              <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-cyan-400 text-base mb-1">Step 1: Strip non-core electives</h3>
                <p className="text-sm text-slate-400">PE, Health, Driver's Ed, and similar non-academic classes are usually excluded, leaving only core subjects: English, Math, Science, Social Studies, and Foreign Language.</p>
              </div>
              <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-yellow-400 text-base mb-1">Step 2: Recalculate to an unweighted baseline</h3>
                <p className="text-sm text-slate-400">Every applicant is put back on a standard 4.0 scale so students from different schools and different weighting policies can be compared fairly.</p>
              </div>
              <div className="p-5 bg-slate-900 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-emerald-400 text-base mb-1">Step 3: Evaluate rigor separately</h3>
                <p className="text-sm text-slate-400">Your school's official profile tells admissions how many AP/IB/Dual Enrollment courses were even available to you, and they judge how many of those you actually took relative to that ceiling — not against some national average.</p>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              6. Building a Smart Course Schedule
            </h2>
            <div className="space-y-4">
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-cyan-400 mb-1">Don't chase weight in a weak subject</h3>
                <p className="text-sm">A C in AP Calculus (3.0 weighted) does less for you than an A in Honors Pre-Calc (4.5 weighted) — and it damages your unweighted GPA at the same time.</p>
              </div>
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-cyan-400 mb-1">Dual Enrollment is efficient</h3>
                <p className="text-sm">It usually earns the full weighted boost and gives you real, transferable college credit at the same time.</p>
              </div>
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-cyan-400 mb-1">Check your school's class rank policy</h3>
                <p className="text-sm">Some schools cap how many weighted courses count toward rank — worth confirming with your counselor before overloading your schedule.</p>
              </div>
              <div className="p-5 bg-slate-900/70 border border-slate-800 rounded-xl">
                <h3 className="font-bold text-cyan-400 mb-1">Stay balanced across subjects</h3>
                <p className="text-sm">Admissions committees generally value well-rounded rigor across Math, Science, Humanities, and Language over stacking every AP in a single subject.</p>
              </div>
            </div>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Calculate Your Weighted & Unweighted GPA</h3>
            <p className="text-slate-400 text-sm mb-4">
              Enter your courses and grades and get both numbers instantly, no manual math required.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                GPA Calculator
              </Link>
              <Link href="/grade-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                Weighted Grade Calculator
              </Link>
              <Link href="/semester-gpa-vs-cgpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                Semester GPA vs CGPA
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              7. Frequently Asked Questions
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