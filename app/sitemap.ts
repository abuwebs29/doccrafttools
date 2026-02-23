import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const BASE_URL = "https://doccrafttools.com"

function getAppRoutes(): string[] {
  const appDir = path.join(process.cwd(), "app")

  function walk(dir: string): string[] {
    const files = fs.readdirSync(dir)
    let routes: string[] = []

    for (const file of files) {
      const fullPath = path.join(dir, file)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        routes = routes.concat(walk(fullPath))
      } else if (file === "page.tsx") {
        const route = fullPath
          .replace(appDir, "")
          .replace(/\/page\.tsx$/, "")
          .replace(/\\/g, "/")

        routes.push(route === "" ? "/" : route)
      }
    }

    return routes
  }

  return walk(appDir)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = getAppRoutes()

  return routes
    // 🚫 Exclude low-value utility routes
    .filter(
      (route) =>
        !route.startsWith("/embed") &&
        !route.startsWith("/api") &&
        !route.startsWith("/_")
    )
    .map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "/" ? 1 : 0.8,
    }))
}
