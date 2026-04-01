import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

try {
  const lines = readFileSync(resolve(process.cwd(), '.env'), 'utf-8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eqIdx = trimmed.indexOf('=')
    if (eqIdx === -1) continue
    const key = trimmed.slice(0, eqIdx).trim()
    const val = trimmed.slice(eqIdx + 1).trim()
    if (key && val && !process.env[key]) process.env[key] = val
  }
} catch { /* ignore */ }

const apiKey = process.env.GEMINI_API_KEY
const res = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
)
const data = await res.json()
if (data.models) {
  console.log('Available models that support generateContent:')
  for (const m of data.models) {
    if (m.supportedGenerationMethods?.includes('generateContent')) {
      console.log(' -', m.name)
    }
  }
} else {
  console.log(JSON.stringify(data, null, 2))
}
