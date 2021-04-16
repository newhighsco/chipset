import React from 'react'
import { VisuallyHidden } from '..'

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <VisuallyHidden {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}
