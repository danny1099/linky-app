import { prisma } from '@/lib/prisma'
import { redirect, notFound } from 'next/navigation'
import { headers } from 'next/headers'
import { UAParser } from 'ua-parser-js'

interface PageProps {
  params: {
    shortCode: string
  }
}

export default async function RedirectPage({ params }: PageProps) {
  const { shortCode } = await params

  // Find the URL
  const url = await prisma.url.findUnique({
    where: { shortCode },
  })

  if (!url) {
    notFound()
  }

  if (!url.isActive) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-2'>Link Inactive</h1>
          <p className='text-gray-600 text-sm'>This short URL is currently inactive.</p>
        </div>
      </div>
    )
  }

  // Track the click
  const headersList = await headers()
  const userAgent = headersList.get('user-agent') || ''
  const referer = headersList.get('referer')
  const forwarded = headersList.get('x-forwarded-for')
  const ipAddress = forwarded ? forwarded.split(',')[0].trim() : 'unknown'

  const parser = new UAParser(userAgent)
  const device = parser.getResult()

  // Record the click asynchronously
  prisma.click
    .create({
      data: {
        urlId: url.id,
        ipAddress,
        userAgent,
        referer,
      },
    })
    .catch(console.error)

  // Redirect to the original URL
  redirect(url.originalUrl)
}
