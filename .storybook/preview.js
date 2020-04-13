import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { ThemeProvider } from '../src/providers'
import componentTheme from '../__mocks__/theme'
import storybookTheme from './theme'

import '../src/styles/_chipset-normalize.scss'

addDecorator(storyFn => (
  <ThemeProvider theme={componentTheme}>{storyFn()}</ThemeProvider>
))

addParameters({
  options: {
    theme: storybookTheme
  }
})
