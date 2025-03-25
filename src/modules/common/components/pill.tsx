import { cn } from '@/modules/common/utils'
import { Icon } from './icon'
import { AnimatedShinyText } from './shiny-text'

interface PillProps {
  text: string
  icon?: string
  className?: string
}

/* prettier-ignore */
export const Pill = ({ text, icon, className }: PillProps) => {
  return (
    <div className={cn('text-muted-foreground flex max-w-fit items-center justify-center space-x-2 rounded-full border border-accent bg-muted px-7 py-2 backdrop-blur transition ease-out dark:bg-secondary', className )}>
      <AnimatedShinyText className="text-xs font-medium text-muted-foreground">✨ {text}</AnimatedShinyText>
      {icon && <Icon name={icon} className="size-4" />}
    </div>
  )
}
