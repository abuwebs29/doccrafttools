"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function EmbedCodeBlock({
  toolName,
  embedPath,
  defaultHeight = 760,
}: {
  toolName: string;
  embedPath: string;
  defaultHeight?: number;
}) {
  const [height, setHeight] = useState(defaultHeight);
  const [copied, setCopied] = useState(false);

  const fullUrl = useMemo(() => {
    if (typeof window === "undefined") return `${siteConfig.siteUrl}${embedPath}`;
    return `${window.location.origin}${embedPath}`;
  }, [embedPath]);

  const code = useMemo(() => {
    return `<iframe src="${fullUrl}" width="100%" height="${height}" style="border:0;border-radius:12px;overflow:hidden" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<p style="font:14px system-ui, -apple-system, Segoe UI, Roboto; margin:8px 0 0; color:#64748b">
  Powered by <a href="${siteConfig.siteUrl}" target="_blank" rel="noreferrer" style="color:#0f172a;font-weight:700;text-decoration:none">DocCraft Tools</a>
</p>`;
  }, [fullUrl, height]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      const el = document.createElement("textarea");
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-extrabold text-slate-900">Embed this tool</h2>
          <p className="mt-1 text-sm text-slate-600">
            Add the {toolName} to your website using an iframe.
          </p>
        </div>

        <button onClick={copy} className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
          {copied ? "Copied!" : "Copy embed code"}
        </button>
      </div>

      <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center">
        <label className="text-sm font-semibold text-slate-700">
          Height (px)
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="ml-3 w-28 rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </label>

        <a href={embedPath} className="text-sm font-semibold text-slate-900 hover:underline" target="_blank" rel="noreferrer">
          Preview embed page →
        </a>
      </div>

      <textarea readOnly value={code} className="mt-4 h-44 w-full rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 outline-none" />

      <div className="mt-4 rounded-xl border border-slate-200 p-4">
        <div className="text-sm font-semibold text-slate-800">Live preview</div>
        <div className="mt-3 overflow-hidden rounded-xl border border-slate-200">
          <iframe src={embedPath} width="100%" height={height} style={{ border: 0 }} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
