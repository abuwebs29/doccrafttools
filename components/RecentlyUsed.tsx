"use client";

import { useEffect, useState } from "react";
import { clearRecents, getRecents, type RecentItem } from "@/lib/recents";

export default function RecentlyUsed({ className = "" }: { className?: string }) {
  const [items, setItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    setItems(getRecents());
  }, []);

  if (!items.length) return null;

  return (
    <section className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-semibold">Recently used</h2>
        <button
          onClick={() => {
            clearRecents();
            setItems([]);
          }}
          className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold hover:bg-slate-50"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {items.map((r) => (
          <a
            key={r.href}
            href={r.href}
            className="rounded-xl border border-slate-200 p-4 hover:bg-slate-50"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-sm font-extrabold text-slate-900">{r.title}</div>
              <span className="rounded-full bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-700">
                {r.type}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
