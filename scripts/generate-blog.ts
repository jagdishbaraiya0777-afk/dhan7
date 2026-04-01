// Load .env before any other imports so DATABASE_URL is available at module init
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

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
} catch { /* no .env — rely on real env vars */ }

import { runPipeline } from '../lib/content-engine'

const missing: string[] = []
if (!process.env.GEMINI_API_KEY) missing.push('GEMINI_API_KEY')
if (!process.env.DATABASE_URL) missing.push('DATABASE_URL')

if (missing.length > 0) {
  console.error(`Error: Missing required environment variables: ${missing.join(', ')}`)
  process.exit(1)
}

async function main() {
  try {
    const post = await runPipeline()
    console.log(`\n✓ Published: "${post.title}"`)
    console.log(`  Slug:  ${post.slug}`)
    console.log(`  URL:   ${process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'}/blog/${post.slug}`)
    console.log(`  Time:  ${new Date().toISOString()}`)
  } catch (err) {
    console.error('\n✗ Pipeline failed:', (err as Error).message)
    process.exit(1)
  }
}

main()
