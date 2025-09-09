import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: ['media.api-sports.io'],
    // ou se usando Next.js 12.3+, prefira:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.api-sports.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
