import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://doccrafttools.com";

const EXCLUDED_ROUTES = new Set([
  "/search",
  "/status",
  "/invoice-generator-online-free",
  "/invoice-generator-usd",
  "/invoice-generator-gbp",
  "/invoice-generator-eur",
  "/invoice-generator-inr",
  "/invoice-generator-aud",
  "/invoice-generator-cad",
  "/invoice-generator-pkr",
  "/invoice-generator-sar",
  "/invoice-generator-usa",
  "/invoice-generator-uk",
  "/invoice-generator-india",
  "/invoice-generator-saudi-arabia",
  "/invoice-generator-uae",
  "/receipt-generator-usd",
  "/receipt-generator-gbp",
  "/receipt-generator-eur",
  "/receipt-generator-inr",
  "/receipt-generator-sar",
]);

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
  if (route.startsWith("/api")) return true;
  if (route.startsWith("/_")) return true;
  if (route.startsWith("/embed")) return true;
  if (route === "/rss.xml") return true;
  return EXCLUDED_ROUTES.has(route);
}

function getLastModifiedForRoute(route: string): Date {
  try {
    const appDir = path.join(process.cwd(), "app");
    const routePath = route === "/" ? "" : route;
    const pagePath = path.join(appDir, routePath, "page.tsx");
    const stat = fs.statSync(pagePath);
    return stat.mtime;
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = getRoutes(appDir, appDir).filter((r) => !shouldExclude(r));

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: getLastModifiedForRoute(route),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority:
      route === "/"
        ? 1
        : route.includes("generator")
        ? 0.9
        : route.includes("template")
        ? 0.85
        : 0.8,
  }));
}
