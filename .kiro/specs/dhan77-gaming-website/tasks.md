# Implementation Plan: Dhan77 Gaming Website

## Overview

Build a mobile-first, SEO-optimised Next.js 16 (App Router) marketing site for the Dhan77 gaming app. All pages are statically generated Server Components. The implementation proceeds from shared infrastructure → shared components → root layout → pages → sitemap → tests.

## Tasks

- [x] 1. Project setup: env file, constants, and siteUrl utility
  - Create `.env.local` with `NEXT_PUBLIC_SITE_URL=https://dhan77apkdownload.com`
  - Create `app/_lib/constants.ts` exporting `DOWNLOAD_LINK` and `DEFAULT_KEYWORDS`
  - Create `app/_lib/siteUrl.ts` exporting `siteUrl()` with fallback to `https://dhan77apkdownload.com`
  - _Requirements: 11.1, 11.2_

- [x] 2. Tailwind v4 theme in globals.css
  - Replace existing `@theme inline` block in `app/globals.css` with casino theme tokens: `--color-bg-base: #0f0f0f`, `--color-accent-red: #ff2e63`, `--color-accent-gold: #f5c542`, `--color-text-primary: #ffffff`, `--color-text-muted: #a0a0a0`
  - Set `body { background-color: #0f0f0f; color: #ffffff; }`
  - _Requirements: 1.1, 1.2_

- [x] 3. Shared components
  - [x] 3.1 Create `app/_components/CTAButton.tsx`
    - Renders `<a href={DOWNLOAD_LINK} target="_blank" rel="nofollow sponsored">` with gold/red casino styling
    - Accepts optional `label` prop (default: `"Download Dhan77 APK"`)
    - _Requirements: 1.6_

  - [x] 3.2 Write property test for CTAButton (Property 3)
    - **Property 3: For any CTAButton label, href/target/rel are always correct**
    - **Validates: Requirements 1.6**

  - [x] 3.3 Create `app/_components/Header.tsx`
    - Renders site logo (`/dhan7.jpg` via `next/image`) and `<Link>` nav items for all six pages: `/`, `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, `/dhan77-review`, `/faq`
    - Mobile-first responsive layout (hamburger or stacked nav on small screens)
    - _Requirements: 1.3, 1.5, 12.1_

  - [x] 3.4 Write property test for Header (Property 1)
    - **Property 1: For any render of Header, all six nav hrefs are present**
    - **Validates: Requirements 1.3**

  - [x] 3.5 Create `app/_components/Footer.tsx`
    - Renders external links to `https://comegameapp.com` and `https://goplay11-apk.com`
    - _Requirements: 1.4_

  - [x] 3.6 Write property test for Footer (Property 2)
    - **Property 2: For any render of Footer, both external hrefs are present**
    - **Validates: Requirements 1.4**

- [x] 4. Update root `app/layout.tsx`
  - Set `metadataBase: new URL(siteUrl())` and default `title` / `description` / `keywords` using `DEFAULT_KEYWORDS`
  - Use `title.template` pattern: `{ default: '...', template: '%s | Dhan7 Gaming App' }`
  - Import and render `<Header />` and `<Footer />` around `{children}`
  - Keep dark background class on `<body>`
  - _Requirements: 1.3, 1.4, 2.1, 2.2, 2.4_

