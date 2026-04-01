/**
 * Seed script — inserts sample blog posts directly into Neon DB.
 * Run: npx tsx scripts/seed-blogs.ts
 */
import { neon } from '@neondatabase/serverless'

const DATABASE_URL = process.env.DATABASE_URL
if (!DATABASE_URL) {
  console.error('Error: DATABASE_URL environment variable is not set')
  process.exit(1)
}

const sql = neon(DATABASE_URL)

async function runMigrations() {
  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id              SERIAL PRIMARY KEY,
      title           TEXT        NOT NULL,
      slug            TEXT        NOT NULL UNIQUE,
      content_md      TEXT        NOT NULL,
      meta_title      TEXT        NOT NULL,
      meta_description TEXT       NOT NULL,
      keywords        TEXT[]      NOT NULL DEFAULT '{}',
      created_at      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
    )
  `
  await sql`
    CREATE TABLE IF NOT EXISTS keyword_usage (
      keyword         TEXT        PRIMARY KEY,
      used_at         TIMESTAMP   NOT NULL,
      use_count       INTEGER     NOT NULL DEFAULT 1
    )
  `
  console.log('✓ Migrations complete')
}

const samplePosts = [
  {
    title: 'Dhan7 Game Download 2026 – Official APK & Login Guide',
    slug: 'dhan7-game-download-2026-guide',
    meta_title: 'Dhan7 Download 2026 – Login & APK Guide',
    meta_description:
      'Download Dhan7 APK latest version 2026. Learn login, earning, and withdrawal process for Dhan77 app safely.',
    keywords: ['dhan7 download', 'dhan77 apk', 'dhan7 login', 'dhan77 2026'],
    content_md: `# Dhan7 Game Download 2026 – Official APK & Login Guide

Welcome to the complete guide for **dhan7** download and login in 2026. Whether you're searching for dhan77, dhan 7, or dhan 77, this guide covers everything you need to get started safely.

## What is Dhan7/Dhan77?

**Dhan7** (also written as Dhan77, Dhan 7, or Dhan 77) is a real-money gaming platform available for Android devices. It offers skill-based games including Crash, Casino, Slots, and Fishing — all with real cash rewards.

The platform has gained popularity in India for its instant withdrawal system and ₹777 welcome bonus for new users.

## How to Download

Downloading the **dhan77 apk** is straightforward:

