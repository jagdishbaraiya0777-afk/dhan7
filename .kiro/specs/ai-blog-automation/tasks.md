# Implementation Plan: AI Blog Automation

## Overview

Adds a fully automated, SEO-driven blog engine to the existing Dhan7 Next.js App Router site. A daily Vercel Cron job (or standalone script) selects keywords, calls Gemini to generate an EEAT-compliant Markdown post, persists it to Neon DB, and serves it via ISR dynamic routes. Sitemap, robots.txt, and llms.txt are updated automatically after each publish.

## Tasks

- [ ] 1. Install dependencies
  - Run `npm install @neondatabase/serverless @google/generative-ai react-markdown remark-gfm`
  - Run `npm install --save-dev tsx`
  - _Requirements: 12.1, 12.2_

- [ ] 2. Create shared TypeScript types
  - [ ] 2.1 Create `lib/types.ts` with all shared interfaces
    - Define `BlogPost`, `NewBlogPost`, `SelectedKeywords`, `FAQ`, `GeneratedPost`, `KeywordUsage`
    - _Requirements: 5.1, 1.1, 3.1, 10.1_

- [ ] 3. Create database layer
  - [ ] 3.1 Create `lib/db.ts` with Neon DB connection and query helpers
    - Export `sql` tagged-template client via `neon(process.env.DATABASE_URL!)`
    - Implement `runMigrations()` — `CREATE TABLE IF NOT EXISTS` for `blogs` and `keyword_usage`
    - Implement `getPostBySlug(slug)`, `getAllPosts()`, `insertPost(post)`, `slugExists(slug)`
    - Implement `getKeywordUsage()`, `upsertKeywordUsage(keyword, usedAt)`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 1.4_

- [ ] 4. Create SEO utilities
  - [ ] 4.1 Create `lib/seo.ts` with slug and metadata generators
    - Implement `generateSlug(title)` — lowercase, replace non-alphanumeric with hyphens, collapse consecutive hyphens, trim
    - Implement `ensureUniqueSlug(baseSlug)` — checks DB via `slugExists`, appends `-2`, `-3`, etc. until unique
    - Implement `generateMetaTitle(title, primaryKeyword)` — truncate to ≤60 chars preserving primary keyword
    - Implement `generateMetaDescription(title, primaryKeyword, intro)` — trim to 140–160 chars, inject keyword if absent
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 2.4_

  - [ ]* 4.2 Write property test for `generateMetaTitle` (Property 6)
    - **Property 6: Meta title is ≤60 characters and contains the primary keyword**
    - **Validates: Requirements 2.4, 4.1**
    - Use `fast-check` arbitrary strings; assert `result.length <= 60` and `result.includes(primaryKeyword)`
    - Place in `lib/__tests__/seo.test.ts`

  - [ ]* 4.3 Write property test for `generateSlug` (Property 15)
    - **Property 15: Slug is lowercase, hyphen-only, no consecutive hyphens**
    - **Validates: Requirements 4.3**
    - Assert result matches `/^[a-z0-9]+(-[a-z0-9]+)*$/` for any string input
    - Place in `lib/__tests__/seo.test.ts`

  - [ ]* 4.4 Write property test for `ensureUniqueSlug` (Property 16)
    - **Property 16: Slug uniqueness — collision appends numeric suffix**
    - **Validates: Requirements 4.4**
    - Mock `slugExists` to simulate pre-existing slugs; assert returned slug is not in the existing set
    - Place in `lib/__tests__/seo.test.ts`

- [ ] 5. Create keyword rotation engine
  - [ ] 5.1 Create `lib/keyword-engine.ts` with keyword constants and `selectKeywords()`
    - Define `PRIMARY_KEYWORDS`, `SECONDARY_KEYWORDS`, `LONG_TAIL_KEYWORDS` constant arrays
    - Implement `selectKeywords()`: load usage from DB → find unused primaries → if none, pick LRU → pick 3–5 random secondaries → pick 2 random long-tails → persist selection → return `SelectedKeywords`
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [ ]* 5.2 Write property test for keyword selection counts (Property 1)
    - **Property 1: Keyword selection counts are always valid**
    - **Validates: Requirements 1.1**
    - Assert `result.secondary.length >= 3 && <= 5` and `result.longTail.length === 2` and exactly 1 primary
    - Place in `lib/__tests__/keyword-engine.test.ts`

  - [ ]* 5.3 Write property test for no-repeat-before-full-coverage (Property 2)
    - **Property 2: Primary keyword rotation — no repeat before full coverage**
    - **Validates: Requirements 1.2**
    - Simulate N consecutive runs against an in-memory usage store; assert N distinct primaries selected
    - Place in `lib/__tests__/keyword-engine.test.ts`

  - [ ]* 5.4 Write property test for LRU restart after full cycle (Property 3)
    - **Property 3: Primary keyword rotation — LRU restart after full cycle**
    - **Validates: Requirements 1.3**
    - After N runs exhaust all keywords, assert (N+1)th run selects the keyword with the oldest `used_at`
    - Place in `lib/__tests__/keyword-engine.test.ts`

