import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug, runMigrations } from '../../../lib/db'
import type { FAQ } from '../../../lib/types'

export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.meta_title,
    description: post.meta_description,
  }
}

function parseFaqsFromMarkdown(markdown: string): FAQ[] {
  const faqs: FAQ[] = []
  const lines = markdown.split('\n')
  let currentQ: string | null = null
  for (const line of lines) {
    const qMatch = line.match(/^\*\*Q:\s*(.+?)\*\*/)
    const aMatch = line.match(/^\*\*A:\s*(.+?)\*\*/)
    if (qMatch) {
      currentQ = qMatch[1].trim()
    } else if (aMatch && currentQ) {
      faqs.push({ question: currentQ, answer: aMatch[1].trim() })
      currentQ = null
    }
  }
  return faqs
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  await runMigrations()
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const faqs = parseFaqsFromMarkdown(post.content_md)

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <main className="flex-1 px-4 py-10 max-w-3xl mx-auto w-full">
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c'),
          }}
        />
      )}
      <article className="prose prose-invert max-w-none
        prose-headings:text-(--color-accent-gold)
        prose-h1:text-3xl prose-h2:text-2xl
        prose-p:text-(--color-text-muted)
        prose-a:text-(--color-accent-red) prose-a:no-underline hover:prose-a:underline
        prose-strong:text-(--color-text-primary)
        prose-li:text-(--color-text-muted)
        prose-blockquote:border-l-4 prose-blockquote:border-(--color-accent-red) prose-blockquote:text-(--color-text-muted)
      ">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content_md}</ReactMarkdown>
      </article>
      <p className="text-(--color-text-muted) text-xs mt-8">
        Published:{' '}
        <time dateTime={post.created_at.toISOString()}>
          {post.created_at.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
      </p>

      <div className="mt-10 pt-6 border-t border-(--color-accent-red) flex flex-col gap-3">
        <p className="text-(--color-text-muted) text-sm">Also see</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/blog', label: '← All Posts' },
            { href: '/dhan77-apk-download', label: 'APK Download' },
            { href: '/dhan77-login', label: 'Login Guide' },
            { href: '/dhan77-bonus', label: 'Bonus Offers' },
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
