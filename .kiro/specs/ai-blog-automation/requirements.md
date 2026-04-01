# Requirements Document

## Introduction

The AI Blog Automation System adds a fully automated, SEO-driven blog engine to the existing Dhan7.xyz Next.js site. Once per day a scheduled job selects a fresh keyword combination, calls the Gemini API to generate a Google EEAT-compliant blog post, persists the post to a PostgreSQL (Neon DB) database, renders it as a Next.js dynamic route, and updates sitemap.xml, robots.txt, and llms.txt. The goal is to publish 30–60 posts within 60 days and achieve first-page Google rankings for the dhan7 / dhan77 keyword cluster.

## Glossary

- **Blog_System**: The end-to-end automated pipeline described in this document.
- **Scheduler**: The daily cron job that triggers the full generation pipeline.
- **Keyword_Engine**: The component that selects the keyword set for each run.
- **Content_Engine**: The component that calls the Gemini API and produces Markdown content.
- **SEO_Metadata_Generator**: The component that derives meta title, meta description, and slug from the chosen keywords and generated title.
- **Blog_Store**: The PostgreSQL (Neon DB) persistence layer.
- **Markdown_Renderer**: The Next.js server component that converts stored Markdown to HTML for the `/blog/[slug]` route.
- **Sitemap_Manager**: The component that regenerates sitemap.xml, robots.txt, and llms.txt after each new post is published.
- **Blog_Post**: A single record in the `blogs` table containing title, slug, content_md, meta_title, meta_description, keywords, and created_at.
- **Slug**: A URL-safe, lowercase, hyphen-separated string derived from the blog title, unique across all Blog_Posts.
- **Primary_Keyword**: One keyword chosen from the primary keyword list per run (e.g. "dhan7 download").
- **Secondary_Keywords**: Three to five keywords chosen from the secondary keyword list per run.
- **Long_Tail_Keywords**: Two keywords chosen from the long-tail keyword list per run.
- **EEAT**: Google's Experience, Expertise, Authoritativeness, and Trustworthiness content quality framework.
- **Gemini_API**: Google's generative AI API used for content generation.
- **Neon_DB**: The serverless PostgreSQL provider used for Blog_Store.
- **llms.txt**: A plain-text file at `/llms.txt` that describes the site to AI crawlers, updated after each new post.

---

## Requirements

### Requirement 1: Keyword Selection

**User Story:** As a site owner, I want the system to automatically pick a unique keyword combination each day, so that no two posts target the same keywords and topical coverage grows steadily.

#### Acceptance Criteria

1. WHEN the Scheduler triggers a run, THE Keyword_Engine SHALL select exactly one Primary_Keyword, three to five Secondary_Keywords, and exactly two Long_Tail_Keywords from the predefined keyword lists.
2. THE Keyword_Engine SHALL track previously used Primary_Keywords and SHALL NOT reuse a Primary_Keyword until all Primary_Keywords in the list have been used at least once.
3. IF all Primary_Keywords have been used at least once, THEN THE Keyword_Engine SHALL reset the usage cycle and begin reuse from the least-recently-used Primary_Keyword.
4. THE Keyword_Engine SHALL persist the keyword usage history in the Blog_Store so that restarts do not cause duplicate selections.

---

### Requirement 2: Blog Title Generation

**User Story:** As a site owner, I want every blog title to include the primary keyword, a year reference, and an emotional trigger word, so that click-through rates and SEO relevance are maximised.

#### Acceptance Criteria

1. WHEN the Content_Engine generates a title, THE Content_Engine SHALL include the selected Primary_Keyword in the title.
2. THE Content_Engine SHALL include the year "2026" in every generated title.
3. THE Content_Engine SHALL include at least one emotional trigger word from the set {Guide, Safe, Official, Real, Legit, Proof, Review} in every generated title.
4. THE SEO_Metadata_Generator SHALL derive the meta title from the generated title, truncated to a maximum of 60 characters, while preserving the Primary_Keyword.

---

### Requirement 3: Content Generation

**User Story:** As a site owner, I want each blog post to follow the EEAT content structure and Google quality guidelines, so that posts rank well and build topical authority.

#### Acceptance Criteria

