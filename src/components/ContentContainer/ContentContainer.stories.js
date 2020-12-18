import React from 'react'
import { ContentContainer } from '..'
import PureContentContainer from './ContentContainer'

import breakpoints from '../../../styles/_breakpoints.module.scss'

export default {
  title: 'Components/ContentContainer',
  component: PureContentContainer
}

const Template = args => <ContentContainer {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}
source.parameters = {
  percy: {
    skip: true
  }
}

export const fullWidth = Template.bind({})

fullWidth.args = {
  children: 'Full-width content'
}
fullWidth.storyName = 'Full-width'

export const fullWidthWithGutter = Template.bind({})

fullWidthWithGutter.args = {
  gutter: true,
  children: 'Full-width content with gutter'
}
fullWidthWithGutter.storyName = 'Full-width with gutter'

export const restrictedWidth = () => (
  <>
    {Object.keys(breakpoints).map(breakpoint => (
      <ContentContainer key={breakpoint} size={breakpoint}>
        size=&quot;{breakpoint}&quot; restricted-width content
      </ContentContainer>
    ))}
  </>
)

restrictedWidth.storyName = 'Restricted-width'

export const restrictedWidthWithGutter = () => (
  <>
    {Object.keys(breakpoints).map(breakpoint => (
      <ContentContainer key={breakpoint} size={breakpoint} gutter>
        size=&quot;{breakpoint}&quot; restricted-width content with gutter
      </ContentContainer>
    ))}
  </>
)

restrictedWidthWithGutter.storyName = 'Restricted-width with gutter'
