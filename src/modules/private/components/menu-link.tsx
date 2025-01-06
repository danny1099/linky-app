'use client'
import { usePathname } from 'next/navigation'
import { Navlink, Icon } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props {
  children: React.ReactNode
  route: string
  icon: string
  className?: string
}

/* prettier-ignore */
export const Link = ({ children, route, icon, className }: Props) => {
  const pathname = usePathname()

  return (
    <Navlink href={route} variant="link" className={cn('px-3 h-10 w-full',pathname.includes(route) && 'bg-secondary text-tertiary hover:bg-secondary hover:text-tertiary', className)}>
      {icon && <Icon name={icon} className="size-4" />} 
      <span className="text-xs font-normal">{children}</span>
    </Navlink>
  )
}
