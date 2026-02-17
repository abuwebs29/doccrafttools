"use client";

import { useMemo, useState } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import RecentlyUsed from "@/components/RecentlyUsed";
import { searchIndex } from "@/lib/searchIndex";

export const metadata = {
  title: "Search",
  description: "Search DocCraft Tools templates and guides.",
};

export default function Page() {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return searchIndex;

    const tokens = query.split(/\s+/).filter(Boolean);

    function score(item: (typeof searchIndex)[number]) {
      const hay = `${item.title} ${item.description} ${item.keywords.join(" ")}`.toLowerCase();
      let s = 0;
      if (item.title.toLowerCase() === query) s += 100;
      if (item.title.toLowerCase().includes(query)) s += 40;
      for (const t of tokens) {
        if (hay.includes(t)) s += 8;
        if (item.title.toLowerCase().includes(t)) s += 10;
      }
      return s;
    }

    return searchIndex
      .map((item) => ({ item, s: score(item) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .map((x) => x.item);
  }, [q]);

  const tools = results.filter((r) => r.type === "Tool");
  const guides = results.filter((r) => r.type === "Guide");

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <SiteNav />

      <header className="mb-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Search</h1>
        <p className="mt-2 max-w-2xl text-slate-600">
          Find templates and guides quickly. Try: <b>invoice</b>, <b>rent receipt</b>, <b>quotation</b>.
        </p>
      </header>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <label className="block text-sm font-semibold text-slate-700">Search</label>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search templates and guides…"
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
        />
        <div className="mt-3 text-xs text-slate-500">
          Tip: Keep it short. Example: “invoice pdf”, “payment receipt”, “delivery note”.
        </div>
      </div>

      <RecentlyUsed className="mt-8" />

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <ResultBlock title={`Tools (${tools.length})`} items={tools} />
        <ResultBlock title={`Guides (${guides.length})`} items={guides} />
      </section>

      <SiteFooter />
    </main>
  );
}

function ResultBlock({
  title,
  items,
}: {
  title: string;
  items: { title: string; description: string; href: string; type: string }[];
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-extrabold">{title}</h2>

      {items.length === 0 ? (
        <p className="mt-3 text-sm text-slate-600">No results. Try different keywords.</p>
      ) : (
        <div className="mt-4 space-y-3">
          {items.map((r) => (
            <a key={r.href} href={r.href} className="block rounded-xl border border-slate-200 p-4 hover:bg-slate-50">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-extrabold text-slate-900">{r.title}</div>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-700">
                  {r.type}
                </span>
              </div>
              <div className="mt-2 text-sm text-slate-600">{r.description}</div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
