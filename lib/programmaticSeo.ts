export const invoiceUseCaseSlugs = [
  "freelancers",
  "consultants",
  "designers",
  "contractors",
  "small-businesses",
  "developers",
  "photographers",
  "marketers",
];

export const receiptUseCaseSlugs = [
  "rent",
  "business",
  "services",
  "cash-payments",
  "deposits",
  "tuition",
];

export const invoiceFormatCountries = [
  "uae",
  "uk",
  "india",
  "saudi-arabia",
  "pakistan",
];

export function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}
