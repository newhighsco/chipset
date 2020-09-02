import React from 'react'
import { Navigation } from '..'
import PureNavigation from './Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation
}

const Template = args => <PureNavigation {...args} />

export const source = Template.bind({})

source.args = {
  links: [
    { href: '/foo', children: 'Foo' },
    { href: '/bar', children: 'Bar' },
    { href: '/fizz', children: 'Fizz' },
    { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
  ]
}

source.story = {
  parameters: {
    percy: {
      skip: true
    }
  }
}

export const block = args => <Navigation {...args} />

block.args = source.args

export const inline = args => <Navigation {...args} />

inline.args = {
  ...source.args,
  inline: true
}

export const toggle = args => <Navigation {...args} />

toggle.args = {
  ...source.args,
  toggle: true
}
