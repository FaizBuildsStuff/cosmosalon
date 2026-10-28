import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { excon, exconVariable } from "./fonts";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cosmo Salon",
  description: "Cosmo Salon modern Next.js experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${excon.variable} ${exconVariable.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${excon.className} min-h-full flex flex-col font-sans`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
