import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import TemplateEngine from "@/components/TemplateEngine";
import ToolSeoBlock from "@/components/ToolSeoBlock";
import ShareBar from "@/components/ShareBar";
import EmbedCodeBlock from "@/components/EmbedCodeBlock";
import InternalLinks from "@/components/InternalLinks";
import DownloadTemplates from "@/components/DownloadTemplates";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";
import RecentTracker from "@/components/RecentTracker";
import { templates } from "@/lib/templates";
import type { TemplateId } from "@/lib/templateTypes";

type FaqItem = { q: string; a: string };
type LinkItem = { href: string; label: string };

type ToolLandingPageProps = {
  title: string;
  description: string;
  path: string;
  templateId: TemplateId;
  toolId?: TemplateId;
  toolName: string;
  embedPath?: string;
  trackerTitle?: string;
  trustPoints?: string[];
  introTitle?: string;
  introParagraphs?: string[];
  includeTitle?: string;
  includeItems?: string[];
  useCasesTitle?: string;
  useCases?: { title: string; text: string }[];
  formatTitle?: string;
  formatParagraphs?: string[];
  faqs?: FaqItem[];
  relatedTitle?: string;
};

export function ToolLandingPage({
  title,
  description,
  path,
  templateId,
  toolId,
  toolName,
  embedPath,
  trackerTitle,
  trustPoints = [
    "No signup required",
    "Fast PDF export",
    "Works for freelancers and businesses",
    "Clean printable layout",
  ],
  introTitle,
  introParagraphs = [],
  includeTitle = "What to include",
  includeItems = [],
  useCasesTitle = "Who this page is for",
  useCases = [],
  formatTitle = "Why this page is useful",
  formatParagraphs = [],
  faqs = [],
  relatedTitle,
}: ToolLandingPageProps) {
  const template = templates[templateId];
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      {trackerTitle ? <RecentTracker title={trackerTitle} href={path} type="Tool" /> : null}
      <SiteNav />

      <header className="mb-8 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {trustPoints.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </header>

      <section className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Create faster</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use a structured layout instead of rebuilding documents from scratch every time.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Stay consistent</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Keep your branding, totals, and document structure clear across every client-facing file.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">Download instantly</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Build the document online and export a clean version that is ready to share or print.
          </p>
        </div>
      </section>

      <TemplateEngine template={template} />

      {(introTitle || introParagraphs.length > 0) ? (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {introTitle ? <h2 className="text-2xl font-semibold">{introTitle}</h2> : null}
          {introParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-slate-600">{paragraph}</p>
          ))}
        </section>
      ) : null}

      <section className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{includeTitle}</h2>
          <ul className="mt-4 space-y-3 text-slate-600">
            {includeItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{formatTitle}</h2>
          {formatParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-slate-600">{paragraph}</p>
          ))}
        </div>
      </section>

      {useCases.length > 0 ? (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">{useCasesTitle}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {useCases.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <DownloadTemplates />

      {faqs.length > 0 ? <PageFaq items={faqs} /> : null}

      <ShareBar title={title} path={path} description={description} />
      {embedPath ? <EmbedCodeBlock toolName={toolName} embedPath={embedPath} /> : null}
      {toolId ? <ToolSeoBlock toolId={toolId} /> : null}
      <InternalLinks currentPath={path} title={relatedTitle ?? "Related pages"} />
      <RelatedTools title={relatedTitle ? `${relatedTitle} and tools` : "Related tools, templates, and guides"} />
      <SiteFooter />
    </main>
  );
}

type ArticleSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type ArticleLandingPageProps = {
  title: string;
  description: string;
  path: string;
  category: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  highlights?: string[];
  sections: ArticleSection[];
  faqs?: FaqItem[];
  relatedTitle?: string;
  trackerTitle?: string;
};

export function ArticleLandingPage({
  title,
  description,
  path,
  category,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
  highlights = [],
  sections,
  faqs = [],
  relatedTitle,
  trackerTitle,
}: ArticleLandingPageProps) {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      {trackerTitle ? <RecentTracker title={trackerTitle} href={path} type="Guide" /> : null}
      <SiteNav />

      <header className="mb-8 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{category}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={ctaHref} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            {ctaLabel}
          </a>
          {secondaryHref && secondaryLabel ? (
            <a href={secondaryHref} className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50">
              {secondaryLabel}
            </a>
          ) : null}
        </div>
        {highlights.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                {item}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      {sections.map((section) => (
        <section key={section.title} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm first:mt-0">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-slate-600">{paragraph}</p>
          ))}
          {section.bullets && section.bullets.length > 0 ? (
            <ul className="mt-4 space-y-3 text-slate-600">
              {section.bullets.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-slate-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {faqs.length > 0 ? <PageFaq items={faqs} /> : null}
      <ShareBar title={title} path={path} description={description} />
      <InternalLinks currentPath={path} title={relatedTitle ?? "Related pages"} />
      <RelatedTools title={relatedTitle ? `${relatedTitle} and tools` : "Related tools, templates, and guides"} />
      <SiteFooter />
    </main>
  );
}
