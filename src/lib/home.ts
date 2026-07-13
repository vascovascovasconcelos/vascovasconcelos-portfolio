// Shared config + helpers for the single-page scroll experience.
// Three "steps" of the home page: intro / selected works / about me.

export const SECTIONS = [
  { id: "intro", label: "intro" },
  { id: "selected-works", label: "selected works" },
  { id: "about-me", label: "about me" },
] as const;

// Scroll-position dot: colour + vertical offset (px) within the 138px track,
// taken from the three Figma side-menu states.
export const DOT_STOPS = [
  { color: "#eeff00", top: 1 }, // intro  — yellow, top
  { color: "#ff7dd1", top: 45 }, // works  — pink, middle
  { color: "#7dc0ff", top: 90 }, // about  — blue, bottom
];

// Accent blob: colour, vertical/horizontal placement (viewport units) + opacity.
export const BLOB_STOPS = [
  { color: "#eeff00", topVH: 8, rightVW: 10, opacity: 1 }, // intro — yellow, upper
  { color: "#ff7dd1", topVH: 30, rightVW: 6, opacity: 0.45 }, // works — pink, recedes behind grid
  { color: "#ff80bd", topVH: 42, rightVW: 4, opacity: 1 }, // about — pink, lower
];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function lerpColor(a: string, b: string, t: number) {
  const c1 = hexToRgb(a);
  const c2 = hexToRgb(b);
  const r = Math.round(lerp(c1.r, c2.r, t));
  const g = Math.round(lerp(c1.g, c2.g, t));
  const bl = Math.round(lerp(c1.b, c2.b, t));
  return `rgb(${r}, ${g}, ${bl})`;
}

// Map global scroll progress (0..1) onto a 3-stop track, interpolating numbers
// and any keys listed in `colorKeys` as colours.
export function interpolateStops<T extends Record<string, number | string>>(
  stops: T[],
  progress: number,
  colorKeys: (keyof T)[] = []
): Record<keyof T, number | string> {
  const p = Math.min(1, Math.max(0, progress));
  const seg = p <= 0.5 ? 0 : 1;
  const t = seg === 0 ? p / 0.5 : (p - 0.5) / 0.5;
  const from = stops[seg];
  const to = stops[seg + 1];

  const out = {} as Record<keyof T, number | string>;
  for (const key of Object.keys(from) as (keyof T)[]) {
    if (colorKeys.includes(key)) {
      out[key] = lerpColor(from[key] as string, to[key] as string, t);
    } else {
      out[key] = lerp(from[key] as number, to[key] as number, t);
    }
  }
  return out;
}

// Active section index from scroll progress (for nav highlight).
export function activeIndexFromProgress(progress: number) {
  if (progress < 0.25) return 0;
  if (progress < 0.75) return 1;
  return 2;
}
