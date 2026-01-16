import './preview.scss'

import React from 'react'

import componentTheme from '../example/theme'
import { breakpoints, ThemeProvider } from '../src'

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
  options: { storySort: { order: ['Docs', ['README', 'CHANGELOG']] } }
}

export const tags = ['autodocs']
