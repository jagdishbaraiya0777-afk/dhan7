import type { MetadataRoute } from 'next'
import { siteUrl } from './_lib/siteUrl'
import { getAllPosts } from '../lib/db'

export const revalidate = 3600

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl().replace(/\/$/, '') // strip trailing slash

  const staticEntries: MetadataRoute.Sitemap = [
    { url: `${base}/`,                    lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/dhan77-apk-download`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/dhan77-login`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dhan77-bonus`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dhan77-review`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog`,                lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
  ]

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
    // DB not configured — skip blog entries
  }

  return [...staticEntries, ...blogEntries]
}
