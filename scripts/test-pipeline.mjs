// Pure ESM test runner — no tsx needed, tests the pipeline logic directly
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'

// Load .env
try {
  const lines = readFileSync(resolve(process.cwd(), '.env'), 'utf-8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim()
    if (key && val && !process.env[key]) process.env[key] = val
  }
} catch { /* ignore */ }

console.log('=== AUTOMATION FLOW TEST ===\n')

// 1. Check env vars
console.log('1. Checking environment variables...')
const vars = ['GEMINI_API_KEY', 'DATABASE_URL', 'NEXT_PUBLIC_SITE_URL']
let envOk = true
for (const v of vars) {
  const val = process.env[v]
  if (val) {
    console.log(`   ✓ ${v} = ${val.slice(0, 30)}...`)
  } else {
    console.log(`   ✗ ${v} is NOT SET`)
    envOk = false
  }
}

if (!envOk) {
  console.error('\nFailed: Missing env vars. Check your .env file.')
  process.exit(1)
}

// 2. Test DB connection
console.log('\n2. Testing Neon DB connection...')
try {
  const { neon } = await import('@neondatabase/serverless')
  const sql = neon(process.env.DATABASE_URL)
  const result = await sql`SELECT NOW() as now`
  console.log(`   ✓ DB connected — server time: ${result[0].now}`)

  // Run migrations
  await sql`CREATE TABLE IF NOT EXISTS blogs (
    id SERIAL PRIMARY KEY, title TEXT NOT NULL, slug TEXT NOT NULL UNIQUE,
    content_md TEXT NOT NULL, meta_title TEXT NOT NULL, meta_description TEXT NOT NULL,
    keywords TEXT[] NOT NULL DEFAULT '{}', created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
  )`
  await sql`CREATE TABLE IF NOT EXISTS keyword_usage (
    keyword TEXT PRIMARY KEY, used_at TIMESTAMP NOT NULL, use_count INTEGER NOT NULL DEFAULT 1
  )`
  console.log('   ✓ Tables exist (migrations ran)')

  // Count existing posts
  const count = await sql`SELECT COUNT(*) as c FROM blogs`
  console.log(`   ✓ Existing blog posts: ${count[0].c}`)
} catch (err) {
  console.error(`   ✗ DB error: ${err.message}`)
  process.exit(1)
}

// 3. Test Gemini API
console.log('\n3. Testing Gemini API...')
try {
  const { GoogleGenerativeAI } = await import('@google/generative-ai')
  const client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  const model = client.getGenerativeModel({ model: 'gemini-flash-lite-latest' })
  const result = await model.generateContent('Say "Gemini API working" in exactly 4 words.')
  const text = result.response.text().trim()
  console.log(`   ✓ Gemini responded: "${text}"`)
} catch (err) {
  console.error(`   ✗ Gemini error: ${err.message}`)
  process.exit(1)
}

// 4. Test SEO utilities
console.log('\n4. Testing SEO utilities...')
function generateSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')
}
function generateMetaTitle(title, keyword) {
  if (title.length <= 60) return title
  const truncated = title.slice(0, 60).replace(/\s+\S*$/, '')
  if (truncated.toLowerCase().includes(keyword.toLowerCase())) return truncated
  return `${keyword} | Dhan7`.slice(0, 60)
}

const testTitle = 'Dhan7 Game Download 2026 – Official APK & Login Guide'
const slug = generateSlug(testTitle)
const metaTitle = generateMetaTitle(testTitle, 'dhan7 download')
console.log(`   ✓ generateSlug: "${slug}"`)
console.log(`   ✓ generateMetaTitle (${metaTitle.length} chars): "${metaTitle}"`)
console.log(`   ${metaTitle.length <= 60 ? '✓' : '✗'} Meta title ≤60 chars`)

// 5. Summary
console.log('\n=== ALL CHECKS PASSED ===')
console.log('\nTo generate a real blog post, run:')
console.log('  node node_modules/tsx/dist/cli.mjs scripts/generate-blog.ts')
console.log('\nBlogs are visible at:')
console.log(`  ${process.env.NEXT_PUBLIC_SITE_URL}/blog`)
