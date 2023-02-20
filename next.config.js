/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.github.io',
        // port: '',
        // pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.sda1.dev',
      },
      {
        protocol: 'https',
        hostname: '**.sspai.com',
      },
    ],
  },
}

module.exports = nextConfig
