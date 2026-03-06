import jsPDF from "jspdf";
import { formatMoney } from "@/lib/currencies";

type ItemRow = { desc: string; qty: number; price: number };

function money(n: number, currencyCode?: string) {
  return formatMoney(n, currencyCode);
}

function safeStr(v: any) {
  return String(v ?? "").trim();
}

function drawLogo(doc: jsPDF, dataUrl?: string) {
  const logo = safeStr(dataUrl);
  if (!logo) return;

  try {
    const isPng = logo.startsWith("data:image/png");
    const isJpg = logo.startsWith("data:image/jpeg") || logo.startsWith("data:image/jpg");
    const isWebp = logo.startsWith("data:image/webp");
    const fmt = isPng ? "PNG" : isJpg ? "JPEG" : isWebp ? "WEBP" : "PNG";

    const W = doc.internal.pageSize.getWidth();
    doc.addImage(logo, fmt as any, W - 140, 26, 90, 36, undefined, "FAST");
  } catch {
    // ignore logo failures
  }
}

function wrap(doc: jsPDF, text: string, maxWidth: number) {
  return doc.splitTextToSize(text, maxWidth);
}

function addTableHeader(doc: jsPDF, y: number) {
  const W = doc.internal.pageSize.getWidth();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Description", 40, y);
  doc.text("Qty", W - 200, y);
  doc.text("Price", W - 140, y);
  doc.text("Total", W - 70, y, { align: "right" });

  doc.setDrawColor(220);
  doc.line(40, y + 8, W - 40, y + 8);
  doc.setFont("helvetica", "normal");
}

function ensureSpace(doc: jsPDF, y: number, needed: number) {
  const H = doc.internal.pageSize.getHeight();
  if (y + needed <= H - 60) return y;
  doc.addPage();
  addTableHeader(doc, 60);
  return 80;
}

