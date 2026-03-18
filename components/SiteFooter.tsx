import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200 pt-10 text-xs text-slate-500">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-sm font-extrabold text-slate-900">{SITE_NAME}</div>
          <p className="mt-2 text-sm text-slate-600">
            Free PDF templates generated instantly — no login. Documents are created locally in your browser.
          </p>
          <p className="mt-3 text-sm">
            <a className="font-semibold text-slate-900 hover:underline" href="/pdf-templates">
              Browse all templates →
            </a>
          </p>
        </div>

        <div>
          <div className="text-sm font-bold text-slate-900">Popular tools</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-slate-800 hover:underline" href="/invoice-generator">Invoice Generator</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/receipt-generator">Receipt Generator</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/quotation-generator">Quotation / Estimate Generator</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/delivery-note-generator">Delivery Note Generator</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/rent-receipt-generator">Rent Receipt Generator</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/business-documents">Business Documents Hub</a></li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-bold text-slate-900">Guides</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a className="hover:text-slate-800 hover:underline" href="/difference-between-invoice-and-receipt">Invoice vs Receipt</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/invoice-format">Invoice format</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/invoice-number-format">Invoice number format</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/invoice-payment-terms-explained">Invoice payment terms</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/what-is-a-tax-invoice">What is a tax invoice?</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/payment-receipt-format">Payment receipt format</a></li>
            <li><a className="hover:text-slate-800 hover:underline" href="/guides">All guides →</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm">
          <span className="font-semibold text-slate-700">{SITE_NAME}</span> — Verify details before issuing official documents.
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <a className="hover:text-slate-800" href="/search">Search</a>
          <a className="hover:text-slate-800" href="/rss.xml">RSS</a>
          <a className="hover:text-slate-800" href="/about">About</a>
          <a className="hover:text-slate-800" href="/privacy">Privacy</a>
          <a className="hover:text-slate-800" href="/disclaimer">Disclaimer</a>
          <a className="hover:text-slate-800" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
    </footer>
  );
}
