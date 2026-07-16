import { notFound } from "next/navigation";
import blogs from "@/data/blog"; // Je file da naam 'blogs.js' hai
// import blogs from "@/data/blog"; // Je rename karke 'blog.js' rakhya hai taan eh use karo

import Link from "next/link";

// Next.js App Router ch params nu asynchronous handle karna safe rehnda hai
export default async function BlogPost({ params }) {
  const { slug } = await params; 
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white py-16">
      <article className="max-w-3xl mx-auto px-6">
        
        {/* Back button */}
        <Link 
          href="/blog" 
          className="text-cyan-400 hover:underline text-sm font-semibold flex items-center gap-2 mb-8"
        >
          ← Back to Articles
        </Link>

        {/* Article Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black leading-tight text-white mb-8">
          {post.title}
        </h1>

        <div className="border-b border-slate-800 mb-10 pb-2"></div>

        {/* Body Content */}
        <div 
          className="prose prose-invert max-w-none space-y-6 text-slate-300 leading-relaxed 
            prose-headings:text-white prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
            prose-h2:text-2xl prose-h3:text-xl prose-a:text-cyan-400 prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </article>
    </main>
  );
}