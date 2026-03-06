import type { TemplateId } from "@/lib/templateTypes";

export type FieldType =
  | "text"
  | "number"
  | "date"
  | "textarea"
  | "table_items";

export type FieldDef = {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
};

export type TemplateDef = {
  id: TemplateId;
  name: string;
  tagline: string;
  fields: FieldDef[];
};

export const templates: Record<TemplateId, TemplateDef> = {
  invoice: {
    id: "invoice",
    name: "Invoice Generator",
    tagline: "Create a clean invoice PDF in minutes.",
    fields: [
      { key: "invoiceNo", label: "Invoice Number", type: "text", placeholder: "INV-001", required: true },
      { key: "invoiceDate", label: "Invoice Date", type: "date", required: true },
      { key: "businessName", label: "Your Business Name", type: "text", placeholder: "Acme Trading LLC", required: true },
      { key: "businessAddress", label: "Your Address", type: "textarea" },
      { key: "clientName", label: "Client Name", type: "text", placeholder: "Client Co.", required: true },
      { key: "clientAddress", label: "Client Address", type: "textarea" },
      { key: "items", label: "Items", type: "table_items", required: true },
      { key: "taxPercent", label: "Tax (%)", type: "number", placeholder: "5" },
      { key: "notes", label: "Notes (optional)", type: "textarea", placeholder: "Payment due within 7 days..." },
    ],
  },

  receipt: {
    id: "receipt",
    name: "Receipt Generator",
    tagline: "Generate a printable payment receipt PDF.",
    fields: [
      { key: "receiptNo", label: "Receipt Number", type: "text", placeholder: "R-001", required: true },
      { key: "receiptDate", label: "Receipt Date", type: "date", required: true },
      { key: "receivedFrom", label: "Received From", type: "text", placeholder: "Customer name", required: true },
      { key: "amount", label: "Amount", type: "number", placeholder: "250", required: true },
      { key: "paymentFor", label: "Payment For", type: "text", placeholder: "Service / Product", required: true },
      { key: "paymentMethod", label: "Payment Method", type: "text", placeholder: "Cash / Transfer / Card" },
      { key: "issuerName", label: "Issued By (optional)", type: "text", placeholder: "Your name / business" },
      { key: "notes", label: "Notes (optional)", type: "textarea" },
    ],
  },

  quotation: {
    id: "quotation",
    name: "Quotation / Estimate Generator",
    tagline: "Send a clean quote PDF to your client in minutes.",
    fields: [
      { key: "quoteNo", label: "Quotation Number", type: "text", placeholder: "Q-001", required: true },
      { key: "quoteDate", label: "Quotation Date", type: "date", required: true },
      { key: "businessName", label: "Your Business Name", type: "text", placeholder: "Acme Trading LLC", required: true },
      { key: "businessAddress", label: "Your Address", type: "textarea" },
      { key: "clientName", label: "Client Name", type: "text", placeholder: "Client Co.", required: true },
      { key: "clientAddress", label: "Client Address", type: "textarea" },
      { key: "items", label: "Items", type: "table_items", required: true },
      { key: "taxPercent", label: "Tax (%)", type: "number", placeholder: "5" },
      { key: "validUntil", label: "Valid Until", type: "date" },
      { key: "notes", label: "Notes (optional)", type: "textarea", placeholder: "Prices valid for 7 days..." },
    ],
  },

  delivery_note: {
    id: "delivery_note",
    name: "Delivery Note Generator",
    tagline: "Generate a delivery note PDF for shipped or delivered items.",
    fields: [
      { key: "dnNo", label: "Delivery Note Number", type: "text", placeholder: "DN-001", required: true },
      { key: "dnDate", label: "Delivery Date", type: "date", required: true },
      { key: "senderName", label: "Sender / Company Name", type: "text", placeholder: "Acme Trading LLC", required: true },
      { key: "senderAddress", label: "Sender Address", type: "textarea" },
      { key: "receiverName", label: "Receiver Name", type: "text", placeholder: "Client Co.", required: true },
      { key: "receiverAddress", label: "Receiver Address", type: "textarea" },
      { key: "items", label: "Items Delivered", type: "table_items", required: true },
      { key: "reference", label: "Reference (optional)", type: "text", placeholder: "PO-123 / Invoice INV-001" },
      { key: "notes", label: "Notes (optional)", type: "textarea", placeholder: "Goods received in good condition..." },
    ],
  },

  rent_receipt: {
    id: "rent_receipt",
    name: "Rent Receipt Generator",
    tagline: "Create a printable rent receipt PDF in seconds.",
    fields: [
      { key: "receiptNo", label: "Receipt Number", type: "text", placeholder: "RR-001", required: true },
      { key: "receiptDate", label: "Receipt Date", type: "date", required: true },
      { key: "tenantName", label: "Tenant Name", type: "text", required: true },
      { key: "landlordName", label: "Landlord Name", type: "text", required: true },
      { key: "propertyAddress", label: "Property Address", type: "textarea", required: true },
      { key: "rentPeriod", label: "Rent Period", type: "text", placeholder: "Jan 2026", required: true },
      { key: "amount", label: "Amount Paid", type: "number", placeholder: "2500", required: true },
      { key: "paymentMethod", label: "Payment Method", type: "text", placeholder: "Cash / Transfer / Cheque" },
      { key: "notes", label: "Notes (optional)", type: "textarea", placeholder: "Paid in full." },
    ],
  },
};
