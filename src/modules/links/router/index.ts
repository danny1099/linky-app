/* @ts-ignore */
import ipApi from 'ipapi.co'
import { prisma } from '@/lib/database'
import { TRPCError } from '@trpc/server'
import { router, privateProcedure } from '@/server/trpc'
import { linkFormSchema, searchByIdSchema, searchByUrlSchema } from '@/modules/links/schemas'
import { IpLocation } from '../types'

export const linkRouter = router({
  findByUserLinks: privateProcedure.query(async () => {
    const links = await prisma.links.findMany({ where: { owner_id: 'danny-alexander' } })

    if (!links) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Links not found'
      })
    }

    return links
  }),

  createNewLink: privateProcedure.input(linkFormSchema).mutation(async (opts) => {
    const { input } = opts
    const { title, longUrl, slug, shortUrl, temporal, qr: withQr } = input

    /* date for timeLapse and createdAt */
    const newDate = new Date()
    const timeLapse = temporal ? new Date(newDate.getTime() + 7 * 24 * 60 * 60 * 1000) : undefined
    const path = slug ? slug : shortUrl

    /* check if slug already exists */
    if (slug) {
      const existingLink = await prisma.links.findFirst({ where: { slug } })
      if (existingLink) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'Slug already exists'
        })
      }
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

  findByIdLink: privateProcedure.input(searchByIdSchema).query(async (opts) => {
    const { input } = opts
    const { id } = input

    const findIdLink = await prisma.links.findUnique({ where: { id } })

    if (!findIdLink) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Link not found'
      })
    }

    return findIdLink
  }),

  createVisitByUrl: privateProcedure.input(searchByUrlSchema).mutation(async (opts) => {
    const { input } = opts
    const { shortUrl: urlProvided, mode, device } = input

    /* check if short url exists */
    const findIdLink = await prisma.links.findFirst({
      where: {
        OR: [{ short_url: urlProvided }, { slug: urlProvided }],
        AND: {
          OR: [{ timeLapse: null }, { timeLapse: { lte: new Date() } }]
        }
      },
      select: { original_url: true, id: true }
    })

    if (!findIdLink) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'Link not found'
      })
    }

    /* get user location and data for analysis */
    const getDataIpLocation = async (location: any) => await newVisit(location)
    await ipApi.location(getDataIpLocation)

    /* create visit for link */
    const newVisit = async (location: IpLocation) => {
      return await prisma.clicks.create({
        data: {
          linkId: findIdLink.id,
          mode: mode,
          device: device,
          ip: location.ip,
          city: location.city,
          country: location.country_name,
          languages: location.languages,
          latitude: location.latitude,
          longitude: location.longitude,
          createdAt: new Date()
        }
      })
    }
    return { ...newVisit, original_url: findIdLink.original_url }
  })
})
