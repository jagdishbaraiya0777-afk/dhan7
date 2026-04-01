// Feature: ai-blog-automation
import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as fc from 'fast-check'

// Mock DB so tests run without a real database
vi.mock('../db', () => ({
  getKeywordUsage: vi.fn(),
  upsertKeywordUsage: vi.fn(),
}))

import { getKeywordUsage, upsertKeywordUsage } from '../db'
import { selectKeywords, PRIMARY_KEYWORDS, SECONDARY_KEYWORDS, LONG_TAIL_KEYWORDS } from '../keyword-engine'

beforeEach(() => {
  vi.mocked(upsertKeywordUsage).mockResolvedValue(undefined)
})

describe('selectKeywords', () => {
  // Feature: ai-blog-automation, Property 1: Keyword selection counts are always valid
  it('Property 1: returns exactly 1 primary, 3–5 secondary, 2 long-tail keywords', async () => {
    await fc.assert(
      fc.asyncProperty(
        // Simulate varying amounts of prior usage (0 to all used)
        fc.integer({ min: 0, max: PRIMARY_KEYWORDS.length }),
        async (usedCount) => {
          const usageHistory = PRIMARY_KEYWORDS.slice(0, usedCount).map((k, i) => ({
            keyword: k,
            used_at: new Date(Date.now() - (usedCount - i) * 1000),
            use_count: 1,
          }))
          vi.mocked(getKeywordUsage).mockResolvedValue(usageHistory)

          const result = await selectKeywords()

          expect(PRIMARY_KEYWORDS).toContain(result.primary)
          expect(result.secondary.length).toBeGreaterThanOrEqual(3)
          expect(result.secondary.length).toBeLessThanOrEqual(5)
          expect(result.longTail.length).toBe(2)
          result.secondary.forEach((k) => expect(SECONDARY_KEYWORDS).toContain(k))
          result.longTail.forEach((k) => expect(LONG_TAIL_KEYWORDS).toContain(k))
        },
      ),
      { numRuns: 100 },
    )
  })

  // Feature: ai-blog-automation, Property 2: Primary keyword rotation — no repeat before full coverage
  it('Property 2: N consecutive runs produce N distinct primary keywords', async () => {
    const N = PRIMARY_KEYWORDS.length
    const usageStore = new Map<string, Date>()

    vi.mocked(getKeywordUsage).mockImplementation(async () =>
      Array.from(usageStore.entries()).map(([keyword, used_at]) => ({
        keyword,
        used_at,
        use_count: 1,
      })),
    )
    vi.mocked(upsertKeywordUsage).mockImplementation(async (keyword, usedAt) => {
      usageStore.set(keyword, usedAt)
    })

    const selected: string[] = []
    for (let i = 0; i < N; i++) {
      const result = await selectKeywords()
      selected.push(result.primary)
    }

    const unique = new Set(selected)
    expect(unique.size).toBe(N)
  })

  // Feature: ai-blog-automation, Property 3: Primary keyword rotation — LRU restart after full cycle
  it('Property 3: after full cycle, (N+1)th run selects the LRU keyword', async () => {
    const N = PRIMARY_KEYWORDS.length
    // Simulate all keywords used, with keyword[0] being the oldest
    const usageHistory = PRIMARY_KEYWORDS.map((k, i) => ({
      keyword: k,
      used_at: new Date(1000 + i * 1000), // keyword[0] is oldest
      use_count: 1,
    }))

    vi.mocked(getKeywordUsage).mockResolvedValue(usageHistory)

    const result = await selectKeywords()
    expect(result.primary).toBe(PRIMARY_KEYWORDS[0])
  })
})
