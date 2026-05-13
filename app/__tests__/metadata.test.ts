// Feature: dhan77-gaming-website, Property 4: For any page metadata export, canonical resolves to siteUrl() + expected path
import * as fc from 'fast-check'
import { describe, it, expect } from 'vitest'
import { siteUrl } from '@/app/_lib/siteUrl'

// Validates: Requirements 2.3, 2.6, 3.7, 4.5, 5.4, 6.4, 7.5, 8.3

import { metadata as homeMetadata } from '../page'
import { metadata as downloadMetadata } from '../dhan-7-apk-download/page'
import { metadata as loginMetadata } from '../dhan-7-login/page'
import { metadata as bonusMetadata } from '../dhan-7-bonus/page'
import { metadata as reviewMetadata } from '../dhan-7-review/page'
import { metadata as faqMetadata } from '../faq/page'

const pages = [
  { metadata: homeMetadata, expectedPath: '/' },
  { metadata: downloadMetadata, expectedPath: '/dhan77-apk-download' },
  { metadata: loginMetadata, expectedPath: '/dhan77-login' },
  { metadata: bonusMetadata, expectedPath: '/dhan77-bonus' },
  { metadata: reviewMetadata, expectedPath: '/dhan77-review' },
  { metadata: faqMetadata, expectedPath: '/faq' },
]

describe('Page metadata – Property 4: canonical resolves to siteUrl() + expected path', () => {
  it('for any page, alternates.canonical ends with the expected path', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const base = siteUrl()
        for (const { metadata, expectedPath } of pages) {
          const canonical = (metadata as { alternates?: { canonical?: string } })
            .alternates?.canonical
          expect(canonical).toBeDefined()
          // canonical may be a relative path — resolve against base
          const resolved = canonical!.startsWith('http')
            ? canonical!
            : `${base}${canonical}`
          expect(resolved).toBe(`${base}${expectedPath}`)
        }
      }),
      { numRuns: 100 }
    )
  })
})
