/** @type {import('next').NextConfig} */

const path = require('path');
const headers = require('./headers');

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers,
      },
    ];
  },
}

module.exports = nextConfig
