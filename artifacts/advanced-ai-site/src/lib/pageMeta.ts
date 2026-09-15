import { useEffect } from "react";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const prevDescription = meta?.getAttribute("content") ?? "";
    meta?.setAttribute("content", description);

    return () => {
      document.title = prevTitle;
      meta?.setAttribute("content", prevDescription);
    };
  }, [title, description]);
}
