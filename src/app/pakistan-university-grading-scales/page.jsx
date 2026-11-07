import Link from "next/link";
import SourcesBlock from "@/components/SourcesBlock";
import universityGradingScales from "@/data/universityGradingScales";

export const metadata = {
  title: "Pakistani University Grading Scales (Sourced)",
  description: "Official letter grade to GPA scales for Pakistani universities, quoted directly from each university's own regulations — with source links and date checked.",
  alternates: {
    canonical: "https://www.studycalc.co/pakistan-university-grading-scales",
  },
  openGraph: {
    title: "Pakistani University Grading Scales (Sourced)",
    description: "Official grading scales for Pakistani universities, sourced directly from each university's own site.",
    url: "https://www.studycalc.co/pakistan-university-grading-scales",
    siteName: "StudyCalc",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why does this page only list a few universities?",
    a: "We only publish a university's grading scale here if we could find and directly read it on that university's own official site — a registrar page, an official regulations document, or an official student handbook. Most Pakistani universities don't publish a clean, directly-linkable grading table, or we couldn't reach one. A university isn't on this page because we couldn't verify it this way, not because its scale doesn't exist.",
  },
  {
    q: "Can I request a university be added?",
    a: "Yes — email us a direct link to that university's own official page or document that publishes its grading scale, and we'll add it once we've verified it. See the correction link below.",
  },
  {
    q: "Why do some universities only show grade points, not percentage ranges?",
    a: "Because that's all they publish. Some universities (FAST-NUCES and GIKI, for example) publish only the letter-grade-to-GPA-points mapping, with no percentage or marks range attached. We show exactly what's published — we don't invent a percentage equivalent that the university itself hasn't stated.",
  },
  {
    q: "Is a 3.0 GPA the same thing at every university on this page?",
    a: "No. Each university sets its own grading policy, grade-point values, and (where published) percentage cutoffs independently — there's no single national standard across Pakistani universities. Compare a GPA only within the same university's own scale, not across different universities.",
  },
  {
    q: "Does this page cover board exams (Matric/Intermediate) too?",
    a: "No — this page is specifically about university-level grading scales. For Matriculation (SSC) and Intermediate (HSSC/FSc) board grading, see our Pakistani Board vs. US GPA guide instead.",
  },
  {
    q: "How often is this page updated?",
    a: "Each entry shows the date we last checked and read its source directly. University policies can change between academic years, so always cross-check against your own university's current, official publication for anything that affects an official decision.",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.studycalc.co" },
    { "@type": "ListItem", position: 2, name: "Guides", item: "https://www.studycalc.co/guides" },
    { "@type": "ListItem", position: 3, name: "Pakistani University Grading Scales", item: "https://www.studycalc.co/pakistan-university-grading-scales" },
  ],
};

export default function PakistanUniversityGradingScalesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl sm:text-5xl font-black text-center">Pakistani University Grading Scales</h1>
        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Letter grade and GPA-point scales for Pakistani universities, shown only where we could find and read
          the scale directly on that university&apos;s own official site. No invented numbers, no third-party
          calculators quoted as fact.
        </p>

        <SourcesBlock
          note="Each university below is linked to the exact official page or document we read, with the date we checked it. Universities we checked but couldn't verify this way are listed separately, not included here — see the FAQ for why."
        />

        <div className="mt-12 space-y-8">
          {universityGradingScales.map((uni) => (
            <div key={uni.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white">{uni.name}</h2>
              <p className="mt-1 text-sm text-slate-400">{uni.programScope}</p>

              <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
                    <tr>
                      <th className="px-5 py-3 text-left">Grade</th>
                      <th className="px-5 py-3 text-left">GPA Points</th>
                      {uni.scale.some((s) => s.marks) && <th className="px-5 py-3 text-left">Marks (%)</th>}
                      {uni.scale.some((s) => s.meaning) && <th className="px-5 py-3 text-left">Meaning</th>}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 text-slate-300">
                    {uni.scale.map((row) => (
                      <tr key={row.grade} className="hover:bg-slate-900/20 transition-colors">
                        <td className="px-5 py-2.5 font-bold text-white">{row.grade}</td>
                        <td className="px-5 py-2.5 text-cyan-400 font-semibold">{row.points}</td>
                        {uni.scale.some((s) => s.marks) && <td className="px-5 py-2.5">{row.marks || "—"}</td>}
                        {uni.scale.some((s) => s.meaning) && <td className="px-5 py-2.5 text-slate-400">{row.meaning || "—"}</td>}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {uni.note && <p className="mt-4 text-sm text-slate-400">{uni.note}</p>}

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500">
                <a href={uni.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
                  Official source ↗
                </a>
                <span>Last checked: {uni.dateChecked}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center">
          <p className="text-slate-300">
            Spotted an error, or want a university added? Tell us the official page or document that publishes
            it.
          </p>
          <a
            href="mailto:mugtechofficial@gmail.com?subject=Grading%20scale%20correction"
            className="mt-4 inline-block rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition"
          >
            Report a Correction
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="font-bold text-white">{f.q}</h3>
                <p className="mt-2 text-slate-400 leading-6">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/pakistani-board-vs-us-gpa" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
              <span className="font-semibold text-white">Pakistani Board vs. US GPA</span>
              <p className="mt-1 text-sm text-slate-400">Matric and Intermediate board grading, not university-level.</p>
            </Link>
            <Link href="/pakistan-cgpa-converter" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
              <span className="font-semibold text-white">Pakistan CGPA Converter</span>
              <p className="mt-1 text-sm text-slate-400">Convert a 4.0-scale CGPA to an approximate percentage.</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
