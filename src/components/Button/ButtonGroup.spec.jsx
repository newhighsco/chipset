import { render, screen } from '@testing-library/react'
import React from 'react'

import theme from './Button.module.scss'
import ButtonGroup from './ButtonGroup'

describe('Components/ButtonGroup', () => {
  it('should render nothing by default', () => {
    const { container } = render(<ButtonGroup />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<ButtonGroup>Content</ButtonGroup>)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    render(
      <ButtonGroup theme={theme} className="foo">
        Content
      </ButtonGroup>
    )

    expect(screen.getByText('Content')).toHaveClass('group foo', {
      exact: true
    })
  })
})
