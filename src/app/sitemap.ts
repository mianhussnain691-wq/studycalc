import type { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/mdx"; 

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://studycalc-three.vercel.app"; 

  // Static Links System
  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/gpa-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/cgpa-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/attendance-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/percentage-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/grade-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  // Dynamic System: Fetches all .mdx files automatically
  const blogs = getAllBlogs();
  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...blogRoutes];
}