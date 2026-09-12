import Link from "next/link";

export const metadata = {
  title: "What GPA Do You Need for Medical School? (2026 MD & DO Data)",
  alternates: { canonical: "https://www.studycalc.co/what-gpa-do-you-need-for-medical-school" },
  openGraph: {
    title: "What GPA Do You Need for Medical School? (2026 MD & DO Data)",
    description: "The real average GPA for MD and DO matriculants, straight from AAMC data — plus a free AMCAS calculator to check your own Overall and BCPM GPA.",
    url: "https://www.studycalc.co/what-gpa-do-you-need-for-medical-school",
    siteName: "StudyCalc",
    type: "article",
  },
  keywords: [
    "what gpa do you need for medical school",
    "medical school gpa requirements",
    "bcpm gpa medical school",
    "md vs do gpa",
    "average gpa medical school acceptance",
    "minimum gpa for med school",
  ],
};

const faqs = [
  {
    q: "Can I get into medical school with a 3.4 GPA?",
    a: "Yes, though it puts you below the average for both MD (3.81 matriculant average) and DO (3.63) applicants. A 3.4 GPA is a realistic profile for DO programs, state schools with holistic review, or MD programs where a strong MCAT and other parts of your application do real work to balance it out. It's not a guaranteed no — it just means the rest of your application needs to be doing more of the convincing.",
  },
  {
    q: "Is a 3.7 GPA good for medical school?",
    a: "It's solid — right around the MD applicant average (3.67) and only slightly under the MD matriculant average (3.81). A 3.7 keeps you competitive at a wide range of MD programs, especially paired with a decent MCAT, and comfortably above both DO averages.",
  },
  {
    q: "Does retaking a class replace the old grade for AMCAS?",
    a: "No. This is one of the most misunderstood parts of the whole process. AMCAS keeps both attempts — the original grade and the retake — and factors both into your GPA. Your home institution might show a clean, replaced grade on your own transcript, but AMCAS recalculates from scratch and counts every attempt separately.",
  },
  {
    q: "What's the actual minimum GPA schools require?",
    a: "There isn't one universal number — it varies by school, and many list only a soft screening threshold (commonly somewhere around 3.0) below which an application is unlikely to get a full review, not a hard cutoff. The averages in this guide describe who actually gets in, which is a more useful benchmark than a technical minimum that few successful applicants are anywhere near.",
  },
  {
    q: "Do Pass/Fail classes affect my BCPM GPA?",
    a: "Generally no — a Pass/Fail course without a letter grade has no grade point to include, so it's excluded from both your BCPM and overall GPA calculations. Check your target schools' specific policies if a significant chunk of your prerequisite coursework was graded Pass/Fail, since some programs want a minimum number of graded science credits.",
  },
  {
    q: "Does one bad semester ruin my chances?",
    a: "Not on its own. Admissions committees look at your transcript as a trend, not a single data point — a rough semester followed by a clear upward climb reads very differently than a flat, mediocre record throughout. The size of the dent also depends on how many total credits you'd completed by that point; a bad semester early on, before your GPA is fully established, moves the cumulative number less than the same semester would later.",
  },
  {
    q: "Why do MD and DO programs report different average GPAs?",
    a: "Partly applicant pool differences and partly how each process evaluates a file. DO admissions is generally described as more holistic — weighing GPA and MCAT alongside the rest of an application somewhat differently than the typical MD process — which shows up in a lower average GPA and MCAT among both DO applicants and matriculants compared to MD.",
  },
  {
    q: "Should I focus more on raising my GPA or my MCAT score?",
    a: "Depends on where you are in your undergraduate career. If you still have several semesters of coursework ahead, both matter, but a GPA already largely locked in by upper-level coursework is harder to move than an MCAT score you haven't taken yet. The acceptance-rate data suggests MCAT can meaningfully offset a softer GPA, especially at the lower GPA bands — which makes it the bigger lever for anyone closer to application season.",
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

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What GPA Do You Need for Medical School? (2026 MD & DO Data)",
  description: "The real average GPA for MD and DO matriculants, straight from AAMC data — plus how GPA and MCAT are read together.",
  author: { "@type": "Organization", name: "StudyCalc", url: "https://www.studycalc.co" },
  publisher: { "@type": "Organization", name: "StudyCalc", logo: { "@type": "ImageObject", url: "https://www.studycalc.co/logo.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.studycalc.co/what-gpa-do-you-need-for-medical-school" },
};

export default function WhatGpaForMedicalSchoolPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <article className="mx-auto max-w-4xl px-6 py-12 text-slate-300">

        <header className="mb-10 text-center md:text-left">
          <div className="inline-block rounded-full bg-cyan-950/80 border border-cyan-800/50 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-4">
            Pre-Med & Medical School Admissions
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            What GPA Do You Need for Medical School?
          </h1>
        </header>

        <div className="space-y-10 text-base leading-relaxed">

          <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8">
            <p>
              The average GPA among students who actually enrolled in an MD program in the 2025 cycle was{" "}
              <strong className="text-white">3.81</strong>. For DO programs in the 2024 cycle, it was{" "}
              <strong className="text-white">3.63</strong>. Those are matriculant averages — the GPA of
              students who applied <em>and</em> got in — and they&apos;re the most honest benchmark available,
              straight from AAMC data. If you want to see exactly where your own coursework lands, the{" "}
              <Link href="/amcas-science-gpa-calculator" className="text-cyan-400 hover:underline">
                AMCAS Science GPA Calculator
              </Link>{" "}
              runs the same Overall and BCPM math AMCAS itself uses.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              MD vs DO: Applicant and Matriculant Averages
            </h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-left border-collapse border border-slate-800 rounded-lg text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white border-b border-slate-800">
                    <th className="p-3 border-r border-slate-800">Metric</th>
                    <th className="p-3 border-r border-slate-800">MD (2025 cycle)</th>
                    <th className="p-3">DO (2024 cycle)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Applicant Avg. GPA</td>
                    <td className="p-3 border-r border-slate-800 text-cyan-400 font-bold font-mono">3.67</td>
                    <td className="p-3 text-cyan-400 font-bold font-mono">3.58</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Matriculant Avg. GPA</td>
                    <td className="p-3 border-r border-slate-800 text-emerald-400 font-bold font-mono">3.81</td>
                    <td className="p-3 text-emerald-400 font-bold font-mono">3.63</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Applicant Avg. MCAT</td>
                    <td className="p-3 border-r border-slate-800 font-mono">506</td>
                    <td className="p-3 font-mono">499</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold text-white border-r border-slate-800">Matriculant Avg. MCAT</td>
                    <td className="p-3 border-r border-slate-800 font-mono">512</td>
                    <td className="p-3 font-mono">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The gap between applicant and matriculant averages in every column is the whole story in
              miniature: the students who get in generally sit above the pool of everyone who applied,
              on both GPA and MCAT. Neither number moves in isolation — see the section below on how
              they&apos;re read together.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Overall GPA vs. BCPM (Science) GPA
            </h2>
            <p>
              AMCAS doesn&apos;t report one GPA — it reports two. Your <strong>Overall GPA</strong> covers every
              course on your transcript. Your <strong>BCPM GPA</strong> (Biology, Chemistry, Physics, Math)
              covers only your science coursework, calculated completely separately. Admissions committees
              look at both, because a strong overall GPA built mostly on non-science electives tells a
              different story than the same overall GPA built on a demanding science course load.
            </p>
            <p>
              It&apos;s common for these two numbers to diverge — sometimes by a noticeable margin — depending
              on how your science courses went relative to everything else. If you don&apos;t already know both
              of yours, the{" "}
              <Link href="/amcas-science-gpa-calculator" className="text-cyan-400 hover:underline">
                AMCAS Science GPA Calculator
              </Link>{" "}
              calculates them side by side from your actual course list, using the same AMCAS-standard
              4.0-capped scale.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Why GPA and MCAT Are Read Together
            </h2>
            <p>
              Admissions committees don&apos;t evaluate GPA in a vacuum — they read it against your MCAT score,
              and the two can meaningfully offset each other. AAMC&apos;s published acceptance data makes this
              concrete: applicants with a 3.80+ GPA but an MCAT below 502 see roughly a 21-33% acceptance
              rate. Applicants with a noticeably lower GPA — 3.20 to 3.39 — but an MCAT of 518 or higher see
              roughly 51% acceptance.
            </p>
            <p>
              Read that carefully: a strong MCAT paired with a mediocre GPA outperformed a strong GPA
              paired with a weak MCAT, in real outcome data. This isn&apos;t a case for ignoring GPA — the
              matriculant averages above make clear that strong GPAs remain the norm — but it is a clear
              signal that GPA alone doesn&apos;t decide the outcome, particularly if your GPA sits in a lower
              band. A great MCAT is the most direct lever available for correcting a GPA that isn&apos;t where
              you want it.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              What Actually Moves the Bar
            </h2>
            <p>
              &quot;Average GPA for medical school&quot; hides a lot of variation underneath it. A few factors that
              shift what&apos;s actually competitive for you specifically:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Top-tier vs. state and mid-tier MD programs.</strong> The most selective research-
                focused MD programs skew well above the national matriculant average; many state schools
                and mid-tier programs admit successfully closer to it.
              </li>
              <li>
                <strong>In-state vs. out-of-state.</strong> Public medical schools generally give a real
                advantage to in-state applicants, sometimes admitting in-state candidates with lower stats
                than out-of-state applicants they turn away — check each target school&apos;s specific in-state
                policy rather than assuming national averages apply evenly.
              </li>
              <li>
                <strong>DO&apos;s more holistic weighting.</strong> DO admissions tends to weigh GPA and MCAT
                somewhat less rigidly against the rest of the application than the typical MD process,
                which is part of why DO averages run lower without meaning DO programs are simply &quot;easier.&quot;
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              The Retake Reality Nobody Explains Clearly
            </h2>
            <p>
              If you retook a course after a rough grade, here&apos;s the part that catches almost everyone off
              guard: AMCAS does not replace the old grade with the new one. Both attempts get included in
              your GPA calculation, weighted by their own credit hours, as if they were two separate
              courses on your transcript. Your home university might show a clean, replaced grade — many
              schools do apply their own grade forgiveness internally — but AMCAS recalculates your GPA
              from your full academic record and keeps every attempt.
            </p>
            <p>
              This means a retake genuinely helps (a new A pulls your average up) without erasing the
              original attempt&apos;s effect the way you might expect. The{" "}
              <Link href="/amcas-science-gpa-calculator" className="text-cyan-400 hover:underline">
                AMCAS Science GPA Calculator guide
              </Link>{" "}
              walks through a full worked example with a retaken course, showing exactly how both attempts
              factor into the final number.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              If Your Numbers Are Below Average
            </h2>
            <p>
              A GPA below these averages is not a closed door — it&apos;s a more specific set of decisions.
              A few realistic paths, roughly in order of how directly they&apos;re within your control:
            </p>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Show an upward trend.</strong> A transcript that climbs over time reads
                meaningfully differently from a flat one, even at the same final GPA — it&apos;s evidence the
                weaker early grades don&apos;t represent your current level.
              </li>
              <li>
                <strong>Weigh your MCAT effort accordingly.</strong> Given how directly the acceptance-rate
                data shows MCAT offsetting GPA, this is often the single highest-leverage thing you can
                still fully control heading into an application cycle.
              </li>
              <li>
                <strong>Look seriously at in-state public options and DO programs.</strong> Both routes
                have real, well-documented paths to becoming a practicing physician, and both weigh your
                specific profile differently than the national MD average implies.
              </li>
              <li>
                <strong>Consider post-baccalaureate or formal coursework.</strong> Additional graded
                coursework, done well, is one of the few ways to meaningfully move a GPA that&apos;s already
                largely set by your existing credit total — the more credits you&apos;ve already completed, the
                more coursework it takes to shift the average, so plan the scope accordingly.
              </li>
            </ul>
          </section>

          <section className="my-10 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-cyan-950/40 border border-slate-800">
            <h3 className="text-xl font-bold text-white mb-2">Check Your Exact Overall and BCPM GPA Now</h3>
            <p className="text-slate-400 text-sm mb-4">
              See precisely where you stand against these averages using the same AMCAS-standard
              calculation method.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/amcas-science-gpa-calculator" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-sm transition">
                AMCAS Science GPA Calculator
              </Link>
              <Link href="/gpa-calculator" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                GPA Calculator
              </Link>
              <Link href="/how-to-calculate-gpa" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                How to Calculate GPA
              </Link>
              <Link href="/gpa-requirements" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg text-sm transition">
                GPA Requirements
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white border-b border-slate-800 pb-2">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="font-semibold text-white">{f.q}</h3>
                  <p className="text-sm text-slate-400 mt-1">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}
