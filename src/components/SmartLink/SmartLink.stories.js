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

export const source = args => <SmartLink {...args} />

source.args = {
  children: 'Content'
}
