import { snapshot } from '@newhighsco/storybook-preset'
import React from 'react'

import { List } from '..'

export default { component: List }

export const Source = { args: { children: 'Content' } }

export const Unordered = {
  args: {
    children: [
      <li key="0">List item</li>,
      <li key="1">List item</li>,
      <li key="2">List item</li>
    ]
  }
}

export const Ordered = { args: { ...Unordered.args, as: 'ol' } }

export const Unstyled = { args: { ...Unordered.args, unstyled: true } }

export const Inline = { args: { ...Unordered.args, inline: true } }

export const InlineCommaSeparated = {
  args: { ...Inline.args, commaSeparated: true },
  name: 'Inline, comma-separated'
}

export const Snapshot = snapshot([
  Unordered,
  Ordered,
  Unstyled,
  Inline,
  InlineCommaSeparated
])
