/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, // Disabled for testing
  swcMinify: true,
  output: 'standalone', // Optimized for Vercel
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console logs in production
  },
  typescript: {
    // Disable type checking during build for testing (not recommended for production)
    ignoreBuildErrors: true,
  },
  eslint: {
    // Disable ESLint during build for testing (not recommended for production)
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
    formats: ['image/webp', 'image/avif'], // Optimized image formats
  },
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Bundle analyzer (uncomment to analyze bundle size)
  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false;
  //   }
  //   return config;
  // },
};

module.exports = nextConfig;
