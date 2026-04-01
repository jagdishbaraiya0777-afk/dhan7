import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export function loadEnv() {
  try {
    const envPath = resolve(process.cwd(), '.env')
    const lines = readFileSync(envPath, 'utf-8').split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eqIdx = trimmed.indexOf('=')
      if (eqIdx === -1) continue
      const key = trimmed.slice(0, eqIdx).trim()
      const val = trimmed.slice(eqIdx + 1).trim()
      if (key && val && !process.env[key]) {
        process.env[key] = val
      }
    }
  } catch {
    // no .env file — rely on actual env vars
  }
}
