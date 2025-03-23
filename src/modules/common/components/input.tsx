import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { inputVariants } from '@/modules/common/variants'
import { Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  slot?: 'start' | 'end'
  icon?: string
  isBordered?: boolean
}

/* prettier-ignore */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, sizes, type, slot = 'end', icon, isBordered = false, ...props }, ref) => {
    return (
      <div className={cn(inputVariants({ variant, sizes }), slot === 'start' ? 'flex-row gap-x-3' : 'flex-row-reverse', isBordered && 'border border-input', className)}>
        {icon && <Icon name={icon} className="size-4" />}
        <input
          {...props}
          ref={ref}
          type={type}
          autoComplete='off'
          className={cn('bg-transparent flex h-10 w-full text-xs outline-none focus:outline-none placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-70 autofill:bg-transparent')}
        />
      </div>
    )
  }
)
