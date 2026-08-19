// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.studycalc.co";

  const staticRoutes = [
    "",
    "/gpa-calculator",
    "/cgpa-calculator",
    "/attendance-calculator",
    "/percentage-calculator",
    "/grade-calculator",
    "/guides",
    "/blog",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes];
}