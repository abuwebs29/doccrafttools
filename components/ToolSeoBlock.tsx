import JsonLd from "@/components/JsonLd";
import InternalLinks from "@/components/InternalLinks";
import type { TemplateId } from "@/lib/templateTypes";
import { buildFaqJsonLd, buildWebAppJsonLd, toolSchema } from "@/lib/schemaRegistry";
import { buildBreadcrumbsJsonLd, toolCrumbs } from "@/lib/breadcrumbs";

const TOOL_PATH: Record<TemplateId, string> = {
  invoice: "/invoice-generator",
  receipt: "/receipt-generator",
  quotation: "/quotation-generator",
  rent_receipt: "/rent-receipt-generator",
  delivery_note: "/delivery-note-generator",
};

const TOOL_CONTENT: Record<
  TemplateId,
  { title: string; p1: string; p2: string; bullets: string[] }
> = {
  invoice: {
    title: "What is an invoice?",
    p1: "An invoice is a formal document used to request payment for goods or services. It includes your business details, the client’s details, an invoice number, dates, a list of items or services, totals, and any applicable taxes.",
    p2: "Use an invoice after you deliver a service or product so your customer can pay you on time. A clear invoice helps you track revenue, avoid payment confusion, and keep clean records for bookkeeping and tax purposes.",
    bullets: [
      "Auto-calculate totals and optional tax",
      "Add your logo, notes, and payment terms",
      "Generate a clean PDF instantly (no login)",
      "Works for services, freelance work, and small businesses",
    ],
  },
  receipt: {
    title: "What is a receipt?",
    p1: "A receipt is proof that a payment was made. It usually includes the payer and payee names, date, amount paid, payment method, and what the payment was for.",
    p2: "Use a receipt after a customer pays you — it confirms the transaction and helps both sides with records and refunds. Receipts are especially useful for cash payments and expense reporting.",
    bullets: [
      "Create printable receipts in seconds",
      "Include payment method and reference details",
      "Download a clean PDF instantly (no login)",
      "Great for cash payments, deposits, and small shops",
    ],
  },
  quotation: {
    title: "What is a quotation?",
    p1: "A quotation is a price offer sent to a potential customer before work starts. It typically includes itemized pricing, quantities, scope, validity date, and optional terms.",
    p2: "Use a quotation when you want the client to approve pricing in advance. Once accepted, you can convert it into an invoice and keep the workflow consistent.",
    bullets: [
      "Present professional itemized pricing",
      "Add validity date and optional notes",
      "Download as PDF instantly (no login)",
      "Helpful for freelancers and service providers",
    ],
  },
  delivery_note: {
    title: "What is a delivery note?",
    p1: "A delivery note confirms goods were delivered to a customer. It commonly includes sender/receiver details, delivery date, item list, quantities, and signature fields.",
    p2: "Use a delivery note when you dispatch or deliver products. It helps reduce disputes by clearly listing what was delivered and when.",
    bullets: [
      "List items and quantities clearly",
      "Add your branding and delivery details",
      "Download a clean PDF instantly (no login)",
      "Useful for small businesses and logistics",
    ],
  },
  rent_receipt: {
    title: "What is a rent receipt?",
    p1: "A rent receipt is proof that rent has been paid. It includes landlord and tenant details, the rental property address, the rent period, amount paid, and payment date.",
    p2: "Use a rent receipt for monthly rent payments to keep records, support reimbursement, or meet local documentation requirements. It’s especially helpful when rent is paid in cash.",
    bullets: [
      "Generate rent receipts for any rent period",
      "Include property address and payment method",
      "Download as PDF instantly (no login)",
      "Great for tenants, landlords, and property managers",
    ],
  },
};

export default function ToolSeoBlock({ toolId }: { toolId: TemplateId }) {
  const t = toolSchema[toolId];
  const faqJsonLd = buildFaqJsonLd(toolId);
  const webAppJsonLd = buildWebAppJsonLd(toolId);
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd(toolCrumbs(toolId));

  const c = TOOL_CONTENT[toolId];
  const currentPath = TOOL_PATH[toolId];

  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

      {/* Phase 1 + 2: Helpful content + internal links under the tool */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">{c.title}</h2>
        <p className="mt-3 text-slate-600">{c.p1}</p>
        <p className="mt-3 text-slate-600">{c.p2}</p>

        <h3 className="mt-6 font-semibold text-slate-900">Why use this generator?</h3>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-slate-600">
          {c.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <InternalLinks currentPath={currentPath} title="Related pages" />

      {/* FAQs + schema */}
      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">FAQs</h2>
        <div className="mt-4 space-y-3">
          {t.faq.map((f, idx) => (
            <details key={idx} className="rounded-xl border border-slate-200 p-4">
              <summary className="cursor-pointer font-semibold text-slate-900">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
