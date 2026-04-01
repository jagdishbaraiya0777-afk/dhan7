// Feature: ai-blog-automation
import { describe, it, expect, vi } from 'vitest'
import * as fc from 'fast-check'
import { generateSlug, generateMetaTitle, ensureUniqueSlug } from '../seo'

// Mock the db module so tests don't need a real DB
vi.mock('../db', () => ({
  slugExists: vi.fn(),
}))

import { slugExists } from '../db'

describe('generateMetaTitle', () => {
  // Feature: ai-blog-automation, Property 6: Meta title is ≤60 characters and contains the primary keyword
  it('Property 6: result is ≤60 chars and contains the primary keyword', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 120 }),
        fc.stringMatching(/^[a-z0-9 ]{3,20}$/),
        (title, primaryKeyword) => {
          const result = generateMetaTitle(title, primaryKeyword)
          expect(result.length).toBeLessThanOrEqual(60)
          expect(result.toLowerCase()).toContain(primaryKeyword.toLowerCase())
        },
      ),
      { numRuns: 100 },
    )
  })
})

describe('generateSlug', () => {
  // Feature: ai-blog-automation, Property 15: Slug is lowercase, hyphen-only, no consecutive hyphens
  it('Property 15: slug is lowercase, [a-z0-9-] only, no consecutive hyphens', () => {
    fc.assert(
      fc.property(
        fc.string({ minLength: 1, maxLength: 200 }),
        (title) => {
          const result = generateSlug(title)
          if (result.length === 0) return // empty input edge case
          expect(result).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/)
          expect(result).not.toMatch(/--/)
          expect(result).toBe(result.toLowerCase())
        },
      ),
      { numRuns: 100 },
    )
  })
})

describe('ensureUniqueSlug', () => {
  // Feature: ai-blog-automation, Property 16: Slug uniqueness — collision appends numeric suffix
  it('Property 16: returned slug is not in the pre-existing set', async () => {
    await fc.assert(
      fc.asyncProperty(
        fc.stringMatching(/^[a-z0-9-]{3,20}$/),
        fc.array(fc.integer({ min: 2, max: 10 }), { minLength: 0, maxLength: 5 }),
        async (baseSlug, collisionSuffixes) => {
          const existing = new Set<string>([
            baseSlug,
            ...collisionSuffixes.map((n) => `${baseSlug}-${n}`),
          ])
          const mockSlugExists = vi.mocked(slugExists)
          mockSlugExists.mockImplementation(async (s) => existing.has(s))

          const result = await ensureUniqueSlug(baseSlug)
          expect(existing.has(result)).toBe(false)
        },
      ),
      { numRuns: 100 },
    )
  })
})
