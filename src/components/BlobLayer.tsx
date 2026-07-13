const VARIANTS = ["intro", "works", "about"] as const;

const CONFIG = {
  intro: { pos: "blob-pos-intro", cycle: "blob-cycle-warm", drift: "blob-drift-a" },
  works: { pos: "blob-pos-works", cycle: "blob-cycle-cool", drift: "blob-drift-b" },
  about: { pos: "blob-pos-about", cycle: "blob-cycle-cool", drift: "blob-drift-a" },
} as const;

// Fixed accent blob layer. Shows the active section's blob; the `key` remounts it
// on section change so the entrance animation (from top / from bottom) replays.
// Movement and colour cycling run on their own — no interaction needed.
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
          <div className={`blob-core ${cfg.cycle}`} />
        </div>
      </div>
    </div>
  );
}
