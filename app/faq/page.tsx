import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'
import { siteUrl } from '../_lib/siteUrl'
import { INTERNAL_NAV_LINKS } from '../_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan7 FAQ — Frequently Asked Questions & Answers | Dhan7.win',
  description:
    'Answers to all Dhan7 questions: APK download, OTP login help, ₹777 bonus claim, UPI withdrawal time, minimum deposit, security check on dhan7.win.',
  keywords: [
    'dhan7 faq',
    'dhan 7 faq',
    'dhan7 questions',
    'dhan7 help',
    'dhan7 customer care',
    'dhan7 withdrawal time',
    'how to play dhan7',
    'is dhan7 safe',
    'dhan7 official website',
    'dhan7 support',
  ],
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'Dhan7 FAQ — Frequently Asked Questions & Answers | Dhan7.win',
    description:
      'Everything you need to know about Dhan7 app: download, login, bonus offers, instant withdrawals, and player security on dhan7.win.',
    url: '/faq',
    siteName: 'Dhan7',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 FAQ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 FAQ — Top Questions & Answers',
    description: 'Comprehensive answers to all your Dhan7 app queries on dhan7.win.',
    images: ['/dhan77-logo.png'],
  },
}

interface FAQItem {
  category: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'General & Overview',
    question: 'What is Dhan7?',
    answer:
      'Dhan7 (also known as Dhan 7) is an online real-money gaming platform for Android. It offers skill-based and arcade games including Crash, Classic Slots, Live Casino, and Fishing, allowing players to earn real cash with instant UPI withdrawals.',
  },
  {
    category: 'General & Overview',
    question: 'What is the official domain of Dhan7?',
    answer:
      'The official and authentic website of Dhan7 is https://dhan7.win. Always ensure you download and access the platform from dhan7.win to avoid fake clones and unauthorized mirrors.',
  },
  {
    category: 'General & Overview',
    question: 'Is Dhan7 legal in India?',
    answer:
      'Dhan7 complies with standard skill-gaming guidelines in India. Real-money gaming is legal for adults aged 18+ across most Indian states, excluding states with specific local restrictions such as Assam, Telangana, Odisha, and Andhra Pradesh.',
  },
  {
    category: 'Download & Installation',
    question: 'How do I download the Dhan7 APK?',
    answer:
      'Visit https://dhan7.win/dhan7-apk-download, tap "Download Dhan7 APK", enable "Unknown Sources" in your Android settings, open the downloaded APK file, and tap Install. The full process takes less than 2 minutes.',
  },
  {
    category: 'Download & Installation',
    question: 'Why is Dhan7 not available on the Google Play Store?',
    answer:
      'Google Play Store has policy restrictions in many regions regarding real-money gaming apps with direct UPI deposit and withdrawal systems. Direct APK download from the official portal dhan7.win is the standard distribution method.',
  },
  {
    category: 'Download & Installation',
    question: 'Is the Dhan7 APK free to download?',
    answer:
      'Yes. Downloading and installing Dhan7 from dhan7.win is 100% free with no hidden charges or subscription costs.',
  },
  {
    category: 'Download & Installation',
    question: 'Can I install Dhan7 on an iPhone or iPad (iOS)?',
    answer:
      'The native APK package is designed exclusively for Android OS. Apple iOS users can access the mobile web app directly through Safari on dhan7.win.',
  },
  {
    category: 'Account & Login',
    question: 'How do I login to my Dhan7 account?',
    answer:
      'Open the Dhan7 app, enter your registered 10-digit mobile number, request an OTP, enter the 6-digit code received via SMS, and tap Login.',
  },
  {
    category: 'Account & Login',
    question: 'What should I do if I do not receive the Dhan7 OTP?',
    answer:
      'Ensure your mobile phone has good cellular signal and can receive SMS. Wait 60 seconds and tap "Resend OTP". If issues persist, check your SMS spam folder or contact customer support.',
  },
  {
    category: 'Account & Login',
    question: 'How can I reset my Dhan7 password?',
    answer:
      'On the login screen, click "Forgot Password", enter your registered phone number, verify the SMS OTP, and set a new secure password.',
  },
  {
    category: 'Bonuses & Rewards',
    question: 'What is the Dhan7 ₹777 welcome bonus?',
    answer:
      'New users who register on Dhan7 receive up to a ₹777 welcome bonus on their first deposit. Visit dhan7.win/dhan7-bonus for complete details and wagering terms.',
  },
  {
    category: 'Bonuses & Rewards',
    question: 'How does the Dhan7 30% referral program work?',
    answer:
      'Share your unique Dhan7 invite link with friends. Whenever your referees play games on Dhan7, you receive up to 30% lifetime revenue share credited directly to your withdrawable wallet daily.',
  },
  {
    category: 'Bonuses & Rewards',
    question: 'Can I withdraw the ₹777 bonus directly?',
    answer:
      'Bonus funds must be wagered on eligible games (e.g. 1x to 3x turnover) before they convert to withdrawable cash. This is standard across all online gaming platforms.',
  },
  {
    category: 'Deposits & Withdrawals',
    question: 'How do I withdraw my winnings from Dhan7?',
    answer:
      'Go to Wallet in the Dhan7 app → tap Withdraw → select UPI or Bank Transfer → input your PhonePe/GooglePay/Paytm UPI ID → enter the amount → tap Confirm. Funds typically arrive within 5 to 15 minutes.',
  },
  {
    category: 'Deposits & Withdrawals',
    question: 'What is the minimum withdrawal amount on Dhan7?',
    answer:
      'The minimum withdrawal amount is typically ₹100 or ₹200, making it very accessible for casual gamers to cash out small winnings.',
  },
  {
    category: 'Deposits & Withdrawals',
    question: 'Are there any withdrawal fees on Dhan7?',
    answer:
      'Dhan7 offers free standard withdrawals via UPI. Some banks or payment gateways may levy nominal transaction processing charges depending on the method selected.',
  },
  {
    category: 'Security & Safety',
    question: 'Is Dhan7 safe and virus-free?',
    answer:
      'Yes. The official Dhan7 APK hosted on dhan7.win is verified, virus-free, and encrypted with 256-bit SSL technology to safeguard your personal credentials and financial transactions.',
  },
  {
    category: 'Security & Safety',
    question: 'Is Dhan7 real or fake?',
    answer:
      'Dhan7 is a real gaming application with thousands of active players in India and verified instant UPI cashout proofs. Please play responsibly within your financial limits.',
  },
]

