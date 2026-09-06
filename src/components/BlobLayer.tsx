const VARIANTS = ["intro", "works", "about"] as const;

const CONFIG = {
  intro: { pos: "blob-pos-intro", drift: "blob-drift-a" },
  works: { pos: "blob-pos-works", drift: "blob-drift-b" },
  about: { pos: "blob-pos-about", drift: "blob-drift-a" },
} as const;

// Fixed accent blob layer. Shows the active section's blob; the `key` remounts it
// on section change so the entrance animation (from top / from bottom) replays.
// The blob is a fixed accent colour (#EEFF00); movement runs on its own.
export default function BlobLayer({ activeIndex }: { activeIndex: number }) {
  const variant = VARIANTS[activeIndex] ?? "intro";

  // No blob on the "selected works" step — it competes with the project grid.
  if (variant === "works") return null;

  const cfg = CONFIG[variant];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      <div key={variant} className={cfg.pos}>
        <div className={cfg.drift}>
          <div className="blob-core" />
        </div>
      </div>
    </div>
  );
}
