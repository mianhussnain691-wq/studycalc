import Link from "next/link";

export default function ToolCard({
  title,
  description,
  href,
  badge,
  badgeColor,
}) {
  return (
    <Link href={href} className="block">
      <div className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20">

        <span
          className={`inline-block mb-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
        >
          {badge}
        </span>

        <h2 className="text-2xl font-bold">{title}</h2>

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