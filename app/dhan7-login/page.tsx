import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'
import { siteUrl } from '../_lib/siteUrl'
import { INTERNAL_NAV_LINKS } from '../_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan7 Login & Register (2026) — Official Dhan 7 App Login Guide',
  description:
    'Complete Dhan7 login guide for 2026. Step-by-step OTP login instructions, new account registration, password recovery, fixing login problems on dhan7.win.',
  keywords: [
    'dhan7 login',
    'dhan 7 login',
    'dhan7 register',
    'dhan7 sign in',
    'dhan 7 sign in',
    'dhan7 app login',
    'dhan7 game login',
    'dhan7 login problem',
    'dhan7 forgot password',
    'dhan7 otp login',
    'dhan 7 account',
    'dhan7 login guide 2026',
  ],
  alternates: { canonical: '/dhan7-login' },
  openGraph: {
    title: 'Dhan7 Login & Register (2026) — Official Dhan 7 App Login Guide',
    description:
      'Step-by-step Dhan7 login and account sign up guide. Fix OTP delays, password reset, and secure your wallet on dhan7.win.',
    url: '/dhan7-login',
    siteName: 'Dhan7',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 Login Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 Login & Register Guide 2026',
    description: 'Fast, secure OTP login for Dhan7 on Android. Instant access to your account.',
    images: ['/dhan77-logo.png'],
  },
}

const loginSteps = [
  {
    step: '1',
    title: 'Launch Dhan7 App or Web Portal',
    desc: 'Open the installed Dhan7 application on your Android phone or navigate to the official portal on dhan7.win.',
  },
  {
    step: '2',
    title: 'Enter Registered Mobile Number',
    desc: 'Type your 10-digit Indian mobile number in the login field. Ensure the SIM is active to receive SMS verification.',
  },
  {
    step: '3',
    title: 'Input One-Time Password (OTP)',
    desc: 'Tap "Send OTP" and enter the 6-digit verification code received via SMS. Alternatively, use your account password if previously configured.',
  },
  {
    step: '4',
    title: 'Tap Login & Access Dashboard',
    desc: 'Click the Login button to immediately enter your Dhan7 wallet dashboard, view your balance, and play your favorite games.',
  },
]

