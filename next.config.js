/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Critical for Vercel deployment
  output: 'standalone',
  // Enable edge runtime for instant loads
  experimental: {
    serverComponentsExternalPackages: [],
  }
}
module.exports = nextConfig