export function generateInvoicePdf(data: any) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  drawLogo(doc, data.logoDataUrl);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("INVOICE", 40, 52);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.text(`Invoice #: ${safeStr(data.invoiceNo)}`, W - 220, 40);
  doc.text(`Date: ${safeStr(data.invoiceDate)}`, W - 220, 56);

  doc.setFont("helvetica", "bold");
  doc.text("From", 40, 90);
  doc.text("Bill To", W / 2 + 20, 90);

  doc.setFont("helvetica", "normal");
  doc.text(safeStr(data.businessName), 40, 110);
  doc.text(wrap(doc, safeStr(data.businessAddress), 240), 40, 126);

  doc.text(safeStr(data.clientName), W / 2 + 20, 110);
  doc.text(wrap(doc, safeStr(data.clientAddress), 240), W / 2 + 20, 126);

  addTableHeader(doc, 170);

  const items: ItemRow[] = Array.isArray(data.items) ? data.items : [];
  let y = 190;

  let subtotal = 0;

  for (const row of items) {
    const desc = safeStr(row.desc);
    const qty = Number(row.qty || 0);
    const price = Number(row.price || 0);
    const lineTotal = qty * price;
    subtotal += lineTotal;

    const descLines = wrap(doc, desc, 320);
    const rowHeight = Math.max(18, descLines.length * 12);

    y = ensureSpace(doc, y, rowHeight + 10);

    doc.text(descLines, 40, y);
    doc.text(String(qty), W - 190, y);
    doc.text(money(price, data.currencyCode), W - 140, y);
    doc.text(money(lineTotal, data.currencyCode), W - 70, y, { align: "right" });

    y += rowHeight;
  }

  const taxPercent = Number(data.taxPercent || 0);
  const tax = subtotal * (taxPercent / 100);
  const grand = subtotal + tax;

  y = ensureSpace(doc, y, 160);

  const boxTop = y + 14;
  doc.setDrawColor(230);
  doc.roundedRect(W - 240, boxTop, 200, 86, 10, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Subtotal", W - 220, boxTop + 22);
  doc.text(money(subtotal, data.currencyCode), W - 60, boxTop + 22, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.text(`Tax (${taxPercent || 0}%)`, W - 220, boxTop + 44);
  doc.text(money(tax, data.currencyCode), W - 60, boxTop + 44, { align: "right" });

  doc.setFont("helvetica", "bold");
  doc.text("Total", W - 220, boxTop + 70);
  doc.text(money(grand, data.currencyCode), W - 60, boxTop + 70, { align: "right" });

  const notes = safeStr(data.notes);
  if (notes) {
    y = ensureSpace(doc, boxTop + 120, 120);
    doc.setFont("helvetica", "bold");
    doc.text("Notes", 40, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(wrap(doc, notes, W - 80), 40, y + 18);
  }

  doc.save(`invoice-${safeStr(data.invoiceNo) || "pdf"}.pdf`);
}

export function generateQuotationPdf(data: any) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  drawLogo(doc, data.logoDataUrl);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("QUOTATION", 40, 52);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Quote #: ${safeStr(data.quoteNo)}`, W - 220, 40);
  doc.text(`Date: ${safeStr(data.quoteDate)}`, W - 220, 56);
  if (safeStr(data.validUntil)) doc.text(`Valid until: ${safeStr(data.validUntil)}`, W - 220, 72);

  doc.setFont("helvetica", "bold");
  doc.text("From", 40, 90);
  doc.text("To", W / 2 + 20, 90);

  doc.setFont("helvetica", "normal");
  doc.text(safeStr(data.businessName), 40, 110);
  doc.text(wrap(doc, safeStr(data.businessAddress), 240), 40, 126);

  doc.text(safeStr(data.clientName), W / 2 + 20, 110);
  doc.text(wrap(doc, safeStr(data.clientAddress), 240), W / 2 + 20, 126);

  addTableHeader(doc, 170);

  const items: ItemRow[] = Array.isArray(data.items) ? data.items : [];
  let y = 190;

  let subtotal = 0;
  for (const row of items) {
    const desc = safeStr(row.desc);
    const qty = Number(row.qty || 0);
    const price = Number(row.price || 0);
    const lineTotal = qty * price;
    subtotal += lineTotal;

    const descLines = wrap(doc, desc, 320);
    const rowHeight = Math.max(18, descLines.length * 12);

    y = ensureSpace(doc, y, rowHeight + 10);

    doc.text(descLines, 40, y);
    doc.text(String(qty), W - 190, y);
    doc.text(money(price, data.currencyCode), W - 140, y);
    doc.text(money(lineTotal, data.currencyCode), W - 70, y, { align: "right" });

    y += rowHeight;
  }

  const taxPercent = Number(data.taxPercent || 0);
  const tax = subtotal * (taxPercent / 100);
  const grand = subtotal + tax;

  y = ensureSpace(doc, y, 160);

  const boxTop = y + 14;
  doc.setDrawColor(230);
  doc.roundedRect(W - 240, boxTop, 200, 86, 10, 10);

  doc.setFont("helvetica", "bold");
  doc.text("Subtotal", W - 220, boxTop + 22);
  doc.text(money(subtotal, data.currencyCode), W - 60, boxTop + 22, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.text(`Tax (${taxPercent || 0}%)`, W - 220, boxTop + 44);
  doc.text(money(tax, data.currencyCode), W - 60, boxTop + 44, { align: "right" });

  doc.setFont("helvetica", "bold");
  doc.text("Total", W - 220, boxTop + 70);
  doc.text(money(grand, data.currencyCode), W - 60, boxTop + 70, { align: "right" });

  const notes = safeStr(data.notes);
  if (notes) {
    y = ensureSpace(doc, boxTop + 120, 120);
    doc.setFont("helvetica", "bold");
    doc.text("Notes", 40, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(wrap(doc, notes, W - 80), 40, y + 18);
  }

  doc.save(`quotation-${safeStr(data.quoteNo) || "pdf"}.pdf`);
}

export function generateReceiptPdf(data: any) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  drawLogo(doc, data.logoDataUrl);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("RECEIPT", 40, 52);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Receipt #: ${safeStr(data.receiptNo)}`, W - 220, 40);
  doc.text(`Date: ${safeStr(data.receiptDate)}`, W - 220, 56);

  doc.setDrawColor(230);
  doc.roundedRect(40, 90, W - 80, 140, 12, 12);

  const amount = Number(data.amount || 0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("Received From:", 60, 120);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.receivedFrom), W - 260), 180, 120);

  doc.setFont("helvetica", "bold");
  doc.text("Amount:", 60, 145);
  doc.setFont("helvetica", "normal");
  doc.text(`AED ${money(amount, data.currencyCode)}`, 180, 145);

  doc.setFont("helvetica", "bold");
  doc.text("For:", 60, 170);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.paymentFor), W - 260), 180, 170);

  doc.setFont("helvetica", "bold");
  doc.text("Method:", 60, 195);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.paymentMethod), W - 260), 180, 195);

  const issuer = safeStr(data.issuerName);
  if (issuer) {
    doc.setFont("helvetica", "bold");
    doc.text("Issued By:", 40, 260);
    doc.setFont("helvetica", "normal");
    doc.text(wrap(doc, issuer, W - 140), 120, 260);
  }

  const notes = safeStr(data.notes);
  if (notes) {
    doc.setFont("helvetica", "bold");
    doc.text("Notes:", 40, 290);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(wrap(doc, notes, W - 80), 40, 308);
  }

  doc.save(`receipt-${safeStr(data.receiptNo) || "pdf"}.pdf`);
}

