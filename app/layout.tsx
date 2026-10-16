import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from './_lib/siteUrl'
import { DEFAULT_KEYWORDS } from './_lib/constants'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: 'Dhan7 App Download (Official) — Dhan 7 APK Latest Version | Dhan7.win',
    template: '%s | Dhan7',
  },
  description:
    'Download Dhan7 app (official Dhan 7 APK latest version 2026). Play real money games like Crash, Slots, Casino & Fishing. Claim ₹777 bonus with instant UPI withdrawals on dhan7.win.',
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: 'Dhan7 Official', url: siteUrl() }],
  creator: 'Dhan7',
  publisher: 'Dhan7',
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/dhan77-logo.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/dhan77-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dhan7',
    title: 'Dhan7 App Download (Official) — Dhan 7 APK Latest Version | Dhan7.win',
    description:
      'Download Dhan7 app (official Dhan 7 APK latest version 2026). Play real money games, claim ₹777 bonus, instant UPI withdrawals on dhan7.win.',
    url: siteUrl(),
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 App Download (Official) — Dhan 7 APK Latest Version',
    description:
      'Download Dhan7 app for Android. Play smart, win real rewards with instant UPI withdrawals on dhan7.win.',
    images: ['/dhan77-logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const websiteJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dhan7',
    alternateName: ['Dhan7.win', 'Dhan 7', 'Dhan7 App', 'Dhan 7 App', 'Dhan7 Game', 'Dhan 7 Gaming App'],
    url: siteUrl(),
    description:
      'Official portal for Dhan7 app download, Dhan 7 APK, Dhan7 login, ₹777 bonus offers, and real money gaming guides on dhan7.win.',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl()}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  }).replace(/</g, '\\u003c')

  const organizationJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dhan7',
    alternateName: ['Dhan 7', 'Dhan7.win'],
    url: siteUrl(),
    logo: `${siteUrl()}/dhan77-logo.png`,
    sameAs: [],
  }).replace(/</g, '\\u003c')

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-(--color-bg-base) text-(--color-text-primary)">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: websiteJsonLd }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: organizationJsonLd }}
        />
      </body>
    </html>
  )
}
