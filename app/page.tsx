import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTAButton from './_components/CTAButton'
import { siteUrl } from './_lib/siteUrl'
import { DOWNLOAD_LINK, DEFAULT_KEYWORDS, INTERNAL_NAV_LINKS } from './_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan7 (Official) — Dhan 7 App Download & Play Online | Dhan7.win',
  description:
    'Download Dhan7 app (official Dhan 7 APK latest version 2026). Play real money games like Crash, Slots, Casino & Fishing. Claim ₹777 bonus with instant UPI withdrawals on dhan7.win.',
  keywords: DEFAULT_KEYWORDS,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dhan7 (Official) — Dhan 7 App Download & Play Online | Dhan7.win',
    description:
      'Download Dhan7 app (official Dhan 7 APK latest version 2026). Play real money games, get ₹777 bonus, and instant UPI withdrawals on dhan7.win.',
    url: '/',
    siteName: 'Dhan7',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 (Official) — Dhan 7 App Download & Play Online',
    description: 'Download Dhan7 app for Android. Play real cash games & claim ₹777 bonus on dhan7.win.',
    images: ['/dhan77-logo.png'],
  },
}

const screenshots = [
  { src: '/dhan7-1.jpeg', alt: 'Dhan7 app home screen interface' },
  { src: '/dhan7-2.jpeg', alt: 'Dhan7 gaming lobby screenshot' },
  { src: '/dhan7-3.jpeg', alt: 'Dhan7 APK 777 bonus screen' },
  { src: '/dhan7-4.jpeg', alt: 'Dhan7 real money crash game screenshot' },
  { src: '/dhan7-5.jpeg', alt: 'Dhan7 instant withdrawal section' },
  { src: '/dhan7-6.jpeg', alt: 'Dhan7 gameplay and multiplayer room' },
  { src: '/dhan7-7.jpeg', alt: 'Dhan7 wallet and UPI balance screenshot' },
]

const features = [
  'Instant 5-Minute UPI Withdrawal',
  '₹777 Welcome Bonus for New Users',
  '30% Lifetime Referral Commission',
  'Fast & Lag-Free Gameplay Engine',
  '256-Bit SSL Bank-Grade Security',
  '24/7 Dedicated Customer Support',
]

const games = ['Crash Game', 'Live Casino', 'Classic Slots', 'Fishing Hunt', 'Rummy Pro', 'Teen Patti']

