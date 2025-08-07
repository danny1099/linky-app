'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Link, Zap } from 'lucide-react'
import { createShortUrl, updateUrl } from '@/actions/url-actions'

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
  const [isCustom, setIsCustom] = useState(!!url?.customCode)

  return (
    <Card className='w-full max-w-2xl mx-auto'>
      <CardHeader>
        <CardTitle className='flex items-center gap-2'>
          <Link className='w-5 h-5' />
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
          className='space-y-6'>
          {!isEdit && (
            <div className='space-y-2'>
              <Label htmlFor='originalUrl'>Original URL*</Label>
              <Input
                id='originalUrl'
                name='originalUrl'
                type='url'
                placeholder='https://example.com/very-long-url'
                defaultValue={url?.originalUrl}
                required
                className='h-12'
              />
            </div>
          )}

          <div className='space-y-2'>
            <Label htmlFor='title'>Title</Label>
            <Input
              id='title'
              name='title'
              placeholder='My awesome link'
              defaultValue={url?.title || ''}
              className='h-12'
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Brief description of this link...'
              defaultValue={url?.description || ''}
              rows={3}
            />
          </div>

          {!isEdit && (
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <Label htmlFor='custom-toggle' className='text-sm font-medium'>
                  Custom short code
                </Label>
                <Switch id='custom-toggle' checked={isCustom} onCheckedChange={setIsCustom} />
              </div>

              {isCustom && (
                <div className='space-y-2'>
                  <Label htmlFor='customCode'>Custom Code</Label>
                  <div className='flex items-center gap-2'>
                    <span className='text-sm text-gray-500'>
                      {typeof window !== 'undefined' && window.location.origin}/
                    </span>
                    <Input
                      id='customCode'
                      name='customCode'
                      placeholder='my-link'
                      defaultValue={url?.customCode || ''}
                      pattern='^[a-zA-Z0-9-_]+$'
                      title='Only letters, numbers, hyphens, and underscores allowed'
                      className='h-12'
                    />
                  </div>
                </div>
              )}
            </div>
          )}

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

          <Button type='submit' className='w-full h-12 text-sm'>
            <Zap className='w-4 h-4 mr-2' />
            {isEdit ? 'Update URL' : 'Shorten URL'}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
