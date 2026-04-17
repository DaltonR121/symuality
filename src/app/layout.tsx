import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.symuality.com";
const SITE_DESCRIPTION =
  "Ryan Dalton's corner of the internet. Software engineer, Army veteran, founder of Mosaic Ridge in Churchville, VA.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Symuality — Ryan Dalton, Software Engineer",
    template: "%s — Symuality",
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Symuality",
    url: SITE_URL,
    title: "Symuality — Ryan Dalton, Software Engineer",
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Symuality",
    site: "@Symuality",
    title: "Symuality — Ryan Dalton, Software Engineer",
    description: SITE_DESCRIPTION,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryan Dalton",
  alternateName: "Symuality",
  url: SITE_URL,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Mosaic Ridge",
    url: "https://mosaicridge.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Churchville",
    addressRegion: "VA",
    addressCountry: "US",
  },
  sameAs: [
    "https://github.com/DaltonR121",
    "https://x.com/Symuality",
    "https://www.youtube.com/channel/UCTKTWU21iCtx02T-v5OsHsA",
    "https://ryandalton.dev",
    "https://mosaicridge.com",
  ],
};

/** Root document shell. Injects a Person JSON-LD block for search engines. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
