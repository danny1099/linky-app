import { JSX } from 'react'
import { Logo, ThemeToggle, Divider, LangToggle } from '@/modules/common/components'

interface Props {
  child?: JSX.Element
}

export const Topbar = ({ child }: Props) => {
  return (
    <header className="flex h-16 flex-row items-center justify-between bg-background px-4 md:px-20">
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
