import React from 'react'
import { render, screen } from '@testing-library/react'
import { Source } from './Icon.stories'

describe('Components/Icon', () => {
  it('should render nothing by default', () => {
    render(<Source />)
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it("should render a <span /> when 'children' is set", () => {
    const { container } = render(<Source {...Source.args} />)
    expect(container.firstChild.childNodes.length).toEqual(1)

    const icon = screen.getByText('Content')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).not.toHaveAttribute('role')
    expect(icon).not.toHaveAttribute('aria-label')
    expect(icon).not.toHaveAttribute('style')
  })

  it("should render a <VisuallyHidden /> when 'alt' is set", () => {
    const { container } = render(<Source {...Source.args} alt="Alt text" />)
    expect(container.firstChild.childNodes.length).toEqual(2)

    const icon = screen.getByRole('img')
    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-label', 'Alt text')
    expect(icon).not.toHaveAttribute('aria-hidden')
    expect(screen.getByText('Alt text')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Source
        {...Source.args}
        theme={{ root: 'root', customSize: 'customSize' }}
        width={20}
        height="10px"
        className="className"
      />
    )
    expect(container.firstChild).toHaveClass('root customSize className')
    expect(container.firstChild).toHaveAttribute(
      'style',
      'width: 20px; height: 10px; line-height: 10px;'
    )
  })
})
