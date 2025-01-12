import Link, { LinkProps } from 'next/link'
import { VariantProps } from 'class-variance-authority'
import { ctaVariants } from '@/modules/common/styles'
import { cn } from '@/modules/common/utils'
import { Icon } from './icon'

interface Props extends LinkProps, VariantProps<typeof ctaVariants> {
  children: React.ReactNode
  icon?: string
  direction?: 'start' | 'end'
  className?: string
}

/* prettier-ignore */
export const Navlink = ({ children, variant, size, icon, direction = 'start', className, ...props }: Props) => {
  return (
    <Link {...props} className={cn(ctaVariants({ variant, size, className }), direction === 'start' ? 'flex-row' : 'flex-row-reverse')}>
      {icon && <Icon name={icon} className="size-4" />}
      {children}
    </Link>
  )
}
