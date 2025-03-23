import { titleFont } from '@/config/fonts'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

/* prettier-ignore */
export const Title = ({ children, type = 'h1', ...props }: Props) => {
  const Tag: keyof React.JSX.IntrinsicElements = type

  return (
    <Tag {...props} className={cn('text-2xl font-medium text-foreground md:text-4xl', props.className, titleFont.className)}>
      {children}
    </Tag>
  )
}
