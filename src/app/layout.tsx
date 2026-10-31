import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Syne } from "next/font/google";
import { GeistPixelSquare } from 'geist/font/pixel';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ritik Chawla - Frontend Developer",
  description:
    "Ritik Chawla is a Frontend Developer based in India, building scalable, high-performance web apps with React, Next.js and clean API integration.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Ritik Chawla",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "Portfolio",
  ],
  openGraph: {
    title: "Ritik Chawla - Frontend Developer",
    description: "Ritik Chawla's portfolio — React & Next.js developer based in India.",
    siteName: "Ritik Chawla",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Chawla - Frontend Developer",
    description: "Ritik Chawla's portfolio — React & Next.js developer based in India.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ritik Chawla",
              sameAs: [
                "https://github.com/RitikChawla197",
                "https://www.linkedin.com/in/ritikchawla197",
              ],
              jobTitle: "Frontend Developer",
            }),
          }}
        />
      </head>

      <body className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
