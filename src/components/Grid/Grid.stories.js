import React from 'react'
import { ContentContainer, Grid } from '..'
import GridItem from './GridItem'

export default {
  title: 'Components/Grid',
  component: Grid,
  subcomponents: { GridItem }
}

export const source = () => (
  <Grid>
    <Grid.Item>Content</Grid.Item>
    <Grid.Item sizes={['one-half']}>Content</Grid.Item>
    <Grid.Item sizes={['one-quarter', 'tablet-one-whole']}>Content</Grid.Item>
  </Grid>
)

source.parameters = {
  percy: {
    skip: true
  }
}

export const withGutter = () => (
  <Grid>
    <Grid.Item>
      <ContentContainer>Full-width</ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </Grid.Item>
  </Grid>
)

withGutter.storyName = 'With gutter'

export const withoutGutter = () => (
  <Grid gutterless>
    <Grid.Item>
      <ContentContainer>Full-width</ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </Grid.Item>
  </Grid>
)

withoutGutter.storyName = 'Without gutter'

export const reversed = () => (
  <Grid reverse>
    <Grid.Item>
      <ContentContainer>Full-width</ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </Grid.Item>
  </Grid>
)

export const middled = () => (
  <Grid valign="middle">
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>
        Long content that wraps
        <br />
        Long content that wraps
      </ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Short</ContentContainer>
    </Grid.Item>
  </Grid>
)

export const bottomed = () => (
  <Grid valign="bottom">
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>
        Long content that wraps
        <br />
        Long content that wraps
      </ContentContainer>
    </Grid.Item>
    <Grid.Item sizes={['one-half']}>
      <ContentContainer>Short</ContentContainer>
    </Grid.Item>
  </Grid>
)
