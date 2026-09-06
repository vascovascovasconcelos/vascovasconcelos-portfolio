import Image from "next/image";
import ProjectProgressBar from "@/components/ProjectProgressBar";
import ProjectSideMenu from "@/components/ProjectSideMenu";
import ProjectMobileHeader from "@/components/ProjectMobileHeader";
import ProjectMobileFab from "@/components/ProjectMobileFab";
import ProjectFab from "@/components/ProjectFab";
import ProjectLightbox from "@/components/project/ProjectLightbox";
import MobileLinks from "@/components/MobileLinks";

type Credit = { label: string; value: string };

// Shared case-study shell: fixed chrome (progress bar, side menu, FAB, mobile
// header/footer), full-bleed cover, and the title + credits block. The body
// content is passed as children.
export default function ProjectLayout({
  label,
  title,
  subtitle,
  credits,
  cover,
  coverAlt,
  coverWidth = 1440,
  coverHeight = 398,
  children,
}: {
  label: string;
  title: string;
  subtitle: string;
  credits: Credit[];
  cover: string;
  coverAlt: string;
  coverWidth?: number;
  coverHeight?: number;
  children: React.ReactNode;
}) {
  return (
    <>
      <ProjectProgressBar />
      <ProjectFab title={title} />
      <ProjectSideMenu />
      <ProjectMobileHeader coverHeight={200} />
      <ProjectMobileFab title={title} />

      <main className="overflow-x-clip bg-paper lg:pb-32">
        {/* Cover (full-bleed — 200px on mobile, 280px on desktop) */}
        <Image
          src={cover}
          width={coverWidth}
          height={coverHeight}
          alt={coverAlt}
          priority
          unoptimized
          className="h-[200px] w-full object-cover lg:h-[280px]"
        />

        {/* Content clears the fixed menu (min 394px left) but centers on wide
            viewports instead of staying pinned to the left. */}
        <div className="px-6 py-10 sm:px-10 lg:pb-24 lg:pl-[max(394px,calc((100vw-870px)/2))] lg:pr-12 lg:pt-12">
          <article
            data-gallery
            className="flex flex-col items-start gap-12 lg:max-w-[870px]"
          >
            {/* Title + credits. On lg the credits are pulled out of flow
                (absolute) so the taller credits column doesn't stretch the
                title block or push the body down. */}
            <div className="relative w-full">
              <header className="flex max-w-[650px] flex-col gap-4">
                <p className="text-[24px] tracking-[-0.04em] text-ink-soft">
                  {label}
                </p>
                <h1 className="font-light leading-[1.05] tracking-[-0.04em] text-ink text-[clamp(36px,5vw,56px)]">
                  {title}
                </h1>
                <p className="text-[24px] leading-[1.25] tracking-[-0.04em] text-ink-soft">
                  {subtitle}
                </p>
              </header>

              <dl className="mt-8 text-[16px] tracking-[-0.04em] lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:w-[180px]">
                {credits.map((row) => (
                  <div
                    key={row.label}
                    className="flex gap-4 border-t border-[#d9d9d9] py-3 lg:flex-col lg:gap-2"
                  >
                    <dt className="w-[84px] shrink-0 text-ink-soft lg:w-auto">
                      {row.label}
                    </dt>
                    <dd className="text-ink">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {children}
          </article>
        </div>

        {/* Mobile footer — contact links live only here */}
        <MobileLinks variant="footer" />
      </main>

      <ProjectLightbox />
    </>
  );
}
