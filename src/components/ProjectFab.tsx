"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Floating bar that appears once the page is scrolled past 1024px: back access
// on the left, project title on the right, over a frosted blurred pill.
export default function ProjectFab({ title }: { title: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 720);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className={`fixed left-[max(394px,calc((100vw-870px)/2))] top-[37px] z-50 hidden w-[min(870px,calc(100vw-442px))] items-center justify-between gap-4 rounded-full border border-white/10 bg-black/35 px-7 py-4 backdrop-blur-md transition-all duration-300 lg:flex ${
        visible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-3 opacity-0"
      }`}
    >
      <Link
        href="/#selected-works"
        className="group flex items-center gap-3 text-[20px] tracking-[-0.04em] text-white transition-opacity hover:opacity-80"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="size-6 text-accent transition-transform group-hover:-translate-x-1"
        >
          <path
            d="M20 12H4M4 12L10 6M4 12L10 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        back to selected works
      </Link>

      <span className="truncate text-[clamp(20px,2vw,32px)] font-light tracking-[-0.04em] text-white">
        {title}
      </span>
    </div>
  );
}
