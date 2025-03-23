import 'server-only'
import { cache } from 'react'
import { headers } from 'next/headers'
import { createHydrationHelpers } from '@trpc/react-query/rsc'
import { createCaller, createTRPCContext, appRouter, type AppRouter } from '@/server'
import { createQueryClient } from '@/server/client'

const createContext = cache(async () => {
  const heads = new Headers(await headers())
  heads.set('x-trpc-source', 'rsc')

  return createTRPCContext({
    headers: heads
  })
})

const getQueryClient = cache(createQueryClient)
const caller = createCaller(appRouter)
const trpc = caller(createContext)

export const { trpc: api, HydrateClient } = createHydrationHelpers<AppRouter>(trpc, getQueryClient)
