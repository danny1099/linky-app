import { prisma } from '@/lib/database'

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const userId = 'd5799aa0-8501-4e1b-ad54-d014254ed001'

  return {
    db: prisma,
    userId,
    ...opts
  }
}
