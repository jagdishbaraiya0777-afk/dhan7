import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from './_lib/siteUrl'
import { DEFAULT_KEYWORDS } from './_lib/constants'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: 'Dhan 7 App — Download Dhan 7 APK | Official Dhan 7 Gaming App',
    template: '%s | Dhan 7',
  },
  description:
    'Download Dhan 7 app for Android. Official Dhan 7 app download — play real-money games, get 777 bonus, instant withdrawals. Free Dhan 7 APK download.',
  keywords: [
    'dhan 7',
    'dhan 7 apk',
    'dhan 7 app',
    'dhan 7 app download',
    'dhan 7 apk download',
    'dhan 7 game',
    'dhan 7 gaming app',
    'dhan 7 download',
    'dhan 7 login',
    'dhan 7 bonus',
  ],
  authors: [{ name: 'Dhan7.xyz' }],
  creator: 'Dhan7.xyz',
  publisher: 'Dhan7.xyz',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/dhan77-logo.png',
    apple: '/dhan77-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Dhan 7',
    title: 'Dhan 7 App — Download Dhan 7 APK | Official Dhan 7 Gaming App',
    description:
      'Download Dhan 7 app for Android. Official Dhan 7 app download — play real-money games, get 777 bonus, instant withdrawals.',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan 7 App Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@dhan7xyz',
    title: 'Dhan 7 App — Download Dhan 7 APK',
    description: 'Download Dhan 7 app (Dhan7 APK) for Android. Free Dhan 7 APK download.',
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
    name: 'Dhan 7 App',
    alternateName: ['Dhan 7', 'Dhan 7 App', 'Dhan 7 Game', 'Dhan 7 Gaming App'],
    url: siteUrl(),
    description:
      'Official guide for Dhan 7 app download, Dhan 7 APK, Dhan 7 gaming, login, bonus, and withdrawal. Download Dhan 7 app for Android.',
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
