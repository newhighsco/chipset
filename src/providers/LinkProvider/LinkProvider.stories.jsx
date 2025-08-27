import React from 'react'

import { LinkProvider, useLink } from '..'

export default {
  component: LinkProvider,
  parameters: { chromatic: { disable: true } }
}

const Link = props => {
  const renderLink = useLink()

  return renderLink(props)
}

export const Source = {
  args: {
    renderLink: props => <button {...props} />,
    children: <Link href="/">Content</Link>
  }
}
