/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async generateBuildId() {
    return 'negulescu-build-' + Date.now()
  },
  async redirects() {
    return [
      {
        source: '/despre',
        destination: '/despre-noi',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig