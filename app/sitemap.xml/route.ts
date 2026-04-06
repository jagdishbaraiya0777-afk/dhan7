import { siteUrl } from '../_lib/siteUrl'
import { getAllPosts } from '../../lib/db'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toW3CDate(date: Date): string {
  return date.toISOString().split('T')[0]
}

interface SitemapEntry {
  url: string
  lastmod: string
  changefreq: string
  priority: string
}

export async function GET(): Promise<Response> {
  const base = siteUrl().replace(/\/$/, '')

  const staticEntries: SitemapEntry[] = [
    { url: `${base}/`,                    lastmod: toW3CDate(new Date()), changefreq: 'weekly',  priority: '1.0' },
    { url: `${base}/dhan77-apk-download`, lastmod: toW3CDate(new Date()), changefreq: 'monthly', priority: '0.9' },
    { url: `${base}/dhan77-login`,        lastmod: toW3CDate(new Date()), changefreq: 'monthly', priority: '0.8' },
    { url: `${base}/dhan77-bonus`,        lastmod: toW3CDate(new Date()), changefreq: 'monthly', priority: '0.8' },
    { url: `${base}/dhan77-review`,       lastmod: toW3CDate(new Date()), changefreq: 'monthly', priority: '0.8' },
    { url: `${base}/faq`,                 lastmod: toW3CDate(new Date()), changefreq: 'monthly', priority: '0.7' },
    { url: `${base}/blog`,                lastmod: toW3CDate(new Date()), changefreq: 'daily',   priority: '0.9' },
  ]

  let blogEntries: SitemapEntry[] = []
  try {
    const posts = await getAllPosts()
    blogEntries = posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastmod: toW3CDate(p.created_at),
      changefreq: 'weekly',
      priority: '0.7',
    }))
  } catch {
    // DB not available — skip blog entries
  }

  const allEntries = [...staticEntries, ...blogEntries]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
          http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${escapeXml(e.url)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  })
}
