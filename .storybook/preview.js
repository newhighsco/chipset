import React from 'react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../example/theme'

import breakpoints from '../styles/_breakpoints.module.scss'

const viewports = [Number(breakpoints.desktopLarge)]

export const decorators = [
  Story => (
    <ThemeProvider themes={componentTheme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  chromatic: { viewports },
  darkMode: {
    current: 'dark'
  },
  options: {
    storySort: {
      order: ['Docs', ['README', 'CHANGELOG'], 'Components']
    }
  }
}
