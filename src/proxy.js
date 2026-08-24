import { NextResponse } from "next/server";

// Next.js 16 renamed "middleware" to "proxy" — same behavior, new file/function name.
export function proxy(request) {
  const host = request.headers.get("host") || "";

  // If the request is hitting the Vercel-assigned preview domain instead of
  // the real production domain, permanently redirect to studycalc.co.
  // This fixes Google indexing the vercel.app URL as the canonical version
  // instead of www.studycalc.co, which was causing pages to drop out of search.
  if (host.includes("vercel.app")) {
    const url = new URL(request.url);
    url.hostname = "www.studycalc.co";
    url.protocol = "https";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};