"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Mobile counterpart of the desktop FAB: a blurred pill pinned 32px above the
// bottom of the viewport, holding a back link + the project title. It fades in
// once the top info (title + credits) has scrolled out of view.
export default function ProjectMobileFab({ title }: { title: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const credits = document.querySelector("article dl");
      const bottom = credits
        ? credits.getBoundingClientRect().bottom
        : Number.POSITIVE_INFINITY;
      setVisible(bottom < 100); // title + credits scrolled behind the header
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-4 bottom-8 z-40 flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-5 py-4 backdrop-blur-md transition-all duration-300 lg:hidden ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <Link
        href="/#selected-works"
        aria-label="Back to selected works"
        className="shrink-0 text-accent transition-transform active:-translate-x-1"
      >
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-6">
          <path
            d="M20 12H4M4 12L10 6M4 12L10 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <span className="truncate text-[20px] font-light tracking-[-0.04em] text-white">
        {title}
      </span>
    </div>
  );
}
