import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Contact StudyCalc",
  description: "Reach the StudyCalc team by email to report a calculation error, request a new calculator, or ask how a formula works. We read every message.",
  alternates: {
    canonical: "https://www.studycalc.co/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">

      <PageHeader
        title="Contact Us"
        description="We'd love to hear your feedback and suggestions."
      />

      <section className="mt-16 space-y-8">

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            What StudyCalc Is
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            StudyCalc is a free website of GPA, CGPA, percentage, attendance,
            and grade-conversion calculators, plus guides that explain the
            formulas behind each one. There's no account system and no app —
            everything runs directly in your browser at studycalc.co.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Get in Touch
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            If you spot an incorrect calculation, find a bug, want to request
            a new calculator, or have a question about how a formula works,
            email us directly. There&apos;s no contact form on this page — writing
            to the address below reaches us and nothing else.
          </p>

          <div className="mt-8 space-y-4">

            <div>
              <span className="font-bold text-cyan-400">
                Email:
              </span>{" "}
              mugtechofficial@gmail.com
            </div>

            <div>
              <span className="font-bold text-cyan-400">
                Response Time:
              </span>{" "}
              Within 24–48 hours
            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            Reporting an Error or Requesting a Correction
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            If you believe a calculator, formula, or guide is wrong, tell us
            the page URL and what you think is incorrect. We check the
            underlying formula and, where a guide cites an outside fact (a
            grading scale, a board policy, a conversion convention), we
            re-check it against the source the page lists. If the report is
            confirmed, we fix the live page — we don&apos;t just note it and move
            on.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="text-3xl font-bold">
            What Happens to Your Message
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Emailing us shares whatever address and content you choose to
            send — nothing more. We use it only to reply and, if relevant, to
            fix the page you&apos;re writing about. See our{" "}
            <Link href="/privacy-policy" className="text-cyan-400 hover:underline">
              Privacy Policy
            </Link>{" "}
            for how we handle data more broadly.
          </p>

        </div>

      </section>

    </main>
  );
}
