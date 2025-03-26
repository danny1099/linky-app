import { z } from 'zod'

export const authSchema = z.object({
  email: z.string().nonempty({ message: 'form/required' }).email({ message: 'form/invalid_email' }),
  password: z.string().nonempty({ message: 'form/required' }).min(8, { message: 'form/invalid_password' })
})

export const authProviderSchema = z.object({ provider: z.enum(['google']) })
export type KeyAuth = keyof z.infer<typeof authSchema>
