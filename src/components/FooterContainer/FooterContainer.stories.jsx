import React from 'react'
import { FooterContainer } from '..'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  title: 'Components/FooterContainer',
  component: FooterContainer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer },
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <FooterContainer {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}

export const example = Template.bind({})

example.args = {
  children: 'Content'
}
example.storyName = ' '
