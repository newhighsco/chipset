import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../src/__mocks__/theme'
import storybookTheme from './theme'

import breakpoints from '../styles/_breakpoints.module.scss'
import './preview.scss'

addDecorator(storyFn => (
  <ThemeProvider theme={componentTheme}>{storyFn()}</ThemeProvider>
))

addParameters({
  options: {
    theme: storybookTheme
  },
  percy: {
    widths: [breakpoints.mobile, breakpoints.desktopLarge]
  }
})
