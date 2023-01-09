import React from 'react'
import { render, screen } from '@testing-library/react'
import SmartLink from './SmartLink'

describe('Components/SmartLink', () => {
  it('should render nothing by default', () => {
    const { container } = render(<SmartLink />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <button /> when no 'href' is set", () => {
    render(<SmartLink>Content</SmartLink>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it("should render an <a /> when internal 'href' is set", () => {
    render(
      <SmartLink href="/" target="_blank">
        children
      </SmartLink>
    )

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).not.toHaveAttribute('target')
  })

  it("should render an <a /> when external 'href' is set", () => {
    render(<SmartLink href="https://test.com/">Content</SmartLink>)

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).not.toHaveAttribute('rel')
  })

  it("should add 'rel=noopener noreferrer' when external 'href' and 'target=blank' is set", () => {
    render(
      <SmartLink href="https://test.com/" target="_blank">
        Content
      </SmartLink>
    )

    const link = screen.getByRole('link')

    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
