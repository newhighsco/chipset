import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Tooltip from './Tooltip'
import theme from './Tooltip.module.scss'

describe('Components/Tooltip', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Tooltip />)

    expect(container.firstChild).toBeNull()
  })

  it("should render correctly when 'children' is set", () => {
    render(<Tooltip toggle="Toggle">Content</Tooltip>)

    const toggle = screen.getByRole('button', { expanded: false })

    expect(toggle).toBeInTheDocument()
    expect(
      screen.getByRole('tooltip', { description: 'Content' })
    ).toBeInTheDocument()

    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it("should render correctly when 'heading' is set", () => {
    render(<Tooltip toggle="Toggle" heading={<h2>Heading</h2>} />)

    expect(screen.getByRole('button', { expanded: false })).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should handle additional events when `manual` is `false`', () => {
    const { container } = render(
      <Tooltip toggle="Toggle" manual={false}>
        Content
      </Tooltip>
    )

    const wrapper = container.firstChild
    const toggle = screen.getByRole('button', { expanded: false })

    expect(toggle).toBeInTheDocument()
    expect(
      screen.getByRole('tooltip', { description: 'Content' })
    ).toBeInTheDocument()

    fireEvent.mouseOver(wrapper)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseOver(wrapper)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('should display the contents when `hidden` is false', () => {
    render(
      <Tooltip toggle="Toggle" hidden={false}>
        Content
      </Tooltip>
    )

    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument()
    expect(
      screen.getByRole('tooltip', { description: 'Content' })
    ).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    render(
      <Tooltip theme={theme} className="foo">
        Content
      </Tooltip>
    )

    expect(screen.getByRole('tooltip')).toHaveClass('root foo', { exact: true })
  })
})
