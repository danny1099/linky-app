import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/modules/common/utils'
import { avatarVariants } from '@/modules/common/styles'

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src: string
}

export const Avatar = ({ src, className, variant, size }: AvatarProps) => {
  return (
    <div className={cn(avatarVariants({ variant, size }), className)}>
      <img
        src={src || '/images/img-avatar.png'}
        alt="Avatar of user"
        className="aspect-square h-full w-full rounded-full object-cover"
        loading="eager"
      />
    </div>
  )
}
