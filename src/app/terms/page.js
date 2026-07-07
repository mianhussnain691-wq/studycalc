import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Terms & Conditions | StudyCalc",
  description: "Terms and Conditions for using StudyCalc.",
};

export default function TermsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <PageHeader
        title="Terms & Conditions"
        description="Please read these terms before using StudyCalc."
      />

      <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 space-y-8">

        <section>
          <h2 className="text-2xl font-bold">
            Acceptance of Terms
          </h2>

          <p className="mt-4 text-slate-300 leading-8">
            By using StudyCalc, you agree to these Terms and Conditions.
            If you do not agree, please discontinue using the website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">
            Calculator Accuracy
          </h2>

          <p className="mt-4 text-slate-300 leading-8">
            We strive to provide accurate calculations, but results should
            always be verified before making academic or financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">
            Changes
          </h2>

          <p className="mt-4 text-slate-300 leading-8">
            We may update these terms at any time to improve our services.
          </p>
        </section>

      </div>

    </main>
  );
}