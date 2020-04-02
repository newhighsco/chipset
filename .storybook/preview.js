import { addParameters } from '@storybook/react'
import theme from './theme'

addParameters({
  options: {
    showRoots: true,
    theme
  },
  viewMode: 'docs'
})
