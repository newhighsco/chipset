import React from 'react'

import breakpoints from '../../../styles/_breakpoints.module.scss'
import { ContentContainer } from '..'

export default { component: ContentContainer }

export const Source = {
  args: { children: 'Content' },
  parameters: { chromatic: { disable: true } }
}

export const FullWidth = {
  args: { children: 'Full-width content' },
  name: 'Full-width'
}

export const FullWidthWithGutter = {
  args: { gutter: true, children: 'Full-width content with gutter' },
  name: 'Full-width with gutter'
}

export const RestrictedWidth = {
  render: () => (
    <>
      {Object.keys(breakpoints).map(breakpoint => (
        <ContentContainer key={breakpoint} size={breakpoint}>
          size=&quot;{breakpoint}&quot; restricted-width content
        </ContentContainer>
      ))}
    </>
  ),
  name: 'Restricted-width'
}

export const RestrictedWidthWithGutter = {
  render: () => (
    <>
      {Object.keys(breakpoints).map(breakpoint => (
        <ContentContainer key={breakpoint} size={breakpoint} gutter>
          size=&quot;{breakpoint}&quot; restricted-width content with gutter
        </ContentContainer>
      ))}
    </>
  ),
  name: 'Restricted-width with gutter'
}
