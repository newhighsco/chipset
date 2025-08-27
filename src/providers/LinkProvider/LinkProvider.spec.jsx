import { render, screen } from '@testing-library/react'
import React from 'react'

import { LinkProvider, useLink } from '.'

const Link = props => {
  const renderLink = useLink()

  return renderLink(props)
}

describe('Provider/LinkProvider', () => {
  it('should render an <a /> by default', () => {
    render(<Link href="/">Content</Link>)

    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it("should throw error when 'renderLink' is not set", () => {
    expect(() =>
      render(
        <LinkProvider>
          <Link />
        </LinkProvider>
      )
    ).toThrow(/missing 'renderLink'/)
  })

  it("should throw error when 'renderLink' is not set", () => {
    render(
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      <LinkProvider renderLink={props => <a {...props} role="button" />}>
        <Link href="/">Content</Link>
      </LinkProvider>
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
