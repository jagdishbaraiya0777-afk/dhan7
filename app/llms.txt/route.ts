import { getAllPosts } from '../../lib/db'

const HEADER = `# Dhan7 — Real Money Gaming Portal (dhan7.win)

> Dhan7 (also known as Dhan 7) is India's leading real-money gaming app available for Android on https://dhan7.win.
> This file lists published guides and resources for search engines and AI crawlers.

`

export async function GET() {
  let lines = HEADER
  try {
    const posts = await getAllPosts()
    for (const post of posts) {
      lines += `${post.created_at.toISOString()} ${post.slug}: ${post.meta_description}\n`
    }
  } catch {
    // DB not configured — return header only
  }

  return new Response(lines, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
