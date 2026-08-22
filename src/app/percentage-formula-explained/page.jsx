import PercentageFormula from "@/components/articles/PercentageFormula";

export const metadata = {
  title: "Percentage Formula Explained: How to Calculate Percentage (With Examples)",
  description:
    "The exact percentage formula, percentage increase/decrease, reverse percentage, and percentage-of-a-percentage — with worked numeric examples for each.",
  keywords: [
    "percentage formula",
    "how to calculate percentage",
    "percentage increase formula",
    "percentage decrease formula",
    "reverse percentage formula",
    "percentage of a percentage",
    "how to find percentage of a number",
    "percentage point vs percentage",
    "percentage calculation examples",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/percentage-formula-explained",
  },
  openGraph: {
    title: "Percentage Formula Explained: How to Calculate Percentage (With Examples)",
    description:
      "Every percentage formula you'll actually need, with worked numeric examples.",
    url: "https://www.studycalc.co/percentage-formula-explained",
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
      name: "What is the basic percentage formula?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Percentage = (Part divided by Whole) times 100. For example, 45 out of 60 is (45 divided by 60) times 100, which equals 75%.",
      },
    },
    {
      "@type": "Question",
      name: "How do you calculate percentage decrease?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Subtract the new value from the old value, divide by the old value, then multiply by 100. Dropping from 80 to 60 is a (80 minus 60) divided by 80, times 100, which is a 25% decrease.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a percentage point and a percentage?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A percentage point is the plain arithmetic difference between two percentages, for example going from 40% to 50% is a 10 percentage point increase. A percentage change describes that same move relative to the starting value, which in this case is a 25% increase.",
      },
    },
    {
      "@type": "Question",
      name: "How do you find the whole when you only know the percentage and the part?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This is called a reverse percentage: Whole = Part divided by (Percentage divided by 100). If 30 is 60% of something, the whole is 30 divided by 0.60, which equals 50.",
      },
    },
    {
      "@type": "Question",
      name: "Why do schools use weighted percentages instead of a simple average?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A weighted percentage assigns different importance to different categories, such as 40% for exams and 20% for homework, so a strong final exam counts more toward your grade than a single homework assignment.",
      },
    },
  ],
};

export default function PercentageFormulaPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PercentageFormula />
    </main>
  );
}