import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

const BASE_URL = "https://doccrafttools.com";

// Dynamic sitemap that auto-discovers all routes with app/<route>/page.tsx
// and excludes low-value utility pages (search/status/about/language routes).
function getAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app");

  const ignoreFolders = new Set([
    "api",
    "_components",
    "components",
    "lib",
    "fonts",
  ]);

  const ignoreNames = new Set([
    "layout.tsx",
    "loading.tsx",
    "error.tsx",
    "not-found.tsx",
    "global-error.tsx",
    "sitemap.ts",
    "robots.ts",
    "favicon.ico",
  ]);

  const routes: string[] = [];

  function walk(dir: string) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name.startsWith("_") || ignoreFolders.has(entry.name)) continue;
        walk(fullPath);
        continue;
      }

      if (!entry.isFile()) continue;
      if (ignoreNames.has(entry.name)) continue;

      if (!/^page\.(tsx|ts|jsx|js)$/.test(entry.name)) continue;

      const relDir = path.relative(appDir, dir);

      // Remove route groups like (marketing)
      const clean = relDir
        .split(path.sep)
        .filter(Boolean)
        .filter((seg) => !(seg.startsWith("(") && seg.endsWith(")")))
        .join("/");

      const route = clean ? `/${clean}` : "/";
      routes.push(route);
    }
  }

  walk(appDir);

  return Array.from(new Set(routes)).sort();
}

function shouldExclude(route: string): boolean {
  const exact = new Set<string>(["/search", "/status", "/about", "/ar"]);
  if (exact.has(route)) return true;
  if (route.startsWith("/ar/")) return true;
  return false;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes().filter((r) => !shouldExclude(r));

  return routes.map((route) => ({
    url: `${BASE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route.includes("generator") ? 0.9 : 0.8,
  }));
}
