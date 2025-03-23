import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { ctaVariants } from '@/modules/common/variants'
import { Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ctaVariants> {
  asChild?: boolean
  isLoading?: boolean
  icon?: string
  slot?: 'start' | 'end'
}

/* prettier-ignore */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ( { children, className, variant, size, asChild = false, icon, isLoading, slot = 'end', ...props }, ref ) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(ctaVariants({ variant, size, className }))}
        disabled={isLoading}
      >
        <div className={cn('flex flex-row items-center gap-x-2', slot === "start" ? 'flex-row' : 'flex-row-reverse')}>
          { icon && (<Icon name={isLoading ? 'arrow-clockwise' : icon } className={cn('size-5', isLoading && 'animate-spin')}/>)}
          { children }
        </div>
      </Comp>
    )
  }
)
