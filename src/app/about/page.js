import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "About StudyCalc",
  description: "Learn more about StudyCalc and our mission.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <PageHeader
        title="About StudyCalc"
        description="Helping students calculate smarter and study better."
      />

      <section className="mt-16">

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

      </section>

    </main>
  );
}