import PageHeader from "@/components/PageHeader";
import ToolCard from "@/components/ToolCard";
import tools from "@/data/tools";

export const metadata = {
  title: "All Calculators | StudyCalc",
  description: "Browse all free calculators available on StudyCalc.",
};

export default function CalculatorsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

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
            badge={tool.badge}
            badgeColor={tool.badgeColor}
          />
        ))}

      </div>

    </main>
  );
}