import React from 'react'
import { addParameters } from '@storybook/react'
// import { DocsPage } from '@newhighsco/storybook-preset/src/components/DocsPage'
import theme from '@newhighsco/storybook-preset/src/theme'

addParameters({
  // docs: {
  //   page: () => <DocsPage theme={theme} />
  // },
  options: {
    showRoots: true,
    theme
  }
})
