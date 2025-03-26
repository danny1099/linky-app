import { z } from 'zod'

export const authSchema = z.object({
  email: z.string().nonempty({ message: 'form/required' }).email({ message: 'form/invalid_email' })
})

export const authProviderSchema = z.object({ provider: z.enum(['google']) })
export type KeyAuth = keyof z.infer<typeof authSchema>
