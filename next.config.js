/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['https://kahawa-sukari-next.s3.ap-south-1.amazonaws.com','kahawa-sukari.s3.amazonaws.com','lh3.googleusercontent.com'],
  },
  
}

module.exports = nextConfig
