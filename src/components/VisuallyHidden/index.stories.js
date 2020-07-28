import React from 'react'
import { VisuallyHidden } from '..'

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
  }
}

export const source = () => <VisuallyHidden>Content</VisuallyHidden>
