import type { MetadataRoute } from "next";

const base = "https://doccrafttools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    "/",
    "/pdf-templates",
    "/business-documents",
    "/guides",
    "/search",
    "/faq",
    "/status",
    "/about",
    "/privacy",
    "/disclaimer",
    "/rss.xml",

    "/invoice-generator",
    "/receipt-generator",
    "/quotation-generator",
    "/delivery-note-generator",
    "/rent-receipt-generator",

    "/invoice-template-pdf",
    "/invoice-format",
    "/how-to-make-an-invoice",
    "/simple-invoice-template",

    "/receipt-template-pdf",
    "/payment-receipt-format",
    "/rent-receipt-template",

    "/embed/invoice",
    "/embed/receipt",
    "/embed/quotation",
    "/embed/delivery-note",
    "/embed/rent-receipt",

    "/ar",
    "/ar/pdf-templates",
  ];

  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : p.includes("generator") ? 0.9 : 0.7,
  }));
}
