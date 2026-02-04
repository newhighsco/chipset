import { snapshot } from '@newhighsco/storybook-preset'

import { Navigation } from '..'

export default { component: Navigation }

export const Source = {
  args: {
    links: [
      { href: '/foo', children: 'Foo' },
      {
        href: '/bar',
        children: 'Bar',
        links: [
          { href: '/foo', children: 'Foo' },
          { href: '/bar', children: 'Bar' }
        ]
      },
      { href: '/fizz', children: 'Fizz' },
      { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
    ]
  }
}

export const Block = { ...Source }

export const Inline = { args: { ...Source.args, inline: true } }

export const Toggle = { args: { ...Source.args, toggle: true } }

export const Snapshot = snapshot([Block, Inline, Toggle])
