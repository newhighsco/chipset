import React from 'react'

import { ContentContainer, Grid } from '..'
import GridItem from './GridItem'

export default {
  component: Grid,
  subcomponents: { [Grid.Item.displayName]: GridItem }
}

export const Source = {
  args: {
    children: [
      <Grid.Item key="0">Content</Grid.Item>,
      <Grid.Item key="1" sizes="one-half">
        Content
      </Grid.Item>,
      <Grid.Item
        key="2"
        sizes={['one-quarter', 'tablet-one-whole', 'desktop-hidden']}
      >
        Content
      </Grid.Item>
    ]
  },
  parameters: { chromatic: { disable: true } }
}

export const WithGutter = {
  args: {
    children: [
      <Grid.Item key="0">
        <ContentContainer>Full-width</ContentContainer>
      </Grid.Item>,
      <Grid.Item key="1" sizes="one-half">
        <ContentContainer>Left</ContentContainer>
      </Grid.Item>,
      <Grid.Item key="2" sizes="one-half">
        <ContentContainer>Right</ContentContainer>
      </Grid.Item>
    ]
  }
}

export const WithoutGutter = { args: { ...WithGutter.args, gutterless: true } }

export const Reversed = { args: { ...WithGutter.args, reverse: true } }

export const Middled = {
  args: {
    children: [
      <Grid.Item key="0" sizes="one-half">
        <ContentContainer>
          Long content that wraps
          <br />
          Long content that wraps
        </ContentContainer>
      </Grid.Item>,
      <Grid.Item key="1" sizes="one-half">
        <ContentContainer>Short</ContentContainer>
      </Grid.Item>
    ],
    valign: 'middle'
  }
}

export const Bottomed = { args: { ...Middled.args, valign: 'bottom' } }

export const VisuallyHidden = {
  args: {
    children: [null, 'tablet', 'desktop'].map(breakpoint => {
      const sizes = [breakpoint, 'hidden'].filter(Boolean).join('-')

      return (
        <Grid.Item key={breakpoint} sizes={sizes}>
          <ContentContainer>{sizes}</ContentContainer>
        </Grid.Item>
      )
    })
  }
}
