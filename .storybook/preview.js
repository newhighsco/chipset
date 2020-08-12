import React from 'react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../src/__mocks__/theme'

import breakpoints from '../styles/_breakpoints.module.scss'
import './preview.scss'

export const decorators = [
  Story => (
    <ThemeProvider theme={componentTheme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  percy: {
    widths: [Number(breakpoints.mobile), Number(breakpoints.desktopLarge)]
  }
}
