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
    render(
      <Icon id="icon">
        <svg />
      </Icon>
    )

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden')
  })

  it("should render a <VisuallyHidden /> when 'alt' is set", () => {
    render(
      <Icon alt="foo">
        <svg />
      </Icon>
    )

    const icon = screen.getByRole('img', { name: 'foo' })

    expect(icon).toBeInTheDocument()
    expect(icon).not.toHaveAttribute('aria-hidden')
  })

  it('should set correct classNames', () => {
    render(
      <Icon id="icon" theme={theme} width={20} height="10px">
        <svg />
      </Icon>
    )

    const icon = screen.getByTestId('icon')

    expect(icon).toHaveClass('root')
    expect(icon).toHaveStyle({ width: '20px', height: '10px' })
  })
})
