import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about DocCraft Tools: pricing, privacy, data storage, printing and more.",
};

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Is DocCraft Tools free?", acceptedAnswer: { "@type": "Answer", text: "Yes. You can generate and download PDFs for free." } },
      { "@type": "Question", name: "Do you store my invoice or receipt data?", acceptedAnswer: { "@type": "Answer", text: "No. PDFs are generated locally in your browser and we do not store your form inputs on our servers." } },
      { "@type": "Question", name: "Can I add my logo to the PDF?", acceptedAnswer: { "@type": "Answer", text: "Yes. Upload a logo and it will be embedded into the PDF during generation." } },
      { "@type": "Question", name: "Does it work on mobile?", acceptedAnswer: { "@type": "Answer", text: "Yes. The tools are designed to work on mobile and desktop." } },
      { "@type": "Question", name: "Can I print the PDFs?", acceptedAnswer: { "@type": "Answer", text: "Yes. The PDFs are formatted for clean printing on standard A4 pages." } },
      { "@type": "Question", name: "What documents can I generate?", acceptedAnswer: { "@type": "Answer", text: "Invoices, receipts, quotations/estimates, delivery notes, and rent receipts." } },
    ],
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <JsonLd data={faqJsonLd} />
      <SiteNav />

      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">FAQ</h1>
        <p className="mt-3 text-slate-600">
          Quick answers about DocCraft Tools — privacy, pricing, printing, and how the generators work.
        </p>

        <div className="mt-8 space-y-3">
          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">Is DocCraft Tools free?</summary>
            <p className="mt-2 text-sm text-slate-600">Yes. You can generate and download PDFs for free.</p>
          </details>

          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">Do you store my invoice or receipt data?</summary>
            <p className="mt-2 text-sm text-slate-600">
              No. PDFs are generated locally in your browser and we do not store your form inputs on our servers.
            </p>
          </details>

          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">Can I add my logo to the PDF?</summary>
            <p className="mt-2 text-sm text-slate-600">Yes. Upload a logo and it will be embedded into the PDF.</p>
          </details>

          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer font-semibold text-slate-900">Can I print the PDFs?</summary>
            <p className="mt-2 text-sm text-slate-600">Yes. The PDFs are formatted for clean A4 printing.</p>
          </details>
        </div>

        <section className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold">Start here</h2>
          <div className="mt-3 grid gap-2 text-sm">
            <a className="font-semibold text-slate-900 hover:underline" href="/invoice-generator">Invoice Generator →</a>
            <a className="font-semibold text-slate-900 hover:underline" href="/receipt-generator">Receipt Generator →</a>
            <a className="font-semibold text-slate-900 hover:underline" href="/quotation-generator">Quotation Generator →</a>
            <a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">All PDF Templates →</a>
            <a className="font-semibold text-slate-900 hover:underline" href="/guides">Guides →</a>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}
