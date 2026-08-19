import Link from "next/link";

export const metadata = {
  title: "GPA Scale Explained: 4.0, 5.0 & 10.0 Point Scales Compared",
  description:
    "A clear breakdown of the 4.0, 5.0, and 10.0 GPA scales — what each one measures, how weighted vs unweighted grading changes the numbers, and how to read a scale you've never seen before.",
  keywords: [
    "gpa scale explained",
    "4.0 gpa scale",
    "5.0 gpa scale",
    "10.0 gpa scale",
    "weighted vs unweighted gpa",
    "gpa scale conversion chart",
    "what is a gpa scale",
    "letter grade to gpa scale",
    "international gpa scale comparison",
    "gpa point scale chart",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/gpa-scale-explained",
  },
  openGraph: {
    title: "GPA Scale Explained: 4.0, 5.0 & 10.0 Point Scales Compared",
    description: "What each GPA scale actually measures, and how to convert between them.",
    url: "https://www.studycalc.co/gpa-scale-explained",
    siteName: "StudyCalc",
    type: "article",
  },
};

const faqStack = [
  {
    q: "What's actually different between a weighted and unweighted GPA scale?",
    a: "An unweighted scale runs from 0.0 to 4.0 and treats every class the same, no matter how hard it was — an A in gym and an A in AP Calculus are both worth exactly 4.0. A weighted scale adjusts for difficulty: regular classes still cap at 4.0, but Honors, AP, or IB classes can push above that, often up to 5.0, since they're harder."
  },
  {
    q: "How do universities convert a 10-point Indian or European CGPA to the US 4.0 scale?",
    a: "They don't just do simple math on it. Credential evaluation services like WES look at your actual transcript course by course, comparing your grades and credit hours against the grading pattern typical for that country, then map the result onto the US scale accordingly."
  },
  {
    q: "Why do some medical and law schools recalculate my GPA themselves instead of using what's on my transcript?",
    a: "Because schools don't all grade the same way — some are more generous, some let you retake a failed course and wipe the old grade, some use a 4.33 for an A+. To compare applicants fairly, many competitive programs recalculate every transcript using one consistent, strict formula, removing those school-to-school differences."
  },
  {
    q: "Is a 3.85 weighted GPA better than a 4.00 unweighted GPA?",
    a: "Often, yes, in the eyes of admissions committees. A 3.85 earned across a genuinely difficult course load (AP, IB, Honors) usually signals more than a perfect 4.00 from an easier set of classes, because it shows you were willing to challenge yourself rather than protect a flawless number."
  },
  {
    q: "Which GPA scale should I actually list on an application?",
    a: "Whatever your school's official transcript uses — don't try to convert it yourself unless the application specifically asks you to. Admissions offices are used to reading transcripts on 4.0, 5.0, and 10.0 scales and know how to interpret each one in context."
  },
  {
    q: "Why does my school use a 10.0 scale instead of the more common 4.0?",
    a: "It's mostly regional convention rather than anything mathematical. A 10.0 scale is standard across most of South Asia and much of Europe, while 4.0 dominates in North America. Neither scale is more accurate than the other — they're just different agreed-upon units, the same way some countries measure distance in miles and others in kilometers."
  },
  {
    q: "Can my GPA scale change partway through my degree?",
    a: "It's rare but it happens — usually when a university updates its grading policy, or when you transfer between institutions that use different scales. If this happens to you, your school's registrar should be able to give you an official recalculated GPA on the new scale rather than leaving you to guess at a conversion."
  }
];

