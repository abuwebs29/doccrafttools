"use client";

import { useMemo, useState } from "react";
import type { TemplateDef } from "@/lib/templates";
import { fileToDataUrl } from "@/lib/fileToDataUrl";
import { CURRENCIES, formatMoney, getCurrency } from "@/lib/currencies";
import {
  generateInvoicePdf,
  generateReceiptPdf,
  generateQuotationPdf,
  generateDeliveryNotePdf,
  generateRentReceiptPdf,
} from "@/lib/pdfGenerator";

type ItemRow = { desc: string; qty: number; price: number };

function clampNum(v: any) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

export default function TemplateEngine({ template, initialCurrencyCode }: { template: TemplateDef; initialCurrencyCode?: string }) {
  const [logoDataUrl,
      currencyCode: (form.currencyCode || "AED").toUpperCase(), setLogoDataUrl] = useState<string>("");
  const [form, setForm] = useState<Record<string, any>>(() => ({
    currencyCode: (initialCurrencyCode || "AED").toUpperCase(),
    items: [{ desc: "Service / Product", qty: 1, price: 100 }] as ItemRow[],
    invoiceDate: new Date().toISOString().slice(0, 10),
    receiptDate: new Date().toISOString().slice(0, 10),
    quoteDate: new Date().toISOString().slice(0, 10),
    dnDate: new Date().toISOString().slice(0, 10),
  }));

  const requiredKeys = useMemo(() => template.fields.filter(f => f.required).map(f => f.key), [template.fields]);

  function update(key: string, value: any) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function addItem() {
    setForm((prev) => ({
      ...prev,
      items: [...(prev.items || []), { desc: "", qty: 1, price: 0 }],
    }));
  }

  function removeItem(idx: number) {
    setForm((prev) => ({
      ...prev,
      items: (prev.items || []).filter((_: any, i: number) => i !== idx),
    }));
  }

  function updateItem(idx: number, key: keyof ItemRow, value: any) {
    setForm((prev) => ({
      ...prev,
      items: (prev.items || []).map((it: ItemRow, i: number) =>
        i === idx ? { ...it, [key]: key === "qty" || key === "price" ? clampNum(value) : value } : it
      ),
    }));
  }

  const subtotal = useMemo(() => {
    const items: ItemRow[] = Array.isArray(form.items) ? form.items : [];
    return items.reduce((s, r) => s + clampNum(r.qty) * clampNum(r.price), 0);
  }, [form.items]);

  const taxPercent = clampNum(form.taxPercent);
  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax;

  function validate(): string[] {
    const missing: string[] = [];
    for (const k of requiredKeys) {
      const v = form[k];
      if (k === "items") {
        const items: ItemRow[] = Array.isArray(form.items) ? form.items : [];
        const hasAtLeastOne = items.length > 0 && items.some(i => (i.desc || "").trim().length > 0);
        if (!hasAtLeastOne) missing.push("Items");
        continue;
      }
      if (v === undefined || v === null || String(v).trim() === "") missing.push(k);
    }
    return missing;
  }

  async function onLogoChange(file?: File) {
    if (!file) return;
    const dataUrl = await fileToDataUrl(file);
    setLogoDataUrl(dataUrl);
  }

  function download() {
    const missing = validate();
    if (missing.length) {
      alert("Please fill required fields: " + missing.join(", "));
      return;
    }

    const payload = { ...form, logoDataUrl };

    switch (template.id) {
      case "invoice":
        generateInvoicePdf(payload);
        break;
      case "receipt":
        generateReceiptPdf(payload);
        break;
      case "quotation":
        generateQuotationPdf(payload);
        break;
      case "delivery_note":
        generateDeliveryNotePdf(payload);
        break;
      case "rent_receipt":
        generateRentReceiptPdf(payload);
        break;
    }
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-slate-900">{template.name}</h2>
          <p className="mt-1 text-sm text-slate-600">{template.tagline}</p>
        </div>
        <button
          onClick={download}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
        >
          Download PDF
        </button>
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-200 p-4">
          <label className="block text-sm font-semibold text-slate-700">Logo (optional)</label>
          <input
            type="file"
            accept="image/*"
            className="mt-2 block w-full text-sm"
            onChange={(e) => onLogoChange(e.target.files?.[0])}
          />
          {logoDataUrl ? (
            <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="text-xs font-semibold text-slate-700">Preview</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Logo preview" src={logoDataUrl} className="mt-2 h-12 w-auto" />
            </div>
          ) : null}
        </div>

        <div className="rounded-xl border border-slate-200 p-4">
  <div className="flex items-center justify-between gap-3">
    <div className="text-sm font-semibold text-slate-700">Totals</div>
    <div className="flex items-center gap-2">
      <label className="text-xs font-semibold text-slate-600">Currency</label>
      <select
        value={(form.currencyCode || "AED").toUpperCase()}
        onChange={(e) => update("currencyCode", e.target.value)}
        className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
      >
        {CURRENCIES.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} — {c.name}
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* Invoice / Quotation totals */}
  {template.id === "invoice" || template.id === "quotation" ? (
    <div className="mt-3 grid gap-2 text-sm text-slate-700">
      <div className="flex justify-between">
        <span>Subtotal</span>
        <span>{formatMoney(subtotal, form.currencyCode)}</span>
      </div>
      <div className="flex justify-between">
        <span>Tax</span>
        <span>{formatMoney(tax, form.currencyCode)}</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span>Total</span>
        <span>{formatMoney(total, form.currencyCode)}</span>
      </div>
    </div>
  ) : null}

  {/* Receipt / Rent receipt amount */}
  {template.id === "receipt" ? (
    <div className="mt-3 text-sm text-slate-700">
      <div className="flex justify-between font-semibold">
        <span>Amount</span>
        <span>{formatMoney(clampNum(form.amount), form.currencyCode)}</span>
      </div>
    </div>
  ) : null}

  {template.id === "rent_receipt" ? (
    <div className="mt-3 text-sm text-slate-700">
      <div className="flex justify-between font-semibold">
        <span>Amount</span>
        <span>{formatMoney(clampNum(form.rentAmount), form.currencyCode)}</span>
      </div>
    </div>
  ) : null}
</div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {template.fields.map((f) => {
          if (f.type === "table_items") {
            const items: ItemRow[] = Array.isArray(form.items) ? form.items : [];
            return (
              <div key={f.key} className="md:col-span-2 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-700">{f.label}{f.required ? " *" : ""}</div>
                  <button onClick={addItem} className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold hover:bg-slate-50">
                    + Add item
                  </button>
                </div>

                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-600">
                        <th className="py-2 pr-2">Description</th>
                        <th className="py-2 pr-2 w-20">Qty</th>
                        <th className="py-2 pr-2 w-28">Price</th>
                        <th className="py-2 pr-2 w-28">Total</th>
                        <th className="py-2 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((it, idx) => (
                        <tr key={idx} className="border-t border-slate-200">
                          <td className="py-2 pr-2">
                            <input
                              value={it.desc}
                              onChange={(e) => updateItem(idx, "desc", e.target.value)}
                              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                              placeholder="Item description"
                            />
                          </td>
                          <td className="py-2 pr-2">
                            <input
                              type="number"
                              value={it.qty}
                              onChange={(e) => updateItem(idx, "qty", e.target.value)}
                              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                            />
                          </td>
                          <td className="py-2 pr-2">
                            <input
                              type="number"
                              value={it.price}
                              onChange={(e) => updateItem(idx, "price", e.target.value)}
                              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                            />
                          </td>
                          <td className="py-2 pr-2 text-slate-700">AED {(clampNum(it.qty) * clampNum(it.price)).toFixed(2)}</td>
                          <td className="py-2">
                            <button onClick={() => removeItem(idx)} className="text-xs font-semibold text-slate-700 hover:text-red-600">
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }

          const value = form[f.key] ?? "";
          return (
            <div key={f.key} className="rounded-xl border border-slate-200 p-4">
              <label className="block text-sm font-semibold text-slate-700">
                {f.label}{f.required ? " *" : ""}
              </label>

              {f.type === "textarea" ? (
                <textarea
                  value={value}
                  onChange={(e) => update(f.key, e.target.value)}
                  className="mt-2 h-28 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
                  placeholder={f.placeholder}
                />
              ) : (
                <input
                  type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                  value={value}
                  onChange={(e) => update(f.key, e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
                  placeholder={f.placeholder}
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 text-xs text-slate-500">
        Privacy: PDFs are generated locally in your browser. We do not store your document data.
      </div>
    </section>
  );
}
