import { JSX } from 'react'
import { Logo, ThemeToggle, Divider, LangToggle } from '@/modules/common/components'
import { cn } from '../utils'

interface Props {
  child?: JSX.Element
  className?: string
}

/* prettier-ignore */
export const Topbar = ({ child, className }: Props) => {
  return (
    <header className={cn('flex h-16 flex-row items-center justify-between bg-background px-4 md:px-20', className)}>
      <Logo />
      <div className="flex h-full flex-row items-center gap-x-3">
        <LangToggle />
        <ThemeToggle />
        <Divider className="h-6" />

        {child}
      </div>
    </header>
  )
}
