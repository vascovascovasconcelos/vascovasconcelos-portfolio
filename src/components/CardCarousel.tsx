"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Horizontal card carousel (scrollbar hidden). The edge fades follow the scroll
// position: the left fade only appears once you've scrolled away from the start,
// and the right fade disappears once the last card is fully in view.
export default function CardCarousel({
  cards,
  framed = false,
  alt = "Case study screen",
}: {
  cards: string[];
  // `framed` centres each image on a uniform gray panel (for phone mockups);
  // otherwise the image fills the rounded card (for full-bleed card art).
  framed?: boolean;
  alt?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);
  const [fade, setFade] = useState({ left: false, right: true });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setFade({
        left: el.scrollLeft > 4,
        right: el.scrollLeft < max - 4,
      });
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
        {cards.map((src, i) => (
          <li
            key={src}
            className={`shrink-0 snap-start overflow-hidden rounded-[32px] ${
              framed
                ? "flex aspect-square h-[420px] items-center justify-center bg-[#f4f4f4]"
                : ""
            }`}
          >
            <Image
              src={src}
              width={650}
              height={650}
              alt={`${alt} ${i + 1}`}
              unoptimized
              className={framed ? "h-full w-auto object-contain" : "h-[420px] w-auto"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
