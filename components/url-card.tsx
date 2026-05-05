'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Copy, ExternalLink, QrCode, BarChart3, Trash2, Eye, EyeOff, Edit } from 'lucide-react'
import { toast } from 'sonner'
import { deleteUrl } from '@/actions/url-actions'
import Link from 'next/link'
import { format } from 'date-fns'

interface UrlCardProps {
  url: {
    id: string
    originalUrl: string
    shortCode: string
    customCode: string | null
    title: string | null
    description: string | null
    isActive: boolean
    createdAt: Date
    _count: {
      clicks: number
    }
  }
}

export function UrlCard({ url }: UrlCardProps) {
  const [isDeleting, setIsDeleting] = useState(false)
  const shortUrl = `${window.location.origin}/${url.shortCode}`

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Copied to clipboard!', {
        description: 'Short URL ready to paste',
      })
    } catch (err) {
      toast.error('Failed to copy')
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this URL?')) return

    setIsDeleting(true)
    try {
      await deleteUrl(url.id)
      toast.success('URL deleted successfully')
    } catch (error) {
      toast.error('Failed to delete URL')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Card className='group hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200 bg-white'>
      <CardHeader className='pb-3'>
        <div className='flex items-start justify-between gap-3'>
          <div className='flex-1 min-w-0'>
            <CardTitle className='text-base font-bold truncate text-gray-900'>{url.title || 'Untitled'}</CardTitle>
            <CardDescription className='mt-1 text-xs truncate text-gray-500'>
              {url.description || url.originalUrl}
            </CardDescription>
          </div>
          <div className='flex items-center gap-1 ml-2 shrink-0'>
            {url.isActive ? (
              <Badge variant='default' className='bg-green-100 text-green-700 border-green-200 hover:bg-green-100'>
                <Eye className='w-3 h-3 mr-1' />
                Active
              </Badge>
            ) : (
              <Badge variant='secondary' className='bg-gray-100 text-gray-700 hover:bg-gray-100'>
                <EyeOff className='w-3 h-3 mr-1' />
                Inactive
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className='space-y-4'>
        {/* Short URL */}
        <div className='flex items-center gap-2 p-3 bg-blue-50 rounded-lg border border-blue-100'>
          <code className='flex-1 text-sm font-mono text-blue-700 truncate'>
            {shortUrl}
          </code>
          <Button
            size='sm'
            variant='ghost'
            onClick={() => copyToClipboard(shortUrl)}
            className='h-8 w-8 p-0 hover:bg-blue-100 shrink-0'
          >
            <Copy className='h-4 w-4' />
          </Button>
        </div>

        {/* Stats */}
        <div className='flex items-center justify-between text-xs text-gray-600'>
          <span className='flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 rounded-md'>
            <BarChart3 className='w-4 h-4 text-blue-600' />
            <span className='font-medium'>{url._count.clicks} clicks</span>
          </span>
          <span className='text-gray-400'>Created {format(url.createdAt, 'MMM d, yyyy')}</span>
        </div>

        {/* Actions */}
        <div className='flex items-center gap-2 pt-2 border-t border-gray-100'>
          <Button size='sm' variant='outline' asChild className='flex-1 hover:bg-gray-50'>
            <Link href={`/dashboard/analytics/${url.id}`}>
              <BarChart3 className='w-4 h-4 mr-2' />
              Analytics
            </Link>
          </Button>

          <Button size='sm' variant='outline' asChild className='hover:bg-gray-50'>
            <Link href={`/dashboard/qr/${url.id}`}>
              <QrCode className='w-4 h-4' />
            </Link>
          </Button>

          <Button size='sm' variant='outline' asChild className='hover:bg-gray-50'>
            <Link href={`/dashboard/edit/${url.id}`}>
              <Edit className='w-4 h-4' />
            </Link>
          </Button>

          <Button
            size='sm'
            variant='outline'
            onClick={() => window.open(shortUrl, '_blank')}
            className='hover:bg-gray-50'
          >
            <ExternalLink className='w-4 h-4' />
          </Button>

          <Button
            size='sm'
            variant='outline'
            onClick={handleDelete}
            disabled={isDeleting}
            className='text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 hover:border-red-300'
          >
            <Trash2 className='w-4 h-4' />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
