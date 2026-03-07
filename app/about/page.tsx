import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import InternalLinks from "@/components/InternalLinks";

export const metadata = {
  title: "About DocCraft Tools",
  description: "DocCraft Tools helps freelancers and small businesses generate clean PDF documents instantly.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">About DocCraft Tools</h1>
        <p className="mt-3 text-slate-600">
          DocCraft Tools is a simple toolkit for generating professional PDF documents (invoice, receipt,
          quotation, delivery note, rent receipt) in seconds.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Privacy-first by design</h2>
        <p className="mt-2 text-slate-600">
          PDFs are generated in your browser. We don’t require accounts and we don’t store your form data on our servers.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600">
          Email: <a className="font-semibold text-slate-900 hover:underline" href="mailto:contact@doccrafttools.com">
            contact@doccrafttools.com
          </a>
        </p>
              <InternalLinks currentPath="/about" />
      </article>
      <SiteFooter />
    </main>
  );
}