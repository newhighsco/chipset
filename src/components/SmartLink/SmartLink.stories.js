import React from 'react'
import { SmartLink } from './SmartLink'

export default {
  title: 'Components/SmartLink',
  component: SmartLink,
  parameters: {
    percy: {
      skip: true
    }
  }
}

const Template = args => <SmartLink {...args} />

export const source = Template.bind({})

source.args = {
  href: 'https://example.com/',
  children: 'Content'
}
