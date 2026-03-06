export default async function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard', '/api/auth', '/dashboard/*', '/api/*'],
    },
    sitemap: 'https://linky-url.vercel.app/sitemap.xml',
    host: 'https://linky-url.vercel.app',
  }
}
