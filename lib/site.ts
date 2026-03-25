export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://doccrafttools.com";
export const SITE_NAME = "DocCraft Tools";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@doccrafttools.com";

export function absoluteUrl(path: string = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}
