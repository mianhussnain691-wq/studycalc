import CalculateCGPA from "@/components/articles/CalculateCGPA";

export const metadata = {
  title: "How to Calculate CGPA: Formula, Examples & Free CGPA Calculator (2026)",
  description:
    "Learn how to calculate CGPA with the official formula, step-by-step examples, GPA vs CGPA comparison, FAQs, and a free CGPA Calculator.",
  keywords: [
    "how to calculate cgpa",
    "cgpa formula",
    "cgpa calculation example",
    "cgpa vs gpa",
    "cgpa scale conversion",
    "how to improve cgpa",
    "cgpa calculator",
    "what is a good cgpa",
  ],
  alternates: {
    canonical: "https://www.studycalc.co/how-to-calculate-cgpa",
  },
  openGraph: {
    title: "How to Calculate CGPA: Formula, Examples & Free CGPA Calculator",
    description:
      "The official CGPA formula, two full worked examples, GPA vs CGPA comparison, and 10 FAQs.",
    url: "https://www.studycalc.co/how-to-calculate-cgpa",
    siteName: "StudyCalc",
    type: "article",
  },
};

export default function CalculateCGPAPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-12">
      <CalculateCGPA />
    </main>
  );
}