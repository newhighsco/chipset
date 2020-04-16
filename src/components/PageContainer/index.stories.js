import React from 'react'
import { PageContainer } from '.'
import { ContentContainer } from '../ContentContainer'

export default {
  title: 'Components/PageContainer',
  component: PageContainer
}

export const source = () => (
  <PageContainer header={<header />} footer={<footer />}>
    Content
  </PageContainer>
)

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const example = () => (
  <div style={{ display: 'flex', flexDirection: 'column', height: 300 }}>
    <PageContainer
      as="main"
      header={<ContentContainer as="header">Header</ContentContainer>}
      footer={<ContentContainer as="footer">Footer</ContentContainer>}
    >
      Content
    </PageContainer>
  </div>
)

example.story = {
  name: ' '
}
