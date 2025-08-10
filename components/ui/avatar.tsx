import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const avatarVariants = cva(
  'relative inline-flex items-center justify-center bg-secondary text-secondary-foreground ring-offset-1 transition-colors ring-1 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        rounded: 'rounded-full',
        squared: 'rounded-md',
      },
      size: {
        md: 'h-9 w-9',
        sm: 'h-6 w-6',
        lg: 'h-12 w-12',
      },
      ring: {
        white: 'ring-white',
        black: 'ring-black',
        blue: 'ring-blue-500',
        red: 'ring-red-500',
        green: 'ring-green-500',
        yellow: 'ring-yellow-500',
        purple: 'ring-purple-500',
        pink: 'ring-pink-500',
        gray: 'bg-gray-400',
      },
    },
    defaultVariants: {
      variant: 'rounded',
      size: 'md',
      ring: 'white',
    },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src: string
  isBordered?: boolean
}

/* prettier-ignore */
export const Avatar = ({ src, className, variant, size, ring = "green", isBordered }: AvatarProps) => {
  return (
    <div className={cn(avatarVariants({ variant, size, ring }), isBordered && "border border-border", className)}>
      <img
        src={src}
        alt="Avatar of user"
        className="aspect-square size-full rounded-full object-cover"
        loading="eager"
      />
    </div>
  );
};
