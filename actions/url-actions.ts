'use server'

import { prisma } from '@/lib/prisma'
import { getCurrentUser } from '@/lib/auth'
import { nanoid } from 'nanoid'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function createShortUrl(formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Unauthorized')
  }

  const originalUrl = formData.get('originalUrl') as string
  const customCode = formData.get('customCode') as string
  const title = formData.get('title') as string
  const description = formData.get('description') as string

  if (!originalUrl) {
    throw new Error('URL is required')
  }

  // Validate URL
  try {
    new URL(originalUrl)
  } catch {
    throw new Error('Invalid URL format')
  }

  let shortCode = customCode || nanoid(4)

  // Check if custom code is available
  if (customCode) {
    const existing = await prisma.url.findUnique({
      where: { shortCode: customCode },
    })
    if (existing) {
      throw new Error('Custom code already taken')
    }
  }

  const url = await prisma.url.create({
    data: {
      originalUrl,
      shortCode,
      customCode: customCode || null,
      title: title || null,
      description: description || null,
      userId: user.id,
    },
  })

  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export async function updateUrl(id: string, formData: FormData) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Unauthorized')
  }

  const title = formData.get('title') as string
  const description = formData.get('description') as string
  const isActive = formData.get('isActive') === 'on'

  await prisma.url.update({
    where: { id, userId: user.id },
    data: {
      title: title || null,
      description: description || null,
      isActive,
    },
  })

  revalidatePath('/dashboard')
  redirect('/dashboard')
}

export async function deleteUrl(id: string) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Unauthorized')
  }

  await prisma.url.delete({
    where: { id, userId: user.id },
  })

  revalidatePath('/dashboard')
}

export async function updateQRConfig(id: string, config: any) {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Unauthorized')
  }

  await prisma.url.update({
    where: { id, userId: user.id },
    data: {
      qrConfig: config,
    },
  })

  revalidatePath('/dashboard')
}
