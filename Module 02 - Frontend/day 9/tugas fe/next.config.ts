/** @format */

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d5ibtax54de3q.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
