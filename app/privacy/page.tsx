import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy",
  description: "Privacy policy for DocCraft Tools.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-slate-600">
          DocCraft Tools is built to be privacy-first. Documents are generated locally in your browser.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Data we process</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
          <li>Form inputs you type are processed locally to generate a PDF.</li>
          <li>Optional logos you upload are processed locally to embed into the PDF.</li>
        </ul>

        <h2 className="mt-8 text-xl font-semibold">Data we store</h2>
        <p className="mt-2 text-slate-600">
          We do not store your document content on our servers. If we use analytics, it may collect
          aggregated usage signals (e.g., page views) without storing your document fields.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600">
          Questions? Email{" "}
          <a className="font-semibold text-slate-900 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
