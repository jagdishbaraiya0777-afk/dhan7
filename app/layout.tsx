import type { Metadata } from 'next'
import './globals.css'
import { siteUrl } from './_lib/siteUrl'
import { DEFAULT_KEYWORDS } from './_lib/constants'
import Header from './_components/Header'
import Footer from './_components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: 'Dhan77 APK Download (Latest Version) | Dhan7 Gaming App',
    template: '%s | Dhan7 Gaming App',
  },
  description:
    'Download Dhan77 APK and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards.',
  keywords: DEFAULT_KEYWORDS,
  icons: {
    icon: '/dhan7.jpg',
    apple: '/dhan7.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-(--color-bg-base) text-(--color-text-primary)">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
