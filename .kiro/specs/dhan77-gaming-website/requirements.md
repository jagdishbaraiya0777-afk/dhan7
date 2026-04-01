# Requirements Document

## Introduction

Dhan77 Gaming Website is a mobile-first, SEO-optimized Next.js marketing site for the Dhan77 (Dhan7) real-money gaming app. The site promotes APK downloads, explains features and bonuses, and targets Google rankings for keywords like "dhan77 apk download" and "dhan7 gaming app". It consists of six pages with a dark red + gold casino theme, structured data schemas, a sitemap, and a global download CTA.

## Glossary

- **Website**: The Next.js application hosted at `${process.env.NEXT_PUBLIC_SITE_URL}`
- **Download_Link**: The affiliate APK download URL `https://share-rxapq9cajg.dhan7.co/share/agent/AD0RWJKN?data=eyJtIjoyLCJsYW5nIjoiZW4iLCJpZCI6MX0=`
- **CTA_Button**: A styled anchor element that links to the Download_Link
- **Layout**: The shared Next.js root layout wrapping all pages
- **Header**: The site-wide navigation component
- **Footer**: The site-wide footer component
- **Schema**: JSON-LD structured data embedded in page `<head>`
- **Sitemap**: The XML sitemap served at `/sitemap.xml`
- **NEXT_PUBLIC_SITE_URL**: Environment variable set to `https://dhan77apkdownload.com`
- **Logo_Image**: The file `/dhan7.jpg` located in the `public` folder, used as the site logo everywhere
- **Favicon**: The browser tab icon derived from the Logo_Image

---

## Requirements

### Requirement 1: Global Layout and Theme

**User Story:** As a visitor, I want a consistent dark casino-themed layout across all pages, so that the site feels cohesive and professional.

#### Acceptance Criteria

1. THE Layout SHALL apply a dark background color of `#0f0f0f` to all pages.
2. THE Layout SHALL use `#ff2e63` (red) and `#f5c542` (gold) as the primary accent colors throughout all pages.
3. THE Layout SHALL render a Header displaying the Logo_Image and site navigation links to all six pages on every page.
4. THE Layout SHALL render a Footer on every page containing related site links to `https://comegameapp.com` and `https://goplay11-apk.com`.
5. THE Layout SHALL be mobile-first, with responsive breakpoints ensuring usability on screens 320px wide and above.
6. THE CTA_Button SHALL open the Download_Link in a new browser tab with `rel="nofollow sponsored"` on every page where it appears.

---

### Requirement 2: Global SEO Metadata

**User Story:** As a site owner, I want correct SEO metadata on every page, so that search engines index the site accurately and improve rankings.

#### Acceptance Criteria

1. THE Website SHALL set a default meta title of "Dhan77 APK Download (Latest Version) | Dhan7 Gaming App" via the root Layout metadata.
2. THE Website SHALL set a default meta description of "Download Dhan77 APK and play games to earn real money. Get ₹777 bonus, instant withdrawals, and referral rewards." via the root Layout metadata.
3. THE Website SHALL set a canonical URL using `${process.env.NEXT_PUBLIC_SITE_URL}` on every page.
4. THE Website SHALL include the keywords "dhan77, dhan7, dhan77 apk download, dhan7 gaming app, dhan77 login, dhan77 bonus" in page metadata.
5. WHEN a page has a page-specific title, THE Website SHALL override the default meta title with that page-specific title.
6. WHEN a page has a page-specific canonical URL, THE Website SHALL override the default canonical with the page-specific canonical.

---

### Requirement 3: Home Page (/)

**User Story:** As a visitor landing on the home page, I want to immediately understand what Dhan77 is and how to download it, so that I can take action quickly.

#### Acceptance Criteria

