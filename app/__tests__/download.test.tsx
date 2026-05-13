// Feature: dhan77-gaming-website, Property 7: For any render of Download page, DOWNLOAD_LINK appears at least twice
import * as fc from 'fast-check'
import { render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import DownloadPage from '../dhan-7-apk-download/page'
import { DOWNLOAD_LINK } from '@/app/_lib/constants'

// Validates: Requirements 4.3

describe('DownloadPage – Property 7', () => {
  it('for any render, DOWNLOAD_LINK appears at least twice as an anchor href', () => {
    fc.assert(
      fc.property(fc.constant(null), () => {
        const { container } = render(<DownloadPage />)
        const anchors = Array.from(container.querySelectorAll('a[href]'))
        const downloadAnchors = anchors.filter(
          (a) => a.getAttribute('href') === DOWNLOAD_LINK
        )
        expect(downloadAnchors.length).toBeGreaterThanOrEqual(2)
      }),
      { numRuns: 100 }
    )
  })
})
