import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // ✅ Required for Sanity image URLs
  },
};

export default nextConfig;
