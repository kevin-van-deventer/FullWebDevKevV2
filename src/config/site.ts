export const siteConfig = {
  name: "FullWebDevKev",
  author: "Kevin van Deventer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fullwebdevkev.com",
  description: "Professional Web Development by FullWebDevKev (Kevin van Deventer). Specializing in high-performance React, TypeScript, and AI-powered applications.",
  links: {
    github: "https://github.com/kevin-van-deventer",
    linkedin: "https://linkedin.com/in/kevin-van-deventer",
    whatsapp: "https://wa.me/84582168746",
    twitter: "https://twitter.com/vudovn",
  },
  contact: {
    email: "kevin@fullwebdevkev.com",
    telephone: "+27123456789",
    address: {
      street: "123 Dev Street",
      city: "Cape Town",
      zip: "8001",
      country: "ZA",
    },
  },
};

export type SiteConfig = typeof siteConfig;
