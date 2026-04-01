# Design Document: AI Blog Automation

## Overview

The AI Blog Automation system adds a fully automated, SEO-driven blog engine to the existing Dhan7 Next.js App Router site. A daily scheduled job selects a fresh keyword combination, calls the Gemini API to generate a Google EEAT-compliant blog post in Markdown, persists it to a PostgreSQL (Neon DB) database, and serves it via Next.js dynamic routes with ISR. After each publish, the sitemap, robots.txt, and llms.txt are updated automatically.

The system is designed to publish 30–60 posts within 60 days and achieve first-page Google rankings for the dhan7/dhan77 keyword cluster.

### Goals

- Zero-touch daily publishing pipeline
- EEAT-compliant content with FAQ JSON-LD rich results
- Clean integration with the existing Next.js App Router site — no breaking changes to existing pages
- All secrets managed via environment variables

---

## Architecture

The pipeline has three runtime contexts:

```
┌─────────────────────────────────────────────────────────────────┐
│  Vercel Cron / Node.js Script (scripts/generate-blog.ts)        │
│                                                                  │
│  Scheduler ──► Keyword_Engine ──► Content_Engine (Gemini API)   │
│                                         │                        │
│                                   SEO_Metadata_Generator         │
│                                         │                        │
│                                    Blog_Store (Neon DB)          │
│                                         │                        │
│                                   Sitemap_Manager                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Next.js App Router (Vercel)                                     │
│                                                                  │
│  /blog              ──► app/blog/page.tsx (Blog Index)           │
│  /blog/[slug]       ──► app/blog/[slug]/page.tsx (Post Page)     │
│  /sitemap.xml       ──► app/sitemap.ts (extended)                │
│  /robots.txt        ──► app/robots.ts                            │
│  /llms.txt          ──► app/llms.txt/route.ts                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Neon DB (PostgreSQL)                                            │
│                                                                  │
│  blogs table  ──  keyword_usage table                            │
└─────────────────────────────────────────────────────────────────┘
```

The generation script runs outside the Next.js request cycle (as a standalone Node.js script or via a Next.js API route called by Vercel Cron). The Next.js app reads from Neon DB at request time (or at build time for ISR).

---

## Components and Interfaces

### File / Folder Structure

```
app/
  blog/
    page.tsx                  # Blog index — lists all posts
    [slug]/
      page.tsx                # Dynamic post page with ISR
  robots.ts                   # Next.js robots.txt route
  sitemap.ts                  # Extended to include blog entries (already exists)
  llms.txt/
    route.ts                  # Serves /llms.txt from DB

lib/
  db.ts                       # Neon DB connection + typed query helpers
  gemini.ts                   # Gemini API client wrapper
  keyword-engine.ts           # Keyword rotation logic
  content-engine.ts           # Blog post generation pipeline
  seo.ts                      # Meta title / description / slug generation
  sitemap-manager.ts          # Sitemap + llms.txt update helpers

scripts/
  generate-blog.ts            # Standalone Node.js entry point for the scheduler

app/api/
  generate-blog/
    route.ts                  # POST endpoint called by Vercel Cron
```

### lib/db.ts

```typescript
// Exports a sql tagged-template client (Neon serverless) and typed helpers
export const sql = neon(process.env.DATABASE_URL!)

export async function getPostBySlug(slug: string): Promise<BlogPost | null>
export async function getAllPosts(): Promise<BlogPost[]>
export async function insertPost(post: NewBlogPost): Promise<BlogPost>
export async function slugExists(slug: string): Promise<boolean>
export async function getKeywordUsage(): Promise<KeywordUsage[]>
export async function upsertKeywordUsage(keyword: string, usedAt: Date): Promise<void>
```

### lib/keyword-engine.ts

```typescript
export async function selectKeywords(): Promise<SelectedKeywords>
// Returns: { primary: string, secondary: string[], longTail: string[] }
// Reads usage history from DB, applies rotation logic, persists updated history
```

### lib/gemini.ts

```typescript
export async function generateBlogPost(keywords: SelectedKeywords): Promise<GeneratedPost>
// Returns: { title: string, contentMd: string, faqs: FAQ[] }
// Retries up to 3 times with exponential backoff on API errors
```

### lib/content-engine.ts

```typescript
export async function runPipeline(): Promise<PublishedPost>
// Orchestrates: selectKeywords → generateBlogPost → generateSeoMetadata → insertPost → updateSitemap
// Throws on any step failure; never persists partial posts
```

### lib/seo.ts

