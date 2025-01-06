import { Topbar } from '@/modules/common/components'
import { LoggedUser, Menu, Container } from '@/modules/private/components'

export default function Layout({ children }: Children) {
  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr] overflow-hidden">
      <Topbar child={<LoggedUser />} className="col-span-2 col-start-1" />
      <Menu />
      <Container>{children}</Container>
    </div>
  )
}
