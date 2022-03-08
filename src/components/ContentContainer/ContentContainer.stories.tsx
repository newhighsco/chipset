import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentContainer } from '..'
import PureContentContainer from './ContentContainer'

import breakpoints from '../../../styles/_breakpoints.module.scss'

export default {
  title: 'Components/ContentContainer',
  component: PureContentContainer
} as ComponentMeta<typeof ContentContainer>

const Template: ComponentStory<typeof ContentContainer> = args => (
  <ContentContainer {...args} />
)

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

export const FullWidth = Template.bind({})

FullWidth.args = {
  children: 'Full-width content'
}
FullWidth.storyName = 'Full-width'

export const FullWidthWithGutter = Template.bind({})

FullWidthWithGutter.args = {
  gutter: true,
  children: 'Full-width content with gutter'
}
FullWidthWithGutter.storyName = 'Full-width with gutter'

export const RestrictedWidth = () => (
  <>
    {Object.keys(breakpoints).map(breakpoint => (
      <ContentContainer key={breakpoint} size={breakpoint}>
        size=&quot;{breakpoint}&quot; restricted-width content
      </ContentContainer>
    ))}
  </>
)

RestrictedWidth.storyName = 'Restricted-width'

export const RestrictedWidthWithGutter = () => (
  <>
    {Object.keys(breakpoints).map(breakpoint => (
      <ContentContainer key={breakpoint} size={breakpoint} gutter>
        size=&quot;{breakpoint}&quot; restricted-width content with gutter
      </ContentContainer>
    ))}
  </>
)

RestrictedWidthWithGutter.storyName = 'Restricted-width with gutter'
