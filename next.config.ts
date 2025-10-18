import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: '*.microlink.io',
      },
    ],
  },
  eslint: {
    // Allow warnings during build - errors will still fail
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
