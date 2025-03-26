import { type VariantProps } from 'class-variance-authority'
import { dividerVariants } from '@/modules/common/variants'
import { cn } from '@/modules/common/utils'

interface Props extends VariantProps<typeof dividerVariants> {
  text?: string
  className?: string
}

export const Divider = ({ type, className }: Props) => {
  return <span className={cn(dividerVariants({ type, className }))} />
}

export const DividerWithText = ({ text, className }: Props) => {
  return (
    <span className={cn('flex items-center space-x-4', className)}>
      <Divider type="horizontal" className="flex-1" />
      <span className="text-xs font-medium text-foreground-muted">{text}</span>
      <Divider type="horizontal" className="flex-1" />
    </span>
  )
}
