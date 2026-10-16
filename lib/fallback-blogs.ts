import fs from 'fs'
import path from 'path'
import type { BlogPost } from './types'

function readContent(fileName: string): string {
  try {
    const filePath = path.join(process.cwd(), fileName)
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8')
    }
  } catch (e) {
    console.warn(`Could not read ${fileName}:`, e)
  }
  return `# Dhan7 Official Guide\n\nWelcome to Dhan7 on dhan7.win.`
}

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Play Smart & Win Big with Dhan 7 - Complete Gaming Guide',
    slug: 'play-smart-win-big-dhan-7-complete-guide',
    meta_title: 'Play Smart & Win Big with Dhan 7 | Complete Gaming Guide 2026',
    meta_description:
      'Discover how to play smart and win big with Dhan 7. Complete guide to Dhan 7 gaming app, features, download, and earning opportunities on dhan7.win.',
    keywords: ['dhan7', 'dhan 7', 'dhan 7 app', 'dhan 7 gaming', 'play dhan 7', 'win with dhan 7', 'dhan 7 download'],
    content_md: readContent('content1.md'),
    created_at: new Date('2026-04-10T10:00:00Z'),
  },
  {
    id: 2,
    title: 'Dhan 7 Reviews 2026 - Complete Guide & Reality Check',
    slug: 'dhan-7-reviews-complete-guide-reality-check',
    meta_title: 'Dhan 7 Reviews 2026 - Complete Guide, Features & Reality Check',
    meta_description:
      'Honest Dhan 7 reviews 2026. Complete guide to Dhan 7 game reviews, features, pros & cons, safety concerns. Is Dhan 7 legit or risky? Read before downloading.',
    keywords: ['dhan7 review', 'dhan 7 reviews', 'dhan 7 game reviews', 'is dhan 7 safe', 'dhan 7 legit', 'dhan 7 real or fake'],
    content_md: readContent('content2.md'),
    created_at: new Date('2026-04-12T10:00:00Z'),
  },
  {
    id: 3,
    title: 'Dhan 7 APK Download - Get the Latest Dhan 7 App Now',
    slug: 'dhan-7-apk-download-latest-app',
    meta_title: 'Dhan 7 APK Download - Get the Latest Dhan 7 App Now (2026)',
    meta_description:
      'Download Dhan 7 APK latest version. Fast and easy Dhan 7 app download guide. Get the official Dhan 7 APK for Android and start playing instantly on dhan7.win.',
    keywords: ['dhan7 apk download', 'dhan 7 apk download', 'dhan 7 app download', 'download dhan 7', 'dhan 7 apk'],
    content_md: readContent('content3.md'),
    created_at: new Date('2026-04-14T10:00:00Z'),
  },
  {
    id: 4,
    title: 'Dhan 7 Login - Secure & Easy Access to Your Gaming Account',
    slug: 'dhan-7-login-secure-easy-access',
    meta_title: 'Dhan 7 Login - Secure & Easy Access to Dhan 7 Game Account',
    meta_description:
      'Learn how to login to Dhan 7 account securely. Step-by-step Dhan 7 login guide, troubleshooting tips, and account security best practices on dhan7.win.',
    keywords: ['dhan7 login', 'dhan 7 login', 'dhan 7 account', 'dhan 7 sign in', 'dhan 7 game login'],
    content_md: readContent('content4.md'),
    created_at: new Date('2026-04-16T10:00:00Z'),
  },
  {
    id: 5,
    title: 'Dhan 7 Bonus - Complete Guide to Dhan 7 Game Bonus Offers',
    slug: 'dhan-7-bonus-complete-guide-offers',
    meta_title: 'Dhan 7 Bonus - Complete Guide to Dhan 7 Game Bonus Offers 2026',
    meta_description:
      'Complete guide to Dhan 7 bonus offers. Learn about welcome bonus, deposit bonus, referral rewards, and how to claim Dhan 7 game bonuses smartly on dhan7.win.',
    keywords: ['dhan7 bonus', 'dhan 7 bonus', 'dhan 7 game bonus', 'dhan 7 welcome bonus', 'dhan 7 referral bonus'],
    content_md: readContent('content5.md'),
    created_at: new Date('2026-04-18T10:00:00Z'),
  },
]