1. WHEN the Content_Engine generates a post, THE Content_Engine SHALL produce content in Markdown format containing the following H2 sections in order: "What is Dhan7/Dhan77", "How to Download", "Login & Register Guide", "Earning Method", "Withdrawal Process", "Is it Safe or Legit?", "Tips & Strategy", "FAQ".
2. THE Content_Engine SHALL open each post with an H1 heading equal to the generated title and an introduction paragraph that mentions the Primary_Keyword naturally within the first 100 words.
3. THE Content_Engine SHALL maintain a keyword density of 1–2% for the Primary_Keyword across the full post body.
4. THE Content_Engine SHALL include keyword variations from the set {dhan7, dhan77, dhan 7, dhan 77} at least once each within the post body.
5. THE Content_Engine SHALL include a disclaimer section stating that the platform involves financial risk, is intended for users aged 18 and above, and that earnings are not guaranteed.
6. THE Content_Engine SHALL include at least one internal link to each of the paths /download, /login, /about, /disclaimer within the post body.
7. THE Content_Engine SHALL include at least one external link to `http://comegameapp.com` and at least one to `https://goplay11-apk.com` within the post body.
8. THE Content_Engine SHALL generate a minimum of 800 words and a maximum of 2000 words per post.
9. WHEN the Gemini_API returns an error, THEN THE Content_Engine SHALL retry the request up to three times with exponential backoff before marking the run as failed.

---

### Requirement 4: SEO Metadata Generation

**User Story:** As a site owner, I want each post to have a well-formed meta title and meta description, so that search engine result pages display accurate, keyword-rich snippets.

#### Acceptance Criteria

1. THE SEO_Metadata_Generator SHALL produce a meta title of at most 60 characters that contains the Primary_Keyword.
2. THE SEO_Metadata_Generator SHALL produce a meta description of 140–160 characters that contains the Primary_Keyword at least once and reads as a natural sentence.
3. THE SEO_Metadata_Generator SHALL generate a Slug from the blog title by converting to lowercase, replacing spaces and special characters with hyphens, and removing consecutive hyphens.
4. IF a generated Slug already exists in the Blog_Store, THEN THE SEO_Metadata_Generator SHALL append a numeric suffix (e.g. `-2`) and increment until the Slug is unique.

---

### Requirement 5: Blog Storage

**User Story:** As a developer, I want all blog posts stored in PostgreSQL, so that they can be retrieved, rendered, and managed reliably.

#### Acceptance Criteria

1. THE Blog_Store SHALL persist each Blog_Post using the schema: `id SERIAL PRIMARY KEY, title TEXT, slug TEXT UNIQUE, content_md TEXT, meta_title TEXT, meta_description TEXT, keywords TEXT[], created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP`.
2. WHEN a Blog_Post is saved, THE Blog_Store SHALL enforce the UNIQUE constraint on the slug column and return an error if a duplicate slug is inserted.
3. THE Blog_Store SHALL support retrieval of a single Blog_Post by slug.
4. THE Blog_Store SHALL support retrieval of all Blog_Posts ordered by created_at descending for the blog index page.
5. IF the database connection fails during a write, THEN THE Blog_Store SHALL surface the error to the Scheduler so the run can be retried.

---

### Requirement 6: Markdown Rendering

**User Story:** As a reader, I want blog posts to render as clean, readable HTML, so that the content is easy to consume on any device.

#### Acceptance Criteria

1. THE Markdown_Renderer SHALL convert the stored content_md field to HTML for display at `/blog/[slug]`.
2. THE Markdown_Renderer SHALL apply mobile-first typography styles consistent with the existing site theme (dark background `#0f0f0f`, primary text `#ffffff`).
3. THE Markdown_Renderer SHALL render the blog post's meta_title and meta_description as Next.js page metadata so that search engines receive the correct SEO signals.
4. THE Markdown_Renderer SHALL render the blog post's H1 title, all H2 sections, and the disclaimer visibly on the page.
5. WHEN a slug is requested that does not exist in the Blog_Store, THE Markdown_Renderer SHALL return a 404 response.
6. THE Markdown_Renderer SHALL generate static pages at build time for all existing Blog_Posts and support incremental static regeneration for newly published posts.

---

### Requirement 7: Blog Index Page

**User Story:** As a visitor, I want a paginated list of all blog posts at `/blog`, so that I can browse and discover content easily.

#### Acceptance Criteria

