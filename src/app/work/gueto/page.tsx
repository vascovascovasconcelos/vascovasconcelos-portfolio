import type { Metadata } from "next";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, Mark, CaptionedMockup } from "@/components/project/prose";
import MediaCarousel, { type MediaItem } from "@/components/MediaCarousel";

const TITLE = "25 Years of Gueto";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "Celebrating graffiti artist Gueto's milestone, connecting his art to football.",
};

const CREDITS = [
  { label: "year", value: "2023" },
  { label: "role", value: "designer" },
  { label: "client", value: "Gueto, graffiti artist" },
];

// Editorial photos (varied widths, all 650px tall in Figma).
const PHOTOS: MediaItem[] = [
  { src: "/projects/gueto/c1-1.png", width: 400, height: 650 },
  { src: "/projects/gueto/c1-2.png", width: 400, height: 650 },
  { src: "/projects/gueto/c1-3.png", width: 900, height: 650 },
  { src: "/projects/gueto/c1-4.png", width: 900, height: 650 },
  { src: "/projects/gueto/c1-5.png", width: 400, height: 650 },
  { src: "/projects/gueto/c1-6.png", width: 900, height: 650 },
];

// Editorial media — videos autoplay + loop, bookending two photos.
const REEL: MediaItem[] = [
  {
    type: "video",
    src: "/projects/gueto/videos/video1.mp4",
    width: 480,
    height: 848,
  },
  { src: "/projects/gueto/videos/poster-1.png", width: 568, height: 650 },
  { src: "/projects/gueto/videos/poster-2.png", width: 568, height: 650 },
  {
    type: "video",
    src: "/projects/gueto/videos/video2.mp4",
    width: 480,
    height: 848,
  },
];

const linkClass =
  "text-ink underline decoration-from-font underline-offset-2 transition-opacity hover:opacity-60";

export default function GuetoCaseStudy() {
  return (
    <ProjectLayout
      label="Gueto, graffiti artist"
      title={TITLE}
      subtitle="Celebrating the artist's milestone connecting his art to football"
      credits={CREDITS}
      cover="/projects/gueto/cover.png"
      coverAlt="25 Years of Gueto — limited edition football shirt"
    >
      <CaptionedMockup
        src="/projects/gueto/mockup-1.png"
        width={650}
        height={560}
        alt="Gueto's limited edition football shirt"
        caption="A football shirt connecting Gueto's art, his childhood dream and his relationship with the sport"
      />

      <P>
        In 2023, to celebrate 25 years of graffiti worldwide,{" "}
        <Mark>
          Gueto decided to bring to life his childhood dream: a football shirt.
        </Mark>
      </P>
      <P>
        In this journey, I work with Gueto to{" "}
        <Mark>
          design the limited edition jersey, souvenirs and print materials to
          tell his story in art and to remember his trajectory.
        </Mark>
      </P>

      <MediaCarousel items={PHOTOS} alt="Gueto anniversary drop photo" />

      <P>
        For this anniversary drop, I designed the badge and the shirt conceived
        by Gueto, the typography, the package, the flag and the print materials.
      </P>
      <P>
        The editorial photos took place in Vila Belmiro, a football&apos;s temple
        and Santos FC stadium – club that I share the support with Gueto.
      </P>

      <MediaCarousel items={REEL} alt="Gueto editorial reel" />

      <p className="mt-4 text-[18px] tracking-[-0.04em] text-ink-soft">
        Check Gueto&apos;s art in his{" "}
        <a
          href="https://www.instagram.com/gueto1/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          Instagram
        </a>{" "}
        and his{" "}
        <a
          href="https://www.gueto1.com/"
          target="_blank"
          rel="noreferrer"
          className={linkClass}
        >
          website
        </a>
        .
      </p>

      <p className="text-[16px] tracking-[-0.04em] text-ink-soft">
        Credits: Fernanda Hernandez (executive producer and model), Gizmo Nomura
        (photographer), Victor Hugo P. (videomaker) and Vitor Santana (model)
      </p>
    </ProjectLayout>
  );
}
