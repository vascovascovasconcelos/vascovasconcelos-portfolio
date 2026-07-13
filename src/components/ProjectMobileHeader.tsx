"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SECTIONS, DOT_STOPS } from "@/lib/home";

// This case study is a "selected work", so that nav item is the active one.
const ACTIVE = 1;

// Mobile project header: logo + pill nav, sitting over the cover. While over the
// (dark) cover the logo is white and the bar is transparent; once scrolled onto
// the page it gains a translucent blurred panel and the logo turns dark — the
// mobile counterpart of the desktop over-cover logo + FAB behaviour.
export default function ProjectMobileHeader({
  coverHeight = 200,
}: {
  coverHeight?: number;
}) {
  const activeRef = useRef<HTMLAnchorElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [dotLeft, setDotLeft] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const el = activeRef.current;
      const pill = el?.parentElement;
      if (!el || !pill) return;
      const er = el.getBoundingClientRect();
      const pr = pill.getBoundingClientRect();
      setDotLeft(er.left - pr.left + er.width / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    const threshold = Math.max(0, coverHeight - 88); // logo leaves the cover
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [coverHeight]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 flex flex-col items-center gap-6 py-10 transition-colors duration-300 lg:hidden ${
        scrolled
          ? "bg-white/50 backdrop-blur-[7px] [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]"
          : ""
      }`}
    >
      <Link href="/" aria-label="Home" className="w-fit">
        <Image
          src="/logo.svg"
          alt="vascovasconcelos"
          width={226}
          height={23}
          priority
          unoptimized
          className={`h-[23px] w-[225px] transition-[filter] duration-300 ${
            scrolled ? "" : "[filter:brightness(0)_invert(1)]"
          }`}
        />
      </Link>

      <nav
        className={`relative flex items-center gap-4 rounded-full px-4 py-3 text-[18px] tracking-[-0.04em] backdrop-blur-[7px] transition-colors duration-300 ${
          scrolled ? "bg-black/10 text-ink" : "bg-white/10 text-white"
        }`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-[4px] transition-all duration-500 ease-out"
          style={{
            left: dotLeft ?? 113,
            backgroundColor: DOT_STOPS[ACTIVE].color,
            opacity: dotLeft === null ? 0 : 0.5,
          }}
        />
        {SECTIONS.map((section, i) => (
          <Link
            key={section.id}
            href={`/#${section.id}`}
            ref={i === ACTIVE ? activeRef : undefined}
            className={`relative whitespace-nowrap transition-opacity duration-300 ${
              i === ACTIVE ? "opacity-100" : "opacity-50"
            }`}
          >
            {section.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
