import { render, screen } from '@testing-library/react'
import React from 'react'

import Icon from './Icon'

const theme = { root: 'root', customSize: 'customSize' }

describe('Components/Icon', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Icon />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <span /> when 'children' is set", () => {
    const { container } = render(<Icon>Content</Icon>)

    expect(container.firstChild).toHaveAttribute('aria-hidden')
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it("should render a <VisuallyHidden /> when 'alt' is set", () => {
    const { container } = render(<Icon alt="foo">Content</Icon>)

    expect(container.firstChild).not.toHaveAttribute('aria-hidden')
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByLabelText('foo')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Icon theme={theme} width={20} height="10px">
        Content
      </Icon>
    )

    expect(container.firstChild).toHaveClass('root customSize')
    expect(container.firstChild).toHaveStyle({
      width: '20px',
      height: '10px',
      lineHeight: '10px'
    })
  })
})
