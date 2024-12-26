'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { cn } from '@/modules/common/utils'
import { Brand } from './brand'

interface Props {
  className?: string
}

export const Logo = ({ className }: Props) => {
  const { theme } = useTheme()

  return (
    <Link href="/" className="flex items-center justify-center gap-x-1">
      <img
        src={`/images/${theme === 'dark' ? 'img-linky-d' : 'img-linky-l'}.svg`}
        alt="Logo of linky Url Shortener"
        height={28}
        width={28}
        className={cn('size-7', className)}
        loading="eager"
      />
      <Brand className="mt-1 text-2xl max-sm:hidden" />
    </Link>
  )
}
