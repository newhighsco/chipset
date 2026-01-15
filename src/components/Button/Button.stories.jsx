import React, { cloneElement } from 'react'

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
  },
  render: args => <Button.Group {...args} />
}

export const WithLinks = {
  ...WithButtons,
  args: {
    children: WithButtons.args.children.map(Button =>
      cloneElement(Button, { href: '/' })
    )
  }
}

export const WithVariant = {
  ...WithButtons,
  args: {
    children: WithButtons.args.children.map(Button =>
      cloneElement(Button, { variant: 'variant' })
    )
  }
}
