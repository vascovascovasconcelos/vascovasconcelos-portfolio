import type { Metadata } from "next";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, Mark, Stats } from "@/components/project/prose";
import MediaCarousel, { type MediaItem } from "@/components/MediaCarousel";

const TITLE = "ge's Matchday Center";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "A design-led opportunity to bring a matchday overview experience to ge's users.",
};

const CREDITS = [
  { label: "year", value: "2026" },
  { label: "role", value: "staff product designer" },
  { label: "company", value: "Globo" },
];

// Product shots — phone + MacBook mockups, all 942 tall, from the Figma
// "ge's Matchday" board.
const SHOTS: MediaItem[] = [
  { src: "/projects/matchday/c1.png", width: 650, height: 942 },
  { src: "/projects/matchday/c2.png", width: 914, height: 942 },
  { src: "/projects/matchday/c3.png", width: 650, height: 942 },
  { src: "/projects/matchday/c4.png", width: 650, height: 942 },
  { src: "/projects/matchday/c5.png", width: 650, height: 942 },
];

const STATS = [
  { value: "+32%", label: "video views per session" },
  { value: "+13%", label: "average session duration" },
  { value: "+6%", label: "video completion rate" },
  { value: "-1.3%", label: "pageviews per session" },
];

const linkClass =
  "text-ink underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60";

export default function MatchdayCaseStudy() {
  return (
    <ProjectLayout
      label="ge.globo"
      title={TITLE}
      subtitle="A design-led opportunity to bring an matchday overview experience to ge's users"
      credits={CREDITS}
      cover="/projects/matchday/cover.png"
      coverAlt="ge's Matchday Center"
    >
      <P>
        As a staff designer at ge, Globo&apos;s main sports product, I have the
        autonomy, as I did with the Vai e Vem do Mercado project, to envision,
        draft and pitch self-initiated opportunities to my business partners.{" "}
        <Mark>
          The project for ge&apos;s Matchday Center emerged after I noticed the
          product&apos;s video-view metrics were below target and after observing
          users&apos; habits: the need to follow the main events across
          simultaneous matches.
        </Mark>
      </P>
      <P>
        This need was met in American football in the form of NFL RedZone, but
        when it comes to football in Brazil, users consume the main events of the
        matchdays on pirate channels on X, WhatsApp and Telegram, which harms the
        broadcasting rights holders such as Globo. Also, it appeared to be a{" "}
        <Mark>
          great way to deliver our vast VOD collection that was only distributed
          in ge through individual live feeds
        </Mark>, which limited the consumption scope of the product.
      </P>
      <P>
        The main pitch message was to bring a matchday overview experience,
        making it easier for the user to be up to date with all the simultaneous
        matches, enriched with curated VODs of the main events and scored goals.{" "}
        <Mark>
          My business hypothesis was that ge&apos;s Matchday Center would increase
          our video-view metrics, as well as pageviews to the individual match
          live feeds users wanted to explore in more depth.
        </Mark>
      </P>
      <div className="flex w-full flex-col gap-3">
        <P>For the user, the experience&apos;s value was:</P>
        <ul className="max-w-[650px] list-disc space-y-2 pl-5 leading-[1.45] tracking-[-0.04em] text-ink-soft text-[18px]">
          <li>the user could follow more than one match simultaneously</li>
          <li>
            the user could have an overview and complementary experience on their
            smartphone while watching a main match on TV
          </li>
          <li>
            the user could be up to date with the main events in the matches,
            such as goals and red cards
          </li>
        </ul>
      </div>

      <MediaCarousel items={SHOTS} alt="ge's Matchday Center screen" />

      <P>
        With these key messages in hand, my pitch was approved by our business
        partners and I started, together with a product owner, to{" "}
        <Mark>
          design a low-cost, rapid test over a three match week span to prove
          whether this experience could be scaled across the product.
        </Mark>
      </P>
      <P>
        The methodology used was an A/B test with a touchpoint on ge&apos;s
        homepage between February 10 and March 12 (2026) and it proved successful
        enough to be scaled across ge.
      </P>
      <P>
        The results, when compared to the control group that wasn&apos;t impacted
        by the Matchday Center touchpoint, were:
      </P>

      <Stats items={STATS} />

      <P>
        <Mark>
          The decrease in pageviews per session was an anticipated trade-off:
        </Mark>{" "}
        with more than one match visible at once on Matchday Center, users had
        less need to click into each individual live feed, since the main events
        were already surfaced within the experience itself.
      </P>

      <p className="text-[18px] tracking-[-0.04em] text-ink-soft">
        You can check the live experience on{" "}
        <a
          href="https://ge.globo.com/futebol/brasileirao-serie-a/central-da-rodada/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          ge.globo
        </a>
      </p>

      <p className="text-[16px] tracking-[-0.04em] text-ink-soft">
        Credit also to Bruno Ferraz, product owner on ge&apos;s data squad, who
        helped to deliver this experience.
      </p>
    </ProjectLayout>
  );
}
