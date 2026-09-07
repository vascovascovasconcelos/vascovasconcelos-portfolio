"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowOutward from "./ArrowOutward";
import { SECTIONS } from "@/lib/home";

const LINKS = [
  {
    label: "hello@vascovasconcelos.com",
    href: "mailto:hello@vascovasconcelos.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/thiagovascovasconcelos/",
  },
];

// Same structure as the home side menu (logo, nav, links). Each group flips
// between white and dark depending on the brightness of what's behind it: while
// it overlaps the (dark) cover image it's white; over the light page it's dark.
export default function ProjectSideMenu({
  coverHeight = 280,
}: {
  coverHeight?: number;
}) {
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const [scrollY, setScrollY] = useState(0);
  // Viewport Y of each group's centre (fixed menu → only changes on resize).
  const [centers, setCenters] = useState({ logo: 76, nav: 99999, links: 99999 });

  useEffect(() => {
    const centre = (el: HTMLElement | null) => {
      if (!el) return 99999;
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2;
    };
    const measure = () =>
      setCenters({
        logo: centre(logoRef.current),
        nav: centre(navRef.current),
        links: centre(linksRef.current),
      });
    const onScroll = () => setScrollY(window.scrollY);
    measure();
    onScroll();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // On image (white) while the cover still covers this group's centre.
  const onImage = (center: number) => scrollY < coverHeight - center;

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-y-0 left-0 z-40 hidden flex-col py-16 pl-[52px] pr-[51px] lg:flex"
    >
      <Link ref={logoRef} href="/" aria-label="Home" className="w-fit">
        <Image
          src="/logo.svg"
          alt="vascovasconcelos"
          width={226}
          height={23}
          priority
          unoptimized
          className={`h-[23px] w-[225px] transition-[filter] duration-300 ${
            onImage(centers.logo) ? "[filter:brightness(0)_invert(1)]" : ""
          }`}
        />
      </Link>

      <ul
        ref={navRef}
        className={`mt-[241px] flex w-[263px] flex-col gap-6 text-[18px] tracking-[-0.04em] transition-colors duration-300 ${
          onImage(centers.nav) ? "text-white" : "text-ink"
        }`}
      >
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <Link
              href={`/#${section.id}`}
              className="block transition-opacity duration-300 hover:opacity-60"
            >
              {section.label}
            </Link>
          </li>
        ))}
      </ul>

      <ul
        ref={linksRef}
        className={`mt-auto flex w-[263px] flex-col gap-3 transition-colors duration-300 ${
          onImage(centers.links) ? "text-white" : "text-ink"
        }`}
      >
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
