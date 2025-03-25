import { ComponentPropsWithoutRef, CSSProperties, FC } from 'react'
import { cn } from '@/modules/common/utils'

export interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<'span'> {
  shimmerWidth?: number
}

/* prettier-ignore */
export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 100,
  ...props
}) => {
  return (
    <span 
      {...props}  
      style={{'--shiny-width': `${shimmerWidth}px`} as CSSProperties}
      className={cn('mx-auto max-w-md', 'animate-shiny-text bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shiny-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]', 'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80', className)}
    >
      {children}
    </span>
  )
}
