export default async function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/dashboard',
    },
    sitemap: 'https://linky-url.vercel.app/sitemap.xml',
  }
}
