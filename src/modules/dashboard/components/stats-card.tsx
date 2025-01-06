import { Badge, Icon } from '@/modules/common/components'
import { baseColors, cn } from '@/modules/common/utils'

interface StatsCardProps {
  title: string
  value: string
  icon: string
  badge?: string
  className?: string
}

/* prettier-ignore */
export const StatsCard = ({ title, value, icon, badge, className }: StatsCardProps) => {
  return (
    <div className={cn('flex h-full w-fit flex-row items-center space-x-2 rounded-md px-3', className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-background">
        <Icon name={icon} className="size-5 text-foreground" />
      </div>
      <div className="flex h-full flex-col justify-center px-2">
        <span className="text-2xl leading-none text-foreground">{value}</span>
        <p className="-mt-0.5 text-2xs text-foreground-muted">{title}</p>
      </div>
      {badge && (
        <Badge
          className={cn('flex items-center gap-x-1',badge.startsWith('-') ? baseColors.red[2] : baseColors.green[2], badge.startsWith('-') ? baseColors.red[0] : baseColors.green[0])}>
          <Icon name={badge.startsWith('-') ? 'arrow-down-right' : 'arrow-up-right'} className="size-3" />
          {badge}
        </Badge>
      )}
    </div>
  )
}
