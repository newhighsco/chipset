import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import Icon from '../Icon'
import Tooltip from './Tooltip'
import theme from './Tooltip.module.scss'

describe('Components/Tooltip', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Tooltip />)

    expect(container.firstChild).toBeNull()
  })

  it("should render correctly when 'children' is set", () => {
    render(<Tooltip toggle="Toggle">Content</Tooltip>)

    const toggle = screen.getByRole('button', {
      name: 'Toggle',
      description: 'Content',
      expanded: false
    })

    expect(toggle).toBeInTheDocument()
    expect(screen.getByRole('tooltip', { name: 'Content' })).toBeInTheDocument()

    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it("should render correctly when 'described' is false", () => {
    render(
      <Tooltip toggle={<Icon name="material-symbols:menu" />} described={false}>
        Content
      </Tooltip>
    )

    expect(
      screen.getByRole('button', {
        name: 'Content',
        description: '',
        expanded: false
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('tooltip', { name: 'Content' })).toBeInTheDocument()
  })

  it("should render correctly when 'heading' is set", () => {
    render(<Tooltip toggle="Toggle" heading={<h2>Heading</h2>} />)

    expect(
      screen.getByRole('button', {
        name: 'Toggle',
        description: 'Heading',
        expanded: false
      })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should handle additional events when `manual` is `false`', () => {
    const { container } = render(
      <Tooltip toggle="Toggle" manual={false}>
        Content
      </Tooltip>
    )

    const wrapper = container.firstChild
    const toggle = screen.getByRole('button', {
      name: 'Toggle',
      description: 'Content',
      expanded: false
    })

    expect(toggle).toBeInTheDocument()
    expect(screen.getByRole('tooltip', { name: 'Content' })).toBeInTheDocument()

    fireEvent.mouseOver(wrapper)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.mouseOut(wrapper)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    fireEvent.focus(wrapper)

    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    fireEvent.blur(wrapper)

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('should display the contents when `hidden` is false', () => {
    render(
      <Tooltip toggle="Toggle" hidden={false}>
        Content
      </Tooltip>
    )

    expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument()
    expect(screen.getByRole('tooltip', { name: 'Content' })).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    render(
      <Tooltip theme={theme} className="foo" id="tooltip">
        Content
      </Tooltip>
    )

    expect(screen.getByTestId('tooltip')).toHaveClass('root foo', {
      exact: true
    })
  })
})
