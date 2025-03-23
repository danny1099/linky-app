import { Circle, Heading, Text } from '@/modules/common/components'
import { listFeatures } from '@/modules/home/utils'

/* prettier-ignore */
export const Features = () => {
  return (
    <div className="mt-10 grid w-full grid-cols-1 gap-8 md:grid-cols-3 p-6">
      {listFeatures.map(({ id, title, description }) => (
        <div key={id} className="rounded-xl border border-border bg-background p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
          <Circle className="mb-4 flex size-10 bg-primary">
            <span className="font-bold text-primary-foreground">{id}</span>
          </Circle>
          <Heading type="h4" className="mb-2 text-lg font-bold text-foreground md:text-xl">
            {title}
          </Heading>
          <Text>{description}</Text>
        </div>
      ))}
    </div>
  )
}
