import { brandFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/* prettier-ignore */
export const Brand = ({ className,...props }: Props) => {
  return (
    <span {...props} className={cn("hidden text-foreground mt-1 font-medium md:inline-block md:text-3xl", className, brandFont.className)}>
      linky
    </span>
  )
}
