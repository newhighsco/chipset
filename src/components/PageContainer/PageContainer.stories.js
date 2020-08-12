import React from 'react'
import { ContentContainer, PageContainer } from '..'

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
    percy: {
      skip: true
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
