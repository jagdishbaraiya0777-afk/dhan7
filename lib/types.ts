export interface BlogPost {
  id: number
  title: string
  slug: string
  content_md: string
  meta_title: string
  meta_description: string
  keywords: string[]
  created_at: Date
}

export type NewBlogPost = Omit<BlogPost, 'id' | 'created_at'>

export interface SelectedKeywords {
  primary: string
  secondary: string[] // length: 3–5
  longTail: string[]  // length: 2
}

export interface FAQ {
  question: string
  answer: string
}

export interface GeneratedPost {
  title: string
  contentMd: string
  faqs: FAQ[]
}

export interface KeywordUsage {
  keyword: string
  used_at: Date
  use_count: number
}
