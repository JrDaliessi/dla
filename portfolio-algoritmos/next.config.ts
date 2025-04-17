import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    remotePatterns: []
  },
  // Otimizações de produção
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn']
    } : false,
  },
  poweredByHeader: false
};

export default nextConfig;
