import React from 'react'
import { HeaderContainer } from '..'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  title: 'Components/HeaderContainer',
  component: HeaderContainer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer },
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <HeaderContainer {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}

export const example = Template.bind({})

example.args = {
  children: 'Content'
}
example.storyName = ' '