export default function HomePage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Dhan7 App',
        alternateName: ['Dhan7', 'Dhan 7', 'Dhan7.win', 'Dhan 7 App', 'Dhan7 Game', 'Dhan7 Gaming App'],
        operatingSystem: 'Android 5.0+',
        applicationCategory: 'GameApplication',
        downloadUrl: DOWNLOAD_LINK,
        url: siteUrl(),
        description:
          'Dhan7 App is India\'s top real-money gaming platform for Android. Download the official Dhan7 APK to play crash, live casino, slots, and fishing games with instant withdrawals via UPI.',
        softwareVersion: '7.2.1',
        fileSize: '45.2MB',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dhan7',
          url: siteUrl(),
        },
      },
      {
        '@type': 'WebSite',
        url: siteUrl(),
        name: 'Dhan7',
        alternateName: ['Dhan7.win', 'Dhan 7'],
        description:
          'Official portal for Dhan7 app download, Dhan 7 APK, Dhan7 login guide, ₹777 bonus offers, and real money gaming on dhan7.win.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl()}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: 'Dhan7',
        url: siteUrl(),
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl()}/dhan77-logo.png`,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Dhan7 app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan7 (also known as Dhan 7) is a trusted online real-money gaming platform for Android. Players can enjoy skill and arcade games like Crash, Casino, Slots, and Fishing, earning real cash with instant UPI withdrawals.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I download the official Dhan7 APK?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Visit dhan7.win/dhan7-apk-download, tap Download Dhan7 APK, enable Unknown Sources under Android Security Settings, open the downloaded APK, and install. The process takes less than 2 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the Dhan7 app free to download?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Dhan7 app download is 100% free from the official dhan7.win website. There are no fees or subscriptions to install and register.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the Dhan7 ₹777 welcome bonus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New players registering on Dhan7 receive up to a ₹777 welcome bonus on their initial deposit. Check the Dhan7 bonus page on dhan7.win for current terms and wagering conditions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Dhan7 withdrawal work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan7 supports fast withdrawals directly into your bank account or UPI ID (Google Pay, PhonePe, Paytm). Complete basic KYC, visit the Wallet tab, enter the amount, and confirm. Funds usually arrive in 5–10 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which Android devices support Dhan7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Dhan7 APK is optimized for all Android devices running Android 5.0 (Lollipop) and higher, including Samsung, Xiaomi, Realme, Vivo, Oppo, OnePlus, and Motorola.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan7 safe and legit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Dhan7 APK downloaded from dhan7.win is verified, malware-free, and protected by 256-bit SSL encryption. Always download from the official dhan7.win domain to avoid fake mirrors.',
            },
          },
        ],
      },
    ],
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-16 px-4 py-12 max-w-4xl mx-auto">
        {/* Hero */}
        <section className="flex flex-col items-center gap-6 text-center pt-4">
          <div className="relative">
            <Image
              src="/dhan77-logo.png"
              alt="Dhan7 Logo - Official Dhan 7 Gaming App"
              width={110}
              height={110}
              className="rounded-2xl shadow-2xl border-2 border-(--color-accent-gold)"
              priority
            />
            <span className="absolute -bottom-2 -right-2 bg-(--color-accent-red) text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow">
              v7.2 APK
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-(--color-accent-gold) tracking-tight leading-tight">
            Dhan7 — Official Dhan 7 App Download &amp; Play Online
          </h1>
          <p className="text-lg sm:text-xl text-(--color-text-muted) max-w-2xl leading-relaxed">
            India's most trusted real money gaming app. Play Crash, Casino, Slots &amp; Fishing with instant UPI withdrawals on <span className="text-(--color-accent-gold) font-bold">dhan7.win</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <CTAButton label="Download Dhan7 APK (Free)" />
            <Link
              href="/dhan7-bonus"
              className="px-6 py-3 rounded-lg border border-(--color-accent-gold) text-(--color-accent-gold) font-bold text-base hover:bg-(--color-accent-gold) hover:text-black transition-colors"
            >
              Claim ₹777 Bonus
            </Link>
          </div>

          <p className="text-xs text-(--color-text-muted) flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            100% Virus-Free • 45.2 MB • Android 5.0+ • Instant UPI Payouts
          </p>
        </section>

        {/* Quick Intro */}
        <section className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-gold)">
            Welcome to Dhan7 (Dhan 7) — Play Smart &amp; Win Real Cash
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            Welcome to <strong>Dhan7</strong>, your premier destination for exciting online gaming and real rewards. 
            If you are looking for a reliable, fast, and high-paying gaming platform, the <strong>Dhan7 Gaming App</strong> is 
            built specifically for you. Whether you are exploring real money crash games for the first time or an experienced gamer looking for quick UPI cashouts, 
            <strong>Dhan7</strong> offers a transparent, legal, and highly rewarding environment.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            Hosted exclusively on our official domain <strong>dhan7.win</strong>, you can safely <Link href="/dhan7-apk-download" className="text-(--color-accent-gold) hover:underline font-semibold">Download Dhan7 APK</Link> directly to your Android device with zero malware risk, claim your ₹777 welcome gift, and start earning today.
          </p>
        </section>

        {/* What is Dhan7 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            What is Dhan7? (Dhan 7 Gaming Platform Overview)
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            <strong>Dhan7</strong> (frequently searched as <strong>Dhan 7</strong>, <strong>Dhan7 App</strong>, or <strong>Dhan7 Game</strong>) is an advanced Android-based real-money gaming portal tailored for Indian players. It integrates multiple casino-style and skill gaming genres into a single unified mobile application.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            Unlike slow and ad-heavy platforms, <strong>Dhan7</strong> utilizes high-performance cloud servers to deliver ultra-fast game loading and real-time multiplier updates. With seamless bank-grade UPI integration (PhonePe, Google Pay, Paytm), your winnings are credited directly to your bank account within minutes.
          </p>
        </section>

        {/* Key Features */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Why Choose Dhan7 Gaming App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="text-lg font-bold text-(--color-accent-gold) mb-2">⚡ Instant 5-Minute Withdrawals</h3>
              <p className="text-sm text-(--color-text-muted)">
                No waiting 24–48 hours for your money. Dhan7 supports direct 24/7 IMPS and UPI withdrawals with minimal fees and rapid execution.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="text-lg font-bold text-(--color-accent-gold) mb-2">🎁 ₹777 Welcome Bonus</h3>
              <p className="text-sm text-(--color-text-muted)">
                Get a jumpstart on your earnings with a dedicated welcome bonus package on your first deposit, plus daily check-in free coins.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="text-lg font-bold text-(--color-accent-gold) mb-2">👥 30% Lifetime Referral Earnings</h3>
              <p className="text-sm text-(--color-text-muted)">
                Invite friends with your Dhan7 referral link and earn a recurring commission on all their bets, creating passive income.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="text-lg font-bold text-(--color-accent-gold) mb-2">🔒 Bank-Grade Security</h3>
              <p className="text-sm text-(--color-text-muted)">
                All transactions, mobile OTPs, and personal wallet data are encrypted with 256-bit SSL protocols for total privacy.
              </p>
            </div>
          </div>
        </section>

        {/* How Dhan7 Works */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            How to Get Started on Dhan7 (4 Simple Steps)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-lg border border-(--color-accent-gold)/30 bg-neutral-900/50 flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-(--color-accent-gold) text-black font-extrabold flex items-center justify-center text-sm">
                1
              </span>
              <h3 className="font-bold text-(--color-accent-gold)">Download APK</h3>
              <p className="text-xs text-(--color-text-muted)">
                Visit <Link href="/dhan7-apk-download" className="underline">Dhan7 APK Download</Link> on dhan7.win and install the v7.2 package.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-(--color-accent-gold)/30 bg-neutral-900/50 flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-(--color-accent-gold) text-black font-extrabold flex items-center justify-center text-sm">
                2
              </span>
              <h3 className="font-bold text-(--color-accent-gold)">Register / Login</h3>
              <p className="text-xs text-(--color-text-muted)">
                Enter your mobile number and verify via OTP. Follow the <Link href="/dhan7-login" className="underline">Dhan7 Login guide</Link>.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-(--color-accent-gold)/30 bg-neutral-900/50 flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-(--color-accent-gold) text-black font-extrabold flex items-center justify-center text-sm">
                3
              </span>
              <h3 className="font-bold text-(--color-accent-gold)">Claim ₹777</h3>
              <p className="text-xs text-(--color-text-muted)">
                Deposit and unlock your ₹777 bonus on the <Link href="/dhan7-bonus" className="underline">Dhan7 Bonus</Link> tab.
              </p>
            </div>
            <div className="p-5 rounded-lg border border-(--color-accent-gold)/30 bg-neutral-900/50 flex flex-col gap-2">
              <span className="w-8 h-8 rounded-full bg-(--color-accent-gold) text-black font-extrabold flex items-center justify-center text-sm">
                4
              </span>
              <h3 className="font-bold text-(--color-accent-gold)">Withdraw Cash</h3>
              <p className="text-xs text-(--color-text-muted)">
                Play Crash, Slots or Teen Patti and cash out real money straight to your UPI.
              </p>
            </div>
          </div>
        </section>

        {/* Games Available */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Popular Games Available on Dhan7
          </h2>
          <p className="text-(--color-text-muted) text-sm leading-relaxed">
            The <strong>Dhan7 app</strong> features high-RTP (Return to Player) games designed for both casual fun and high-stakes strategy:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {games.map((game) => (
              <div
                key={game}
                className="rounded-lg border border-neutral-700 bg-neutral-900/50 p-4 text-center font-bold text-(--color-accent-gold) hover:border-(--color-accent-gold) transition-colors"
              >
                🎮 {game}
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Dhan7 App Screenshots &amp; Gameplay Gallery
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {screenshots.map(({ src, alt }) => (
              <Image
                key={src}
                src={src}
                alt={alt}
                width={200}
                height={360}
                className="rounded-lg w-full h-auto border border-neutral-800 hover:border-(--color-accent-gold) transition-colors"
              />
            ))}
          </div>
        </section>

        {/* App Technical Details Table */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Dhan7 APK Specifications &amp; Overview
          </h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full text-left text-sm text-(--color-text-muted)">
              <tbody>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">App Name</td>
                  <td className="px-4 py-3">Dhan7 (Dhan 7 App)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Official Domain</td>
                  <td className="px-4 py-3 font-semibold text-(--color-accent-gold)">dhan7.win</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">Latest Version</td>
                  <td className="px-4 py-3">v7.2.1 (2026 Release)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">APK File Size</td>
                  <td className="px-4 py-3">45.2 MB</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">Operating System</td>
                  <td className="px-4 py-3">Android 5.0 and above</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Welcome Bonus</td>
                  <td className="px-4 py-3 text-emerald-400 font-bold">₹777 Instant Bonus</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">Withdrawal Speed</td>
                  <td className="px-4 py-3">Instant (5–10 Minutes via UPI)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">License &amp; Cost</td>
                  <td className="px-4 py-3">Free Official Download</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Explore Hub Links */}
        <section className="flex flex-col gap-4 p-6 rounded-xl border border-neutral-800 bg-neutral-900/30">
          <h2 className="text-xl sm:text-2xl font-bold text-(--color-accent-gold)">
            Dhan7 Official Guides &amp; Resources
          </h2>
          <div className="flex flex-wrap gap-3">
            {INTERNAL_NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs sm:text-sm border border-(--color-accent-red) text-(--color-accent-red) px-4 py-2 rounded-lg hover:bg-(--color-accent-red) hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Frequently Asked Questions (FAQ) About Dhan7
          </h2>
          <div className="flex flex-col gap-4">
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 flex flex-col gap-2">
              <h3 className="text-base font-bold text-(--color-accent-gold)">What is the Dhan7 app?</h3>
              <p className="text-sm text-(--color-text-muted)">
                Dhan7 (also known as Dhan 7) is a trusted real-money gaming platform for Android. Players can enjoy Crash, Casino, Slots, and Fishing games and withdraw cash into UPI or bank accounts. Download the official{' '}
                <Link href="/dhan7-apk-download" className="text-(--color-accent-gold) underline">
                  Dhan7 APK
                </Link>{' '}
                from dhan7.win.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 flex flex-col gap-2">
              <h3 className="text-base font-bold text-(--color-accent-gold)">
                How do I complete the Dhan7 APK download?
              </h3>
              <p className="text-sm text-(--color-text-muted)">
                Visit the{' '}
                <Link href="/dhan7-apk-download" className="text-(--color-accent-gold) underline">
                  Dhan7 download page
                </Link>
                , tap Download APK, allow Unknown Sources in Android Settings, and install the file. The process takes less than 2 minutes.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 flex flex-col gap-2">
              <h3 className="text-base font-bold text-(--color-accent-gold)">Is the Dhan7 app download free?</h3>
              <p className="text-sm text-(--color-text-muted)">
                Yes. The <strong>Dhan7 app download</strong> from dhan7.win is 100% free with no hidden charges.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 flex flex-col gap-2">
              <h3 className="text-base font-bold text-(--color-accent-gold)">How do Dhan7 withdrawals work?</h3>
              <p className="text-sm text-(--color-text-muted)">
                Open the Dhan7 app → go to Wallet → select Withdraw → enter your UPI ID or bank account details → enter the amount → confirm. Most Dhan7 withdrawals are credited within 5–10 minutes.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40 flex flex-col gap-2">
              <h3 className="text-base font-bold text-(--color-accent-gold)">Is Dhan7 safe and legit?</h3>
              <p className="text-sm text-(--color-text-muted)">
                Yes. The official <strong>Dhan7 APK</strong> from dhan7.win is thoroughly scanned, malware-free, and protected with SSL encryption. Read our detailed{' '}
                <Link href="/dhan7-review" className="text-(--color-accent-gold) underline">
                  Dhan7 Review
                </Link>{' '}
                for full safety analysis.
              </p>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
