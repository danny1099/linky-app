import { Topbar } from '@/modules/common/components'
import { NavigateLinks } from '@/modules/home/components'

export default async function Layout({ children }: Children) {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Topbar child={<NavigateLinks />} />
      <main className="flex size-full overflow-y-auto bg-background">{children}</main>
    </div>
  )
}
