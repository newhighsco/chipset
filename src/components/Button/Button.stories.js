import React from 'react'
import { Button } from '..'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'

export default {
  title: 'Components/Button',
  component: PureButton,
  subcomponents: { [Button.Group.displayName]: PureButtonGroup }
}

let Template = args => <Button {...args} />

export const source = Template.bind({})

source.args = {
  href: 'https://example.com/',
  children: 'Content'
}
source.parameters = {
  percy: {
    skip: true
  }
}

Template = args => <Button.Group {...args} />

export const example = Template.bind({})

example.args = {
  children: [
    <Button key="default">Default</Button>,
    <Button key="active" href="https://example.com/" target="_blank" active>
      Active
    </Button>,
    <Button key="disabled" disabled>
      Disabled
    </Button>
  ]
}
example.storyName = ' '
