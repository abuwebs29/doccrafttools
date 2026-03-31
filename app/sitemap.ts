import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

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

const LOW_PRIORITY_ROUTES = new Set([
  "/privacy",
  "/disclaimer",
  "/about",
  "/faq",
]);

const ROUTES = [
  "/",
  "/about",
  "/ar",
  "/ar/pdf-templates",
  "/blank-receipt-template",
  "/business-documents",
  "/business-receipt-template",
  "/cash-receipt-template",
  "/commercial-invoice-template",
  "/delivery-note-format",
  "/delivery-note-generator",
  "/delivery-note-sample",
  "/delivery-note-vs-invoice",
  "/difference-between-invoice-and-receipt",
  "/disclaimer",
  "/estimate-vs-invoice",
  "/estimate-vs-quotation",
  "/faq",
  "/freelance-invoice-template",
  "/gst-invoice-generator",
  "/guides",
  "/how-to-make-an-invoice",
  "/how-to-make-an-invoice-for-freelancer",
  "/how-to-write-receipt",
  "/invoice-due-date-meaning",
  "/invoice-for-consultants",
  "/invoice-for-freelancers",
  "/invoice-for-services",
  "/invoice-format",
  "/invoice-format-uae",
  "/invoice-format-uk",
  "/invoice-generator",
  "/invoice-number-format",
  "/invoice-payment-terms-explained",
  "/invoice-sample",
  "/invoice-template",
  "/invoice-template-excel",
  "/invoice-template-pdf",
  "/invoice-template-pdf-free-download",
  "/invoice-template-word",
  "/invoice-vs-quotation",
  "/invoice-vs-receipt-difference",
  "/payment-receipt-format",
  "/pdf-templates",
  "/privacy",
  "/proforma-invoice-template",
  "/proforma-vs-invoice",
  "/quotation-generator",
  "/quotation-sample",
  "/receipt-for-business",
  "/receipt-for-rent",
  "/receipt-generator",
  "/receipt-sample",
  "/receipt-template",
  "/receipt-template-excel",
  "/receipt-template-pdf",
  "/receipt-template-word",
  "/receipt-vs-invoice",
  "/rent-receipt-format",
  "/rent-receipt-generator",
  "/rent-receipt-template",
  "/simple-invoice-format",
  "/simple-invoice-template",
  "/tax-invoice-template",
  "/what-is-a-tax-invoice",
];

function getPriority(route: string): number {
  if (route === "/") return 1;
  if (route.includes("generator")) return 0.95;
  if (route.includes("template")) return 0.9;
  if (LOW_PRIORITY_ROUTES.has(route)) return 0.4;
  if (route.includes("vs") || route.includes("difference")) return 0.75;
  if (route.includes("how-to") || route.includes("guide")) return 0.75;
  return 0.8;
}

function getChangeFreq(
  route: string
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/") return "daily";
  if (route.includes("generator")) return "weekly";
  if (route.includes("template")) return "weekly";
  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return ROUTES.filter((route) => !EXCLUDED_ROUTES.has(route)).map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: getChangeFreq(route),
    priority: getPriority(route),
  }));
}