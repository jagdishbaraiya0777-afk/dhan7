import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from './_lib/siteUrl'
import { DEFAULT_KEYWORDS } from './_lib/constants'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: 'Dhan77 APK Download (Latest Version 2026) | Dhan7 Gaming App',
    template: '%s | Dhan7.xyz',
  },
  description:
    'Download Dhan77 APK and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards. Official Dhan7 gaming app guide 2026.',
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: 'Dhan7.xyz' }],
  creator: 'Dhan7.xyz',
  publisher: 'Dhan7.xyz',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/dhan7.jpg',
    apple: '/dhan7.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dhan7.xyz',
    images: [{ url: '/dhan7.jpg', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dhan7xyz',
    images: ['/dhan7.jpg'],
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
    name: 'Dhan7.xyz',
    url: siteUrl(),
    description: 'Official guide for Dhan7, Dhan77, Dhan 7 & Dhan 77 APK download, login, and earning.',
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${siteUrl()}/blog?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
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
      </body>
    </html>
  )
}
