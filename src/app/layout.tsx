import type { Metadata } from "next";
import { } from "next/font/google";
import "./globals.css";

import faviconLight from "@/app/favicon/favicon-light.svg"
import faviconDark from "@/app/favicon/favicon-dark.svg"

export const metadata: Metadata = {
  title: "Github Blog With Obsidian",
  description: "Develop by Kyoulee",
  icons: {
    icon: [
      {
        rel: 'icon',
        url: faviconLight,
        media: '(prefers-color-scheme: light)',
      },
      {
        rel: 'icon',
        url: faviconLight,
        media: '(prefers-color-scheme: dark)',
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="./favicon/favicon-dark.svg" type="image/svg" sizes="20" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
