import Image from 'next/image'
import { type VariantProps } from 'class-variance-authority'
import { avatarVariants } from '@/modules/common/variants'
import { cn } from '@/modules/common/utils'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
  src: string
}

export const Avatar = ({ src, className, variant, size }: AvatarProps) => {
  return (
    <div className={cn(avatarVariants({ variant, size }), className)}>
      <Image
        src={src}
        alt="Avatar of user"
        className="aspect-square h-full w-full rounded-full object-cover"
        height={24}
        width={24}
        loading="eager"
      />
    </div>
  )
}
