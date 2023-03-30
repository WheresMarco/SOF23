/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['sv-SE', 'en-US'],
    defaultLocale: 'sv-SE',
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
