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
import { ExamplePreview, InlineLinks, SeoBlock } from "@/components/SeoRankComponents";
import { BreadcrumbSchema } from "@/components/SeoSchema";
import { templates } from "@/lib/templates";
import type { TemplateId } from "@/lib/templateTypes";

type FaqItem = { q: string; a: string };

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

function inferVariant(path: string): string {
  if (path.includes("invoice-format-uae") || path.includes("-uae")) return "uae";
  if (path.includes("freelancer")) return "freelancer";
  if (path.includes("consultant")) return "consultant";
  if (path.includes("rent")) return "rent";
  if (path.includes("business-receipt")) return "business";
  return "default";
}

function inferTopic(path: string): "invoice" | "receipt" | "quotation" | "delivery-note" {
  if (path.includes("receipt")) return "receipt";
  if (path.includes("quotation") || path.includes("estimate")) return "quotation";
  if (path.includes("delivery-note")) return "delivery-note";
  return "invoice";
}

function getLastUpdatedLabel(): string {
  return "Last updated: March 2026";
}

function buildBreadcrumbs(title: string, path: string) {
  return [
    { name: "Home", item: "https://doccrafttools.com/" },
    { name: title, item: `https://doccrafttools.com${path}` },
  ];
}

function getContextBlocks(path: string): ArticleSection[] {
  if (path.includes("invoice-format-uae") || path.includes("-uae")) {
    return [
      {
        title: "UAE invoice requirements",
        paragraphs: [
          "UAE invoices usually need supplier details, customer details, invoice number, invoice date, clear line items, tax amount, and the total payable amount.",
          "If your business is VAT-registered, include the TRN, VAT breakdown, and wording that makes the tax treatment easy for the customer to review.",
        ],
      },
    ];
  }

  if (path.includes("freelancer")) {
    return [
      {
        title: "Freelancer billing tips",
        paragraphs: [
          "Freelancers usually need service descriptions, project dates, quantity or hours, rate, subtotal, and a clear payment deadline.",
          "It also helps to add the preferred payment method and a short note explaining what the billed work covered.",
        ],
      },
    ];
  }

  if (path.includes("consultant")) {
    return [
      {
        title: "Consultant invoice tips",
        paragraphs: [
          "Consultant invoices work best when line items clearly describe the advisory scope, milestone, retainer period, or workshop session being billed.",
          "Use clear payment terms, references, and date ranges so the client can approve the invoice without asking for more detail.",
        ],
      },
    ];
  }

  if (path.includes("rent")) {
    return [
      {
        title: "Rent receipt tips",
        paragraphs: [
          "Rent receipts should clearly show the tenant, landlord, property reference, payment period, payment date, and the amount received.",
          "If you collect deposits, partial rent, or utility charges, list them separately so the record is easy to verify later.",
        ],
      },
    ];
  }

  return [
    {
      title: "Best practices for cleaner documents",
      paragraphs: [
        "Use clear labels, consistent numbering, and simple wording so the document is easy to review and less likely to trigger payment questions.",
        "When possible, pair the educational page with the related generator or template so users can move from information to action quickly.",
      ],
    },
  ];
}

function getEnhancedFaqs(path: string, title: string, incoming: FaqItem[]): FaqItem[] {
  if (incoming.length >= 5) return incoming;

  const fallback: FaqItem[] = [];
  const topic = inferTopic(path);

  if (path.includes("invoice-format-uae") || path.includes("-uae")) {
    fallback.push(
      { q: "What should a UAE invoice include?", a: "A UAE invoice should usually include supplier details, customer details, invoice number, invoice date, line items, VAT amount when applicable, and the final total." },
      { q: "Do UAE invoices need a TRN?", a: "If the supplier is VAT-registered, the invoice should normally show the supplier TRN and tax breakdown clearly." },
    );
  }

  if (path.includes("freelancer")) {
    fallback.push(
      { q: "What should a freelancer invoice include?", a: "Freelancer invoices should include the service provided, quantity or hours, rate, tax if applicable, invoice date, due date, and payment method." },
      { q: "Can freelancers use invoice templates?", a: "Yes. A template helps freelancers keep numbering, service descriptions, and totals consistent across client work." },
    );
  }

  if (path.includes("consultant")) {
    fallback.push(
      { q: "How should consultants describe billed work?", a: "Consultants should describe the advisory scope, milestone, retainer period, or deliverable clearly so the client can match the invoice to the engagement." },
      { q: "Do consultant invoices need payment terms?", a: "Yes. Clear payment terms make approval faster and reduce disputes about deadlines or late fees." },
    );
  }

  if (path.includes("rent")) {
    fallback.push(
      { q: "What should a rent receipt include?", a: "A rent receipt should show the tenant name, landlord name, property or unit reference, payment period, payment date, amount received, and payment method." },
      { q: "Is a rent receipt different from an invoice?", a: "Yes. A rent receipt records that payment was received, while an invoice requests payment." },
    );
  }

  if (topic === "invoice") {
    fallback.push(
      { q: "What is a valid invoice number format?", a: "Invoice numbers should be unique, consistent, and easy to trace in your records. Many businesses use sequential numbering with a prefix or year marker." },
      { q: "What should an invoice include?", a: "A complete invoice should include supplier details, client details, invoice date, invoice number, line items, taxes, total amount due, and payment terms." },
      { q: "Can I export this invoice as PDF?", a: "Yes. The generator and template pages are designed to help users create a clean PDF that can be shared or printed." },
    );
  }

  if (topic == "receipt") {
    fallback.push(
      { q: "What should a receipt include?", a: "A receipt should include the payer, payee, payment date, amount received, payment purpose, and a simple reference or signature where needed." },
      { q: "Can I print the receipt after creating it?", a: "Yes. The receipt pages are designed for quick generation and printable export." },
    );
  }

  if (topic == "quotation") {
    fallback.push(
      { q: "What is the difference between a quotation and an invoice?", a: "A quotation is shared before work starts to outline price and scope, while an invoice is sent after work or delivery to request payment." },
      { q: "What should a quotation include?", a: "A quotation should usually include the client, scope, validity period, pricing, terms, and approval details." },
    );
  }

  return [...incoming, ...fallback].slice(0, 8);
}

