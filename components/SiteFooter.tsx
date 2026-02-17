export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-semibold text-slate-700">DocCraft Tools</span> — Free PDF templates generated instantly.
        </div>
        <div className="flex flex-wrap gap-3">
          <a className="hover:text-slate-800" href="/guides">Guides</a>
          <a className="hover:text-slate-800" href="/search">Search</a>
          <a className="hover:text-slate-800" href="/rss.xml">RSS</a>
          <a className="hover:text-slate-800" href="/about">About</a>
          <a className="hover:text-slate-800" href="/privacy">Privacy</a>
          <a className="hover:text-slate-800" href="/disclaimer">Disclaimer</a>
          <a className="hover:text-slate-800" href="mailto:contact@doccrafttools.com">contact@doccrafttools.com</a>
        </div>
      </div>
      <p className="mt-3">
        Note: Documents are generated locally in your browser. Verify details before issuing official documents.
      </p>
    </footer>
  );
}