export function generateDeliveryNotePdf(data: any) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  drawLogo(doc, data.logoDataUrl);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("DELIVERY NOTE", 40, 52);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`DN #: ${safeStr(data.dnNo)}`, W - 220, 40);
  doc.text(`Date: ${safeStr(data.dnDate)}`, W - 220, 56);
  if (safeStr(data.reference)) doc.text(`Ref: ${safeStr(data.reference)}`, W - 220, 72);

  doc.setFont("helvetica", "bold");
  doc.text("Sender", 40, 90);
  doc.text("Receiver", W / 2 + 20, 90);

  doc.setFont("helvetica", "normal");
  doc.text(safeStr(data.senderName), 40, 110);
  doc.text(wrap(doc, safeStr(data.senderAddress), 240), 40, 126);

  doc.text(safeStr(data.receiverName), W / 2 + 20, 110);
  doc.text(wrap(doc, safeStr(data.receiverAddress), 240), W / 2 + 20, 126);

  addTableHeader(doc, 170);

  const items: ItemRow[] = Array.isArray(data.items) ? data.items : [];
  let y = 190;

  for (const row of items) {
    const desc = safeStr(row.desc);
    const qty = Number(row.qty || 0);
    const price = Number(row.price || 0);
    const lineTotal = qty * price;

    const descLines = wrap(doc, desc, 320);
    const rowHeight = Math.max(18, descLines.length * 12);

    y = ensureSpace(doc, y, rowHeight + 10);

    doc.text(descLines, 40, y);
    doc.text(String(qty), W - 190, y);
    doc.text(money(price, data.currencyCode), W - 140, y);
    doc.text(money(lineTotal, data.currencyCode), W - 70, y, { align: "right" });

    y += rowHeight;
  }

  y = ensureSpace(doc, y, 160);

  doc.setDrawColor(230);
  doc.roundedRect(40, y + 20, W - 80, 110, 12, 12);

  doc.setFont("helvetica", "bold");
  doc.text("Receiver Signature", 60, y + 55);
  doc.text("Sender Signature", W / 2 + 20, y + 55);

  const notes = safeStr(data.notes);
  if (notes) {
    y = ensureSpace(doc, y + 160, 120);
    doc.setFont("helvetica", "bold");
    doc.text("Notes", 40, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(wrap(doc, notes, W - 80), 40, y + 18);
  }

  doc.save(`delivery-note-${safeStr(data.dnNo) || "pdf"}.pdf`);
}

export function generateRentReceiptPdf(data: any) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  drawLogo(doc, data.logoDataUrl);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text("RENT RECEIPT", 40, 52);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`Receipt #: ${safeStr(data.receiptNo)}`, W - 220, 40);
  doc.text(`Date: ${safeStr(data.receiptDate)}`, W - 220, 56);

  doc.setDrawColor(230);
  doc.roundedRect(40, 90, W - 80, 220, 12, 12);

  const amount = Number(data.amount || 0);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);

  doc.text("Tenant:", 60, 125);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.tenantName), W - 240), 150, 125);

  doc.setFont("helvetica", "bold");
  doc.text("Landlord:", 60, 150);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.landlordName), W - 240), 150, 150);

  doc.setFont("helvetica", "bold");
  doc.text("Property:", 60, 175);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.propertyAddress), W - 240), 150, 175);

  doc.setFont("helvetica", "bold");
  doc.text("Rent Period:", 60, 230);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.rentPeriod), W - 240), 150, 230);

  doc.setFont("helvetica", "bold");
  doc.text("Amount Paid:", 60, 255);
  doc.setFont("helvetica", "normal");
  doc.text(`AED ${money(amount, data.currencyCode)}`, 150, 255);

  doc.setFont("helvetica", "bold");
  doc.text("Method:", 60, 280);
  doc.setFont("helvetica", "normal");
  doc.text(wrap(doc, safeStr(data.paymentMethod), W - 240), 150, 280);

  const notes = safeStr(data.notes);
  if (notes) {
    doc.setFont("helvetica", "bold");
    doc.text("Notes:", 40, 340);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text(wrap(doc, notes, W - 80), 40, 358);
  }

  doc.setDrawColor(230);
  doc.line(40, 720, 280, 720);
  doc.line(W - 280, 720, W - 40, 720);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Landlord Signature", 40, 735);
  doc.text("Tenant Signature", W - 280, 735);

  doc.save(`rent-receipt-${safeStr(data.receiptNo) || "pdf"}.pdf`);
}