export default function FAQPage() {
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
            name: 'Dhan7 FAQ',
            item: `${siteUrl()}/faq`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      },
    ],
  }).replace(/</g, '\\u003c')

  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)))

  return (
    <>
      <main className="flex flex-col gap-12 px-4 py-12 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-(--color-text-muted) flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-(--color-accent-gold)">Home</Link>
          <span>/</span>
          <span className="text-(--color-accent-gold)">FAQ</span>
        </nav>

        {/* Hero */}
        <section className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-(--color-accent-gold) leading-tight">
            Dhan7 Frequently Asked Questions (FAQ)
          </h1>
          <p className="text-base sm:text-lg text-(--color-text-muted) max-w-2xl leading-relaxed">
            Everything you need to know about the <strong>Dhan7 app</strong>: APK download, login instructions, 
            ₹777 bonus claims, UPI withdrawal speed, and account safety on <span className="text-(--color-accent-gold)">dhan7.win</span>.
          </p>
        </section>

        {/* FAQs by Category */}
        <section className="flex flex-col gap-10">
          {categories.map((category) => (
            <div key={category} className="flex flex-col gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-(--color-accent-red) border-b border-neutral-800 pb-2">
                {category}
              </h2>
              <div className="flex flex-col gap-3">
                {FAQ_ITEMS.filter((item) => item.category === category).map(({ question, answer }) => (
                  <div
                    key={question}
                    className="rounded-lg border border-neutral-800 bg-neutral-900/30 p-5 flex flex-col gap-2 hover:border-(--color-accent-gold)/40 transition-colors"
                  >
                    <h3 className="text-base font-bold text-white">{question}</h3>
                    <p className="text-xs sm:text-sm text-(--color-text-muted) leading-relaxed">{answer}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Call to action */}
        <section className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-gold)">
            Ready to Start Playing on Dhan7?
          </h2>
          <p className="text-sm text-(--color-text-muted) max-w-xl">
            Download the official APK now and claim up to ₹777 welcome deposit bonus. Fast 5-minute UPI cashouts!
          </p>
          <CTAButton label="Download Dhan7 APK Now" />
        </section>

        {/* Hub Links */}
        <section className="flex flex-col gap-3 pt-4 border-t border-neutral-800">
          <p className="text-(--color-text-muted) text-sm font-semibold">Explore More Dhan7 Pages</p>
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
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  )
}
