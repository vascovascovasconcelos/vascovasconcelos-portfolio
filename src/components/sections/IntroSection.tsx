export default function IntroSection() {
  return (
    <section
      id="intro"
      className="flex min-h-dvh snap-start items-center px-8 pb-[132px] pt-[176px] sm:px-10 lg:px-0 lg:pb-0 lg:pl-[394px] lg:pr-12 lg:pt-0"
    >
      <div className="flex max-w-[652px] flex-col gap-8">
        <h1 className="font-light leading-[1.06] tracking-[-0.04em] text-ink text-[clamp(40px,6.4vw,72px)]">
          i&apos;m Vasco,
          <br />a designer from
          <br />São Paulo, Brasil
        </h1>
        <p className="max-w-[481px] leading-[1.3] tracking-[-0.04em] text-ink-soft text-[clamp(18px,2.4vw,24px)]">
          i&apos;m passionate about building products where craft and
          systems-thinking meet. right now, i&apos;m working as a staff product
          designer at Globo.
        </p>
      </div>
    </section>
  );
}
