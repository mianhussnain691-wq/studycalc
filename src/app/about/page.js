import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About StudyCalc",
  description: "Learn more about StudyCalc and our mission to make academic calculations fast and accurate.",
  alternates: {
    canonical: "https://www.studycalc.co/about",
  },
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <PageHeader
        title="About StudyCalc"
        description="Helping students calculate smarter and study better."
      />

      <section className="mt-16 space-y-8">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Our Mission
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            StudyCalc was built to provide students with fast, accurate,
            and easy-to-use academic calculators. Our goal is to save time,
            reduce calculation errors, and help students focus on learning
            instead of manual calculations.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            What We Offer
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Our tools cover the calculations students run into most often —
            GPA, CGPA, attendance, percentage, and grade conversions —
            alongside guides that explain the formulas behind each one, so
            you understand the result instead of just reading a number.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            How We Keep Calculations Accurate
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Every calculator on StudyCalc is built around the standard
            formulas used by universities and grading boards — credit-weighted
            GPA and CGPA, straightforward percentage math, and published
            letter-grade scales. Grading policies vary between institutions,
            so we recommend confirming results against your school&apos;s own
            grading scale for anything that affects an official record. See
            our <Link href="/disclaimer" className="text-cyan-400 hover:underline">Disclaimer</Link>{" "}
            for details.
          </p>

        </div>

      </section>

    </main>
  );
}