1. THE Home_Page SHALL render a Hero section containing the `/dhan7.jpg` image, the heading "Dhan77 Gaming App", the subheading "Play Games & Earn Real Money Instantly", and a CTA_Button.
2. THE Home_Page SHALL render a "What is Dhan77" section describing Dhan77 as a real-money gaming platform with games including casino, crash, slots, and fishing.
3. THE Home_Page SHALL render a Screenshots section displaying all seven images (`/dhan7-1.jpeg` through `/dhan7-7.jpeg`) with descriptive alt text.
4. THE Home_Page SHALL render a Features section listing: instant withdrawal, ₹777 bonus, referral income, fast gameplay, and secure system.
5. THE Home_Page SHALL render a Games section listing: Crash, Casino, Slots, and Fishing.
6. THE Home_Page SHALL render an Internal Links section with links to `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, and `/dhan77-review`.
7. THE Home_Page SHALL use the meta title "Dhan77 APK Download | Dhan7 Gaming App" and canonical `${process.env.NEXT_PUBLIC_SITE_URL}/`.

---

### Requirement 4: Download Page (/dhan77-apk-download)

**User Story:** As a visitor who wants to install the app, I want a clear step-by-step download guide, so that I can install the APK without confusion.

#### Acceptance Criteria

1. THE Download_Page SHALL render a heading containing the keyword "Dhan77 APK Download".
2. THE Download_Page SHALL render a numbered step list: (1) Click download, (2) Allow unknown sources, (3) Install APK, (4) Open app.
3. THE Download_Page SHALL render a CTA_Button above and below the step list.
4. THE Download_Page SHALL list the features: Secure APK, Fast install, No Play Store required.
5. THE Download_Page SHALL use the meta title "Dhan77 APK Download (Latest Version)" and canonical `${process.env.NEXT_PUBLIC_SITE_URL}/dhan77-apk-download`.

---

### Requirement 5: Login Page (/dhan77-login)

**User Story:** As a new user, I want a login guide, so that I can access my Dhan77 account without difficulty.

#### Acceptance Criteria

1. THE Login_Page SHALL render a heading containing the keyword "Dhan77 Login".
2. THE Login_Page SHALL render a numbered step list: (1) Open app, (2) Enter mobile number, (3) Enter OTP, (4) Login.
3. THE Login_Page SHALL render security tips advising users not to share their OTP and to use a secure device.
4. THE Login_Page SHALL use the meta title "Dhan77 Login Guide" and canonical `${process.env.NEXT_PUBLIC_SITE_URL}/dhan77-login`.

---

### Requirement 6: Bonus Page (/dhan77-bonus)

**User Story:** As a potential user, I want to learn about available bonuses, so that I am motivated to register and deposit.

#### Acceptance Criteria

1. THE Bonus_Page SHALL render a heading containing the keyword "Dhan77 Bonus".
2. THE Bonus_Page SHALL describe the ₹777 first deposit bonus, daily cashback offer, and referral rewards program.
3. THE Bonus_Page SHALL render a CTA_Button linking to the Download_Link.
4. THE Bonus_Page SHALL use the meta title "Dhan77 Bonus ₹777 Offer" and canonical `${process.env.NEXT_PUBLIC_SITE_URL}/dhan77-bonus`.

---

### Requirement 7: Review Page (/dhan77-review)

**User Story:** As a cautious visitor, I want an honest review of Dhan77, so that I can make an informed decision before downloading.

#### Acceptance Criteria

1. THE Review_Page SHALL render a heading containing the keyword "Dhan77 Review".
2. THE Review_Page SHALL render a Pros section listing: easy earning, fast withdrawal, multiple games.
3. THE Review_Page SHALL render a Cons section listing: risk involved, not on Play Store.
4. THE Review_Page SHALL render a conclusion stating "Play responsibly."
5. THE Review_Page SHALL use the meta title "Dhan77 Review – Real or Fake?" and canonical `${process.env.NEXT_PUBLIC_SITE_URL}/dhan77-review`.

---

### Requirement 8: FAQ Page (/faq)

**User Story:** As a visitor with questions, I want a FAQ page, so that I can find answers without contacting support.

#### Acceptance Criteria

1. THE FAQ_Page SHALL render a heading containing the keyword "Dhan77 FAQ".
2. THE FAQ_Page SHALL render at minimum the following Q&A pairs: "Is Dhan77 safe?" / "Yes, but play responsibly.", "How to download?" / "Use the download button.", "Minimum withdrawal?" / "Depends on current rules."
3. THE FAQ_Page SHALL use the meta title "Dhan77 FAQ" and canonical `${process.env.NEXT_PUBLIC_SITE_URL}/faq`.

---

### Requirement 9: Structured Data Schemas

**User Story:** As a site owner, I want JSON-LD structured data on relevant pages, so that search engines display rich results for the app and FAQ content.

#### Acceptance Criteria

1. THE Website SHALL embed a SoftwareApplication JSON-LD schema on the Home_Page containing the app name "Dhan77", operating system "Android", and the Download_Link as the download URL.
2. THE Website SHALL embed a FAQPage JSON-LD schema on the FAQ_Page containing all FAQ question-and-answer pairs rendered on that page.
3. WHEN the SoftwareApplication schema is rendered, THE Website SHALL use `${process.env.NEXT_PUBLIC_SITE_URL}` as the schema's `url` property.

---

### Requirement 10: XML Sitemap

**User Story:** As a site owner, I want an XML sitemap, so that search engine crawlers can discover and index all pages efficiently.

#### Acceptance Criteria

1. THE Sitemap SHALL be accessible at `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`.
2. THE Sitemap SHALL include entries for all six pages: `/`, `/dhan77-apk-download`, `/dhan77-login`, `/dhan77-bonus`, `/dhan77-review`, `/faq`.
3. THE Sitemap SHALL use `${process.env.NEXT_PUBLIC_SITE_URL}` as the base URL for all entries.

---

### Requirement 11: Environment Variable Configuration

**User Story:** As a developer, I want all domain references to use an environment variable, so that the site URL can be changed without modifying source code.

#### Acceptance Criteria

1. THE Website SHALL read the site domain exclusively from the `NEXT_PUBLIC_SITE_URL` environment variable in all canonical URLs, schema URLs, and sitemap entries.
2. IF the `NEXT_PUBLIC_SITE_URL` environment variable is not set, THEN THE Website SHALL fall back to `https://dhan77apkdownload.com` as the default value.

---

### Requirement 12: Logo and Favicon

**User Story:** As a site owner, I want the site logo and favicon to use `dhan7.jpg`, so that the brand identity is consistent across the UI and browser tabs.

#### Acceptance Criteria

1. THE Header SHALL display the Logo_Image (`/dhan7.jpg`) as the site logo with `alt="Dhan7 Logo"` and dimensions of 48×48 pixels.
2. THE Home_Page SHALL display the Logo_Image (`/dhan7.jpg`) in the Hero section with `alt="Dhan7 logo"` and dimensions of 120×120 pixels.
3. THE Layout SHALL declare `/dhan7.jpg` as the `icon` and `apple` favicon in the page metadata `icons` field.
4. WHEN a browser requests the favicon, THE Website SHALL serve the Logo_Image (`/dhan7.jpg`) as the site icon.
5. THE Website SHALL use the Logo_Image (`/dhan7.jpg`) consistently in every location where a site logo or favicon is referenced, replacing any prior use of `/dhan77-logo.png` as a logo or favicon.
