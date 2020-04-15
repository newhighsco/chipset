import React from 'react'
import { Landmark } from '.'

export default {
  title: 'Components/Landmark',
  component: Landmark,
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const basic = () => <Landmark>Content</Landmark>
