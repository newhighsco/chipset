import React from 'react'
import { VisuallyHidden } from '..'

export default {
  component: VisuallyHidden,
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <VisuallyHidden {...args} />

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
