import JsonLd from "@/components/JsonLd";
import type { TemplateId } from "@/lib/templateTypes";
import { buildWebAppJsonLd } from "@/lib/schemaRegistry";
import { buildBreadcrumbsJsonLd, toolCrumbs } from "@/lib/breadcrumbs";

export default function ToolSeoBlock({ toolId }: { toolId: TemplateId }) {
  const webAppJsonLd = buildWebAppJsonLd(toolId);
  const breadcrumbsJsonLd = buildBreadcrumbsJsonLd(toolCrumbs(toolId));

  return (
    <>
      <JsonLd data={webAppJsonLd} />
      <JsonLd data={breadcrumbsJsonLd} />
    </>
  );
}
