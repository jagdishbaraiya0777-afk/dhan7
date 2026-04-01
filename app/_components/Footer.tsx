import Link from 'next/link'

const externalLinks = [
  { href: 'https://comegameapp.com', label: 'Come Game App' },
  { href: 'https://goplay11-apk.com', label: 'GoPlay11 APK' },
]

const internalLinks = [
  { href: '/', label: 'Home' },
  { href: '/dhan77-apk-download', label: 'APK Download' },
  { href: '/dhan77-login', label: 'Login Guide' },
  { href: '/dhan77-bonus', label: 'Bonus Offers' },
  { href: '/dhan77-review', label: 'Review' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer className="bg-(--color-bg-base) border-t border-(--color-accent-gold) mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center gap-6 text-center">

        {/* Internal nav */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-text-muted) text-xs uppercase tracking-wider">Pages</p>
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            {internalLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-(--color-text-muted) hover:text-(--color-accent-gold) text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* External links */}
        <div className="flex flex-col gap-2">
          <p className="text-(--color-text-muted) text-xs uppercase tracking-wider">Related Sites</p>
          <ul className="flex flex-wrap justify-center gap-4">
            {externalLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-(--color-accent-gold) hover:text-(--color-text-primary) text-sm transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-(--color-text-muted) text-xs">
          © {new Date().getFullYear()} Dhan7.xyz – All rights reserved. For entertainment purposes only. 18+ only. Play responsibly.
        </p>
      </div>
    </footer>
  )
}
