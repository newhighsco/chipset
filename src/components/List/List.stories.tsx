import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { List } from '..'
import PureList from './List'

export default {
  title: 'Components/List',
  component: PureList
} as ComponentMeta<typeof List>

const Template: ComponentStory<typeof List> = args => <List {...args} />

export const Source = Template.bind({})

Source.args = {
  children: 'Content'
}
Source.parameters = {
  chromatic: { disable: true }
}

export const Unordered = Template.bind({})

Unordered.args = {
  children: [
    <li key="0">List item</li>,
    <li key="1">List item</li>,
    <li key="2">List item</li>
  ]
}

export const Ordered = Template.bind({})

Ordered.args = {
  ...Unordered.args,
  as: 'ol'
}

export const Unstyled = Template.bind({})

Unstyled.args = {
  ...Unordered.args,
  unstyled: true
}

export const Inline = Template.bind({})

Inline.args = {
  ...Unordered.args,
  inline: true
}

export const InlineCommaSeparated = Template.bind({})

InlineCommaSeparated.args = {
  ...Inline.args,
  commaSeparated: true
}
InlineCommaSeparated.storyName = 'Inline, comma-separated'
