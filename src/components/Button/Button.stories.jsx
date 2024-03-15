import React from 'react'

import { Button } from '..'
import ButtonGroup from './ButtonGroup'

export default {
  component: Button,
  subcomponents: { [Button.Group.displayName]: ButtonGroup }
}

export const Source = {
  args: { href: 'https://Example.com/', children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const Example = {
  render: args => <Button.Group {...args} />,
  args: {
    children: [
      <Button key="default">Default</Button>,
      <Button key="active" href="https://Example.com/" target="_blank" active>
        Active
      </Button>,
      <Button key="disabled" disabled>
        Disabled
      </Button>
    ]
  }
}
