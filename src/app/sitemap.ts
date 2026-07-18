import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.studycalc.co';

  // 1. Saare Tools te Static Pages de Routes
  const staticRoutes = [
    '',
    '/gpa-calculator',
    '/cgpa-calculator',
    '/attendance-calculator',
    '/percentage-calculator',
    '/grade-calculator',
    '/blog',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Home page nu 1.0 te tools nu 0.8 priority
  }));

  // 2. Tuhade Blogs de Dynamic Routes (SEO optimized slugs)
  const blogRoutes = [
    '/blog/gpa-calculator-formula-explained',
    '/blog/cgpa-calculator-guide',
    '/blog/how-to-calculate-attendance-percentage',
    '/blog/percentage-calculation-made-easy',
    '/blog/marks-to-grade-conversion-formula',
  ].map((slug) => ({
    url: `${baseUrl}${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}