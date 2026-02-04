import { snapshot } from '@newhighsco/storybook-preset'
import React, { cloneElement } from 'react'

import { Button } from '..'
import ButtonGroup from './ButtonGroup'

export default {
  component: Button,
  subcomponents: { [Button.Group.displayName]: ButtonGroup },
  parameters: {
    pseudo: { hover: '.hover', focusVisible: '.focus', active: '.active' }
  }
}

export const Source = {
  args: { href: 'https://example.com/', children: 'Content' }
}

export const WithButtons = {
  args: {
    children: [
      <Button key="default">Default</Button>,
      <Button key="hover" className="hover">
        Hover
      </Button>,
      <Button key="focus" className="focus">
        Focus
      </Button>,
      <Button key="active" className="active">
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

export const Snapshot = snapshot([WithButtons, WithLinks, WithVariant])
