import type { Metadata } from "next";
import { } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Github Blog With Obsidian",
  description: "Develop by Kyoulee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
