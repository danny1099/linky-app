import { z } from 'zod'

export const linkFormSchema = z.object({
  title: z.string({ message: 'Title is required.' }).nonempty(),
  longUrl: z.string().url({ message: 'Please enter a valid URL' }).nonempty(),
  shortUrl: z.string().optional(),
  slug: z.string().min(0).max(6, { message: 'Custom link must be between 2 and 6 characters' }).optional(),
  temporal: z.boolean().optional(),
  qr: z.boolean().optional(),
  qrLink: z.string().optional()
})

export type NewLink = keyof z.infer<typeof linkFormSchema>
