import Link from "next/link";

export default function ToolCard({
  title,
  description,
  href,
  badge,
  badgeColor,
}) {
  return (
    <Link href={href}>
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer">

        <span
          className={`inline-block mb-4 rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}
        >
          {badge}
        </span>

        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="mt-3 text-slate-400">
          {description}
        </p>

    <div className="mt-6 text-cyan-400 font-bold">
  Open →
</div>

      </div>
    </Link>
  );
}