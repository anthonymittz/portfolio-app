/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: { domains: ['google.com'] },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en'
  }
}

module.exports = nextConfig
