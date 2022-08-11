/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['cdn.api.video'],
  },
}

module.exports = nextConfig
