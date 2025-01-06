import { cva } from 'class-variance-authority'

export const avatarVariants = cva(
  'inline-flex items-center justify-center bg-accent text-accent-foreground ring-offset-1 transition-colors ring-1 ring-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        rounded: 'border-transparent rounded-full',
        squared: 'border-transparent rounded-md',
        ghost: 'border-transparent'
      },
      size: {
        md: 'h-8 w-8',
        sm: 'h-6 w-6',
        lg: 'h-12 w-12'
      }
    },
    defaultVariants: {
      variant: 'rounded',
      size: 'sm'
    }
  }
)
