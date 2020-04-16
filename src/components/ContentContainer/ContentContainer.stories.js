import React from 'react'
import { ContentContainer } from '.'

export default {
  title: 'Components/ContentContainer',
  component: ContentContainer
}

export const source = () => <ContentContainer>Content</ContentContainer>

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const restrictedWidth = () => (
  <ContentContainer>Restricted-width content</ContentContainer>
)

restrictedWidth.story = {
  name: 'Restricted-width'
}

export const restrictedWidthWithGutter = () => (
  <ContentContainer gutter>
    Restricted-width content with gutter
  </ContentContainer>
)

restrictedWidthWithGutter.story = {
  name: 'Restricted-width with gutter'
}

export const fullWidth = () => (
  <ContentContainer fullWidth>Full-width content</ContentContainer>
)

fullWidth.story = {
  name: 'Full-width'
}

export const fullWidthWithGutter = () => (
  <ContentContainer fullWidth gutter>
    Full-width content with gutter
  </ContentContainer>
)

fullWidthWithGutter.story = {
  name: 'Full-width with gutter'
}
