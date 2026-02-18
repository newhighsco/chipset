import { render, screen } from '@testing-library/react'
import React from 'react'

import { ImageSvg } from '../../__mocks__/fixtures'
import Icon from './Icon'

const theme = { root: 'root' }

describe('Components/Icon', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Icon />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <span /> when 'children' is set", () => {
    render(
      <Icon id="icon">
        <ImageSvg />
      </Icon>
    )

    const icon = screen.getByTestId('icon')

    expect(icon).toBeInTheDocument()
    expect(icon).toHaveAttribute('aria-hidden')
  })

  it("should render a <VisuallyHidden /> when 'alt' is set", () => {
    render(
      <Icon alt="foo">
        <ImageSvg />
      </Icon>
    )

    const icon = screen.getByRole('img', { name: 'foo' })

    expect(icon).toBeInTheDocument()
    expect(icon).not.toHaveAttribute('aria-hidden')
  })

  it('should set correct classNames', () => {
    render(
      <Icon id="icon" className="foo" theme={theme} width={20} height="10px">
        <ImageSvg />
      </Icon>
    )

    const icon = screen.getByTestId('icon')

    expect(icon).toHaveClass('root foo', { exact: true })
    expect(icon).toHaveStyle({ width: '20px', height: '10px' })
  })
})
