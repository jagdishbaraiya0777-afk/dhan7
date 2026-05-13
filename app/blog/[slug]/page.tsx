import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getAllPosts, getPostBySlug, runMigrations } from '../../../lib/db'
import type { FAQ } from '../../../lib/types'
import { BlogSchema } from '@/app/_components/BlogSchema'
import { AuthorBlock } from '@/app/_components/AuthorBlock'

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

  return (
    <main className="flex-1 px-4 py-10 max-w-3xl mx-auto w-full">
      <BlogSchema
        title={post.meta_title}
        description={post.meta_description}
        slug={slug}
        datePublished={post.created_at.toISOString().split('T')[0]}
        dateModified={post.created_at.toISOString().split('T')[0]}
        authorName="Dhan7 Editorial Team"
        faqs={faqs}
      />
      
      <AuthorBlock
        name="Dhan7 Editorial Team"
        bio="Expert writers covering real-money gaming apps and mobile gaming platforms in India since 2022."
        date={post.created_at.toLocaleDateString('en-IN', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      />

      <article className="markdown-content mt-8">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-bold text-accent-gold mb-6 mt-8 leading-tight" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl md:text-3xl font-bold text-accent-gold mb-4 mt-8 leading-tight" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-semibold text-accent-gold mb-3 mt-6 leading-tight" {...props} />,
            h4: ({node, ...props}) => <h4 className="text-lg md:text-xl font-semibold text-accent-gold mb-3 mt-4" {...props} />,
            h5: ({node, ...props}) => <h5 className="text-base md:text-lg font-semibold text-accent-gold mb-2 mt-4" {...props} />,
            h6: ({node, ...props}) => <h6 className="text-base font-semibold text-accent-gold mb-2 mt-4" {...props} />,
            p: ({node, ...props}) => <p className="text-text-muted mb-4 leading-relaxed text-base md:text-lg" {...props} />,
            a: ({node, ...props}) => <a className="text-accent-red hover:text-accent-gold underline transition-colors" {...props} />,
            strong: ({node, ...props}) => <strong className="text-white font-semibold" {...props} />,
            em: ({node, ...props}) => <em className="text-accent-gold italic" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2 text-text-muted ml-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2 text-text-muted ml-4" {...props} />,
            li: ({node, ...props}) => <li className="text-text-muted leading-relaxed" {...props} />,
            blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-accent-red pl-4 py-2 my-4 italic text-text-muted bg-[#1a1a1a] rounded-r" {...props} />,
            code: ({node, inline, ...props}: any) => 
              inline 
                ? <code className="bg-[#1a1a1a] text-accent-gold px-2 py-1 rounded text-sm font-mono" {...props} />
                : <code className="block bg-[#1a1a1a] text-accent-gold p-4 rounded my-4 overflow-x-auto text-sm font-mono" {...props} />,
            pre: ({node, ...props}) => <pre className="bg-[#1a1a1a] rounded my-4 overflow-x-auto" {...props} />,
            hr: ({node, ...props}) => <hr className="border-accent-red my-8" {...props} />,
            table: ({node, ...props}) => <div className="overflow-x-auto my-4"><table className="min-w-full border border-accent-red" {...props} /></div>,
            th: ({node, ...props}) => <th className="border border-accent-red px-4 py-2 bg-[#1a1a1a] text-accent-gold font-semibold" {...props} />,
            td: ({node, ...props}) => <td className="border border-accent-red px-4 py-2 text-text-muted" {...props} />,
          }}
        >
          {post.content_md}
        </ReactMarkdown>
      </article>

      <aside className="mt-8 p-4 rounded-lg border border-(--color-accent-gold) bg-(--color-bg-base)">
        <p className="text-(--color-text-muted) text-sm">
          <strong className="text-(--color-accent-gold)">Disclaimer:</strong> The Dhan 7 app involves real-money gaming.
          This content is for informational purposes only. 18+ only. Play responsibly. 
          See our full <Link href="/terms-and-conditions" className="text-(--color-accent-gold) hover:underline">terms and conditions</Link>.
        </p>
      </aside>

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
