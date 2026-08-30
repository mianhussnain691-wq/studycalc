import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "How StudyCalc collects, uses, and protects your data.",
  alternates: {
    canonical: "https://www.studycalc.co/privacy-policy",
  },
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
            StudyCalc does not require account registration to use its
            calculators. Values you enter into a calculator (grades, credit
            hours, marks) stay in your browser and are never sent to our
            servers — the calculations run entirely on your device. We
            collect anonymous usage data (pages visited, general location,
            device type) through analytics tools to understand how the site
            is used and where to improve it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Analytics</h2>
          <p className="mt-4 text-slate-300 leading-8">
            StudyCalc uses Google Analytics and Microsoft Clarity to measure
            traffic and understand how visitors interact with the site.
            These services may use cookies or similar technologies to
            collect anonymized usage data. This data does not identify you
            personally.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Cookies</h2>
          <p className="mt-4 text-slate-300 leading-8">
            We use cookies to support analytics and to serve relevant
            advertising through Google AdSense. See our{" "}
            <Link href="/cookie-policy" className="text-cyan-400 hover:underline">
              Cookie Policy
            </Link>{" "}
            for details on how to manage them.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Third-Party Services</h2>
          <p className="mt-4 text-slate-300 leading-8">
            StudyCalc uses third-party services — including Google Analytics,
            Microsoft Clarity, and Google AdSense — to operate and improve
            the website. These providers may collect data under their own
            privacy policies. We do not sell your personal information to
            any third party.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Data Retention</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Since calculator inputs never leave your browser, we have no way
            to retain them. Aggregated, anonymized analytics data is
            retained by our analytics providers according to their own
            retention policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Your Rights</h2>
          <p className="mt-4 text-slate-300 leading-8">
            Depending on your location, you may have rights under
            regulations such as the GDPR or CCPA to access, correct, or
            request deletion of data collected about you. Since we don&apos;t
            collect personally identifying information directly, most
            requests should be directed to the relevant third-party
            provider (e.g. Google), or you can{" "}
            <Link href="/contact" className="text-cyan-400 hover:underline">
              contact us
            </Link>{" "}
            with any privacy concerns.
          </p>
        </section>

      </div>

    </main>
  );
}
