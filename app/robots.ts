import type { MetadataRoute } from "next";

const BASE_URL = "https://doccrafttools.com";

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

    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
