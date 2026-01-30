import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Navigation from './Navigation'

const links = [
  { href: '/foo', children: 'Foo' },
  { href: '/bar', children: 'Bar' },
  { href: '/fizz', children: 'Fizz' },
  { href: 'https://buzz.com', target: '_blank', children: 'Buzz' }
]

describe('Components/Navigation', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Navigation />)

    expect(container.firstChild).toBeNull()
  })

  it("should render <nav /> when 'links' are passed", () => {
    render(<Navigation links={links} />)

    expect(screen.getByRole('heading')).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(4)
  })

  it("should render the correct component when 'renderLink' is set", () => {
    render(
      <Navigation
        links={links}
        renderLink={({ href, children }, index) => (
          <span id={index} data-href={href}>
            {children}
          </span>
        )}
      />
    )

    expect(screen.getAllByRole('menuitem')).toHaveLength(4)
  })

  it("should render a <Button /> with 'toggle' is set", () => {
    render(<Navigation links={links} toggle />)

    const button = screen.getByRole('button', { expanded: false })

    expect(button).toBeInTheDocument()
    expect(screen.getByRole('menubar')).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Show Navigation' })
    ).toBeInTheDocument()

    fireEvent.click(button)

    expect(
      screen.getByRole('img', { name: 'Hide Navigation' })
    ).toBeInTheDocument()
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
