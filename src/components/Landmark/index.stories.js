import React from 'react'
import { Landmark } from '..'

export default {
  title: 'Components/Landmark',
  component: Landmark,
  parameters: {
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
  }
}

export const source = () => <Landmark>Content</Landmark>
