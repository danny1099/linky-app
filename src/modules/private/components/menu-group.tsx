import { Heading } from '@/modules/common/components'
import { cn } from '@/modules/common/utils'

interface Props {
  children: React.ReactNode
  title: string
  className?: string
}

export const Group = ({ children, title, className }: Props) => {
  return (
    <div className={cn('flex size-full flex-col', className)}>
      <Heading type="h4" className="text-sm font-medium tracking-tight text-foreground">
        {title}
      </Heading>
      <nav className="flex w-full flex-col">{children}</nav>
    </div>
  )
}
