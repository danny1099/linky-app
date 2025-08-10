import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, Link as LinkIcon, BarChart3, QrCode, TrendingUp, MousePointer } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UrlCard } from '@/components/url-card'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/api/auth/login')
  }

  const urls = await prisma.url.findMany({
    where: { userId: user.id },
    include: {
      _count: {
        select: { clicks: true },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  const totalUrls = urls.length
  const totalClicks = urls.reduce((acc, url) => acc + url._count.clicks, 0)
  const activeUrls = urls.filter((url) => url.isActive).length

  const stats = [
    {
      title: 'Total URLs',
      value: totalUrls.toLocaleString(),
      icon: LinkIcon,
      color: 'text-blue-600',
    },
    {
      title: 'Total Clicks',
      value: totalClicks.toLocaleString(),
      icon: MousePointer,
      color: 'text-green-600',
    },
    {
      title: 'Active URLs',
      value: activeUrls.toLocaleString(),
      icon: TrendingUp,
      color: 'text-indigo-600',
    },
    {
      title: 'Avg. CTR',
      value: totalUrls > 0 ? `${Math.round(totalClicks / totalUrls)}` : '0',
      icon: BarChart3,
      color: 'text-purple-600',
    },
  ]

  return (
    <main className='container  mx-auto p-4 md:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
        {stats.map((stat, index) => (
          <Card key={index} className='bg-white'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium text-gray-600'>{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold text-gray-900'>{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* URLs Grid */}
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-4 rounded-lg py-2'>
          <h2 className='text-lg font-semibold text-gray-900'>Your URLs</h2>
          <Button asChild>
            <Link href='/dashboard/create'>
              Create URL
              <Plus className='w-4 h-4 ml-2' />
            </Link>
          </Button>
        </div>

        {urls.length === 0 ? (
          <Card className='text-center py-12'>
            <CardContent>
              <QrCode className='w-12 h-12 text-gray-400 mx-auto mb-4' />
              <CardTitle className='text-xl mb-2'>No URLs yet</CardTitle>
              <CardDescription className='mb-6'>
                Create your first shortened URL to get started
              </CardDescription>
              <Button asChild>
                <Link href='/dashboard/create'>
                  Create Your First URL
                  <Plus className='w-4 h-4 mr-2' />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {urls.map((url) => (
              <UrlCard key={url.id} url={url} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export const metadata = {
  title: 'Dashboard | Linky URL Shortener',
  description: 'Manage your URLs with Dashboard, review analytics, and create custom QR codes.',
}
