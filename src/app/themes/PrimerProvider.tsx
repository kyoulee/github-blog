import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/themes/dark.css'

import { BaseStyles, ThemeProvider, theme } from '@primer/react'
import { PropsWithChildren } from 'react'
import deepmerge from 'deepmerge'

const customTheme = deepmerge(theme, {
  fonts: {
    mono: 'MonoLisa, monospace',
  },
})

export function PrimerProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider colorMode="auto" theme={customTheme} dayScheme="light" nightScheme="dark">
      <BaseStyles>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}