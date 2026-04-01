import type { MetadataRoute } from 'next'
import { siteUrl } from './_lib/siteUrl'
import { getAllPosts } from '../lib/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl()
  const staticPaths = [
    '',
    '/dhan77-apk-download',
    '/dhan77-login',
    '/dhan77-bonus',
    '/dhan77-review',
    '/faq',
  ]
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }))

  let blogEntries: MetadataRoute.Sitemap = []
  try {
    const posts = await getAllPosts()
    blogEntries = posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: p.created_at,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  } catch {
    // DB may not be configured yet — skip blog entries gracefully
  }

  return [...staticEntries, ...blogEntries]
}
