import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/invoice-generator",
          "/receipt-generator",
          "/quotation-generator",
          "/delivery-note-generator",
          "/rent-receipt-generator",
          "/pdf-templates",
        ],
        disallow: ["/search", "/status", "/api/", "/_next/", "/embed/"],
      },
    ],
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
    host: siteConfig.siteUrl,
  };
}
