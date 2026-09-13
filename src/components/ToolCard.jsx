import Link from "next/link";
import categories from "@/data/categories";
import categoryIcons from "@/data/categoryIcons";
import { Wrench } from "lucide-react";

export default function ToolCard({
  title,
  description,
  href,
  category,
}) {
  const categoryData = categories.find((c) => c.title === category);
  const Icon = categoryIcons[categoryData?.icon] || Wrench;

  return (
    <Link href={href} className="block">
      <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20">

        <div className="flex items-start justify-between gap-2 mb-4">
          <div
            className={`flex h-11 w-11 items-center justify-center rounded-xl ${categoryData?.iconColor || "bg-cyan-500/20 text-cyan-400"}`}
          >
            <Icon size={22} />
          </div>

          {categoryData && (
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${categoryData.badgeColor}`}
            >
              {categoryData.title}
            </span>
          )}
        </div>

        <h2 className="text-2xl font-bold text-white">{title}</h2>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

        <div className="mt-6 font-bold text-cyan-400 transition group-hover:translate-x-2">
          Open →
        </div>

      </div>
    </Link>
  );
}
