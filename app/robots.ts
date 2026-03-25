import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
<<<<<<< HEAD
        allow: "/",
        disallow: ["/search", "/api/", "/_next/", "/embed/"],
=======
        allow: [
          "/",
          "/invoice-generator",
          "/receipt-generator",
          "/quotation-generator",
          "/delivery-note-generator",
          "/rent-receipt-generator",
          "/pdf-templates",
        ],
        disallow: [
          "/search",
          "/status",
          "/api/",
          "/_next/",
          "/embed/",
          "/invoice-generator-",
          "/receipt-generator-",
        ],
>>>>>>> 25b8b526da89e5a2987f60196f3fcc87c402283e
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
