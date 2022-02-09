import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import VisuallyHidden from '.'

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
  parameters: {
    chromatic: { disable: true }
  }
} as ComponentMeta<typeof VisuallyHidden>

const Template: ComponentStory<typeof VisuallyHidden> = args => (
  <VisuallyHidden {...args} />
)

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
