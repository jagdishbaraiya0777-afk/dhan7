import type { Metadata } from 'next'
import Image from 'next/image'
import CTAButton from './_components/CTAButton'
import { siteUrl } from './_lib/siteUrl'
import { DOWNLOAD_LINK } from './_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan 7 App — Play Smart & Win Big | Download Dhan 7 APK',
  description:
    'Play smart and win big with Dhan 7 app. Download Dhan 7 APK for Android - your ultimate destination for exciting online gaming and real rewards. Fast withdrawals, 777 bonus, secure platform.',
  keywords: [
    'dhan 7',
    'dhan 7 apk',
    'dhan 7 app',
    'dhan 7 app download',
    'dhan 7 apk download',
    'dhan 7 game',
    'dhan 7 gaming app',
    'dhan 7 download',
    'dhan 7 login',
    'dhan 7 bonus',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Dhan 7 App — Play Smart & Win Big | Download Dhan 7 APK',
    description:
      'Play smart and win big with Dhan 7 app. Download Dhan 7 APK for Android - exciting online gaming and real rewards. Fast withdrawals, 777 bonus, secure platform.',
    url: '/',
    siteName: 'Dhan 7',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan 7 App Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan 7 App — Play Smart & Win Big',
    description: 'Download Dhan 7 app for Android. Play smart, win big with real rewards.',
    images: ['/dhan77-logo.png'],
  },
}

const screenshots = [
  { src: '/dhan7-1.jpeg', alt: 'Dhan 7 app screenshot - home screen' },
  { src: '/dhan7-2.jpeg', alt: 'Dhan 7 gaming interface screenshot' },
  { src: '/dhan7-3.jpeg', alt: 'Dhan 7 APK bonus screen screenshot' },
  { src: '/dhan7-4.jpeg', alt: 'Dhan 7 real money game lobby screenshot' },
  { src: '/dhan7-5.jpeg', alt: 'Dhan 7 withdrawal section screenshot' },
  { src: '/dhan7-6.jpeg', alt: 'Dhan 7 app gameplay screenshot' },
  { src: '/dhan7-7.jpeg', alt: 'Dhan 7 account and wallet screenshot' },
]

const features = [
  'Instant Withdrawal',
  '₹777 Bonus',
  'Referral Income',
  'Fast Gameplay',
  'Secure System',
]

const games = ['Crash', 'Casino', 'Slots', 'Fishing']

const internalLinks = [
  { href: '/dhan77-apk-download', label: 'Dhan 7 APK Download Page' },
  { href: '/dhan77-login', label: 'Dhan 7 Login Steps' },
  { href: '/dhan77-bonus', label: 'Dhan 7 Bonus Offers' },
  { href: '/dhan77-review', label: 'Dhan 7 App Review' },
  { href: '/faq', label: 'Dhan 7 FAQ' },
  { href: '/blog', label: 'Dhan 7 Long-Tail Blog' },
]

