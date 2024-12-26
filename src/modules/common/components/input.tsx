import * as React from 'react'
import { cn } from '@/modules/common/utils'
import { Icon } from './icon'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  slot?: 'start' | 'end'
  icon?: string
  isBordered?: boolean
}

/* prettier-ignore */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, slot = 'end', icon, isBordered = false, ...props }, ref) => {
    return (
      <div className={cn('w-full flex items-center rounded-xl bg-background text-foreground px-3 py-2 h-10', slot === 'start' ? 'flex-row gap-x-2' : 'flex-row-reverse', isBordered && 'border border-input', className)}>
        {icon && <Icon name={icon} className="size-4" />}
        <input
          {...props}
          ref={ref}
          type={type}
          className={cn('bg-transparent flex h-10 w-full text-xs outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-foreground-muted disabled:cursor-not-allowed disabled:opacity-70')}
        />
      </div>
    )
  }
)
