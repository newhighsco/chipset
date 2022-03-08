import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { HeaderContainer } from '..'

export default {
  title: 'Components/HeaderContainer',
  component: HeaderContainer,
  parameters: {
    chromatic: { disable: true }
  }
} as ComponentMeta<typeof HeaderContainer>

const Template: ComponentStory<typeof HeaderContainer> = args => (
  <HeaderContainer {...args} />
)

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}

export const Example = Template.bind({})

Example.args = Source.args
Example.storyName = ' '