function renderSection(section: ArticleSection) {
  return (
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
  );
}

export function ToolLandingPage(props: ToolLandingPageProps) {
  const {
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
  } = props;

  const template = templates[templateId];
  const variant = inferVariant(path);
  const topic = inferTopic(path);
  const mergedFaqs = getEnhancedFaqs(path, title, faqs);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <BreadcrumbSchema items={buildBreadcrumbs(title, path)} />
      {trackerTitle ? <RecentTracker title={trackerTitle} href={path} type="Tool" /> : null}
      <SiteNav />

      <header className="mb-8 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
        <div className="max-w-3xl">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
          <p className="mt-2 text-sm text-slate-500">{getLastUpdatedLabel()}</p>
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
      <ExamplePreview variant={variant} />

      {(introTitle || introParagraphs.length > 0) ? (
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          {introTitle ? <h2 className="text-2xl font-semibold">{introTitle}</h2> : null}
          {introParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-3 text-slate-600">{paragraph}</p>
          ))}
          <div className="mt-3 text-slate-600">
            <InlineLinks topic={topic} />
          </div>
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
          <div className="mt-4 text-slate-600">
            <InlineLinks topic={topic} />
          </div>
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

      {getContextBlocks(path).map(renderSection)}

      <SeoBlock title="How to use this page effectively">
        <p>
          Start with the live tool or template, fill in the core fields carefully, review the example preview, and then export the finished document in the format you want to share.
        </p>
        <InlineLinks topic={topic} />
      </SeoBlock>

      <DownloadTemplates />

      {mergedFaqs.length > 0 ? <PageFaq items={mergedFaqs} /> : null}

      <ShareBar title={title} path={path} description={description} />
      {embedPath ? <EmbedCodeBlock toolName={toolName} embedPath={embedPath} /> : null}
      {toolId ? <ToolSeoBlock toolId={toolId} /> : null}
      <InternalLinks currentPath={path} title={relatedTitle ?? "Related pages"} />
      <RelatedTools title={relatedTitle ?? "Related tools, templates, and guides"} />
      <SiteFooter />
    </main>
  );
}

export function ArticleLandingPage(props: ArticleLandingPageProps) {
  const {
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
  } = props;

  const topic = inferTopic(path);
  const variant = inferVariant(path);
  const mergedFaqs = getEnhancedFaqs(path, title, faqs);
  const mergedSections = [...sections, ...getContextBlocks(path)];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <BreadcrumbSchema items={buildBreadcrumbs(title, path)} />
      {trackerTitle ? <RecentTracker title={trackerTitle} href={path} type="Guide" /> : null}
      <SiteNav />

      <header className="mb-8 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{category}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>
        <p className="mt-2 text-sm text-slate-500">{getLastUpdatedLabel()}</p>
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

      <ExamplePreview variant={variant} />

      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">Quick path to action</h2>
        <div className="mt-3 text-slate-600">
          <InlineLinks topic={topic} />
        </div>
      </section>

      {mergedSections.map(renderSection)}

      <SeoBlock title="Use this guide with the related tools">
        <p>
          The strongest pages combine explanation, example output, and a direct route into the generator or template. Review the sample, confirm the required fields, and then create your own version.
        </p>
        <InlineLinks topic={topic} />
      </SeoBlock>

      {mergedFaqs.length > 0 ? <PageFaq items={mergedFaqs} /> : null}
      <ShareBar title={title} path={path} description={description} />
      <InternalLinks currentPath={path} title={relatedTitle ?? "Related pages"} />
      <RelatedTools title={relatedTitle ?? "Related tools, templates, and guides"} />
      <SiteFooter />
    </main>
  );
}
