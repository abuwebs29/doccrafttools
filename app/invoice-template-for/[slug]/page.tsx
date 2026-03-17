import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import RelatedTools from "@/components/RelatedTools";
import PageFaq from "@/components/PageFaq";
import { invoiceUseCaseSlugs, titleFromSlug } from "@/lib/programmaticSeo";

export function generateStaticParams() {
  return invoiceUseCaseSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const title = titleFromSlug(params.slug);
  return {
    title: `Invoice Template for ${title}`,
    description: `Use a free invoice template built for ${title.toLowerCase()}. Learn what to include, how to bill clearly, and when to use the generator instead of a static template.`,
    alternates: { canonical: `/invoice-template-for/${params.slug}` },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const title = titleFromSlug(params.slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <SiteNav />
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Invoice Template for {title}</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          Use this free invoice template designed for {title.toLowerCase()}. It gives you a clean structure for billing clients, defining payment terms, and keeping records organized.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold">What to include</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
          <li>Your business details, client details, and invoice number</li>
          <li>A clear description of the work or deliverable</li>
          <li>Rates, quantities, taxes, and payment due date</li>
          <li>Accepted payment methods and any late-payment policy</li>
        </ul>
        <h2 className="mt-6 text-xl font-semibold">When a template works best</h2>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          A reusable template is ideal when you send similar invoices regularly. If you want automatic totals, cleaner branding, and instant PDF export, use the online invoice generator.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link href="/invoice-generator" className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">Create invoice online</Link>
          <Link href="/invoice-template" className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900">View all invoice templates</Link>
        </div>
      </section>

      <PageFaq
        items={[
          { q: `Can I use this invoice template for ${title.toLowerCase()} work?`, a: `Yes. The structure works for ${title.toLowerCase()} billing as long as you customize the service description, pricing, and payment terms.` },
          { q: "Should I use a template or a generator?", a: "Use a template if you need a static layout. Use the generator if you want automatic totals, easier edits, and instant PDF downloads." },
        ]}
      />
      <RelatedTools />
      <SiteFooter />
    </main>
  );
}
