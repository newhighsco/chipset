import React from 'react'
import { render, screen } from '@testing-library/react'
import Prose from './Prose'

describe('Component/Prose', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Prose />)

    expect(container.firstChild).toBeNull()
  })

  it("should render correctly when 'children' is set", () => {
    render(
      <Prose>
        <p>Content</p>
      </Prose>
    )

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it("should render correctly when 'html' is set", () => {
    render(<Prose html="<p>Content</p>" />)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
