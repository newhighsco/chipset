import React from 'react'
import { Footer } from '..'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  title: 'Components/Footer',
  component: Footer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer },
  parameters: {
    chromatic: { disable: true }
  }
}

const Template = args => <Footer {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}

export const example = Template.bind({})

example.args = {
  children: 'Content'
}
example.storyName = ' '
