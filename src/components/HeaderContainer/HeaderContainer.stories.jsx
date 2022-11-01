import React from 'react'
import { HeaderContainer } from '..'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  component: HeaderContainer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer },
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <HeaderContainer {...args} />

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}

export const Example = Template.bind({})

Example.args = {
  children: 'Content'
}
Example.storyName = ' '
