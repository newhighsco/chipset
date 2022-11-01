import React from 'react'
import { SiteContainer } from '..'
import PureSiteContainer from './SiteContainer'

export default {
  component: PureSiteContainer
}

const Template = args => <SiteContainer {...args} />

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
