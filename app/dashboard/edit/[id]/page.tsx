import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UrlForm } from '@/components/url-form'
import { ArrowLeft } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EditUrlPage({ params }: PageProps) {
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
  })

  if (!url) {
    notFound()
  }

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white'>
        <div className='container mx-auto px-4 py-3'>
          <div className='flex items-center gap-4'>
            <Button variant='ghost' size='sm' asChild>
              <Link href='/dashboard'>
                <ArrowLeft className='w-4 h-4 mr-2' />
                Back
              </Link>
            </Button>
            <div>
              <h1 className='text-2xl font-bold text-gray-900'>Edit URL</h1>
              <p className='text-gray-600 text-sm'>Update your shortened URL settings</p>
            </div>
          </div>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <UrlForm url={url} isEdit />
      </main>
    </div>
  )
}
