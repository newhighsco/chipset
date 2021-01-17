import React from 'react'
import { ContentContainer, Grid } from '..'
import PureGrid from './Grid'
import PureGridItem from './GridItem'

export default {
  title: 'Components/Grid',
  component: PureGrid,
  subcomponents: { [Grid.Item.displayName]: PureGridItem }
}

const Template = args => <Grid {...args} />

export const source = Template.bind({})

source.args = {
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
source.parameters = {
  chromatic: { disable: true },
  percy: { skip: true }
}

export const withGutter = Template.bind({})

withGutter.args = {
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
withGutter.storyName = 'With gutter'

export const withoutGutter = Template.bind({})

withoutGutter.args = {
  ...withGutter.args,
  gutterless: true
}
withoutGutter.storyName = 'Without gutter'

export const reversed = Template.bind({})

reversed.args = {
  ...withGutter.args,
  reverse: true
}

export const middled = Template.bind({})

middled.args = {
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

export const bottomed = Template.bind({})

bottomed.args = {
  ...middled.args,
  valign: 'bottom'
}
