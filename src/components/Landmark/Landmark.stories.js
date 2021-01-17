import React from 'react'
import { Landmark } from '..'

export default {
  title: 'Components/Landmark',
  component: Landmark,
  parameters: {
    chromatic: { disable: true },
    percy: { skip: true }
  }
}

const Template = args => <Landmark {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}
