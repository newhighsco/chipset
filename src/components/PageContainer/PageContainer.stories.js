import React from 'react'
import { ContentContainer, PageContainer } from '..'
import PurePageContainer from './PageContainer'

export default {
  title: 'Components/PageContainer',
  component: PurePageContainer
}

const Template = args => <PageContainer {...args} />

export const source = Template.bind({})

source.args = {
  header: <header />,
  footer: <footer />,
  children: 'Content'
}
source.parameters = {
  percy: {
    skip: true
  }
}

export const example = Template.bind({})

example.args = {
  header: <ContentContainer as="header">Header</ContentContainer>,
  footer: <ContentContainer as="footer">Footer</ContentContainer>,
  children: 'Content'
}
example.decorators = [
  Story => (
    <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
      <Story />
    </div>
  )
]
example.storyName = ' '
