import { Heading } from '@/modules/common/components'
import { Stats } from '@/modules/dashboard/components'
import { dataStats } from '@/modules/dashboard/types'

export default async function Dashboard() {
  return (
    <section className="size-full rounded-sm px-1">
      <article className="flex w-full flex-col space-y-2 py-3">
        <Heading type="h1" className="text-2xl font-semibold text-foreground">
          Dashboard
        </Heading>
        <Stats data={dataStats} />
      </article>
    </section>
  )
}
