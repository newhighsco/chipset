import React from 'react'
import { VisuallyHidden } from '..'

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const source = args => <VisuallyHidden {...args} />

source.args = {
  children: 'Content'
}
