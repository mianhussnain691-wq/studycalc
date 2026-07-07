import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy | StudyCalc",
  description: "Read the Privacy Policy of StudyCalc.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">

      <PageHeader
        title="Privacy Policy"
        description="Your privacy is important to us."
      />

      <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8 space-y-8">

        <section>
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p className="mt-4 text-slate-300 leading-8">
            StudyCalc does not require account registration to use its calculators.
            We may collect anonymous usage data to improve our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Cookies</h2>
          <p className="mt-4 text-slate-300 leading-8">
            We may use cookies to improve your browsing experience and website performance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Third-Party Services</h2>
          <p className="mt-4 text-slate-300 leading-8">
            In the future, StudyCalc may use services such as Google Analytics
            or advertising platforms to improve the website experience.
          </p>
        </section>

      </div>

    </main>
  );
}