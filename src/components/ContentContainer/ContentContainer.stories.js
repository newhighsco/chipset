import React from 'react'
import { ContentContainer } from '..'
import PureContentContainer from './ContentContainer'

import breakpoints from '../../../styles/_breakpoints.module.scss'

export default {
  title: 'Components/ContentContainer',
  component: ContentContainer
}

const Template = args => <PureContentContainer {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const fullWidth = () => (
  <ContentContainer>Full-width content</ContentContainer>
)

fullWidth.story = {
  name: 'Full-width'
}

export const fullWidthWithGutter = () => (
  <ContentContainer gutter>Full-width content with gutter</ContentContainer>
)

fullWidthWithGutter.story = {
  name: 'Full-width with gutter'
}

export const restrictedWidth = () => (
  <>
    {Object.keys(breakpoints).map(breakpoint => (
      <ContentContainer key={breakpoint} size={breakpoint}>
        size=&quot;{breakpoint}&quot; restricted-width content
      </ContentContainer>
    ))}
  </>
)

restrictedWidth.story = {
  name: 'Restricted-width'
}

export const restrictedWidthWithGutter = () => (
  <>
    {Object.keys(breakpoints).map(breakpoint => (
      <ContentContainer key={breakpoint} size={breakpoint} gutter>
        size=&quot;{breakpoint}&quot; restricted-width content with gutter
      </ContentContainer>
    ))}
  </>
)

restrictedWidthWithGutter.story = {
  name: 'Restricted-width with gutter'
}
