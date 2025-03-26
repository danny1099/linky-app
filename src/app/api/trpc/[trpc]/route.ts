import { type NextRequest } from 'next/server'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter, createTRPCContext } from '@/server'

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers
  })
}

const handler = async (req: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    router: appRouter,
    req,
    createContext: () => createContext(req)
  })
}

export { handler as GET, handler as POST }
