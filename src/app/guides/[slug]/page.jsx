// src/app/guides/[slug]/page.jsx
import Link from "next/link";

export default function ArticlePage({ params }) {
  const { slug } = params;

  return (
    <div className="min-h-screen bg-[#070b19] text-slate-300 pt-32 px-6 max-w-4xl mx-auto pb-20">
      <div className="mb-8">
        <Link href="/guides" className="text-cyan-400 hover:underline text-sm font-semibold">
          ← Back to Guides
        </Link>
      </div>
      <h1 className="text-4xl font-black text-white capitalize mb-6">
        {slug.replace(/-/g, " ")}
      </h1>
      <p className="text-slate-400 leading-relaxed text-lg">
        This is the detailed explanatory guide for this topic. All calculations, metrics, and global standards are covered here comprehensively.
      </p>
    </div>
  );
}