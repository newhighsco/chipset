import { render, screen } from '@testing-library/react'
import React from 'react'

import Card from './Card'
import theme from './Card.module.scss'

describe('Components/Card', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Card />)

    expect(container.firstChild).toBeNull()
  })

  it("should render a <div /> when 'children' is set", () => {
    render(<Card>Content</Card>)

    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })

  it("should render correct [role] when 'href' is set", () => {
    render(
      <Card href="https://example.com/" heading={<h2>Heading</h2>}>
        Content
      </Card>
    )

    expect(screen.getAllByRole('link')).toHaveLength(2)
    expect(screen.getByRole('heading')).toBeInTheDocument()
  })

  it('should set correct classNames', () => {
    const { container } = render(
      <Card theme={theme} className="foo">
        Content
      </Card>
    )

    expect(container.firstChild).toHaveClass('root foo', { exact: true })
  })
})
