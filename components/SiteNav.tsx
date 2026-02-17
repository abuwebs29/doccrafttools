export default function SiteNav() {
  return (
    <div className="mb-8 flex items-center justify-between">
      <a href="/" className="text-sm font-extrabold tracking-tight text-slate-900">
        DocCraft Tools
      </a>
      <div className="flex flex-wrap gap-3 text-sm text-slate-600">
        <a className="hover:text-slate-900" href="/pdf-templates">Templates</a>
        <a className="hover:text-slate-900" href="/guides">Guides</a>
        <a className="hover:text-slate-900" href="/search">Search</a>
        <a className="hover:text-slate-900" href="/faq">FAQ</a>
        <a className="hover:text-slate-900" href="/status">Status</a>
        <a className="hover:text-slate-900" href="/invoice-generator">Invoice</a>
        <a className="hover:text-slate-900" href="/receipt-generator">Receipt</a>
        <a className="hover:text-slate-900" href="/quotation-generator">Quotation</a>
        <a className="hover:text-slate-900" href="/delivery-note-generator">Delivery Note</a>
        <a className="hover:text-slate-900" href="/rent-receipt-generator">Rent Receipt</a>
      </div>
    </div>
  );
}
