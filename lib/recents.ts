export type RecentItem = {
  title: string;
  href: string;
  type: "Tool" | "Guide";
  ts: number;
};

const KEY = "doccraft_recents_v1";
const MAX = 8;

export function addRecent(item: Omit<RecentItem, "ts">) {
  if (typeof window === "undefined") return;
  const now = Date.now();
  const current: RecentItem[] = getRecents();
  const deduped = current.filter((x) => x.href !== item.href);
  const next: RecentItem[] = [{ ...item, ts: now }, ...deduped].slice(0, MAX);
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

export function getRecents(): RecentItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(Boolean);
  } catch {
    return [];
  }
}

export function clearRecents() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(KEY);
}
