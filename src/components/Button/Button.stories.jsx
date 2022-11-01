import React from 'react'
import { Button } from '..'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'

export default {
  component: PureButton,
  subcomponents: { [Button.Group.displayName]: PureButtonGroup }
}

let Template = args => <Button {...args} />

export const Source = Template.bind({})

Source.args = {
  href: 'https://Example.com/',
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

Template = args => <Button.Group {...args} />

export const Example = Template.bind({})

Example.args = {
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
Example.storyName = ' '
