import React from 'react'
import { Navigation } from '..'
import PureNavigation from './Navigation'

export default {
  component: PureNavigation
}

const Template = args => <Navigation {...args} />

export const Source = Template.bind({})

Source.args = {
  links: [
    { href: '/foo', children: 'Foo' },
    { href: '/bar', children: 'Bar' },
    { href: '/fizz', children: 'Fizz' },
    { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
  ]
}
Source.parameters = {
  chromatic: { disable: true }
}

export const Block = Template.bind({})

Block.args = Source.args

export const Inline = Template.bind({})

Inline.args = {
  ...Source.args,
  inline: true
}

export const Toggle = Template.bind({})

Toggle.args = {
  ...Source.args,
  toggle: true
}
