import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '..'
import PureButton from './Button'
import PureButtonGroup from './ButtonGroup'

export default {
  title: 'Components/Button',
  component: PureButton,
  subcomponents: { [Button.Group.displayName]: PureButtonGroup }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Source = Template.bind({})

Source.args = {
  href: 'https://example.com/',
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

const GroupTemplate: ComponentStory<typeof Button.Group> = args => (
  <Button.Group {...args} />
)

export const Group = GroupTemplate.bind({})

Group.args = {
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
Group.storyName = ' '
