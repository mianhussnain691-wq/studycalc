import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import ToolCard from "@/components/ToolCard";
import tools from "@/data/tools";

export const metadata = {
  title: "All Calculators | StudyCalc",
  description: "Browse every free academic calculator on StudyCalc — GPA, CGPA, attendance, percentage, grade, and credit-planning tools, all instant and free to use.",
  alternates: {
    canonical: "https://www.studycalc.co/calculators",
  },
  openGraph: {
    title: "All Calculators | StudyCalc",
    description: "Browse all free academic calculators available on StudyCalc.",
    url: "https://www.studycalc.co/calculators",
    siteName: "StudyCalc",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.studycalc.co" },
    { "@type": "ListItem", position: 2, name: "Calculators", item: "https://www.studycalc.co/calculators" },
  ],
};

export default function CalculatorsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        title="All Calculators"
        description="Choose the calculator you need."
      />

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {tools.map((tool) => (
          <ToolCard
            key={tool.title}
            title={tool.title}
            description={tool.description}
            href={tool.href}
            category={tool.category}
          />
        ))}

      </div>

      <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-6">
        <div>
          <h2 className="text-lg font-bold text-white">Run a blog or school site?</h2>
          <p className="text-sm text-slate-400 mt-1">Embed the GPA or CGPA calculator directly on your own page — free, no tracking.</p>
        </div>
        <Link
          href="/embed-calculators"
          className="mt-4 sm:mt-0 inline-block rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-400 transition shrink-0"
        >
          Get the Embed Code
        </Link>
      </div>

    </main>
  );
}