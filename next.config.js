/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.miltoncodeyt.com']
  },
  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
