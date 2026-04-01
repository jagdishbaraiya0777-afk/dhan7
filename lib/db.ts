import { neon, type NeonQueryFunction } from '@neondatabase/serverless'
import type { BlogPost, NewBlogPost, KeywordUsage } from './types'

let _sql: NeonQueryFunction<false, false> | null = null

function getSql(): NeonQueryFunction<false, false> {
  if (!_sql) {
    const url = process.env.DATABASE_URL
    if (!url) throw new Error('DATABASE_URL environment variable is not set')
    _sql = neon(url)
  }
  return _sql
}

export async function runMigrations(): Promise<void> {
  const sql = getSql()
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
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM blogs WHERE slug = ${slug} LIMIT 1`
  if (rows.length === 0) return null
  return rowToBlogPost(rows[0] as Record<string, unknown>)
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM blogs ORDER BY created_at DESC`
  return rows.map((r) => rowToBlogPost(r as Record<string, unknown>))
}

export async function insertPost(post: NewBlogPost): Promise<BlogPost> {
  const sql = getSql()
  const rows = await sql`
    INSERT INTO blogs (title, slug, content_md, meta_title, meta_description, keywords)
    VALUES (${post.title}, ${post.slug}, ${post.content_md}, ${post.meta_title}, ${post.meta_description}, ${post.keywords})
    RETURNING *
  `
  return rowToBlogPost(rows[0] as Record<string, unknown>)
}

export async function slugExists(slug: string): Promise<boolean> {
  const sql = getSql()
  const rows = await sql`SELECT 1 FROM blogs WHERE slug = ${slug} LIMIT 1`
  return rows.length > 0
}

export async function getKeywordUsage(): Promise<KeywordUsage[]> {
  const sql = getSql()
  const rows = await sql`SELECT * FROM keyword_usage ORDER BY used_at ASC`
  return rows.map((r) => {
    const row = r as Record<string, unknown>
    return {
      keyword: row.keyword as string,
      used_at: new Date(row.used_at as string),
      use_count: row.use_count as number,
    }
  })
}

export async function upsertKeywordUsage(keyword: string, usedAt: Date): Promise<void> {
  const sql = getSql()
  await sql`
    INSERT INTO keyword_usage (keyword, used_at, use_count)
    VALUES (${keyword}, ${usedAt.toISOString()}, 1)
    ON CONFLICT (keyword) DO UPDATE
      SET used_at = EXCLUDED.used_at,
          use_count = keyword_usage.use_count + 1
  `
}

function rowToBlogPost(r: Record<string, unknown>): BlogPost {
  return {
    id: r.id as number,
    title: r.title as string,
    slug: r.slug as string,
    content_md: r.content_md as string,
    meta_title: r.meta_title as string,
    meta_description: r.meta_description as string,
    keywords: r.keywords as string[],
    created_at: new Date(r.created_at as string),
  }
}
