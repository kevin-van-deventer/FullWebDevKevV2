import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
import { FloatingWhatsApp } from "@/components/portfolio/FloatingWhatsApp";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://fullwebdevkev.com"),
  title: {
    default: "FullWebDevKev | Kevin van Deventer — Full-Stack Developer",
    template: "%s | FullWebDevKev"
  },
  description: "Professional Web Development by FullWebDevKev (Kevin van Deventer). Specializing in high-performance React, TypeScript, and AI-powered applications.",
  keywords: ["Full-Stack Developer", "React Expert", "Next.js Development", "Web Engineering", "UI/UX Design", "Kevin van Deventer", "FullWebDevKev"],
  authors: [{ name: "Kevin van Deventer" }],
  creator: "Kevin van Deventer",
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
    title: "FullWebDevKev | Kevin van Deventer",
    description: "High-performance websites and applications built with cutting-edge tech stacks by Kevin van Deventer.",
    url: "https://fullwebdevkev.com",
    siteName: "FullWebDevKev",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/fwdk_link_preview_image.jpg",
        width: 1200,
        height: 630,
        alt: "FullWebDevKev — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FullWebDevKev | Kevin van Deventer",
    description: "High-performance web engineering and modern UI/UX design.",
    creator: "@vudovn",
    images: ["/fwdk_link_preview_image.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "FullWebDevKev",
              image: "/fwdk_link_preview_image.jpg",
              "@id": "https://fullwebdevkev.com",
              url: "https://fullwebdevkev.com",
              telephone: "+27123456789",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Dev Street",
                addressLocality: "Cape Town",
                postalCode: "8001",
                addressCountry: "ZA",
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
              sameAs: [
                "https://github.com/kevin-van-deventer",
                "https://linkedin.com/in/kevin-van-deventer",
                "https://wa.me/84582168746"
              ],
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
