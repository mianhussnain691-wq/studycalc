import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Asi automatic domain match karan layi baseUrl fix kar ditta hai
  const baseUrl = "https://studycalc-three.vercel.app"; 

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/gpa-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/cgpa-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/attendance-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/percentage-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/grade-calculator`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog/how-to-calculate-gpa`, lastModified: new Date() },
    { url: `${baseUrl}/blog/difference-between-cgpa-and-gpa`, lastModified: new Date() },
  ];
}