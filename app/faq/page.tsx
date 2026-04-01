import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dhan77 FAQ',
  alternates: {
    canonical: '/faq',
  },
}

interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is Dhan77 safe?',
    answer: 'Yes, but play responsibly.',
  },
  {
    question: 'How to download?',
    answer: 'Use the download button.',
  },
  {
    question: 'Minimum withdrawal?',
    answer: 'Depends on current rules.',
  },
]

export default function FAQPage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
        <section className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-(--color-accent-gold)">
            Dhan77 FAQ
          </h1>
          <p className="text-(--color-text-muted)">
            Answers to the most common questions about Dhan77.
          </p>
        </section>

        <section className="flex flex-col gap-6">
          {FAQ_ITEMS.map(({ question, answer }) => (
            <div
              key={question}
              className="rounded-lg border border-(--color-accent-gold) p-5 flex flex-col gap-2"
            >
              <h2 className="text-lg font-bold text-(--color-accent-gold)">{question}</h2>
              <p className="text-(--color-text-muted)">{answer}</p>
            </div>
          ))}
        </section>

        <section className="flex flex-col gap-3 pt-4 border-t border-(--color-accent-red)">
          <p className="text-(--color-text-muted) text-sm">Also see</p>
          <div className="flex flex-wrap gap-3">
            {[
              { href: '/dhan77-apk-download', label: 'APK Download' },
              { href: '/dhan77-login', label: 'Login Guide' },
              { href: '/dhan77-bonus', label: 'Bonus Offers' },
              { href: '/dhan77-review', label: 'App Review' },
              { href: '/blog', label: 'Blog' },
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
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  )
}
