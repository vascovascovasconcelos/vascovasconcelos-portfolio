"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type MediaItem = {
  src: string;
  width: number;
  height: number;
  type?: "image" | "video";
  poster?: string;
};

// Horizontal media carousel (scrollbar hidden, scroll-aware edge fades). Items
// keep their natural aspect ratio at a fixed height, so mixed portrait/landscape
// photos and videos sit together. Video items autoplay, loop and are muted.
export default function MediaCarousel({
  items,
  alt = "Photo",
}: {
  items: MediaItem[];
  alt?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [fade, setFade] = useState({ left: false, right: true });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setFade({ left: el.scrollLeft > 4, right: el.scrollLeft < max - 4 });
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="-mx-6 w-screen max-w-[calc(100%+3rem)] sm:-mx-10 sm:max-w-[calc(100%+5rem)] lg:mx-0 lg:w-[min(calc(100vw-394px),calc(50vw+435px))] lg:max-w-none">
      <ul
        ref={ref}
        className="carousel-fade no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:px-10 lg:pl-0 lg:pr-10"
        style={
          {
            "--fade-l": fade.left ? "96px" : "0px",
            "--fade-r": fade.right ? "96px" : "0px",
          } as React.CSSProperties
        }
      >
        {items.map((item, i) => (
          <li
            key={item.src}
            className="shrink-0 snap-start overflow-hidden rounded-[32px]"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                poster={item.poster}
                width={item.width}
                height={item.height}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label={`${alt} ${i + 1}`}
                className="h-[420px] w-auto"
              />
            ) : (
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={`${alt} ${i + 1}`}
                unoptimized
                className="h-[420px] w-auto"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
