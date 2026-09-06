import type { Metadata } from "next";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, Stats } from "@/components/project/prose";
import MediaCarousel, { type MediaItem } from "@/components/MediaCarousel";

const TITLE = "DALE's 2026 World Cup Office Pool";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "An office pool platform connecting the World Cup to corporate communication and the employee's journey, for DALE.",
};

const CREDITS = [
  { label: "year", value: "2025" },
  { label: "role", value: "product designer" },
  { label: "client", value: "DALE" },
];

// Product shots — varied-width mockups (MacBook / phones / cards), all 942 tall,
// from the Figma "DALE Bolão" board.
const SHOTS: MediaItem[] = [
  { src: "/projects/dale/c1.png", width: 914, height: 942 },
  { src: "/projects/dale/c2.png", width: 976, height: 942 },
  { src: "/projects/dale/c3.png", width: 650, height: 942 },
  { src: "/projects/dale/c4.png", width: 650, height: 942 },
  { src: "/projects/dale/c5.png", width: 914, height: 942 },
];

// Wide composition of the platform's cards/snacks (single shot).
const WIDE: MediaItem[] = [
  { src: "/projects/dale/wide.png", width: 1346, height: 650 },
];

const STATS = [
  { value: "17", label: "companies, such as Globo, TOTVS and ArcelorMittal" },
  { value: "+60k", label: "participants employees" },
  { value: "+1,1M", label: "registered tips" },
  { value: "44,1%", label: "on average employee's adhesion" },
];

export default function DaleCaseStudy() {
  return (
    <ProjectLayout
      label="freelancer for DALE"
      title={TITLE}
      subtitle="Connecting the world's biggest and most-watched single-sport event to corporate communication and to the employee's journey"
      credits={CREDITS}
      cover="/projects/dale/cover.png"
      coverAlt="DALE's 2026 World Cup Office Pool"
    >
      <P>
        Nothing compares to football&apos;s World Cup global impact: it engages 5
        billion fans and has almost 1.5 billion viewers on a single match (FIFA,
        2022) – for instance, Super Bowl, most successful American sports event,
        reaches an average of 125 million viewers.
      </P>
      <P>
        In Brazil, 5 times World Cup&apos;s champions and a country where
        football is seen as a religion, the event is omnipresent in our daily
        life: street walls and sidewalks painted, flags and adornments hanging,
        family and friends gathering to watch games and creating sweepstakes to
        have fun. Also, World Cup has huge effects on the corporate journey:
        coworkers watching matches together, we have time off when Brazil&apos;s
        national team plays and some office pools are organised between the
        employees.
      </P>

      <MediaCarousel items={SHOTS} alt="DALE Bolão platform screen" />

      <P>
        In this context, DALE, an awarded and successful corporate communication
        agency, brought together the Brazilian passion for football and a
        well-established habit to the corporate journey, creating an office pool
        platform for companies, engaging employees with data security and using
        the event as another touchpoint for internal communication.
      </P>
      <P>
        As a die-hard football fan, I was happy to be the designer responsible
        for Bolão – Brazilian term for sweepstakes –, from design system,
        typography scales and foundations to interface and user flows. In the
        platform&apos;s journey, the employees should have access to their tips,
        to tournament schedules and to corporate information, such as messages
        for time-off for Brazil&apos;s matches and the prizes at stake in the
        office pool.
      </P>

      <MediaCarousel items={WIDE} alt="DALE Bolão platform cards" />

      <P>
        For the design system, it was crucial the platform was flexible enough
        for different colour palettes beyond the default identity, so the
        foundations were created to scale through six themes.
      </P>
      <P>
        In the experience, the primary goal was to highlight the upcoming matches
        to be filled in and also to have a fluid flow between the sections,
        recirculating between the function of making tips and the engagement with
        message board and the informative areas.
      </P>
      <P>In the 2026 edition, the results were massive:</P>

      <Stats items={STATS} />

      <P>
        This project was developed for DALE with my amazing and talented former
        coworkers Marcelo Rouco and Fatima Petronieri.
      </P>
    </ProjectLayout>
  );
}
