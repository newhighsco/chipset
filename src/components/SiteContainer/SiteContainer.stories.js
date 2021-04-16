import React from 'react'
import { SiteContainer } from '..'
import PureSiteContainer from './SiteContainer'

export default {
  title: 'Components/SiteContainer',
  component: PureSiteContainer
}

const Template = args => <SiteContainer {...args} />

export const source = Template.bind({})

source.parameters = {
  chromatic: { disable: true }
}
source.args = {
  children: 'Content'
}

export const example = Template.bind({})

example.args = source.args
example.storyName = ' '
