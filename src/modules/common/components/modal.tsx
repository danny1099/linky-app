'use client'
import { useMediaQuery } from 'usehooks-ts'
import * as Dialog from './dialog'
import * as Drawer from './drawer'

interface Props {
  child: React.ReactNode
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  title?: string
  description?: string
}

export const Modal = ({ title, description, child, isOpen, setIsOpen }: Props) => {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (!isMobile) {
    return (
      <Dialog.Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.DialogContent>
          {title && (
            <Dialog.DialogHeader>
              <Dialog.DialogTitle>{title}</Dialog.DialogTitle>
              {description && <Dialog.DialogDescription>{description}</Dialog.DialogDescription>}
            </Dialog.DialogHeader>
          )}
          <div className="min-h-80 p-2">{child}</div>
        </Dialog.DialogContent>
        <Dialog.DialogClose />
      </Dialog.Dialog>
    )
  }

  return (
    <Drawer.Drawer open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.DrawerContent>
        {title && (
          <Drawer.DrawerHeader className="text-left">
            <Drawer.DrawerTitle>{title}</Drawer.DrawerTitle>
            {description && <Drawer.DrawerDescription>{description}</Drawer.DrawerDescription>}
          </Drawer.DrawerHeader>
        )}
        <div className="min-h-80 p-2">{child}</div>
      </Drawer.DrawerContent>
      <Drawer.DrawerClose />
    </Drawer.Drawer>
  )
}
