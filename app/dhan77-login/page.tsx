import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Dhan77 Login Guide',
  alternates: {
    canonical: '/dhan77-login',
  },
}

const steps = [
  'Open the Dhan77 app on your device',
  'Enter your registered mobile number',
  'Enter the OTP sent to your mobile',
  'Tap Login to access your account',
]

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-12 px-4 py-12 max-w-3xl mx-auto">
      <section className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-accent-gold)">
          Dhan77 Login
        </h1>
        <p className="text-(--color-text-muted)">
          Follow these simple steps to log in to your Dhan77 account.
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Login Steps
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
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-(--color-accent-red)">
          Security Tips
        </h2>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2 text-(--color-text-primary)">
            <span className="text-(--color-accent-gold) font-bold mt-0.5">⚠</span>
            Do not share your OTP with anyone — Dhan77 will never ask for it.
          </li>
          <li className="flex items-start gap-2 text-(--color-text-primary)">
            <span className="text-(--color-accent-gold) font-bold mt-0.5">⚠</span>
            Always use a secure, trusted device to log in.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-3 pt-4 border-t border-(--color-accent-red)">
        <p className="text-(--color-text-muted) text-sm">Also see</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: '/dhan77-apk-download', label: 'APK Download' },
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
