import { WORKS } from "@/lib/projects";

// Selected works — a numbered list distributed evenly across the viewport
// height (justify-between fills the panel). Idle: dark titles. On hover the
// pointed row gets an accent marker highlight while the others dim (see
// `.works-list` in globals.css). Only projects that have a case-study page are
// shown; planned entries (no href) stay in WORKS but are hidden and the numbers
// reflow automatically.
export default function WorksSection() {
  const works = WORKS.filter((work) => work.href);

  return (
    <section
      id="selected-works"
      className="flex h-dvh snap-start snap-always flex-col px-8 pb-[136px] pt-[144px] sm:px-10 lg:px-0 lg:py-[40px] lg:pl-[394px] lg:pr-12"
    >
      <h2 className="sr-only">Selected works</h2>
      <ol className="works-list no-scrollbar flex flex-1 flex-col justify-center gap-3 overflow-y-auto lg:gap-[40px] lg:max-w-[893px]">
        {works.map((work, i) => (
          <li key={work.title}>
            <a
              href={work.href}
              aria-label={work.title}
              className="work-row flex items-start gap-4 outline-none lg:gap-6"
            >
              <span
                className="work-num shrink-0 pt-[0.35em] text-center font-medium tracking-[-0.04em] text-[clamp(14px,2.6vw,24px)] w-3 lg:w-4"
                style={{ fontFeatureSettings: '"cv01" 1' }}
              >
                {i + 1}
              </span>
              <span className="work-title -mx-1 box-decoration-clone px-1 font-light leading-[1.1] tracking-[-0.04em] text-[clamp(26px,calc(18.2vw-38px),40px)] lg:text-[clamp(30px,3.34vw,48px)]">
                {work.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
