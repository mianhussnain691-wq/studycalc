import { getBlogBySlug, getAllBlogs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import "@/styles/mdx.css"; // Global styles injected directly here

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return { title: "Blog Not Found" };
  return {
    title: `${blog.frontMatter.title} - StudyCalc`,
    description: blog.frontMatter.description,
    keywords: blog.frontMatter.keywords,
  };
}

export async function generateStaticParams() {
  const blogs = getAllBlogs();
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return <div style={{ color: '#ffffff', textAlign: 'center', padding: '80px 0' }}><h1>Blog Not Found</h1></div>;
  }

  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  };

  return (
    <div style={{ backgroundColor: '#030712', minHeight: '100vh', padding: '60px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <article style={{ maxWidth: '850px', margin: '0 auto' }}>
        
        {/* Blog Main Title */}
        <h1 style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', marginBottom: '16px', lineHeight: '1.25', letterSpacing: '-0.02em' }}>
          {blog.frontMatter.title}
        </h1>
        
        {/* Meta Info */}
        <p style={{ color: '#22d3ee', fontSize: '1rem', fontWeight: '500', marginBottom: '20px' }}>
          By {blog.frontMatter.author} • {blog.frontMatter.date} • {blog.frontMatter.readTime}
        </p>
        
        {/* Title de thallay sirf ikko clear single horizontal line */}
        <div style={{ width: '100%', height: '1px', backgroundColor: '#1f2937', marginBottom: '40px' }}></div>

        {/* Clean Static CSS Wrapper - Text and Tables will automatically fix here */}
        <div className="clean-mdx-content">
          <MDXRemote source={blog.content} options={mdxOptions} />
        </div>

      </article>
    </div>
  );
}