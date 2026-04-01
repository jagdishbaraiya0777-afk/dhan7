import { runMigrations, insertPost } from './db'
import { selectKeywords } from './keyword-engine'
import { generateBlogPost } from './gemini'
import { generateSlug, ensureUniqueSlug, generateMetaTitle, generateMetaDescription } from './seo'
import { updateLlmsTxt } from './sitemap-manager'
import type { BlogPost } from './types'

function validateEnv(): void {
  const missing: string[] = []
  if (!process.env.GEMINI_API_KEY) missing.push('GEMINI_API_KEY')
  if (!process.env.DATABASE_URL) missing.push('DATABASE_URL')
  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(', ')}`)
  }
}

export async function runPipeline(): Promise<BlogPost> {
  validateEnv()
  await runMigrations()

  let step = 'selectKeywords'
  try {
    step = 'selectKeywords'
    const keywords = await selectKeywords()

    step = 'generateBlogPost'
    const generated = await generateBlogPost(keywords)

    step = 'generateMetaTitle'
    const metaTitle = generateMetaTitle(generated.title, keywords.primary)

    step = 'generateMetaDescription'
    // Use first paragraph of content as intro
    const introMatch = generated.contentMd.match(/^(?:#[^\n]*\n+)?([^\n#].{50,})/m)
    const intro = introMatch ? introMatch[1] : generated.title
    const metaDescription = generateMetaDescription(generated.title, keywords.primary, intro)

    step = 'generateSlug'
    const baseSlug = generateSlug(generated.title)

    step = 'ensureUniqueSlug'
    const slug = await ensureUniqueSlug(baseSlug)

    step = 'insertPost'
    const post = await insertPost({
      title: generated.title,
      slug,
      content_md: generated.contentMd,
      meta_title: metaTitle,
      meta_description: metaDescription,
      keywords: [keywords.primary, ...keywords.secondary, ...keywords.longTail],
    })

    step = 'updateLlmsTxt'
    await updateLlmsTxt(post)

    console.log(`[pipeline] Published: ${post.slug} — "${post.title}" at ${new Date().toISOString()}`)
    return post
  } catch (err) {
    console.error(`[pipeline] Failed at step "${step}": ${(err as Error).message} at ${new Date().toISOString()}`)
    throw err
  }
}
