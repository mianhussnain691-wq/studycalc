This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## SEO health check

`scripts/seo-check.js` crawls the sitemap of a running build and checks every
page against a fixed set of rules (title length/uniqueness, meta description
length/uniqueness, exactly one H1, canonical correctness, no unintended
noindex, FAQPage schema matching visible FAQ content, BreadcrumbList on every
non-home page, broken internal links, orphan pages, image alt text). It exits
non-zero if anything fails, so it can gate a deploy.

```bash
npm run build
npm run start -- -p 3070
npm run seo-check
```

By default it checks `http://localhost:3070`. To check the live site instead:

```bash
SEO_CHECK_BASE=https://www.studycalc.co npm run seo-check
```

Pages that are deliberately `noindex` (e.g. the `/embed/*` routes) must be
added to the `INTENDED_NOINDEX` array at the top of the script, or the check
will flag them as a failure.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
