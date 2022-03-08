import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FooterContainer } from '..'

export default {
  title: 'Components/FooterContainer',
  component: FooterContainer,
  parameters: {
    chromatic: { disable: true }
  }
} as ComponentMeta<typeof FooterContainer>

const Template: ComponentStory<typeof FooterContainer> = args => (
  <FooterContainer {...args} />
)

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}

export const Example = Template.bind({})

Example.args = Source.args
Example.storyName = ' '
