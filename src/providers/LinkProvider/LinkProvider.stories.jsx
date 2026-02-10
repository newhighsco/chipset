import React from 'react'

import { Prose } from '../..'
import { LinkProvider, useLink } from '..'

export default {
  component: LinkProvider,
  decorators: [
    Story => (
      <Prose>
        <Story />
      </Prose>
    )
  ]
}

const Link = props => {
  const renderLink = useLink()

  return renderLink(props)
}

export const Source = {
  args: {
    renderLink: props => <a {...props} role="button" />,
    children: <Link href="https://example.com/">Content</Link>
  }
}

export const Example = { args: Source.args }
