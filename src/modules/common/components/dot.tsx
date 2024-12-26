import { cn } from '@/modules/common/utils'

interface Props {
  className?: string
}

export const Dot = ({ className }: Props) => {
  return (
    <span className={cn('size-3 rounded-full bg-emerald-600 ring-1 ring-white ring-offset-1', className)} />
  )
}
