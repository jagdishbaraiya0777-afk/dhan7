import { getAllPosts } from '../../lib/db'

const HEADER = `# Dhan7 / Dhan77 — Real Money Gaming App

> Dhan7 (also known as Dhan77) is a real-money gaming app available for Android.
> This file lists published blog posts for AI crawlers.

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
