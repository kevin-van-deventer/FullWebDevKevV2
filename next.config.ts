import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export for Cloudflare Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
