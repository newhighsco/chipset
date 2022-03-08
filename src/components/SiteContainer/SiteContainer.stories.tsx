import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { SiteContainer } from '..'
import PureSiteContainer from './SiteContainer'

export default {
  title: 'Components/SiteContainer',
  component: PureSiteContainer
} as ComponentMeta<typeof SiteContainer>

const Template: ComponentStory<typeof SiteContainer> = args => (
  <SiteContainer {...args} />
)

export const Source = Template.bind({})

Source.parameters = {
  chromatic: { disable: true }
}
Source.args = {
  children: 'Content'
}

export const Example = Template.bind({})

Example.args = Source.args
Example.storyName = ' '
