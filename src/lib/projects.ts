export type Project = {
  title: string;
  label: string; // small overline shown on hover, e.g. "ge.globo"
  description: string;
  image: string;
  href: string;
};

// Selected works. Replace placeholders with real case studies + thumbnails
// (drop images in /public/projects).
export const PROJECTS: Project[] = [
  {
    title: "Vai e Vem do Mercado",
    label: "ge.globo",
    description:
      "An experience for the football transfer market that became a reference through Globo's digital publishing ecosystem.",
    image: "/projects/vai-e-vem-thumb.png",
    href: "/work/vai-e-vem-do-mercado",
  },
  {
    title: "Premiere",
    label: "globo",
    description:
      "App's journey evolution, accessibility culture and product growth for Globo's football streaming.",
    image: "/projects/premiere/thumb.png",
    href: "/work/premiere",
  },
  {
    title: "25 Years of Gueto",
    label: "gueto, graffiti artist",
    description:
      "Celebrating the artist's milestone connecting his art to football.",
    image: "/projects/gueto/thumb.png",
    href: "/work/gueto",
  },
  {
    title: "Pix Payment Journey",
    label: "iti/Itaú",
    description:
      "The first financial institution to launch Pix, with a whole new payments' journey.",
    image: "/projects/iti/thumb.png",
    href: "/work/iti",
  },
  {
    title: "New experience vision for ge App",
    label: "ge.globo",
    description:
      "A new product vision for ge App, built by design and through design.",
    image: "/projects/ge/mockup-1.png",
    href: "/work/ge",
  },
];
