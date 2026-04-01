import { promises as fs } from 'fs'
import path from 'path'
import type { BlogPost } from './types'

const LLMS_TXT_PATH = path.join(process.cwd(), 'llms.txt')

const SITE_HEADER = `# Dhan7 / Dhan77 — Real Money Gaming App

> Dhan7 (also known as Dhan77) is a real-money gaming app available for Android.
> This file lists published blog posts for AI crawlers.

`

export async function updateLlmsTxt(post: BlogPost): Promise<void> {
  let existing = ''
  try {
    existing = await fs.readFile(LLMS_TXT_PATH, 'utf-8')
  } catch {
    // File doesn't exist yet — start with header
    existing = SITE_HEADER
  }

  const line = `${post.created_at.toISOString()} ${post.slug}: ${post.meta_description}\n`
  await fs.writeFile(LLMS_TXT_PATH, existing + line, 'utf-8')
}
