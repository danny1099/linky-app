import { LangToggle, Logo, ThemeToggle } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props {
  child?: Children
  className?: string
}

export const Topbar = ({ child, className }: Props) => {
  return (
    <nav className={cn('flex h-20 flex-row items-center justify-between px-4 py-2 md:px-24', className)}>
      <Logo />

      <div className="flex h-full w-fit flex-row items-center justify-end gap-x-2">
        <LangToggle />
        <ThemeToggle />
      </div>
    </nav>
  )
}
