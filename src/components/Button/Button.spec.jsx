import { render, screen } from '@testing-library/react'
import React from 'react'

import Button from './Button'
import theme from './Button.module.scss'

describe('Components/Button', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Button />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <SmartLink /> when 'children' is set", () => {
    render(<Button>Content</Button>)

    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    render(
      <Button theme={theme} active className="foo">
        Content
      </Button>
    )

    expect(screen.getByRole('button')).toHaveClass('root active foo', {
      exact: true
    })
  })
})
