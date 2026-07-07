import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact StudyCalc",
  description: "Contact the StudyCalc team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <PageHeader
        title="Contact Us"
        description="We'd love to hear your feedback and suggestions."
      />

      <section className="mt-16">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            If you have suggestions, find a bug, or want to request a new
            calculator, feel free to contact us.
          </p>

          <div className="mt-8 space-y-4">

            <div>
              <span className="font-bold text-cyan-400">
                Email:
              </span>{" "}
              support@studycalc.com
            </div>

            <div>
              <span className="font-bold text-cyan-400">
                Response Time:
              </span>{" "}
              Within 24–48 hours
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}