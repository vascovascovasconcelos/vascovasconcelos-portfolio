const linkClass =
  "underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60";

export default function AboutSection() {
  return (
    <section
      id="about-me"
      className="flex min-h-dvh snap-start items-center px-8 pb-[132px] pt-[176px] sm:px-10 lg:px-0 lg:pb-0 lg:pl-[394px] lg:pr-12 lg:pt-0"
    >
      <div className="flex max-w-[481px] flex-col gap-[46px]">
        <h2 className="leading-[1.25] tracking-[-0.04em] text-ink text-[24px]">
          with 15 years of experience as a designer, i navigate across product,
          design systems, branding, 2D animation and art direction.
        </h2>

        <p className="leading-[1.4] tracking-[-0.04em] text-ink-soft text-[18px]">
          since 2021, I work at{" "}
          <a href="#" className={linkClass}>
            Globo
          </a>
          , the largest media company in Latin America, where I led design by
          craft for design system and sports products. but I was previously a
          staff product designer at{" "}
          <a href="#" className={linkClass}>
            Serasa
          </a>
          , a senior product designer at{" "}
          <a href="#" className={linkClass}>
            Geekie
          </a>{" "}
          and{" "}
          <a href="#" className={linkClass}>
            iti/Itaú
          </a>
          . I also worked as a head of creative at{" "}
          <a href="#" className={linkClass}>
            DALE
          </a>
          , an all-service agency.
        </p>

        <p className="leading-[1.4] tracking-[-0.04em] text-ink-soft text-[18px]">
          for more experiences or any further inquiry, feel welcome to check my{" "}
          <a
            href="https://www.linkedin.com/in/thiagovascovasconcelos/"
            target="_blank"
            rel="noreferrer"
            className={linkClass}
          >
            linkedin
          </a>{" "}
          or contact me by{" "}
          <a href="mailto:hello@vascovasconcelos.com" className={linkClass}>
            email
          </a>
          .
        </p>
      </div>
    </section>
  );
}
