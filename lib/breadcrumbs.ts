import type { TemplateId } from "@/lib/templateTypes";
import { toolSchema } from "@/lib/schemaRegistry";

const site = "https://doccrafttools.com";

type Crumb = { name: string; path: string };

export function buildBreadcrumbsJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: c.name,
      item: `${site}${c.path}`,
    })),
  };
}

export function toolCrumbs(toolId: TemplateId): Crumb[] {
  const t = toolSchema[toolId];
  return [
    { name: "Home", path: "/" },
    { name: "PDF Templates", path: "/pdf-templates" },
    { name: t.appName, path: t.canonicalPath },
  ];
}

export function guideCrumbs(title: string, path: string): Crumb[] {
  return [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: title, path },
  ];
}
