import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SearchClient from "@/app/search/SearchClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/search");

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Search</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Find templates and guides quickly. Try: <b>invoice</b>, <b>rent receipt</b>, <b>quotation</b>.
        </p>
      </header>

      <SearchClient />

      <SiteFooter />
    </main>
  );
}