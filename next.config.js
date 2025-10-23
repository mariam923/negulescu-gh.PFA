/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mode développement sans export pour performance
  // output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;