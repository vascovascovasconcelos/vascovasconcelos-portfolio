"use client";

import { useCallback, useEffect, useState } from "react";

type Slide = { src: string; alt: string };

// Gallery lightbox for case-study pages. Wires up every image inside the
// [data-gallery] container (mockups + carousels): clicking one opens a full-
// screen overlay with prev/next + keyboard navigation across all of them.
export default function ProjectLightbox() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const container = document.querySelector<HTMLElement>("[data-gallery]");
    if (!container) return;

    const imgs = () =>
      Array.from(container.querySelectorAll("img")) as HTMLImageElement[];

    imgs().forEach((img) => {
      img.style.cursor = "zoom-in";
    });

    const onClick = (e: MouseEvent) => {
      const img = (e.target as HTMLElement).closest("img");
      if (!img || !container.contains(img)) return;
      const list = imgs();
      const i = list.indexOf(img as HTMLImageElement);
      if (i < 0) return;
      e.preventDefault();
      setSlides(list.map((el) => ({ src: el.currentSrc || el.src, alt: el.alt })));
      setIndex(i);
    };

    container.addEventListener("click", onClick);
    return () => container.removeEventListener("click", onClick);
  }, []);

  const close = useCallback(() => setIndex(null), []);
  const go = useCallback(
    (dir: number) =>
      setIndex((i) => (i === null ? i : (i + dir + slides.length) % slides.length)),
    [slides.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, close, go]);

  if (index === null || !slides[index]) return null;
  const slide = slides[index];
  const many = slides.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
      onClick={close}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm sm:p-12"
    >
      <button
        type="button"
        onClick={close}
        aria-label="Close gallery"
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        <svg viewBox="0 0 24 24" fill="none" className="size-6" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {many && (
        <button
          type="button"
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          className="absolute left-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:left-5"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={slide.src}
        alt={slide.alt}
        onClick={(e) => e.stopPropagation()}
        className="max-h-full max-w-full rounded-[12px] object-contain shadow-2xl"
      />

      {many && (
        <button
          type="button"
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          className="absolute right-2 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:right-5"
        >
          <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {many && (
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[14px] tracking-[-0.04em] text-white/60">
          {index + 1} / {slides.length}
        </span>
      )}
    </div>
  );
}
