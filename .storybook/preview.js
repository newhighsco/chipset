import { addParameters } from '@storybook/react'
import theme from './theme'

import '../src/styles/_chipset-normalize.scss'

addParameters({
  options: {
    showRoots: true,
    theme
  },
  viewMode: 'docs'
})
