import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import { FloatingWhatsApp } from "@/components/portfolio/FloatingWhatsApp";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const bungee = Bungee({
  weight: "400",
  variable: "--font-bungee",
  subsets: ["latin"],
  display: "swap",
});

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.author} — Full-Stack Developer`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: ["Full-Stack Developer", "React Expert", "Next.js Development", "Web Engineering", "UI/UX Design", "Kevin van Deventer", "FullWebDevKev"],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png" },
    ],
    other: [
      { rel: "manifest", url: "/site.webmanifest" },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.author}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.author}`,
    description: siteConfig.description,
    creator: siteConfig.links.twitter.split("/").pop(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bungee.variable} antialiased`}>
      <head>
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: siteConfig.name,
              image: "/fwdk_link_preview_image.jpg",
              "@id": siteConfig.url,
              url: siteConfig.url,
              telephone: siteConfig.contact.telephone,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contact.address.street,
                addressLocality: siteConfig.contact.address.city,
                postalCode: siteConfig.contact.address.zip,
                addressCountry: siteConfig.contact.address.country,
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -33.9249,
                longitude: 18.4241,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: Object.values(siteConfig.links),
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SmoothScroll>
          {children}
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
