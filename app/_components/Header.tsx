import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dhan77-apk-download', label: 'Download' },
  { href: '/dhan77-login', label: 'Login' },
  { href: '/dhan77-bonus', label: 'Bonus' },
  { href: '/dhan77-review', label: 'Review' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
]

export default function Header() {
  return (
    <header className="bg-(--color-bg-base) border-b border-(--color-accent-red) sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/dhan7.jpg"
            alt="Dhan7 Logo"
            width={48}
            height={48}
            className="rounded"
            priority
          />
          <span className="text-(--color-accent-gold) font-bold text-lg leading-tight hidden sm:block">
            Dhan77
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-(--color-text-primary) hover:text-(--color-accent-gold) text-sm font-medium transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile nav — CSS-only disclosure using checkbox */}
        <div className="md:hidden">
          <input type="checkbox" id="mobile-menu-toggle" className="peer sr-only" />
          <label
            htmlFor="mobile-menu-toggle"
            className="cursor-pointer flex flex-col gap-1.5 p-2"
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-(--color-accent-gold)" />
            <span className="block w-6 h-0.5 bg-(--color-accent-gold)" />
            <span className="block w-6 h-0.5 bg-(--color-accent-gold)" />
          </label>

          {/* Mobile dropdown — shown when checkbox is checked */}
          <nav
            className="hidden peer-checked:block absolute top-full left-0 right-0 bg-(--color-bg-base) border-t border-(--color-accent-red) px-4 py-3"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-3">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-(--color-text-primary) hover:text-(--color-accent-gold) text-base font-medium py-1 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
