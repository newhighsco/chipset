import React from 'react'
import { Icon } from '..'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
  }
}

export const source = () => (
  <Icon>
    <svg />
  </Icon>
)
