// src/app/guides/[slug]/page.jsx

import { redirect } from "next/navigation";

export default async function ArticlePage({ params }) {
  const { slug } = await params;

  redirect(`/${slug}`);
}