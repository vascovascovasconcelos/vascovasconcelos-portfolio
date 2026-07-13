import type { Metadata } from "next";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, CaptionedMockup } from "@/components/project/prose";
import MediaCarousel, { type MediaItem } from "@/components/MediaCarousel";

const TITLE = "New experience vision for ge App";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "A new product vision for Globo's ge App, built by design and through design.",
};

const CREDITS = [
  { label: "year", value: "2025" },
  { label: "role", value: "staff product designer" },
  { label: "company", value: "Globo" },
];

// Carousels — varied-width phone mockups on their blob panels, all 560 tall,
// from the Figma "ge Carousel" board.
const CAROUSEL_1: MediaItem[] = [
  { src: "/projects/ge/c1-1.png", width: 399, height: 560 },
  { src: "/projects/ge/c1-2.png", width: 399, height: 560 },
  { src: "/projects/ge/c1-3.png", width: 650, height: 560 },
];

const CAROUSEL_2: MediaItem[] = [
  { src: "/projects/ge/c2-1.png", width: 650, height: 560 },
  { src: "/projects/ge/c2-2.png", width: 399, height: 560 },
  { src: "/projects/ge/c2-3.png", width: 399, height: 560 },
  { src: "/projects/ge/c2-4.png", width: 399, height: 560 },
];

const CAROUSEL_3: MediaItem[] = [
  { src: "/projects/ge/c3-1.png", width: 399, height: 560 },
  { src: "/projects/ge/c3-2.png", width: 737, height: 560 },
];

const linkClass =
  "text-ink underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60";

export default function GeCaseStudy() {
  return (
    <ProjectLayout
      label="ge.globo"
      title={TITLE}
      subtitle="A new product vision built by design and through design"
      credits={CREDITS}
      cover="/projects/ge/cover.png"
      coverAlt="ge App — a new experience vision"
    >
      <CaptionedMockup
        src="/projects/ge/mockup-1.png"
        width={650}
        height={560}
        alt="ge App's new imagetic feed"
        caption="New imagetic feed: bringing sports' passion and language to the front"
      />

      <P>
        In the end of 2024, ge, Globo&apos;s digital product, began to reevaluate
        its strategy in app platform, to bring value to its native experience and
        to differentiate itself from competitors and from the website, which
        leads with a broad margin in Brazil.
      </P>
      <P>
        The digital consumption and user habits have change, so ge was facing
        some challenges: users expect a customized experience, traditional news
        formats declines in indicators and new players arrived in sports category
        and the experience turned to be a differential.
      </P>

      <MediaCarousel items={CAROUSEL_1} alt="ge App concept screen" />

      <P>
        So, I lead, in this concept project, and end-to-end redesign process and
        built a new product vision based on 5 experience premisses:
      </P>

      <ul className="max-w-[650px] list-disc space-y-2 pl-5 leading-[1.45] tracking-[-0.04em] text-ink-soft text-[18px]">
        <li>
          an ever-new experience, where the content are dynamic, relevant, plural
          and always fresh
        </li>
        <li>
          ge app always with you: a companion experience that shapeshifts and
          responds to the user journey
        </li>
        <li>
          sport is playful: the content should call you to interact, talk and
          have fun
        </li>
        <li>
          advertising beyond the banner: contextual monetization integrated to
          the sports journey
        </li>
        <li>
          an app for everyone: interactive, emotional and dynamic for each and
          every fan; for each every club
        </li>
      </ul>

      <MediaCarousel items={CAROUSEL_2} alt="ge App concept screen" />

      <P>
        We validated the concept nationwide, travelling through the five regions
        of Brazil and talking with our users in 12 cities spread in 11 states.
      </P>
      <P>
        This project experimented about gamification in user&apos;s profile
        construction, flexible and imagetic language, structured content and
        emotional experiences. It&apos;s still a work in progress and it&apos;s
        already earning results: ge app have a new and imagetic feed for football
        clubs, new content formats and an updated services&apos; verticals such
        as tournament tables and matches calendar. Also, this concept are
        bringing ge&apos;s branding closer to its users, with customized icons
        and splashscreens.
      </P>

      <MediaCarousel items={CAROUSEL_3} alt="ge App concept screen" />

      <P>
        Credits to the amazing team of designers that work besides me: Ana
        Vitória Leite and Luiza Nunes Teich. Also, a special thanks to
        Globo&apos;s UX leadership that worked close with us: Leando Geijfinbein
        (UX director) and Rodrigo Santos (UX manager).
      </P>

      <p className="text-[18px] tracking-[-0.04em] text-ink-soft">
        GE is available on{" "}
        <a
          href="https://apps.apple.com/br/app/ge-copa-do-mundo-fifa-2026/id361393520"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          iOS
        </a>{" "}
        and{" "}
        <a
          href="https://play.google.com/store/apps/details?id=com.globo.ge.app&hl=pt_BR"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Android
        </a>
        .
      </p>
    </ProjectLayout>
  );
}
