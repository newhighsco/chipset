import React from 'react'
import { Preview } from '@storybook/react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../example/theme'

import breakpoints from '../styles/_breakpoints.module.scss'
import './preview.scss'

const preview: Preview = {
  decorators: [
    Story => (
      <ThemeProvider themes={componentTheme}>
        <Story />
      </ThemeProvider>
    )
  ],
  parameters: {
    chromatic: { viewports: [breakpoints.desktopLarge] },
    darkMode: {
      current: 'dark'
    },
    options: {
      storySort: {
        order: ['Docs', ['README', 'CHANGELOG'], 'Components']
      }
    }
  }
}

export default preview
