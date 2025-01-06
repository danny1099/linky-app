'use client'
import { useMediaQuery, useIsClient } from 'usehooks-ts'
import { Icon, Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'
import { Menu } from '@/modules/private/components'

interface Props {
  className?: string
}

/* prettier-ignore */
export const MenuButton = ({className}: Props) => {
  const isMounted = useIsClient()
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMounted) return null
  if (!isMobile) return null

  return (
    <Sheet>
      <SheetTrigger asChild className={cn("absolute left-4 flex size-10 max-h-10 max-w-10 items-center", className)}>
        <button className="size-10 shrink-0 md:hidden">
          <Icon name="menu" className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="left" aria-describedby="">
        <SheetTitle />
        <Menu />
      </SheetContent>
    </Sheet>
  )
}