export default function HomePage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Dhan 7 App',
        alternateName: ['Dhan 7', 'Dhan 7 Game', 'Dhan 7 Gaming App'],
        operatingSystem: 'Android',
        applicationCategory: 'GameApplication',
        downloadUrl: DOWNLOAD_LINK,
        url: siteUrl(),
        description:
          'Dhan 7 App is a real-money gaming platform for Android. Download the Dhan 7 APK to play crash, casino, slots, and fishing games with instant withdrawals via UPI.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dhan 7',
          url: siteUrl(),
        },
      },
      {
        '@type': 'WebSite',
        url: siteUrl(),
        name: 'Dhan 7 App',
        description:
          'Official resource for Dhan 7 app download, Dhan 7 APK, Dhan 7 gaming guides, and Dhan 7 bonus offers.',
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl()}/blog?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        name: 'Dhan 7',
        url: siteUrl(),
        logo: {
          '@type': 'ImageObject',
          url: `${siteUrl()}/dhan77-logo.png`,
        },
        sameAs: [],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Dhan 7 app?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan 7 is a real-money gaming platform for Android. Players can play crash, casino, slots, and fishing games and withdraw winnings instantly via UPI or bank transfer.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I download the Dhan 7 APK?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Visit dhan7.xyz/dhan77-apk-download, tap the download button, enable Unknown Sources in your Android settings under Security, open the downloaded APK file, and install. The process takes under 5 minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is the Dhan 7 app free to download?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The Dhan 7 app download is completely free from the official dhan7.xyz website.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the Dhan 7 welcome bonus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'New users who register on the Dhan 7 app receive a 777 welcome bonus. Visit the bonus page on dhan7.xyz for current offer terms and conditions.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does Dhan 7 withdrawal work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan 7 supports instant withdrawals via UPI, bank transfer, and digital wallets. Complete your KYC, go to Wallet in the app, enter the withdrawal amount, and confirm. Most requests are processed within minutes.',
            },
          },
          {
            '@type': 'Question',
            name: 'Which Android version is needed for Dhan 7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Dhan 7 app requires Android 5.0 (Lollipop) or above. It works on most Android smartphones released after 2017.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan 7 safe and legit?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'When downloaded from the official dhan7.xyz page, the Dhan 7 APK is safe. The platform uses encrypted connections to protect user data and financial information. Always download only from the official source.',
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
        <section className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/dhan77-logo.png"
            alt="Dhan 7 logo"
            width={120}
            height={120}
            priority
          />
          <h1 className="text-4xl font-bold text-(--color-accent-gold)">
            Play Smart &amp; Win Big with Dhan 7
          </h1>
          <p className="text-xl text-(--color-text-muted)">
            Your ultimate destination for exciting online gaming and real rewards
          </p>
          <CTAButton />
          <p className="text-(--color-text-muted) max-w-2xl">
            Welcome to <strong>Dhan 7</strong>, your ultimate destination for exciting online gaming and real rewards. 
            If you're looking for a reliable, fast, and user-friendly gaming platform, the <strong>Dhan 7 app</strong> is 
            designed just for you. Whether you are a beginner exploring online games or an experienced player aiming to 
            maximize your winnings, <strong>Dhan 7</strong> offers the perfect environment to play, compete, and earn.
          </p>
        </section>

        {/* How to Download */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            How to Download the Dhan 7 App
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            Getting the <strong>Dhan 7 app download</strong> takes under five minutes.
            Visit our{' '}
            <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
              Dhan 7 APK download page
            </a>
            , tap the download button, enable Unknown Sources in your Android settings, and install the file. The{' '}
            <strong>Dhan 7 APK</strong> is free and compatible with Android 5.0 and above. Once installed, register
            with your mobile number and claim your welcome bonus automatically.
          </p>
        </section>

        {/* What is Dhan 7 App */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            What is Dhan 7?
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            <strong>Dhan 7</strong> is a modern online gaming platform that combines entertainment with earning opportunities. 
            Built with advanced technology and a focus on user experience, the platform ensures smooth gameplay, fast loading 
            speed, and a secure system for all users.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            The <strong>Dhan 7 app</strong> — also known as <strong>Dhan 7 game</strong> or <strong>Dhan 7 gaming app</strong> — 
            brings together multiple gaming options in one place, allowing players to enjoy different types of games without 
            switching platforms. Players can participate in Crash, Casino, Slots, and Fishing games, and withdraw their 
            winnings instantly via UPI or bank transfer.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            Unlike many platforms that focus only on gameplay, <strong>Dhan 7</strong> focuses equally on performance, 
            reliability, and user satisfaction. The goal of <strong>Dhan 7</strong> is simple - to provide a fair, 
            transparent, and rewarding gaming experience for everyone. This is why thousands of users are already choosing 
            to <strong>Download Dhan 7 APK</strong> and start their journey today.
          </p>
        </section>

        {/* Why Choose Dhan 7 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Why Choose Dhan 7 Gaming App?
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed mb-2">
            When it comes to online gaming, users want speed, security, and simplicity. The <strong>Dhan 7 app</strong> delivers 
            all of this and more. Here's what makes it stand out:
          </p>
          <ul className="flex flex-col gap-3 text-(--color-text-muted)">
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Fast &amp; Smooth Performance:</strong> No one likes lag or interruptions while playing. 
                <strong>Dhan 7</strong> is optimized for speed, ensuring that every game runs smoothly even on average devices.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Secure Gaming Platform:</strong> Your safety is a top priority. The platform uses secure systems 
                to protect your personal data and financial transactions, so you can play without worry.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Instant withdrawal via UPI:</strong> One of the biggest advantages of <strong>Dhan 7</strong> is 
                its quick withdrawal system. Your winnings are processed fast, so you don't have to wait long to enjoy your rewards.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Easy-to-Use Interface:</strong> The <strong>Dhan 7 app</strong> is designed with simplicity in mind. 
                Even if you're new, you can easily navigate and start playing within minutes.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Multiple Gaming Options:</strong> From casual games to competitive ones, <strong>Dhan 7</strong> offers 
                a variety of options to keep you entertained and engaged. Crash, Casino, Slots, and Fishing — all inside one app.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>777 Welcome Bonus:</strong> Every new player who completes the <strong>Dhan 7 app download</strong> and
                registers receives the welcome bonus automatically.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Refer and earn:</strong> Share your Dhan 7 referral code with friends and earn a percentage
                of their activity as ongoing passive income.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Safe and official APK:</strong> Download only from dhan7.xyz. The official{' '}
                <strong>Dhan 7 APK</strong> is scanned, secure, and does not require unnecessary device permissions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold mt-1">✓</span>
              <span>
                <strong>Lightweight app:</strong> The <strong>Dhan 7 app</strong> is optimised for mid-range Android
                devices and runs smoothly even on older smartphones.
              </span>
            </li>
          </ul>
        </section>

        {/* How Dhan7 Works */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            How Dhan 7 Works
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed mb-2">
            The process is simple and designed for everyone:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 p-4 rounded-lg border border-(--color-accent-gold)">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">Step 1: Sign Up</h3>
              <p className="text-(--color-text-muted) text-sm">
                Create your account on <strong>Dhan 7</strong> within seconds using basic details.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg border border-(--color-accent-gold)">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">Step 2: Explore Games</h3>
              <p className="text-(--color-text-muted) text-sm">
                Open the <strong>Dhan 7 app</strong> and browse through different games available.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg border border-(--color-accent-gold)">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">Step 3: Play &amp; Win</h3>
              <p className="text-(--color-text-muted) text-sm">
                Start playing your favorite games and win real rewards based on your performance.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 rounded-lg border border-(--color-accent-gold)">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">Step 4: Withdraw Earnings</h3>
              <p className="text-(--color-text-muted) text-sm">
                Easily withdraw your winnings using the fast and secure withdrawal system.
              </p>
            </div>
          </div>
        </section>

        {/* Why Thousands Trust Dhan7 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Why Thousands Trust Dhan 7
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            The growing popularity of <strong>Dhan 7</strong> is proof of its reliability and performance. Users trust 
            the platform because it delivers what it promises:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <li className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              Fast gameplay
            </li>
            <li className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              Easy withdrawals
            </li>
            <li className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              Secure transactions
            </li>
            <li className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              Smooth user experience
            </li>
            <li className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              Transparent system
            </li>
            <li className="flex items-center gap-2 text-(--color-text-primary)">
              <span className="text-(--color-accent-gold) font-bold">✓</span>
              Fair gameplay environment
            </li>
          </ul>
          <p className="text-(--color-text-muted) leading-relaxed">
            By choosing to <strong>Download Dhan 7 APK</strong>, you're joining a community of players who enjoy 
            gaming with confidence and convenience.
          </p>
        </section>

        {/* Screenshots */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Dhan 7 App Screenshots
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {screenshots.map(({ src, alt }) => (
              <Image key={src} src={src} alt={alt} width={200} height={360} className="rounded-lg w-full h-auto" />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Dhan 7 App Features
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-(--color-text-primary)">
                <span className="text-(--color-accent-gold) font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </section>

        {/* Games */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Games Available on Dhan 7
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {games.map((game) => (
              <li
                key={game}
                className="rounded-lg border border-(--color-accent-gold) px-4 py-3 text-center font-semibold text-(--color-accent-gold)"
              >
                {game}
              </li>
            ))}
          </ul>
        </section>

        {/* Internal Links */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Explore More
          </h2>
          <ul className="flex flex-col sm:flex-row flex-wrap gap-3">
            {internalLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-block rounded-lg border border-(--color-accent-red) px-5 py-2 text-(--color-accent-red) hover:bg-(--color-accent-red) hover:text-(--color-text-primary) transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">What is the Dhan 7 app?</h3>
              <p className="text-(--color-text-muted)">
                Dhan 7 is a real-money gaming platform for Android. Players can play crash, casino, slots,
                and fishing games and withdraw winnings via UPI or bank transfer. Download the{' '}
                <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
                  Dhan 7 APK
                </a>{' '}
                from this official page.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">
                How do I complete the Dhan 7 APK download?
              </h3>
              <p className="text-(--color-text-muted)">
                Go to the{' '}
                <a href="/dhan77-apk-download" className="text-(--color-accent-gold) hover:underline">
                  Dhan 7 download page
                </a>
                , tap Download, enable Unknown Sources in Android settings, and install the file. The full process
                takes under 5 minutes.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">Is the Dhan 7 app download free?</h3>
              <p className="text-(--color-text-muted)">
                Yes. The <strong>Dhan 7 app download</strong> from dhan7.xyz is completely free. No payment required
                to install or register.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">How does Dhan 7 withdrawal work?</h3>
              <p className="text-(--color-text-muted)">
                Open the Dhan 7 app → go to Wallet → tap Withdraw → select UPI or bank transfer → enter amount →
                confirm. Complete KYC first. Most Dhan 7 withdrawals are instant.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold text-(--color-accent-gold)">Is Dhan 7 safe?</h3>
              <p className="text-(--color-text-muted)">
                Yes. The official <strong>Dhan 7 APK</strong> from dhan7.xyz is safe. Download only from this page —
                avoid third-party mirrors.
              </p>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
