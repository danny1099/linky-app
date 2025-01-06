'use client'
import React, { useState } from 'react'
import { httpBatchLink } from '@trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { absoluteUrl } from '@/modules/common/utils'
import { api as Trpc } from '@/server/client'

export const TrpcProvider = ({ children }: Children) => {
  const [queryClient] = useState(() => new QueryClient())
  const [trpcClient] = useState(() =>
    Trpc.createClient({
      links: [
        httpBatchLink({
          url: absoluteUrl('/api/trpc')
        })
      ]
    })
  )

  return (
    <Trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Trpc.Provider>
  )
}
