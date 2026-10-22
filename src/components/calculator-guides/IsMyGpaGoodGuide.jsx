import Link from "next/link";

const faqs = [
  {
    q: "Is a 2.760 GPA bad?",
    a: "No — a 2.76 (on a 4.0 scale) clears the common 2.0 academic-standing threshold most US institutions use. It's below the roughly 3.0 tier many standard scholarships use and the 3.5 range common for Dean's List, so there's room to grow, but it isn't \"bad\" on its own.",
  },
  {
    q: "Is a 1.625 cumulative GPA good or bad?",
    a: "A 1.625 cumulative GPA is below the common 2.0 threshold most US institutions use for good academic standing. It's a routine administrative checkpoint rather than a permanent label — many students have been below this line at some point and recovered. Connecting with an academic advisor is a practical next step.",
  },
  {
    q: "Is a 7.544 CGPA good or bad?",
    a: "On a 10-point scale, there's no single standard threshold for \"good\" — it varies significantly by university. Converting 7.544 using the common ×9.5 estimate gives roughly 71.7%, but many 10-point-scale institutions consider a CGPA in the 7.0+ range itself to already be good to very good (often a First Class or equivalent distinction). Check your own university's specific grading policy rather than relying on a percentage conversion alone.",
  },
  {
    q: "My GPA is a 2.960 — does it qualify for scholarships?",
    a: "A 2.96 clears the roughly 2.0-2.5 range some need-based and community scholarships use, and is close to the ~3.0 tier that many standard institutional grants require — see the Scholarship GPA Eligibility Checker for the specific tiers. Exact requirements vary by scholarship provider, so check the specific award's published criteria.",
  },
  {
    q: "What cumulative GPA is required to remain in good academic standing?",
    a: "Most US institutions use a 2.0 cumulative GPA (on a 4.0 scale) as the common threshold for good academic standing, though some majors or programs set a higher minimum and your specific institution's academic catalog is the authoritative source. See the Academic Standing Checker for a direct check against this threshold.",
  },
  {
    q: "Do scholarships actually get revoked if my GPA drops?",
    a: "Often yes, at least temporarily. Many universities tie scholarship renewal to a specific cumulative GPA and sometimes a credit-hour requirement, checked at a specific point each year — for example, Indiana University's academic scholarships renew on maintaining a 3.0 cumulative GPA while enrolled full-time (12+ credit hours), and Louisiana State University pairs a 3.0 cumulative GPA requirement with earning 24 credit hours each year, with an appeal process for exceptional circumstances. Exact policies vary by school and by scholarship — check your award letter and your institution's financial aid office.",
  },
];

const faqSchema = {
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
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://www.studycalc.co/calculators" },
    { "@type": "ListItem", position: 3, name: "Is My GPA Good?", item: "https://www.studycalc.co/is-my-gpa-good" },
  ],
};

export default function IsMyGpaGoodGuide() {
  return (
    <div className="mt-16 text-slate-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">How This Tool Decides "Good" or "Bad"</h2>
        <p className="mt-4 leading-7">
          Rather than inventing a percentile or a "top X% of students" claim, this tool compares your GPA
          against thresholds that are already widely published and used across US higher education: the
          common 2.0 cumulative GPA line for academic standing, the roughly 3.0 range many standard
          scholarships and renewal requirements use, and the roughly 3.5 range common for Dean's List and
          the most competitive merit awards. None of these is a single universal rule — they're the most
          common conventions, and your own institution's published policy always governs anything official.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Why the 10-Point CGPA Scale Gets Different Treatment</h2>
        <p className="mt-4 leading-7">
          A 10-point CGPA (common in India and some other countries) isn&apos;t simply a rescaled version of
          the US 4.0 system — the two scales measure things differently, and institutions set their own
          "good standing" or honors CGPA directly rather than through a percentage conversion. This tool
          shows the common ×9.5 percentage estimate for reference, but deliberately avoids forcing a
          10-point input through the same 2.0/3.0/3.5 bands built for the 4.0 scale, since that would
          produce a misleading verdict — many 10-point institutions consider 7.0+ already strong. See{" "}
          <Link href="/cgpa-to-percentage-conversion" className="text-cyan-400 hover:underline">
            CGPA to Percentage
          </Link>{" "}
          for the full India/Pakistan conversion breakdown.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Real Scholarship Renewal Examples</h2>
        <p className="mt-4 leading-7">
          To show these thresholds aren&apos;t invented, here are two real, published university policies (check
          your own institution's current policy — these can change year to year):
        </p>
        <div className="mt-6 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-bold text-white">Indiana University</h3>
            <p className="mt-2 text-slate-400 leading-6">
              Academic scholarships renew on maintaining a 3.0 cumulative GPA while enrolled full-time
              (12+ credit hours) as a degree-seeking student.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="font-bold text-white">Louisiana State University</h3>
            <p className="mt-2 text-slate-400 leading-6">
              Scholarship retention requires a 3.0 cumulative GPA and 24 credit hours earned each year,
              checked at the end of each spring semester, with an appeal process for exceptional
              circumstances.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
        <div className="mt-6 space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <h3 className="font-bold text-white">{f.q}</h3>
              <p className="mt-2 text-slate-400 leading-6">{f.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-white">Related Calculators &amp; Guides</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/academic-standing-checker" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Academic Standing Checker</span>
            <p className="mt-1 text-sm text-slate-400">The pass/fail academic-standing threshold, directly.</p>
          </Link>
          <Link href="/deans-list-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Dean&apos;s List Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Check honor-roll eligibility specifically.</p>
          </Link>
          <Link href="/scholarship-gpa-checker" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Scholarship GPA Eligibility Checker</span>
            <p className="mt-1 text-sm text-slate-400">See which scholarship tier you likely qualify for.</p>
          </Link>
          <Link href="/target-gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
            <span className="font-semibold text-white">Target GPA Calculator</span>
            <p className="mt-1 text-sm text-slate-400">Find the GPA you need to reach a specific goal.</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
