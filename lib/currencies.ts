export type Currency = {
  code: string;
  symbol: string;
  name: string;
};

export const CURRENCIES: Currency[] = [
  {
    "code": "AED",
    "symbol": "\u062f.\u0625",
    "name": "UAE Dirham"
  },
  {
    "code": "USD",
    "symbol": "$",
    "name": "US Dollar"
  },
  {
    "code": "EUR",
    "symbol": "\u20ac",
    "name": "Euro"
  },
  {
    "code": "GBP",
    "symbol": "\u00a3",
    "name": "British Pound"
  },
  {
    "code": "INR",
    "symbol": "\u20b9",
    "name": "Indian Rupee"
  },
  {
    "code": "SAR",
    "symbol": "\ufdfc",
    "name": "Saudi Riyal"
  },
  {
    "code": "QAR",
    "symbol": "\ufdfc",
    "name": "Qatari Riyal"
  },
  {
    "code": "KWD",
    "symbol": "\u062f.\u0643",
    "name": "Kuwaiti Dinar"
  },
  {
    "code": "BHD",
    "symbol": ".\u062f.\u0628",
    "name": "Bahraini Dinar"
  },
  {
    "code": "OMR",
    "symbol": "\ufdfc",
    "name": "Omani Rial"
  },
  {
    "code": "JOD",
    "symbol": "\u062f.\u0627",
    "name": "Jordanian Dinar"
  },
  {
    "code": "EGP",
    "symbol": "E\u00a3",
    "name": "Egyptian Pound"
  },
  {
    "code": "PKR",
    "symbol": "\u20a8",
    "name": "Pakistani Rupee"
  },
  {
    "code": "CAD",
    "symbol": "$",
    "name": "Canadian Dollar"
  },
  {
    "code": "AUD",
    "symbol": "$",
    "name": "Australian Dollar"
  }
];

export function getCurrency(code?: string): Currency {
  const c = (code || "AED").toUpperCase();
  return CURRENCIES.find((x) => x.code === c) ?? CURRENCIES[0];
}

export function formatMoney(amount: number, code?: string): string {
  const c = getCurrency(code);
  const n = Number.isFinite(amount) ? amount : 0;
  // Keep formatting simple & consistent for PDFs + UI
  // Example: "USD 123.45" or "$ 123.45"
  // Use code prefix so it's unambiguous internationally.
  return `${c.code} ${
    n.toFixed(2)
  }`;
}
