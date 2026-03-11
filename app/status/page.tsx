import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  robots: { index: false, follow: false },
  title: "Status",
  description: "Service status and privacy-first statement for DocCraft Tools.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />

      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Status</h1>
        <p className="mt-3 text-slate-600">
          DocCraft Tools is a client-side document generator. PDFs are created locally in your browser.
        </p>

        <section className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-lg font-semibold">Current status</h2>
          <p className="mt-2 text-slate-700">✅ Online — If you can load this page, the website is reachable.</p>
          <p className="mt-2 text-sm text-slate-600">
            Note: PDF generation works offline once the page is loaded because it runs locally in your browser.
          </p>
        </section>

        <h2 className="mt-8 text-xl font-semibold">Privacy-first</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>No account required.</li>
          <li>No storage of your document fields on our servers.</li>
          <li>Optional logo uploads are processed locally to embed into your PDF.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Need help?</h2>
        <p className="mt-2 text-slate-600">
          Contact:{" "}
          <a className="font-semibold text-slate-900 hover:underline" href="mailto:contact@doccrafttools.com">
            contact@doccrafttools.com
          </a>
        </p>
      </article>

      <SiteFooter />
    </main>
  );
}
