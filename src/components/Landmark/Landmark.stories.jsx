import React from 'react'

import { Landmark } from '..'

export default {
  component: Landmark,
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <Landmark {...args} />

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
