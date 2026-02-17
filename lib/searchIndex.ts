import { guides } from "@/lib/guides";
import { toolSchema } from "@/lib/schemaRegistry";
import type { TemplateId } from "@/lib/templateTypes";

type SearchItem = {
  title: string;
  description: string;
  href: string;
  type: "Tool" | "Guide";
  keywords: string[];
};

const toolIds: TemplateId[] = ["invoice", "receipt", "quotation", "delivery_note", "rent_receipt"];

export const searchIndex: SearchItem[] = [
  ...toolIds.map((id) => {
    const t = toolSchema[id];
    const keywords =
      id === "invoice"
        ? ["invoice", "invoice generator", "invoice template pdf", "bill", "tax", "items", "a4"]
        : id === "receipt"
        ? ["receipt", "payment receipt", "receipt template pdf", "cash receipt", "proof of payment"]
        : id === "quotation"
        ? ["quotation", "estimate", "quote", "quotation template", "pricing", "valid until"]
        : id === "delivery_note"
        ? ["delivery note", "dn", "delivery challan", "goods received", "shipment", "reference"]
        : ["rent receipt", "rental receipt", "tenant", "landlord", "rent period", "property"];

    return {
      title: t.appName,
      description: t.description,
      href: t.canonicalPath,
      type: "Tool" as const,
      keywords,
    };
  }),

  ...guides.map((g) => ({
    title: g.title,
    description: g.description,
    href: g.path,
    type: "Guide" as const,
    keywords: [
      ...g.title.toLowerCase().split(/\s+/).filter(Boolean),
      ...g.description.toLowerCase().split(/\s+/).filter(Boolean),
    ],
  })),
];
