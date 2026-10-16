import Link from 'next/link'
import Image from 'next/image'
import { DOWNLOAD_LINK, INTERNAL_NAV_LINKS } from '../_lib/constants'

export default function Header() {
  return (
    <header className="bg-(--color-bg-base) border-b border-(--color-accent-red) sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <Image
            src="/dhan77-logo.png"
            alt="Dhan7 Logo"
            width={40}
            height={40}
            className="rounded-lg shadow-md group-hover:scale-105 transition-transform"
            priority
          />
          <div className="flex flex-col">
            <span className="text-(--color-accent-gold) font-extrabold text-xl leading-tight tracking-wide">
              Dhan7<span className="text-(--color-accent-red)">.win</span>
            </span>
            <span className="text-[10px] text-(--color-text-muted) uppercase tracking-widest hidden sm:block">
              Official Gaming Portal
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
          {INTERNAL_NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-(--color-text-primary) hover:text-(--color-accent-gold) text-sm font-semibold transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Header Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={DOWNLOAD_LINK}
            target="_blank"
            rel="nofollow sponsored"
            className="px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-(--color-accent-gold) to-amber-500 text-black hover:opacity-95 shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Download APK
          </a>
        </div>

        {/* Mobile nav — CSS-only disclosure using checkbox */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href={DOWNLOAD_LINK}
            target="_blank"
            rel="nofollow sponsored"
            className="px-3 py-1 rounded text-xs font-bold bg-(--color-accent-gold) text-black sm:hidden"
          >
            APK
          </a>
          <input type="checkbox" id="mobile-menu-toggle" className="peer sr-only" />
          <label
            htmlFor="mobile-menu-toggle"
            className="cursor-pointer flex flex-col gap-1.5 p-2 rounded border border-neutral-700 hover:border-(--color-accent-gold)"
            aria-label="Toggle navigation menu"
          >
            <span className="block w-5 h-0.5 bg-(--color-accent-gold)" />
            <span className="block w-5 h-0.5 bg-(--color-accent-gold)" />
            <span className="block w-5 h-0.5 bg-(--color-accent-gold)" />
          </label>

          {/* Mobile dropdown — shown when checkbox is checked */}
          <nav
            className="hidden peer-checked:block absolute top-full left-0 right-0 bg-(--color-bg-base) border-t border-(--color-accent-red) px-5 py-4 shadow-2xl"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3">
              {INTERNAL_NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-(--color-text-primary) hover:text-(--color-accent-gold) text-base font-semibold py-1.5 border-b border-neutral-800 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={DOWNLOAD_LINK}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="block text-center w-full py-2.5 rounded-lg bg-(--color-accent-gold) text-black font-bold text-sm"
                >
                  Download Dhan7 APK (v7.2)
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