- [ ] 6. Create Gemini API client
  - [ ] 6.1 Create `lib/gemini.ts` with Gemini client and retry logic
    - Initialise `GoogleGenerativeAI` from `@google/generative-ai` using `GEMINI_API_KEY`
    - Implement `buildPrompt(keywords)` — constructs the full EEAT prompt string per design spec
    - Implement `callGeminiWithRetry(prompt, maxRetries=3)` — exponential backoff: 1s, 2s, 4s
    - Implement `generateBlogPost(keywords)` — calls retry wrapper, parses FAQ pairs from `**Q:**`/`**A:**` patterns, returns `GeneratedPost`
    - _Requirements: 3.1–3.9, 2.1–2.3, 10.1, 11.1–11.3_

- [ ] 7. Create content pipeline orchestrator
  - [ ] 7.1 Create `lib/content-engine.ts` with `runPipeline()`
    - Validate `GEMINI_API_KEY` and `DATABASE_URL` are set; throw descriptive error if missing
    - Call `runMigrations()` to ensure tables exist
    - Orchestrate: `selectKeywords → generateBlogPost → generateMetaTitle → generateMetaDescription → generateSlug → ensureUniqueSlug → insertPost → updateLlmsTxt`
    - Log slug, title, and timestamp on success; log step name, error, and timestamp on failure
    - Never persist a partial post — DB write is the commit point
    - _Requirements: 8.1, 8.2, 8.3, 12.4_

- [ ] 8. Create sitemap manager and llms.txt updater
  - [ ] 8.1 Create `lib/sitemap-manager.ts` with `updateLlmsTxt()`
    - Implement `updateLlmsTxt(post)` — appends `[created_at] [slug]: [meta_description]` line to a `llms.txt` file in the project root; writes site description header if file does not exist
    - _Requirements: 9.4, 9.5_

- [ ] 9. Create Vercel Cron API route
  - [ ] 9.1 Create `app/api/generate-blog/route.ts`
    - Export `POST(req: Request)` handler
    - Verify `Authorization` header equals `Bearer ${process.env.CRON_SECRET}`; return 401 if mismatch
    - Call `runPipeline()` and return `Response.json({ slug, title })` on success
    - _Requirements: 8.1, 8.4_

- [ ] 10. Create Vercel cron configuration
  - [ ] 10.1 Create `vercel.json` with cron schedule
    - Add cron entry: `{ "path": "/api/generate-blog", "schedule": "0 3 * * *" }`
    - _Requirements: 8.1, 8.4_

- [ ] 11. Create standalone generation script
  - [ ] 11.1 Create `scripts/generate-blog.ts`
    - Import `runPipeline` from `../lib/content-engine`
    - Validate env vars; call `runPipeline()`; log published slug and timestamp
    - _Requirements: 8.1, 8.2, 8.3, 12.4_

- [ ] 12. Checkpoint — core pipeline complete
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 13. Create blog index page
  - [ ] 13.1 Create `app/blog/page.tsx`
    - Server Component; call `getAllPosts()` to fetch posts ordered by `created_at DESC`
    - Render card list: title, meta_description, formatted `created_at`, link to `/blog/[slug]`
    - Export `metadata` with `alternates.canonical = siteUrl() + '/blog'`
    - Export `export const revalidate = 3600`
    - Apply dark-theme typography consistent with existing site (`#0f0f0f` bg, `#ffffff` text)
    - _Requirements: 7.1, 7.2, 7.3, 6.2_

