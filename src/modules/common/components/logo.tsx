import { cn } from '@/modules/common/utils'
import { Brand } from './brand'

interface LogoProps {
  showName?: boolean
  className?: string
}

export const Logo = ({ showName = true, className }: LogoProps) => {
  return (
    <picture className={cn('flex h-10 w-fit items-center justify-center gap-x-2', className)}>
      <source srcSet="/images/img-linky-app-dark.svg" media="(prefers-color-scheme: dark)" />
      <img
        src="/images/img-linky-app.svg"
        alt="Logo of linky Url Shortener"
        height={32}
        width={32}
        className="aspect-square size-full object-contain"
        loading="eager"
      />
      {showName && <Brand />}
    </picture>
  )
}
