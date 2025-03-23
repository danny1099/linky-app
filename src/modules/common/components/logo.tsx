import { cn } from '@/modules/common/utils'

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <picture className={cn('flex size-10 items-center justify-center', className)}>
      <source srcSet="/images/img-linky-app-dark.svg" media="(prefers-color-scheme: dark)" />
      <img
        src="/images/img-linky-app.svg"
        alt="Logo of linky Url Shortener"
        height={32}
        width={32}
        className="aspect-square size-full object-contain"
        loading="eager"
      />
    </picture>
  )
}