```typescript
export function generateSlug(title: string): string
export async function ensureUniqueSlug(baseSlug: string): Promise<string>
export function generateMetaTitle(title: string, primaryKeyword: string): string
export function generateMetaDescription(title: string, primaryKeyword: string, intro: string): string
```

### lib/sitemap-manager.ts

```typescript
export async function addBlogEntryToSitemap(post: BlogPost): Promise<void>
export async function updateLlmsTxt(post: BlogPost): Promise<void>
```

---

## Data Models

### Database Schema

```sql
-- Blog posts
CREATE TABLE IF NOT EXISTS blogs (
  id              SERIAL PRIMARY KEY,
  title           TEXT        NOT NULL,
  slug            TEXT        NOT NULL UNIQUE,
  content_md      TEXT        NOT NULL,
  meta_title      TEXT        NOT NULL,
  meta_description TEXT       NOT NULL,
  keywords        TEXT[]      NOT NULL DEFAULT '{}',
  created_at      TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Keyword rotation tracking
CREATE TABLE IF NOT EXISTS keyword_usage (
  keyword         TEXT        PRIMARY KEY,
  used_at         TIMESTAMP   NOT NULL,
  use_count       INTEGER     NOT NULL DEFAULT 1
);
```

### TypeScript Types

```typescript
export interface BlogPost {
  id: number
  title: string
  slug: string
  content_md: string
  meta_title: string
  meta_description: string
  keywords: string[]
  created_at: Date
}

export type NewBlogPost = Omit<BlogPost, 'id' | 'created_at'>

export interface SelectedKeywords {
  primary: string
  secondary: string[]   // length: 3–5
  longTail: string[]    // length: 2
}

export interface FAQ {
  question: string
  answer: string
}

export interface GeneratedPost {
  title: string
  contentMd: string
  faqs: FAQ[]
}

export interface KeywordUsage {
  keyword: string
  used_at: Date
  use_count: number
}
```

### Keyword Lists

Defined in `lib/keyword-engine.ts` as constants:

```typescript
const PRIMARY_KEYWORDS = [
  'dhan7 download',
  'dhan77 apk',
  'dhan77 login',
  'dhan77 bonus',
  'dhan77 review',
  'dhan7 earning app',
  'dhan77 withdrawal',
  // ... extend as needed
]

const SECONDARY_KEYWORDS = [
  'real money gaming app',
  'earn money online india',
  'gaming app withdrawal',
  // ...
]

const LONG_TAIL_KEYWORDS = [
  'how to download dhan77 apk on android',
  'dhan77 referral bonus how to claim',
  // ...
]
```

---

## Gemini API Integration

`lib/gemini.ts` wraps `@google/generative-ai`. The prompt instructs Gemini to produce a structured Markdown post following the EEAT framework.

### Prompt Structure

```
You are an SEO content writer for a real-money gaming app called Dhan7/Dhan77.

Write a blog post targeting the primary keyword: "{primary}"
Also naturally include these secondary keywords: {secondary.join(', ')}
And these long-tail keywords: {longTail.join(', ')}

The post MUST:
- Start with an H1 equal to the title you choose
- Include the year 2026 in the title
- Include one of: Guide, Safe, Official, Real, Legit, Proof, Review in the title
- Contain these H2 sections in order: What is Dhan7/Dhan77, How to Download,
  Login & Register Guide, Earning Method, Withdrawal Process, Is it Safe or Legit?,
  Tips & Strategy, FAQ
- Include at least 3 FAQ pairs in the FAQ section (format: **Q: ...** / **A: ...**)
- Mention the primary keyword within the first 100 words
- Maintain 1–2% keyword density for the primary keyword
- Include all four variations: dhan7, dhan77, dhan 7, dhan 77
- Include internal links to: /download, /login, /about, /disclaimer
- Include external links to: http://comegameapp.com and https://goplay11-apk.com
- Include a disclaimer: financial risk, 18+ only, earnings not guaranteed
- Include a responsible gaming statement
- NOT guarantee earnings or make unverifiable claims
- Be 800–2000 words

Return ONLY the Markdown content, no preamble.
```

### Retry Logic

```typescript
async function callGeminiWithRetry(prompt: string, maxRetries = 3): Promise<string> {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await model.generateContent(prompt)
    } catch (err) {
      if (attempt === maxRetries) throw err
      await sleep(Math.pow(2, attempt) * 1000) // 1s, 2s, 4s
    }
  }
}
```

---

## Keyword Rotation Engine

