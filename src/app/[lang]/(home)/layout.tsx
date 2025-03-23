import { Topbar } from '@/modules/common/components'

export default async function Layout({ children }: Children) {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Topbar />
      <main className="flex size-full overflow-y-auto bg-background">{children}</main>
    </div>
  )
}
