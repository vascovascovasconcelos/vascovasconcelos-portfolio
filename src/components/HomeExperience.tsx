"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import SideMenu from "./SideMenu";
import MobileTopMenu from "./MobileTopMenu";
import MobileLinks from "./MobileLinks";
import BlobLayer from "./BlobLayer";
import { SECTIONS } from "@/lib/home";

export default function HomeExperience({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track which section is most in view.
  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;

    const ratios = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }
        let best = 0;
        let bestRatio = -1;
        SECTIONS.forEach((section, i) => {
          const r = ratios.get(section.id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            best = i;
          }
        });
        setActiveIndex(best);
      },
      { root, threshold: [0.25, 0.5, 0.75] }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const navigate = useCallback((index: number) => {
    document
      .getElementById(SECTIONS[index].id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <BlobLayer activeIndex={activeIndex} />
      <SideMenu activeIndex={activeIndex} onNavigate={navigate} />
      <MobileTopMenu activeIndex={activeIndex} onNavigate={navigate} />
      <MobileLinks />
      <div
        ref={scrollRef}
        className="relative z-10 h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth"
      >
        {children}
      </div>
    </>
  );
}
