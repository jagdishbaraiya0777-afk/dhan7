import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'

export const metadata: Metadata = {
  title: 'Dhan77 Bonus ₹777 Offer – Cashback & Referral Rewards 2026',
  description:
    'Claim Dhan77 ₹777 first deposit bonus, daily cashback, and referral rewards. Best bonus offers on Dhan7 gaming app 2026.',
  keywords: [
    'dhan77 bonus', 'dhan7 bonus', 'dhan 77 bonus offer',
    'dhan77 777 bonus', 'dhan7 referral reward', 'dhan77 cashback 2026',
  ],
  alternates: { canonical: '/dhan77-bonus' },
  openGraph: {
    title: 'Dhan77 Bonus ₹777 Offer 2026',
    description: 'Claim ₹777 first deposit bonus, daily cashback, and referral rewards on Dhan77.',
    url: '/dhan77-bonus',
    siteName: 'Dhan7.xyz',
    type: 'website',
    images: [{ url: '/dhan7.jpg', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan77 Bonus ₹777 Offer 2026',
    description: 'Claim ₹777 bonus, daily cashback, and referral rewards on Dhan77.',
    images: ['/dhan7.jpg'],
  },
}

const bonuses = [
  {
    title: '₹777 First Deposit Bonus',
    description:
      'Get an instant ₹777 bonus when you make your first deposit. Start playing with extra funds right away.',
  },
  {
    title: 'Daily Cashback Offer',
    description:
      'Earn cashback on your daily losses. The more you play, the more you get back — every single day.',
  },
  {
    title: 'Referral Rewards Program',
    description:
      'Invite friends and earn a commission on every deposit they make. Build your network and grow your income.',
  },
]

export default function BonusPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan77 Bonus
        </h1>
        <p className="text-(--color-text-muted)">
          Claim exclusive bonuses and rewards when you join Dhan77.
        </p>
        <CTAButton label="Claim Your Bonus Now" />
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Available Bonuses
        </h2>
        <ul className="flex flex-col gap-6">
          {bonuses.map(({ title, description }) => (
            <li
              key={title}
              className="rounded-lg border border-(--color-accent-gold) p-5 flex flex-col gap-2"
            >
              <h3 className="text-lg font-bold text-(--color-accent-gold)">{title}</h3>
              <p className="text-(--color-text-muted)">{description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 pt-4 border-t border-(--color-accent-red)">
        <p className="text-(--color-text-muted) text-sm">Also see</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/dhan77-apk-download', label: 'APK Download' },
            { href: '/dhan77-login', label: 'Login Guide' },
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
