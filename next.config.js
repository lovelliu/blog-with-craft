/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    domains: ['api.craft.do'],
  },
  async rewrites() {
    return [
      {
        source: '/post/:pathname',
        destination: '/api/htmlrewrite?pathname=:pathname',
      },
      {
        source: '/post/:pathname/b/:slug*',
        destination: '/api/htmlrewrite?pathname=:pathname&slug=/b/:slug*',
      },
      {
        source: '/post/:pathname/x/:slug*',
        destination: '/api/htmlrewrite?pathname=:pathname&slug=/x/:slug*',
      },
      {
        source: '/api/:slug*',
        destination: 'https://www.craft.do/api/:slug*',
      },
      {
        source: '/share/static/js/:slug*',
        destination:
          '/api/jsrewrite?url=https://www.craft.do/share/static/js/:slug*',
      },
      {
        source: '/share/static/css/:slug*',
        destination: 'https://www.craft.do/share/static/css/:slug*',
      },
      {
        source: '/share/static/fonts/:slug*',
        destination: 'https://www.craft.do/share/static/fonts/:slug*',
      },
      {
        source: '/share/static/media/:slug*',
        destination: 'https://www.craft.do/share/static/media/:slug*',
      },
      {
        source: '/share/static/craft.webmanifest',
        destination: 'https://www.craft.do/share/static/craft.webmanifest',
      },
      {
        source: '/assets/js/analytics2.js',
        destination: 'https://www.craft.do/404',
      },
    ]
  },
}
