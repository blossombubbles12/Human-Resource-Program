/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Disabled for testing
  swcMinify: true,
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  // Remove problematic optimizations that cause build issues
  compress: true,
  poweredByHeader: false,
  trailingSlash: false,
};

module.exports = nextConfig;
