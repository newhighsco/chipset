import React from 'react'

import { ContentContainer, Grid } from '..'
import PureGrid from './Grid'
import PureGridItem from './GridItem'

export default {
  component: PureGrid,
  subcomponents: { [Grid.Item.displayName]: PureGridItem }
}

const Template = args => <Grid {...args} />

export const Source = Template.bind({})

Source.args = {
  children: [
    <Grid.Item key="0">Content</Grid.Item>,
    <Grid.Item key="1" sizes={['one-half']}>
      Content
    </Grid.Item>,
    <Grid.Item key="2" sizes={['one-quarter', 'tablet-one-whole']}>
      Content
    </Grid.Item>
  ]
}
Source.parameters = {
  chromatic: { disable: true }
}

export const WithGutter = Template.bind({})

WithGutter.args = {
  children: [
    <Grid.Item key="0">
      <ContentContainer>Full-width</ContentContainer>
    </Grid.Item>,
    <Grid.Item key="1" sizes={['one-half']}>
      <ContentContainer>Left</ContentContainer>
    </Grid.Item>,
    <Grid.Item key="2" sizes={['one-half']}>
      <ContentContainer>Right</ContentContainer>
    </Grid.Item>
  ]
}

export const WithoutGutter = Template.bind({})

WithoutGutter.args = {
  ...WithGutter.args,
  gutterless: true
}

export const Reversed = Template.bind({})

Reversed.args = {
  ...WithGutter.args,
  reverse: true
}

export const Middled = Template.bind({})

Middled.args = {
  children: [
    <Grid.Item key="0" sizes={['one-half']}>
      <ContentContainer>
        Long content that wraps
        <br />
        Long content that wraps
      </ContentContainer>
    </Grid.Item>,
    <Grid.Item key="1" sizes={['one-half']}>
      <ContentContainer>Short</ContentContainer>
    </Grid.Item>
  ],
  valign: 'middle'
}

export const Bottomed = Template.bind({})

Bottomed.args = {
  ...Middled.args,
  valign: 'bottom'
}
