import type { Metadata } from 'next'
import Link from 'next/link'
import CTAButton from '../_components/CTAButton'
import { siteUrl } from '../_lib/siteUrl'
import { DOWNLOAD_LINK, INTERNAL_NAV_LINKS } from '../_lib/constants'

export const metadata: Metadata = {
  title: 'Dhan7 APK Download (v7.2 Latest Version 2026) — Official Dhan 7 App Free',
  description:
    'Download Dhan7 APK (v7.2 official latest version 2026) for Android. 100% safe, fast install guide, direct APK link, no Play Store required. Get ₹777 bonus on dhan7.win.',
  keywords: [
    'dhan7 apk download',
    'dhan7 apk',
    'dhan7 download',
    'dhan 7 apk download',
    'dhan 7 apk',
    'dhan 7 download',
    'dhan7 app download',
    'dhan 7 app download',
    'dhan7 latest version 2026',
    'dhan7 official apk',
    'dhan7 free download',
    'dhan7 android app',
  ],
  alternates: { canonical: '/dhan7-apk-download' },
  openGraph: {
    title: 'Dhan7 APK Download (v7.2 Latest Version 2026) — Official Dhan 7 App Free',
    description:
      'Download Dhan7 APK (v7.2 official latest version 2026) for Android. Safe, fast install guide, direct download link, no Play Store required.',
    url: '/dhan7-apk-download',
    siteName: 'Dhan7',
    type: 'website',
    locale: 'en_IN',
    images: [{ url: '/dhan77-logo.png', width: 512, height: 512, alt: 'Dhan7 APK Download Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhan7 APK Download (v7.2 Latest Version 2026)',
    description: 'Download Dhan7 APK safely for Android. Direct official download on dhan7.win.',
    images: ['/dhan77-logo.png'],
  },
}

const installSteps = [
  {
    step: '1',
    title: 'Tap Download Dhan7 APK Button',
    desc: 'Click the official download link on this page to fetch the official Dhan7-v7.2.1.apk file (45.2 MB) directly from our secure servers.',
  },
  {
    step: '2',
    title: 'Allow Installation from Unknown Sources',
    desc: 'On your Android device, go to Settings → Security (or Apps & Notifications) → enable "Install Unknown Apps" for your mobile browser (Chrome/Brave).',
  },
  {
    step: '3',
    title: 'Open the Downloaded APK File',
    desc: 'Open your device Downloads folder or pull down your notification tray, then tap on the downloaded Dhan7.apk file.',
  },
  {
    step: '4',
    title: 'Tap Install & Complete Setup',
    desc: 'Confirm the installation prompt. Once finished, tap "Open" to launch the Dhan7 app, register with your phone number, and receive your ₹777 welcome bonus!',
  },
]

const features = [
  'Direct high-speed official download from dhan7.win',
  '100% Virus-free, scanned with VirusTotal and Play Protect verified',
  'No Google Play Store dependency or region locks',
  'Automatic in-app OTA updates for new game releases',
  'Low battery and RAM consumption, smooth even on 2GB RAM phones',
  'Instant 24/7 UPI & Paytm bank cashouts',
]

export default function DownloadPage() {
  const jsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Dhan7 APK',
        alternateName: ['Dhan 7 APK', 'Dhan7 App Download', 'Dhan7 Latest Version'],
        operatingSystem: 'Android 5.0+',
        applicationCategory: 'GameApplication',
        downloadUrl: DOWNLOAD_LINK,
        url: `${siteUrl()}/dhan7-apk-download`,
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
        '@type': 'HowTo',
        name: 'How to Download and Install Dhan7 APK on Android',
        description: 'Step-by-step instructions to download and install the official Dhan7 APK on any Android phone.',
        step: installSteps.map((s, index) => ({
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
            name: 'Dhan7 APK Download',
            item: `${siteUrl()}/dhan7-apk-download`,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What is Dhan7 APK?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Dhan7 APK is the official Android installer package for the Dhan7 real-money gaming platform, allowing users to play Crash, Slots, Casino, and Fishing games with instant cash withdrawals.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan7 APK download free?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, downloading the official Dhan7 APK from dhan7.win is 100% free with no registration fees or hidden charges.',
            },
          },
          {
            '@type': 'Question',
            name: 'Why is Dhan7 APK not on Google Play Store?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Google Play Store restricts real-money gaming apps with direct UPI deposit and withdrawal systems in many regions. Downloading the verified APK directly from dhan7.win is the official and safe distribution method.',
            },
          },
          {
            '@type': 'Question',
            name: 'Is Dhan7 APK safe to install on my phone?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. The APK file provided on dhan7.win is scanned against malware, spyware, and viruses. It only requests minimal required permissions and uses 256-bit SSL encryption.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can I download Dhan7 on iOS / iPhone?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'The APK package is designed for Android devices. iOS users can access the web version directly through Safari on dhan7.win.',
            },
          },
        ],
      },
    ],
  }).replace(/</g, '\\u003c')

  return (
    <>
      <main className="flex flex-col gap-12 px-4 py-12 max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-xs text-(--color-text-muted) flex items-center gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-(--color-accent-gold)">Home</Link>
          <span>/</span>
          <span className="text-(--color-accent-gold)">Dhan7 APK Download</span>
        </nav>

        {/* Hero Section */}
        <section className="flex flex-col items-center gap-6 text-center">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            ✓ Official v7.2.1 Release • 100% Virus-Free
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-(--color-accent-gold) leading-tight">
            Dhan7 APK Download — Official Latest Version for Android
          </h1>
          <p className="text-base sm:text-lg text-(--color-text-muted) max-w-2xl leading-relaxed">
            Looking for a fast and reliable way to play real-money games and earn online? 
            <strong>Dhan7 APK Download</strong> gives you direct access to India's trending gaming platform. 
            Download the free Dhan7 app today and claim your ₹777 welcome reward!
          </p>
          <CTAButton label="Download Dhan7 APK (v7.2 Latest)" />
          <p className="text-xs text-neutral-400">
            File Size: 45.2 MB | Requires Android 5.0+ | Direct Official Server
          </p>
        </section>

        {/* What is Dhan7 APK */}
        <section className="flex flex-col gap-4 rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            What is the Dhan7 APK?
          </h2>
          <p className="text-(--color-text-muted) leading-relaxed">
            The <strong>Dhan7 APK</strong> (also searched as <strong>Dhan 7 APK</strong> or <strong>Dhan 7 app download</strong>) is the official Android package kit used to manually install the Dhan7 real-money gaming app onto your mobile phone or tablet. Since real-money apps with instant UPI withdrawals are not hosted on conventional app stores, the official APK download from <strong>dhan7.win</strong> is the direct, safest, and most up-to-date method.
          </p>
          <p className="text-(--color-text-muted) leading-relaxed">
            Once installed, you gain instant access to real cash Crash games, classic slots, live dealer tables, and competitive card rooms, complete with instant UPI deposits and fast payouts.
          </p>
        </section>

        {/* Step-by-Step Installation Guide */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-(--color-accent-red)">
            How to Download &amp; Install Dhan7 APK (Step-by-Step)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {installSteps.map((item) => (
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
          <div className="flex justify-center pt-2">
            <CTAButton label="Start Dhan7 APK Download Now" />
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Dhan7 APK Technical Specifications
          </h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full text-left text-sm text-(--color-text-muted)">
              <tbody>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">App Package</td>
                  <td className="px-4 py-3">com.dhan7.gaming.official</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Latest Version</td>
                  <td className="px-4 py-3 font-semibold text-(--color-accent-gold)">v7.2.1 (Updated 2026)</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">File Size</td>
                  <td className="px-4 py-3">45.2 MB</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Compatibility</td>
                  <td className="px-4 py-3">Android 5.0 (Lollipop) to Android 15</td>
                </tr>
                <tr className="border-b border-neutral-800 bg-neutral-900/40">
                  <td className="px-4 py-3 font-semibold text-white">Security Rating</td>
                  <td className="px-4 py-3 text-emerald-400 font-semibold">100% Safe (SSL Encrypted &amp; RNG Tested)</td>
                </tr>
                <tr className="border-b border-neutral-800">
                  <td className="px-4 py-3 font-semibold text-white">Official Host</td>
                  <td className="px-4 py-3 text-(--color-accent-gold) font-semibold">https://dhan7.win</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Download Dhan7 */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Why Download Dhan7 APK From Official dhan7.win?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feat) => (
              <li key={feat} className="flex items-start gap-2.5 p-3 rounded-lg border border-neutral-800 bg-neutral-900/20 text-sm text-(--color-text-muted)">
                <span className="text-(--color-accent-gold) font-bold mt-0.5">✓</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Troubleshooting Common Issues */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Troubleshooting Common Dhan7 APK Installation Errors
          </h2>
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="font-bold text-white text-sm mb-1">Issue 1: "App Not Installed" Error</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                Ensure you have at least 150 MB free internal memory. If you have an older version of Dhan7 or Dhan77 installed, uninstall it first before running the fresh v7.2 APK installer.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="font-bold text-white text-sm mb-1">Issue 2: "Blocked by Play Protect" Warning</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                Because Dhan7 is downloaded outside the Play Store, Google may display a standard generic warning. Tap "More Details" and select "Install Anyway". The file is completely clean.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/30">
              <h3 className="font-bold text-white text-sm mb-1">Issue 3: "Parse Error" During Installation</h3>
              <p className="text-xs text-(--color-text-muted) leading-relaxed">
                This occurs if your download was interrupted. Delete the incomplete file, ensure a stable 4G/5G/Wi-Fi connection, and re-download from dhan7.win.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Hub Navigation */}
        <section className="flex flex-col gap-3 pt-6 border-t border-neutral-800">
          <p className="text-(--color-text-muted) text-sm font-semibold">Explore More Dhan7 Resources</p>
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

        {/* FAQ */}
        <section className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold text-(--color-accent-red)">
            Dhan7 APK Download FAQs
          </h2>
          <div className="flex flex-col gap-3">
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-(--color-accent-gold) text-sm">Is Dhan7 APK download free of cost?</h3>
              <p className="text-xs text-(--color-text-muted) mt-1">
                Yes, downloading and installing Dhan7 from dhan7.win is 100% free.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-(--color-accent-gold) text-sm">Can I download Dhan7 APK on iPhone or iOS?</h3>
              <p className="text-xs text-(--color-text-muted) mt-1">
                No, APK files are strictly designed for Android. iOS players can use the browser portal at dhan7.win.
              </p>
            </div>
            <div className="p-4 rounded-lg border border-neutral-800 bg-neutral-900/40">
              <h3 className="font-bold text-(--color-accent-gold) text-sm">How do I update Dhan7 to the latest version?</h3>
              <p className="text-xs text-(--color-text-muted) mt-1">
                When a new update is released, the Dhan7 app will prompt you with an auto-update screen. You can also re-download the latest version anytime from dhan7.win/dhan7-apk-download.
              </p>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  )
}
