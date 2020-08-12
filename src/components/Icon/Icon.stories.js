import React from 'react'
import { Icon } from '..'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
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
