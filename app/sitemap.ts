import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://doccrafttools.com";

const EXCLUDED_PREFIXES = ["/api", "/_", "/embed"];
const EXCLUDED_EXACT = new Set(["/search", "/status", "/invoice-generator-online-free"]);
const EXCLUDED_PATTERNS: RegExp[] = [];

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
  if (EXCLUDED_EXACT.has(route)) return true;
  if (EXCLUDED_PREFIXES.some((prefix) => route.startsWith(prefix))) return true;
  if (EXCLUDED_PATTERNS.some((pattern) => pattern.test(route))) return true;
  return false;
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

function getPriority(route: string): number {
  if (route === "/") return 1;
  if (["/invoice-generator", "/receipt-generator", "/quotation-generator", "/delivery-note-generator", "/rent-receipt-generator"].includes(route)) return 0.95;
  if (route.includes("template")) return 0.85;
  if (route.includes("invoice") || route.includes("receipt") || route.includes("quotation") || route.includes("delivery-note")) return 0.8;
  return 0.7;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = getRoutes(appDir, appDir).filter((route) => !shouldExclude(route));

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: getLastModifiedForRoute(route),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: getPriority(route),
  }));
}
