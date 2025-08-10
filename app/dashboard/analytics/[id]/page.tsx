import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AnalyticsChart } from '@/components/analytics-chart'
import { ArrowLeft } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function AnalyticsPage({ params }: PageProps) {
  const user = await getCurrentUser()
  const { id } = await params

  if (!user) {
    redirect('/api/auth/login')
  }

  const url = await prisma.url.findFirst({
    where: {
      id,
      userId: user.id,
    },
    include: {
      clicks: {
        orderBy: { createdAt: 'desc' },
      },
    },
  })

  if (!url) {
    notFound()
  }

  return (
    <main className='container mx-auto px-4'>
      <div className='p-2 flex items-center justify-between'>
        <Link href='/dashboard'>
          <Button variant='ghost'>
            <ArrowLeft className='mr-2 h-4 w-4' />
            Back
          </Button>
        </Link>
        <div className='text-right'>
          <h1 className='text-xl font-bold text-gray-900'>Analytics</h1>
          <p className='text-gray-600 text-xs'>
            Detailed insights for:
            <span className='font-semibold'>{url.title || url.shortCode}</span>
          </p>
        </div>
      </div>
      <AnalyticsChart clicks={url.clicks} totalClicks={url.clicks.length} />
    </main>
  )
}

export const metadata = {
  title: 'Analytics | Linky URL Shortener',
  description:
    'Detailed analytics for your URLs with Linky. Track clicks, locations, and engagement.',
}
