"use client";

import { useEffect } from "react";
import { addRecent } from "@/lib/recents";

export default function RecentTracker({
  title,
  href,
  type,
}: {
  title: string;
  href: string;
  type: "Tool" | "Guide";
}) {
  useEffect(() => {
    addRecent({ title, href, type });
  }, [title, href, type]);

  return null;
}