const scaleComparison = [
  { letter: "A+ / A", point4: "4.00", point5: "5.00", point10: "10.00", percentage: "93% – 100%", descriptor: "Top of the scale" },
  { letter: "A-", point4: "3.70", point5: "4.70", point10: "9.00", percentage: "90% – 92%", descriptor: "Excellent" },
  { letter: "B+", point4: "3.30", point5: "4.30", point10: "8.00", percentage: "87% – 89%", descriptor: "Very good" },
  { letter: "B", point4: "3.00", point5: "4.00", point10: "7.00", percentage: "83% – 86%", descriptor: "Good" },
  { letter: "B-", point4: "2.70", point5: "3.70", point10: "6.50", percentage: "80% – 82%", descriptor: "Above average" },
  { letter: "C+", point4: "2.30", point5: "3.30", point10: "6.00", percentage: "77% – 79%", descriptor: "Satisfactory" },
  { letter: "C", point4: "2.00", point5: "3.00", point10: "5.00", percentage: "73% – 76%", descriptor: "Average" },
  { letter: "D", point4: "1.00", point5: "2.00", point10: "4.00", percentage: "60% – 72%", descriptor: "Passing, minimum" },
  { letter: "F", point4: "0.00", point5: "0.00", point10: "0.00", percentage: "Below 60%", descriptor: "Failing" }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqStack.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function GPAScaleExplainedPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <article className="mx-auto mt-12 max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-10 text-left">

        <div className="border-b border-slate-800 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/20 mb-4">
            GPA Scale Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            GPA Scale Explained: What 4.0, 5.0, and 10.0 Actually Mean
          </h1>
          <p className="mt-4 text-base sm:text-lg leading-8 text-slate-300">
            If you've ever seen someone mention a 9.2 CGPA and wondered whether that's incredible or average, you've run into the core problem with GPA scales: there isn't just one. Schools around the world use 4.0, 5.0, and 10.0 as their baseline, and none of them convert to each other in a way you can eyeball. This guide breaks down what each scale actually measures, how weighted and unweighted grading changes the numbers, and how to read a scale you've never seen before without guessing.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">01.</span> What a GPA Scale Is Actually Doing
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            A GPA scale is just a way of turning letter grades or percentage scores into a single number that's easy to compare across an entire transcript. Instead of a registrar or admissions officer reading through every individual grade you've ever earned, they can glance at one number and get a rough sense of your overall performance.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            Most schools in the US default to a 4.0 scale, but plenty of countries and institutions use something else entirely — a 5.0 scale that rewards harder classes, or a 10.0 scale that's common across South Asia and parts of Europe. None of these are "wrong," they're just different rulers measuring the same thing. If you want to see exactly how individual semester grades roll up into one cumulative number, our guide on <Link href="/how-to-calculate-cgpa" className="text-cyan-400 hover:underline">how to calculate CGPA</Link> walks through the actual math.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            It helps to think of a GPA scale less like a strict rule and more like a shared agreement. A group of institutions decides on a ceiling number, then everyone maps their letter grades or percentages onto it the same way, so that a transcript from one school can be roughly understood by someone at another. The catch is that "roughly" is doing a lot of work in that sentence — the moment you cross between countries or education systems, that shared agreement breaks down, which is exactly why conversion tools and credential evaluators exist in the first place.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">02.</span> Weighted vs. Unweighted, in Short
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            One thing that trips people up on the 4.0-and-5.0 comparison specifically is the difference between weighted and unweighted grading. An unweighted GPA treats every class the same regardless of difficulty — a 4.0 is a 4.0 whether it came from an easy elective or the hardest class in the building. A weighted GPA gives extra credit for harder courses like Honors, AP, or IB, which is why you'll sometimes see weighted GPAs go above 4.0, up to a 5.0 ceiling at most schools that use it.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            This matters most for high schoolers building a college application, since it changes how your transcript compares to other applicants — a 3.9 weighted GPA loaded with AP classes and a 4.0 unweighted GPA from standard classes can represent very different levels of academic challenge, even though the unweighted number looks higher on paper. We've written a full breakdown of exactly how the weighting math works, with worked examples, in our dedicated <Link href="/weighted-gpa-vs-unweighted-gpa" className="text-cyan-400 hover:underline">weighted vs. unweighted GPA guide</Link> — worth a read if this is the part you actually came here for.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">03.</span> 4.0, 5.0, and 10.0 Scales Side by Side
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Here's how a given letter grade and percentage typically lines up across the three most common GPA scales you'll run into:
          </p>

          <div className="mt-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/30">
            <table className="w-full border-collapse text-sm">
              <thead className="bg-slate-800/80 text-cyan-400 font-semibold">
                <tr>
                  <th className="px-5 py-3.5 text-left">Letter Grade</th>
                  <th className="px-5 py-3.5 text-left">4.0 Scale</th>
                  <th className="px-5 py-3.5 text-left">5.0 Scale</th>
                  <th className="px-5 py-3.5 text-left">10.0 Scale</th>
                  <th className="px-5 py-3.5 text-left">Percentage</th>
                  <th className="px-5 py-3.5 text-left">Standing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {scaleComparison.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-900/20 transition-colors">
                    <td className="px-5 py-3.5 font-bold text-white font-mono">{row.letter}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-200">{row.point4}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-400">{row.point5}</td>
                    <td className="px-5 py-3.5 font-mono text-slate-400">{row.point10}</td>
                    <td className="px-5 py-3.5 font-mono text-cyan-300 font-medium">{row.percentage}</td>
                    <td className="px-5 py-3.5 text-slate-300 text-xs font-medium">{row.descriptor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 leading-7 text-slate-300 text-sm">
            One caveat worth flagging: this table shows the most common pattern, but it's not universal. Some 10.0-scale universities set their own cutoffs a few points higher or lower, so if you're converting a real transcript for something official, check your specific institution's published scale rather than assuming this table applies exactly.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">04.</span> Why the Same Number Can Mean Different Things
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            Admissions committees and employers rarely look at a GPA number in isolation — they look at it next to the scale and the school it came from. A 7.5 out of 10.0 from a notoriously demanding engineering program can represent a stronger academic record than a 9.0 from a school known for generous grading, even though the second number looks higher on paper.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            This is exactly why international applications get complicated, and why so many universities and employers lean on third-party credential evaluators rather than converting numbers themselves — they're trying to correct for how differently "hard" and "easy" grading can be from one country, or even one school, to the next. If your GPA came from a percentage-based system in the first place, our <Link href="/percentage-formula-explained" className="text-cyan-400 hover:underline">percentage formula guide</Link> covers how that raw number was calculated before it ever became a GPA.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            It's also worth remembering that grading culture shifts over time within the same institution, not just between different ones. A school that graded strictly a decade ago may grade more generously now, which is part of why some competitive programs prefer to look at your class rank or percentile alongside your raw GPA rather than the number alone.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="text-cyan-400 font-mono">05.</span> How to Read a GPA Scale You've Never Seen Before
          </h2>
          <p className="mt-4 leading-7 text-slate-300">
            If someone hands you a number on a scale you don't recognize, there are three quick things worth checking before you try to judge it. First, find the maximum possible value — a 3.2 means something completely different on a 4.0 scale versus a 10.0 scale. Second, check whether it's weighted or unweighted, since that alone can shift the number by half a point or more for the exact same academic record. Third, if you're comparing it to your own GPA for something like a transfer or a joint application, look for an official conversion chart from the receiving institution rather than doing a rough proportional estimate yourself — small assumptions compound into meaningfully wrong numbers.
          </p>
          <p className="mt-4 leading-7 text-slate-300">
            A quick sanity check that works surprisingly well: ask what percentage the number represents. A GPA is really just a percentage wearing a different outfit, and once you know the underlying percentage — say, 85% — you can usually tell right away whether a score is strong, average, or weak, regardless of which scale it was originally reported on.
          </p>
        </div>

        <div className="mt-16 border-t border-slate-800/60 pt-12">
          <h2 className="text-2xl font-bold text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-slate-400 text-sm mb-6">Common questions about GPA scales, weighting, and international conversion.</p>
          <div className="space-y-6">
            {faqStack.map((faq, idx) => (
              <div key={idx} className="rounded-xl bg-slate-950/40 p-5 border border-slate-800/40">
                <h4 className="text-base font-semibold text-white flex items-start gap-2">
                  <span className="text-cyan-400 font-mono">Q:</span> {faq.q}
                </h4>
                <p className="mt-2 text-sm text-slate-300 pl-6 leading-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-white">Want to convert your own grades?</h3>
            <p className="text-sm text-slate-400 mt-1">Plug in your marks or grades and get an instant conversion across scales.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-wrap justify-center gap-3 shrink-0">
            <Link href="/grade-calculator" className="rounded-lg bg-cyan-500 px-4 py-2.5 text-xs font-bold text-slate-950 hover:bg-cyan-400 transition shadow-md">
              Open Grade Calculator
            </Link>
            <Link href="/gpa-calculator" className="rounded-lg bg-slate-800 px-4 py-2.5 text-xs font-bold text-white hover:bg-slate-700 transition border border-slate-700">
              Open GPA Calculator
            </Link>
          </div>
        </div>

      </article>
    </main>
  );
}