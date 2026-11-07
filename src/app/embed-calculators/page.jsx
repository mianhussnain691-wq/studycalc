import Link from "next/link";
import CopyCodeBlock from "@/components/CopyCodeBlock";

export const metadata = {
  title: "Embed Free GPA & CGPA Calculators",
  description: "Add a free GPA or CGPA calculator to your blog or school site in one line of code — responsive, no tracking, just a required StudyCalc attribution link.",
  alternates: {
    canonical: "https://www.studycalc.co/embed-calculators",
  },
  openGraph: {
    title: "Embed Free GPA & CGPA Calculators",
    description: "Drop a free, responsive GPA or CGPA calculator into your own page with one iframe.",
    url: "https://www.studycalc.co/embed-calculators",
    siteName: "StudyCalc",
    type: "website",
  },
};

const faqs = [
  {
    q: "Is embedding a StudyCalc calculator free?",
    a: "Yes. There's no sign-up, no API key, and no cost. The only requirement is that the \"Powered by StudyCalc\" attribution link inside the embed stays visible and isn't hidden with CSS.",
  },
  {
    q: "Does the embedded calculator track visitors or set cookies?",
    a: "No. The /embed/* routes don't load Google Analytics, Microsoft Clarity, or any other tracking script, and they don't set cookies. They only run the calculator itself, client-side, in the visitor's browser.",
  },
  {
    q: "Can I change the size of the embedded calculator?",
    a: "Yes — it's a standard iframe, so you can set any width and height in the HTML or your site's CSS. We recommend a minimum width of around 320px and a height of at least 500px so the calculator doesn't get cut off, but it will scroll internally if you give it less room.",
  },
  {
    q: "Is there a light and dark version?",
    a: "Yes. Add ?theme=light to the iframe's src URL for a light background, or leave it off (or use ?theme=dark) for the default dark background used on StudyCalc itself.",
  },
  {
    q: "Can I remove or hide the \"Powered by StudyCalc\" link?",
    a: "No — keeping that link visible is the one condition of embedding for free. It's a small text link at the bottom of the widget, styled to stay out of the way of your own content.",
  },
  {
    q: "Will the embedded calculator match my site's exact fonts and colors?",
    a: "Not automatically — it uses StudyCalc's own styling so the math and layout stay correct inside the iframe. The light/dark toggle covers the most common case of matching a light or dark page background.",
  },
  {
    q: "Which calculators can I embed right now?",
    a: "The GPA Calculator and CGPA Calculator are available to embed today. If there's a specific calculator you'd like added, let us know through our Contact page.",
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
    { "@type": "ListItem", position: 2, name: "Embed Calculators", item: "https://www.studycalc.co/embed-calculators" },
  ],
};

const gpaDarkCode = `<iframe
  src="https://www.studycalc.co/embed/gpa-calculator"
  width="100%"
  height="560"
  style="border:none;border-radius:12px;max-width:420px"
  loading="lazy"
  title="StudyCalc GPA Calculator"
></iframe>`;

const gpaLightCode = `<iframe
  src="https://www.studycalc.co/embed/gpa-calculator?theme=light"
  width="100%"
  height="560"
  style="border:none;border-radius:12px;max-width:420px"
  loading="lazy"
  title="StudyCalc GPA Calculator"
></iframe>`;

const cgpaDarkCode = `<iframe
  src="https://www.studycalc.co/embed/cgpa-calculator"
  width="100%"
  height="560"
  style="border:none;border-radius:12px;max-width:420px"
  loading="lazy"
  title="StudyCalc CGPA Calculator"
></iframe>`;

const cgpaLightCode = `<iframe
  src="https://www.studycalc.co/embed/cgpa-calculator?theme=light"
  width="100%"
  height="560"
  style="border:none;border-radius:12px;max-width:420px"
  loading="lazy"
  title="StudyCalc CGPA Calculator"
></iframe>`;

export default function EmbedCalculatorsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl sm:text-5xl font-black text-center">Embed StudyCalc&apos;s Calculators</h1>
        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          Drop a free, working GPA or CGPA calculator into your blog post, school resource page, or student
          portal with one iframe. No sign-up, no tracking, no cost — just a visible link back to StudyCalc.
        </p>

        {/* GPA Calculator */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white">GPA Calculator</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 overflow-hidden" style={{ maxWidth: 420 }}>
              <iframe
                src="/embed/gpa-calculator"
                width="100%"
                height="560"
                loading="lazy"
                title="StudyCalc GPA Calculator preview"
                style={{ border: "none" }}
              />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-2">Dark (default)</p>
                <CopyCodeBlock code={gpaDarkCode} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-2">Light</p>
                <CopyCodeBlock code={gpaLightCode} />
              </div>
            </div>
          </div>
        </section>

        {/* CGPA Calculator */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white">CGPA Calculator</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 overflow-hidden" style={{ maxWidth: 420 }}>
              <iframe
                src="/embed/cgpa-calculator"
                width="100%"
                height="560"
                loading="lazy"
                title="StudyCalc CGPA Calculator preview"
                style={{ border: "none" }}
              />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-2">Dark (default)</p>
                <CopyCodeBlock code={cgpaDarkCode} />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-300 mb-2">Light</p>
                <CopyCodeBlock code={cgpaLightCode} />
              </div>
            </div>
          </div>
        </section>

        {/* Usage & License */}
        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold text-white">Usage &amp; License</h2>
          <ul className="mt-4 space-y-3 text-slate-300 leading-7 list-disc list-inside">
            <li>Free to embed on any site — personal, educational, or commercial.</li>
            <li>The &quot;Powered by StudyCalc&quot; attribution link inside the widget must stay visible.</li>
            <li>No cookies, analytics, or tracking scripts run inside the embed.</li>
            <li>Resize the iframe with standard HTML/CSS — a minimum of 320px wide by 500px tall is recommended.</li>
            <li>We reserve the right to update the widget&apos;s design; the embed URL itself won&apos;t change.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
                <h3 className="font-bold text-white">{f.q}</h3>
                <p className="mt-2 text-slate-400 leading-6">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/gpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
              <span className="font-semibold text-white">GPA Calculator</span>
              <p className="mt-1 text-sm text-slate-400">The full-featured version on StudyCalc.</p>
            </Link>
            <Link href="/cgpa-calculator" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
              <span className="font-semibold text-white">CGPA Calculator</span>
              <p className="mt-1 text-sm text-slate-400">The full-featured version on StudyCalc.</p>
            </Link>
            <Link href="/contact" className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 hover:border-cyan-500/40 transition">
              <span className="font-semibold text-white">Request a Calculator</span>
              <p className="mt-1 text-sm text-slate-400">Ask us to add another calculator to embed.</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
