import { guides } from "@/lib/guides";
import { siteConfig } from "@/lib/siteConfig";

function escapeXml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const items = guides
    .map((g) => {
      const link = `${siteConfig.siteUrl}${g.path}`;
      const pubDate = new Date(g.date + "T00:00:00Z").toUTCString();
      return `
        <item>
          <title>${escapeXml(g.title)}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <description>${escapeXml(g.description)}</description>
          <pubDate>${pubDate}</pubDate>
        </item>
      `.trim();
    })
    .join("\n");

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>DocCraft Tools Guides</title>
        <link>${siteConfig.siteUrl}</link>
        <description>Guides and templates for invoices, receipts, quotations and business documents.</description>
        ${items}
      </channel>
    </rss>
  `.trim();

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
