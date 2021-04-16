import React from 'react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../example/theme'

import breakpoints from '../styles/_breakpoints.module.scss'
import './preview.scss'

const viewports = [Number(breakpoints.mobile), Number(breakpoints.desktopLarge)]

export const decorators = [
  Story => (
    <ThemeProvider themes={componentTheme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  chromatic: { viewports }
}
