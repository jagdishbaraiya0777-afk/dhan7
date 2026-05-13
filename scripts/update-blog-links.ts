import { readFileSync } from 'fs'
import { join } from 'path'
import { config } from 'dotenv'
import { neon } from '@neondatabase/serverless'

// Load environment variables
config({ path: join(process.cwd(), '.env.local') })
config({ path: join(process.cwd(), '.env') })

const contentFiles = [
  {
    file: 'content1.md',
    slug: 'play-smart-win-big-dhan-7-complete-guide',
  },
  {
    file: 'content2.md',
    slug: 'dhan-7-reviews-complete-guide-reality-check',
  },
  {
    file: 'content3.md',
    slug: 'dhan-7-apk-download-latest-app',
  },
  {
    file: 'content4.md',
    slug: 'dhan-7-login-secure-easy-access',
  },
  {
    file: 'content5.md',
    slug: 'dhan-7-bonus-complete-guide-offers',
  },
]

async function updateBlogLinks() {
  console.log('🔧 Starting to update blog post links...\n')

  const url = process.env.DATABASE_URL
  if (!url) {
    console.error('❌ DATABASE_URL environment variable is not set')
    process.exit(1)
  }

  const sql = neon(url)

  for (const content of contentFiles) {
    try {
      // Read the markdown file
      const filePath = join(process.cwd(), content.file)
      const markdown = readFileSync(filePath, 'utf-8')

      // Remove the URL line at the top if it exists
      const cleanMarkdown = markdown.replace(/^<https:\/\/www\.dhan7\.xyz\/[^>]*>\n\n/, '')

      // Update the blog post
      const result = await sql`
        UPDATE blogs 
        SET content_md = ${cleanMarkdown}
        WHERE slug = ${content.slug}
        RETURNING id, title
      `

      if (result.length > 0) {
        console.log(`✅ Updated: "${result[0].title}"`)
        console.log(`   Slug: ${content.slug}`)
        console.log(`   ID: ${result[0].id}\n`)
      } else {
        console.log(`⚠️  Not found: ${content.slug}\n`)
      }
    } catch (error) {
      console.error(`❌ Error updating "${content.file}":`, error)
    }
  }

  console.log('✨ Done! All blog post links have been updated.')
}

// Run the script
updateBlogLinks().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
