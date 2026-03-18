"use client";

import { useMemo, useState } from "react";

function encode(s: string) {
  return encodeURIComponent(s);
}

export default function ShareBar({
  title,
  path,
  description,
}: {
  title: string;
  path: string;
  description?: string;
}) {
  const [copied, setCopied] = useState(false);

  const url = useMemo(() => {
    if (typeof window === "undefined") return `https://doccrafttools.com${path}`;
    const base = window.location.origin;
    return `${base}${path}`;
  }, [path]);

  const text = useMemo(() => {
    const d = description ? ` — ${description}` : "";
    return `${title}${d} (${url})`;
  }, [title, description, url]);

  const wa = `https://wa.me/?text=${encode(text)}`;
  const x = `https://twitter.com/intent/tweet?text=${encode(text)}`;
  const li = `https://www.linkedin.com/sharing/share-offsite/?url=${encode(url)}`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      const el = document.createElement("textarea");
      el.value = url;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }
  }

  async function nativeShare() {
    // @ts-ignore
    if (navigator.share) {
      try {
        // @ts-ignore
        await navigator.share({ title, text: description || title, url });
      } catch {}
    } else {
      copy();
    }
  }

  return (
    <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-extrabold text-slate-900">Share this tool</h2>
          <p className="mt-1 text-sm text-slate-600">Help others find it.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button onClick={copy} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50">
            {copied ? "Copied!" : "Copy link"}
          </button>

          <button onClick={nativeShare} className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white hover:bg-slate-800">
            Share
          </button>

          <a href={wa} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50">
            WhatsApp
          </a>
          <a href={li} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50">
            LinkedIn
          </a>
          <a href={x} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold hover:bg-slate-50">
            X
          </a>
        </div>
      </div>

      <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs text-slate-600">
        <div className="font-semibold text-slate-800">Share text</div>
        <div className="mt-1 break-words">{text}</div>
      </div>
    </section>
  );
}
