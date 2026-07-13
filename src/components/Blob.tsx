/**
 * Soft blurred accent blob, matching the Figma "Blob" frame.
 * Default = the yellow intro blob (354px, 100px blur) anchored top-right.
 */
export default function Blob({
  className = "",
  color = "var(--color-accent)",
  size = 354,
  blur = 100,
}: {
  className?: string;
  color?: string;
  size?: number;
  blur?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        filter: `blur(${blur}px)`,
      }}
    />
  );
}
