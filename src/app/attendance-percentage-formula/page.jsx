import AttendancePercentage, { attendanceFaqs } from "@/components/articles/AttendancePercentage";

export const metadata = {
  title: "Attendance Percentage Formula & How Many to Miss",
  description:
    "The exact attendance percentage formula, the 75% and 80% eligibility thresholds, and how many classes you can safely miss — with worked examples and a chart.",
  keywords: [
    "attendance percentage formula",
    "how many classes can i miss",
    "75 percent attendance calculator",
    "attendance calculator formula",
    "minimum attendance requirement",
    "how to calculate attendance percentage",
    "attendance eligibility criteria",
    "class attendance requirement",
    "attendance shortage calculator",
    "80 percent attendance rule",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/attendance-percentage-formula",
  },
  openGraph: {
    title: "Attendance Percentage Formula & Eligibility Guide",
    description:
      "Exact formula, eligibility thresholds, and worked examples for calculating your class attendance percentage.",
    url: "https://www.studycalc.co/attendance-percentage-formula",
    siteName: "StudyCalc",
    type: "article",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: attendanceFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function AttendancePercentagePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AttendancePercentage />
    </main>
  );
}