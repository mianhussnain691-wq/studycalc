// src/app/sitemap.ts
import { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import tools from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.studycalc.co";

  // Pages with no dedicated data file — genuinely static, safe to hardcode.
  const staticRoutes = [
    "",
    "/guides",
    "/blog",
    "/calculators",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
    "/cookie-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Calculator tool pages — auto-detected from tools.js.
  // Add a new calculator to tools.js and it appears here automatically,
  // no manual sitemap edit needed.
  const toolRoutes = tools.map((tool) => ({
    url: `${baseUrl}${tool.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Article/guide pages — auto-detected from articles.js.
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...toolRoutes, ...articleRoutes];
}