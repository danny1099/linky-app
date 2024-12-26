import { Topbar } from '@/modules/common/components'
import { Authenticate } from '@/modules/home/components'

export default function Layout({ children }: Children) {
  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <Topbar child={<Authenticate />} />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
