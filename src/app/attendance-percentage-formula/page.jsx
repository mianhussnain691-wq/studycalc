import AttendancePercentage from "@/components/articles/AttendancePercentage";

export const metadata = {
  title: "Attendance Percentage Formula: How Many Classes Can You Miss?",
  description:
    "Learn the exact attendance percentage formula, the 75% and 80% eligibility thresholds explained, and how many classes you can safely miss — with worked examples, an eligibility chart, and a free calculator.",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the standard global percentage threshold for university exam eligibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most global academic institutions enforce a strict 75% or 80% attendance baseline. Falling below this threshold typically results in being barred from final term examinations or receiving an automatic course failure status.",
      },
    },
    {
      "@type": "Question",
      name: "How does a single medical or institutional absence affect my overall presence ratio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An officially excused absence removes the negative weight from your attendance tracker by adjusting the 'Total Held Classes' parameter in your institutional ledger, keeping your baseline calculation stable.",
      },
    },
    {
      "@type": "Question",
      name: "Can high academic marks override a low attendance threshold restriction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, no. Educational criteria separate conceptual evaluation from physical presence. Even with a perfect 100% on assignments, failing to meet the minimum class attendance requirement can lead to a strict procedural course failure.",
      },
    },
    {
      "@type": "Question",
      name: "What is the mathematical formula to find out how many classes I can safely miss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To keep a target percentage such as 75%, use this equation: Max Missed Classes = Total Held Classes minus (Total Held Classes multiplied by 0.75). Any absence beyond this number drops your score into the warning zone.",
      },
    },
    {
      "@type": "Question",
      name: "Do asynchronous online lecture hours follow the same calculation logic?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Online modules measure presence by tracking portal activity, video watch milestones, or weekly discussion forum contributions. This data is then compiled into a standard percentage out of total required units.",
      },
    },
    {
      "@type": "Question",
      name: "How do attendance factors impact final grade weights or credit metrics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many syllabi dedicate 5% to 10% of the total course weight to active participation and attendance. Missing classes directly cuts into these easy points, lowering your final letter grade standings.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my attendance record drops below the critical 75% mark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Immediately contact your academic advisor or professor to discuss makeup options, check the official appeals process, or arrange extra credit tasks before the semester eligibility window closes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use an interactive simulator to track my daily classroom attendance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A dedicated attendance calculator layout allows you to input your current parameters instantly, showing you exactly how many upcoming lectures you must attend to stay safe.",
      },
    },
  ],
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