The rotation algorithm in `lib/keyword-engine.ts`:

```
1. Load keyword_usage rows from DB
2. Find PRIMARY_KEYWORDS not yet in keyword_usage → "unused"
3. If unused is non-empty: pick randomly from unused
4. If all used: pick the keyword with the oldest used_at (least-recently-used)
5. Pick 3–5 random SECONDARY_KEYWORDS (no usage tracking needed)
6. Pick exactly 2 random LONG_TAIL_KEYWORDS (no usage tracking needed)
7. Persist the selected primary keyword with current timestamp to keyword_usage
8. Return SelectedKeywords
```

This guarantees full coverage before any repeat, and LRU ordering after the first cycle.

---

## Content Generation Pipeline

`lib/content-engine.ts` orchestrates the full pipeline atomically:

```
selectKeywords()
  → generateBlogPost(keywords)        [Gemini API, 3 retries]
  → generateMetaTitle(title, primary) [≤60 chars, contains primary]
  → generateMetaDescription(...)      [140–160 chars, contains primary]
  → generateSlug(title)               [lowercase, hyphens only]
  → ensureUniqueSlug(baseSlug)        [appends -2, -3 if collision]
  → insertPost(newPost)               [Neon DB write]
  → addBlogEntryToSitemap(post)       [updates sitemap data]
  → updateLlmsTxt(post)               [appends to llms.txt]
```

If any step throws, the pipeline propagates the error. The DB write is the commit point — nothing is persisted before it succeeds.

---

## SEO Metadata Generation

### Meta Title (`lib/seo.ts`)

```typescript
export function generateMetaTitle(title: string, primaryKeyword: string): string {
  if (title.length <= 60) return title
  // Truncate at last word boundary before 60 chars, ensure primary keyword is preserved
  // If truncation would remove the keyword, use keyword + " | Dhan7" pattern
}
```

### Meta Description

Generated from the post's introduction paragraph, trimmed to 140–160 characters, with the primary keyword injected if not naturally present.

### Slug Generation

```typescript
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')   // remove special chars
    .replace(/\s+/g, '-')            // spaces → hyphens
    .replace(/-{2,}/g, '-')          // collapse consecutive hyphens
    .replace(/^-|-$/g, '')           // trim leading/trailing hyphens
}
```

---

## Markdown Rendering

`app/blog/[slug]/page.tsx` uses `react-markdown` with `remark-gfm` for rendering. The page is a React Server Component.

```typescript
// app/blog/[slug]/page.tsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export const revalidate = 3600 // ISR: revalidate every hour
```

The FAQ JSON-LD is extracted from the rendered content and injected into `<head>` via a `<script type="application/ld+json">` tag, following the same pattern used in `app/page.tsx`.

---

## Blog Index and Dynamic Routes

### Blog Index (`app/blog/page.tsx`)

- Server Component, fetches all posts via `getAllPosts()` (ordered by `created_at DESC`)
- Renders a card list: title, meta_description, created_at, link to `/blog/[slug]`
- Exports `metadata` with `canonical: siteUrl() + '/blog'`
- `export const revalidate = 3600`

### Dynamic Post Page (`app/blog/[slug]/page.tsx`)

- `generateStaticParams()` pre-renders all existing posts at build time
- `export const revalidate = 3600` enables ISR for new posts
- `notFound()` called when slug is absent from DB (returns 404)
- Exports `generateMetadata()` returning `{ title: post.meta_title, description: post.meta_description }`

---

## Daily Scheduler Design

### Option A: Vercel Cron (recommended for Vercel deployments)

`vercel.json`:
```json
{
  "crons": [
    {
      "path": "/api/generate-blog",
      "schedule": "0 3 * * *"
    }
  ]
}
```

`app/api/generate-blog/route.ts`:
```typescript
export async function POST(req: Request) {
  // Verify CRON_SECRET header to prevent unauthorized calls
  const secret = req.headers.get('authorization')
  if (secret !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const post = await runPipeline()
  return Response.json({ slug: post.slug, title: post.title })
}
```

### Option B: Standalone Node.js Script

`scripts/generate-blog.ts` — run via `npx tsx scripts/generate-blog.ts` from a cron job or CI schedule:

```typescript
import { runPipeline } from '../lib/content-engine'
import { validateEnv } from '../lib/env'

validateEnv() // throws if GEMINI_API_KEY or DATABASE_URL missing
const post = await runPipeline()
console.log(`Published: ${post.slug} at ${new Date().toISOString()}`)
```

