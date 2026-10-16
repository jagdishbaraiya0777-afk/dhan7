import { siteUrl } from '../_lib/siteUrl'

interface FAQ {
  question: string
  answer: string
}

interface BlogSchemaProps {
  title: string
  description: string
  slug: string
  datePublished: string // e.g. "2026-04-01"
  dateModified: string
  authorName: string
  faqs?: FAQ[]
}

export function BlogSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  authorName,
  faqs,
}: BlogSchemaProps) {
  const base = siteUrl()
  const url = `${base}/blog/${slug}`

  const graph: object[] = [
    {
      '@type': 'Article',
      headline: title,
      description: description,
      url: url,
      datePublished: datePublished,
      dateModified: dateModified,
      author: {
        '@type': 'Person',
        name: authorName,
        url: `${base}/about`,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dhan7',
        url: base,
        logo: {
          '@type': 'ImageObject',
          url: `${base}/dhan77-logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      image: {
        '@type': 'ImageObject',
        url: `${base}/dhan77-logo.png`,
        width: 512,
        height: 512,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: base,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: `${base}/blog`,
        },
        { '@type': 'ListItem', position: 3, name: title, item: url },
      ],
    },
  ]

  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    })
  }

  const schema = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
