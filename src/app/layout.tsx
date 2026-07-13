import type { Metadata } from "next";
import { Rubik, Special_Gothic } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

const specialGothic = Special_Gothic({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-special-gothic",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Vasco Vasconcelos — Product Designer",
  description:
    "i'm Vasco, a designer from São Paulo, Brasil. Passionate about craft and making things. Staff product designer at Globo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${specialGothic.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
