import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { QRGenerator } from '@/components/qr-generator'
import { ArrowLeft } from 'lucide-react'
import { getCurrentUser } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{
    id: string
  }>
}

export default async function QRCodePage({ params }: PageProps) {
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
      <QRGenerator url={url} />
    </main>
  )
}

export const metadata = {
  title: 'QR Code Generator | Linky URL Shortener',
  description: 'Generate QR codes for your links with our easy-to-use QR code generator.',
}
