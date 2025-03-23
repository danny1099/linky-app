import { cn } from '@/modules/common/utils'

interface Props extends Children {
  className?: string
}

/* prettier-ignore */
export const Circle = ({ children, className }: Props) => {
  return (
    <div className={cn('flex size-7 flex-row items-center justify-center rounded-full bg-accent', className)}>
      {children}
    </div>
  )
}
