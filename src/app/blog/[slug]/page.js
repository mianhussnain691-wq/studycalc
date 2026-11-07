import { getBlogBySlug, getAllBlogs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import "@/styles/mdx.css"; // Global styles injected directly here

// Parses the FAQ section straight out of the raw MDX source, so the
// FAQPage schema can never drift from what's actually rendered on the
// page. Supports the two Q&A formats used across the existing posts:
// "### Question" headings, and "**Question**" bold lines. Returns []
// (no schema emitted) if neither pattern is found.
function extractFaqsFromMdx(content) {
  const sectionStart = content.match(/^##\s+.*(?:frequently asked questions|faqs?)\b.*$/im);
  if (!sectionStart) return [];

  const afterHeading = content.slice(sectionStart.index + sectionStart[0].length);
  const nextHeading = afterHeading.match(/\n##\s+/);
  const section = nextHeading ? afterHeading.slice(0, nextHeading.index) : afterHeading;

  function clean(text) {
    return text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/\s+/g, " ")
      .trim();
  }

  function pairsFromMatches(matches) {
    const faqs = [];
    for (let i = 0; i < matches.length; i++) {
      const q = clean(matches[i][1]);
      const start = matches[i].index + matches[i][0].length;
      const end = i + 1 < matches.length ? matches[i + 1].index : section.length;
      const a = clean(section.slice(start, end));
      if (q && a) faqs.push({ q, a });
    }
    return faqs;
  }

  const h3Matches = [...section.matchAll(/^###\s+(.+?)\s*$/gm)];
  if (h3Matches.length > 0) return pairsFromMatches(h3Matches);

  const boldMatches = [...section.matchAll(/^\*\*(.+?)\*\*\s*$/gm)];
  if (boldMatches.length > 0) return pairsFromMatches(boldMatches);

  return [];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return { title: "Blog Not Found" };
  }

  return {
    title: `${blog.frontMatter.title} - StudyCalc`,
    description: blog.frontMatter.description,
    keywords: blog.frontMatter.keywords,
    alternates: {
      canonical: `https://www.studycalc.co/blog/${slug}`,
    },
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.studycalc.co" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.studycalc.co/blog" },
      { "@type": "ListItem", position: 3, name: blog.frontMatter.title, item: `https://www.studycalc.co/blog/${slug}` },
    ],
  };

  const faqs = extractFaqsFromMdx(blog.content);
  const faqJsonLd = faqs.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <div style={{ backgroundColor: '#030712', minHeight: '100vh', padding: '60px 20px', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
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