import React from 'react'

import { Prose } from '../..'
import { LinkProvider, useLink } from '..'

export default { component: LinkProvider }

const Link = props => {
  const renderLink = useLink()

  return renderLink(props)
}

export const Source = {
  args: {
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    renderLink: props => <a {...props} role="button" />,
    children: <Link href="https://example.com/">Content</Link>
  },
  parameters: { chromatic: { disable: true } }
}

export const Example = {
  args: Source.args,
  decorators: [
    Story => (
      <Prose>
        <Story />
      </Prose>
    )
  ]
}
