import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts, runMigrations } from '../../lib/db'
import { siteUrl } from '../_lib/siteUrl'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Dhan7 Blog — Official Dhan 7 Guides, Tips & Reviews | Dhan7.win',
  description:
    'Read expert Dhan7 and Dhan 7 gaming guides, APK download instructions, Crash winning tricks, login tutorials, and bonus updates on dhan7.win.',
  alternates: {
    canonical: '/blog',
  },
}

export default async function BlogIndexPage() {
  await runMigrations()
  const posts = await getAllPosts()

  return (
    <main className="flex-1 px-4 py-10 max-w-4xl mx-auto w-full">
      {/* Breadcrumb */}
      <nav className="text-xs text-(--color-text-muted) flex items-center gap-2 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-(--color-accent-gold)">Home</Link>
        <span>/</span>
        <span className="text-(--color-accent-gold)">Dhan7 Blog</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-(--color-accent-gold) mb-2">
        Dhan7 Official Blog &amp; Guides
      </h1>
      <p className="text-(--color-text-muted) mb-8 text-sm">
        Authoritative guides, winning tips, APK tutorials, and reviews for Dhan7 (Dhan 7) on dhan7.win
      </p>

      {posts.length === 0 ? (
        <p className="text-(--color-text-muted)">No posts published yet. Check back soon.</p>
      ) : (
        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border border-neutral-800 bg-neutral-900/40 rounded-xl p-6 hover:border-(--color-accent-gold) transition-colors">
              <Link href={`/blog/${post.slug}`} className="block group">
                <h2 className="text-xl font-bold text-white group-hover:text-(--color-accent-gold) transition-colors">
                  {post.title}
                </h2>
                <p className="text-(--color-text-muted) mt-2 text-sm leading-relaxed">{post.meta_description}</p>
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
      <div className="mt-12 pt-8 border-t border-neutral-800">
        <p className="text-(--color-text-muted) text-sm mb-4 font-semibold">Explore more Dhan7 resources</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/dhan7-apk-download', label: 'APK Download' },
            { href: '/dhan7-login', label: 'Login Guide' },
            { href: '/dhan7-bonus', label: 'Bonus Offers' },
            { href: '/dhan7-review', label: 'App Review' },
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
