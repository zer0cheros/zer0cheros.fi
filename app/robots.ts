import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/public/me2.webp'
    },
    sitemap: 'https://zer0cheros.fi/sitemap.xml',
  }
}