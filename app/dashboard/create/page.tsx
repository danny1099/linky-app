import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UrlForm } from '@/components/url-form'
import { ArrowLeft } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function CreateUrlPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/api/auth/login')
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
              <h1 className='text-2xl font-bold text-gray-900'>Create Short URL</h1>
              <p className='text-gray-600 text-sm'>
                Transform your long URL into a short, shareable link
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className='container mx-auto px-4 py-8'>
        <UrlForm />
      </main>
    </div>
  )
}
