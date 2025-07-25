import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.evenza.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
