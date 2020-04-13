import React from 'react'
import { SmartLink } from './SmartLink'

export default {
  title: 'Components/SmartLink',
  component: SmartLink,
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const basic = () => <SmartLink>Content</SmartLink>
