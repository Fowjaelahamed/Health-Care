/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    HOSTURL: process.env.HOST_URL,
  }
}

module.exports = nextConfig
