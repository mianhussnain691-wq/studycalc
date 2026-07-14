import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://studycalc.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/gpa-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/cgpa-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/attendance-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/percentage-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/grade-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://studycalc.vercel.app/contact",
      lastModified: new Date(),
    },
  ];
}