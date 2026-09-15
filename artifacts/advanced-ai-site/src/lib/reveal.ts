import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.07, rootMargin: "0px 0px -20px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export function goto(id: string) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 68, behavior: "smooth" });
}

/** Scrolls to the #hash target of the current URL on mount/route change (used when navigating cross-page). */
export function useScrollToHash() {
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      // wait a tick for the page content to mount
      requestAnimationFrame(() => setTimeout(() => goto(id), 50));
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);
}
