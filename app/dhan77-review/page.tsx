import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dhan77 Review – Real or Fake?',
  alternates: {
    canonical: '/dhan77-review',
  },
}

const pros = ['Easy earning opportunities', 'Fast withdrawal process', 'Multiple game options']
const cons = ['Risk involved — play responsibly', 'Not available on Google Play Store']

export default function ReviewPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan77 Review
        </h1>
        <p className="text-(--color-text-muted)">
          An honest look at the Dhan77 gaming app — what works, what to watch out for, and our verdict.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">Pros</h2>
        <ul className="flex flex-col gap-2">
          {pros.map((pro) => (
            <li key={pro} className="flex items-start gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold mt-0.5">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">Cons</h2>
        <ul className="flex flex-col gap-2">
          {cons.map((con) => (
            <li key={con} className="flex items-start gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-red) font-bold mt-0.5">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3 rounded-lg border border-(--color-accent-gold) p-5">
        <h2 className="text-xl font-bold text-(--color-accent-gold)">Verdict</h2>
        <p className="text-(--color-text-muted)">
          Dhan77 offers a fun and potentially rewarding gaming experience. However, real-money gaming
          carries inherent risk. Play responsibly.
        </p>
      </section>

      <section className="flex flex-col gap-3 pt-4 border-t border-(--color-accent-red)">
        <p className="text-(--color-text-muted) text-sm">Also see</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/dhan77-apk-download', label: 'APK Download' },
            { href: '/dhan77-login', label: 'Login Guide' },
            { href: '/dhan77-bonus', label: 'Bonus Offers' },
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
