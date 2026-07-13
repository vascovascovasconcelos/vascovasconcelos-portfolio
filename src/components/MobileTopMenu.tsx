"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { SECTIONS, DOT_STOPS } from "@/lib/home";

// Mobile top bar: logo + pill nav (intro / selected works / about me) with a
// blurred colour dot sitting behind the active item — the mobile counterpart of
// the desktop side-menu scroll dot.
export default function MobileTopMenu({
  activeIndex,
  onNavigate,
}: {
  activeIndex: number;
  onNavigate: (index: number) => void;
}) {
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [dotLeft, setDotLeft] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const el = itemRefs.current[activeIndex];
      const pill = el?.parentElement;
      if (!el || !pill) return;
      const er = el.getBoundingClientRect();
      const pr = pill.getBoundingClientRect();
      setDotLeft(er.left - pr.left + er.width / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex]);

  return (
    <div className="fixed inset-x-0 top-0 z-30 flex flex-col items-center gap-6 py-10 lg:hidden">
      <Image
        src="/logo.svg"
        alt="vascovasconcelos"
        width={226}
        height={23}
        priority
        unoptimized
        className="h-[23px] w-[225px]"
      />
      <div className="relative flex items-center gap-4 rounded-full bg-black/10 px-4 py-3 text-[18px] tracking-[-0.04em] text-ink backdrop-blur-[7px]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 size-7 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[4px] transition-all duration-500 ease-out"
          style={{
            left: dotLeft ?? 20,
            backgroundColor: DOT_STOPS[activeIndex]?.color ?? DOT_STOPS[0].color,
            opacity: dotLeft === null ? 0 : 0.5,
          }}
        />
        {SECTIONS.map((section, i) => (
          <button
            key={section.id}
            type="button"
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            onClick={() => onNavigate(i)}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`relative whitespace-nowrap transition-opacity duration-300 ${
              i === activeIndex ? "opacity-100" : "opacity-50"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
}
