import { publicProcedure, router } from '@/server/trpc'
import { linkRouter } from '@/modules/links/router'

export const appRouter = router({
  held: publicProcedure.query(() => 'server trpc is running!'),
  link: linkRouter
})

export type AppRouter = typeof appRouter
