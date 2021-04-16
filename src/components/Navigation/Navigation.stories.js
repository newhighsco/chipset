import React from 'react'
import { Navigation } from '..'
import PureNavigation from './Navigation'

export default {
  title: 'Components/Navigation',
  component: PureNavigation
}

const Template = args => <Navigation {...args} />

export const source = Template.bind({})

source.args = {
  links: [
    { href: '/foo', children: 'Foo' },
    { href: '/bar', children: 'Bar' },
    { href: '/fizz', children: 'Fizz' },
    { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
  ]
}
source.parameters = {
  chromatic: { disable: true }
}

export const block = Template.bind({})

block.args = source.args

export const inline = Template.bind({})

inline.args = {
  ...source.args,
  inline: true
}

export const toggle = Template.bind({})

toggle.args = {
  ...source.args,
  toggle: true
}
