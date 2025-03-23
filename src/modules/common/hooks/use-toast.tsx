import { toast as Sonner } from 'sonner'
import { Circle, Icon } from '@/modules/common/components'
import { useTranslations } from 'next-intl'

export type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading'

const toastType = {
  success: { icon: 'check2', className: 'bg-green-100 text-green-700' },
  error: { icon: 'x', className: 'bg-red-100 text-red-700' },
  warning: { icon: 'exclamation-lg', className: 'bg-amber-100 text-amber-800' },
  info: { icon: 'info-lg', className: 'bg-sky-100 text-sky-700' },
  loading: { icon: 'arrow-clockwise', className: 'bg-violet-100 text-violet-700 animate-spin' }
}

export const useToast = () => {
  const t = useTranslations('messages.system')

  return (message: Message, type: ToastType = 'success') => {
    Sonner(t(`${message}.title`) || 'Linky App', {
      description: t(`${message}.description`),
      className: 'gap-x-6 flex flex-row inline-flex font-medium',
      dismissible: true,
      icon: (
        <Circle className={toastType[type].className}>
          <Icon name={toastType[type].icon} className="size-4" />
        </Circle>
      )
    })
  }
}
