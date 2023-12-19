/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.graphassets.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
} 

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts'
);
module.exports = withNextIntl(nextConfig)