The cron schedule expression is read from `CRON_SCHEDULE` env var (default: `0 3 * * *`).

---

## Sitemap, robots.txt, and llms.txt Strategy

### sitemap.ts (extended)

The existing `app/sitemap.ts` is extended to also fetch blog posts from the DB and include them:

```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteUrl()
  const staticPaths = [ /* existing paths */ ]
  const posts = await getAllPosts()
  const blogEntries = posts.map(p => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: p.created_at,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  return [...staticPaths, ...blogEntries]
}
```

### robots.ts (`app/robots.ts`)

```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl()}/sitemap.xml`,
  }
}
```

### llms.txt (`app/llms.txt/route.ts`)

Served dynamically from the DB. Each line: `[created_at] [slug]: [meta_description]`. A static header describes the site to AI crawlers.

---

## FAQ JSON-LD Schema Generation

FAQs are extracted from the Markdown content by parsing `**Q: ...**` / `**A: ...**` patterns. The JSON-LD is built and injected into the page `<head>`:

```typescript
function buildFaqJsonLd(faqs: FAQ[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }).replace(/</g, '\\u003c')
}
```

---

## Error Handling

| Scenario | Behavior |
|---|---|
| `GEMINI_API_KEY` or `DATABASE_URL` missing | Log descriptive error, exit process (no pipeline run) |
| Gemini API error | Retry up to 3× with exponential backoff (1s, 2s, 4s); mark run failed after 3rd failure |
| Duplicate slug | Append `-2`, `-3`, etc. until unique |
| DB write failure | Surface error to Scheduler; no partial post persisted |
| Slug not found (404) | `notFound()` in Next.js page → 404 response |
| Pipeline step failure | Log step name, error message, timestamp; abort without publishing |

---

## Testing Strategy

### Dual Testing Approach

Both unit tests and property-based tests are required. Unit tests cover specific examples, edge cases, and error conditions. Property-based tests verify universal invariants across randomly generated inputs. Together they provide comprehensive coverage.

### Property-Based Testing

Uses `fast-check` (already in `devDependencies`). Each property test runs a minimum of 100 iterations (`numRuns: 100`).

Each test is tagged with a comment in the format:
```
// Feature: ai-blog-automation, Property N: <property_text>
```

Each correctness property is implemented by a single property-based test.

### Unit Testing

Uses `vitest` (already configured). Unit tests focus on:
- Specific examples (e.g., known slug collision, exact meta title truncation)
- Integration points (e.g., DB round-trip with a test database)
- Error conditions (e.g., missing env vars, Gemini API failure after 3 retries)

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Keyword selection counts are always valid

*For any* invocation of `selectKeywords()` against any keyword lists, the result must contain exactly 1 primary keyword, between 3 and 5 secondary keywords, and exactly 2 long-tail keywords.

**Validates: Requirements 1.1**

### Property 2: Primary keyword rotation — no repeat before full coverage

*For any* list of N primary keywords, simulating N consecutive runs must produce N distinct primary keywords (no repeats until all have been used).

**Validates: Requirements 1.2**

### Property 3: Primary keyword rotation — LRU restart after full cycle

*For any* list of N primary keywords, after N runs have exhausted all keywords, the (N+1)th run must select the keyword with the oldest `used_at` timestamp.

**Validates: Requirements 1.3**

### Property 4: Keyword usage history survives restart

*For any* keyword usage state persisted to the DB, reloading that state and calling `selectKeywords()` must produce the same next selection as if the process had never restarted.

**Validates: Requirements 1.4**

### Property 5: Generated title contains primary keyword, year, and trigger word

*For any* primary keyword and generated title, the title must contain the primary keyword, the string "2026", and at least one word from {Guide, Safe, Official, Real, Legit, Proof, Review}.

**Validates: Requirements 2.1, 2.2, 2.3**

### Property 6: Meta title is ≤60 characters and contains the primary keyword

*For any* blog title and primary keyword, `generateMetaTitle(title, primary)` must return a string of at most 60 characters that contains the primary keyword.

**Validates: Requirements 2.4, 4.1**

### Property 7: Generated post contains all required H2 sections in order

*For any* generated Markdown post, parsing the headings must yield the sequence: "What is Dhan7/Dhan77", "How to Download", "Login & Register Guide", "Earning Method", "Withdrawal Process", "Is it Safe or Legit?", "Tips & Strategy", "FAQ" — in that order.

**Validates: Requirements 3.1**

### Property 8: Post opens with H1 equal to title and primary keyword in first 100 words

*For any* generated post and its title, the first heading must be an H1 equal to the title, and the primary keyword must appear within the first 100 words of the body text.

**Validates: Requirements 3.2**

### Property 9: Primary keyword density is 1–2%

*For any* generated post body and primary keyword, the ratio of primary keyword occurrences to total word count must be in the range [0.01, 0.02].

**Validates: Requirements 3.3**

### Property 10: All four keyword variations appear in every post

*For any* generated post body, each of the strings "dhan7", "dhan77", "dhan 7", and "dhan 77" must appear at least once (case-insensitive).

**Validates: Requirements 3.4**

### Property 11: Disclaimer and responsible gaming statement are present in every post

*For any* generated post, the content must contain language indicating financial risk, 18+ age restriction, no earnings guarantee, and a responsible gaming statement — and must NOT contain phrases that guarantee earnings or specific withdrawal amounts.

**Validates: Requirements 3.5, 11.1, 11.2, 11.3**

### Property 12: Required internal and external links are present in every post

*For any* generated post, the Markdown must contain links to /download, /login, /about, /disclaimer, http://comegameapp.com, and https://goplay11-apk.com.

**Validates: Requirements 3.6, 3.7**

### Property 13: Post word count is between 800 and 2000

*For any* generated post, the word count of the body text must be in the range [800, 2000].

**Validates: Requirements 3.8**

### Property 14: Meta description is 140–160 characters and contains the primary keyword

*For any* blog post and primary keyword, `generateMetaDescription(...)` must return a string whose length is in [140, 160] and that contains the primary keyword at least once.

**Validates: Requirements 4.2**

### Property 15: Slug is lowercase, hyphen-only, no consecutive hyphens

*For any* blog title, `generateSlug(title)` must return a string that is all lowercase, contains only characters matching `[a-z0-9-]`, and contains no consecutive hyphens.

**Validates: Requirements 4.3**

### Property 16: Slug uniqueness — collision appends numeric suffix

*For any* base slug and set of pre-existing slugs, `ensureUniqueSlug(base)` must return a slug not present in the existing set, appending `-2`, `-3`, etc. as needed.

**Validates: Requirements 4.4**

### Property 17: Blog post DB round-trip preserves all fields

*For any* valid `NewBlogPost`, inserting it into the DB and retrieving it by slug must return a `BlogPost` with all fields equal to the inserted values.

**Validates: Requirements 5.1, 5.3**

### Property 18: Blog index retrieval is ordered by created_at descending

*For any* set of blog posts with distinct `created_at` timestamps, `getAllPosts()` must return them in descending `created_at` order.

**Validates: Requirements 5.4, 7.2**

### Property 19: Markdown renders to non-empty HTML containing H1 and all H2 sections

*For any* valid blog post Markdown, the rendered HTML must be non-empty and contain the H1 title and all required H2 section headings.

**Validates: Requirements 6.1, 6.4**

### Property 20: Blog index displays all posts with required fields

*For any* set of posts in the store, the rendered blog index page must display each post's title, slug, meta_description, and created_at.

**Validates: Requirements 7.1**

### Property 21: Pipeline failure does not persist a partial post

*For any* pipeline run that fails at any step after keyword selection but before the DB write, no new row must appear in the `blogs` table.

**Validates: Requirements 8.3**

### Property 22: Sitemap includes new blog entry with correct attributes

*For any* newly published blog post, the sitemap output must include an entry with `url = siteUrl() + '/blog/' + slug`, `changeFrequency = 'weekly'`, and `priority = 0.7`.

**Validates: Requirements 9.1**

### Property 23: Sitemap preserves all existing non-blog entries

*For any* set of existing sitemap entries and any new blog post, adding the blog post to the sitemap must not remove or modify any pre-existing entry.

**Validates: Requirements 9.2**

### Property 24: llms.txt line format is correct for every post

*For any* published blog post, the line appended to llms.txt must match the format `[created_at] [slug]: [meta_description]`.

**Validates: Requirements 9.4**

### Property 25: FAQ section contains at least 3 Q&A pairs

*For any* generated post, parsing the FAQ H2 section must yield at least 3 question-and-answer pairs.

**Validates: Requirements 10.1**

### Property 26: FAQPage JSON-LD round-trip is valid

*For any* valid blog post, serializing the FAQ data to FAQPage JSON-LD and then parsing it must produce a valid JSON object with `@type === "FAQPage"` and a non-empty `mainEntity` array.

**Validates: Requirements 10.2, 10.3**
