import React from 'react'
import { ComponentStory, ComponentMeta, DecoratorFn } from '@storybook/react'
import { FooterContainer, HeaderContainer, PageContainer } from '..'
import PurePageContainer from './PageContainer'

export default {
  title: 'Components/PageContainer',
  component: PurePageContainer
} as ComponentMeta<typeof PageContainer>

const Template: ComponentStory<typeof PageContainer> = args => (
  <PageContainer {...args} />
)

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
  ...Source.args,
  header: <HeaderContainer>Header</HeaderContainer>,
  footer: <FooterContainer>Footer</FooterContainer>
}
Example.decorators = [
  (Story => (
    <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
      {Story()}
    </div>
  )) as DecoratorFn
]
Example.storyName = ' '
