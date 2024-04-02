/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  ...nextConfig,
  images: {
    domains: ['avatars.githubusercontent.com', 'firebasestorage.googleapis.com'],
  }
}
