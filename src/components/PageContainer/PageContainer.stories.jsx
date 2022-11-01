import React from 'react'
import { FooterContainer, HeaderContainer, PageContainer } from '..'
import PurePageContainer from './PageContainer'
import PureContentContainer from '../ContentContainer/ContentContainer'

export default {
  component: PurePageContainer,
  subcomponents: { [PureContentContainer.displayName]: PureContentContainer }
}

const Template = args => <PageContainer {...args} />

export const Source = Template.bind({})

Source.args = {
  header: <header />,
  footer: <footer />,
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

export const Example = Template.bind({})

Example.args = {
  header: <HeaderContainer>Header</HeaderContainer>,
  footer: <FooterContainer>Footer</FooterContainer>,
  children: 'Content'
}
Example.decorators = [
  Story => (
    <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
      {Story()}
    </div>
  )
]
Example.storyName = ' '
