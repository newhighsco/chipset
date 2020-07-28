import React from 'react'
import { List } from '..'

export default {
  title: 'Components/List',
  component: List
}

export const source = () => <List>Content</List>

source.story = {
  parameters: {
    docs: {
      disable: true
    },
    percy: {
      skip: true
    }
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

inlineCommaSeparated.story = {
  name: 'Inline, comma-separated'
}
