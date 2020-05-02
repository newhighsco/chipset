import React from 'react'
import { ContentContainer, Grid, GridItem } from '..'

export default {
  title: 'Components/Grid',
  component: Grid,
  subcomponents: { GridItem }
}

export const source = () => (
  <Grid>
    <GridItem>Content</GridItem>
    <GridItem sizes={['one-half']}>Content</GridItem>
    <GridItem sizes={['one-quarter', 'tablet-one-whole']}>Content</GridItem>
  </Grid>
)

source.story = {
  parameters: {
    docs: {
      disable: true
    }
  }
}

export const withGutter = () => (
  <Grid>
    <GridItem>
      <ContentContainer>Full-width</ContentContainer>
    </GridItem>
    <GridItem sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </GridItem>
    <GridItem sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </GridItem>
  </Grid>
)

withGutter.story = {
  name: 'With gutter'
}

export const withoutGutter = () => (
  <Grid gutterless>
    <GridItem>
      <ContentContainer>Full-width</ContentContainer>
    </GridItem>
    <GridItem sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </GridItem>
    <GridItem sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </GridItem>
  </Grid>
)

withoutGutter.story = {
  name: 'Without gutter'
}

export const reversed = () => (
  <Grid reverse>
    <GridItem>
      <ContentContainer>Full-width</ContentContainer>
    </GridItem>
    <GridItem sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </GridItem>
    <GridItem sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </GridItem>
  </Grid>
)
