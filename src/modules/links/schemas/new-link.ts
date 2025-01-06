import { z } from 'zod'

export const linkFormSchema = z.object({
  title: z.string({ message: 'Title is required.' }).nonempty(),
  longUrl: z.string().url({ message: 'Please enter a valid URL' }).nonempty(),
  slug: z.string().optional(),
  temporal: z.boolean().optional(),
  qr: z.boolean().optional()
})

export type NewLink = keyof z.infer<typeof linkFormSchema>
