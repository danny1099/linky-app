'use client'
import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { Icon } from '@/modules/common/components'
import { inputVariants } from '@/modules/common/variants'
import { cn } from '@/modules/common/utils'

export interface InputPasswordProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  slot?: 'start' | 'end'
  isBordered?: boolean
}

/* prettier-ignore */
export const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, variant, sizes,  slot = 'end', isBordered = false, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState('password')

    return (
      <div className={cn(inputVariants({ variant, sizes }), slot === 'end' ? 'flex-row gap-x-2' : 'flex-row-reverse', isBordered && 'border border-input', className)}>
        <input
          {...props}
          ref={ref}
          type={showPassword}
          autoComplete='new-password'
          className={cn('bg-transparent flex h-10 w-full text-xs outline-none ring-offset-background focus-visible:outline-none placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-70 autofill:bg-transparent')}
        />
        <button type="button" className="flex h-full w-6 items-center justify-center bg-transparent" onClick={() => setShowPassword(showPassword === 'password' ? 'text' : 'password')}>
          <Icon name={showPassword === 'password' ? 'eye-slash' : 'eye'} className="size-4" />
        </button>
      </div>
    )
  }
)
