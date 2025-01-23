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

    const toggle = screen.getByRole('button')
    const content = screen.getByText('Content')

    expect(toggle).toBeInTheDocument()
    expect(content).not.toBeVisible()

    fireEvent.click(toggle)

    expect(content).toBeVisible()

    fireEvent.click(toggle)

    expect(content).toBeVisible()
  })

  it("should render correctly when 'heading' is set", () => {
    render(<Tooltip toggle="Toggle" heading={<h2>Heading</h2>} />)

    const toggle = screen.getByRole('button')
    const heading = screen.getByText('Heading')

    expect(toggle).toBeInTheDocument()
    expect(heading).not.toBeVisible()

    fireEvent.click(toggle)

    expect(heading).toBeVisible()

    fireEvent.click(toggle)

    expect(heading).not.toBeVisible()
  })

  it('should handle additional events when `manual` is `false`', () => {
    const { container } = render(
      <Tooltip toggle="Toggle" manual={false}>
        Content
      </Tooltip>
    )

    const wrapper = container.firstChild
    const content = screen.getByText('Content')

    expect(content).not.toBeVisible()

    fireEvent.mouseOver(wrapper)

    expect(content).toBeVisible()

    fireEvent.mouseOver(wrapper)

    expect(content).not.toBeVisible()
  })

  it('should display the contents when `hidden` is false', () => {
    render(<Tooltip hidden={false}>Content</Tooltip>)

    expect(screen.getByText('Content')).toBeVisible()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Tooltip theme={theme} className="foo">
        Content
      </Tooltip>
    )

    expect(container.firstChild).toHaveClass('root foo')
  })
})
