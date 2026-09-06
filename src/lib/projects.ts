export type Work = {
  title: string;
  // Case-study route. Omitted for projects that don't have a page yet — those
  // rows render as plain (non-navigating) items in the list.
  href?: string;
};

// Selected works, in display order. Numbered list on the home page.
export const WORKS: Work[] = [
  { title: "New Product Vision for ge App", href: "/work/ge" },
  { title: "ge's Vai e Vem do Mercado", href: "/work/vai-e-vem-do-mercado" },
  { title: "Pix Payment Journey @ iti/Itaú", href: "/work/iti" },
  { title: "ge's Matchday Center" },
  { title: "DALE's 2026 World Cup Office Pool" },
  { title: "Premiere App", href: "/work/premiere" },
  { title: "Nexo's Design System" },
  { title: "25 Years of Gueto", href: "/work/gueto" },
];
