// src/app/guides/page.jsx
import Link from "next/link";
import { articles } from "@/data/articles";

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#070b19] text-slate-300 py-24 px-6 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="mb-14 border-b border-slate-800/80 pb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <span>📚 Knowledge Hub</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Explore Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Academic Guides</span>
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
          Comprehensive articles, grading criteria, and step-by-step conversion manuals designed to help you excel in your academic journey.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/${article.slug}`}
            className="p-6 rounded-2xl bg-[#0b1329] border border-slate-800 hover:border-cyan-500 transition flex flex-col justify-between group shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-semibold text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10">
                  {article.category}
                </span>
                <span className="text-xs text-slate-500">{article.readTime}</span>
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-cyan-300 transition line-clamp-2">
                {article.title}
              </h2>
              <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                {article.description}
              </p>
            </div>
            
            <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-sm text-cyan-400 font-medium">
              <span>Read Guide</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}