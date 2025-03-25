import Link, { LinkProps } from 'next/link'
import { VariantProps } from 'class-variance-authority'
import { ctaVariants } from '@/modules/common/variants'
import { Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props extends LinkProps, VariantProps<typeof ctaVariants> {
  children: React.ReactNode
  icon?: string
  slot?: 'start' | 'end'
  className?: string
  isLoading?: boolean
}

/* prettier-ignore */
export const Navlink = ({ children, variant, size, icon, slot = 'start', isLoading, className, ...props }: Props) => {
  return (
    <Link {...props} className={cn(ctaVariants({ variant, size, className }), slot === 'start' ? 'flex-r' : 'flex-row-reverse')}>
      {icon && <Icon name={isLoading ? 'arrow-clockwise' : icon} className="size-4" />}
      {children}
    </Link>
  )
}
