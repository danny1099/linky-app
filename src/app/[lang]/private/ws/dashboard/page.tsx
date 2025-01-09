import { Heading, Text } from '@/modules/common/components'
import { Stats } from '@/modules/dashboard/components'
import { dataStats } from '@/modules/dashboard/types'

export default async function Dashboard() {
  return (
    <section className="size-full gap-1 rounded-sm px-1">
      <header className="flex w-full flex-col">
        <Heading type="h1" className="text-2xl font-semibold text-foreground">
          Dashboard
        </Heading>
        <Text>This section you can see your statistics and analytics</Text>
      </header>

      <article className="flex w-full flex-col space-y-2 py-3">
        <Stats data={dataStats} />
      </article>
    </section>
  )
}
