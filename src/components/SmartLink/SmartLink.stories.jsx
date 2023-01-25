import React from 'react'

import { SmartLink } from '..'
import PureSmartLink from './SmartLink'

export default {
  component: PureSmartLink,
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <SmartLink {...args} />

export const Source = Template.bind({})

Source.args = {
  href: 'https://Example.com/',
  children: 'Content'
}