export default function LoginPage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'HowTo',
        name: 'How to Login to Dhan7 App',
        description: 'Complete step-by-step instructions for logging into your Dhan7 account securely.',
        step: loginSteps.map((s, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: s.title,
          text: s.desc,
        })),
      },
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
            name: 'Dhan7 Login',
            item: `${siteUrl()}/dhan7-login`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How do I login to Dhan7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Open the Dhan7 app, enter your 10-digit mobile number, tap Send OTP, enter the received 6-digit code, and tap Login to access your account.',
            },
          },
          {
            '@type': 'Question',
            name: 'What should I do if Dhan7 OTP is not received?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ensure you have adequate cellular signal, check your spam SMS folder, wait 60 seconds, and tap Resend OTP. If the delay persists, verify your number or contact Dhan7 24/7 customer support.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I register a new account on Dhan7?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Download the Dhan7 APK from dhan7.win, tap Register, input your mobile number, verify via OTP, set a password, and claim your instant ₹777 welcome bonus.',
            },
          },
          {
            '@type': 'Question',
            name: 'How do I reset my forgotten Dhan7 password?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'On the login screen, click "Forgot Password", enter your registered phone number, verify the OTP, and create a new secure password.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan7 login free and secure?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Logging in to Dhan7 is completely free. The system uses 256-bit SSL encryption to ensure your personal data and wallet funds remain 100% secure.',
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
          <span className="text-(--color-accent-gold)">Dhan7 Login</span>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-(--color-accent-gold) leading-tight">
            Dhan7 Login &amp; Registration — Official Account Guide (2026)
          </h1>
          <p className="text-base sm:text-lg text-(--color-text-muted) max-w-2xl leading-relaxed">
            Need fast, secure access to your <strong>Dhan7</strong> gaming account? 
            Follow this official guide to login, register a new account, recover passwords, 
            and keep your funds protected on <span className="text-(--color-accent-gold)">dhan7.win</span>.
          </p>
          <div className="flex gap-4">
            <CTAButton label="Open App / Download APK" />
          </div>
        </section>

        {/* What is Dhan7 Login */}
        <section className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            What is Dhan7 Login?
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            The <strong>Dhan7 login</strong> (often searched as <strong>Dhan 7 login</strong>, <strong>Dhan7 app login</strong>, or <strong>Dhan7 game login</strong>) is the secure gateway where authenticated players access their real cash balances, game statistics, bonus rewards, and instant UPI withdrawal features.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            Whether you are accessing Dhan7 via the Android APK or the mobile web app, logging in takes only seconds with OTP-based two-factor authentication.
          </p>
        </section>

        {/* Step-by-Step Login Instructions */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            How to Login to Dhan7 (Step-by-Step Guide)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {loginSteps.map((item) => (
              <div key={item.step} className="p-5 rounded-lg border border-neutral-800 bg-neutral-900/30 flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-(--color-accent-red) text-white font-extrabold flex items-center justify-center text-sm">
                  {item.step}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-white text-base">{item.title}</h3>
                  <p className="text-xs text-(--color-text-muted) leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How to Register */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-(--color-accent-gold)">
            New to Dhan7? How to Register in 60 Seconds
          </h2>
          <p className="text-(--color-text-muted) text-sm leading-relaxed">
            If you don't have a Dhan7 account yet, registration is free and unlocks an instant welcome bonus:
          </p>
          <ol className="list-decimal list-inside text-sm text-(--color-text-muted) flex flex-col gap-2">
            <li>Download and install the latest APK from <Link href="/dhan7-apk-download" className="text-(--color-accent-gold) underline">Dhan7 APK Download</Link>.</li>
            <li>Tap the <strong>Register</strong> button on the home screen.</li>
            <li>Input your 10-digit mobile number and create a strong password.</li>
            <li>Enter the SMS OTP verification code to verify your identity.</li>
            <li>Enter referral code if you have one to claim an extra ₹777 bonus reward.</li>
          </ol>
        </section>

        {/* Common Login Issues & Instant Fixes */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            Common Dhan7 Login Issues &amp; Instant Fixes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-amber-400 text-sm mb-1">1. OTP Not Received</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                Check that your SIM is active with SMS reception. Disable any third-party spam blocking apps and wait 60 seconds before tapping "Resend OTP".
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-amber-400 text-sm mb-1">2. Forgot Password</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                Click "Forgot Password" below the login button, enter your phone number, verify the OTP, and create a new secure password.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-amber-400 text-sm mb-1">3. "Account Suspended" Message</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                This occurs if multiple accounts were created on the same device or an emulator was detected. Contact 24/7 customer care to verify your account.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-amber-400 text-sm mb-1">4. App White Screen / Lag</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                Clear the Dhan7 app cache from Android Settings → Apps → Dhan7 → Clear Cache, or update to the latest APK from dhan7.win.
              </p>
            </div>
          </div>
        </section>

        {/* Security Tips */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/30 p-6">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            5 Essential Dhan7 Account Security Tips
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm text-(--color-text-muted)">
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">⚠</span>
              <span><strong>Never Share Your OTP:</strong> Dhan7 officials will NEVER call or message you asking for your OTP.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">⚠</span>
              <span><strong>Bind a Personal UPI ID:</strong> Only connect your personal PhonePe, Google Pay, or Paytm account for withdrawals.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">⚠</span>
              <span><strong>Download Exclusively from dhan7.win:</strong> Avoid third-party mod APKs or fake mirror sites.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-(--color-accent-gold) font-bold">⚠</span>
              <span><strong>Log Out on Shared Phones:</strong> Always log out if using a borrowed or secondary mobile device.</span>
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
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
