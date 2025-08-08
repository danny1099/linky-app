import { Suspense } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Plus, Link as LinkIcon, BarChart3, QrCode, TrendingUp, MousePointer } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { UrlCard } from '@/components/url-card'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

async function DashboardContent() {
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
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white'>
        <div className='container mx-auto px-4 py-3 md:px-8'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>Dashboard</h1>
              <p className='text-gray-600 text-sm -mt-1'>Manage your shortened URLs</p>
            </div>
            <Button asChild>
              <Link href='/dashboard/create'>
                <Plus className='w-4 h-4 mr-2' />
                Create URL
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8 md:px-8'>
        {/* Stats Cards */}
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
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-lg font-semibold text-gray-900'>Your URLs</h2>
            {urls.length > 0 && (
              <p className='text-sm text-gray-600'>
                {urls.length} {urls.length === 1 ? 'URL' : 'URLs'}
              </p>
            )}
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
                    <Plus className='w-4 h-4 mr-2' />
                    Create Your First URL
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
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense
      fallback={
        <div className='min-h-screen bg-gray-50 flex items-center justify-center'>
          <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
        </div>
      }>
      <DashboardContent />
    </Suspense>
  )
}
