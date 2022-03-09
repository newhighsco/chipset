import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Icon } from '..'
import PureIcon from './Icon'

export default {
  title: 'Components/Icon',
  component: PureIcon,
  parameters: {
    chromatic: { disable: true }
  }
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
