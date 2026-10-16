const FALLBACK_SITE_URL = 'https://dhan7.win'

export function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL

  try {
    const parsed = new URL(raw)
    // Normalize www.dhan7.win or apex dhan7.win to https://dhan7.win
    if (parsed.hostname === 'www.dhan7.win') {
      parsed.hostname = 'dhan7.win'
    }
    parsed.pathname = ''
    parsed.search = ''
    parsed.hash = ''
    return parsed.origin
  } catch {
    return FALLBACK_SITE_URL
  }
}