1. THE Blog_System SHALL expose a blog index page at `/blog` listing all published Blog_Posts with their title, slug, meta_description, and created_at date.
2. THE Blog_System SHALL display Blog_Posts on the index page ordered by created_at descending.
3. THE Blog_System SHALL include a canonical URL of `https://dhan7.xyz/blog` in the index page metadata.

---

### Requirement 8: Daily Scheduler

**User Story:** As a site owner, I want the pipeline to run automatically once per day without manual intervention, so that the blog grows consistently.

#### Acceptance Criteria

1. THE Scheduler SHALL trigger the full pipeline — keyword selection, title generation, content generation, metadata generation, storage, and sitemap update — once every 24 hours.
2. WHEN a pipeline run completes successfully, THE Scheduler SHALL log the slug, title, and timestamp of the published post.
3. WHEN a pipeline run fails at any step, THE Scheduler SHALL log the step name, error message, and timestamp, and SHALL NOT publish a partial Blog_Post.
4. THE Scheduler SHALL be configurable via environment variables for the cron schedule expression without requiring a code change.

---

### Requirement 9: Sitemap, robots.txt, and llms.txt Management

**User Story:** As a site owner, I want the sitemap, robots.txt, and llms.txt updated automatically after each new post, so that search engines and AI crawlers discover new content immediately.

#### Acceptance Criteria

1. WHEN a new Blog_Post is published, THE Sitemap_Manager SHALL add an entry for `https://dhan7.xyz/blog/[slug]` to sitemap.xml with `changefreq` of `weekly` and `priority` of `0.7`.
2. THE Sitemap_Manager SHALL preserve all existing sitemap entries for non-blog pages when adding new blog entries.
3. THE Sitemap_Manager SHALL ensure robots.txt contains `User-agent: *`, `Allow: /`, and `Sitemap: https://dhan7.xyz/sitemap.xml` at all times.
4. WHEN a new Blog_Post is published, THE Sitemap_Manager SHALL append a summary line to llms.txt in the format `[created_at] [slug]: [meta_description]`.
5. THE Sitemap_Manager SHALL update llms.txt with a site description header if the file does not yet exist.

---

### Requirement 10: FAQ Schema

**User Story:** As a site owner, I want each blog post to include FAQ structured data, so that Google can display rich FAQ snippets in search results.

#### Acceptance Criteria

1. WHEN the Content_Engine generates a post, THE Content_Engine SHALL include a minimum of three FAQ question-and-answer pairs in the "FAQ" H2 section of the Markdown content.
2. THE Markdown_Renderer SHALL embed a FAQPage JSON-LD schema in the `<head>` of each blog post page containing all FAQ pairs present in the rendered content.
3. FOR ALL valid Blog_Posts, parsing the FAQPage JSON-LD schema SHALL produce a valid JSON object with `@type` equal to `"FAQPage"` and a non-empty `mainEntity` array (round-trip property).

---

### Requirement 11: Safety and Compliance

**User Story:** As a site owner, I want every post to include mandatory disclaimers and responsible gaming language, so that the site complies with legal and ethical standards.

#### Acceptance Criteria

1. THE Content_Engine SHALL include a disclaimer in every Blog_Post stating that the platform involves financial risk, that earnings are not guaranteed, and that the platform is intended for users aged 18 and above.
2. THE Content_Engine SHALL include a responsible gaming statement encouraging users to play within their means in every Blog_Post.
3. THE Content_Engine SHALL NOT include any language that guarantees earnings, promises specific withdrawal amounts, or makes unverifiable claims about the platform's legitimacy.

---

### Requirement 12: Environment Configuration

**User Story:** As a developer, I want all secrets and external service credentials managed via environment variables, so that the system can be deployed to different environments without code changes.

#### Acceptance Criteria

1. THE Blog_System SHALL read the Gemini API key exclusively from the `GEMINI_API_KEY` environment variable.
2. THE Blog_System SHALL read the Neon DB connection string exclusively from the `DATABASE_URL` environment variable.
3. THE Blog_System SHALL read the site base URL exclusively from the `NEXT_PUBLIC_SITE_URL` environment variable, falling back to `https://dhan7.xyz` if the variable is not set.
4. IF any required environment variable (`GEMINI_API_KEY` or `DATABASE_URL`) is not set at startup, THEN THE Blog_System SHALL log a descriptive error and exit without attempting to run the pipeline.
