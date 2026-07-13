import ArrowOutward from "./ArrowOutward";

const LINKS = [
  {
    label: "hello@vascovasconcelos.com",
    href: "mailto:hello@vascovasconcelos.com",
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/thiagovascovasconcelos/",
  },
];

// Mobile contact links. `fixed` = translucent bar pinned to the bottom (home);
// `footer` = a static block at the end of the page (project case study), with
// extra bottom room so the floating FAB doesn't cover it.
export default function MobileLinks({
  variant = "fixed",
}: {
  variant?: "fixed" | "footer";
}) {
  const wrap =
    variant === "fixed"
      ? "fixed inset-x-0 bottom-0 z-30 bg-white/50 py-8 backdrop-blur-[7px]"
      : "pb-[120px] pt-10";

  return (
    <div
      className={`flex flex-col items-center gap-3 text-ink lg:hidden ${wrap}`}
    >
      {LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group flex items-start gap-2"
        >
          <span className="text-[18px] tracking-[-0.04em]">{link.label}</span>
          <ArrowOutward className="size-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </div>
  );
}
