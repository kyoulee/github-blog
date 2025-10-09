import type { Metadata } from "next";
import {} from "next/font/google";
import "./globals.css";

import faviconLight from "@/app/favicon/favicon-light.svg";
import faviconDark from "@/app/favicon/favicon-dark.svg";

import { PrimerProvider } from "@/app/themes/PrimerProvider";

export const metadata: Metadata = {
  title: "Github Blog With Obsidian",
  description: "Develop by Kyoulee",
  icons: {
    icon: [
      {
        rel: "icon",
        url: faviconLight.src,
        media: "(prefers-color-scheme: light)",
      },
      {
        rel: "icon",
        url: faviconDark.src,
        media: "(prefers-color-scheme: dark)",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <PrimerProvider>{children}</PrimerProvider>
      </body>
    </html>
  );
}
