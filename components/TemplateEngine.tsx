"use client";

import { useMemo, useState } from "react";
import type { TemplateDef } from "@/lib/templates";
import { fileToDataUrl } from "@/lib/fileToDataUrl";
import {
  generateInvoicePdf,
  generateReceiptPdf,
  generateQuotationPdf,
  generateDeliveryNotePdf,
  generateRentReceiptPdf,
} from "@/lib/pdfGenerator";
import { exportInvoiceAsExcel, exportInvoiceAsWord } from "@/lib/exportDocs";

type ItemRow = { desc: string; qty: number; price: number };

type FormState = {
  currencyCode: string;
  items: ItemRow[];
  invoiceDate?: string;
  receiptDate?: string;
  quoteDate?: string;
  dnDate?: string;
  taxPercent?: number;
  [key: string]: string | number | ItemRow[] | undefined;
};

const CURRENCIES = ["AED", "USD", "EUR", "GBP", "INR", "SAR", "AUD", "CAD", "PKR"];

function clampNum(v: unknown) {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function fmtMoney(amount: number, currencyCode?: string) {
  const code = String(currencyCode || "AED").toUpperCase();
  return `${code} ${clampNum(amount).toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function humanizeKey(key: string) {
  return key.replace(/([A-Z])/g, " $1").replace(/^./, (s) => s.toUpperCase());
}

export default function TemplateEngine({
  template,
  initialCurrencyCode,
}: {
  template: TemplateDef;
  initialCurrencyCode?: string;
}) {
  const [logoDataUrl, setLogoDataUrl] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [form, setForm] = useState<FormState>(() => ({
    currencyCode: (initialCurrencyCode || "AED").toUpperCase(),
    items: [{ desc: "Service / Product", qty: 1, price: 100 }],
    invoiceDate: new Date().toISOString().slice(0, 10),
    receiptDate: new Date().toISOString().slice(0, 10),
    quoteDate: new Date().toISOString().slice(0, 10),
    dnDate: new Date().toISOString().slice(0, 10),
  }));

  const requiredKeys = useMemo(
    () => template.fields.filter((f) => f.required).map((f) => f.key),
    [template.fields]
  );

  function update(key: string, value: string | number) {
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
      items: (prev.items || []).filter((_, i) => i !== idx),
    }));
  }

  function updateItem(idx: number, key: keyof ItemRow, value: string | number) {
    setForm((prev) => ({
      ...prev,
      items: (prev.items || []).map((it, i) =>
        i === idx
          ? {
              ...it,
              [key]: key === "qty" || key === "price" ? Math.max(0, clampNum(value)) : String(value),
            }
          : it
      ),
    }));
  }

  const subtotal = useMemo(() => {
    const items = Array.isArray(form.items) ? form.items : [];
    return items.reduce((s, r) => s + clampNum(r.qty) * clampNum(r.price), 0);
  }, [form.items]);

  const taxPercent = Math.min(100, Math.max(0, clampNum(form.taxPercent)));
  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax;

  function validate(): string[] {
    const nextErrors: string[] = [];

    for (const k of requiredKeys) {
      const v = form[k];
      if (k === "items") {
        const items = Array.isArray(form.items) ? form.items : [];
        if (!items.length) {
          nextErrors.push("At least one item is required");
          continue;
        }
        if (!items.some((i) => (i.desc || "").trim().length > 0)) {
          nextErrors.push("Each document needs at least one described item");
        }
        continue;
      }

      if (v === undefined || v === null || String(v).trim() === "") {
        nextErrors.push(`${humanizeKey(k)} is required`);
      }
    }

    const items = Array.isArray(form.items) ? form.items : [];
    items.forEach((item, idx) => {
      if (!item.desc?.trim()) nextErrors.push(`Item ${idx + 1}: description is required`);
      if (clampNum(item.qty) < 0) nextErrors.push(`Item ${idx + 1}: quantity cannot be negative`);
      if (clampNum(item.price) < 0) nextErrors.push(`Item ${idx + 1}: price cannot be negative`);
    });

    if (taxPercent < 0 || taxPercent > 100) {
      nextErrors.push("Tax percent must be between 0 and 100");
    }

    return nextErrors;
  }

  async function onLogoChange(file?: File) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setErrors(["Logo must be an image file"]);
      return;
    }

    if (file.size > 2 * 1024 * 1024) {
      setErrors(["Logo file must be under 2 MB"]);
      return;
    }

    const dataUrl = await fileToDataUrl(file);
    setLogoDataUrl(dataUrl);
    setErrors([]);
  }

  function ensureValid() {
    const nextErrors = validate();
    setErrors(nextErrors);
    return nextErrors.length === 0;
  }

  function payload() {
    return { ...form, logoDataUrl, taxPercent };
  }

  function download() {
    if (!ensureValid()) return;

    switch (template.id) {
      case "invoice":
        generateInvoicePdf(payload());
        break;
      case "receipt":
        generateReceiptPdf(payload());
        break;
      case "quotation":
        generateQuotationPdf(payload());
        break;
      case "delivery_note":
        generateDeliveryNotePdf(payload());
        break;
      case "rent_receipt":
        generateRentReceiptPdf(payload());
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
        <div className="flex flex-wrap gap-2">
          {template.id === "invoice" ? (
            <>
              <button
                onClick={() => {
                  if (!ensureValid()) return;
                  exportInvoiceAsExcel(payload());
                }}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Export for Excel (.xls)
              </button>
              <button
                onClick={() => {
                  if (!ensureValid()) return;
                  exportInvoiceAsWord(payload());
                }}
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Export for Word (.doc)
              </button>
            </>
          ) : null}
          <button
            onClick={download}
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download PDF
          </button>
        </div>
      </div>

      {errors.length ? (
        <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <div className="font-semibold">Please fix the following:</div>
          <ul className="mt-2 list-disc pl-5">
            {errors.map((error, i) => (
              <li key={`${error}-${i}`}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}

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
                value={String(form.currencyCode || "AED").toUpperCase()}
                onChange={(e) => update("currencyCode", e.target.value)}
                className="rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs"
              >
                {CURRENCIES.map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-3 grid gap-2 text-sm text-slate-700">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{fmtMoney(subtotal, form.currencyCode)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>{fmtMoney(tax, form.currencyCode)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>{fmtMoney(total, form.currencyCode)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {template.fields.map((f) => {
          if (f.type === "table_items") {
            const items: ItemRow[] = Array.isArray(form.items) ? form.items : [];
            return (
              <div key={f.key} className="md:col-span-2 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-slate-700">
                    {f.label}
                    {f.required ? " *" : ""}
                  </div>
                  <button
                    onClick={addItem}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-semibold hover:bg-slate-50"
                  >
                    + Add item
                  </button>
                </div>

                <div className="mt-3 overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-600">
                        <th className="w-auto py-2 pr-2">Description</th>
                        <th className="w-20 py-2 pr-2">Qty</th>
                        <th className="w-28 py-2 pr-2">Price</th>
                        <th className="w-28 py-2 pr-2">Total</th>
                        <th className="w-16 py-2"></th>
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
                              min="0"
                              value={it.qty}
                              onChange={(e) => updateItem(idx, "qty", e.target.value)}
                              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                            />
                          </td>
                          <td className="py-2 pr-2">
                            <input
                              type="number"
                              min="0"
                              value={it.price}
                              onChange={(e) => updateItem(idx, "price", e.target.value)}
                              className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                            />
                          </td>
                          <td className="py-2 pr-2 text-slate-700">
                            {fmtMoney(clampNum(it.qty) * clampNum(it.price), form.currencyCode)}
                          </td>
                          <td className="py-2">
                            <button
                              onClick={() => removeItem(idx)}
                              className="text-xs font-semibold text-slate-700 hover:text-red-600"
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {(template.id === "invoice" || template.id === "quotation") && (
                    <div className="mt-4 flex justify-end">
                      <div className="w-full max-w-xs rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>{fmtMoney(subtotal, form.currencyCode)}</span>
                        </div>
                        <div className="mt-1 flex justify-between">
                          <span>Tax</span>
                          <span>{fmtMoney(tax, form.currencyCode)}</span>
                        </div>
                        <div className="mt-1 flex justify-between font-semibold">
                          <span>Total</span>
                          <span>{fmtMoney(total, form.currencyCode)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          }

          const value = form[f.key] ?? "";
          return (
            <div key={f.key}>
              <label className="block text-sm font-semibold text-slate-700">
                {f.label}
                {f.required ? " *" : ""}
              </label>

              {f.type === "textarea" ? (
                <textarea
                  value={value}
                  onChange={(e) => update(f.key, e.target.value)}
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                  placeholder={f.placeholder || ""}
                />
              ) : (
                <input
                  type={f.type === "number" ? "number" : f.type === "date" ? "date" : "text"}
                  min={f.type === "number" ? 0 : undefined}
                  value={value}
                  onChange={(e) => update(f.key, f.type === "number" ? clampNum(e.target.value) : e.target.value)}
                  className="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-slate-400"
                  placeholder={f.placeholder || ""}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
