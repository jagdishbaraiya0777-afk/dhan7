import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'
import { siteUrl } from '../_lib/siteUrl'
import { INTERNAL_NAV_LINKS } from '../_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan7 Bonus Offers (2026) — Claim ₹777 Welcome Bonus & Referral Code',
  description:
    'Claim exclusive Dhan7 bonus offers in 2026. Get up to ₹777 welcome deposit bonus, daily cashback rewards, and 30% lifetime referral earnings on dhan7.win.',
  keywords: [
    'dhan7 bonus',
    'dhan 7 bonus',
    'dhan7 777 bonus',
    'dhan7 promo code',
    'dhan7 referral code',
    'dhan7 bonus withdrawal',
    'dhan 7 cashback',
    'dhan7 free bonus',
    'dhan7 bonus code 2026',
    'dhan7 welcome bonus',
    'dhan 7 game bonus',
  ],
  alternates: { canonical: '/dhan7-bonus' },
  openGraph: {
    title: 'Dhan7 Bonus Offers (2026) — Claim ₹777 Welcome Bonus & Referral Code',
    description:
      'Complete guide to Dhan7 bonus offers: ₹777 welcome gift, daily reload bonuses, loss rebates, and 30% referral commissions on dhan7.win.',
    url: '/dhan7-bonus',
    siteName: 'Dhan7',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 Bonus Offers' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 Bonus Offers — Claim ₹777 Bonus on dhan7.win',
    description: 'Claim exclusive welcome & referral bonuses on Dhan7 gaming app.',
    images: ['/dhan77-logo.png'],
  },
}

const bonusTiers = [
  {
    title: '₹777 Welcome Signup Bonus',
    tag: 'New Players',
    amount: 'Up to ₹777',
    desc: 'Register a fresh account on Dhan7, complete initial deposit, and receive an instant bonus matching your deposit tier up to ₹777.',
  },
  {
    title: 'Daily Check-in & Login Streak',
    tag: 'Daily Reward',
    amount: '₹10 – ₹100 Free Daily',
    desc: 'Log in to your Dhan7 account daily without missing a day to claim progressive coin rewards and free lottery tickets.',
  },
  {
    title: '30% Lifetime Referral Program',
    tag: 'Passive Income',
    amount: '30% Commission',
    desc: 'Invite your friends using your unique Dhan7 referral link. Earn lifetime revenue share on every wager your referees place.',
  },
  {
    title: 'Daily Loss Cashback (10% Rebate)',
    tag: 'Safety Net',
    amount: 'Up to 10% Cash Back',
    desc: 'Had a tough gaming session? Dhan7 automatically returns up to 10% of daily net losses straight back to your playable wallet.',
  },
]

