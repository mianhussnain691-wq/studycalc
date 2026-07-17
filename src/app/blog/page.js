import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { getAllBlogs } from "@/lib/mdx"; // Nawa automatic helper import kita

export const metadata = {
  title: "StudyCalc Blogs - Learn GPA & Academic Calculations",
  description: "Read expert articles on how to calculate GPA, CGPA, and manage your university grades easily.",
};

export default function BlogListPage() {
  const blogs = getAllBlogs(); // Automatic saare .mdx blogs di metadata chukega

  return (
    <div style={{ minHeight: '100vh', color: '#cbd5e1', fontFamily: 'sans-serif' }}>
      <PageHeader title="Our Blogs" description="Latest academic guides and tips" />
      
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '48px 16px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {blogs.map((blog) => (
            <div 
              key={blog.slug} 
              style={{ 
                background: '#0f172a', 
                border: '1px solid #334155', 
                borderRadius: '8px', 
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.75rem', color: '#22d3ee' }}>{blog.date}</span>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ffffff', marginTop: '8px', marginBottom: '12px' }}>
                  {blog.title}
                </h2>
                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.5', marginBottom: '16px' }}>
                  {blog.description}
                </p>
              </div>

              <Link 
                href={`/blog/${blog.slug}`} 
                style={{ 
                  color: '#22d3ee', 
                  fontWeight: '600', 
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}
              >
                Read Article →
              </Link>
            </div>
          ))}
        </div>

        {blogs.length === 0 && (
          <p style={{ textAlign: 'center', color: '#64748b' }}>No blogs found in content folder.</p>
        )}
      </main>
    </div>
  );
}