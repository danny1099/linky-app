import { httpBatchLink } from '@trpc/client'
import { absoluteUrl } from '@/modules/common/utils'
import { createCaller } from '@/server/trpc'
import { appRouter } from '@/server/router'

const trpc = createCaller(appRouter)

export const api = trpc({
  links: [
    httpBatchLink({
      url: absoluteUrl('/api/trpc')
    })
  ]
})
