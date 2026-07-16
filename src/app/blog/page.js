import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import blogs from "@/data/blog"; // 'blogs' di jagah 'blog'

export default function BlogListPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        <PageHeader 
          title="Student Resources & Guides" 
          description="Useful articles, formulas, and guides to help you manage your academics better." 
        />

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {blogs.map((post) => (
            <article 
              key={post.slug}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold mt-4 group-hover:text-cyan-400 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-slate-400 leading-relaxed">
                  {post.description}
                </p>
              </div>

              <div className="mt-6">
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-block text-cyan-400 font-bold hover:underline"
                >
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}