import { getTranslations } from 'next-intl/server'
import { Circle, Heading, Text } from '@/modules/common/components'

export const listFeatures = ['Feature_1', 'Feature_2', 'Feature_3']

/* prettier-ignore */
export const Features = async () => {
  const t = await getTranslations('ui.home.features.items')

  return (
    <div className="grid w-full h-fit grid-cols-1 gap-6 md:grid-cols-3 px-10 py-5">
      {listFeatures.map((feature) => (
        <div key={feature} className="h-60 rounded-xl border border-border bg-background p-6 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md">
          <Circle className="mb-4 flex size-10 bg-primary">
            <span className="font-bold text-primary-foreground">{feature.replace('Feature_', '')}</span>
          </Circle>
          <Heading type="h4" className="mb-2 text-lg font-bold text-foreground md:text-xl">
            {/* @ts-ignore */}
            {t(`${feature}.title`)}
          </Heading>
          <Text>
            {/* @ts-ignore */}
            {t(`${feature}.description`)}
          </Text>
        </div>
      ))}
    </div>
  )
}
