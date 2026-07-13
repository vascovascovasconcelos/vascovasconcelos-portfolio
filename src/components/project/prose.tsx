import Image from "next/image";

// Shared building blocks for project case-study pages.

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-[650px] leading-[1.45] tracking-[-0.04em] text-ink-soft text-[18px]">
      {children}
    </p>
  );
}

export function Mark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-accent px-0.5 text-ink [box-decoration-break:clone]">
      {children}
    </mark>
  );
}

export function Caption({ children }: { children: React.ReactNode }) {
  // The divider line is desktop-only; on mobile the caption is just text.
  return (
    <p className="pt-3 text-[16px] leading-[1.3] tracking-[-0.04em] text-ink-soft lg:border-t lg:border-[#d9d9d9]">
      {children}
    </p>
  );
}

// A full-width image (full-bleed on mobile, 650px column on desktop) with an
// optional caption in the right gutter.
export function CaptionedMockup({
  src,
  width,
  height,
  alt,
  caption,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
}) {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-[minmax(0,650px)_180px] lg:gap-10">
      <figure className="-mx-6 overflow-hidden rounded-none bg-[#f4f4f4] sm:-mx-10 lg:mx-0 lg:rounded-[20px]">
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          unoptimized
          className="h-auto w-full"
        />
      </figure>
      {caption ? (
        <div className="lg:self-center">
          <Caption>{caption}</Caption>
        </div>
      ) : null}
    </div>
  );
}

export function Stats({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="flex w-full max-w-[830px] flex-col gap-6 sm:flex-row sm:gap-4">
      {items.map((stat) => (
        <div
          key={stat.value}
          className="flex flex-1 flex-col gap-2 border-t border-[#d9d9d9] pt-6"
        >
          <span className="font-extrabold leading-none tracking-[-0.04em] text-ink text-[44px]">
            {stat.value}
          </span>
          <span className="text-[16px] leading-snug tracking-[-0.04em] text-ink-soft">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
