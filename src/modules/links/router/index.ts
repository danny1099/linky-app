import { z } from 'zod'
import { prisma } from '@/lib/database'
import { linkFormSchema } from '@/modules/links/schemas'
import { router, privateProcedure } from '@/server/trpc'

export const linkRouter = router({
  getLinks: privateProcedure.query(async () => {
    return []
  }),

  newLink: privateProcedure.input(linkFormSchema).mutation(async (opts) => {
    const { input } = opts
    const { title, longUrl, slug, shortUrl, temporal, qr: withQr } = input
    const path = slug ? slug : shortUrl

    /* date for timeLapse and createdAt */
    const newDate = new Date()
    const timeLapse = temporal ? new Date(newDate.getTime() + 7 * 24 * 60 * 60 * 1000) : undefined

    const existingLink = await prisma.links.findFirst({ where: { slug } })
    if (existingLink) {
      throw new Error('Slug already exists')
    }

    const link = await prisma.links.create({
      data: {
        title,
        original_url: longUrl,
        slug,
        short_url: shortUrl!,
        qr_url: withQr ? `${path}?m=qr` : '',
        owner_id: 'danny-alexander',
        timeLapse: temporal ? timeLapse : undefined,
        createdAt: newDate,
        updatedAt: newDate
      }
    })

    return link
  }),

  createVisit: privateProcedure.input(z.object({ url: z.string(), mode: z.string() })).mutation(async (opts) => {
    const { input } = opts
    const { url, mode } = input

    const existingLink = await prisma.links.findMany({
      where: { OR: [{ short_url: url }, { slug: url }] },
      select: { original_url: true, id: true }
    })

    if (existingLink.length === 0) {
      throw new Error('Link not found')
    }

    const visit = await prisma.clicks.create({
      data: {
        linkId: existingLink[0].id,
        mode: mode === 'qr' ? 'qr' : 'link',
        createdAt: new Date()
      }
    })

    return { ...visit, original_url: existingLink[0].original_url }
  })
})
