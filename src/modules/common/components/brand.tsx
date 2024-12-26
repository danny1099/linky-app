import { brandFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/* prettier-ignore */
export const Brand = ({ className,...props }: Props) => {
  return (
    <span {...props} className={cn(`${brandFont.className} text-xl text-foreground font-medium`, className)}>
      linky
    </span>
  )
}
