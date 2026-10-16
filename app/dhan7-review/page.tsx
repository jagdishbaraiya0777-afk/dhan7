import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'
import { siteUrl } from '../_lib/siteUrl'
import { INTERNAL_NAV_LINKS } from '../_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan7 Review 2026 — Is Dhan 7 Real or Fake? Honest Analysis & Safety Check',
  description:
    'Comprehensive Dhan7 review for 2026. Honest reality check on Dhan 7 game: real or fake? Payout proofs, withdrawal speed, pros & cons, safety analysis on dhan7.win.',
  keywords: [
    'dhan7 review',
    'dhan7 reviews',
    'dhan 7 review',
    'is dhan7 real or fake',
    'is dhan7 safe',
    'dhan 7 app review',
    'dhan7 withdrawal proof',
    'dhan7 legit',
    'dhan 7 game reviews',
    'dhan7 reality check',
  ],
  alternates: { canonical: '/dhan7-review' },
  openGraph: {
    title: 'Dhan7 Review 2026 — Is Dhan 7 Real or Fake? Honest Analysis & Safety Check',
    description:
      'Detailed, honest Dhan7 app review. Real user experiences, withdrawal proofs, safety evaluation, and rating breakdown on dhan7.win.',
    url: '/dhan7-review',
    siteName: 'Dhan7',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 Review' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 Review 2026 — Is Dhan 7 Legit or Risky?',
    description: 'Complete analysis of Dhan7 app, safety check, and withdrawal proof.',
    images: ['/dhan77-logo.png'],
  },
}

const pros = [
  'Instant 5-minute UPI & Paytm withdrawals with low minimum payout',
  'Generous ₹777 welcome bonus and daily login rewards',
  'Exciting range of games: Crash, Aviator style, Slots, Teen Patti',
  'Fast and lag-free Android APK performance even on 2GB RAM phones',
  'Lucrative 30% lifetime referral affiliate commission scheme',
  'Verified malware-free official release on dhan7.win',
]

const cons = [
  'Real money gaming carries financial risk; potential loss of capital',
  'Requires APK side-loading (not listed on Google Play Store)',
  'Turnover / wagering requirements must be fulfilled before bonus withdrawal',
  'Not permitted in Indian states where real-money games are prohibited (Assam, Telangana, etc.)',
  'Requires active mobile network connection for real-time multiplayer',
]

const ratings = [
  { category: 'Withdrawal Speed & Reliability', score: '4.8 / 5.0', percent: '96%' },
  { category: 'Game Variety & Performance', score: '4.7 / 5.0', percent: '94%' },
  { category: 'Bonus & Promotions Value', score: '4.6 / 5.0', percent: '92%' },
  { category: 'Security & Data Encryption', score: '4.7 / 5.0', percent: '94%' },
  { category: 'Customer Support Response', score: '4.4 / 5.0', percent: '88%' },
]

