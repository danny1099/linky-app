import { cva } from 'class-variance-authority'

export const ctaVariants = cva(
  'inline-flex items-center gap-x-2 justify-center whitespace-nowrap rounded-md text-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-80',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        tertiary: 'bg-tertiary text-tertiary-foreground',
        danger: 'bg-destructive text-destructive-foreground',
        outline: 'bg-background text-foreground border border-border',
        accent: 'bg-accent text-accent-foreground border border-border',
        ghost: 'bg-transparent border-none text-foreground',
        link: 'bg-background border-none text-foreground justify-start hover:bg-secondary hover:text-secondary-foreground'
      },
      size: {
        default: 'h-10 rounded-lg px-4 py-1',
        sm: 'h-8 rounded-md px-3',
        lg: 'h-12 rounded-md px-8',
        icon: 'h-6 w-6 rounded-sm px-0.5 py-0.5'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default'
    }
  }
)
