import React from 'react'

import { Icon } from '..'
import PureIcon from './Icon'

export default {
  component: PureIcon,
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <Icon {...args} />

export const Source = Template.bind({})

Source.args = {
  children: <svg />
}
