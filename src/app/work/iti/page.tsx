import type { Metadata } from "next";
import CardCarousel from "@/components/CardCarousel";
import ProjectLayout from "@/components/project/ProjectLayout";
import { P, CaptionedMockup } from "@/components/project/prose";

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
        Working, as a contractor from IBM, on Payments&apos; squad at iti,
        Itaú&apos;s former digital bank, Pix – a new instant payment form from
        Brazilian Central Bank – was taking place in November, 16, 2020 and it
        need a technical rebuild and a new payment journey, which we took as an
        opportunity to bring a new, proprietary experience and visual identity.
      </P>
      <P>
        The previous payment journey was content-heavy, less gestural and
        brandless.
      </P>

      <CardCarousel cards={OLD_JOURNEY} alt="iti's previous payment journey" />

      <P>
        We had a more fluid and flexible payment journey, that merges the
        previous default forms as DOC/TED and bank payment slip with the new
        tokens as mobile phone number, security number, e-mail and random key.
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
          we remark the interface with the new iti&apos;s proprietary visual
          identity (using the pink palette), highlighting the iticon avatar to
          bring a friendly touch to the journey
        </li>
        <li>
          we added send message feature to all users, antecipating a side social
          feature for the transaction – before Pix feature, messages were only
          allowed between iti&apos;s accounts
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
        iti was the first financial institution to rollout Pix feature the its
        whole userbase, 5 days before it was available to the entire banking
        system. Also, 6 months after Pix launch, the app doubled its client base
        (from 3MM to 6MM users).
      </P>

      <p className="text-[16px] tracking-[-0.04em] text-ink-soft">
        Credit also to Luiza Furtado (Itaú), who worked with me as IA/UX
        designer.
      </p>
    </ProjectLayout>
  );
}
