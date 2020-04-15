import React from 'react'
import { PageContainer } from '.'
import { ContentContainer } from '../ContentContainer'

export default {
  title: 'Components/PageContainer',
  component: PageContainer
}

export const basic = () => (
  <PageContainer header={<header />} footer={<footer />}>
    Content
  </PageContainer>
)

basic.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const withHeaderAndFooter = () => (
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
