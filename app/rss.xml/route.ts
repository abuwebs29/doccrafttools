import { guides } from "@/lib/guides";
import { SITE_URL } from "@/lib/site";

function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const items = [...guides]
    .sort((a, b) => b.date.localeCompare(a.date))
    .map((g) => {
      const link = `${SITE_URL}${g.path}`;
      const pubDate = new Date(`${g.date}T00:00:00Z`).toUTCString();
      return [
        "<item>",
        `  <title>${escapeXml(g.title)}</title>`,
        `  <link>${link}</link>`,
        `  <guid>${link}</guid>`,
        `  <description>${escapeXml(g.description)}</description>`,
        `  <pubDate>${pubDate}</pubDate>`,
        "</item>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    '  <channel>',
    '    <title>DocCraft Tools Guides</title>',
    `    <link>${SITE_URL}</link>`,
    '    <description>Guides and templates for invoices, receipts, quotations and business documents.</description>',
    items,
    '  </channel>',
    '</rss>',
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
