import { Logo } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props {
  child?: Children
  className?: string
}

export const Topbar = ({ child, className }: Props) => {
  return (
    <nav className={cn('flex h-20 flex-row items-center px-4 py-2 md:px-24', className)}>
      <Logo />
      {child && <>{child}</>}
    </nav>
  )
}
