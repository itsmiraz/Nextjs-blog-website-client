/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "QmVMVzGk8cFuUa26yreqKzofhKpwCnCnuYYkxqkd7AhyRp",
      },
      {
        protocol: "http",
        hostname: "meebits.larvalabs.com",
      },
    ],
  },
}

module.exports = nextConfig
