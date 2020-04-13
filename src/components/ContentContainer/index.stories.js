import React from 'react'
import { ContentContainer } from '.'

export default {
  title: 'Components/ContentContainer',
  component: ContentContainer
}

export const basic = () => <ContentContainer>Content</ContentContainer>

export const withGutter = () => (
  <ContentContainer gutter>Content with gutter</ContentContainer>
)

export const fullWidth = () => (
  <ContentContainer fullWidth>Full width content</ContentContainer>
)

export const fullWidthWithGutter = () => (
  <ContentContainer fullWidth gutter>
    Full width content with gutter
  </ContentContainer>
)
