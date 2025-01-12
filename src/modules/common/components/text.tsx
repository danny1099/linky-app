import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {}

/* prettier-ignore */
export const Text = ({ children, ...props }: Props) => {
  return (
    <p {...props} className={cn('text-xs text-foreground-muted', props.className)}>
      {children}
    </p>
  )
}
