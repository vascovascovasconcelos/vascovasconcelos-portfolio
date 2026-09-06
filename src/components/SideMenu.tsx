"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ArrowOutward from "./ArrowOutward";
import { SECTIONS } from "@/lib/home";

const LINKS = [
  {
    label: "hello@vascovasconcelos.com",
    href: "mailto:hello@vascovasconcelos.com",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/thiagovascovasconcelos/",
  },
];

export default function SideMenu({
  activeIndex,
  onNavigate,
}: {
  activeIndex: number;
  onNavigate: (index: number) => void;
}) {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [dotTop, setDotTop] = useState<number | null>(null);

  // Keep the dot vertically centred on the active menu item.
  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[activeIndex];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setDotTop(rect.top + rect.height / 2 - 6); // 6 = half the 12px dot
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-y-0 left-0 z-20 hidden flex-col justify-between py-16 pl-[52px] pr-[51px] lg:flex"
    >
      {/* Scroll-position dot: centred on the active item, fixed accent colour */}
      <span
        aria-hidden="true"
        className="absolute left-[24px] size-3 rounded-full bg-accent blur-[4px] transition-all duration-500 ease-out"
        style={{
          top: dotTop ?? 0,
          opacity: dotTop === null ? 0 : 1,
        }}
      />

      {/* Logo */}
      <Image
        src="/logo.svg"
        alt="vascovasconcelos"
        width={226}
        height={23}
        priority
        unoptimized
        className="h-[23px] w-[225px]"
      />

      {/* Section navigation */}
      <ul className="flex w-[263px] flex-col gap-6 text-[18px] tracking-[-0.04em] text-ink">
        {SECTIONS.map((section, i) => (
          <li
            key={section.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
          >
            <button
              type="button"
              onClick={() => onNavigate(i)}
              className={`block cursor-pointer text-left transition-opacity duration-300 hover:opacity-100 ${
                i === activeIndex ? "opacity-100" : "opacity-50"
              }`}
              aria-current={i === activeIndex ? "true" : undefined}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Contact links */}
      <ul className="flex w-[263px] flex-col gap-3 text-ink">
        {LINKS.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-2"
            >
              <span className="text-[18px] tracking-[-0.04em]">
                {link.label}
              </span>
              <ArrowOutward className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
