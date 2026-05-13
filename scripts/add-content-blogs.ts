import { readFileSync } from 'fs'
import { join } from 'path'
import { config } from 'dotenv'
import { insertPost, slugExists } from '../lib/db'

// Load environment variables from .env or .env.local
config({ path: join(process.cwd(), '.env.local') })
config({ path: join(process.cwd(), '.env') })

const contentFiles = [
  {
    file: 'content1.md',
    title: 'Play Smart & Win Big with Dhan 7 - Complete Gaming Guide',
    slug: 'play-smart-win-big-dhan-7-complete-guide',
    metaTitle: 'Play Smart & Win Big with Dhan 7 | Complete Gaming Guide 2026',
    metaDescription: 'Discover how to play smart and win big with Dhan 7. Complete guide to Dhan 7 gaming app, features, download, and earning opportunities. Start your winning journey today!',
    keywords: ['dhan 7', 'dhan 7 app', 'dhan 7 gaming', 'play dhan 7', 'win with dhan 7', 'dhan 7 guide', 'dhan 7 download'],
  },
  {
    file: 'content2.md',
    title: 'Dhan 7 Reviews 2026 - Complete Guide & Reality Check',
    slug: 'dhan-7-reviews-complete-guide-reality-check',
    metaTitle: 'Dhan 7 Reviews 2026 - Complete Guide, Features & Reality Check',
    metaDescription: 'Honest Dhan 7 reviews 2026. Complete guide to Dhan 7 game reviews, features, pros & cons, safety concerns. Is Dhan 7 legit or risky? Read before downloading.',
    keywords: ['dhan 7 reviews', 'dhan 7 game reviews', 'is dhan 7 safe', 'dhan 7 legit', 'dhan 7 real or fake', 'dhan 7 review 2026'],
  },
  {
    file: 'content3.md',
    title: 'Dhan 7 APK Download - Get the Latest Dhan 7 App Now',
    slug: 'dhan-7-apk-download-latest-app',
    metaTitle: 'Dhan 7 APK Download - Get the Latest Dhan 7 App Now (2026)',
    metaDescription: 'Download Dhan 7 APK latest version. Fast and easy Dhan 7 app download guide. Get the official Dhan 7 APK for Android and start playing instantly.',
    keywords: ['dhan 7 apk download', 'dhan 7 app download', 'download dhan 7', 'dhan 7 apk', 'dhan 7 android app'],
  },
  {
    file: 'content4.md',
    title: 'Dhan 7 Login - Secure & Easy Access to Your Gaming Account',
    slug: 'dhan-7-login-secure-easy-access',
    metaTitle: 'Dhan 7 Login - Secure & Easy Access to Dhan 7 Game Account',
    metaDescription: 'Learn how to login to Dhan 7 account securely. Step-by-step Dhan 7 login guide, troubleshooting tips, and account security best practices.',
    keywords: ['dhan 7 login', 'dhan 7 account', 'dhan 7 sign in', 'dhan 7 game login', 'dhan 7 account access'],
  },
  {
    file: 'content5.md',
    title: 'Dhan 7 Bonus - Complete Guide to Dhan 7 Game Bonus Offers',
    slug: 'dhan-7-bonus-complete-guide-offers',
    metaTitle: 'Dhan 7 Bonus - Complete Guide to Dhan 7 Game Bonus Offers 2026',
    metaDescription: 'Complete guide to Dhan 7 bonus offers. Learn about welcome bonus, deposit bonus, referral rewards, and how to claim Dhan 7 game bonuses smartly.',
    keywords: ['dhan 7 bonus', 'dhan 7 game bonus', 'dhan 7 welcome bonus', 'dhan 7 referral bonus', 'dhan 7 offers'],
  },
]

async function addContentBlogs() {
  console.log('🚀 Starting to add content blogs...\n')

  for (const content of contentFiles) {
    try {
      // Check if slug already exists
      const exists = await slugExists(content.slug)
      if (exists) {
        console.log(`⏭️  Skipping "${content.title}" - slug already exists`)
        continue
      }

      // Read the markdown file
      const filePath = join(process.cwd(), content.file)
      const markdown = readFileSync(filePath, 'utf-8')

      // Remove the URL line at the top if it exists
      const cleanMarkdown = markdown.replace(/^<https:\/\/www\.dhan7\.xyz\/[^>]*>\n\n/, '')

      // Insert the blog post
      const post = await insertPost({
        title: content.title,
        slug: content.slug,
        content_md: cleanMarkdown,
        meta_title: content.metaTitle,
        meta_description: content.metaDescription,
        keywords: content.keywords,
      })

      console.log(`✅ Added: "${content.title}"`)
      console.log(`   Slug: ${content.slug}`)
      console.log(`   ID: ${post.id}\n`)
    } catch (error) {
      console.error(`❌ Error adding "${content.title}":`, error)
    }
  }

  console.log('✨ Done! All content blogs have been processed.')
}

// Run the script
addContentBlogs().catch((error) => {
  console.error('Fatal error:', error)
  process.exit(1)
})
