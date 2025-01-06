import { router, privateProcedure } from '@/server/trpc'
import { linkFormSchema } from '@/modules/links/schemas'
import { shortenUrl } from '@/modules/links/utils'
import { prisma } from '@/lib/database/prisma'

export const linkRouter = router({
  getLinks: privateProcedure.query(async () => {
    return []
  }),

  newLink: privateProcedure.input(linkFormSchema).mutation(async (opts) => {
    const { input } = opts
    const { title, longUrl, slug, temporal, qr: withQr } = input

    const link = await prisma.links.create({
      data: {
        title,
        original_url: longUrl,
        short_url: shortenUrl(),
        slug,
        qr: withQr ? 'https://api.qrserver.com/v1/create-qr-code/?data=' + longUrl : '',
        owner_id: 'danny-alexander',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })

    return link
  })
})
