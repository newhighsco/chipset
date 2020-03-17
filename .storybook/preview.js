import { addParameters } from '@storybook/react'
import { DocsPage } from '@storybook/addon-docs/blocks'

addParameters({
  options: {
    showRoots: true
  },
  docs: {
    page: DocsPage
  },
  viewMode: 'docs'
})
