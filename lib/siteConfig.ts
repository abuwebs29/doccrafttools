export const siteConfig = {
  siteName: "DocCraft Tools",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "https://doccrafttools.com",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@doccrafttools.com",
};
