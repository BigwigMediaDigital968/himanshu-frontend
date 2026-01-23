"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const GA_ID = "G-DMZ306T4Y5";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function GA4RouteTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!window.gtag) return;

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  return null;
}
