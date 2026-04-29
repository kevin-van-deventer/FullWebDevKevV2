import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
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
