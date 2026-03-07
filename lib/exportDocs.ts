type ItemRow = { desc?: string; qty?: number; price?: number };

function num(v: any) {
  const x = Number(v);
  return Number.isFinite(x) ? x : 0;
}

function money(v: any) {
  return num(v).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function escapeHtml(v: any) {
  return String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function downloadBlob(filename: string, mime: string, body: string) {
  const blob = new Blob([body], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function exportInvoiceAsExcel(data: any) {
  const currency = String(data.currencyCode || "AED").toUpperCase();
  const items: ItemRow[] = Array.isArray(data.items) ? data.items : [];
  const subtotal = items.reduce((s, it) => s + num(it.qty) * num(it.price), 0);
  const taxPercent = num(data.taxPercent);
  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax;

  const rows = items.map((it) => `
    <tr>
      <td>${escapeHtml(it.desc)}</td>
      <td>${num(it.qty)}</td>
      <td>${money(it.price)}</td>
      <td>${money(num(it.qty) * num(it.price))}</td>
    </tr>
  `).join("");

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { font-family: Arial, sans-serif; }
      table { border-collapse: collapse; width: 100%; }
      th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
      th { background: #f8fafc; }
      .meta td { border: none; padding: 4px 0; }
    </style>
  </head>
  <body>
    <h2>Invoice</h2>
    <table class="meta">
      <tr><td><strong>Invoice Number:</strong></td><td>${escapeHtml(data.invoiceNo)}</td></tr>
      <tr><td><strong>Date:</strong></td><td>${escapeHtml(data.invoiceDate)}</td></tr>
      <tr><td><strong>Business:</strong></td><td>${escapeHtml(data.businessName)}</td></tr>
      <tr><td><strong>Client:</strong></td><td>${escapeHtml(data.clientName)}</td></tr>
      <tr><td><strong>Currency:</strong></td><td>${currency}</td></tr>
    </table>
    <br />
    <table>
      <thead>
        <tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <br />
    <table class="meta">
      <tr><td><strong>Subtotal:</strong></td><td>${currency} ${money(subtotal)}</td></tr>
      <tr><td><strong>Tax (${taxPercent}%):</strong></td><td>${currency} ${money(tax)}</td></tr>
      <tr><td><strong>Total:</strong></td><td>${currency} ${money(total)}</td></tr>
    </table>
    <p><strong>Notes:</strong> ${escapeHtml(data.notes)}</p>
  </body>
  </html>`;

  downloadBlob(`invoice-${data.invoiceNo || "export"}.xls`, "application/vnd.ms-excel", html);
}

export function exportInvoiceAsWord(data: any) {
  const currency = String(data.currencyCode || "AED").toUpperCase();
  const items: ItemRow[] = Array.isArray(data.items) ? data.items : [];
  const subtotal = items.reduce((s, it) => s + num(it.qty) * num(it.price), 0);
  const taxPercent = num(data.taxPercent);
  const tax = subtotal * (taxPercent / 100);
  const total = subtotal + tax;

  const rows = items.map((it) => `
    <tr>
      <td>${escapeHtml(it.desc)}</td>
      <td>${num(it.qty)}</td>
      <td>${money(it.price)}</td>
      <td>${money(num(it.qty) * num(it.price))}</td>
    </tr>
  `).join("");

  const html = `<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8" />
    <style>
      body { font-family: Arial, sans-serif; color: #111827; }
      table { border-collapse: collapse; width: 100%; margin-top: 12px; }
      th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
      th { background: #f8fafc; }
    </style>
  </head>
  <body>
    <h1>Invoice</h1>
    <p><strong>Invoice Number:</strong> ${escapeHtml(data.invoiceNo)}<br />
    <strong>Date:</strong> ${escapeHtml(data.invoiceDate)}<br />
    <strong>From:</strong> ${escapeHtml(data.businessName)}<br />
    <strong>Bill To:</strong> ${escapeHtml(data.clientName)}<br />
    <strong>Currency:</strong> ${currency}</p>

    <table>
      <thead>
        <tr><th>Description</th><th>Qty</th><th>Price</th><th>Total</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>

    <p><strong>Subtotal:</strong> ${currency} ${money(subtotal)}<br />
    <strong>Tax (${taxPercent}%):</strong> ${currency} ${money(tax)}<br />
    <strong>Total:</strong> ${currency} ${money(total)}</p>

    <p><strong>Notes:</strong> ${escapeHtml(data.notes)}</p>
  </body>
  </html>`;

  downloadBlob(`invoice-${data.invoiceNo || "export"}.doc`, "application/msword", html);
}
