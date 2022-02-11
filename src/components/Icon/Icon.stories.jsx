import React from 'react'
import { Icon } from '..'
import PureIcon from './Icon'

export default {
  title: 'Components/Icon',
  component: PureIcon,
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <Icon {...args} />

export const source = Template.bind({})

source.args = {
  children: <svg />
}
