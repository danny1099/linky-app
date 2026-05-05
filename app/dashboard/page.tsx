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
      gradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-100',
      border: 'border-blue-200',
    },
    {
      title: 'Total Clicks',
      value: totalClicks.toLocaleString(),
      icon: MousePointer,
      color: 'text-emerald-600',
      gradient: 'from-emerald-50 to-emerald-100',
      iconBg: 'bg-emerald-100',
      border: 'border-emerald-200',
    },
    {
      title: 'Active URLs',
      value: activeUrls.toLocaleString(),
      icon: TrendingUp,
      color: 'text-indigo-600',
      gradient: 'from-indigo-50 to-indigo-100',
      iconBg: 'bg-indigo-100',
      border: 'border-indigo-200',
    },
    {
      title: 'Avg. CTR',
      value: totalUrls > 0 ? `${Math.round(totalClicks / totalUrls)}%` : '0%',
      icon: BarChart3,
      color: 'text-purple-600',
      gradient: 'from-purple-50 to-purple-100',
      iconBg: 'bg-purple-100',
      border: 'border-purple-200',
    },
  ]

  return (
    <main className='container mx-auto p-4 md:px-8'>
      {/* Stats Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10'>
        {stats.map((stat, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden bg-gradient-to-br ${stat.gradient} ${stat.border} border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}
          >
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-3'>
              <CardTitle className='text-sm font-semibold text-gray-700'>{stat.title}</CardTitle>
              <div className={`p-2 rounded-lg ${stat.iconBg}`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className='text-3xl font-bold text-gray-900 tracking-tight'>{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* URLs Section */}
      <div className='mb-6'>
        <div className='flex items-center justify-between mb-6 rounded-lg py-2'>
          <div className='flex items-center gap-3'>
            <div className='w-1 h-8 bg-blue-600 rounded-full' />
            <h2 className='text-xl font-bold text-gray-900'>Your URLs</h2>
          </div>
          <Button asChild size='sm' className='shadow-sm hover:shadow-md transition-shadow'>
            <Link href='/dashboard/create'>
              <Plus className='w-4 h-4 mr-2' />
              Create URL
            </Link>
          </Button>
        </div>

        {urls.length === 0 ? (
          <Card className='text-center py-14 border-dashed border-2'>
            <CardContent className='flex flex-col items-center'>
              <div className='w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-5'>
                <QrCode className='w-8 h-8 text-gray-400' />
              </div>
              <CardTitle className='text-xl mb-3'>No URLs yet</CardTitle>
              <CardDescription className='mb-6 max-w-xs mx-auto'>
                Create your first shortened URL to start tracking clicks and analytics
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
  )
}

export const metadata = {
  title: 'Dashboard | Linky URL Shortener',
  description: 'Manage your URLs with Dashboard, review analytics, and create custom QR codes.',
}
