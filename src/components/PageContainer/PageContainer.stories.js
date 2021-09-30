import React from 'react'
import { FooterContainer, HeaderContainer, PageContainer } from '..'
import PurePageContainer from './PageContainer'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  title: 'Components/PageContainer',
  component: PurePageContainer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer }
}

const Template = args => <PageContainer {...args} />

export const source = Template.bind({})

source.args = {
  header: <header />,
  footer: <footer />,
  children: 'Content'
}
source.parameters = {
  chromatic: { disable: true }
}

export const example = Template.bind({})

example.args = {
  header: <HeaderContainer>Header</HeaderContainer>,
  footer: <FooterContainer>Footer</FooterContainer>,
  children: 'Content'
}
example.decorators = [
  Story => (
    <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
      {Story()}
    </div>
  )
]
example.storyName = ' '
