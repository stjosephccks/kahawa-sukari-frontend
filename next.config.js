/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kahawa-sukari.s3.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "https://kahawa-sukari-next.s3.ap-south-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
