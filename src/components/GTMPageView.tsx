"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GTMPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "page_view",
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
      console.log("GTM: page_view", pathname);
    }
  }, [pathname]);

  return null;
}
