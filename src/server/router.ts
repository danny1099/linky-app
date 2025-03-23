import { procedure, router } from '@/server/trpc'

export const appRouter = router({
  health: procedure.query(() => 'Server is healthy!')
})

export type AppRouter = typeof appRouter
