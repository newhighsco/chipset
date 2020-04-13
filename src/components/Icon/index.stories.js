import React from 'react'
import { Icon } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const basic = () => (
  <Icon>
    <svg />
  </Icon>
)
