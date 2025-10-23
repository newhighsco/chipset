import { Navigation } from '..'

export default { component: Navigation }

export const Source = {
  args: {
    links: [
      { href: '/foo', children: 'Foo' },
      { href: '/bar', children: 'Bar' },
      { href: '/fizz', children: 'Fizz' },
      { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
    ]
  },
  parameters: { chromatic: { disable: true } }
}

export const Block = { args: Source.args }

export const Inline = { args: { ...Source.args, inline: true } }

export const Toggle = { args: { ...Source.args, toggle: true } }