1. Visit a trusted source like [Come Game App](http://comegameapp.com) or [GoPlay11](https://goplay11-apk.com)
2. Tap the download button to get the latest APK file
3. Enable "Unknown Sources" in your Android settings
4. Install the APK and open the app

> ⚠️ Only download from official or trusted sources to avoid fake apps.

## Login & Register Guide

Once installed, follow these steps to log in to **dhan 7**:

1. Open the app and tap **Register** for new accounts
2. Enter your mobile number and create a password
3. Verify your account via OTP
4. Log in and access your dashboard

For returning users, visit [/login](/login) and enter your credentials.

## Earning Method

**Dhan 77** offers multiple ways to earn:

- **Skill-based games** — Crash, Casino, Slots, Fishing
- **Daily bonuses** — Log in every day for rewards
- **Referral program** — Invite friends and earn commission

Visit [/about](/about) to learn more about the earning system.

## Withdrawal Process

Withdrawals on dhan7 are processed instantly once you meet the minimum balance requirement. The process is transparent and secure.

Steps:
1. Go to Wallet in the app
2. Tap Withdraw
3. Enter amount and UPI/bank details
4. Confirm — funds arrive within minutes

## Is it Safe or Legit?

**Dhan77** is safe when accessed from official sources. The platform uses secure servers and transparent gameplay mechanics. However, as with all real-money gaming apps, there is inherent financial risk involved.

Read our full review at [/dhan77-review](/dhan77-review).

## Tips & Strategy

- Start with small bets to understand the games
- Use the ₹777 bonus wisely — don't bet it all at once
- Set a daily budget and stick to it
- Use the referral program to earn passive income

## FAQ

**Q: Is Dhan7 available on Google Play Store?**
**A: No, dhan77 is not on the Play Store. Download the APK from trusted sources only.**

**Q: How long does withdrawal take on Dhan77?**
**A: Withdrawals are typically instant, subject to minimum balance requirements.**

**Q: Is Dhan 7 real or fake?**
**A: Dhan 7 is a real platform, but earnings depend on your gameplay and are not guaranteed.**

---

> ⚠️ **Disclaimer:** Dhan7/Dhan77 involves real money and financial risk. This platform is intended for users aged **18 and above** only. Earnings are **not guaranteed**. Please play responsibly and within your means. If gaming affects your daily life, seek help immediately.
`,
  },
  {
    title: 'Dhan77 App Review 2026 – Safe or Fake? Full Guide',
    slug: 'dhan77-app-review-2026-safe-or-fake',
    meta_title: 'Dhan77 Review 2026 – Safe or Fake? Full Guide',
    meta_description:
      'Read our honest Dhan77 app review for 2026. Is dhan7 real or fake? We cover safety, earnings, withdrawal proof and more.',
    keywords: ['dhan77 review', 'dhan7 safe', 'dhan77 real or fake', 'dhan 77 legit'],
    content_md: `# Dhan77 App Review 2026 – Safe or Fake? Full Guide

If you've been wondering whether **dhan77** is safe or fake, you're in the right place. This honest review covers everything about dhan7, dhan 7, and dhan 77 — from features to withdrawal proof.

## What is Dhan7/Dhan77?

**Dhan7** is a real-money Android gaming app that lets users play skill-based games and earn cash. Known by multiple names — dhan77, dhan 7, dhan 77 — the platform has built a growing user base across India.

It is not available on the Google Play Store, so users must download the APK from trusted sources like [Come Game App](http://comegameapp.com) or [GoPlay11](https://goplay11-apk.com).

## How to Download

1. Go to a trusted APK source
2. Download the latest **dhan77 apk**
3. Enable Unknown Sources on your Android device
4. Install and open the app

Full download guide: [/download](/download)

## Login & Register Guide

- Open **dhan 7** app
- Tap Register and enter your mobile number
- Verify via OTP
- Set password and log in

Login help: [/login](/login)

## Earning Method

Users earn on **dhan 77** through:

- Crash game — predict multipliers
- Casino games — card and table games
- Slots — spin to win
- Fishing — skill-based fishing game
- Referral bonuses — earn per friend invited

## Withdrawal Process

Withdrawals are processed to UPI or bank accounts. Most users report instant processing once the minimum threshold is met.

## Is it Safe or Legit?

Based on user reports and our analysis, **dhan7** is a legitimate platform when accessed from official sources. Key safety indicators:

✓ Secure login with OTP verification  
✓ Transparent game mechanics  
✓ Active user community  
✓ Instant withdrawal reports  

However, no real-money gaming app is without risk. Always play responsibly.

See our detailed safety guide at [/disclaimer](/disclaimer).

## Tips & Strategy

- Never invest more than you can afford to lose
- Use the ₹777 welcome bonus to explore games risk-free
- Focus on skill-based games for better odds
- Withdraw regularly rather than letting balance accumulate

## FAQ

**Q: Is Dhan77 real or fake?**
**A: Dhan77 is a real platform. However, earnings depend on skill and luck — they are not guaranteed.**

**Q: Can I withdraw money from Dhan7?**
**A: Yes, withdrawals are supported via UPI and bank transfer, subject to minimum balance rules.**

**Q: Is Dhan 77 safe for beginners?**
**A: It can be, if you start with small amounts and understand the games before investing more.**

---

> ⚠️ **Disclaimer:** This review is for informational purposes only. **Dhan77** involves real money and financial risk. Users must be **18+**. Earnings are **not guaranteed**. Play responsibly and within your financial means.
`,
  },
  {
    title: 'Dhan77 Login & Withdrawal Guide 2026 – Latest Update',
    slug: 'dhan77-login-withdrawal-guide-2026',
    meta_title: 'Dhan77 Login & Withdrawal Guide 2026',
    meta_description:
      'Complete dhan77 login and withdrawal guide for 2026. Step-by-step process for dhan7 account access and instant money withdrawal.',
    keywords: ['dhan77 login', 'dhan7 withdrawal', 'dhan 7 login guide', 'dhan 77 withdrawal process'],
    content_md: `# Dhan77 Login & Withdrawal Guide 2026 – Latest Update

This is the most up-to-date guide for **dhan77 login** and withdrawal in 2026. Whether you use dhan7, dhan 7, or dhan 77, this walkthrough will help you access your account and withdraw your earnings smoothly.

## What is Dhan7/Dhan77?

**Dhan77** (also called dhan7, dhan 7, dhan 77) is a real-money gaming app for Android. It offers games like Crash, Casino, Slots, and Fishing with real cash prizes and instant withdrawals.

Download the app from trusted sources: [Come Game App](http://comegameapp.com) or [GoPlay11](https://goplay11-apk.com).

## How to Download

Before logging in, you need the app:

1. Download **dhan77 apk** from a trusted source
2. Enable Unknown Sources in Android settings
3. Install the APK file
4. Open the app

Full guide: [/download](/download)

## Login & Register Guide

### New Users — Register

1. Open **dhan 7** app
2. Tap **Register**
3. Enter your mobile number
4. Create a strong password
5. Verify via OTP sent to your phone
6. Your account is ready

### Existing Users — Login

1. Open the app
2. Enter your registered mobile number
3. Enter your password
4. Tap **Login**

If you face issues, visit [/login](/login) for troubleshooting.

## Earning Method

Once logged in, you can earn on **dhan 77** through:

- **Crash** — bet and cash out before the multiplier crashes
- **Casino** — classic card and table games
- **Slots** — spin-based games with jackpots
- **Fishing** — skill-based shooting game
- **Referrals** — earn commission when friends deposit

## Withdrawal Process

This is the most important part. Here's how to withdraw from **dhan7**:

1. Open the app and go to **Wallet**
2. Tap **Withdraw**
3. Enter the amount (must meet minimum threshold)
4. Select payment method: UPI or Bank Transfer
5. Enter your UPI ID or bank details
6. Confirm the withdrawal
7. Funds arrive within minutes to instantly

> Tips: Keep your KYC updated for faster withdrawals. Withdraw regularly rather than accumulating large balances.

## Is it Safe or Legit?

**Dhan77** is safe when used responsibly and downloaded from official sources. The withdrawal system is transparent and most users report successful transactions.

Read our full safety analysis at [/disclaimer](/disclaimer).

## Tips & Strategy

- Always verify your account (KYC) early for smooth withdrawals
- Set withdrawal goals — e.g., withdraw every time you hit ₹500 profit
- Don't chase losses — if you're on a losing streak, take a break
- Use the referral program to earn without playing

## FAQ

**Q: How do I reset my Dhan77 login password?**
**A: Use the "Forgot Password" option on the login screen and verify via OTP.**

**Q: What is the minimum withdrawal amount on Dhan7?**
**A: The minimum withdrawal amount depends on current platform rules. Check the app for the latest threshold.**

**Q: How long does Dhan 77 withdrawal take?**
**A: Most withdrawals are processed instantly or within a few minutes.**

---

> ⚠️ **Disclaimer:** **Dhan77** is a real-money gaming platform involving financial risk. This guide is for informational purposes only. Users must be **18 years or older**. Earnings are **not guaranteed** and depend on gameplay. Please play responsibly and only with money you can afford to lose.
`,
  },
]

async function seed() {
  await runMigrations()

  let inserted = 0
  let skipped = 0

  for (const post of samplePosts) {
    try {
      await sql`
        INSERT INTO blogs (title, slug, content_md, meta_title, meta_description, keywords)
        VALUES (
          ${post.title},
          ${post.slug},
          ${post.content_md},
          ${post.meta_title},
          ${post.meta_description},
          ${post.keywords}
        )
        ON CONFLICT (slug) DO NOTHING
      `
      console.log(`✓ Inserted: ${post.slug}`)
      inserted++
    } catch (err) {
      console.log(`⚠ Skipped (already exists): ${post.slug}`)
      skipped++
    }
  }

  console.log(`\nDone — ${inserted} inserted, ${skipped} skipped`)
  console.log('Visit http://localhost:3000/blog to see your posts')
}

seed().catch((err) => {
  console.error('Seed failed:', err.message)
  process.exit(1)
})
