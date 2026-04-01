import { GoogleGenerativeAI } from '@google/generative-ai'
import type { SelectedKeywords, GeneratedPost, FAQ } from './types'

function getClient(): GoogleGenerativeAI {
  const key = process.env.GEMINI_API_KEY
  if (!key) throw new Error('GEMINI_API_KEY environment variable is not set')
  return new GoogleGenerativeAI(key)
}

export function buildPrompt(keywords: SelectedKeywords): string {
  return `You are an SEO content writer for a real-money gaming app called Dhan7/Dhan77.

Write a blog post targeting the primary keyword: "${keywords.primary}"
Also naturally include these secondary keywords: ${keywords.secondary.join(', ')}
And these long-tail keywords: ${keywords.longTail.join(', ')}

The post MUST:
- Start with an H1 equal to the title you choose
- Include the year 2026 in the title
- Include one of: Guide, Safe, Official, Real, Legit, Proof, Review in the title
- Contain these H2 sections in order: What is Dhan7/Dhan77, How to Download, Login & Register Guide, Earning Method, Withdrawal Process, Is it Safe or Legit?, Tips & Strategy, FAQ
- Include at least 3 FAQ pairs in the FAQ section (format: **Q: ...** / **A: ...**)
- Mention the primary keyword within the first 100 words
- Maintain 1–2% keyword density for the primary keyword
- Include all four variations: dhan7, dhan77, dhan 7, dhan 77
- Include internal links to: /download, /login, /about, /disclaimer
- Include external links to: http://comegameapp.com and https://goplay11-apk.com
- Include a disclaimer: financial risk, 18+ only, earnings not guaranteed
- Include a responsible gaming statement encouraging users to play within their means
- NOT guarantee earnings or make unverifiable claims
- Be 800–2000 words

Return ONLY the Markdown content, no preamble.`
}

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function callGeminiWithRetry(prompt: string, maxRetries = 3): Promise<string> {
  const client = getClient()
  const model = client.getGenerativeModel({ model: 'gemini-flash-lite-latest' })

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const result = await model.generateContent(prompt)
      return result.response.text()
    } catch (err) {
      if (attempt === maxRetries) throw err
      await sleep(Math.pow(2, attempt) * 1000) // 1s, 2s, 4s
    }
  }
  throw new Error('Gemini API failed after retries')
}

function parseFaqs(markdown: string): FAQ[] {
  const faqs: FAQ[] = []
  const lines = markdown.split('\n')
  let currentQ: string | null = null

  for (const line of lines) {
    const qMatch = line.match(/^\*\*Q:\s*(.+?)\*\*/)
    const aMatch = line.match(/^\*\*A:\s*(.+?)\*\*/)
    if (qMatch) {
      currentQ = qMatch[1].trim()
    } else if (aMatch && currentQ) {
      faqs.push({ question: currentQ, answer: aMatch[1].trim() })
      currentQ = null
    }
  }
  return faqs
}

export async function generateBlogPost(keywords: SelectedKeywords): Promise<GeneratedPost> {
  const prompt = buildPrompt(keywords)
  const contentMd = await callGeminiWithRetry(prompt)

  // Extract title from first H1
  const titleMatch = contentMd.match(/^#\s+(.+)$/m)
  const title = titleMatch ? titleMatch[1].trim() : keywords.primary

  const faqs = parseFaqs(contentMd)

  return { title, contentMd, faqs }
}
