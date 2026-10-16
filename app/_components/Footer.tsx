import Link from 'next/link'
import { INTERNAL_NAV_LINKS } from '../_lib/constants'

const externalLinks = [
  { href: 'https://comegameapp.com', label: 'Come Game App' },
  { href: 'https://goplay11-apk.com', label: 'GoPlay11 APK' },
]

export default function Footer() {
  return (
    <footer className="bg-(--color-bg-base) border-t border-(--color-accent-gold) mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6 text-center">

        {/* Brand Summary */}
        <div className="flex flex-col items-center gap-2 max-w-2xl">
          <span className="text-(--color-accent-gold) font-black text-2xl tracking-wide">
            Dhan7<span className="text-(--color-accent-red)">.win</span>
          </span>
          <p className="text-xs text-(--color-text-muted) leading-relaxed">
            Dhan7.win is the official informational and download portal for the Dhan7 (Dhan 7) real-money gaming app for Android. Download Dhan7 APK, claim the ₹777 welcome bonus, and enjoy secure instant withdrawals.
          </p>
        </div>

        {/* Internal nav */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-text-muted) text-xs uppercase tracking-wider font-semibold">Explore Dhan7</p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {INTERNAL_NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-(--color-text-muted) hover:text-(--color-accent-gold) text-sm font-medium transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* External links */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-text-muted) text-xs uppercase tracking-wider font-semibold">Related Sites</p>
          <ul className="flex flex-wrap justify-center gap-4">
            {externalLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-accent-gold) hover:text-(--color-text-primary) text-xs transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Responsible Gaming Notice */}
        <div className="border-t border-neutral-800 pt-6 w-full max-w-3xl text-xs text-(--color-text-muted) flex flex-col gap-2">
          <p className="text-amber-400 font-semibold">
            ⚠ 18+ Only | Play Responsibly
          </p>
          <p>
            Real money gaming involves financial risk and may be addictive. Please play responsibly and within your financial limits. Dhan7 is not intended for users under 18 years of age.
          </p>
          <p className="text-[11px] text-neutral-500 pt-2">
            © {new Date().getFullYear()} Dhan7.win — Official Dhan7 Gaming Portal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
