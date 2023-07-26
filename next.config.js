/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['files.stripe.com'],
  },

  experimental: {
    allowFutureImages: true,
  },
}

module.exports = nextConfig
