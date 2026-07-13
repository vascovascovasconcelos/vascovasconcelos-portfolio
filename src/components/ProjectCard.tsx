import Image from "next/image";
import type { Project } from "@/lib/projects";

// Idle = full-bleed image. On hover the description sits ON the card as a 75%
// black overlay (image still visible underneath, not blurred). Other cards blur.
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      aria-label={`${project.title} — ${project.label}`}
      className="group/card relative block aspect-[410/400] w-full overflow-hidden outline-none transition-[z-index] hover:z-10"
    >
      <Image
        src={project.image}
        alt={`${project.title} — ${project.label}`}
        fill
        sizes="(max-width: 640px) 100vw, 410px"
        unoptimized
        className="object-cover object-top transition duration-500 will-change-[filter,opacity] group-hover/grid:opacity-60 group-hover/grid:blur-[3px] group-hover/card:!opacity-100 group-hover/card:!blur-0"
      />

      {/* Description overlay — sits on top of this card's own image */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center gap-4 bg-black/75 p-6 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100">
        <span className="text-[#aeaeae] text-[20px] tracking-[-0.04em]">
          {project.label}
        </span>
        <span className="font-light leading-[1.05] tracking-[-0.04em] text-accent text-[clamp(28px,3vw,48px)]">
          {project.title}
        </span>
        <p className="font-light leading-[1.25] tracking-[-0.04em] text-white text-[clamp(16px,1.6vw,24px)]">
          {project.description}
        </p>
      </div>
    </a>
  );
}
