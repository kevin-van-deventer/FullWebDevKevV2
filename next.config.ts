import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Re-enabled static export for maximum stability
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
