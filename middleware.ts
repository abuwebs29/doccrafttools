import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Force HTTPS and non-www canonical host
  const host = req.headers.get("host") || url.host;
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");

  if (!isLocal) {
    const isWww = host.startsWith("www.");
    const desiredHost = isWww ? host.replace(/^www\./, "") : host;

    const proto = req.headers.get("x-forwarded-proto") || "https";
    const needsHttps = proto !== "https";

    if (isWww || needsHttps) {
      url.protocol = "https:";
      url.host = desiredHost;
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Exclude Next.js internals and static files
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|sitemap-index.xml|manifest.webmanifest|.*\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|map|txt|xml)$).*)",
  ],
};
