import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTAButton from './_components/CTAButton'
import { siteUrl } from './_lib/siteUrl'
import { DOWNLOAD_LINK } from './_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan77 APK Download | Dhan7 Gaming App – Earn Real Money 2026',
  description:
    'Download Dhan77 APK latest version 2026. Play Dhan7 real money games — Crash, Casino, Slots, Fishing. Get ₹777 bonus, instant withdrawal. Safe & official.',
  keywords: [
    'dhan77', 'dhan7', 'dhan 7', 'dhan 77',
    'dhan77 apk download', 'dhan7 gaming app',
    'dhan77 login', 'dhan77 bonus', 'dhan7 download',
    'dhan77 real money app', 'dhan7 earn money',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dhan77 APK Download | Dhan7 Gaming App',
    description: 'Download Dhan77 APK and earn real money. ₹777 bonus, instant withdrawal, crash & casino games.',
    url: '/',
    siteName: 'Dhan7.xyz',
    type: 'website',
    images: [{ url: '/dhan7.jpg', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan77 APK Download | Dhan7 Gaming App',
    description: 'Download Dhan77 APK and earn real money. ₹777 bonus, instant withdrawal.',
    images: ['/dhan7.jpg'],
  },
}

const screenshots = [
  { src: '/dhan7-1.jpeg', alt: 'Dhan77 screenshot 1' },
  { src: '/dhan7-2.jpeg', alt: 'Dhan77 screenshot 2' },
  { src: '/dhan7-3.jpeg', alt: 'Dhan77 screenshot 3' },
  { src: '/dhan7-4.jpeg', alt: 'Dhan77 screenshot 4' },
  { src: '/dhan7-5.jpeg', alt: 'Dhan77 screenshot 5' },
  { src: '/dhan7-6.jpeg', alt: 'Dhan77 screenshot 6' },
  { src: '/dhan7-7.jpeg', alt: 'Dhan77 screenshot 7' },
]

const features = [
  'Instant Withdrawal',
  '₹777 Bonus',
  'Referral Income',
  'Fast Gameplay',
  'Secure System',
]

const games = ['Crash', 'Casino', 'Slots', 'Fishing']

const internalLinks = [
  { href: '/dhan77-apk-download', label: 'Dhan77 APK Download' },
  { href: '/dhan77-login', label: 'Dhan77 Login' },
  { href: '/dhan77-bonus', label: 'Dhan77 Bonus' },
  { href: '/dhan77-review', label: 'Dhan77 Review' },
  { href: '/blog', label: 'Dhan77 Blog' },
  { href: '/faq', label: 'FAQ' },
]

export default function HomePage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Dhan77',
    operatingSystem: 'Android',
    applicationCategory: 'GameApplication',
    url: siteUrl(),
    downloadUrl: DOWNLOAD_LINK,
  }).replace(/</g, '\\u003c')

  return (
    <>
    <main className="flex flex-col gap-16 px-4 py-12 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="flex flex-col items-center gap-6 text-center">
        <Image
          src="/dhan7.jpg"
          alt="Dhan7 logo"
          width={120}
          height={120}
          priority
        />
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan77 Gaming App
        </h1>
        <p className="text-xl text-(--color-text-muted)">
          Play Games &amp; Earn Real Money Instantly
        </p>
        <CTAButton />
      </section>

      {/* What is Dhan77 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          What is Dhan77?
        </h2>
        <p className="text-(--color-text-muted) leading-relaxed">
          Dhan77 is a real-money gaming platform where you can play and win cash
          instantly. The platform offers a wide variety of games including
          casino, crash, slots, and fishing — all designed for fast, exciting
          gameplay with real rewards. Register today, claim your ₹777 welcome
          bonus, and start earning.
        </p>
      </section>

      {/* Screenshots */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          App Screenshots
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {screenshots.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              width={200}
              height={360}
              className="rounded-lg w-full h-auto"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Key Features
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-(--color-text-primary)"
            >
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </section>

      {/* Games */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Games Available
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {games.map((game) => (
            <li
              key={game}
              className="rounded-lg border border-(--color-accent-gold) px-4 py-3 text-center font-semibold text-(--color-accent-gold)"
            >
              {game}
            </li>
          ))}
        </ul>
      </section>

      {/* Internal Links */}
      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Explore More
        </h2>
        <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
          {internalLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="inline-block rounded-lg border border-(--color-accent-red) px-5 py-2 text-(--color-accent-red) hover:bg-(--color-accent-red) hover:text-(--color-text-primary) transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
    </>
  )
}