- [ ] 14. Create dynamic blog post page
  - [ ] 14.1 Create `app/blog/[slug]/page.tsx`
    - Export `generateStaticParams()` — calls `getAllPosts()` and maps to `{ slug }` array
    - Export `export const revalidate = 3600` for ISR
    - Export `generateMetadata({ params })` — awaits `params`, fetches post by slug, returns `{ title: post.meta_title, description: post.meta_description }`
    - Default export: async Server Component; awaits `params`, calls `getPostBySlug(slug)`, calls `notFound()` if null
    - Render `<ReactMarkdown remarkPlugins={[remarkGfm]}>` with `post.content_md`
    - Parse FAQ pairs from content and inject FAQPage JSON-LD via `<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />`
    - Apply mobile-first dark-theme typography styles
    - _Requirements: 6.1–6.6, 10.2, 10.3_

- [ ] 15. Create robots.ts route
  - [ ] 15.1 Create `app/robots.ts`
    - Export default function returning `MetadataRoute.Robots` with `rules: { userAgent: '*', allow: '/' }` and `sitemap: siteUrl() + '/sitemap.xml'`
    - _Requirements: 9.3_

- [ ] 16. Extend sitemap to include blog entries
  - [ ] 16.1 Modify `app/sitemap.ts` to fetch and include blog posts
    - Make the default export `async`; call `getAllPosts()` after the static paths
    - Map each post to `{ url: base + '/blog/' + p.slug, lastModified: p.created_at, changeFrequency: 'weekly', priority: 0.7 }`
    - Spread blog entries after static entries in the returned array
    - _Requirements: 9.1, 9.2_

- [ ] 17. Create llms.txt dynamic route
  - [ ] 17.1 Create `app/llms.txt/route.ts`
    - Export `GET()` handler; call `getAllPosts()` and build plain-text response
    - Include a static site description header, then one line per post: `[created_at] [slug]: [meta_description]`
    - Return `new Response(text, { headers: { 'Content-Type': 'text/plain' } })`
    - _Requirements: 9.4, 9.5_

- [ ] 18. Update environment variable placeholders
  - [ ] 18.1 Add new env var placeholders to `.env`
    - Append `GEMINI_API_KEY=`, `DATABASE_URL=`, `CRON_SECRET=` placeholder lines
    - _Requirements: 12.1, 12.2, 12.3_

- [ ] 19. Checkpoint — UI and routes complete
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 20. Write property-based tests for `lib/seo.ts`
  - [ ]* 20.1 Write property test for `generateMetaTitle` (Property 6) — if not already done in task 4.2
    - **Property 6: Meta title is ≤60 characters and contains the primary keyword**
    - **Validates: Requirements 2.4, 4.1**

  - [ ]* 20.2 Write property test for `generateSlug` (Property 15) — if not already done in task 4.3
    - **Property 15: Slug is lowercase, hyphen-only, no consecutive hyphens**
    - **Validates: Requirements 4.3**

  - [ ]* 20.3 Write property test for `ensureUniqueSlug` (Property 16) — if not already done in task 4.4
    - **Property 16: Slug uniqueness — collision appends numeric suffix**
    - **Validates: Requirements 4.4**

- [ ] 21. Write property-based tests for `lib/keyword-engine.ts`
  - [ ]* 21.1 Write property test for keyword selection counts (Property 1) — if not already done in task 5.2
    - **Property 1: Keyword selection counts are always valid**
    - **Validates: Requirements 1.1**

  - [ ]* 21.2 Write property test for no-repeat-before-full-coverage (Property 2) — if not already done in task 5.3
    - **Property 2: Primary keyword rotation — no repeat before full coverage**
    - **Validates: Requirements 1.2**

  - [ ]* 21.3 Write property test for LRU restart after full cycle (Property 3) — if not already done in task 5.4
    - **Property 3: Primary keyword rotation — LRU restart after full cycle**
    - **Validates: Requirements 1.3**

- [ ] 22. Final checkpoint — ensure all tests pass
  - Run `npm test` and confirm all tests pass.
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- `params` in dynamic routes is a `Promise` in this Next.js version — always `await params`
- JSON-LD is injected inline via `<script dangerouslySetInnerHTML>` in the page body (not `<head>`), per Next.js docs
- `sitemap.ts` must be made `async` to support DB calls
- Property tests in tasks 20–21 are consolidation tasks; the actual test files should be created alongside their implementation tasks (4.2–4.4, 5.2–5.4)
