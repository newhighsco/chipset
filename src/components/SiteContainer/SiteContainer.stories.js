import React from 'react'
import { SiteContainer } from '.'

export default {
  title: 'Components/SiteContainer',
  component: SiteContainer
}

export const source = () => <SiteContainer>Content</SiteContainer>

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const example = () => <SiteContainer>Content</SiteContainer>

example.story = {
  name: ' '
}
