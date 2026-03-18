import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  alternates: { canonical: "/disclaimer" },
  title: "Disclaimer",
  description: "Disclaimer for DocCraft Tools.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <SiteNav />
      <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-extrabold tracking-tight">Disclaimer</h1>
        <p className="mt-3 text-slate-600">
          DocCraft Tools provides document generators for convenience. You are responsible for verifying details
          and ensuring documents comply with your local requirements, accounting rules, or business policies.
        </p>
        <p className="mt-3 text-slate-600">
          We provide no warranties and accept no liability for losses arising from use of generated documents.
        </p>

        <h2 className="mt-8 text-xl font-semibold">Contact</h2>
        <p className="mt-2 text-slate-600">
          Email{" "}
          <a className="font-semibold text-slate-900 hover:underline" href="mailto:contact@doccrafttools.com">
            contact@doccrafttools.com
          </a>
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
