import { cva } from 'class-variance-authority'

export const avatarVariants = cva(
  'inline-flex items-center justify-center bg-secondary text-secondary-foreground ring-offset-1 transition-colors ring-1 ring-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
      size: 'md'
    }
  }
)

export const badgeVariants = cva('inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium transition-colors', {
  variants: {
    variant: {
      primary: 'border-transparent bg-primary text-primary-foreground',
      secondary: 'border-transparent bg-secondary text-secondary-foreground',
      tertiary: 'border-transparent bg-tertiary text-tertiary-foreground',
      destructive: 'border-transparent bg-destructive text-destructive-foreground',
      outline: 'text-foreground border border-border bg-background',
      ghost: 'border-transparent bg-transparent text-foreground',
      accent: 'border-transparent bg-accent text-accent-foreground'
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const ctaVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export const dividerVariants = cva('bg-border', {
  variants: {
    type: {
      vertical: 'w-[1px] h-6',
      horizontal: 'h-[1px] w-6'
    }
  },
  defaultVariants: {
    type: 'vertical'
  }
})

export const inputVariants = cva('w-56 flex items-center gap-x-2 autofill:bg-transparent', {
  variants: {
    variant: {
      ghost: 'bg-transparent text-foreground',
      outline: 'border border-input bg-background text-foreground',
      accent: 'bg-accent text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground'
    },
    sizes: {
      md: 'rounded-xl px-3 py-2 h-10',
      sm: 'h-8 rounded-md px-3',
      lg: 'h-12 rounded-md px-8'
    }
  },
  defaultVariants: {
    variant: 'outline',
    sizes: 'md'
  }
})

export const sheetVariants = cva(
  'fixed z-50 gap-2 bg-background p-2 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out',
  {
    variants: {
      side: {
        top: 'inset-x-0 top-0 data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
        bottom: 'inset-x-0 bottom-0 data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
        left: 'inset-y-0 left-0 h-full w-5/6 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm',
        right:
          'inset-y-0 right-0 h-full w-5/6 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm'
      }
    },
    defaultVariants: {
      side: 'right'
    }
  }
)

export const dockVariants = cva(
  'supports-backdrop-blur:bg-white/10 supports-backdrop-blur:dark:bg-black/10 flex h-16 w-full items-center justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md'
)
