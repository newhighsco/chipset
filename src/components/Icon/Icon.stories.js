import React from 'react'
import { Icon } from '..'
import PureIcon from './Icon'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    percy: {
      skip: true
    }
  }
}

const Template = args => <PureIcon {...args} />

export const source = Template.bind({})

source.args = {
  children: <svg />
}
