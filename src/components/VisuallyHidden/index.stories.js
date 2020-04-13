import React from 'react'
import { VisuallyHidden } from '.'

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const basic = () => <VisuallyHidden>Content</VisuallyHidden>
