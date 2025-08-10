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
    <main className='container mx-auto p-4'>
      <UrlForm url={url} isEdit />
    </main>
  )
}

export const metadata = {
  title: 'Edit URL | Linky URL Shortener',
  description:
    'Update and manage your URLs with Linky. Transform long URLs into short, shareable links.',
}
