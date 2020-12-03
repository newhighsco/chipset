import React from 'react'
import { List } from '..'
import PureList from './List'

export default {
  title: 'Components/List',
  component: List
}

const Template = args => <PureList {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}

source.parameters = {
  percy: {
    skip: true
  }
}

export const unordered = () => (
  <List>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
)

export const ordered = () => (
  <List as="ol">
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
)

export const unstyled = () => (
  <List unstyled>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
)

export const inline = () => (
  <List inline>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
)

export const inlineCommaSeparated = () => (
  <List inline commaSeparated>
    <li>List item</li>
    <li>List item</li>
    <li>List item</li>
  </List>
)

inlineCommaSeparated.storyName = 'Inline, comma-separated'
