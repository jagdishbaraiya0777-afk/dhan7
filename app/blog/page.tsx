import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, runMigrations } from '../../lib/db'
import { siteUrl } from '../_lib/siteUrl'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Dhan7 Blog – Guides, Tips & Reviews',
  description: 'Read the latest guides, tips, and reviews about Dhan7 and Dhan77.',
  alternates: {
    canonical: `${siteUrl()}/blog`,
  },
}

export default async function BlogIndexPage() {
  await runMigrations()
  const posts = await getAllPosts()

  return (
    <main className="flex-1 px-4 py-10 max-w-3xl mx-auto w-full">
      <h1 className="text-3xl font-bold text-(--color-accent-gold) mb-2">Dhan7 Blog</h1>
      <p className="text-(--color-text-muted) mb-8 text-sm">
        Guides, tips, and reviews for Dhan7, Dhan77, Dhan 7 &amp; Dhan 77
      </p>
      {posts.length === 0 ? (
        <p className="text-(--color-text-muted)">No posts published yet. Check back soon.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border border-(--color-accent-gold) rounded-lg p-5">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl font-semibold text-(--color-text-primary) group-hover:text-(--color-accent-gold) transition-colors">
                  {post.title}
                </h2>
                <p className="text-(--color-text-muted) mt-2 text-sm">{post.meta_description}</p>
                <time
                  dateTime={post.created_at.toISOString()}
                  className="text-(--color-text-muted) text-xs mt-3 block"
                >
                  {post.created_at.toLocaleDateString('en-IN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Internal links */}
      <div className="mt-12 pt-8 border-t border-(--color-accent-red)">
        <p className="text-(--color-text-muted) text-sm mb-4">Explore more</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/dhan77-apk-download', label: 'APK Download' },
            { href: '/dhan77-login', label: 'Login Guide' },
            { href: '/dhan77-bonus', label: 'Bonus Offers' },
            { href: '/dhan77-review', label: 'App Review' },
            { href: '/faq', label: 'FAQ' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs border border-(--color-accent-red) text-(--color-accent-red) px-3 py-1.5 rounded hover:bg-(--color-accent-red) hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
