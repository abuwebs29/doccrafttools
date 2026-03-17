import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { siteConfig } from "@/lib/siteConfig";

const EXCLUDED_ROUTES = new Set([
  "/search",
  "/status",
  "/rss.xml",
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

const LOW_PRIORITY_ROUTES = new Set(["/privacy", "/disclaimer", "/about", "/faq"]);

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
        .replace(/\/g, "/");

      routes.push(route === "" ? "/" : route);
    }
  }

  return routes;
}

function shouldExclude(route: string): boolean {
  if (!route) return true;
  if (route.startsWith("/api")) return true;
  if (route.startsWith("/_")) return true;
  if (route.startsWith("/embed")) return true;
  if (EXCLUDED_ROUTES.has(route)) return true;
  if (route.includes("[") || route.includes("]")) return true;
  return false;
}

function getLastModifiedForRoute(route: string): Date | undefined {
  try {
    const appDir = path.join(process.cwd(), "app");
    const routePath = route === "/" ? "" : route;
    const pagePath = path.join(appDir, routePath, "page.tsx");
    return fs.statSync(pagePath).mtime;
  } catch {
    return undefined;
  }
}

function getPriority(route: string): number {
  if (route === "/") return 1;
  if (route.includes("generator")) return 0.95;
  if (route.includes("template")) return 0.9;
  if (LOW_PRIORITY_ROUTES.has(route)) return 0.4;
  if (route.includes("vs") || route.includes("difference")) return 0.75;
  if (route.includes("how-to") || route.includes("guide")) return 0.75;
  return 0.8;
}

function getChangeFreq(route: string): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/") return "daily";
  if (route.includes("generator")) return "weekly";
  if (route.includes("template")) return "weekly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app");
  const routes = Array.from(new Set(getRoutes(appDir, appDir))).filter((r) => !shouldExclude(r));

  return routes.map((route) => {
    const lastModified = getLastModifiedForRoute(route);
    return {
      url: `${siteConfig.siteUrl}${route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: getChangeFreq(route),
      priority: getPriority(route),
    };
  });
}
