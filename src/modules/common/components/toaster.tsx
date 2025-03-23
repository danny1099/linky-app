'use client'
import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

export const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-md group-[.toaster]:gap-3',
          description: 'group-[.toast]:text-foreground-muted group-[.toast]:text-2xs group-[.toast]:-mt-1',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton: 'group-[.toast]:bg-accent group-[.toast]:text-accent-foreground',
          title: 'group-[.toast]:font-medium group-[.toast]:text-xs'
        }
      }}
      {...props}
    />
  )
}
