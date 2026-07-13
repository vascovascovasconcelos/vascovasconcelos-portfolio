import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/lib/projects";

export default function WorksSection() {
  return (
    <section
      id="selected-works"
      className="flex min-h-dvh snap-start items-center px-0 pb-[132px] pt-[176px] lg:px-0 lg:pb-0 lg:pl-[394px] lg:pr-12 lg:pt-0"
    >
      <h2 className="sr-only">Selected works</h2>
      <div className="group/grid grid w-full grid-cols-2 gap-0 lg:max-w-[821px]">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
