import type { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const BASE_URL = "https://doccrafttools.com"

function getRoutes(dir: string, baseDir: string): string[] {
  const entries = fs.readdirSync(dir)
  let routes: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      routes = routes.concat(getRoutes(fullPath, baseDir))
    } else if (entry === "page.tsx") {
      const route = fullPath
        .replace(baseDir, "")
        .replace(/\/page\.tsx$/, "")
        .replace(/\\/g, "/")

      routes.push(route === "" ? "/" : route)
    }
  }

  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), "app")
  const routes = getRoutes(appDir, appDir)

  return routes
    .filter((route) => {
      // 🚫 EXCLUDE embed pages
      if (route.startsWith("/embed")) return false

      // 🚫 EXCLUDE system pages
      if (route.startsWith("/api")) return false
      if (route.startsWith("/_")) return false

      return true
    })
    .map((route) => ({
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "daily" : "weekly",
      priority: route === "/" ? 1 : 0.8,
    }))
}
