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
  const url = `https://www.dhan7.xyz/blog/${slug}`

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
        url: 'https://www.dhan7.xyz/about',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dhan7.xyz',
        url: 'https://www.dhan7.xyz',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.dhan7.xyz/dhan77-logo.png',
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
      image: {
        '@type': 'ImageObject',
        url: 'https://www.dhan7.xyz/dhan77-logo.png',
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
          item: 'https://www.dhan7.xyz',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Blog',
          item: 'https://www.dhan7.xyz/blog',
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
