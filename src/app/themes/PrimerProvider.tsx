import '@primer/primitives/dist/css/functional/themes/light.css'
import '@primer/primitives/dist/css/functional/themes/dark.css'

import { BaseStyles, ThemeProvider, theme } from '@primer/react'
import { PropsWithChildren } from 'react'
// import deepmerge from 'deepmerge'

// const customTheme = deepmerge(theme, {
//   fonts: {
//     mono: 'MonoLisa, monospace',
//   },
// })

function PrimerProvider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider dayScheme="day" nightScheme="night">
      <BaseStyles>
        {children}
      </BaseStyles>
    </ThemeProvider>
  )
}

export default PrimerProvider