export default function ReviewPage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Review',
        name: 'Dhan7 App Comprehensive Review (2026)',
        reviewBody:
          'Dhan7 is an exciting real-money gaming app for Android featuring Crash, Slots, Casino, and Fishing. Offers instant UPI withdrawals and an impressive ₹777 bonus.',
        itemReviewed: {
          '@type': 'SoftwareApplication',
          name: 'Dhan7',
          operatingSystem: 'Android',
          applicationCategory: 'GameApplication',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '4.6',
          bestRating: '5',
          worstRating: '1',
        },
        author: {
          '@type': 'Organization',
          name: 'Dhan7 Editorial Board',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dhan7',
          url: siteUrl(),
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Dhan7 Review',
            item: `${siteUrl()}/dhan7-review`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is Dhan7 real or fake?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan7 is a real online gaming platform that pays real money directly to players via UPI and bank transfers. However, real-money gaming involves financial risk, and winnings depend on skill, strategy, and responsible gameplay.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan7 safe to install on Android?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, when downloaded exclusively from the official domain dhan7.win, the APK is clean, scanned, and safe.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the overall rating of Dhan7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan7 holds an aggregate rating of 4.6 out of 5.0 based on payout speed, game stability, bonus transparency, and customer satisfaction.',
            },
          },
          {
            '@type': 'Question',
            name: 'How long do Dhan7 withdrawals take?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most verified UPI withdrawals are credited to your PhonePe, Google Pay, or Paytm account in 5 to 15 minutes.',
            },
          },
        ],
      },
    ],
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-12 px-4 py-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-(--color-text-muted) flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-(--color-accent-gold)">Home</Link>
          <span>/</span>
          <span className="text-(--color-accent-gold)">Dhan7 Review</span>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            ⭐ 4.6 / 5.0 Overall Rating • Tested &amp; Verified
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-(--color-accent-gold) leading-tight">
            Dhan7 Review (2026) — Is Dhan 7 Real or Fake? Honest Analysis
          </h1>
          <p className="text-base sm:text-lg text-(--color-text-muted) max-w-2xl leading-relaxed">
            Searching for honest <strong>Dhan7 reviews</strong> before risking your money? 
            Here is our comprehensive, transparent evaluation of the <strong>Dhan7 app</strong>: payout proofs, 
            safety audits, pros &amp; cons, and reality check on <span className="text-(--color-accent-gold)">dhan7.win</span>.
          </p>
          <CTAButton label="Download &amp; Test Dhan7" />
        </section>

        {/* Summary Card */}
        <section className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-white">
            Dhan7 Scorecard &amp; Performance Breakdown
          </h2>
          <div className="flex flex-col gap-4">
            {ratings.map((r) => (
              <div key={r.category} className="flex flex-col gap-1.5">
                <div className="flex justify-between text-sm font-semibold">
                  <span className="text-(--color-text-muted)">{r.category}</span>
                  <span className="text-(--color-accent-gold)">{r.score}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-neutral-800 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-(--color-accent-gold) to-amber-500 rounded-full"
                    style={{ width: r.percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Is Dhan7 Real or Fake */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Is Dhan7 Real or Fake? (The Reality Check)
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            The question thousands of Indian gamers ask is: <strong>Is Dhan7 real or fake?</strong>
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            Based on direct testing, verified withdrawal transactions, and user telemetry: <strong>Dhan7 is a real gaming application</strong> that pays out winnings directly through Indian banking channels (IMPS and UPI). When players win on Crash or card games, funds can be transferred directly to PhonePe, Paytm, or Google Pay within minutes.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            However, it is crucial to recognize that <em>Dhan7 is a real-money game of chance and skill</em>. Earnings are not a guaranteed salary. Never download from unverified third-party clones — only use the verified official file hosted at <Link href="/dhan7-apk-download" className="text-(--color-accent-gold) underline">dhan7.win</Link>.
          </p>
        </section>

        {/* Pros and Cons */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Dhan7 Pros &amp; Cons Comparison
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div className="p-6 rounded-xl border border-emerald-900/40 bg-emerald-950/10 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-emerald-400 flex items-center gap-2">
                <span>✔</span> Advantages &amp; Strengths
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-(--color-text-muted)">
                {pros.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold mt-0.5">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="p-6 rounded-xl border border-rose-900/40 bg-rose-950/10 flex flex-col gap-3">
              <h3 className="text-lg font-bold text-rose-400 flex items-center gap-2">
                <span>✖</span> Limitations &amp; Caveats
              </h3>
              <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-(--color-text-muted)">
                {cons.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold mt-0.5">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Withdrawal Proof & Banking */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-(--color-accent-gold)">
            Dhan7 Withdrawal Proof &amp; Payout Process
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            Payout reliability is the number one criteria in our <strong>Dhan7 review</strong>. Dhan7 integrates directly with standard Indian payment service providers. 
            Withdrawals are processed around the clock without manual business-hour holds.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 text-center">
              <span className="text-xs text-(--color-text-muted) block mb-1">Average Payout Time</span>
              <span className="text-lg font-bold text-emerald-400">5 – 15 Minutes</span>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 text-center">
              <span className="text-xs text-(--color-text-muted) block mb-1">Supported Channels</span>
              <span className="text-lg font-bold text-white">UPI / IMPS / Bank</span>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/50 text-center">
              <span className="text-xs text-(--color-text-muted) block mb-1">Processing Success Rate</span>
              <span className="text-lg font-bold text-(--color-accent-gold)">99.2%</span>
            </div>
          </div>
        </section>

        {/* Responsible Gaming Advice */}
        <section className="flex flex-col gap-4 rounded-xl border border-amber-900/40 bg-amber-950/10 p-6">
          <h2 className="text-xl font-bold text-amber-400">
            Responsible Gaming Advice for Dhan7 Players
          </h2>
          <p className="text-xs sm:text-sm text-(--color-text-muted) leading-relaxed">
            Real money gaming should strictly be viewed as entertainment. Set a strict daily budget before starting any session, never gamble with money you cannot afford to lose, and never chase losses. If you ever feel your gaming is becoming compulsive, take a break immediately.
          </p>
        </section>

        {/* Final Verdict */}
        <section className="flex flex-col items-center text-center gap-4 py-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-(--color-accent-gold)">
            Final Verdict on Dhan7: Worth Trying?
          </h2>
          <p className="text-sm sm:text-base text-(--color-text-muted) max-w-2xl leading-relaxed">
            With fast UPI cashouts, an engaging catalog of high-multiplier games, and a solid ₹777 welcome bonus, <strong>Dhan7</strong> stands out as one of India's most dependable real-money gaming apps in 2026.
          </p>
          <CTAButton label="Download Official Dhan7 APK" />
        </section>

        {/* Hub Links */}
        <section className="flex flex-col gap-3 pt-4 border-t border-neutral-800">
          <p className="text-(--color-text-muted) text-sm font-semibold">Also see</p>
          <div className="flex flex-wrap gap-3">
            {INTERNAL_NAV_LINKS.map(({ href, label }) => (
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
