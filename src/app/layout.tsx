import type { Metadata } from "next";
import { Inter, Bungee } from "next/font/google";
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
  title: "Neon Code Studio | Eduard v Deventer — Full-Stack Developer",
  description: "Professional Web Development Studio specializing in high-performance React, TypeScript, and modern AI-powered applications.",
  authors: [{ name: "Eduard v Deventer" }],
  openGraph: {
    title: "Neon Code Studio — Build Something Epic",
    description: "High-performance websites and applications built with cutting-edge tech stacks.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@vudovn",
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
              name: "Neon Code Studio",
              image: "/og-image.png",
              "@id": "https://neon-code-studio.com",
              url: "https://neon-code-studio.com",
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
                "https://github.com/EduardvDeventer",
                "https://twitter.com/vudovn",
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
