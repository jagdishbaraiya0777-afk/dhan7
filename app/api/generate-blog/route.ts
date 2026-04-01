import { runPipeline } from '../../../lib/content-engine'

export async function POST(req: Request) {
  const secret = req.headers.get('authorization')
  if (secret !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const post = await runPipeline()
    return Response.json({ slug: post.slug, title: post.title })
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 500 })
  }
}
