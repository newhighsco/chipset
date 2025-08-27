import React from 'react'

import { Button } from '..'
import ButtonGroup from './ButtonGroup'

export default {
  component: Button,
  subcomponents: { [Button.Group.displayName]: ButtonGroup }
}

export const Source = {
  args: { href: 'https://example.com/', children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const WithButtons = {
  render: args => <Button.Group {...args} />,
  args: {
    children: [
      <Button key="default">Default</Button>,
      <Button key="active" active>
        Active
      </Button>,
      <Button key="disabled" disabled>
        Disabled
      </Button>
    ]
  }
}

export const WithLinks = {
  render: args => <Button.Group {...args} />,
  args: {
    children: [
      <Button key="default" href="/">
        Default
      </Button>,
      <Button key="active" href="https://example.com/" target="_blank" active>
        Active
      </Button>,
      <Button key="disabled" href="/" disabled>
        Disabled
      </Button>
    ]
  }
}