export default function BonusPage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl(),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Dhan7 Bonus',
            item: `${siteUrl()}/dhan7-bonus`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is the Dhan7 ₹777 welcome bonus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The Dhan7 welcome bonus grants new players up to ₹777 in promotional credits on their initial deposit after registering through dhan7.win.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I claim my Dhan7 bonus?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Register a verified account on Dhan7, open the Wallet section, choose your deposit amount, select the ₹777 bonus checkbox, and confirm payment via UPI. Bonus funds credit automatically.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I withdraw Dhan7 bonus money directly into my bank account?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bonus credits must be wagered on eligible games according to the turnover requirement (usually 1x to 3x) before they convert to withdrawable cash.',
            },
          },
          {
            '@type': 'Question',
            name: 'How does the Dhan7 referral commission program work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Share your personal Dhan7 invite code. When friends join and place bets, you earn up to 30% lifetime commission, credited daily with no cap.',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum deposit required for Dhan7 bonuses?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The standard minimum deposit to activate bonus offers is ₹100 to ₹500, depending on the promotional tier.',
            },
          },
        ],
      },
    ],
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-12 px-4 py-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-(--color-text-muted) flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-(--color-accent-gold)">Home</Link>
          <span>/</span>
          <span className="text-(--color-accent-gold)">Dhan7 Bonus</span>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-(--color-accent-gold) border border-amber-500/30">
            🔥 Exclusive Promotion 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-(--color-accent-gold) leading-tight">
            Dhan7 Bonus Offers — Claim ₹777 Welcome Bonus &amp; Referral Codes
          </h1>
          <p className="text-base sm:text-lg text-(--color-text-muted) max-w-2xl leading-relaxed">
            Boost your gaming balance with the most rewarding promotions in India. 
            Unlock the official <strong>Dhan7 bonus</strong> package, daily cashback, and recurring 30% affiliate earnings on <span className="text-(--color-accent-gold)">dhan7.win</span>.
          </p>
          <CTAButton label="Claim ₹777 Bonus Now" />
        </section>

        {/* What is Dhan7 Bonus */}
        <section className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            What is the Dhan7 Bonus System?
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            The <strong>Dhan7 bonus</strong> (also searched as <strong>Dhan 7 bonus</strong> or <strong>Dhan7 promo code</strong>) is a promotional incentive credited directly to your gaming wallet. Designed to maximize your winning potential while minimizing your financial risk, these bonuses allow you to play high-multiplier games like Crash, Slots, and Teen Patti with extra house credits.
          </p>
        </section>

        {/* Bonus Types Grid */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Current Dhan7 Bonus Offers (2026 Breakdown)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bonusTiers.map((bonus) => (
              <div key={bonus.title} className="p-6 rounded-xl border border-neutral-800 bg-neutral-900/30 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-(--color-accent-red)/20 text-(--color-accent-red) border border-(--color-accent-red)/30">
                    {bonus.tag}
                  </span>
                  <span className="text-emerald-400 font-extrabold text-base">{bonus.amount}</span>
                </div>
                <h3 className="text-lg font-bold text-white">{bonus.title}</h3>
                <p className="text-xs text-(--color-text-muted) leading-relaxed">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Step-by-Step Claiming Guide */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-(--color-accent-gold)">
            How to Claim Your Dhan7 Bonus (5 Easy Steps)
          </h2>
          <ol className="list-decimal list-inside text-sm text-(--color-text-muted) flex flex-col gap-3">
            <li><strong>Register Your Account:</strong> Install the APK from <Link href="/dhan7-apk-download" className="text-(--color-accent-gold) underline">Dhan7 APK Download</Link> and complete mobile registration.</li>
            <li><strong>Navigate to Wallet:</strong> Open the Dhan7 app and tap on the "+ Deposit" or "Promotions" icon.</li>
            <li><strong>Choose Deposit Amount:</strong> Select your preferred payment amount (minimum ₹100 or ₹500 for maximum bonus match).</li>
            <li><strong>Select Bonus Promo:</strong> Check the box for the "₹777 Welcome Bonus" or enter an active Dhan7 referral promo code.</li>
            <li><strong>Pay via UPI:</strong> Confirm payment through PhonePe, Google Pay, or Paytm. Your deposit plus bonus funds are credited instantly!</li>
          </ol>
        </section>

        {/* Important Rules & Turnover Requirements */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Important Dhan7 Bonus Terms &amp; Wagering Conditions
          </h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full text-left text-sm text-(--color-text-muted)">
              <tbody>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">Minimum Deposit</td>
                  <td className="px-4 py-3">₹100 (Unlock ₹777 bonus on ₹500+ deposits)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Wagering / Turnover</td>
                  <td className="px-4 py-3">1x to 3x turnover on eligible games before withdrawal</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">Eligible Games</td>
                  <td className="px-4 py-3">Crash, Slots, Fishing, Live Casino, Rummy</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Validity Window</td>
                  <td className="px-4 py-3">14 Days from deposit date</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-semibold text-white">Device Limit</td>
                  <td className="px-4 py-3">1 Bonus per player IP, Phone, and UPI Account</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Strategic Tips */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
          <h2 className="text-2xl font-bold text-(--color-accent-gold)">
            Expert Tips to Maximize Your Dhan7 Bonus Winnings
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm text-(--color-text-muted)">
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">💡</span>
              <span><strong>Start With Low-Volatility Games:</strong> Fulfill wagering requirements on high RTP slots and Crash at low multipliers (1.2x – 1.5x) to safely convert bonus funds.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">💡</span>
              <span><strong>Leverage the Referral System:</strong> Share your invite code across Telegram, WhatsApp, and social media to accumulate passive daily commissions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">💡</span>
              <span><strong>Check Expiry Dates:</strong> Utilize your promotional credits before the 14-day validity period expires.</span>
            </li>
          </ul>
        </section>

        {/* Hub Links */}
        <section className="flex flex-col gap-3 pt-4 border-t border-neutral-800">
          <p className="text-(--color-text-muted) text-sm font-semibold">Also see</p>
          <div className="flex flex-wrap gap-3">
            {INTERNAL_NAV_LINKS.map(({ href, label }) => (
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

        {/* FAQs */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Dhan7 Bonus FAQs
          </h2>
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-(--color-accent-gold) text-sm">Can I withdraw the ₹777 bonus directly without playing?</h3>
              <p className="text-xs text-(--color-text-muted) mt-1">
                No platform permits immediate withdrawal of bonus credits. You must play eligible games to meet the simple turnover criteria, after which 100% of your winnings can be withdrawn via UPI.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-(--color-accent-gold) text-sm">What happens if my bonus is not credited automatically?</h3>
              <p className="text-xs text-(--color-text-muted) mt-1">
                Wait up to 5 minutes. If it does not appear, open in-app 24/7 support with your deposit transaction ID for immediate manual credit.
              </p>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
