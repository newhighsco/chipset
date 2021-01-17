import React from 'react'
import { SmartLink } from '..'
import PureSmartLink from './SmartLink'

export default {
  title: 'Components/SmartLink',
  component: PureSmartLink,
  parameters: {
    chromatic: { disable: true },
    percy: { skip: true }
  }
}

const Template = args => <SmartLink {...args} />

export const source = Template.bind({})

source.args = {
  href: 'https://example.com/',
  children: 'Content'
}
