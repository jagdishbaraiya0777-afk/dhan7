import { slugExists } from './db'

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
}

export async function ensureUniqueSlug(baseSlug: string): Promise<string> {
  let candidate = baseSlug
  let counter = 2
  while (await slugExists(candidate)) {
    candidate = `${baseSlug}-${counter}`
    counter++
  }
  return candidate
}

export function generateMetaTitle(title: string, primaryKeyword: string): string {
  if (title.length <= 60) return title
  // Try truncating at last word boundary before 60 chars
  const truncated = title.slice(0, 60).replace(/\s+\S*$/, '')
  if (truncated.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    return truncated
  }
  // Fallback: keyword + site suffix, capped at 60
  const fallback = `${primaryKeyword} | Dhan7`
  return fallback.slice(0, 60)
}

export function generateMetaDescription(
  title: string,
  primaryKeyword: string,
  intro: string,
): string {
  // Start from intro, inject keyword if missing, trim to 140–160 chars
  let base = intro.trim()
  if (!base.toLowerCase().includes(primaryKeyword.toLowerCase())) {
    base = `${primaryKeyword} — ${base}`
  }
  if (base.length >= 140 && base.length <= 160) return base
  if (base.length > 160) {
    // Trim to last word boundary at or before 160
    return base.slice(0, 160).replace(/\s+\S*$/, '').slice(0, 160)
  }
  // Too short — pad with title context
  const padded = `${base} Learn more about ${title}.`
  if (padded.length <= 160) return padded.slice(0, 160)
  return padded.slice(0, 160).replace(/\s+\S*$/, '')
}
