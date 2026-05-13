import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dhan 7 FAQ — Frequently Asked Questions | Dhan7.xyz',
  description:
    'Frequently asked questions about the Dhan 7 app. Covers download, login, withdrawal, bonuses, and account issues. Quick answers for all Dhan77 questions in 2026.',
  keywords: [
    'dhan 7 faq',
    'dhan77 questions',
    'dhan 7 help',
    'dhan77 withdrawal faq',
    'dhan 7 login help',
    'dhan77 app support',
    'dhan 7 customer care',
  ],
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Dhan 7 FAQ — Frequently Asked Questions | Dhan7.xyz',
    description: 'Frequently asked questions about the Dhan 7 app. Covers download, login, withdrawal, bonuses, and account issues. Quick answers for all Dhan77 questions in 2026.',
    url: '/faq',
    siteName: 'Dhan7.xyz',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan 7 FAQ — Frequently Asked Questions',
    description: 'Quick answers for all Dhan77 questions in 2026.',
    images: ['/dhan77-logo.png'],
  },
}

interface FAQItem {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Is Dhan77 safe?',
    answer: 'Yes, Dhan77 is safe when downloaded from official trusted sources. Always verify the APK source before installing. Play responsibly.',
  },
  {
    question: 'How to download Dhan77 APK?',
    answer: 'Click the download button on this site, enable Unknown Sources in your Android settings, install the APK, and open the app.',
  },
  {
    question: 'What is the minimum withdrawal on Dhan77?',
    answer: 'The minimum withdrawal amount depends on current platform rules. Check the app wallet section for the latest threshold.',
  },
  {
    question: 'Is Dhan7 real or fake?',
    answer: 'Dhan7 is a real gaming platform. However, earnings are not guaranteed and depend on your gameplay. Play responsibly.',
  },
  {
    question: 'How to login to Dhan77?',
    answer: 'Open the Dhan77 app, enter your registered mobile number, verify with OTP, and tap Login to access your account.',
  },
  {
    question: 'What games are available on Dhan77?',
    answer: 'Dhan77 offers Crash, Casino, Slots, and Fishing games — all with real money rewards.',
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
