import { ComponentType } from 'react'

type ProviderWithProps = [ComponentType<any>, any?]

export const buildProvidersTree = (componentWithProps: ProviderWithProps[]) => {
  const initialComponent = ({ children }: Children) => <>{children}</>

  return componentWithProps.reduce(
    (AcumulatedComponents, [Provider, props = {}]: ProviderWithProps) => {
      return ({ children }: Children) => (
        <AcumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AcumulatedComponents>
      )
    },
    initialComponent
  )
}
