import './preview.scss'

import React from 'react'

import componentTheme from '../example/theme'
import { ThemeProvider } from '../src'

export const decorators = [
  Story => (
    <ThemeProvider themes={componentTheme}>
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  chromatic: { disableSnapshot: true },
  options: { storySort: { order: ['Docs', ['README', 'CHANGELOG']] } }
}

export const tags = ['autodocs']
