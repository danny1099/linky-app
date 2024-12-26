import { JSX } from 'react'
import { cn } from '@/modules/common/utils'

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({ children, type = 'h2', ...props }: Props) => {
  const Tag: keyof JSX.IntrinsicElements = type

  return (
    <Tag {...props} className={cn('text-2xl font-medium text-foreground', props.className)}>
      {children}
    </Tag>
  )
}
