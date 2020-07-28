import React from 'react'
import { SmartLink } from './SmartLink'

export default {
  title: 'Components/SmartLink',
  component: SmartLink,
  parameters: {
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
  }
}

export const source = () => <SmartLink>Content</SmartLink>
