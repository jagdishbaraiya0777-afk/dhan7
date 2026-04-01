import { getKeywordUsage, upsertKeywordUsage } from './db'
import type { SelectedKeywords } from './types'

export const PRIMARY_KEYWORDS = [
  'dhan7 download',
  'dhan77 apk',
  'dhan77 login',
  'dhan77 bonus',
  'dhan77 review',
  'dhan7 earning app',
  'dhan77 withdrawal',
  'dhan77 referral',
  'dhan7 real money',
  'dhan77 safe legit',
]

export const SECONDARY_KEYWORDS = [
  'real money gaming app',
  'earn money online india',
  'gaming app withdrawal',
  'online earning app 2026',
  'best earning app india',
  'dhan7 app features',
  'mobile gaming earn money',
  'instant withdrawal app',
]

export const LONG_TAIL_KEYWORDS = [
  'how to download dhan77 apk on android',
  'dhan77 referral bonus how to claim',
  'is dhan77 safe to use in india',
  'dhan7 withdrawal process step by step',
  'dhan77 login problem solution 2026',
  'how to earn money on dhan7 app',
]

function pickRandom<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

export async function selectKeywords(): Promise<SelectedKeywords> {
  const usageHistory = await getKeywordUsage()
  const usedKeywords = new Map(usageHistory.map((u) => [u.keyword, u.used_at]))

  // Find primaries not yet used
  const unused = PRIMARY_KEYWORDS.filter((k) => !usedKeywords.has(k))

  let primary: string
  if (unused.length > 0) {
    // Pick randomly from unused
    primary = unused[Math.floor(Math.random() * unused.length)]
  } else {
    // All used — pick LRU (oldest used_at)
    const sorted = [...usageHistory].sort(
      (a, b) => a.used_at.getTime() - b.used_at.getTime(),
    )
    primary = sorted[0].keyword
  }

  const secondaryCount = 3 + Math.floor(Math.random() * 3) // 3, 4, or 5
  const secondary = pickRandom(SECONDARY_KEYWORDS, secondaryCount)
  const longTail = pickRandom(LONG_TAIL_KEYWORDS, 2)

  await upsertKeywordUsage(primary, new Date())

  return { primary, secondary, longTail }
}
