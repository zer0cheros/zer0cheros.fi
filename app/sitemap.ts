import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://optidev.fi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://writeups.zer0cheros.fi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 2,
    },
    {
      url: 'https://3d.zer0cheros.fi',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 2,
    },
  ]
}