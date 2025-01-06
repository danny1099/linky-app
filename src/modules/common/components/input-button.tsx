import * as React from 'react'
import { cn } from '@/modules/common/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  slot?: 'start' | 'end'
  isBordered?: boolean
  child?: React.ReactNode
}

/* prettier-ignore */
export const InputWithButton = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, slot = 'end', isBordered = false,child , ...props }, ref) => {
    return (
      <div className={cn('w-full flex flex-row items-center rounded-xl bg-background text-foreground pl-3 py-2 h-10', slot === 'start' ? 'flex-row gap-x-2' : 'flex-row-reverse', isBordered && 'border border-input', className)}>
        <input
          {...props}
          ref={ref}
          type={type}
          className={cn('bg-transparent flex h-10 w-full text-xs outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-70')}
        />
        {child}
      </div>
    )
  }
)
