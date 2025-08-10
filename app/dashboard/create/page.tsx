import { UrlForm } from '@/components/url-form'
import { getCurrentUser } from '@/lib/auth'
import { redirect } from 'next/navigation'

export default async function CreateUrlPage() {
  const user = await getCurrentUser()
  if (!user) {
    redirect('/api/auth/login')
  }

  return (
    <main className='container mx-auto p-4'>
      <UrlForm />
    </main>
  )
}

export const metadata = {
  title: 'Shorten URL | Linky URL Shortener',
  description:
    'Create and manage your URLs with Linky. Transform long URLs into short, shareable links.',
}
