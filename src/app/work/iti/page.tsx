import type { Metadata } from "next";
import CardCarousel from "@/components/CardCarousel";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, Mark, CaptionedMockup } from "@/components/project/prose";

const TITLE = "Pix Payment Journey";

export const metadata: Metadata = {
  title: `${TITLE} — Vasco Vasconcelos`,
  description:
    "The first financial institution to launch Pix with a whole new payments' journey, for iti/Itaú.",
};

const CREDITS = [
  { label: "year", value: "2020" },
  { label: "role", value: "senior product designer" },
  { label: "company", value: "IBM for iti/Itaú" },
];

// Old payment journey — 3 mockups from the Figma "carousel iti" board.
const OLD_JOURNEY = [
  "/projects/iti/old-1.png",
  "/projects/iti/old-2.png",
  "/projects/iti/old-3.png",
];

// New payment journey — 2 mockups from the same board.
const NEW_JOURNEY = ["/projects/iti/new-1.png", "/projects/iti/new-2.png"];

export default function ItiCaseStudy() {
  return (
    <ProjectLayout
      label="iti/Itaú"
      title={TITLE}
      subtitle="The first financial institution that launches Pix with a whole new Payments' journey"
      credits={CREDITS}
      cover="/projects/iti/cover.png"
      coverAlt="iti/Itaú — Pix payment journey"
    >
      <P>
        I worked as an IBM contractor on the Payments squad at iti, Itaú&apos;s
        digital bank. Pix — the Brazilian Central Bank&apos;s new instant payment
        method — launched on November 16, 2020, requiring a technical rebuild and
        a new payment journey. We took this as an opportunity to build a new,
        proprietary experience and visual identity.
      </P>
      <P>
        The previous payment journey was content-heavy, less gestural and lacked
        brand identity.
      </P>

      <CardCarousel cards={OLD_JOURNEY} alt="iti's previous payment journey" />

      <P>
        We built a{" "}
        <Mark>
          more fluid, flexible payment journey that merged the previous default
          forms as DOC/TED and bank payment slip with the new tokens
        </Mark>{" "}
        as mobile phone number, security number, e-mail and random key.
      </P>
      <P>
        After user interviews and usability tests among business and branding
        definitions, we made a transfer &amp; payment hub and a completely new
        flow to the user:
      </P>

      <ul className="max-w-[650px] list-disc space-y-2 pl-5 leading-[1.45] tracking-[-0.04em] text-ink-soft text-[18px]">
        <li>
          a new hub with information hierarchy reorganized on screen, bringing
          more defined content and task groups
        </li>
        <li>
          we refreshed the interface with iti&apos;s{" "}
          <Mark>
            new proprietary visual identity (using the pink palette), highlighting
            the iticon avatar
          </Mark>{" "}
          to bring a friendly touch to the journey
        </li>
        <li>
          we added a messaging feature for all users,{" "}
          <Mark>anticipating a social layer for transactions</Mark> — before Pix,
          messaging was only available between iti accounts
        </li>
      </ul>

      <CardCarousel cards={NEW_JOURNEY} alt="iti's new payment journey" />

      <CaptionedMockup
        src="/projects/iti/confirmation.png"
        width={859}
        height={650}
        alt="iti's new Pix confirmation screen"
      />

      <P>
        <Mark>
          iti was the first financial institution to roll out Pix to its entire
          user base, 5 days before it was available to the entire banking system
        </Mark>. Also, 6 months after Pix launch, the app doubled its client base
        (from 3 million to 6 million users).
      </P>

      <p className="text-[16px] tracking-[-0.04em] text-ink-soft">
        Credit also to Luiza Furtado (Itaú), who worked with me as IA/UX
        designer.
      </p>
    </ProjectLayout>
  );
}
