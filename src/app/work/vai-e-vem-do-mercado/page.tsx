import type { Metadata } from "next";
import Image from "next/image";
import CardCarousel from "@/components/CardCarousel";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, Mark, Caption, CaptionedMockup, Stats } from "@/components/project/prose";

const TITLE = "Vai e Vem do Mercado";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "An experience for the football transfer market that became a reference through Globo's digital publishing ecosystem.",
};

const CREDITS = [
  { label: "year", value: "2024" },
  { label: "role", value: "staff product designer" },
  { label: "company", value: "Globo" },
];

const STATS = [
  { value: "~20%", label: "of the daily videoviews share" },
  { value: "+300%", label: "pageviews views vs previous experience" },
  { value: "5%", label: "interactions click per pageview" },
  { value: "8%", label: "CTR/pageview redirection to related news" },
];

// Carousel thumbs (card on its team-tinted blob panel) from the Figma
// "Carousel Cards" frame.
const CARDS = [
  "/projects/cards/card1.png",
  "/projects/cards/card2.png",
  "/projects/cards/card3.png",
  "/projects/cards/card4.png",
  "/projects/cards/card5.png",
  "/projects/cards/card6.png",
  "/projects/cards/card7.png",
];

export default function VaiEVemCaseStudy() {
  return (
    <ProjectLayout
      label="ge.globo"
      title={TITLE}
      subtitle="An experience for football transfer market that became a reference through Globo's digital publishing ecosystem"
      credits={CREDITS}
      cover="/projects/vev-cover.png"
      coverAlt="Vai e Vem do Mercado — transfer cards"
    >
      <P>
        At ge, Globo&apos;s sports digital product and Brazilian leading website
        in its category, we faced a problem every year:{" "}
        <Mark>
          during the off-season, content becomes scarce and the main source for
          sports news is focused on transfers rumours and deals.
        </Mark>
      </P>
      <P>
        Such important asset had an passive experience with an outdated language,
        distributed in an inconsistent and disintegrated form on the website and
        app.
      </P>

      <CaptionedMockup
        src="/projects/vev-mockup-1.png"
        width={650}
        height={560}
        alt="The previous Vai e Vem experience on desktop and mobile"
        caption="Previous experience for transfer market at ge: outdated language and passive experience"
      />

      <P>
        Besides all this, the past Vai e Vem was developed in a phasing out
        platform without support or evolutive backlog: the experience
        wasn&apos;t connected to our main sportive database and to the
        editor&apos;s main workflow.
      </P>
      <P>
        In this context,{" "}
        <Mark>
          I envisioned, as an off-backlog opportunity, an imagetic and
          interactive transfer consumption experience
        </Mark>{" "}
        that could integrate the related content in a consistent form, optimizing
        a valued asset to the users and to the company.
      </P>

      {/* Card anatomy with surrounding captions */}
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,650px)_180px] lg:gap-10">
        <figure className="-mx-6 flex items-center justify-center gap-4 rounded-none bg-[#f4f4f4] px-4 py-10 sm:-mx-10 sm:gap-6 sm:px-8 lg:mx-0 lg:rounded-[20px]">
          <div className="hidden w-[150px] flex-col justify-between gap-16 self-stretch py-6 text-right sm:flex">
            <Caption>
              Deal&apos;s main infos: athlete bio and hero, clubs related, status
              and estimated cost
            </Caption>
            <Caption>Link to latest new about the deal</Caption>
          </div>
          <Image
            src="/projects/vev-card.png"
            width={324}
            height={507}
            alt="Vai e Vem athlete transfer card"
            unoptimized
            className="h-auto w-[200px] shrink-0 sm:w-[240px]"
          />
          <div className="hidden w-[150px] flex-col justify-between gap-16 self-stretch py-6 sm:flex">
            <Caption>Athlete&apos;s related video</Caption>
            <Caption>User&apos;s interactive feedback</Caption>
          </div>
        </figure>
        <div className="lg:pt-6">
          <Caption>
            Athlete&apos;s card structure: informative, interactive and imagetic
          </Caption>
        </div>
      </div>

      <P>
        The main goal for Vai e Vem was to bring the transfers information in a
        bold, but familiar interface, consistent to the product language through
        the teams&apos; identities. Beyond the graphic form, this new format was
        powered with content in multiples forms, exploring our text and video
        assets connected to the user&apos;s feedback about the market deals and
        rumours.
      </P>
      <P>
        Also, it showed how we, as designers, could influence roadmaps and
        business indicators when we bring our side ideas to life by craft and
        with autonomy.
      </P>

      {/* Card variations — scroll-aware carousel that bleeds to the viewport edge */}
      <CardCarousel cards={CARDS} alt="Vai e Vem card across team identities" />

      <CaptionedMockup
        src="/projects/vev-mockup-3.png"
        width={650}
        height={560}
        alt="Final Vai e Vem do Mercado experience"
      />

      <P>
        <Mark>
          The new Vai e Vem do Mercado was prioritized and became a reference
          experience at Globo&apos;s digital publishing ecosystem:
        </Mark>{" "}
        it updated the content management system and reached users in an
        interactive and multimedia content approach with significant results:
      </P>

      <Stats items={STATS} />

      <p className="mt-4 text-[18px] tracking-[-0.04em] text-ink-soft">
        You can check the experience{" "}
        <a
          href="https://ge.globo.com/futebol/central-do-mercado/vai-e-vem/vai-e-vem-do-mercado-2026/"
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60"
        >
          here
        </a>
        .
      </p>
    </ProjectLayout>
  );
}
