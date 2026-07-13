import type { Metadata } from "next";
import CardCarousel from "@/components/CardCarousel";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, Mark, CaptionedMockup, Stats } from "@/components/project/prose";

const TITLE = "Premiere";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "Premiere app's journey evolution, accessibility culture and product growth at Globo.",
};

const CREDITS = [
  { label: "year", value: "2021-2022" },
  { label: "role", value: "senior product designer" },
  { label: "company", value: "Globo" },
];

const STATS = [
  { value: "8,8%", label: "increase on the OTT subscriptions" },
  { value: "99%", label: "lift on monthly active users" },
  { value: "+5x", label: "increase on screenviews per session" },
  { value: "96%", label: "lift on video playtime" },
];

// Carousel thumbs (phone on its blob panel) from the Figma "Carousel Premiere" frame.
const HOMESCREEN = [
  "/projects/premiere/home-1.png",
  "/projects/premiere/home-2.png",
  "/projects/premiere/home-3.png",
];

const MATCH_CENTRE = [
  "/projects/premiere/match-1.png",
  "/projects/premiere/match-2.png",
  "/projects/premiere/match-3.png",
];

export default function PremiereCaseStudy() {
  return (
    <ProjectLayout
      label="Globo"
      title={TITLE}
      subtitle="App's journey evolution, accessibility culture and product growth"
      credits={CREDITS}
      cover="/projects/premiere/cover.png"
      coverAlt="Premiere — Globo's football streaming app"
    >
      <P>
        Premiere, Globo&apos;s football subscription streaming product, had a MVP
        app launched in September 2021 and it had some challenges:
      </P>
      <P>
        an experience that reduced the product value, focused on live matches
        pandemics and a more competitive broadcast rights scenario a behaviour
        change in business, from pay TV operators to direct to consumers sales
      </P>
      <P>
        The journey then was very simple, focused on live streaming, which
        represented low consumption metrics between the matches, that impacted on
        the product&apos;s rentability beyond subscription. Also the app had
        accessibility gaps that impact on users and it wasn&apos;t compliant to
        the best practices for digital products.
      </P>

      <CaptionedMockup
        src="/projects/premiere/mockup-1.png"
        width={650}
        height={560}
        alt="The previous Premiere app experience"
        caption="Previous experience at Premiere's app: lack of hierarchy and diverse content"
      />

      <P>
        We had a lot of opportunities for Premiere app: from Globo&apos;s
        ecosystem integration to an efficient usage of company&apos;s sports
        data, improving the experience to a broader journey and user needs beyond
        the match itself.
      </P>
      <P>
        So the objectives with this iteration was to{" "}
        <Mark>
          enrich content, explore our VOD assets and make Premiere go beyond the
          live moment
        </Mark>
        . And it was made visible on the new app&apos;s homescreen and the match
        centre.
      </P>
      <P>
        For the new homescreen, the main goals was to bring customization and
        hierarchy to the journey, making it easier for the users to find matches,
        tournaments and previous matches videos.
      </P>

      <CardCarousel cards={HOMESCREEN} alt="Premiere homescreen" />

      <P>
        At the match centre, Premiere redefined the live match experience. Then
        the user has nothing but the streaming content; in this experience
        iteration,{" "}
        <Mark>
          the user has more immersive information, access to replay&apos;s VOD
          and integration with Globo&apos;s fantasy game (Cartola)
        </Mark>
        . Also, Premiere now offered previous matches content, making the
        app&apos;s journey broader and more valuable.
      </P>
      <P>
        In all these projects, I also build{" "}
        <Mark>an accessibility culture for the product&apos;s team</Mark>:
        reviewing colour palettes and typographic patterns by designing a
        documentation structure for engineering.
      </P>

      <CardCarousel cards={MATCH_CENTRE} alt="Premiere match centre" />

      <P>
        This new experience was a milestone to the following iterations at the
        product and built a strong culture for accessibility. As the results,
        Premiere had:
      </P>

      <Stats items={STATS} />

      <p className="text-[16px] tracking-[-0.04em] text-ink-soft">
        *data from December, 2021, to April, 2022
      </p>
      <p className="text-[18px] tracking-[-0.04em] text-ink-soft">
        You can check Premiere&apos;s app out for{" "}
        <a
          href="https://apps.apple.com/br/app/premiere-jogos-ao-vivo/id468481865"
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60"
        >
          iOS
        </a>{" "}
        and{" "}
        <a
          href="https://play.google.com/store/apps/details?id=br.tv.horizonte.android.premierefc&hl=pt_BR"
          target="_blank"
          rel="noreferrer"
          className="text-ink underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60"
        >
          Android
        </a>
      </p>
    </ProjectLayout>
  );
}
