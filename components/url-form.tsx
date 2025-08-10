'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Zap } from 'lucide-react'
import { createShortUrl, updateUrl } from '@/actions/url-actions'
import Link from 'next/link'

interface UrlFormProps {
  url?: {
    id: string
    originalUrl: string
    shortCode: string
    customCode: string | null
    title: string | null
    description: string | null
    isActive: boolean
  }
  isEdit?: boolean
}

export function UrlForm({ url, isEdit = false }: UrlFormProps) {
  return (
    <Card className='w-full md:max-w-lg mx-auto'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          {isEdit ? 'Edit URL' : 'Shorten URL'}
        </CardTitle>
        <CardDescription>
          {isEdit
            ? 'Update your shortened URL settings'
            : 'Transform your long URL into a short, shareable link'}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          action={isEdit ? updateUrl.bind(null, url!.id) : createShortUrl}
          className='space-y-4'>
          <div>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              name='title'
              placeholder='My awesome link'
              defaultValue={url?.title || ''}
              className='h-10'
            />
          </div>
          <div>
            <Label htmlFor='originalUrl'>Original URL*</Label>
            <Input
              id='originalUrl'
              name='originalUrl'
              type='url'
              placeholder='https://example.com/very-long-url'
              defaultValue={url?.originalUrl}
              required
              className='h-10'
            />
          </div>
          <div className='flex flex-col gap-1'>
            <Label htmlFor='customCode'>Custom Link</Label>
            <div className='flex items-center gap-1'>
              <span className='items-center rounded-md border border-border bg-secondary p-2 h-10 w-3/4 flex text-xs font-medium text-foreground'>
                {typeof window !== 'undefined' && window.location.origin}/
              </span>
              <Input
                id='customCode'
                name='customCode'
                placeholder='my-link'
                defaultValue={url?.customCode || ''}
                pattern='^[a-zA-Z0-9-_]+$'
                title='Only letters, numbers, hyphens, and underscores allowed'
                className='h-10 w-full'
              />
            </div>
          </div>
          <div>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Brief description of this link...'
              defaultValue={url?.description || ''}
              rows={3}
            />
          </div>

          {isEdit && (
            <div className='flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg'>
              <div>
                <Label htmlFor='isActive' className='text-sm font-medium'>
                  Active Status
                </Label>
                <p className='text-xs text-gray-600 dark:text-gray-400'>
                  Inactive links will show an error page
                </p>
              </div>
              <Switch id='isActive' name='isActive' defaultChecked={url?.isActive} />
            </div>
          )}

          <Button type='submit' className='w-full h-12 text-xs'>
            <Zap className='w-4 h-4 mr-2' />
            {isEdit ? 'Update URL' : 'Shorten URL'}
          </Button>
          <Button variant='outline' asChild>
            <Link href='/dashboard' className='flex flex-row items-center w-full text-xs'>
              Cancel
            </Link>
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
