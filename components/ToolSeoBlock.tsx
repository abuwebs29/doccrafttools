import JsonLd from "@/components/JsonLd";
import type { TemplateId } from "@/lib/templateTypes";
import { buildFaqJsonLd, buildWebAppJsonLd, toolSchema } from "@/lib/schemaRegistry";
import { buildBreadcrumbsJsonLd, toolCrumbs } from "@/lib/breadcrumbs";

export default function ToolSeoBlock({ toolId }: { toolId: TemplateId }) {
  const t = toolSchema[toolId];
  const faqJsonLd = buildFaqJsonLd(toolId);
  const webAppJsonLd = buildWebAppJsonLd(toolId);
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd(toolCrumbs(toolId));

  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />

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
