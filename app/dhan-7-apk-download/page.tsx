import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'

export const metadata: Metadata = {
  title: 'Dhan77 APK Download (Latest Version 2026) – Official Guide',
  description:
    'Download Dhan77 APK latest version 2026 safely. Step-by-step install guide for Dhan7 gaming app on Android. No Play Store required.',
  keywords: [
    'dhan77 apk download', 'dhan7 apk', 'dhan 77 download',
    'dhan7 download 2026', 'dhan77 install guide', 'dhan7 android apk',
  ],
  alternates: { canonical: '/dhan77-apk-download' },
  openGraph: {
    title: 'Dhan77 APK Download (Latest Version 2026)',
    description: 'Download Dhan77 APK safely. Step-by-step install guide for Android.',
    url: '/dhan77-apk-download',
    siteName: 'Dhan7.xyz',
    type: 'website',
    images: [{ url: '/dhan7.jpg', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan77 APK Download (Latest Version 2026)',
    description: 'Download Dhan77 APK safely. Step-by-step install guide for Android.',
    images: ['/dhan7.jpg'],
  },
}

const steps = [
  'Click the download button below',
  'Allow installation from unknown sources in your device settings',
  'Install the downloaded APK file',
  'Open the app and start playing',
]

const features = ['Secure APK', 'Fast install', 'No Play Store required']

export default function DownloadPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan77 APK Download
        </h1>
        <p className="text-(--color-text-muted)">
          Download the latest version of Dhan77 APK and start earning real money today.
        </p>
        <CTAButton />
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          How to Install
        </h2>
        <ol className="flex flex-col gap-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-start gap-3 text-(--color-text-primary)">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-(--color-accent-red) text-(--color-text-primary) flex items-center justify-center font-bold text-sm">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <div className="mt-4 flex justify-center">
          <CTAButton />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Why Download Dhan77?
        </h2>
        <ul className="flex flex-col gap-2">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 pt-4 border-t border-(--color-accent-red)">
        <p className="text-(--color-text-muted) text-sm">Also see</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/dhan77-login', label: 'Login Guide' },
            { href: '/dhan77-bonus', label: 'Bonus Offers' },
            { href: '/dhan77-review', label: 'App Review' },
            { href: '/faq', label: 'FAQ' },
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
  )
}
