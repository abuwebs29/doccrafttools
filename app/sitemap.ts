import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://doccrafttools.com";

// Dynamic sitemap that auto-discovers routes that contain app/<route>/page.tsx
// and excludes low-value utility routes to focus crawl budget.
//
// Excludes:
// - /embed/*
// - /search, /status, /about
// - /ar and /ar/*
// - system routes (/api, /_...)
function getRoutes(dir: string, appDir: string): string[] {
  const entries = fs.readdirSync(dir);
  let routes: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      routes = routes.concat(getRoutes(fullPath, appDir));
      continue;
    }

    if (entry === "page.tsx") {
      const route = fullPath
        .replace(appDir, "")
        .replace(/\/page\.tsx$/, "")
        .replace(/\\/g, "/");

      routes.push(route === "" ? "/" : route);
    }
  }

  return routes;
}

function shouldExclude(route: string): boolean {
  // system
  if (route.startsWith("/api")) return true;
  if (route.startsWith("/_")) return true;

  // embed utilities
  if (route.startsWith("/embed")) return true;

  // low-value utility pages
  const exact = new Set<string>(["/search", "/status", "/about", "/ar"]);
  if (exact.has(route)) return true;

  // exclude language section entirely
  if (route.startsWith("/ar/")) return true;

  return false;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = getRoutes(appDir, appDir).filter((r) => !shouldExclude(r));

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route.includes("generator") ? 0.9 : 0.8,
  }));
}
