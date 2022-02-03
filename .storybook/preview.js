import React from 'react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../example/theme'
import theme from './theme'
import packageInfo from '../package.json'

import breakpoints from '../styles/_breakpoints.module.scss'
import './preview.scss'

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
    current: 'dark',
    dark: theme,
    light: theme
  },
  options: {
    storySort: {
      order: [packageInfo.config.title, ['README', 'CHANGELOG'], 'Components']
    }
  }
}
