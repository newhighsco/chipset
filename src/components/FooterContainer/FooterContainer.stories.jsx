import React from 'react'

import { FooterContainer } from '..'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  component: FooterContainer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer },
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <FooterContainer {...args} />

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}

export const Example = Template.bind({})

Example.args = {
  children: 'Content'
}
Example.storyName = ' '
