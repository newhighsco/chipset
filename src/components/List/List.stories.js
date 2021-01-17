import React from 'react'
import { List } from '..'
import PureList from './List'

export default {
  title: 'Components/List',
  component: PureList
}

const Template = args => <List {...args} />

export const source = Template.bind({})

source.args = {
  children: 'Content'
}
source.parameters = {
  chromatic: { disable: true },
  percy: { skip: true }
}

export const unordered = Template.bind({})

unordered.args = {
  children: [
    <li key="0">List item</li>,
    <li key="1">List item</li>,
    <li key="2">List item</li>
  ]
}

export const ordered = Template.bind({})

ordered.args = {
  ...unordered.args,
  as: 'ol'
}

export const unstyled = Template.bind({})

unstyled.args = {
  ...unordered.args,
  unstyled: true
}

export const inline = Template.bind({})

inline.args = {
  ...unordered.args,
  inline: true
}

export const inlineCommaSeparated = Template.bind({})

inlineCommaSeparated.args = {
  ...unordered.args,
  inline: true,
  commaSeparated: true
}
inlineCommaSeparated.storyName = 'Inline, comma-separated'