- [x] 5. Home page (`app/page.tsx`)
  - [x] 5.1 Implement all page sections
    - Hero: logo image (`/dhan7.jpg`), h1 "Dhan77 Gaming App", subheading, `<CTAButton />`
    - "What is Dhan77" section describing the platform and game types
    - Screenshots section: all seven `next/image` components for `/dhan7-1.jpeg` through `/dhan7-7.jpeg` with descriptive alt text
    - Features section: instant withdrawal, ₹777 bonus, referral income, fast gameplay, secure system
    - Games section: Crash, Casino, Slots, Fishing
    - Internal Links section: links to `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, `/dhan77-review`
    - Export `metadata` with title `"Dhan77 APK Download | Dhan7 Gaming App"` and `alternates.canonical: '/'`
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

  - [x] 5.2 Add SoftwareApplication JSON-LD schema to home page
    - Inline `<script type="application/ld+json">` with `@type: "SoftwareApplication"`, `name: "Dhan77"`, `operatingSystem: "Android"`, `downloadUrl: DOWNLOAD_LINK`, `url: siteUrl()`
    - Use `.replace(/</g, '\\u003c')` on the stringified JSON
    - _Requirements: 9.1, 9.3_

  - [x] 5.3 Write property test for home page screenshots (Property 5)
    - **Property 5: For any render of Home page, all 7 screenshot src values are present**
    - **Validates: Requirements 3.3**

  - [x] 5.4 Write property test for home page internal links (Property 6)
    - **Property 6: For any render of Home page, all 4 internal link hrefs are present**
    - **Validates: Requirements 3.6**

  - [x] 5.5 Write property test for home page JSON-LD (Property 9)
    - **Property 9: For any render of Home page, JSON-LD parses to valid SoftwareApplication schema**
    - **Validates: Requirements 9.1, 9.3**

- [x] 6. Checkpoint — ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. Download page (`app/dhan77-apk-download/page.tsx`)
  - Render h1 containing "Dhan77 APK Download"
  - `<CTAButton />` above the step list
  - Numbered steps: (1) Click download, (2) Allow unknown sources, (3) Install APK, (4) Open app
  - `<CTAButton />` below the step list
  - Features list: Secure APK, Fast install, No Play Store required
  - Export `metadata` with title `"Dhan77 APK Download (Latest Version)"` and `alternates.canonical: '/dhan77-apk-download'`
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 7.1 Write property test for download page CTA count (Property 7)
    - **Property 7: For any render of Download page, DOWNLOAD_LINK appears at least twice**
    - **Validates: Requirements 4.3**

- [x] 8. Login page (`app/dhan77-login/page.tsx`)
  - Render h1 containing "Dhan77 Login"
  - Numbered steps: (1) Open app, (2) Enter mobile number, (3) Enter OTP, (4) Login
  - Security tips: do not share OTP, use a secure device
  - Export `metadata` with title `"Dhan77 Login Guide"` and `alternates.canonical: '/dhan77-login'`
  - _Requirements: 5.1, 5.2, 5.3, 5.4_

- [x] 9. Bonus page (`app/dhan77-bonus/page.tsx`)
  - Render h1 containing "Dhan77 Bonus"
  - Describe ₹777 first deposit bonus, daily cashback offer, referral rewards program
  - `<CTAButton />` linking to `DOWNLOAD_LINK`
  - Export `metadata` with title `"Dhan77 Bonus ₹777 Offer"` and `alternates.canonical: '/dhan77-bonus'`
  - _Requirements: 6.1, 6.2, 6.3, 6.4_

- [x] 10. Review page (`app/dhan77-review/page.tsx`)
  - Render h1 containing "Dhan77 Review"
  - Pros section: easy earning, fast withdrawal, multiple games
  - Cons section: risk involved, not on Play Store
  - Conclusion: "Play responsibly."
  - Export `metadata` with title `"Dhan77 Review – Real or Fake?"` and `alternates.canonical: '/dhan77-review'`
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5_

- [x] 11. FAQ page (`app/faq/page.tsx`)
  - [x] 11.1 Implement FAQ page with JSON-LD
    - Define `FAQItem[]` constant with all three required Q&A pairs: ("Is Dhan77 safe?" / "Yes, but play responsibly."), ("How to download?" / "Use the download button."), ("Minimum withdrawal?" / "Depends on current rules.")
    - Render h1 containing "Dhan77 FAQ" and map the constant to visible Q&A elements
    - Inline FAQPage JSON-LD schema built from the same constant (schema and visible content always in sync)
    - Export `metadata` with title `"Dhan77 FAQ"` and `alternates.canonical: '/faq'`
    - _Requirements: 8.1, 8.2, 8.3, 9.2_

  - [x] 11.2 Write property test for FAQ page Q&A content (Property 8)
    - **Property 8: For any render of FAQ page, all 3 required Q&A strings are present**
    - **Validates: Requirements 8.2**

  - [x] 11.3 Write property test for FAQ page JSON-LD (Property 10)
    - **Property 10: For any render of FAQ page, JSON-LD mainEntity matches visible Q&A pairs**
    - **Validates: Requirements 9.2**

- [x] 12. Sitemap (`app/sitemap.ts`)
  - Export default `sitemap()` returning `MetadataRoute.Sitemap` with six entries for `/`, `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, `/dhan77-review`, `/faq`
  - Each `url` is `siteUrl() + path`; home priority `1`, others `0.8`; `changeFrequency: 'monthly'`
  - _Requirements: 10.1, 10.2, 10.3_

  - [x] 12.1 Write property test for sitemap (Property 11)
    - **Property 11: For any call to sitemap(), all 6 paths are present and URLs start with siteUrl()**
    - **Validates: Requirements 10.2, 10.3**

