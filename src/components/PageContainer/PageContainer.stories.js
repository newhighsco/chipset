import React from 'react'
import { ContentContainer, PageContainer } from '..'
import PurePageContainer from './PageContainer'

export default {
  title: 'Components/PageContainer',
  component: PageContainer
}

const storyDecorators = [
  Story => (
    <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
      <Story />
    </div>
  )
]
const Template = args => <PurePageContainer {...args} />

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

export const example = () => (
  <PageContainer
    as="main"
    header={<ContentContainer as="header">Header</ContentContainer>}
    footer={<ContentContainer as="footer">Footer</ContentContainer>}
  >
    Content
  </PageContainer>
)

example.decorators = storyDecorators

example.storyName = ' '
