import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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
        disallow: [
          "/search",
          "/status",
          "/api/",
          "/_next/",
          "/embed/",
          "/invoice-generator-",
          "/receipt-generator-",
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
