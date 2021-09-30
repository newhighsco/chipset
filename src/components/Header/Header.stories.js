import React from 'react'
import { Header } from '..'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  title: 'Components/Header',
  component: Header,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer },
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <Header {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}

export const example = Template.bind({})

example.args = {
  children: 'Content'
}
example.storyName = ' '