- [x] 13. Checkpoint — ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Set up Vitest + fast-check and write remaining property tests
  - [x] 14.1 Install test dependencies and create `vitest.config.mts`
    - Install: `vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths fast-check`
    - Create `vitest.config.mts` with `plugins: [tsconfigPaths(), react()]` and `test: { environment: 'jsdom' }`
    - Add `"test": "vitest --run"` script to `package.json`
    - _Requirements: (test infrastructure)_

  - [x] 14.2 Write property test for page metadata canonicals (Property 4)
    - **Property 4: For any page metadata export, canonical resolves to siteUrl() + expected path**
    - Import each page's `metadata` export directly and assert `alternates.canonical` values
    - **Validates: Requirements 2.3, 2.6, 3.7, 4.5, 5.4, 6.4, 7.5, 8.3**

  - [x] 14.3 Write property test for siteUrl() fallback (Property 12)
    - **Property 12: For any undefined NEXT_PUBLIC_SITE_URL, siteUrl() returns the fallback**
    - Temporarily delete `process.env.NEXT_PUBLIC_SITE_URL` and assert return value equals `"https://dhan77apkdownload.com"`
    - **Validates: Requirements 11.2**

- [x] 15. Final checkpoint — ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Property tests use `fast-check` with minimum 100 iterations per property
- Each property test file should include the tag comment: `// Feature: dhan77-gaming-website, Property N: <description>`
- Vitest does not support async Server Components; test page components as synchronous functions
- `NEXT_PUBLIC_SITE_URL` is inlined at build time — set it before running `next build`
- All canonical paths can be relative strings (e.g. `'/dhan77-apk-download'`) because `metadataBase` is set in the root layout

- [x] 16. Update logo and favicon to use `dhan7.jpg`
  - [x] 16.1 Update `app/_components/Header.tsx`
    - Change `src` from `/dhan77-logo.png` to `/dhan7.jpg`
    - Update `alt` to `"Dhan7 Logo"`
    - _Requirements: 12.1_

  - [x] 16.2 Update `app/page.tsx` Hero section
    - Change logo `src` from `/dhan77-logo.png` to `/dhan7.jpg`
    - Update `alt` to `"Dhan7 logo"`
    - _Requirements: 12.2, 3.1_

  - [x] 16.3 Update `app/layout.tsx` favicon metadata
    - Change `icons.icon` and `icons.apple` from `/dhan77-logo.png` to `/dhan7.jpg`
    - _Requirements: 12.3, 12.4_

  - [x] 16.4 Replace `app/favicon.ico` with a copy of `dhan7.jpg`
    - Copy `public/dhan7.jpg` to `app/favicon.ico` (or configure Next.js to serve `/dhan7.jpg` as the favicon)
    - _Requirements: 12.4_
